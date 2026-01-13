"use client";

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Calendar, Clock, Sparkles, Heart } from 'lucide-react';

export default function DiscoveryCallPage() {
    useScrollReveal();

    return (
        <div className="bg-white min-h-screen relative">
            {/* Atmospheric Gradient Orbs - Full Width */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] right-[-15%] w-[800px] h-[800px] bg-salon-secondary/15 rounded-full blur-[150px] mix-blend-multiply" />
                <div className="absolute top-[40%] left-[-20%] w-[900px] h-[900px] bg-[#8B4513]/10 rounded-full blur-[180px] mix-blend-multiply" />
                <div className="absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] bg-salon-primary/12 rounded-full blur-[160px] mix-blend-multiply" />
            </div>

            {/* Premium Hero Section */}
            <div className="relative pt-24 pb-16 px-6 z-10">
                <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
                    {/* Decorative Top */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-salon-secondary/40 to-transparent" />
                        <Sparkles className="w-5 h-5 text-salon-secondary animate-pulse" />
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-salon-secondary/40 to-transparent" />
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-salon-primary mb-8 leading-tight">
                        Book a Discovery Call
                    </h1>
                    
                    <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12">
                        Let's connect and explore how we can support your journey of self-realization and transformation.
                    </p>

                    {/* Trust Elements */}
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-stone-600">
                        <div className="flex items-center gap-2 bg-salon-light/30 px-4 py-2 rounded-full">
                            <Clock className="w-4 h-4 text-salon-primary" />
                            <span>30 Minutes</span>
                        </div>
                        <div className="flex items-center gap-2 bg-salon-light/30 px-4 py-2 rounded-full">
                            <Calendar className="w-4 h-4 text-salon-primary" />
                            <span>Free Consultation</span>
                        </div>
                        <div className="flex items-center gap-2 bg-salon-light/30 px-4 py-2 rounded-full">
                            <Heart className="w-4 h-4 text-salon-primary" />
                            <span>1-on-1 Session</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Calendar Widget Section */}
            <div className="relative z-10 px-6 pb-24">
                <div className="max-w-5xl mx-auto reveal-on-scroll">
                    {/* Premium Card Container */}
                    <div className="relative group">
                        {/* Card Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-salon-secondary/30 via-salon-primary/20 to-salon-secondary/30 rounded-[3.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                        
                        {/* Main Card */}
                        <div className="relative bg-gradient-to-br from-white via-salon-light/10 to-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border-2 border-stone-200/60 overflow-hidden">
                            {/* Decorative Header Bar */}
                            <div className="bg-gradient-to-r from-salon-primary via-salon-secondary to-salon-primary h-2" />
                            
                            {/* Calendar Content */}
                            <div className="p-8 md:p-12">
                                <div className="bg-stone-50/50 backdrop-blur-sm rounded-2xl h-[700px] shadow-inner overflow-hidden border border-stone-200/80 relative">
                                    {/* Calendly Inline Widget Placeholder */}
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-salon-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <Calendar className="w-8 h-8 text-salon-primary" />
                                            </div>
                                            <p className="text-stone-600 text-lg mb-4 font-medium">Calendly Widget Loading...</p>
                                            <a
                                                href="https://calendly.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-salon-primary hover:text-salon-accent transition-colors font-medium underline underline-offset-4"
                                            >
                                                Open Calendly
                                            </a>
                                            <p className="text-stone-400 text-sm mt-6">(Simulated Calendly Embed)</p>
                                        </div>
                                    </div>
                                    {/* In production: <InlineWidget url="https://calendly.com/maria-amiouni/discovery" /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Information */}
                    <div className="mt-12 text-center">
                        <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-stone-200/60 shadow-sm">
                            <p className="text-stone-600 text-sm leading-relaxed">
                                <span className="font-semibold text-salon-primary">Note:</span> After booking, you'll receive a confirmation email with all the details for our call.
                            </p>
                        </div>
                    </div>

                    {/* Decorative Bottom Flourish */}
                    <div className="flex items-center justify-center mt-16 gap-3">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-salon-secondary/30" />
                        <div className="w-2 h-2 rounded-full bg-salon-secondary/40" />
                        <div className="w-16 h-px bg-gradient-to-r from-salon-secondary/30 via-salon-primary/30 to-salon-secondary/30" />
                        <div className="w-2 h-2 rounded-full bg-salon-secondary/40" />
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-salon-secondary/30" />
                    </div>
                </div>
            </div>
        </div>
    );
}
