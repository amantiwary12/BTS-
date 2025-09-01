import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState(null);
  const [retryAfter, setRetryAfter] = useState(null);
  const navigate = useNavigate();

  // Countdown timer for rate limiting
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    let timer;
    if (retryAfter && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setRetryAfter(null);
            setError("");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [retryAfter, countdown]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in both Username and Password");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://rp-875v.onrender.com/api/auth/login",
        {
          username,
          password,
        },
        {
          timeout: 10000,
        }
      );

      // If login is successful and we get a valid response
      if (response.data && response.status >= 200 && response.status < 300) {
        // Store the token
        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token);
        }
        if (response.data.user) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }

        // Navigate to home only after successful validation
        navigate("/home");
      } else {
        setError("Invalid response from server");
      }
    } catch (error) {
      if (error.response) {
        // Handle rate limiting
        if (error.response.status === 429) {
          const retryAfter = error.response.headers["retry-after"] || 15;
          setRetryAfter(parseInt(retryAfter));
          setCountdown(parseInt(retryAfter));
          setError(
            `Too many attempts. Please try again in ${retryAfter} seconds.`
          );
        }
        // Handle other errors
        else if (error.response.status === 401) {
          setError("Invalid username or password");
        } else {
          setError("Server error. Please try again later.");
        }

        // Update remaining attempts if provided
        if (error.response.headers["x-ratelimit-remaining"]) {
          setRemainingAttempts(error.response.headers["x-ratelimit-remaining"]);
        }
      } else if (error.request) {
        setError("Network error. Please check your connection.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-850 rounded-xl shadow-2xl border border-gray-700 w-full max-w-sm sm:max-w-md p-6 sm:p-8"
      >
        {/* Logo/Header Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white">Secure Login</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Enter your credentials to access the system
          </p>
        </div>

        {/* Rate limit info */}
        {remainingAttempts !== null && (
          <div className="mb-4 text-center text-sm bg-blue-900/30 text-blue-300 py-2 px-4 rounded-md">
            Remaining login attempts:{" "}
            <span className="font-semibold">{remainingAttempts}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 ">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 pl-10 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors text-sm"
                disabled={isLoading || retryAfter}
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 ">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-10 pr-10 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors text-sm"
                disabled={isLoading || retryAfter}
              />

              {/* Show/Hide Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-300 transition-colors "
                disabled={isLoading || retryAfter}
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.227-3.592m13.523 3.592a9.956 9.956 0 012.227 3.592c-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`rounded-lg p-3 text-center text-sm ${
                  error.includes("Too many attempts")
                    ? "bg-amber-900/20 text-amber-300 border border-amber-700/30"
                    : "bg-red-900/20 text-red-300 border border-red-700/30"
                }`}
              >
                {error}
                {countdown > 0 && ` (${countdown}s)`}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading || retryAfter}
            className="w-full py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-850 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background:
                isLoading || retryAfter
                  ? "linear-gradient(to right, #4B5563, #374151)"
                  : "linear-gradient(to right, #2563EB, #1D4ED8)",
            }}
          >
            <span className="flex items-center justify-center text-white">
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Authenticating...
                </>
              ) : retryAfter ? (
                `Try again in ${countdown}s`
              ) : (
                "Sign In"
              )}
            </span>
          </button>
        </form>

       

        {/* Footer */}
        <div className="mt-8 pt-5 border-t border-gray-800">
          <p className="text-xs text-center text-gray-600">
            © {new Date().getFullYear()} Secure Systems Inc. All rights
            reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
