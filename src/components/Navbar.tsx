import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Activity, Utensils, Sparkles, Calendar, LogOut, User as UserIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Workouts', href: '/workouts', icon: Activity },
    { name: 'Nutrition', href: '/nutrition', icon: Utensils },
    { name: 'AI Coach', href: '/coach', icon: Sparkles },
    { name: 'Cycle Tracker', href: '/cycle', icon: Calendar },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { user, logout, isAuthenticated } = useAuth();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                                A
                            </div>
                            <span className="font-display font-bold text-xl text-gray-900">AroMi</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {isAuthenticated && navigation.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={cn(
                                        "flex items-center space-x-1 text-sm font-medium transition-colors duration-200",
                                        isActive(item.href)
                                            ? "text-primary font-semibold"
                                            : "text-gray-500 hover:text-gray-900"
                                    )}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{item.name}</span>
                                    {isActive(item.href) && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute bottom-0 h-0.5 w-full bg-primary"
                                            style={{ bottom: '-22px' }} // Adjust based on height
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <UserIcon className="w-4 h-4" />
                                    </div>
                                    <span>{user?.name}</span>
                                </div>
                                <button
                                    onClick={logout}
                                    className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                                    title="Logout"
                                >
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium text-sm">
                                    Sign In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors"
                                >
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl overflow-hidden border-b border-gray-100"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {isAuthenticated ? (
                                <>
                                    <div className="flex items-center space-x-3 px-3 py-3 border-b border-gray-100 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <UserIcon className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium text-gray-900">{user?.name}</span>
                                    </div>
                                    {navigation.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-colors",
                                                    isActive(item.href)
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                )}
                                            >
                                                <Icon className="w-5 h-5" />
                                                <span>{item.name}</span>
                                            </Link>
                                        );
                                    })}
                                    <button
                                        onClick={() => {
                                            logout();
                                            setIsOpen(false);
                                        }}
                                        className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium text-red-500 hover:bg-red-50 transition-colors"
                                    >
                                        <LogOut className="w-5 h-5" />
                                        <span>Logout</span>
                                    </button>
                                </>
                            ) : (
                                <div className="space-y-2 pt-2">
                                    <Link
                                        to="/login"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/signup"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
