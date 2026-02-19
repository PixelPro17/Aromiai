import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/dashboard';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, validation would happen here
        // For MVP, we just take the first part of email as name
        const name = email.split('@')[0];
        // Capitalize first letter
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

        login(email, formattedName);
        console.log('Logging in and navigating to:', from);
        navigate(from, { replace: true });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full glass-panel p-8 rounded-2xl shadow-xl"
            >
                <div className="text-center mb-8">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                        A
                    </div>
                    <h2 className="text-2xl font-display font-bold text-gray-900">Welcome Back</h2>
                    <p className="text-gray-500 mt-2">Sign in to continue your wellness journey</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
                    >
                        Sign In <ArrowRight className="w-4 h-4" />
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-primary font-semibold hover:underline">
                        Sign up
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
