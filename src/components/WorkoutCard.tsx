
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle2, ChevronUp, ChevronDown, Info } from 'lucide-react';
import type { WorkoutItem } from '../data/workoutData';

interface Props {
    workout: WorkoutItem;
}

export const WorkoutCard: React.FC<Props> = ({ workout }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative h-[320px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer bg-white"
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Background Image */}
            <img
                src={workout.image}
                alt={workout.name}
                className={`w-full h-full object-cover transition-transform duration-700 ${isOpen ? 'scale-110' : 'group-hover:scale-105'}`}
            />

            {/* Gradient Overlay - Always Visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">

                {/* Title Section (Moves up when open) */}
                <motion.div
                    layout
                    className="mb-2"
                >
                    <h3 className="text-2xl font-display font-bold shadow-sm">{workout.name}</h3>

                    {/* Show 'Tap for details' only when closed */}
                    {!isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2 text-xs font-medium text-gray-200 mt-2"
                        >
                            <Info className="w-4 h-4" />
                            <span>Tap to see benefits</span>
                        </motion.div>
                    )}
                </motion.div>

                {/* Details Section (Slides up/Fade in) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-sm">

                                <div className="mb-3 space-y-1">
                                    <p className="text-xs font-bold uppercase tracking-wider text-pink-200">Why it's good:</p>
                                    <ul className="space-y-1.5">
                                        {workout.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-pink-300 flex-shrink-0" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center gap-2 pt-2 border-t border-white/20">
                                    <Clock className="w-3.5 h-3.5 text-pink-300" />
                                    <span className="font-semibold text-pink-100">Best Time:</span>
                                    <span>{workout.bestTime}</span>
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Indicator Chevron */}
            <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm p-1.5 rounded-full text-white/80 border border-white/20">
                {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
            </div>
        </div>
    );
};
