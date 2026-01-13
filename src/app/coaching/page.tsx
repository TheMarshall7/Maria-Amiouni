"use client";

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { coachingServices as services } from '@/data/coaching';

export default function CoachingPage() {
    useScrollReveal();

    return (
        <div className="bg-stone-50 min-h-screen relative overflow-hidden">
            {/* Atmospheric Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-salon-secondary/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-[#8B4513]/10 rounded-full blur-[200px]" />
            </div>

            {/* Premium Green Hero Section */}
            <section className="bg-salon-primary text-white py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 rounded-b-[2rem] sm:rounded-b-[3rem] shadow-2xl relative overflow-hidden z-10 transition-all duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-br from-salon-primary to-[#0f3026] opacity-90" />
                <div className="max-w-7xl mx-auto text-center reveal-on-scroll relative z-10">
                    <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-salon-light/80 uppercase mb-3 sm:mb-4 block">
                        One on One
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold tracking-tight mb-6 sm:mb-8">
                        Coaching & Mentorship
                    </h1>
                    <p className="text-salon-light/90 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed px-4">
                        Personalized guidance to unlock healing, remember your purpose, and align with your highest self.
                    </p>
                </div>
            </section>

            {/* Services Stack */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 relative z-20">
                <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 reveal-on-scroll flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } ${index % 2 === 1
                                    ? 'bg-salon-primary text-white'
                                    : 'bg-white text-salon-primary'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Content Section */}
                            <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col justify-center relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${index % 2 === 1 ? 'bg-white/10 text-white' : 'bg-salon-bg text-salon-secondary'
                                        }`}>
                                        <Star className="w-5 h-5" />
                                    </div>
                                    <span className={`text-xs font-bold uppercase tracking-widest ${index % 2 === 1 ? 'text-salon-light/70' : 'text-salon-secondary'
                                        }`}>
                                        Session
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
                                    {service.title}
                                </h2>

                                <div className={`text-lg sm:text-xl font-medium mb-6 sm:mb-8 ${index % 2 === 1 ? 'text-salon-light' : 'text-stone-900'
                                    }`}>
                                    {service.price}
                                </div>

                                <p className={`text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-xl ${index % 2 === 1 ? 'text-stone-300' : 'text-stone-600'
                                    }`}>
                                    {service.description}
                                </p>

                                <Link
                                    href="/utility/discovery-call"
                                    className={`inline-flex items-center self-start px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${index % 2 === 1
                                            ? 'bg-white text-salon-primary hover:bg-salon-light'
                                            : 'bg-salon-primary text-white hover:bg-salon-accent'
                                        }`}
                                >
                                    Book Session <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>

                            {/* Image Section */}
                            <div className="w-full md:w-[45%] h-[300px] md:h-auto relative overflow-hidden">
                                <div className={`absolute inset-0 z-10 ${index % 2 === 1 ? 'bg-salon-primary/20 mix-blend-overlay' : ''
                                    }`} />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                {index % 2 === 1 && (
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-salon-primary/80 md:hidden" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
