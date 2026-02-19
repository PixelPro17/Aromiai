
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Droplets, Flame, RefreshCcw } from 'lucide-react';
import type { MacroBreakdown } from '../../utils/nutritionLogic';
import type { FoodItem } from '../../data/foodData';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface Props {
    macros: MacroBreakdown;
    mealPlan: Record<string, FoodItem>;
    onReset: () => void;
}

export const NutritionResults: React.FC<Props> = ({ macros, mealPlan, onReset }) => {
    const printRef = useRef<HTMLDivElement>(null);

    const handleDownloadPDF = async () => {
        if (!printRef.current) return;

        // Temporarily hide the buttons for the screenshot
        const buttons = printRef.current.querySelectorAll('button');
        buttons.forEach(btn => btn.style.display = 'none');

        const canvas = await html2canvas(printRef.current, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('My_AroMi_Plan.pdf');

        // Restore buttons
        buttons.forEach(btn => btn.style.display = '');
    };

    return (
        <div className="space-y-8 animate-in fade-in zoom-in duration-500" ref={printRef}>
            <div className="flex justify-between items-center bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-white/60">
                <div>
                    <h2 className="text-2xl font-display font-bold text-gray-800">Your Daily Plan</h2>
                    <p className="text-gray-500 text-sm">Based on your goals & biology</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={onReset}
                        className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                    >
                        <RefreshCcw className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleDownloadPDF}
                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-white font-medium shadow-md hover:bg-primary-hover transition-all"
                    >
                        <Download className="w-5 h-5" />
                        Download Plan
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard
                    label="Total Calories"
                    value={macros.calories}
                    unit="kcal"
                    color="bg-rose-50 text-rose-600 border-rose-100"
                    icon={<Flame className="w-5 h-5" />}
                />
                <StatCard
                    label="Protein"
                    value={macros.protein}
                    unit="g"
                    color="bg-orange-50 text-orange-600 border-orange-100"
                />
                <StatCard
                    label="Carbs"
                    value={macros.carbs}
                    unit="g"
                    color="bg-emerald-50 text-emerald-600 border-emerald-100"
                />
                <StatCard
                    label="Fats"
                    value={macros.fats}
                    unit="g"
                    color="bg-blue-50 text-blue-600 border-blue-100"
                />
            </div>

            {/* Hydration & Micros */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 glass-card p-6 rounded-2xl">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-blue-500" /> Hydration Goal
                    </h3>
                    <div className="text-4xl font-black text-blue-500 mb-2">
                        {(macros.hydration / 1000).toFixed(1)}L
                    </div>
                    <p className="text-sm text-gray-500">Based on your weight (35ml/kg).</p>
                </div>

                <div className="col-span-1 md:col-span-2 glass-card p-6 rounded-2xl">
                    <h3 className="font-bold text-gray-800 mb-4">Daily Nutrient Targets</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <MicroItem label="Iron" value="18mg" desc="Energy & blood health" />
                        <MicroItem label="Calcium" value="1000mg" desc="Bone density strength" />
                        <MicroItem label="Magnesium" value="310mg" desc="Muscle function & mood" />
                        <MicroItem label="Vitamin D" value="600 IU" desc="Immunity & bone health" />
                    </div>
                </div>
            </div>

            {/* Meal Plan */}
            <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-gray-800">Recommended Meals</h3>

                {Object.entries(mealPlan).map(([mealType, food], index) => (
                    <MealCard key={mealType} type={mealType} food={food} index={index} />
                ))}
            </div>
        </div>
    );
};

const StatCard = ({ label, value, unit, color, icon }: any) => (
    <div className={`p-5 rounded-2xl border ${color} flex flex-col items-center justify-center text-center transition-transform hover:scale-105`}>
        {icon && <div className="mb-2 opacity-80">{icon}</div>}
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-sm font-medium opacity-80 uppercase tracking-wide">{label} ({unit})</span>
    </div>
);

const MicroItem = ({ label, value, desc }: any) => (
    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg border border-gray-100">
        <div>
            <div className="font-semibold text-gray-800">{label}</div>
            <div className="text-xs text-gray-500">{desc}</div>
        </div>
        <div className="font-bold text-primary">{value}</div>
    </div>
);

const MealCard = ({ type, food, index }: { type: string, food: FoodItem, index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row hover:shadow-md transition-shadow"
    >
        <div className="w-full md:w-48 h-48 md:h-auto relative">
            <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {type}
            </div>
        </div>

        <div className="p-6 flex flex-col justify-center flex-1">
            <h4 className="text-xl font-bold text-gray-900 mb-2">{food.name}</h4>

            <div className="flex gap-4 mb-4">
                <div className="text-sm"><span className="font-bold">{food.calories}</span> kcal</div>
                <div className="text-sm"><span className="font-bold text-orange-600">{food.protein}g</span> P</div>
                <div className="text-sm"><span className="font-bold text-emerald-600">{food.carbs}g</span> C</div>
                <div className="text-sm"><span className="font-bold text-blue-600">{food.fats}g</span> F</div>
            </div>

            <div className="flex gap-2">
                {food.iron && <Badge label="High Iron" color="bg-red-100 text-red-700" />}
                {food.fiber && <Badge label="High Fiber" color="bg-green-100 text-green-700" />}
            </div>
        </div>
    </motion.div>
);

const Badge = ({ label, color }: any) => (
    <span className={`px-2 py-1 rounded-md text-xs font-semibold ${color}`}>
        {label}
    </span>
);
