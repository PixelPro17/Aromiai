
export interface WorkoutItem {
    id: string;
    name: string;
    image: string;
    benefits: string[];
    bestTime: string;
    energyLevel: 'low' | 'medium' | 'high';
}

export const YOGA_WORKOUTS: WorkoutItem[] = [
    {
        id: 'y1',
        name: "Child's Pose",
        image: "https://images.unsplash.com/photo-1544367563-121910aace75?auto=format&fit=crop&q=80&w=800",
        benefits: ["Gently stretches hips & thighs", "Calms the brain & relieves stress", "Relieves back and neck pain"],
        bestTime: "Morning or Before Bed",
        energyLevel: 'low'
    },
    {
        id: 'y2',
        name: "Downward Dog",
        image: "https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?auto=format&fit=crop&q=80&w=800",
        benefits: ["Energizes the body", "Strengthens arms and legs", "Improves circulation"],
        bestTime: "Morning",
        energyLevel: 'medium'
    },
    {
        id: 'y3',
        name: "Cobra Pose",
        image: "https://images.unsplash.com/photo-1599447332720-eb085565e152?auto=format&fit=crop&q=80&w=800",
        benefits: ["Strengthens the spine", "Stretches chest & lungs", "Relieves stress and fatigue"],
        bestTime: "Post-workout",
        energyLevel: 'low'
    },
    {
        id: 'y4',
        name: "Warrior I",
        image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&q=80&w=800",
        benefits: ["Strengthens shoulders, arms, legs", "Stretches chest & lungs", "Improves focus, balance & stability"],
        bestTime: "Morning",
        energyLevel: 'medium'
    },
    {
        id: 'y5',
        name: "Warrior II",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
        benefits: ["Increases stamina", "Relieves backaches", "Stimulates abdominal organs"],
        bestTime: "Morning",
        energyLevel: 'medium'
    },
    {
        id: 'y6',
        name: "Bridge Pose",
        image: "https://images.unsplash.com/photo-1522845015757-59b52a55380d?auto=format&fit=crop&q=80&w=800",
        benefits: ["Stretches the chest, neck, and spine", "Calms the brain and helps alleviate stress", "Stimulates abdominal organs"],
        bestTime: "Evening",
        energyLevel: 'low'
    },
    {
        id: 'y7',
        name: "Butterfly Pose",
        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=800",
        benefits: ["Stimulates abdominal organs", "Stretches inner thighs & knees", "Helps relieve mild depression"],
        bestTime: "During Menstrual Phase",
        energyLevel: 'low'
    },
    {
        id: 'y8',
        name: "Cat-Cow",
        image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&q=80&w=800",
        benefits: ["Improves posture and balance", "Strengthens and stretches the spine", "Massages abdominal organs"],
        bestTime: "Morning / Warm-up",
        energyLevel: 'low'
    },
    {
        id: 'y9',
        name: "Tree Pose",
        image: "https://images.unsplash.com/photo-1562088287-b9e6539c366e?auto=format&fit=crop&q=80&w=800",
        benefits: ["Strengthens thighs and calves", "Stretches the groins and inner thighs", "Improves sense of balance"],
        bestTime: "Anytime",
        energyLevel: 'low'
    },
    {
        id: 'y10',
        name: "Seated Forward Fold",
        image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&q=80&w=800",
        benefits: ["Calms the brain", "Stretches the spine and hamstrings", "Stimulates the liver & kidneys"],
        bestTime: "Evening / Cool-down",
        energyLevel: 'low'
    }
];

export const GYM_WORKOUTS: WorkoutItem[] = [
    {
        id: 'g1',
        name: "Squats",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
        benefits: ["Builds leg & glute strength", "Improves core stability", "Increases bone density"],
        bestTime: "Strength Day",
        energyLevel: 'high'
    },
    {
        id: 'g2',
        name: "Lunges",
        image: "https://images.unsplash.com/photo-1434608519344-49d77a699ded?auto=format&fit=crop&q=80&w=800",
        benefits: ["Improves balance", "Targets quads & glutes", "Enhances hip flexibility"],
        bestTime: "Leg Day",
        energyLevel: 'high'
    },
    {
        id: 'g3',
        name: "Glute Bridges",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
        benefits: ["Isolates glute muscles", "Strengthens lower back", "Improves hip extension"],
        bestTime: "Glute Focus",
        energyLevel: 'medium'
    },
    {
        id: 'g4',
        name: "Hip Thrust",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800",
        benefits: ["Builds glute size & strength", "Improves sprint speed", "Strengthens posterior chain"],
        bestTime: "Heavy Leg Day",
        energyLevel: 'high'
    },
    {
        id: 'g5',
        name: "Leg Press",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
        benefits: ["Targets quads safely", "Allows heavy loading", "Supports knee stability"],
        bestTime: "Leg Day",
        energyLevel: 'high'
    },
    {
        id: 'g6',
        name: "Dumbbell Shoulder Press",
        image: "https://images.unsplash.com/photo-1623874315352-0fb3b854ad40?auto=format&fit=crop&q=80&w=800",
        benefits: ["Sculpts shoulders", "Improves overhead stability", "Strengthens triceps"],
        bestTime: "Upper Body Day",
        energyLevel: 'medium'
    },
    {
        id: 'g7',
        name: "Lat Pulldown",
        image: "https://images.unsplash.com/photo-1599447332467-f273be8254c4?auto=format&fit=crop&q=80&w=800",
        benefits: ["Builds back width", "Improves posture", "Strengthens biceps"],
        bestTime: "Back Day",
        energyLevel: 'medium'
    },
    {
        id: 'g8',
        name: "Plank",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
        benefits: ["Core stability", "Prevents back pain", "Improves posture"],
        bestTime: "End of Workout",
        energyLevel: 'medium'
    },
    {
        id: 'g9',
        name: "Deadlift (Light)",
        image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=800",
        benefits: ["Total body strength", "Builds posterior chain", "Functional movement"],
        bestTime: "Strength Day",
        energyLevel: 'high'
    },
    {
        id: 'g10',
        name: "Treadmill Incline Walk",
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=800",
        benefits: ["Low impact cardio", "Burns calories", "Strengthens glutes & calves"],
        bestTime: "Cardio / Warm-up",
        energyLevel: 'medium'
    }
];
