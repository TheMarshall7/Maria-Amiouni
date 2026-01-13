"use client";

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Link from 'next/link';

export default function BooksPage() {
    useScrollReveal();

    return (
        <div className="bg-stone-50 min-h-screen relative overflow-hidden">
            {/* Atmospheric Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-salon-primary/10 rounded-full blur-[150px]" />
                <div className="absolute top-[40%] left-[-20%] w-[600px] h-[600px] bg-[#8B4513]/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-salon-secondary/15 rounded-full blur-[180px]" />
            </div>

            {/* Premium Green Hero Section */}
            <section className="bg-salon-primary text-white py-32 px-6 md:px-12 rounded-b-[3rem] shadow-2xl relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-salon-primary to-salon-secondary opacity-90" />
                <div className="max-w-7xl mx-auto text-center reveal-on-scroll relative z-10">
                    <span className="text-sm font-bold tracking-[0.2em] text-salon-light/80 uppercase mb-4 block">
                        Publications
                    </span>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8">
                        Books
                    </h1>
                    <p className="text-salon-light/90 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                        Collected works of poetry, reflections, and spiritual insights.
                    </p>
                </div>
            </section>

            {/* Book Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-20">
                <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 md:p-16 shadow-xl border border-white/40 reveal-on-scroll">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                        {/* Book Cover Area */}
                        <div className="relative aspect-[3/4] bg-stone-200 rounded-2xl shadow-2xl flex items-center justify-center p-8 border border-stone-100 transform rotate-1 hover:rotate-0 transition-transform duration-700">
                            {/* Realistic Book Mockup Effect */}
                            <div className="absolute inset-x-4 top-0 bottom-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
                            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent rounded-l-md pointer-events-none" />

                            <div className="bg-white w-full h-full shadow-lg flex flex-col items-center justify-center text-center p-8 border border-stone-50 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-50" />
                                <span className="font-serif text-3xl text-salon-primary mb-2 relative z-10">Heaven Rings</span>
                                <span className="font-serif text-xl text-salon-secondary italic relative z-10">in my ears</span>
                                <div className="mt-8 w-12 h-12 border rounded-full border-salon-primary/20 flex items-center justify-center relative z-10">
                                    <span className="font-serif text-salon-primary">MA</span>
                                </div>
                            </div>
                        </div>

                        {/* Book Details */}
                        <div className="md:pr-12">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-salon-primary mb-6 leading-tight">
                                Heaven Rings in my Ears
                            </h2>
                            <div className="text-2xl font-medium text-salon-secondary mb-8 font-serif">£20.00</div>

                            <div className="space-y-6 text-stone-600 leading-relaxed text-lg mb-10 font-light">
                                <p>
                                    <span className="font-serif text-3xl text-salon-primary float-left mr-2 leading-[0.8] mt-1">"</span>
                                    Heaven rings in my ears" is a compilation of five years’ worth of scribbling notes in my journal & phone. You will notice a change in voice, in tone, in style, & in rhythm.
                                </p>
                                <p>
                                    As I myself have grown & transformed over the years, I discovered my ever-changing nature as well as my true essence.
                                </p>
                                <p>
                                    I try to explain this connection I feel with the Divine, with God, with the Universe in so many ways throughout these poems and I hope I am able to convey some of its essence to you.
                                </p>
                            </div>

                            <button className="bg-salon-primary text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-salon-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                                Purchase Copy <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
