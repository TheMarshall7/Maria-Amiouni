"use client";

import { courses } from '@/data/courses';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CoursesPage() {
    useScrollReveal();

    return (
        <div className="bg-stone-50 min-h-screen relative overflow-hidden">
            {/* Atmospheric Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-salon-secondary/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#8B4513]/10 rounded-full blur-[200px]" />
            </div>

            {/* Premium Green Hero Section */}
            <section className="bg-salon-primary text-white py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 rounded-b-[2rem] sm:rounded-b-[3rem] shadow-2xl relative overflow-hidden z-10 transition-all duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-br from-salon-primary to-[#0f3026] opacity-90" />
                <div className="max-w-7xl mx-auto text-center reveal-on-scroll relative z-10">
                    <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-salon-light/80 uppercase mb-3 sm:mb-4 block">
                        Offerings
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold tracking-tight mb-6 sm:mb-8">
                        Courses & Immersion
                    </h1>
                    <p className="text-salon-light/90 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed px-4">
                        Deep dive containers to support your journey of self-realization, healing, and empowerment.
                    </p>
                </div>
            </section>

            {/* Premium Big Tiles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    {courses.map((course, index) => (
                        <Link
                            href={`/courses/${course.slug}`}
                            key={course.id}
                            className={`group relative h-[400px] sm:h-[450px] md:h-[500px] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-700 reveal-on-scroll ${course.slug === 'phoenix-rising-21-days' ? 'md:col-span-2' : ''
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${course.slug === 'phoenix-rising-21-days' ? 'object-top' : ''}`}
                                />
                                {/* Gradient Overlay for Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:via-black/50 transition-colors duration-700" />
                                <div className="absolute inset-0 bg-salon-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 sm:p-8 md:p-12 text-white">
                                {/* Decorative Elements */}
                                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 absolute top-4 sm:top-8 left-4 sm:left-8">
                                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-salon-light opacity-80" />
                                </div>

                                <div className="relative text-wrap transition-transform duration-700 group-hover:-translate-y-4">
                                    <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 sm:mb-4 block text-salon-light/90">
                                        Online Course
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 sm:mb-4 drop-shadow-lg leading-tight px-4">
                                        {course.title}
                                    </h2>
                                    <div className="w-16 sm:w-24 h-px bg-white/50 mx-auto mb-4 sm:mb-6" />
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/90 max-w-sm mx-auto leading-relaxed drop-shadow-md px-4">
                                        {course.description}
                                    </p>
                                </div>

                                {/* Bottom Info (Price & CTA) */}
                                <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 w-full px-6 sm:px-8 md:px-12 flex justify-between items-end opacity-90 group-hover:opacity-100 transition-opacity">
                                    <div className="text-left">
                                        <div className="text-xs font-medium text-white/60 uppercase tracking-widest mb-1">Investment</div>
                                        <div className="text-base sm:text-lg md:text-xl font-serif font-medium">{course.price}</div>
                                    </div>

                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-salon-primary transition-all duration-500">
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-[-45deg]" />
                                    </div>
                                </div>

                                {/* Center Icon Inspo (Moon/Logo placeholder if desired, using a subtle circle for now) */}
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 group-hover:opacity-100 transition-opacity duration-700 delay-200 hidden md:block">
                                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full border border-white/40" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
