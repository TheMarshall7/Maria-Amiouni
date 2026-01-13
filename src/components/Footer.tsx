"use client";

import { Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Footer() {
    useScrollReveal();

    return (
        <footer className="bg-salon-primary text-white pt-12 sm:pt-16 pb-6 sm:pb-8 rounded-t-[2rem] sm:rounded-t-[3rem] mt-8 sm:mt-12 transition-all" suppressHydrationWarning>
            <div className="max-w-7xl mx-auto px-4 sm:px-6" suppressHydrationWarning>
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8 md:mb-12">
                    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center max-w-2xl mb-8 sm:mb-10 md:mb-0">
                        {/* Logo on Left */}
                        <div className="w-20 sm:w-24 shrink-0 reveal-on-scroll" suppressHydrationWarning>
                            <Image
                                src="/MA_Logo-05-White.webp"
                                alt="Maria Amiouni Logo"
                                width={120}
                                height={120}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>

                        {/* Text & Socials on Right of Logo */}
                        <div className="flex flex-col h-full pl-0 sm:pl-2 text-center md:text-left">
                            <p className="text-salon-light/80 italic text-sm sm:text-base leading-relaxed font-light mb-4 sm:mb-6 max-w-sm">
                                "To the conscious, heart centered leaders, mystics, & spiritual devotees."
                            </p>

                            <div className="flex gap-4">
                                <Link
                                    href="/utility/instagram"
                                    className="w-8 h-8 rounded-full border border-salon-secondary/50 bg-salon-secondary/20 flex items-center justify-center hover:bg-white hover:text-salon-primary transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-4 h-4" />
                                </Link>
                                {/* Placeholder Social Icons */}
                                <div className="w-8 h-8 rounded-full border border-salon-secondary/50 bg-salon-secondary/20 flex items-center justify-center hover:bg-white hover:text-salon-primary transition-all duration-300 cursor-pointer text-salon-light/70">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-salon-secondary/50 bg-salon-secondary/20 flex items-center justify-center hover:bg-white hover:text-salon-primary transition-all duration-300 cursor-pointer text-salon-light/70">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-auto mt-6 sm:mt-4 md:mt-0 text-center md:text-left">
                        <h4 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4 text-white font-medium">Let's stay connected</h4>
                        <p className="text-salon-light/70 text-xs sm:text-sm mb-4 sm:mb-6 font-light tracking-wide">Sign up to receive monthly love letters.</p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md md:max-w-none mx-auto md:mx-0">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-salon-secondary/20 border border-salon-secondary/50 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm text-white placeholder:text-salon-light/50 focus:outline-none focus:border-white w-full md:w-80 backdrop-blur-sm transition-all"
                            />
                            <button className="bg-white text-salon-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-salon-light transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-salon-secondary/30 gap-4 sm:gap-0">
                    <p className="text-salon-light/60 text-xs tracking-wider mb-0 text-center md:text-left uppercase">© 2024 Maria Amiouni. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-8 text-salon-light/60 text-xs uppercase tracking-widest font-medium">
                        <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
                        <Link href="/coaching" className="hover:text-white transition-colors">Coaching</Link>
                        <Link href="/books" className="hover:text-white transition-colors">Books</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
