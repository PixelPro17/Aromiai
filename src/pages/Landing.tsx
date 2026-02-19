
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Sparkles, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function Landing() {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="text-center space-y-8 pt-10 sm:pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl sm:text-7xl font-display font-bold text-gray-900 tracking-tight leading-tight">
                        Wellness tailored to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            your unique rhythm.
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                >
                    AroMi is your empathetic AI wellness companion. We sync your workouts, nutrition, and self-care with your energy levels and cycle.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center gap-4"
                >
                    <Link to="/dashboard" className="btn-primary flex items-center gap-2 text-lg px-8 py-3">
                        Start Your Journey <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link to="/coach" className="btn-secondary flex items-center gap-2 text-lg px-8 py-3">
                        Talk to AroMi
                    </Link>
                </motion.div>
            </section>

            {/* Feature Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                <FeatureCard
                    icon={Activity}
                    title="Adaptive Workouts"
                    description="Routines that adjust to your daily energy and cycle phase."
                    delay={0.1}
                    color="bg-orange-100 text-orange-600"
                />
                <FeatureCard
                    icon={Heart}
                    title="Holistic Nutrition"
                    description="Nutrient-focused meal plans that support your body's needs."
                    delay={0.2}
                    color="bg-green-100 text-green-600"
                />
                <FeatureCard
                    icon={Calendar}
                    title="Cycle Syncing"
                    description="Understand your rhythm with our smart menstrual health tracker."
                    delay={0.3}
                    color="bg-pink-100 text-pink-600"
                />
                <FeatureCard
                    icon={Sparkles}
                    title="AI Guidance"
                    description="24/7 empathetic support for your mental and physical well-being."
                    delay={0.4}
                    color="bg-purple-100 text-purple-600"
                />
            </section>

            {/* Visual Decorator */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-pink-200/30 rounded-full blur-3xl opacity-60" />
            </div>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, description, delay, color }: { icon: any, title: string, description: string, delay: number, color: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="glass-card p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all"
        >
            <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
}
