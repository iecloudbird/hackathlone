"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
// import { useAuth } from "@/lib/contexts/AuthContext";
import { createSupabaseClient } from "@/lib/supabase";

interface ValidationErrors {
  password?: string;
  confirmPassword?: string;
}

function AuthActionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // const { user } = useAuth();
  const supabase = createSupabaseClient();

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );
  const [isProcessing, setIsProcessing] = useState<boolean>(true);

  const type = searchParams.get("type"); // 'signup' or 'recovery'
  const token = searchParams.get("token");
  const isPasswordReset = type === "recovery";
  const isEmailConfirmation = type === "signup";

  // Auto-process magic links when component loads
  useEffect(() => {
    const processAuthAction = async () => {
      if (!token || !type) {
        setError("Invalid or missing authentication token");
        setIsProcessing(false);
        return;
      }

      try {
        if (isEmailConfirmation) {
          // For email confirmation, verify the OTP token
          const { error: verifyError } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: "signup",
          });

          if (verifyError) {
            // Handle specific error cases
            const isUrlMismatch =
              verifyError.message?.includes("invalid") ||
              verifyError.message?.includes("expired") ||
              ("status" in verifyError && verifyError.status === 403);

            if (isUrlMismatch) {
              setError(
                "Email confirmation failed. The link may be invalid or expired. Please request a new confirmation email."
              );
            } else {
              setError(`Email confirmation failed: ${verifyError.message}`);
            }
          } else {
            setSuccess(true);
            setTimeout(() => {
              router.push("/");
            }, 3000);
          }
        } else if (isPasswordReset) {
          // For password reset, verify the token but don't complete the process
          // User needs to enter new password
          const { error: verifyError } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: "recovery",
          });

          if (verifyError) {
            console.error("Password reset token error:", verifyError);
            setError("Invalid or expired password reset link.");
          }
          // If no error, show password reset form
        } else {
          setError("Invalid authentication type");
        }
      } catch (err) {
        console.error("Auth action error:", err);
        setError("An unexpected error occurred. Please try again.");
      } finally {
        setIsProcessing(false);
      }
    };

    processAuthAction();
  }, [
    token,
    type,
    isEmailConfirmation,
    isPasswordReset,
    supabase.auth,
    router,
  ]);

  const validatePassword = (passwordValue: string): string | null => {
    if (!passwordValue) return "Password is required";
    if (passwordValue.length < 8)
      return "Password must be at least 8 characters";
    if (!/(?=.*[a-z])/.test(passwordValue)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/(?=.*[A-Z])/.test(passwordValue)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/(?=.*\d)/.test(passwordValue)) {
      return "Password must contain at least one number";
    }
    return null;
  };

  const validateConfirmPassword = (
    confirmPasswordValue: string,
    passwordValue: string
  ): string | null => {
    if (!confirmPasswordValue) return "Please confirm your password";
    if (confirmPasswordValue !== passwordValue) return "Passwords do not match";
    return null;
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};

    const passwordError = validatePassword(password);
    if (passwordError) errors.password = passwordError;

    const confirmPasswordError = validateConfirmPassword(
      confirmPassword,
      password
    );
    if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePasswordReset = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const { error: updateError } = await supabase.auth.updateUser({
        password: password,
      });

      if (updateError) {
        setError(`Failed to update password: ${updateError.message}`);
      } else {
        setSuccess(true);
        // Redirect to home after successful password reset
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Loading state while processing the magic link
  if (isProcessing) {
    return (
      <div className="relative min-h-screen bg-deepSpace text-white">
        <NavbarDemo />
        <div className="flex min-h-screen items-center justify-center p-4 pt-24">
          <div className="w-full max-w-md rounded-2xl border bg-black/80 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] p-8 text-center backdrop-blur-lg">
            <div className="mb-6 text-6xl text-gray-300">⏳</div>
            <h1 className="mb-4 font-hackathoneCabinetGrotesk text-2xl font-bold text-white">
              Processing...
            </h1>
            <p className="font-hackathoneSFProDisplay text-gray-300">
              {isEmailConfirmation
                ? "Confirming your email address..."
                : "Verifying your password reset link..."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Success state
  if (success) {
    return (
      <div className="relative min-h-screen bg-deepSpace text-white">
        <NavbarDemo />
        <div className="flex min-h-screen items-center justify-center p-4 pt-24">
          <div className="w-full max-w-md rounded-2xl border bg-black/80 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] p-8 text-center backdrop-blur-lg">
            <div className="mb-6 text-6xl text-green-400">✓</div>
            <h1 className="mb-4 font-hackathoneCabinetGrotesk text-2xl font-bold text-white">
              {isPasswordReset ? "Password Updated!" : "Email Confirmed!"}
            </h1>
            <p className="mb-6 font-hackathoneSFProDisplay text-gray-300">
              {isPasswordReset
                ? "Your password has been updated successfully. You can now sign in with your new password."
                : "Your email has been confirmed successfully. Welcome to HackAthlone!"}
            </p>
            <div className="flex flex-col gap-4">
              <p className="font-hackathoneSFProDisplay text-sm text-gray-400">
                Redirecting to home page...
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="block w-full rounded-lg bg-gray-600 px-6 py-3 font-hackathoneCabinetGrotesk font-bold text-white transition-colors hover:bg-gray-500"
                >
                  Return to Homepage
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state or password reset form
  return (
    <div className="relative min-h-screen bg-deepSpace text-white">
      <NavbarDemo />
      <div className="flex min-h-screen items-center justify-center p-4 pt-24">
        <div className="w-full max-w-md rounded-2xl border bg-black/80 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] p-8 backdrop-blur-lg">
          {error ? (
            // Error state
            <div className="text-center">
              <div className="mb-6 text-6xl text-red-400">❌</div>
              <h1 className="mb-4 font-hackathoneCabinetGrotesk text-2xl font-bold text-white">
                Authentication Error
              </h1>
              <p className="mb-6 whitespace-pre-line font-hackathoneSFProDisplay text-gray-300">
                {error}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="block w-full rounded-lg bg-gray-600 px-6 py-3 font-hackathoneCabinetGrotesk font-bold text-white transition-colors hover:bg-gray-500"
                >
                  Return to Homepage
                </Link>
              </motion.div>
            </div>
          ) : isPasswordReset ? (
            // Password reset form
            <div>
              <div className="mb-8 text-center">
                <h1 className="mb-2 font-hackathoneCabinetGrotesk text-2xl font-bold text-white">
                  Set New Password
                </h1>
                <p className="font-hackathoneSFProDisplay text-gray-300">
                  Enter your new password to complete the reset process.
                </p>
              </div>

              <form onSubmit={handlePasswordReset} className="space-y-4">
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block font-hackathoneSFProDisplay text-sm font-medium text-white"
                  >
                    New Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    className={`w-full rounded-lg border-2 bg-gray-800/50 px-4 py-3 font-hackathoneSFProDisplay text-white backdrop-blur-sm placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 ${
                      validationErrors.password
                        ? "border-red-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Enter your new password"
                    required
                  />
                  {validationErrors.password && (
                    <p className="mt-2 font-hackathoneSFProDisplay text-sm text-red-400">
                      {validationErrors.password}
                    </p>
                  )}
                  <p className="mt-2 font-hackathoneSFProDisplay text-xs text-gray-400">
                    Must be at least 8 characters with uppercase, lowercase, and
                    number
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block font-hackathoneSFProDisplay text-sm font-medium text-white"
                  >
                    Confirm New Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={loading}
                    className={`w-full rounded-lg border-2 bg-gray-800/50 px-4 py-3 font-hackathoneSFProDisplay text-white backdrop-blur-sm placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 ${
                      validationErrors.confirmPassword
                        ? "border-red-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Confirm your new password"
                    required
                  />
                  {validationErrors.confirmPassword && (
                    <p className="mt-2 font-hackathoneSFProDisplay text-sm text-red-400">
                      {validationErrors.confirmPassword}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className="w-full rounded-lg bg-gray-600 px-6 py-3 font-hackathoneCabinetGrotesk font-bold text-white transition-colors hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400/50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <div className="mr-3 size-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                      Updating Password...
                    </span>
                  ) : (
                    "Update Password"
                  )}
                </motion.button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  href="/"
                  className="font-hackathoneSFProDisplay text-sm text-gray-400 hover:text-gray-300"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            // Default error for invalid type
            <div className="text-center">
              <div className="mb-6 text-6xl text-gray-400">❓</div>
              <h1 className="mb-4 font-hackathoneCabinetGrotesk text-2xl font-bold text-white">
                Invalid Request
              </h1>
              <p className="mb-6 font-hackathoneSFProDisplay text-gray-300">
                This authentication link is not valid or has expired.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="block w-full rounded-lg bg-gray-600 px-6 py-3 font-hackathoneCabinetGrotesk font-bold text-white transition-colors hover:bg-gray-500"
                >
                  Return to Homepage
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AuthActionPage() {
  return (
    <Suspense
      fallback={
        <div className="relative min-h-screen bg-deepSpace text-white">
          <NavbarDemo />
          <div className="flex min-h-screen items-center justify-center">
            <div className="text-lg">Loading...</div>
          </div>
        </div>
      }
    >
      <AuthActionContent />
    </Suspense>
  );
}
