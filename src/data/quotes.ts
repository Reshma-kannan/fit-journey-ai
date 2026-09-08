export const QUOTES = [
  "Discipline is choosing between what you want now and what you want most.",
  "The bar doesn't care how you feel. Load it anyway.",
  "Small sets, stacked daily, beat heroic weeks.",
  "You don't need motivation. You need the next rep.",
  "Progress is a rep you didn't have last month.",
  "Rest is part of the program, not a reward for it.",
  "Consistency is the only supplement that always works.",
];

export function quoteOfTheDay(date = new Date()): string {
  const day = Math.floor(date.getTime() / 86_400_000);
  return QUOTES[day % QUOTES.length];
}
