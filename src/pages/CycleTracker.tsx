import { useState, useEffect } from 'react';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    addDays,
    subDays,
    differenceInDays,
    parseISO
} from 'date-fns';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export function CycleTracker() {
    const [currentDate, setCurrentDate] = useState(new Date());
    // Mock local storage for MVP
    const [periodDays, setPeriodDays] = useState<string[]>(() => {
        const saved = localStorage.getItem('aromi_period_days');
        return saved ? JSON.parse(saved) : [];
    });
    const [cycleLength, setCycleLength] = useState(28); // Default

    useEffect(() => {
        localStorage.setItem('aromi_period_days', JSON.stringify(periodDays));
    }, [periodDays]);

    const togglePeriodDay = (day: Date) => {
        const dateStr = day.toISOString().split('T')[0];
        if (periodDays.includes(dateStr)) {
            setPeriodDays(periodDays.filter(d => d !== dateStr));
        } else {
            setPeriodDays([...periodDays, dateStr]);
        }
    };

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

    // Prediction Logic
    // 1. Find the latest period start date
    const sortedDates = [...periodDays].sort();
    const lastPeriodDate = sortedDates.length > 0 ? parseISO(sortedDates[sortedDates.length - 1]) : null;
    // Simple prediction: last date + cycle length. 
    // Better: cluster dates, find start of last cluster. 
    // MVP: just use the last marked date as a rough anchor if we don't have clusters.
    // Let's try to find the start of the last contagious block.
    let lastPeriodStart = lastPeriodDate;
    if (lastPeriodDate) {
        // Walk back to find the start
        let curr = lastPeriodDate;
        while (periodDays.includes(subDays(curr, 1).toISOString().split('T')[0])) {
            curr = subDays(curr, 1);
        }
        lastPeriodStart = curr;
    }

    const nextPeriodStart = lastPeriodStart ? addDays(lastPeriodStart, cycleLength) : null;
    const ovulationDate = nextPeriodStart ? subDays(nextPeriodStart, 14) : null;
    const fertileWindowStart = ovulationDate ? subDays(ovulationDate, 5) : null;
    const fertileWindowEnd = ovulationDate ? addDays(ovulationDate, 1) : null;

    // Render Calendar
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

    const isPeriod = (day: Date) => periodDays.includes(day.toISOString().split('T')[0]);

    const isPredictedPeriod = (day: Date) => {
        if (!nextPeriodStart) return false;
        // Predict 5 days length
        const diff = differenceInDays(day, nextPeriodStart);
        return diff >= 0 && diff < 5;
    };

    const isOvulation = (day: Date) => ovulationDate && isSameDay(day, ovulationDate);
    const isFertile = (day: Date) => {
        if (!fertileWindowStart || !fertileWindowEnd) return false;
        return day >= fertileWindowStart && day <= fertileWindowEnd;
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-display font-bold text-gray-900">Cycle Tracker</h1>
                <p className="text-gray-500">Log your flow to get personalized wellness insights.</p>
            </div>

            {/* Stats / Predictions */}
            <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-xl text-center">
                    <p className="text-sm text-gray-500">Next Period</p>
                    <p className="text-xl font-bold text-primary">
                        {nextPeriodStart ? format(nextPeriodStart, 'MMM d') : '-'}
                    </p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center">
                    <p className="text-sm text-gray-500">Est. Ovulation</p>
                    <p className="text-xl font-bold text-secondary">
                        {ovulationDate ? format(ovulationDate, 'MMM d') : '-'}
                    </p>
                </div>
            </div>

            {/* Calendar */}
            <div className="glass-panel p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-6">
                    <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeft className="w-5 h-5" /></button>
                    <h2 className="text-lg font-semibold text-gray-900">{format(currentDate, 'MMMM yyyy')}</h2>
                    <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight className="w-5 h-5" /></button>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-2 text-center">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                        <div key={d} className="text-xs font-medium text-gray-400">{d}</div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                    {calendarDays.map((day) => {
                        const isCurrentMonth = isSameMonth(day, monthStart);
                        const isP = isPeriod(day);
                        const isPred = isPredictedPeriod(day);
                        const isOv = isOvulation(day);
                        const isF = isFertile(day);

                        return (
                            <button
                                key={day.toISOString()}
                                onClick={() => togglePeriodDay(day)}
                                className={cn(
                                    "h-10 w-10 mx-auto rounded-full flex items-center justify-center text-sm transition-all relative",
                                    !isCurrentMonth && "text-gray-300",
                                    isCurrentMonth && !isP && !isPred && !isF && "text-gray-700 hover:bg-gray-100",
                                    isP && "bg-secondary text-white font-medium shadow-md",
                                    isPred && "border border-secondary border-dashed text-secondary",
                                    isF && !isP && !isOv && "bg-purple-50 text-purple-700",
                                    isOv && "bg-primary text-white font-bold ring-2 ring-primary ring-offset-2",
                                    isSameDay(day, new Date()) && !isP && "bg-gray-900 text-white"
                                )}
                            >
                                {format(day, 'd')}
                                {isP && <motion.div layoutId="period-dot" className="absolute bottom-1 w-1 h-1 bg-white rounded-full opacity-50" />}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-6 flex flex-wrap gap-4 justify-center text-xs text-gray-500">
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-secondary"></div> Period</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full border border-secondary border-dashed"></div> Predicted</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-primary"></div> Ovulation</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-purple-50"></div> Fertile</div>
                </div>
            </div>

            {/* Manual Input for Cycle Length (Simulated Settings) */}
            <div className="glass-card p-4 rounded-xl flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-gray-400" />
                    <div>
                        <p className="text-sm font-medium text-gray-900">Cycle Length</p>
                        <p className="text-xs text-gray-500">Used for predictions</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => setCycleLength(c => Math.max(21, c - 1))} className="px-3 py-1 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">-</button>
                    <span className="font-medium w-8 text-center">{cycleLength}</span>
                    <button onClick={() => setCycleLength(c => Math.min(35, c + 1))} className="px-3 py-1 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">+</button>
                </div>
            </div>
        </div>
    );
}
