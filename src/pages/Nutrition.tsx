
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NutritionForm } from '../components/nutrition/NutritionForm';
import { NutritionResults } from '../components/nutrition/NutritionResults';
import { calculateMacros, generateMealPlan } from '../utils/nutritionLogic';
import type { MacroBreakdown, UserStats } from '../utils/nutritionLogic';
import type { FoodItem } from '../data/foodData';

export function Nutrition() {
    // const [userStats, setUserStats] = useState<UserStats | null>(null);
    // Removed unused state to fix lint error, can be re-added if we need to show user stats in results
    const [results, setResults] = useState<MacroBreakdown | null>(null);
    const [mealPlan, setMealPlan] = useState<Record<string, FoodItem> | null>(null);

    const handleCalculate = (data: UserStats) => {
        // setUserStats(data);
        const macros = calculateMacros(data);
        const meals = generateMealPlan(macros.calories);

        // Simulate a small delay for "processing" feel
        setTimeout(() => {
            setResults(macros);
            setMealPlan(meals);
        }, 800);
    };

    const handleReset = () => {
        // setUserStats(null);
        setResults(null);
        setMealPlan(null);
    };

    return (
        <div className="space-y-8 min-h-screen pb-20">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900">Nutrition Planner</h1>
                    <p className="text-gray-500">
                        {results ? "Here is your personalized daily plan." : "Fueling your body for your goals & cycle."}
                    </p>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {!results ? (
                    <Key key="form">
                        <NutritionForm onCalculate={handleCalculate} />
                    </Key>
                ) : (
                    <Key key="results">
                        <NutritionResults
                            macros={results}
                            mealPlan={mealPlan!}
                            onReset={handleReset}
                        />
                    </Key>
                )}
            </AnimatePresence>
        </div>
    );
}

const Key = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
    >
        {children}
    </motion.div>
);
