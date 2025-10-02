// hooks/useAuthGuard.ts
"use client";
import { type User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/lib/contexts/AuthContext";

interface UseAuthGuardReturn {
  user: User | null;
  loading: boolean;
}

export const useAuthGuard = (
  redirectTo: string = "/login"
): UseAuthGuardReturn => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push(redirectTo);
    }
  }, [user, loading, router, redirectTo]);

  return { user, loading };
};
