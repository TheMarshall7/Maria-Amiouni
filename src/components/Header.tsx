"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Phoenix Rising', href: '/courses/phoenix-rising-21-days' },
        { name: 'Courses', href: '/courses' },
        { name: 'Coaching', href: '/coaching' },
        { name: 'Women’s Circle', href: '/womens-circle' },
        { name: 'Books', href: '/books' },
        { name: 'Writings', href: '/writings' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-stone-200/50 ${scrolled ? 'backdrop-blur-md bg-salon-bg/95 shadow-sm' : 'backdrop-blur-md bg-salon-bg/80'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col items-center leading-none group">
                        <img src="https://storage.googleapis.com/msgsndr/F1J2yvd2AUT4owDs9EPl/media/6965dd7798efbda6fd42159a.png" alt="Maria Amiouni" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-6 text-sm font-medium tracking-wide text-salon-secondary">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`hover:text-salon-primary transition-colors ${pathname === link.href ? 'text-salon-primary' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/utility/discovery-call"
                            className="hidden md:flex items-center gap-2 bg-salon-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10"
                        >
                            <span className="font-sans font-semibold">Book Discovery Call</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        <button
                            className="lg:hidden"
                            onClick={() => setIsOpen(true)}
                        >
                            <Menu className="w-6 h-6 text-salon-primary" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-salon-bg z-[60] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full overflow-y-auto">
                    <div className="min-h-full flex flex-col items-center justify-center py-20 px-6 space-y-6 sm:space-y-8">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 z-10"
                            aria-label="Close menu"
                        >
                            <X className="w-8 h-8 text-salon-primary" />
                        </button>

                        <Link 
                            href="/" 
                            onClick={() => setIsOpen(false)} 
                            className="text-2xl sm:text-3xl font-serif text-salon-primary hover:text-salon-accent transition-colors"
                        >
                            Home
                        </Link>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl sm:text-3xl font-serif text-salon-primary hover:text-salon-accent transition-colors text-center"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="/utility/discovery-call"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 sm:mt-8 bg-salon-primary text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium shadow-xl hover:bg-stone-800 transition-colors"
                        >
                            Book Discovery Call
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
