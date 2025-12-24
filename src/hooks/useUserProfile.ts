import { useEffect, useState } from "react";
import { supabase } from "../supabase-client";
import { useAuth } from "./useAuth";

export interface UserProfile {
  id: string;
  name: string | null;
  email: string;
  username: string;
  count: number;
  days_count: number;
  date: string | null;
  created_at: string;
}

const today = new Date().toISOString().split("T")[0];

export const useUserProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const handleClaimToday = async () => {
    if (!profile) return;

    // Prevent double claim (extra safety)
    if (profile.date === today) return;

    const { error } = await supabase
      .from("users")
      .update({
        count: profile.count + 5,
        days_count: profile.days_count + 1,
        date: today,
      })
      .eq("id", profile.id);

    if (!error) {
      setProfile((prev) =>
        prev
          ? {
              ...prev,
              count: prev.count + 5,
              days_count: prev.days_count + 1,
              date: today,
            }
          : prev
      );
    }
  };

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", user?.email)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setProfile(data);
      }

      setLoading(false);
    };

    loadProfile();
  }, [user]);

  return {
    profile,
    loading,
    error,
    handleClaimToday,
  };
};
