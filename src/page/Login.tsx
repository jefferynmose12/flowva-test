import toast from "react-hot-toast";
import AuthForm from "../components/AuthForm";
import { supabase } from "../supabase-client";
import { useState } from "react";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async ({
    email,
    password,
  }: {
    name?: string;
    email: string;
    password: string;
  }) => {
    setIsSubmitting(true);
    const toastId = toast.loading("Logging in...");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message, { id: toastId });
    } else {
      toast.success("Logged in successfully!", { id: toastId });
      //console.log("User data:", data);
    }
    setIsSubmitting(false);
  };
  return (
    <AuthForm mode="login" onSubmit={onSubmit} isSubmitting={isSubmitting} />
  );
};

export default Login;
