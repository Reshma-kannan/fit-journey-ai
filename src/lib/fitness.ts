import { EXERCISES, type Exercise, type Difficulty } from "@/data/exercises";
import type { Diet, Goal } from "@/data/nutrition";

export interface FitnessProfile {
  name: string;
  age: number | null;
  height_cm: number | null;
  weight_kg: number | null;
  experience: Difficulty | null;
  goal: Goal | null;
  days_per_week: number | null;
  diet: Diet | null;
  allergies: string | null;
}

export const EXPERIENCE_LEVELS: Difficulty[] = ["Beginner", "Intermediate", "Pro"];
export const GOALS: Goal[] = ["Weight Loss", "Muscle Gain", "Strength Building", "General Fitness"];
export const DIETS: Diet[] = ["Vegetarian", "Non-Vegetarian", "Vegan"];

export function bmi(heightCm?: number | null, weightKg?: number | null): number | null {
  if (!heightCm || !weightKg) return null;
  const m = heightCm / 100;
  return +(weightKg / (m * m)).toFixed(1);
}

export function bmiBand(value: number): { label: string; position: number } {
  if (value < 18.5) return { label: "Underweight", position: 15 };
  if (value < 25) return { label: "Healthy range", position: 45 };
  if (value < 30) return { label: "Overweight", position: 72 };
  return { label: "Obese range", position: 92 };
}

/** Mifflin-St Jeor, averaged across sexes since we don't ask for sex. */
export function bmr(profile: Pick<FitnessProfile, "height_cm" | "weight_kg" | "age">): number | null {
  const { height_cm, weight_kg, age } = profile;
  if (!height_cm || !weight_kg || !age) return null;
  const base = 10 * weight_kg + 6.25 * height_cm - 5 * age;
  return Math.round(base - 78); // midpoint of the +5 / -161 constants
}

export function activityFactor(daysPerWeek?: number | null): number {
  const d = daysPerWeek ?? 3;
  if (d <= 1) return 1.2;
  if (d <= 3) return 1.375;
  if (d <= 5) return 1.55;
  return 1.725;
}

export function tdee(profile: FitnessProfile): number | null {
  const base = bmr(profile);
  if (!base) return null;
  return Math.round(base * activityFactor(profile.days_per_week));
}

export function calorieTarget(profile: FitnessProfile): number | null {
  const maintenance = tdee(profile);
  if (!maintenance) return null;
  switch (profile.goal) {
    case "Weight Loss":
      return Math.round(maintenance - 450);
    case "Muscle Gain":
      return Math.round(maintenance + 350);
    case "Strength Building":
      return Math.round(maintenance + 200);
    default:
      return maintenance;
  }
}

export interface Macros {
  protein: number;
  carbs: number;
  fat: number;
}

export function macroTargets(profile: FitnessProfile): Macros | null {
  const calories = calorieTarget(profile);
  if (!calories || !profile.weight_kg) return null;
  const perKg = profile.goal === "Weight Loss" ? 2.2 : profile.goal === "Muscle Gain" ? 2.0 : 1.8;
  const protein = Math.round(profile.weight_kg * perKg);
  const fat = Math.round((calories * 0.25) / 9);
  const carbs = Math.max(0, Math.round((calories - protein * 4 - fat * 9) / 4));
  return { protein, carbs, fat };
}

export function waterTargetMl(profile: FitnessProfile): number {
  const weight = profile.weight_kg ?? 70;
  const extra = (profile.days_per_week ?? 3) >= 4 ? 500 : 300;
  return Math.round((weight * 35 + extra) / 100) * 100;
}

/* ---------------------------------------------------------------- plans ---- */

export interface PlanDay {
  index: number;
  label: string;
  title: string;
  focus: string;
  rest: boolean;
  exercises: Exercise[];
}

const byId = (id: string) => EXERCISES.find((e) => e.id === id)!;
const WARMUP = byId("dynamic-warmup");
const COOLDOWN = byId("cooldown-stretch");

interface Template {
  title: string;
  focus: string;
  ids: string[];
}

function templates(experience: Difficulty, goal: Goal): Template[] {
  if (experience === "Beginner") {
    const cardio = goal === "Weight Loss" ? "brisk-walk" : "rowing-machine";
    return [
      { title: "Full Body A", focus: "Form & consistency", ids: ["goblet-squat", "push-up", "seated-cable-row", "plank", cardio] },
      { title: "Full Body B", focus: "Hinge & pull", ids: ["leg-press", "lat-pulldown", "lateral-raise", "dead-bug", cardio] },
      { title: "Full Body C", focus: "Push & core", ids: ["goblet-squat", "incline-db-press", "barbell-curl", "triceps-pushdown", "plank"] },
      { title: "Conditioning", focus: "Easy aerobic base", ids: ["brisk-walk", "farmers-carry", "dead-bug"] },
      { title: "Full Body D", focus: "Whole-body strength", ids: ["leg-press", "seated-cable-row", "push-up", "face-pull", "plank"] },
      { title: "Active recovery", focus: "Mobility & walking", ids: ["brisk-walk", "face-pull", "dead-bug"] },
    ];
  }
  if (experience === "Intermediate") {
    return [
      { title: "Upper Power", focus: "Heavy pressing & pulling", ids: ["bench-press", "bent-over-row", "overhead-press", "lateral-raise", "triceps-pushdown"] },
      { title: "Lower Power", focus: "Squat pattern strength", ids: ["back-squat", "romanian-deadlift", "leg-press", "russian-twist"] },
      { title: "Upper Hypertrophy", focus: "Volume for chest & back", ids: ["incline-db-press", "lat-pulldown", "cable-fly", "seated-cable-row", "hammer-curl"] },
      { title: "Lower Hypertrophy", focus: "Quads, hams & glutes", ids: ["back-squat", "bulgarian-split-squat", "romanian-deadlift", "plank"] },
      { title: "Conditioning & Core", focus: "Intervals plus trunk work", ids: ["treadmill-intervals", "kettlebell-swing", "hanging-leg-raise"] },
      { title: "Arms & Shoulders", focus: "Detail work", ids: ["overhead-press", "lateral-raise", "barbell-curl", "skull-crusher", "face-pull"] },
    ];
  }
  return [
    { title: "Max Effort Upper", focus: "Top sets, progressive overload", ids: ["bench-press", "pull-up", "overhead-press", "skull-crusher"] },
    { title: "Max Effort Lower", focus: "Heavy squat & hinge", ids: ["back-squat", "romanian-deadlift", "bulgarian-split-squat", "hanging-leg-raise"] },
    { title: "Dynamic Upper", focus: "Speed & volume", ids: ["incline-db-press", "bent-over-row", "cable-fly", "face-pull", "hammer-curl"] },
    { title: "Dynamic Lower", focus: "Unilateral & posterior chain", ids: ["bulgarian-split-squat", "kettlebell-swing", "leg-press", "russian-twist"] },
    { title: "Metabolic Circuit", focus: "Work capacity", ids: ["burpee", "kettlebell-swing", "farmers-carry", "treadmill-intervals"] },
    { title: "Weak Point Session", focus: "Targeted accessory volume", ids: ["pull-up", "lateral-raise", "skull-crusher", "barbell-curl", "hanging-leg-raise"] },
  ];
}

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function weeklyPlan(profile: FitnessProfile): PlanDay[] {
  const experience = profile.experience ?? "Beginner";
  const goal = profile.goal ?? "General Fitness";
  const days = Math.min(6, Math.max(2, profile.days_per_week ?? 3));
  const list = templates(experience, goal);

  // Spread training days across the week, resting on the gaps.
  const trainingIndexes = new Set<number>();
  for (let i = 0; i < days; i++) {
    trainingIndexes.add(Math.round((i * 7) / days) % 7);
  }
  let t = 0;
  return DAY_LABELS.map((label, index) => {
    if (!trainingIndexes.has(index)) {
      return {
        index,
        label,
        title: "Rest day",
        focus: "Sleep, hydrate, walk easy",
        rest: true,
        exercises: [],
      };
    }
    const tpl = list[t % list.length]!;
    t += 1;
    return {
      index,
      label,
      title: tpl.title,
      focus: tpl.focus,
      rest: false,
      exercises: [WARMUP, ...tpl.ids.map(byId), COOLDOWN],
    };
  });
}

export function todayIndex(date = new Date()): number {
  return (date.getDay() + 6) % 7; // Monday = 0
}

export function planDayFor(profile: FitnessProfile, date = new Date()): PlanDay {
  return weeklyPlan(profile)[todayIndex(date)]!;
}

export function sessionMinutes(day: PlanDay): number {
  if (day.rest) return 0;
  return day.exercises.reduce((sum, e) => sum + Math.round((e.sets * (e.rest + 45)) / 60), 0);
}

export function progressiveOverloadNote(experience: Difficulty | null): string {
  switch (experience) {
    case "Pro":
      return "Add 2.5 kg to your top set when you hit the top of the rep range with a clean last rep, or add one back-off set every third week.";
    case "Intermediate":
      return "Add reps until you reach the top of the range on every set, then add 2.5 kg and start again at the bottom.";
    default:
      return "Repeat the same weights until every rep looks identical, then add the smallest jump available.";
  }
}

export function dateKey(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}
