export type Goal = "Weight Loss" | "Muscle Gain" | "Strength Building" | "General Fitness";
export type Diet = "Vegetarian" | "Non-Vegetarian" | "Vegan";
export type PlanKind = "Weight Loss" | "Muscle Gain" | "Maintain Fitness";

export interface Meal {
  slot: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  name: string;
  items: string[];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface MealPlan {
  kind: PlanKind;
  diet: Diet;
  summary: string;
  meals: Meal[];
}

const plan = (
  kind: PlanKind,
  diet: Diet,
  summary: string,
  meals: Meal[],
): MealPlan => ({ kind, diet, summary, meals });

export const MEAL_PLANS: MealPlan[] = [
  plan("Weight Loss", "Non-Vegetarian", "High protein, moderate carbs, controlled portions to hold a gentle deficit.", [
    { slot: "Breakfast", name: "Egg white scramble", items: ["4 egg whites + 1 whole egg", "Spinach & tomato", "1 slice rye toast"], calories: 320, protein: 28, carbs: 24, fat: 12 },
    { slot: "Lunch", name: "Grilled chicken bowl", items: ["150 g chicken breast", "1 cup quinoa", "Mixed salad, olive oil drizzle"], calories: 520, protein: 45, carbs: 48, fat: 16 },
    { slot: "Snack", name: "Greek yogurt & berries", items: ["200 g 0% Greek yogurt", "Handful blueberries"], calories: 180, protein: 20, carbs: 18, fat: 2 },
    { slot: "Dinner", name: "Baked fish & greens", items: ["180 g white fish", "Roasted broccoli & carrots", "1 small sweet potato"], calories: 460, protein: 42, carbs: 38, fat: 12 },
  ]),
  plan("Weight Loss", "Vegetarian", "Protein-forward vegetarian meals with fibre to keep you full on fewer calories.", [
    { slot: "Breakfast", name: "Paneer & veggie scramble", items: ["100 g low-fat paneer", "Peppers & onion", "1 multigrain roti"], calories: 340, protein: 26, carbs: 26, fat: 14 },
    { slot: "Lunch", name: "Rajma & salad plate", items: ["1 cup kidney beans", "½ cup brown rice", "Cucumber-tomato salad"], calories: 500, protein: 24, carbs: 72, fat: 10 },
    { slot: "Snack", name: "Cottage cheese bowl", items: ["150 g cottage cheese", "Chopped pear", "Cinnamon"], calories: 190, protein: 21, carbs: 16, fat: 4 },
    { slot: "Dinner", name: "Tofu stir-fry", items: ["150 g tofu", "Mixed stir-fry vegetables", "Small portion soba noodles"], calories: 450, protein: 30, carbs: 44, fat: 14 },
  ]),
  plan("Weight Loss", "Vegan", "Plant protein at every meal so the deficit costs you fat, not muscle.", [
    { slot: "Breakfast", name: "Tofu scramble wrap", items: ["150 g tofu, turmeric", "Whole-wheat wrap", "Spinach"], calories: 350, protein: 25, carbs: 32, fat: 13 },
    { slot: "Lunch", name: "Chickpea power bowl", items: ["1 cup chickpeas", "½ cup quinoa", "Kale, lemon tahini"], calories: 520, protein: 26, carbs: 68, fat: 15 },
    { slot: "Snack", name: "Soy yogurt & seeds", items: ["200 g soy yogurt", "1 tbsp pumpkin seeds"], calories: 200, protein: 15, carbs: 18, fat: 8 },
    { slot: "Dinner", name: "Lentil & veg curry", items: ["1 cup red lentils", "Mixed vegetables", "½ cup brown rice"], calories: 480, protein: 27, carbs: 74, fat: 8 },
  ]),
  plan("Muscle Gain", "Non-Vegetarian", "A steady surplus with 1.8-2.2 g protein per kg to support new tissue.", [
    { slot: "Breakfast", name: "Oats, whey & banana", items: ["80 g oats in milk", "1 scoop whey", "Banana + peanut butter"], calories: 640, protein: 42, carbs: 78, fat: 18 },
    { slot: "Lunch", name: "Chicken, rice & avocado", items: ["200 g chicken thigh", "1.5 cups rice", "½ avocado"], calories: 820, protein: 55, carbs: 92, fat: 26 },
    { slot: "Snack", name: "Cottage cheese toast", items: ["150 g cottage cheese", "2 slices sourdough", "Honey"], calories: 420, protein: 28, carbs: 52, fat: 8 },
    { slot: "Dinner", name: "Salmon & potatoes", items: ["200 g salmon", "300 g roast potatoes", "Green beans"], calories: 780, protein: 48, carbs: 66, fat: 34 },
  ]),
  plan("Muscle Gain", "Vegetarian", "Dairy and legume protein stacked across four calorie-dense meals.", [
    { slot: "Breakfast", name: "Paneer paratha & lassi", items: ["2 paneer parathas", "Salted lassi", "Almonds"], calories: 660, protein: 32, carbs: 72, fat: 26 },
    { slot: "Lunch", name: "Dal, rice & curd", items: ["1.5 cups dal", "1.5 cups rice", "1 cup curd, ghee"], calories: 820, protein: 34, carbs: 118, fat: 22 },
    { slot: "Snack", name: "Protein shake & nuts", items: ["1 scoop whey in milk", "30 g mixed nuts"], calories: 460, protein: 34, carbs: 30, fat: 22 },
    { slot: "Dinner", name: "Rajma, roti & paneer", items: ["1 cup rajma", "3 rotis", "100 g paneer"], calories: 780, protein: 42, carbs: 92, fat: 24 },
  ]),
  plan("Muscle Gain", "Vegan", "Soy, legumes and grains combined to hit a full amino-acid profile in a surplus.", [
    { slot: "Breakfast", name: "Soy oats bowl", items: ["80 g oats in soy milk", "1 scoop pea protein", "Berries, nut butter"], calories: 640, protein: 40, carbs: 76, fat: 20 },
    { slot: "Lunch", name: "Tempeh burrito bowl", items: ["200 g tempeh", "1.5 cups rice", "Black beans, guacamole"], calories: 860, protein: 48, carbs: 108, fat: 26 },
    { slot: "Snack", name: "Trail mix & soy milk", items: ["50 g trail mix", "300 ml soy milk"], calories: 430, protein: 20, carbs: 36, fat: 24 },
    { slot: "Dinner", name: "Seitan stir-fry", items: ["180 g seitan", "Noodles", "Broccoli & sesame oil"], calories: 760, protein: 52, carbs: 88, fat: 20 },
  ]),
  plan("Maintain Fitness", "Non-Vegetarian", "Balanced calories with enough protein to keep performance and body composition steady.", [
    { slot: "Breakfast", name: "Eggs & avocado toast", items: ["2 eggs", "2 slices whole-grain toast", "½ avocado"], calories: 480, protein: 24, carbs: 40, fat: 24 },
    { slot: "Lunch", name: "Turkey & couscous", items: ["150 g turkey", "1 cup couscous", "Roast vegetables"], calories: 600, protein: 44, carbs: 62, fat: 16 },
    { slot: "Snack", name: "Fruit & nuts", items: ["Apple", "25 g walnuts"], calories: 250, protein: 6, carbs: 26, fat: 16 },
    { slot: "Dinner", name: "Beef stir-fry", items: ["150 g lean beef", "Rice noodles", "Peppers & bok choy"], calories: 620, protein: 42, carbs: 62, fat: 20 },
  ]),
  plan("Maintain Fitness", "Vegetarian", "Everyday vegetarian eating that supports training without gaining or losing.", [
    { slot: "Breakfast", name: "Poha & curd", items: ["1 bowl vegetable poha", "1 cup curd", "Peanuts"], calories: 470, protein: 18, carbs: 62, fat: 16 },
    { slot: "Lunch", name: "Chole & rice", items: ["1 cup chole", "1 cup rice", "Salad"], calories: 600, protein: 24, carbs: 92, fat: 12 },
    { slot: "Snack", name: "Sprouts chaat", items: ["1 cup mixed sprouts", "Onion, lemon, chaat masala"], calories: 220, protein: 16, carbs: 30, fat: 4 },
    { slot: "Dinner", name: "Palak paneer & roti", items: ["120 g paneer in spinach", "2 rotis"], calories: 610, protein: 30, carbs: 52, fat: 28 },
  ]),
  plan("Maintain Fitness", "Vegan", "Plant-based maintenance eating with steady protein through the day.", [
    { slot: "Breakfast", name: "Overnight oats", items: ["60 g oats in soy milk", "Chia seeds", "Banana"], calories: 450, protein: 20, carbs: 68, fat: 12 },
    { slot: "Lunch", name: "Falafel bowl", items: ["6 baked falafel", "Quinoa tabbouleh", "Hummus"], calories: 620, protein: 24, carbs: 74, fat: 24 },
    { slot: "Snack", name: "Edamame", items: ["1 cup edamame", "Sea salt"], calories: 200, protein: 18, carbs: 16, fat: 8 },
    { slot: "Dinner", name: "Tofu & vegetable curry", items: ["150 g tofu", "Coconut curry vegetables", "½ cup rice"], calories: 590, protein: 28, carbs: 64, fat: 24 },
  ]),
];

export const PROTEIN_SOURCES: Record<Diet, string[]> = {
  "Non-Vegetarian": ["Chicken breast", "Eggs & egg whites", "White fish", "Salmon", "Lean beef", "Greek yogurt", "Whey protein"],
  Vegetarian: ["Paneer", "Greek yogurt & curd", "Cottage cheese", "Lentils & dal", "Rajma & chole", "Whey protein", "Eggs (if eaten)"],
  Vegan: ["Tofu", "Tempeh", "Seitan", "Lentils", "Chickpeas", "Edamame", "Pea protein isolate"],
};

export function planKindForGoal(goal: Goal): PlanKind {
  if (goal === "Weight Loss") return "Weight Loss";
  if (goal === "Muscle Gain") return "Muscle Gain";
  return "Maintain Fitness";
}

export function findMealPlan(kind: PlanKind, diet: Diet): MealPlan {
  return (
    MEAL_PLANS.find((p) => p.kind === kind && p.diet === diet) ??
    MEAL_PLANS.find((p) => p.kind === kind) ??
    MEAL_PLANS[0]!
  );
}
