import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Droplets, Flame, CheckCircle2, Moon } from 'lucide-react';
import { todayWorkout, todayMeals, wellnessTip, moodOptions } from '../data/mockData';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Dashboard() {
    const [selectedMood, setSelectedMood] = useState<string | null>(null);

    return (
        <div className="space-y-8">
            {/* Welcome & Date */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold font-display text-gray-900">Good Morning, Anamika</h1>
                    <p className="text-gray-500">Here's your wellness plan for today.</p>
                </div>
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-primary">Day 14 of Cycle</p>
                    <p className="text-xs text-gray-400">Ovulation Phase</p>
                </div>
            </div>

            {/* Wellness Tip */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20"
            >
                <div className="flex gap-4 items-start">
                    <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                        <SparklesIcon className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary-900 mb-1">{wellnessTip.category}</h3>
                        <p className="text-gray-700 leading-relaxed">{wellnessTip.text}</p>
                    </div>
                </div>
            </motion.div>

            {/* Mood Tracker */}
            <section>
                <h2 className="text-lg font-semibold mb-4 text-gray-800">How are you feeling?</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {moodOptions.map((mood) => {
                        const Icon = mood.icon;
                        const isSelected = selectedMood === mood.label;
                        return (
                            <button
                                key={mood.label}
                                onClick={() => setSelectedMood(mood.label)}
                                className={cn(
                                    "p-4 rounded-xl border flex flex-col items-center gap-2 transition-all duration-200",
                                    isSelected
                                        ? "bg-primary text-white border-primary shadow-md scale-105"
                                        : "bg-white border-gray-100 hover:border-primary/30 hover:shadow-sm"
                                )}
                            >
                                <Icon className={cn("w-6 h-6", isSelected ? "text-white" : mood.color)} />
                                <span className="font-medium">{mood.label}</span>
                            </button>
                        );
                    })}
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Today's Workout */}
                <section className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">Today's Movement</h2>
                        <Link to="/workouts" className="text-sm text-primary hover:text-primary-hover font-medium">View all</Link>
                    </div>
                    <div className="glass-card rounded-2xl overflow-hidden hover:shadow-md transition-shadow group relative">
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={todayWorkout.image}
                                alt={todayWorkout.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <div className="text-white">
                                    <h3 className="text-xl font-bold">{todayWorkout.title}</h3>
                                    <div className="flex gap-4 text-sm mt-2 opacity-90">
                                        <span className="flex items-center gap-1"><Activity className="w-4 h-4" /> {todayWorkout.intensity} Int.</span>
                                        <span className="flex items-center gap-1"><Flame className="w-4 h-4" /> {todayWorkout.calories} kcal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 flex justify-between items-center bg-white/50">
                            <span className="text-gray-600 font-medium">{todayWorkout.duration}</span>
                            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all">
                                Start
                            </button>
                        </div>
                    </div>
                </section>

                {/* Nutrition Summary */}
                <section className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">Nutrition Plan</h2>
                        <Link to="/nutrition" className="text-sm text-primary hover:text-primary-hover font-medium">Full plan</Link>
                    </div>
                    <div className="glass-card p-6 rounded-2xl space-y-6">
                        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                            <div>
                                <p className="text-sm text-gray-500">Daily Goal</p>
                                <p className="text-2xl font-bold text-gray-800">1,850 <span className="text-sm font-normal text-gray-500">kcal</span></p>
                            </div>
                            <div className="h-12 w-12 rounded-full border-4 border-primary/20 border-t-primary flex items-center justify-center">
                                <span className="text-xs font-bold text-primary">75%</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {todayMeals.slice(0, 2).map((meal) => (
                                <div key={meal.type} className="flex items-center gap-4">
                                    <img src={meal.image} alt={meal.name} className="w-12 h-12 rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{meal.type}</p>
                                        <p className="font-medium text-gray-900">{meal.name}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-700">{meal.calories} kcal</p>
                                        <p className="text-xs text-primary">{meal.protein} protein</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/nutrition" className="block text-center w-full py-2 rounded-xl bg-secondary/10 text-secondary-foreground font-medium hover:bg-secondary/20 transition-colors">
                            View Dinner & Snacks
                        </Link>
                    </div>
                </section>
            </div>

            {/* Hydration & Stats row */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Hydration" value="1.2L" sub="/ 2.5L" icon={Droplets} color="text-blue-500" bg="bg-blue-50" />
                <StatCard label="Streak" value="5 Days" sub="Keep it up!" icon={CheckCircle2} color="text-green-500" bg="bg-green-50" />
                <StatCard label="Steps" value="4,230" sub="/ 8,000" icon={Activity} color="text-orange-500" bg="bg-orange-50" />
                <StatCard label="Sleep" value="7h 20m" sub="Good rest" icon={Moon} color="text-indigo-500" bg="bg-indigo-50" />
            </section>
        </div>
    );
}

function StatCard({ label, value, sub, icon: Icon, color, bg }: any) {
    return (
        <div className="glass-card p-4 rounded-xl flex flex-col justify-between h-32">
            <div className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center ${color} mb-2`}>
                <Icon className="w-4 h-4" />
            </div>
            <div>
                <p className="text-xs text-gray-500">{label}</p>
                <p className="text-xl font-bold text-gray-900">{value}</p>
                <p className="text-xs text-gray-400">{sub}</p>
            </div>
        </div>
    )
}

function SparklesIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
        </svg>
    )
}
