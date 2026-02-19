
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Battery, BatteryCharging, BatteryFull, Zap } from 'lucide-react';
import { WorkoutCard } from '../components/WorkoutCard';
import { YOGA_WORKOUTS, GYM_WORKOUTS } from '../data/workoutData';

type EnergyLevel = 'all' | 'low' | 'medium' | 'high';

export function Workouts() {
    const [selectedEnergy, setSelectedEnergy] = useState<EnergyLevel>('all');

    const filterWorkouts = (workouts: typeof YOGA_WORKOUTS) => {
        if (selectedEnergy === 'all') return workouts;
        return workouts.filter(w => w.energyLevel === selectedEnergy);
    };

    const yogaFiltered = filterWorkouts(YOGA_WORKOUTS);
    const gymFiltered = filterWorkouts(GYM_WORKOUTS);

    return (
        <div className="space-y-12 pb-20">
            {/* Header section with Filter */}
            <div className="flex flex-col lg:flex-row justify-between items-end gap-6">
                <div>
                    <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">Workouts</h1>
                    <p className="text-gray-600">Curated routines tailored to your energy & cycle.</p>
                </div>

                {/* Energy Filter */}
                <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 flex gap-1 overflow-x-auto max-w-full">
                    <FilterButton
                        label="All"
                        isActive={selectedEnergy === 'all'}
                        onClick={() => setSelectedEnergy('all')}
                        icon={<Zap className="w-4 h-4" />}
                    />
                    <FilterButton
                        label="Low Energy"
                        isActive={selectedEnergy === 'low'}
                        onClick={() => setSelectedEnergy('low')}
                        icon={<Battery className="w-4 h-4" />}
                        color="text-emerald-600"
                        activeColor="bg-emerald-50 text-emerald-700 ring-emerald-200"
                    />
                    <FilterButton
                        label="Medium"
                        isActive={selectedEnergy === 'medium'}
                        onClick={() => setSelectedEnergy('medium')}
                        icon={<BatteryCharging className="w-4 h-4" />}
                        color="text-blue-600"
                        activeColor="bg-blue-50 text-blue-700 ring-blue-200"
                    />
                    <FilterButton
                        label="High"
                        isActive={selectedEnergy === 'high'}
                        onClick={() => setSelectedEnergy('high')}
                        icon={<BatteryFull className="w-4 h-4" />}
                        color="text-orange-600"
                        activeColor="bg-orange-50 text-orange-700 ring-orange-200"
                    />
                </div>
            </div>

            {/* Section 1: Yoga */}
            {yogaFiltered.length > 0 && (
                <section className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
                        <h2 className="text-2xl font-display font-bold text-gray-800">
                            Yoga For Balance
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {yogaFiltered.map((workout, index) => (
                            <motion.div
                                key={workout.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <WorkoutCard workout={workout} />
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Section 2: Strength */}
            {gymFiltered.length > 0 && (
                <section className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-1 bg-gradient-to-b from-orange-400 to-red-400 rounded-full" />
                        <h2 className="text-2xl font-display font-bold text-gray-800">
                            Strength & Gym Training
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {gymFiltered.map((workout, index) => (
                            <motion.div
                                key={workout.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <WorkoutCard workout={workout} />
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Empty State */}
            {yogaFiltered.length === 0 && gymFiltered.length === 0 && (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                    <Battery className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-600">No workouts found for this energy level.</h3>
                    <button
                        onClick={() => setSelectedEnergy('all')}
                        className="mt-4 text-primary font-bold hover:underline"
                    >
                        View all workouts
                    </button>
                </div>
            )}
        </div>
    );
}

const FilterButton = ({ label, isActive, onClick, icon, color = "text-gray-600", activeColor = "bg-primary text-white ring-primary/20" }: any) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                ? `${activeColor} ring-1 shadow-sm`
                : `hover:bg-gray-50 ${color}`
            }`}
    >
        {icon}
        <span className="whitespace-nowrap">{label}</span>
    </button>
);
