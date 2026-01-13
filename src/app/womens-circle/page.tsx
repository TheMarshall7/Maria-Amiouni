"use client";

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Link from 'next/link';

export default function WomensCirclePage() {
    useScrollReveal();

    return (
        <div className="bg-stone-50 min-h-screen relative overflow-hidden">
            {/* Atmospheric Background - Warm & Cozy */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {/* Warm Brown Cluster - Top Right */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#8B4513]/15 rounded-full blur-[200px]" />
                {/* Soft Green - Bottom Left */}
                <div className="absolute bottom-[-10%] left-[-20%] w-[700px] h-[700px] bg-salon-secondary/10 rounded-full blur-[180px]" />
            </div>

            {/* Premium Green Hero Section */}
            <section className="bg-salon-primary text-white py-32 px-6 md:px-12 rounded-b-[3rem] shadow-2xl relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-salon-primary to-[#0f3026] opacity-90" />

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-salon-secondary/20 rounded-full blur-[60px]" />
                </div>

                <div className="max-w-4xl mx-auto text-center reveal-on-scroll relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white/10 mx-auto mb-8 flex items-center justify-center backdrop-blur-sm border border-white/20">
                        {/* Moon Icon */}
                        <div className="w-8 h-8 rounded-full bg-transparent border-r-2 border-white/80 rotate-45 transform -translate-x-1"></div>
                    </div>

                    <span className="text-sm font-bold tracking-[0.25em] text-salon-light/70 uppercase mb-4 block">
                        The Gathering
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-10 leading-none">
                        Women's Circle
                    </h1>

                    <blockquote className="font-serif text-2xl md:text-3xl text-salon-light/90 leading-relaxed max-w-2xl mx-auto italic font-light opacity-90">
                        "A circle of women may just be the most powerful force known to humanity."
                        <footer className="text-sm text-salon-light/60 mt-4 font-sans not-italic tracking-wider uppercase font-bold">— Jeanette LeBlanc</footer>
                    </blockquote>
                </div>
            </section>

            {/* Interactive Invitation Card */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 pt-40 relative z-20">
                <div className="max-w-2xl mx-auto">
                    <div className="group bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-14 shadow-xl border border-white/60 reveal-on-scroll hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">

                        {/* Decorative background element inside card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B4513]/5 rounded-full blur-[80px] -mr-16 -mt-16 transition-all duration-700 group-hover:bg-[#8B4513]/10" />

                        {/* Premium Image */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop"
                                    alt="Women's Circle"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative z-10 text-center pt-16">
                            <h2 className="text-3xl font-serif text-salon-primary mb-6">Join the Circle</h2>

                            <p className="text-stone-600 text-lg md:text-xl leading-relaxed mb-10 font-light">
                                Held on <span className="font-medium text-salon-secondary">New or Full Moon</span> to set intentions, release, and reconnect. Hosted at least twice a month online or in my Dubai home.
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-10">
                                <span className="flex items-center text-stone-500 text-sm tracking-widest uppercase font-bold">
                                    <span className="w-2 h-2 rounded-full bg-salon-secondary mr-3 animate-pulse"></span>
                                    Online
                                </span>
                                <span className="hidden md:block w-px h-4 bg-stone-300"></span>
                                <span className="flex items-center text-stone-500 text-sm tracking-widest uppercase font-bold">
                                    <span className="w-2 h-2 rounded-full bg-[#8B4513] mr-3"></span>
                                    In-Person (Dubai)
                                </span>
                            </div>

                            <div className="py-2 mb-8">
                                <span className="text-5xl font-serif text-salon-primary">200 AED</span>
                            </div>

                            <Link
                                href="/booking"
                                className="inline-flex items-center justify-center bg-salon-primary text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#8B4513] transition-all duration-300 shadow-lg hover:shadow-orange-900/20 transform group-hover:scale-105"
                            >
                                Reserve Your Spot
                            </Link>
                        </div>
                    </div>

                    {/* "Soft" Bottom Text */}
                    <div className="text-center mt-12 reveal-on-scroll">
                        <p className="text-stone-400 text-sm font-light italic">
                            Come as you are. All of you is welcome here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
