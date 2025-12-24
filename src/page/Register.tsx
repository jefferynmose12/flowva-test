import React, { useState } from "react";
import toast from "react-hot-toast";
import AuthForm from "../components/AuthForm";
import { supabase } from "../supabase-client";

const generateUsername = (name: string) => {
  const base = name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
  const randomNum = Math.floor(100 + Math.random() * 900);
  return `${base}${randomNum}`;
};

const Register: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async ({
    name,
    email,
    password,
  }: {
    name?: string;
    email: string;
    password: string;
  }) => {
    setIsSubmitting(true);
    const toastId = toast.loading("Creating your account...");

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      toast.error(authError.message, { id: toastId });
      setIsSubmitting(false);
      return;
    }

    let username;
    if (name) username = generateUsername(name);

    const { error: profileError } = await supabase.from("users").insert([
      {
        name,
        email,
        username,
      },
    ]);

    if (profileError) {
      toast.error(profileError.message, { id: toastId });
    } else {
      toast.success("Account created successfully!.", { id: toastId });
    }

    setIsSubmitting(false);
  };

  return (
    <AuthForm mode="signup" onSubmit={onSubmit} isSubmitting={isSubmitting} />
  );
};

export default Register;
