
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Activity, Target, Calendar } from 'lucide-react';
import type { UserStats } from '../../utils/nutritionLogic';

interface Props {
    onCalculate: (data: UserStats) => void;
}

export const NutritionForm: React.FC<Props> = ({ onCalculate }) => {
    const [formData, setFormData] = useState<UserStats>({
        age: 30,
        height: 165,
        weight: 60,
        activityLevel: 'moderate',
        goal: 'maintain',
        phase: 'Follicular'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCalculate(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'age' || name === 'height' || name === 'weight' ? Number(value) : value
        }));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50"
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-gray-800 mb-2">Your Personal Nutrition Plan</h2>
                <p className="text-gray-500">Tell us a little about yourself to get a customized plan.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">#</span>
                            Age
                        </label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border-gray-200 bg-white/50 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all outline-none"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-pink-600" />
                            Height (cm)
                        </label>
                        <input
                            type="number"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border-gray-200 bg-white/50 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all outline-none"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Target className="w-4 h-4 text-pink-600" />
                            Weight (kg)
                        </label>
                        <input
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border-gray-200 bg-white/50 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all outline-none"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Activity Level</label>
                        <select
                            name="activityLevel"
                            value={formData.activityLevel}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border-gray-200 bg-white/50 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all outline-none"
                        >
                            <option value="sedentary">Sedentary (Little or no exercise)</option>
                            <option value="light">Light (Exercise 1-3 days/week)</option>
                            <option value="moderate">Moderate (Exercise 3-5 days/week)</option>
                            <option value="active">Active (Exercise 6-7 days/week)</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Goal</label>
                        <select
                            name="goal"
                            value={formData.goal}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border-gray-200 bg-white/50 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all outline-none"
                        >
                            <option value="maintain">Maintain Weight</option>
                            <option value="loss">Fat Loss</option>
                            <option value="gain">Muscle Gain</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-pink-600" />
                        Cycle Phase (Optional)
                    </label>
                    <select
                        name="phase"
                        value={formData.phase}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-gray-200 bg-white/50 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all outline-none"
                    >
                        <option value="Follicular">Follicular</option>
                        <option value="Ovulation">Ovulation</option>
                        <option value="Luteal">Luteal</option>
                        <option value="Menstrual">Menstrual</option>
                    </select>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                    <Calculator className="w-5 h-5" />
                    Generate My Plan
                </motion.button>
            </form>
        </motion.div>
    );
};
