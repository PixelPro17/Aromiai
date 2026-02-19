
import { foodDatabase } from '../data/foodData';
import type { FoodItem } from '../data/foodData';

export interface UserStats {
    age: number;
    height: number;
    weight: number;
    activityLevel: 'sedentary' | 'light' | 'moderate' | 'active';
    goal: 'maintain' | 'loss' | 'gain';
    phase?: string;
}

export interface MacroBreakdown {
    calories: number;
    protein: number;
    fats: number;
    carbs: number;
    hydration: number;
}

export const calculateBMR = (stats: UserStats): number => {
    // Mifflin-St Jeor for women
    // BMR = (10 × weight) + (6.25 × height) − (5 × age) − 161
    return (10 * stats.weight) + (6.25 * stats.height) - (5 * stats.age) - 161;
};

export const calculateTDEE = (bmr: number, activityLevel: string): number => {
    const multipliers: Record<string, number> = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725
    };
    return bmr * (multipliers[activityLevel] || 1.2);
};

export const calculateMacros = (stats: UserStats): MacroBreakdown => {
    const bmr = calculateBMR(stats);
    const tdee = calculateTDEE(bmr, stats.activityLevel);

    let targetCalories = tdee;
    if (stats.goal === 'loss') targetCalories -= 400; // Average deficit
    if (stats.goal === 'gain') targetCalories += 300; // Average surplus

    // Protein: 1.4g per kg (average of 1.2-1.6)
    const proteinGrams = 1.4 * stats.weight;
    const proteinCals = proteinGrams * 4;

    // Fats: 28% of calories (average of 25-30%)
    const fatCals = targetCalories * 0.28;
    const fatGrams = fatCals / 9;

    // Carbs: Remaining
    const remainingCals = targetCalories - proteinCals - fatCals;
    const carbGrams = remainingCals / 4;

    // Hydration: 35ml per kg
    const hydration = 35 * stats.weight;

    return {
        calories: Math.round(targetCalories),
        protein: Math.round(proteinGrams),
        fats: Math.round(fatGrams),
        carbs: Math.round(carbGrams),
        hydration: Math.round(hydration)
    };
};

export const generateMealPlan = (_targetCalories: number): Record<string, FoodItem> => {
    // Simple generator: Pick random items from categories
    // In a real app, this would be an optimization problem (Knapsack problem)
    // For MVP, we pick one of each and scale or just show them.
    // We will try to pick a combination that is somewhat close, but for now random is fine to demonstrate dynamic UI.

    const getRandom = (cat: string) => {
        const items = foodDatabase.filter(f => f.category === cat);
        return items[Math.floor(Math.random() * items.length)];
    };

    return {
        breakfast: getRandom('breakfast'),
        lunch: getRandom('lunch'),
        dinner: getRandom('dinner'),
        snack: getRandom('snack')
    };
};
