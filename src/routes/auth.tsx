import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

const searchSchema = z.object({
  mode: z.enum(["login", "signup"]).optional(),
});

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Sign in — FitJourney AI" },
      { name: "description", content: "Log in or create your free FitJourney AI account to get a personalised workout and nutrition plan." },
      { property: "og:title", content: "Sign in — FitJourney AI" },
      { property: "og:description", content: "Log in or create your free FitJourney AI account." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { mode } = Route.useSearch();
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(mode === "signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate({ to: "/dashboard", replace: true });
    });
  }, [navigate]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    try {
      if (isSignup) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin, data: { name } },
        });
        if (error) throw error;
        if (!data.session) {
          setSent(true);
          return;
        }
        navigate({ to: "/onboarding" });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/dashboard" });
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setBusy(false);
      toast.error("Google sign-in failed. Try email instead.");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/dashboard" });
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background px-4 py-12 text-foreground">
      <div className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-md bg-accent font-display text-lg text-accent-ink">
            F
          </span>
          <span className="font-display text-lg tracking-wide">
            FITJOURNEY<span className="text-accent">AI</span>
          </span>
        </Link>

        <div className="panel rise mt-8 p-6">
          {sent ? (
            <div className="text-center">
              <h1 className="font-display text-2xl uppercase">Check your email</h1>
              <p className="mt-3 text-sm text-muted-foreground">
                We sent a confirmation link to {email}. Open it to activate your account, then come
                back and log in.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setIsSignup(false);
                }}
                className="num mt-6 text-xs text-accent hover:underline"
              >
                BACK TO LOG IN
              </button>
            </div>
          ) : (
            <>
              <h1 className="font-display text-3xl uppercase">
                {isSignup ? "Start training" : "Welcome back"}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                {isSignup
                  ? "Create your account, then we'll build your plan in two short steps."
                  : "Log in to pick up your programme where you left off."}
              </p>

              <button
                onClick={handleGoogle}
                disabled={busy}
                className="mt-6 w-full rounded-lg border border-border bg-raised/60 py-2.5 text-sm font-medium transition-colors hover:bg-raised disabled:opacity-60"
              >
                Continue with Google
              </button>

              <div className="num my-5 flex items-center gap-3 text-[10px] text-muted-foreground">
                <span className="h-px flex-1 bg-border" /> OR EMAIL <span className="h-px flex-1 bg-border" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {isSignup ? (
                  <Field label="Name" value={name} onChange={setName} type="text" required />
                ) : null}
                <Field label="Email" value={email} onChange={setEmail} type="email" required />
                <Field
                  label="Password"
                  value={password}
                  onChange={setPassword}
                  type="password"
                  required
                />
                <button
                  type="submit"
                  disabled={busy}
                  className="w-full rounded-lg bg-accent py-2.5 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent/90 disabled:opacity-60"
                >
                  {busy ? "Working…" : isSignup ? "Create account" : "Log in"}
                </button>
              </form>

              <button
                onClick={() => setIsSignup((v) => !v)}
                className="num mt-5 w-full text-center text-xs text-muted-foreground transition-colors hover:text-accent"
              >
                {isSignup ? "ALREADY HAVE AN ACCOUNT? LOG IN" : "NEW HERE? CREATE AN ACCOUNT"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="num text-[10px] tracking-wide text-muted-foreground uppercase">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
      />
    </label>
  );
}
