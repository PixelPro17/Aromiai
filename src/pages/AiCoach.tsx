import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

type Message = {
    id: number;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
};

const initialMessages: Message[] = [
    {
        id: 1,
        text: "Hi Anamika! I noticed you re near your ovulation phase. You might be feeling more energetic and social today. How can I support your wellness right now?",
        sender: 'ai',
        timestamp: new Date(),
    },
];

export function AiCoach() {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now(),
            text: input,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: Message = {
                id: Date.now() + 1,
                text: getAIResponse(userMsg.text),
                sender: 'ai',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="max-w-3xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-display font-bold text-gray-900">AroMi Coach</h1>
                <p className="text-gray-500">Your empathetic wellness companion.</p>
            </div>

            <div className="flex-1 overflow-y-auto glass-panel rounded-2xl p-6 shadow-sm border border-white/50 mb-4 space-y-4">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                            "flex gap-3 max-w-[80%]",
                            msg.sender === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                        )}
                    >
                        <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                            msg.sender === 'user' ? "bg-primary text-white" : "bg-white text-primary shadow-sm"
                        )}>
                            {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                        </div>

                        <div className={cn(
                            "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                            msg.sender === 'user'
                                ? "bg-primary text-white rounded-tr-none"
                                : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                        )}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-3 max-w-[80%] mr-auto"
                    >
                        <div className="w-8 h-8 rounded-full bg-white text-primary shadow-sm flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 flex items-center gap-1">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                                className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                                className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full pl-6 pr-14 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm bg-white/80 backdrop-blur-md"
                />
                <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="absolute right-3 top-3 p-2 bg-primary text-white rounded-xl hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <Send className="w-5 h-5" />
                </button>
            </form>
        </div>
    );
}

function getAIResponse(input: string): string {
    const lower = input.toLowerCase();
    if (lower.includes('tired') || lower.includes('exhausted')) {
        return "It sounds like your body is asking for rest. Since you're in the luteal phase, energy dips are normal. Would you like a 10-minute restorative yoga routine or a guided meditation?";
    }
    if (lower.includes('workout') || lower.includes('exercise')) {
        return "Based on your current energy levels, I'd recommend something moderate but engaging, like the 20-minute Morning Flow Yoga. Shall I start that for you?";
    }
    if (lower.includes('hungry') || lower.includes('food')) {
        return "Nourishing your body is key! For this phase of your cycle, foods rich in magnesium like dark chocolate, nuts, and leafy greens are great. How about a smoothie bowl?";
    }
    return "I hear you. Remember, listening to your body is the most productive thing you can do. Is there anything specific on your mind regarding your wellness today?";
}
