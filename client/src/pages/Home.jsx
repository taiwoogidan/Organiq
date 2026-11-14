import { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faXmark,
  faUsers,
  faBuilding,
  faGraduationCap,
  faClipboardList,
  faLayerGroup,
  faCheck,
  faHandshakeAngle,
  faShieldHalved,
  faChartLine,
  faArrowUpRightFromSquare,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

import heroImg from "../assets/img1.jpg";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Training Opportunities", href: "#opportunities" },
];

const steps = [
  {
    number: "01",
    icon: faBuilding,
    title: "Register Your Organization",
    description:
      "Create your organization's account and become part of an initiative committed to practical skills development.",
  },
  {
    number: "02",
    icon: faUsers,
    title: "Enroll Your Participants",
    description:
      "Register individuals who will participate in your organization's training activities and manage their information.",
  },
  {
    number: "03",
    icon: faLayerGroup,
    title: "Register Your Trade",
    description:
      "Select and register the vocational trades your organization offers for the upcoming training program.",
  },
  {
    number: "04",
    icon: faGraduationCap,
    title: "Train and Empower",
    description:
      "Provide practical training and help participants develop valuable skills for a better future.",
  },
];

const features = [
  {
    icon: faBuilding,
    title: "Organization Management",
    description:
      "Manage your organization's profile, contact information and account details from one place.",
  },
  {
    icon: faUsers,
    title: "Participant Management",
    description:
      "Register participants, update their records and keep all trainee information organized.",
  },
  {
    icon: faClipboardList,
    title: "Trade Registration",
    description:
      "Register the vocational trades your organization intends to offer in upcoming programs.",
  },
  {
    icon: faChartLine,
    title: "Organized Dashboard",
    description:
      "Get a clear overview of your participants, registered trades and important activities.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-white">
              <FontAwesomeIcon icon={faSeedling} className="text-lg" />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                organi<span className="text-green-700">q</span>
              </h1>
              <p className="-mt-1 text-[9px] font-semibold uppercase tracking-[2px] text-slate-400">
                Skills. Growth. Opportunity.
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-green-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <Link
              to="/login"
              className="text-sm font-bold text-slate-700 transition-colors hover:text-green-700"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-green-800"
            >
              Register Organization
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-lg lg:hidden sm:px-8">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-green-50 hover:text-green-700"
                >
                  {item.label}
                </a>
              ))}

              <div className="my-3 border-t border-slate-100" />

              <Link
                to="/organization/login"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                Organization Login
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3.5 text-sm font-bold text-white hover:bg-green-800"
              >
                Register Organization
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </nav>
          </div>
        )}
      </header>
      <section id="home" className="relative scroll-mt-24 bg-[#F7FAF7]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          {/* Hero Content */}
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-green-800">
                Free Skills Development Initiative
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[58px]">
              Transforming Potential Into{" "}
              <span className="text-green-700">Practical Skills.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Organiq empowers organizations to make a difference by providing a
              structured platform to register participants, manage trainees, and
              deliver free vocational training across different trades.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Together, we can equip individuals with practical skills, create
              opportunities and build a more capable workforce.
            </p>

            {/* Hero Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/organization/register"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-green-700 px-7 py-4 text-sm font-bold text-white shadow-md shadow-green-900/10 transition-all hover:-translate-y-0.5 hover:bg-green-800"
              >
                Register Your Organization
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition-all hover:border-green-600 hover:text-green-700"
              >
                Discover How It Works
              </a>
            </div>

            {/* Small Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-slate-200 pt-7">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-sm text-green-700"
                />
                <span className="text-xs font-semibold text-slate-600">
                  Free Training Initiative
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-sm text-green-700"
                />
                <span className="text-xs font-semibold text-slate-600">
                  Practical Skills
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-green-100/80 blur-2xl" />
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-green-100/80 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border-[7px] border-white shadow-xl shadow-slate-900/10">
              <img
                src={heroImg}
                alt="Participants developing practical vocational skills"
                className="h-[340px] w-full object-cover sm:h-[430px] lg:h-[490px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="text-xl"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-slate-900">
                      Skills That Create Opportunities
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Building a better future through practical learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[2px] text-green-700">
              About Organiq
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Creating Opportunities Through Skills Development.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              We believe that everyone deserves an opportunity to learn a
              valuable skill and build a better future.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-500 sm:text-base">
              Organiq provides a platform where organizations can participate in
              a free training initiative by registering their institutions,
              enrolling trainees and offering practical training in their
              respective areas of expertise. By bringing organizations and skill
              development together, we aim to make vocational education more
              accessible, organized and impactful.
            </p>

            <Link
              to="/organization/register"
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-green-700 transition-colors hover:text-green-900"
            >
              Become a Participating Organization
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#F3F8F4] p-7 sm:translate-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-green-700 shadow-sm">
                <FontAwesomeIcon icon={faHandshakeAngle} className="text-xl" />
              </div>
              <h3 className="mt-6 text-lg font-extrabold text-slate-900">
                Collaboration
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Bringing organizations together to create meaningful training
                opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <FontAwesomeIcon icon={faGraduationCap} className="text-xl" />
              </div>
              <h3 className="mt-6 text-lg font-extrabold text-slate-900">
                Skill Development
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Encouraging practical learning that prepares people for
                real-world opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <FontAwesomeIcon icon={faShieldHalved} className="text-xl" />
              </div>
              <h3 className="mt-6 text-lg font-extrabold text-slate-900">
                Organization-led
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                A structured system that allows organizations to coordinate
                their participants and training activities.
              </p>
            </div>

            <div className="rounded-2xl bg-green-700 p-7 text-white sm:translate-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                <FontAwesomeIcon icon={faSeedling} className="text-xl" />
              </div>
              <h3 className="mt-6 text-lg font-extrabold">Real Impact</h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                Supporting an initiative that helps individuals discover their
                potential and grow their abilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="how-it-works"
        className="scroll-mt-24 bg-[#F7FAF7] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[2px] text-green-700">
              The Process
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              A Simple Process. A Meaningful Impact.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Getting involved is straightforward. Organizations can register,
              enroll participants and coordinate their vocational training
              activities through Organiq.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                    <FontAwesomeIcon icon={step.icon} className="text-xl" />
                  </div>

                  <span className="text-3xl font-extrabold text-slate-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-extrabold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="opportunities"
        className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[2px] text-green-700">
                For Participating Organizations
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Everything Your Organization Needs in One Place.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-500">
                From managing participant information to registering vocational
                trades, Organiq gives your organization the tools to keep its
                training activities organized.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Manage your organization's information.",
                  "Add, update and manage participants.",
                  "Register vocational trades for upcoming programs.",
                  "Keep track of your organization's activities.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                    </span>

                    <p className="text-sm font-medium leading-6 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/organization/register"
                className="mt-9 inline-flex items-center gap-3 rounded-lg bg-green-700 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-green-800"
              >
                Get Started Today
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-slate-100 bg-white p-6 transition-all hover:border-green-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                    <FontAwesomeIcon icon={feature.icon} className="text-lg" />
                  </div>

                  <h3 className="mt-5 text-base font-extrabold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      \{" "}
      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-2xl border border-green-100 bg-[#F3F8F4] p-7 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-green-700 shadow-sm">
              <FontAwesomeIcon icon={faShieldHalved} className="text-xl" />
            </div>

            <div>
              <h2 className="text-lg font-extrabold text-slate-900">
                Important Registration Information
              </h2>

              <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
                Participation in the training initiative is free. However,
                individual participants cannot register directly on Organiq.
                Registration and participant enrollment are handled by
                participating organizations. Organizations are responsible for
                registering and managing the individuals they intend to train.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-green-800 px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Subtle decorative shapes */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[35px] border-white/5" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full border-[35px] border-white/5" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[2px] text-green-200">
              Join the Initiative
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Make an Impact?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-green-50 sm:text-base">
              Become part of an initiative focused on practical skills
              development and meaningful opportunities. Register your
              organization and take the first step towards empowering
              individuals through vocational training.
            </p>

            <Link
              to="/organization/register"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-white px-7 py-4 text-sm font-extrabold text-green-800 shadow-md transition-all hover:-translate-y-1 hover:bg-green-50"
            >
              Register Your Organization
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>

            <p className="mt-5 text-xs font-medium text-green-100">
              Already registered?{" "}
              <Link
                to="/organization/login"
                className="font-extrabold text-white underline underline-offset-4 hover:text-green-200"
              >
                Sign in to your account
              </Link>
            </p>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-100 bg-white px-5 pt-14 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-white">
                <FontAwesomeIcon icon={faSeedling} />
              </div>

              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                organi<span className="text-green-700">q</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Empowering organizations to create opportunities, develop
              practical skills and build a better future through vocational
              training.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-slate-900">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-slate-500 transition-colors hover:text-green-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-slate-900">
              For Organizations
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  to="/register"
                  className="text-sm font-medium text-slate-500 hover:text-green-700"
                >
                  Register Organization
                </Link>
              </li>

              <li>
                <Link
                  to="/organization/login"
                  className="text-sm font-medium text-slate-500 hover:text-green-700"
                >
                  Organization Login
                </Link>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="text-sm font-medium text-slate-500 hover:text-green-700"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-slate-100 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Organiq. All rights reserved.
          </p>

          <p className="text-xs font-medium text-slate-500">
            Empowering Skills. Building Futures.
          </p>
        </div>
      </footer>
    </main>
  );
}
