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
  const tokenHash = searchParams.get("token_hash");
  const code = searchParams.get("code");
  const isPasswordReset = type === "recovery";
  const isEmailConfirmation = type === "signup";

  // Auto-process magic links when component loads
  useEffect(() => {
    const processAuthAction = async () => {
      // Check if we have the minimum required parameters
      if (!type) {
        setError("Invalid or missing authentication type");
        setIsProcessing(false);
        return;
      }

      try {
        // For web-based email confirmation with raw token, we need to use verifyOtp differently
        if (token && (isEmailConfirmation || isPasswordReset)) {
          // First try the simplest approach - just exchange the token as a session code
          try {
            const { error: exchangeError } =
              await supabase.auth.exchangeCodeForSession(token);

            if (!exchangeError) {
              // Success with code exchange
              setSuccess(true);
              setTimeout(() => {
                router.push("/");
              }, 3000);
              return;
            }
          } catch (exchangeErr) {
            // Code exchange failed, trying other methods
          }

          // If code exchange fails, try with token_hash
          try {
            const { error: hashError } = await supabase.auth.verifyOtp({
              token_hash: token,
              type: type as "signup" | "recovery",
            });

            if (!hashError) {
              // Success with token_hash
              if (isPasswordReset) {
                setIsProcessing(false);
                return;
              } else {
                setSuccess(true);
                setTimeout(() => {
                  router.push("/");
                }, 3000);
              }
              return;
            }
          } catch (hashErr) {
            // Token hash verification failed, trying manual session
          }

          // If all else fails, try to manually set the session using the current URL
          // This handles the case where the magic link just needs to establish a session
          try {
            const { data, error: sessionError } =
              await supabase.auth.getSession();

            if (sessionError) {
              console.error("Session retrieval failed:", sessionError);
              setError(
                "Authentication failed. The link may be invalid, expired, or already used. Please request a new link."
              );
            } else if (data.session) {
              // Already have a session, mark as success
              setSuccess(true);
              setTimeout(() => {
                router.push("/");
              }, 3000);
            } else {
              setError(
                "Unable to verify email. Please try opening the link from your email client or request a new confirmation email."
              );
            }
          } catch (sessionErr) {
            console.error("All verification methods failed:", sessionErr);
            setError(
              "Authentication failed. The link may be invalid, expired, or already used. Please request a new link."
            );
          }
        }
        // First, try to exchange the code if present (newer Supabase auth flow)
        else if (code) {
          const { error: exchangeError } =
            await supabase.auth.exchangeCodeForSession(code);

          if (exchangeError) {
            console.error("Code exchange error:", exchangeError);
            setError(`Authentication failed: ${exchangeError.message}`);
          } else {
            setSuccess(true);
            setTimeout(() => {
              router.push("/");
            }, 3000);
          }
        }
        // Try token_hash parameter (direct hash)
        else if (tokenHash) {
          const { error: verifyError } = await supabase.auth.verifyOtp({
            token_hash: tokenHash,
            type: type as "signup" | "recovery",
          });

          if (verifyError) {
            console.error("Token hash verification error:", verifyError);
            setError(`Verification failed: ${verifyError.message}`);
          } else {
            if (isPasswordReset) {
              // For password reset, don't mark as success yet - show the form
              setIsProcessing(false);
              return;
            } else {
              setSuccess(true);
              setTimeout(() => {
                router.push("/");
              }, 3000);
            }
          }
        }
        // No authentication parameters found
        else {
          setError("Invalid authentication link. Missing required parameters.");
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
    tokenHash,
    code,
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
                  className="block w-full rounded-lg bg-white px-6 py-3 font-hackathoneCabinetGrotesk font-bold text-black transition-colors hover:bg-white/85"
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
                  className="block w-full rounded-lg bg-white px-6 py-3 font-hackathoneCabinetGrotesk font-bold text-black transition-colors hover:bg-white/85"
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
                  className="w-full rounded-lg bg-white px-6 py-3 font-hackathoneCabinetGrotesk font-bold text-black transition-colors hover:bg-white/85 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <div className="mr-3 size-5 animate-spin rounded-full border-2 border-black/30 border-t-black"></div>
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
                  className="inline-block rounded-lg bg-white/10 px-4 py-2 font-hackathoneSFProDisplay text-sm text-white transition-colors hover:bg-white/20"
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
                  className="block w-full rounded-lg bg-white px-6 py-3 font-hackathoneCabinetGrotesk font-bold text-black transition-colors hover:bg-white/85"
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
