import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faBuilding,
  faArrowRight,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER}/api/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
            rememberMe,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to login. Please try again.");
      }

      setMessage(data.message || "Login successful!");

      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error(error);
      setError(
        error.message || "Unable to connect to the server. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full rounded-lg border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-100";

  const labelStyle = "mb-2 block text-sm font-semibold text-slate-700";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F8F5] px-5 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-700"
          >
            <FontAwesomeIcon icon={faBuilding} className="text-2xl" />
          </Link>

          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Welcome Back
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Login to your organization account and continue empowering skills
            and building futures with Organiq.
          </p>
        </div>

        {message && (
          <div className="mb-5 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className={labelStyle}>
              Email Address
            </label>

            <div className="relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="email"
                id="email"
                placeholder="Enter your organization email"
                className={inputStyle}
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className={labelStyle}>
              Password
            </label>

            <div className="relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className={`${inputStyle} pr-12`}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-green-700"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 accent-green-700"
              />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-green-700 transition-colors hover:text-green-800"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-green-700 px-5 py-4 text-sm font-bold text-white transition-all hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Login to Your Account"}

            {!loading && <FontAwesomeIcon icon={faArrowRight} />}
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-500">
          Don't have an organization account?{" "}
          <Link
            to="/register"
            className="font-bold text-green-700 transition-colors hover:text-green-800"
          >
            Register
          </Link>
        </p>

        <div className="mt-8 border-t border-slate-100 pt-5 text-center">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Organiq. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
