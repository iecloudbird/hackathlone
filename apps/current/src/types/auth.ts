/* eslint-disable @typescript-eslint/no-explicit-any */
// types/auth.ts
import { type User } from "@supabase/supabase-js";

export interface UserProfile {
  id: string;
  email: string;
  phone?: string;
  role?: string;
  full_name?: string;
  bio?: string;
  dietary_preferences?: string;
  tshirt_size?: string;
  job_role?: string;
  skills?: string[];
  qr_code?: string;
  avatar_url?: string;
  created_at?: string;
  updated_at?: string;
}

export interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signUp: (
    email: string,
    password: string
  ) => Promise<{ data: any; error: string | null }>;
  signIn: (
    email: string,
    password: string
  ) => Promise<{ data: any; error: string | null }>;
  signOut: () => Promise<{ error: string | null }>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  verifyOtp: (
    email: string,
    token: string,
    type: string,
    password?: string | null
  ) => Promise<{ error: string | null }>;
  updateUserProfile: (
    updates: Partial<UserProfile>,
    isOnboarding?: boolean
  ) => Promise<{ data: UserProfile | null; error: string | null }>;
  loadUserProfile: () => Promise<void>;
}

export interface AuthResponse {
  data: any;
  error: string | null;
}

export interface ProfileUpdateData extends Partial<UserProfile> {
  updated_at?: string;
}
