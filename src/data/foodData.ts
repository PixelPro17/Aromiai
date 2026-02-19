
export interface FoodItem {
    id: string;
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    iron: boolean; // High iron content
    fiber: boolean; // High fiber content
    image: string;
    category: 'breakfast' | 'lunch' | 'dinner' | 'snack';
}

export const foodDatabase: FoodItem[] = [
    // Breakfast
    {
        id: 'b1',
        name: 'Oatmeal with Berries & Nut Butter',
        calories: 350,
        protein: 12,
        carbs: 45,
        fats: 14,
        iron: true,
        fiber: true,
        image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=500',
        category: 'breakfast'
    },
    {
        id: 'b2',
        name: 'Avocado Toast with Poached Egg',
        calories: 400,
        protein: 18,
        carbs: 35,
        fats: 22,
        iron: false,
        fiber: true,
        image: 'https://images.unsplash.com/photo-1525351484163-7529414395d8?auto=format&fit=crop&q=80&w=500',
        category: 'breakfast'
    },
    {
        id: 'b3',
        name: 'Greek Yogurt Parfait',
        calories: 320,
        protein: 20,
        carbs: 40,
        fats: 8,
        iron: false,
        fiber: false,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=500',
        category: 'breakfast'
    },
    {
        id: 'b4',
        name: 'Spinach & Feta Egg Muffins',
        calories: 280,
        protein: 22,
        carbs: 5,
        fats: 18,
        iron: true,
        fiber: false,
        image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&q=80&w=500',
        category: 'breakfast'
    },

    // Lunch
    {
        id: 'l1',
        name: 'Quinoa Salad Bowl with Chickpeas',
        calories: 450,
        protein: 16,
        carbs: 65,
        fats: 14,
        iron: true,
        fiber: true,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500',
        category: 'lunch'
    },
    {
        id: 'l2',
        name: 'Grilled Chicken Caesar Salad',
        calories: 420,
        protein: 40,
        carbs: 12,
        fats: 24,
        iron: false,
        fiber: false,
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=500',
        category: 'lunch'
    },
    {
        id: 'l3',
        name: 'Lentil Soup with Whole Wheat Roll',
        calories: 380,
        protein: 18,
        carbs: 55,
        fats: 8,
        iron: true,
        fiber: true,
        image: 'https://images.unsplash.com/photo-1547592166-23ac79a3c0dd?auto=format&fit=crop&q=80&w=500',
        category: 'lunch'
    },
    {
        id: 'l4',
        name: 'Tuna Salad Lettuce Wraps',
        calories: 300,
        protein: 30,
        carbs: 5,
        fats: 16,
        iron: true,
        fiber: false,
        image: 'https://images.unsplash.com/photo-1626804475297-411bd7848c7e?auto=format&fit=crop&q=80&w=500',
        category: 'lunch'
    },

    // Dinner
    {
        id: 'd1',
        name: 'Grilled Salmon with Asparagus',
        calories: 500,
        protein: 35,
        carbs: 10,
        fats: 32,
        iron: true,
        fiber: true,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&q=80&w=500',
        category: 'dinner'
    },
    {
        id: 'd2',
        name: 'Vegetable Stir-Fry with Tofu',
        calories: 420,
        protein: 20,
        carbs: 45,
        fats: 18,
        iron: true,
        fiber: true,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500',
        category: 'dinner'
    },
    {
        id: 'd3',
        name: 'Turkey Chili with Sweet Potato',
        calories: 480,
        protein: 32,
        carbs: 50,
        fats: 14,
        iron: true,
        fiber: true,
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=500',
        category: 'dinner'
    },
    {
        id: 'd4',
        name: 'Zucchini Noodles with Pesto & Shrimp',
        calories: 360,
        protein: 28,
        carbs: 12,
        fats: 22,
        iron: false,
        fiber: true,
        image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&q=80&w=500',
        category: 'dinner'
    },

    // Snack
    {
        id: 's1',
        name: 'Apple Slices with Walnuts',
        calories: 180,
        protein: 4,
        carbs: 22,
        fats: 14,
        iron: false,
        fiber: true,
        image: 'https://images.unsplash.com/photo-1568284564551-3444a7f01740?auto=format&fit=crop&q=80&w=500',
        category: 'snack'
    },
    {
        id: 's2',
        name: 'Greek Yogurt with Honey',
        calories: 150,
        protein: 12,
        carbs: 18,
        fats: 0,
        iron: false,
        fiber: false,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=500',
        category: 'snack'
    },
    {
        id: 's3',
        name: 'Hummus with Carrot Sticks',
        calories: 200,
        protein: 6,
        carbs: 24,
        fats: 10,
        iron: true,
        fiber: true,
        image: 'https://images.unsplash.com/photo-1633321702518-7fe2bf4296f3?auto=format&fit=crop&q=80&w=500',
        category: 'snack'
    },
    {
        id: 's4',
        name: 'Hard Boiled Egg',
        calories: 70,
        protein: 6,
        carbs: 1,
        fats: 5,
        iron: false,
        fiber: false,
        image: 'https://images.unsplash.com/photo-1510443219356-9a2df337d45c?auto=format&fit=crop&q=80&w=500',
        category: 'snack'
    }
];
