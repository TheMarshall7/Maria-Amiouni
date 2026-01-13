"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-salon-bg min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-serif text-salon-primary mb-6">404</h1>
        <p className="text-xl md:text-2xl text-stone-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-salon-primary text-white px-8 py-4 rounded-full text-base font-medium hover:bg-stone-800 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
