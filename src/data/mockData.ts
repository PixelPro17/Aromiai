import { Activity, Coffee, Moon, Sun } from "lucide-react";

export const todayWorkout = {
    title: "Morning Flow Yoga",
    duration: "20 min",
    intensity: "Low",
    calories: 120,
    image: "https://images.unsplash.com/photo-1544367563-121910aace75?auto=format&fit=crop&q=80&w=1000",
};

export const todayMeals = [
    { type: "Breakfast", name: "Oatmeal with Berries", calories: 350, protein: "12g", image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=500" },
    { type: "Lunch", name: "Quinoa Salad Bowl", calories: 450, protein: "18g", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500" },
    { type: "Dinner", name: "Grilled Salmon & Asparagus", calories: 500, protein: "35g", image: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&q=80&w=500" },
];

export const wellnessTip = {
    text: "Your energy might be lower today due to your cycle phase. Prioritize rest and gentle movement.",
    category: "Cycle Syncing",
};

export const moodOptions = [
    { label: "Energetic", icon: Sun, color: "text-orange-500", bg: "bg-orange-100" },
    { label: "Calm", icon: Moon, color: "text-indigo-500", bg: "bg-indigo-100" },
    { label: "Tired", icon: Coffee, color: "text-brown-500", bg: "bg-amber-100" }, // Coffee instead of Zzz for icon availability in lucide standard set check? Lucide has Coffee.
    { label: "Anxious", icon: Activity, color: "text-blue-500", bg: "bg-blue-100" },
];
