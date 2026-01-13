"use client";

import { blogPosts as posts } from '@/data/posts';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WritingsPage() {
    useScrollReveal();

    return (
        <div className="bg-stone-50 min-h-screen relative overflow-hidden">
            {/* Atmospheric Background Elements */}
            {/* Atmospheric Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {/* Top Left Cluster - Softened, moved down */}
                <div className="absolute top-[20%] left-[-10%] w-[700px] h-[700px] bg-[#8B4513]/15 rounded-full blur-[200px]" />

                {/* Top Right - Very subtle to balance */}
                <div className="absolute top-[-10%] right-[-20%] w-[600px] h-[600px] bg-salon-primary/10 rounded-full blur-[180px]" />

                {/* Bottom Right - Large & Anchoring */}
                <div className="absolute bottom-[-15%] right-[-5%] w-[800px] h-[800px] bg-salon-secondary/20 rounded-full blur-[220px]" />
                <div className="absolute bottom-[0%] right-[5%] w-[400px] h-[400px] bg-[#8B4513]/10 rounded-full blur-[150px]" /> {/* Added brown cluster */}
            </div>

            {/* Premium Green Hero Section */}
            <section className="bg-salon-primary text-white py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 rounded-b-[2rem] sm:rounded-b-[3rem] shadow-2xl relative overflow-hidden z-10 transition-all duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-br from-salon-primary to-salon-secondary opacity-90" /> {/* Increased contrast */}
                <div className="max-w-7xl mx-auto text-center reveal-on-scroll relative z-10">
                    <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-salon-light/80 uppercase mb-3 sm:mb-4 block">
                        Journal & Reflections
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold tracking-tight mb-6 sm:mb-8">
                        Writings
                    </h1>
                    <p className="text-salon-light/90 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed px-4">
                        Explorations of mindfulness, yoga, and the journey to inner wholeness.
                    </p>
                </div>
            </section>

            {/* Content Grid - Floating Over Hero */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-12 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 -mt-12 sm:-mt-16">
                    {posts.map((post, i) => (
                        <Link
                            key={post.slug}
                            href={`/writings/${post.slug}`}
                            className="group block reveal-on-scroll bg-white/80 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full border border-white/20"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {/* Image Area */}
                            <div className="h-72 bg-stone-200 w-full relative overflow-hidden">
                                {post.image ? (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-stone-100 group-hover:bg-stone-200 transition-colors">
                                        <div className="text-center opacity-30">
                                            <span className="font-serif text-4xl text-salon-primary/50 block mb-2">❦</span>
                                        </div>
                                    </div>
                                )}
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-xs font-bold tracking-widest text-salon-secondary mb-3 sm:mb-4 uppercase">
                                    <span className="flex items-center mr-4">
                                        <Calendar className="w-3 h-3 mr-1.5" />
                                        {post.date}
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-salon-primary group-hover:text-salon-accent transition-colors leading-tight mb-3 sm:mb-4">
                                    {post.title}
                                </h2>

                                <p className="text-stone-500 line-clamp-3 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
                                    {post.excerpt || post.content.substring(0, 150) + "..."}
                                </p>

                                <div className="flex items-center text-salon-primary font-bold text-sm uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4 transition-all">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
