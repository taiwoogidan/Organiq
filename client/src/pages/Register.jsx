import { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faBuilding,
  faArrowRight,
  faCircleCheck,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordRequirements = [
    {
      label: "At least 8 characters",
      test: password.length >= 8,
    },
    {
      label: "At least one uppercase letter (A-Z)",
      test: /[A-Z]/.test(password),
    },
    {
      label: "At least one lowercase letter (a-z)",
      test: /[a-z]/.test(password),
    },
    {
      label: "At least one number (0-9)",
      test: /[0-9]/.test(password),
    },
    {
      label: "At least one special character (!@#$%)",
      test: /[^A-Za-z0-9]/.test(password),
    },
  ];

  const passedRequirements = passwordRequirements.filter(
    (requirement) => requirement.test,
  ).length;

  const passwordStrength =
    passedRequirements <= 2
      ? "Weak"
      : passedRequirements === 3
        ? "Fair"
        : passedRequirements === 4
          ? "Good"
          : "Strong";

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    // Check password requirements
    if (passedRequirements !== passwordRequirements.length) {
      setError("Please meet all password requirements.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const user = {
        name,
        phone,
        email,
        location,
        password,
      };

      const response = await fetch(
        `${import.meta.env.VITE_SERVER}/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Organization registered successfully!");

        setName("");
        setPhone("");
        setEmail("");
        setLocation("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-100";

  const labelStyle = "mb-2 block text-sm font-semibold text-slate-700";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F8F5] px-5 py-12">
      <div className="w-full max-w-xl rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-700">
            <Link to={"/"}>
              <FontAwesomeIcon icon={faBuilding} className="text-2xl" />
            </Link>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Register Your Organization
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Create your organization's account and become part of the Organiq
            skills development initiative.
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

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Organization Name */}
          <div>
            <label htmlFor="name" className={labelStyle}>
              Organization Name
            </label>

            <input
              type="text"
              id="name"
              placeholder="Enter organization name"
              className={inputStyle}
              required
              autoComplete="organization"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelStyle}>
              Phone Number
            </label>

            <input
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              className={inputStyle}
              required
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelStyle}>
              Email Address
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter organization email"
              className={inputStyle}
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="location" className={labelStyle}>
              Organization Location
            </label>

            <input
              type="text"
              id="location"
              placeholder="Enter organization address"
              className={inputStyle}
              required
              autoComplete="street-address"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className={labelStyle}>
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Create a strong password"
                className={`${inputStyle} pr-12`}
                required
                autoComplete="new-password"
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

            <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
              <p className="mb-3 text-xs font-bold text-slate-700">
                Your password must contain:
              </p>

              <div className="space-y-2">
                {passwordRequirements.map((requirement) => (
                  <div
                    key={requirement.label}
                    className={`flex items-center gap-2 text-xs transition-colors ${
                      requirement.test ? "text-green-700" : "text-slate-500"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={requirement.test ? faCircleCheck : faCircle}
                      className="text-sm"
                    />

                    <span>{requirement.label}</span>
                  </div>
                ))}
              </div>

              {password.length > 0 && (
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600">
                      Password strength
                    </span>

                    <span
                      className={`text-xs font-bold ${
                        passedRequirements === 5
                          ? "text-green-700"
                          : passedRequirements >= 3
                            ? "text-yellow-600"
                            : "text-red-500"
                      }`}
                    >
                      {passwordStrength}
                    </span>
                  </div>

                  <div className="flex gap-1.5">
                    {passwordRequirements.map((requirement, index) => (
                      <div
                        key={requirement.label}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${
                          index < passedRequirements
                            ? passedRequirements === 5
                              ? "bg-green-600"
                              : passedRequirements >= 3
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className={labelStyle}>
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Re-enter your password"
                className={`${inputStyle} pr-12`}
                required
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-green-700"
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                />
              </button>
            </div>

            {confirmPassword.length > 0 && (
              <p
                className={`mt-2 flex items-center gap-2 text-xs font-semibold ${
                  passwordsMatch ? "text-green-700" : "text-red-500"
                }`}
              >
                <FontAwesomeIcon
                  icon={passwordsMatch ? faCircleCheck : faCircle}
                />

                {passwordsMatch ? "Passwords match" : "Passwords do not match"}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={
              loading ||
              passedRequirements !== 5 ||
              password !== confirmPassword
            }
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-green-700 px-5 py-4 text-sm font-bold text-white transition-all hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Organization Account"}

            {!loading && <FontAwesomeIcon icon={faArrowRight} />}
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-green-700 hover:text-green-800"
          >
            Login
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
