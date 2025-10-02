/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/contexts/AuthContext.tsx
"use client";
import { type User } from "@supabase/supabase-js";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createSupabaseClient } from "@/lib/supabase";
import {
  type AuthContextType,
  type UserProfile,
  type AuthResponse,
  type ProfileUpdateData,
} from "@/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const supabase = createSupabaseClient();

  // Fetch user profile from your profiles table
  const fetchUserProfile = useCallback(
    async (userId: string): Promise<UserProfile | null> => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select(
            "id, email, phone, role, full_name, bio, dietary_preferences, tshirt_size, job_role, skills, qr_code, avatar_url, created_at, updated_at"
          )
          .eq("id", userId)
          .single();

        if (error) throw error;
        return data as UserProfile;
      } catch (error) {
        console.error("Error fetching profile:", error);
        return null;
      }
    },
    [supabase]
  );

  // Load user profile when user changes
  const loadUserProfile = useCallback(async (): Promise<void> => {
    if (user?.id) {
      const userProfile = await fetchUserProfile(user.id);
      setProfile(userProfile);
    } else {
      setProfile(null);
    }
  }, [user, fetchUserProfile]);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getInitialSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, [supabase.auth]);

  // Load profile when user changes
  useEffect(() => {
    loadUserProfile();
  }, [loadUserProfile, user]);

  // Sign up function matching your Flutter app
  const signUp = async (
    email: string,
    password: string
  ): Promise<AuthResponse> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth_action?type=signup`,
        },
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      let errorMessage =
        "Sign-up failed. Please check your email and try again.";

      if (error.status === 400) {
        errorMessage = "Invalid email or password. Please try again.";
      } else if (error.status === 422) {
        errorMessage =
          "Email already in use or invalid. Please use a different email.";
      } else {
        errorMessage = `Sign-up failed: ${error.message}`;
      }

      return { data: null, error: errorMessage };
    }
  };

  // Sign in function matching your Flutter app
  const signIn = async (
    email: string,
    password: string
  ): Promise<AuthResponse> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      let errorMessage = "Sign-in failed. Please check your credentials.";

      if (error.message.includes("Email not confirmed")) {
        errorMessage =
          "Email not confirmed. Check your email for confirmation mail.";
      } else if (error.code === "invalid_credentials") {
        errorMessage = "Invalid email or password";
      } else {
        errorMessage = `Sign-in failed: ${error.message}`;
      }

      return { data: null, error: errorMessage };
    }
  };

  // Reset password function matching your Flutter app
  const resetPassword = async (
    email: string
  ): Promise<{ error: string | null }> => {
    if (!email) {
      return { error: "Please enter your email address" };
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      return { error: "Please enter a valid email" };
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        email.trim(),
        {
          redirectTo: `${window.location.origin}/auth_action?type=recovery`,
        }
      );

      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      return { error: `Failed to send reset email: ${error.message}` };
    }
  };

  // Verify OTP function matching your Flutter app
  const verifyOtp = async (
    email: string,
    token: string,
    type: string,
    password: string | null = null
  ): Promise<{ error: string | null }> => {
    try {
      const { error } = await supabase.auth.verifyOtp({
        email: email.trim(),
        token,
        type: type === "signup" ? "signup" : "recovery",
      });

      if (error) throw error;

      // Update password for recovery
      if (type === "recovery" && password) {
        const { error: updateError } = await supabase.auth.updateUser({
          password,
        });
        if (updateError) throw updateError;
      }

      return { error: null };
    } catch (error: any) {
      return { error: `Failed to process: ${error.message}` };
    }
  };

  // Sign out function
  const signOut = async (): Promise<{ error: string | null }> => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      return { error: `Failed to sign out: ${error.message}` };
    }
  };

  // Update user profile function matching your Flutter app
  const updateUserProfile = async (
    updates: Partial<UserProfile>,
    isOnboarding: boolean = false
  ): Promise<{ data: UserProfile | null; error: string | null }> => {
    if (!user?.id) {
      throw new Error("No authenticated user");
    }

    try {
      const updateData: ProfileUpdateData = {
        updated_at: new Date().toISOString(),
        ...updates,
      };

      // For onboarding, include ID and email for upsert
      if (isOnboarding) {
        updateData.id = user.id;
        if (user.email) {
          updateData.email = user.email;
        }
      }

      let result;
      if (isOnboarding) {
        // Use upsert for onboarding
        result = await supabase
          .from("profiles")
          .upsert(updateData)
          .select()
          .single();
      } else {
        // Use update for regular profile edits
        result = await supabase
          .from("profiles")
          .update(updateData)
          .eq("id", user.id)
          .select()
          .single();
      }

      if (result.error) throw result.error;

      setProfile(result.data as UserProfile);
      return { data: result.data as UserProfile, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: `Failed to update profile: ${error.message}`,
      };
    }
  };

  const value: AuthContextType = {
    user,
    profile,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    verifyOtp,
    updateUserProfile,
    loadUserProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
