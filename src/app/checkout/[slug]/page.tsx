"use client";

import { use } from 'react';
import { notFound, useSearchParams } from 'next/navigation';
import { courseData } from '@/data/courseContent';
import { Lock, CreditCard } from 'lucide-react';

export default function CheckoutPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const searchParams = useSearchParams();
    const tierName = searchParams.get('tier');

    const course = courseData[slug];
    if (!course) notFound();

    const selectedTier = course.pricing
        ? course.pricing.find((t: any) => t.name === tierName) || course.pricing[0]
        : { name: 'Standard Connection', price: course.bookHook || "Standard" };

    return (
        <div className="bg-stone-50 min-h-screen py-12 px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Left Col: Order Summary */}
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                        <h2 className="font-serif text-2xl mb-6">Order Summary</h2>
                        <div className="flex gap-4 mb-6">
                            <div className="w-24 h-24 bg-stone-200 rounded-lg overflow-hidden shrink-0">
                                <img src={course.image} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">{course.title}</h3>
                                <p className="text-stone-500 text-sm mt-1">{selectedTier.name}</p>
                            </div>
                        </div>
                        <div className="border-t border-stone-100 pt-4 flex justify-between items-center font-medium text-lg">
                            <span>Total Due</span>
                            <span>{selectedTier.price}</span>
                        </div>
                        {selectedTier.sub && (
                            <p className="text-right text-xs text-stone-400 mt-1">{selectedTier.sub}</p>
                        )}
                    </div>

                    <div className="bg-stone-100 p-6 rounded-xl flex items-start gap-4 text-stone-600 text-sm">
                        <Lock className="w-5 h-5 shrink-0" />
                        <p>Secure Checkout. All transactions are encrypted and processed securely. We do not store your card details.</p>
                    </div>
                </div>

                {/* Right Col: Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 h-fit">
                    <h2 className="font-serif text-2xl mb-6">Customer Information</h2>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium uppercase tracking-wider text-stone-500">First Name</label>
                                <input type="text" className="w-full p-3 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium uppercase tracking-wider text-stone-500">Last Name</label>
                                <input type="text" className="w-full p-3 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium uppercase tracking-wider text-stone-500">Email Address</label>
                            <input type="email" className="w-full p-3 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900" />
                        </div>

                        <div className="pt-6 border-t border-stone-100">
                            <h3 className="font-serif text-xl mb-4">Payment Method</h3>
                            <div className="p-4 border border-stone-200 rounded-xl bg-stone-50 flex items-center gap-3 mb-4">
                                <CreditCard className="w-5 h-5 text-stone-900" />
                                <span className="font-medium">Credit / Debit Card</span>
                            </div>

                            {/* Placeholder Card Elements */}
                            <div className="space-y-4">
                                <input type="text" placeholder="Card Number" className="w-full p-3 border border-stone-200 rounded-lg" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="MM / YY" className="w-full p-3 border border-stone-200 rounded-lg" />
                                    <input type="text" placeholder="CVC" className="w-full p-3 border border-stone-200 rounded-lg" />
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-salon-primary text-white py-4 rounded-full font-medium hover:bg-stone-800 transition-all shadow-xl mt-4">
                            Complete Payment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
