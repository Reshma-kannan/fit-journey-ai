import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FitJourney AI — Train With Intent" },
      {
        name: "description",
        content:
          "Personalised workout splits, macro targets and an AI coach built from your goal, experience level and body details. Free to start.",
      },
      { property: "og:title", content: "FitJourney AI — Train With Intent" },
      {
        property: "og:description",
        content:
          "Personalised workout splits, macro targets and an AI coach built from your goal, experience level and body details.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[420px] w-[420px] rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-md bg-accent font-display text-lg text-accent-ink">
              F
            </span>
            <span className="font-display text-lg tracking-wide">
              FITJOURNEY<span className="text-accent">AI</span>
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#programs" className="transition-colors hover:text-foreground">
              Programs
            </a>
            <a href="#library" className="transition-colors hover:text-foreground">
              Library
            </a>
            <a href="#nutrition" className="transition-colors hover:text-foreground">
              Nutrition
            </a>
            <a href="#coach" className="text-foreground">
              AI coach
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/auth"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Log in
            </Link>
            <Link
              to="/auth"
              search={{ mode: "signup" }}
              className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent/90"
            >
              Start free
            </Link>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-[22ch]">
            <div className="rise num inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" /> PERSONAL TRAINING, COMPUTED
            </div>
            <h1
              className="rise mt-6 font-display text-5xl leading-[0.92] tracking-tight uppercase md:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              Train with
              <br />
              <span className="text-accent">intent.</span>
            </h1>
            <p
              className="rise mt-6 max-w-[46ch] text-base text-pretty text-muted-foreground md:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              A plan built from your goal, level and week — then tracked set by set, plate by plate,
              so every session loads heavier than the last.
            </p>
            <div className="rise mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "240ms" }}>
              <Link
                to="/auth"
                search={{ mode: "signup" }}
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent/90"
              >
                Build my plan — free
              </Link>
              <span className="num text-sm text-muted-foreground">33 exercises · no card</span>
            </div>
            <div className="rise mt-10 flex gap-8" style={{ animationDelay: "320ms" }}>
              <div>
                <div className="num text-2xl font-semibold">3</div>
                <div className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">levels</div>
              </div>
              <div>
                <div className="num text-2xl font-semibold">9</div>
                <div className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">meal plans</div>
              </div>
              <div>
                <div className="num text-2xl font-semibold">7</div>
                <div className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">day split</div>
              </div>
            </div>
          </div>

          <div className="rise panel p-6" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center justify-between">
              <span className="num text-xs tracking-wide text-muted-foreground uppercase">
                Today&apos;s load
              </span>
              <span className="num text-xs text-accent">92% done</span>
            </div>
            <div className="mt-5 flex items-center gap-6">
              <div className="relative size-24 shrink-0">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(var(--accent) 0 317deg, var(--plate) 317deg 360deg)",
                  }}
                />
                <div className="absolute inset-[9px] grid place-items-center rounded-full bg-surface">
                  <div className="text-center">
                    <div className="font-display text-2xl">
                      92<span className="text-base text-accent">%</span>
                    </div>
                    <div className="num text-[10px] text-muted-foreground uppercase">of 550</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="font-display text-lg">Full Body A</div>
                <div className="text-sm text-muted-foreground">5 exercises · 38 min</div>
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-center gap-1.5">
                    {[true, true, true, true, false].map((on, i) => (
                      <span
                        key={i}
                        className={`block h-4 w-2.5 rounded-sm ${on ? "bg-accent" : "bg-plate"}`}
                      />
                    ))}
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-plate">
                    <div
                      className="bar-grow h-full rounded-full bg-accent"
                      style={{ width: "92%", animationDelay: "400ms" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              {[
                ["1,840", "kcal"],
                ["184", "g protein"],
                ["14", "streak"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg bg-raised/70 py-2">
                  <div className="num text-lg font-semibold">{value}</div>
                  <div className="text-[10px] text-muted-foreground uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          <article id="programs" className="panel p-6">
            <div className="num text-xs text-accent">01 · PROGRAMS</div>
            <h2 className="mt-3 font-display text-2xl uppercase">Splits that match your level</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Beginners get full-body sessions with warm-ups, cool-downs and form cues. Intermediates
              get power and hypertrophy splits. Pros get max-effort days with progressive overload
              instructions.
            </p>
          </article>
          <article id="nutrition" className="panel p-6">
            <div className="num text-xs text-accent">02 · NUTRITION</div>
            <h2 className="mt-3 font-display text-2xl uppercase">Meals, macros and water</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Daily breakfast, lunch, dinner and snacks for weight loss, muscle gain or maintenance —
              in vegetarian, non-vegetarian or vegan versions, with calories and macros per meal.
            </p>
          </article>
          <article id="coach" className="panel p-6">
            <div className="num text-xs text-accent">03 · AI COACH</div>
            <h2 className="mt-3 font-display text-2xl uppercase">Ask anything, any time</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              What should I train today? What do I eat for muscle gain? How many calories? Your coach
              answers with your own numbers in context — general guidance, never medical advice.
            </p>
          </article>
        </div>

        <div id="library" className="panel mt-4 grid gap-6 p-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl uppercase">Everything logged, nothing guessed</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              A searchable library of 33 movements filtered by muscle group, difficulty, equipment
              and workout type. A calendar you tick off. Weight, streaks, personal records and
              charts that show the line going up.
            </p>
            <Link
              to="/auth"
              search={{ mode: "signup" }}
              className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent/90"
            >
              Create your account
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-3 self-center">
            {[
              "BMI & BMR calculators",
              "Daily calorie target",
              "Water tracker",
              "Workout & rest timers",
              "Achievement badges",
              "Weight history charts",
            ].map((item) => (
              <li key={item} className="rounded-xl bg-raised/60 p-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="num mt-10 max-w-[90ch] text-[11px] leading-relaxed text-muted-foreground/70">
          FitJourney AI provides general fitness guidance only and is not a substitute for
          professional medical advice. Consult a qualified physician before beginning any programme.
        </p>
      </section>
    </div>
  );
}
