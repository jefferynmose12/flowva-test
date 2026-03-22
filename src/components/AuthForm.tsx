import { useRef, useState, type FormEvent } from "react";
import { Autocomplete } from "@react-google-maps/api";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

interface AuthFormProps {
  mode: "login" | "signup";
  onSubmit: (data: {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }) => void;
  isSubmitting?: boolean;
}

const AuthForm = ({ mode, onSubmit, isSubmitting = false }: AuthFormProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cityAcRef = useRef<any>(null);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    name?: string;
    confirmPassword?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const handleCityPlaceChanged = () => {
    if (!cityAcRef.current) return;
    const place = cityAcRef.current.getPlace();
    if (!place?.address_components) return;
    const cityName = place.address_components.find((c: { types: string[] }) => c.types.includes("locality"))?.long_name || "";
    const state = place.address_components.find((c: { types: string[] }) => c.types.includes("administrative_area_level_1"))?.short_name || "";
    setCity(cityName && state ? `${cityName}, ${state}` : place.formatted_address || "");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!email.includes("@")) newErrors.email = "Please enter a valid email";
    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (mode === "signup") {
      if (!name.trim()) {
        newErrors.name = "Name is required";
      }

      if (!confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (confirmPassword !== password) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    onSubmit({ name, email, password });

    setLoading(false);
  };

  return (
    <div className="min-h-dvh flex justify-center py-5 px-3 items-center bg-linear-to-br from-[#9013fe] to-[#6D28D9]">
      <div className="max-w-md w-full mx-auto py-8 px-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-[#6D28D9] font-semibold mb-2 text-center w-full">
          {mode === "login" ? "Log in to flowva" : "Create Your Account"}
        </h2>

        <p className="text-sm text-[#6B7280] text-center w-full ">
          {mode === "login"
            ? "Log in to receive personalized recommendations"
            : "Sign up to manage your tools"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          {mode === "signup" && (
            <Input
              label="Name"
              value={name}
              onChange={setName}
              error={errors.name}
              placeholder="john"
              onBlur={() => {
                if (!name.trim()) {
                  setErrors((e) => ({ ...e, name: "Name is required" }));
                } else {
                  setErrors((e) => ({ ...e, name: undefined }));
                }
              }}
            />
          )}

          <Input
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="email@example.com"
            error={errors.email}
            onBlur={() => {
              if (!email.includes("@")) {
                setErrors((e) => ({ ...e, email: "Invalid email address" }));
              } else {
                setErrors((e) => ({ ...e, email: undefined }));
              }
            }}
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="********"
            error={errors.password}
            onBlur={() => {
              if (password.length < 6) {
                setErrors((e) => ({
                  ...e,
                  password: "Password must be at least 6 characters",
                }));
              } else {
                setErrors((e) => ({ ...e, password: undefined }));
              }
            }}
          />

          {mode === "signup" && (
            <Input
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="********"
              error={errors.confirmPassword}
              onBlur={() => {
                if (password.length < 6) {
                  setErrors((e) => ({
                    ...e,
                    password: "Password must be at least 6 characters",
                  }));
                } else {
                  setErrors((e) => ({ ...e, password: undefined }));
                }
              }}
            />
          )}

          {mode === "login" && (
            <div className="flex flex-col mb-3">
              <label className="text-gray-700 mb-1 font-medium">
                City <span className="text-gray-400 font-normal text-sm">(optional)</span>
              </label>
              <Autocomplete
                onLoad={(ac: unknown) => (cityAcRef.current = ac)}
                onPlaceChanged={handleCityPlaceChanged}
                options={{ componentRestrictions: { country: "us" }, types: ["(cities)"] }}
              >
                <input
                  type="text"
                  className="w-full placeholder:text-gray-400 text-gray-700 border text-base py-2.5 px-3.5 transition-all ease-linear duration-200 rounded-md outline-none border-[#EDE9FE] focus:border-[#9013fe]"
                  placeholder="Your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Autocomplete>
            </div>
          )}

          <Button type="submit" loading={loading || isSubmitting}>
            {mode === "login" ? "Sign in" : "Sign up Account"}
          </Button>
        </form>

        <p className="mt-4 text-md text-gray-600 text-center font-medium">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-purple-600 hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-purple-600 hover:underline"
              >
                Log In
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
