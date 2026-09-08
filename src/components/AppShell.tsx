import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import type { ReactNode } from "react";
import {
  LayoutDashboard,
  Dumbbell,
  Library,
  Apple,
  LineChart,
  CalendarDays,
  Bot,
  Settings,
  LogOut,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const NAV = [
  { to: "/dashboard", label: "Command center", short: "Home", icon: LayoutDashboard },
  { to: "/workouts", label: "Workout plans", short: "Plans", icon: Dumbbell },
  { to: "/library", label: "Exercise library", short: "Library", icon: Library },
  { to: "/nutrition", label: "Nutrition", short: "Food", icon: Apple },
  { to: "/progress", label: "Progress", short: "Progress", icon: LineChart },
  { to: "/calendar", label: "Calendar", short: "Calendar", icon: CalendarDays },
  { to: "/coach", label: "AI coach", short: "Coach", icon: Bot },
  { to: "/settings", label: "Settings", short: "Settings", icon: Settings },
] as const;

export function AppShell({ children, coachTip }: { children: ReactNode; coachTip?: string }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed top-20 right-0 h-[460px] w-[460px] rounded-full bg-accent/[0.06] blur-3xl" />
      <div className="relative mx-auto grid max-w-[1440px] gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[220px_1fr] lg:py-10">
        <aside className="hidden lg:block">
          <div className="panel sticky top-6 p-3">
            <Link to="/dashboard" className="flex items-center gap-2 px-2 pb-3">
              <span className="grid size-7 place-items-center rounded-md bg-accent font-display text-accent-ink">
                F
              </span>
              <span className="font-display tracking-wide">FITJOURNEY</span>
            </Link>
            <nav className="space-y-1 text-sm">
              {NAV.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  activeProps={{ className: "bg-accent/10 text-accent font-medium" }}
                  inactiveProps={{
                    className: "text-muted-foreground hover:bg-raised/60 hover:text-foreground",
                  }}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 rounded-xl bg-raised/60 p-3">
              <div className="num text-xs text-muted-foreground">AI COACH</div>
              <div className="mt-1 text-xs text-foreground/80">
                {coachTip ?? "Log every set — the plan adapts to what you actually do."}
              </div>
            </div>
            <button
              onClick={signOut}
              className="mt-3 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-raised/60 hover:text-foreground"
            >
              <LogOut className="size-4" aria-hidden="true" />
              Sign out
            </button>
          </div>
        </aside>

        <main className="min-w-0 space-y-6 pb-24 lg:pb-0">{children}</main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-border bg-surface/95 text-[10px] backdrop-blur-md lg:hidden">
        {NAV.slice(0, 5).map(({ to, short, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeProps={{ className: "text-accent" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="flex flex-col items-center gap-1 py-3"
          >
            <Icon className="size-4" aria-hidden="true" />
            {short}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="rise flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow ? <div className="num text-sm text-accent">{eyebrow}</div> : null}
        <h1 className="mt-1 font-display text-3xl uppercase md:text-4xl">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function Disclaimer() {
  return (
    <p className="num max-w-[90ch] text-[11px] leading-relaxed text-muted-foreground/70">
      FitJourney AI provides general fitness guidance only and is not a substitute for professional
      medical advice. Consult a qualified physician or coach before beginning any programme, and stop
      immediately if you feel pain, dizziness or chest discomfort.
    </p>
  );
}
