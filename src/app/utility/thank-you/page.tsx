import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function ThankYouPage() {
    return (
        <div className="bg-salon-bg min-h-screen flex items-center justify-center p-6">
            <div className="max-w-md text-center bg-white p-12 rounded-[3rem] shadow-xl border border-stone-100">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 text-salon-primary">
                    <Heart className="w-8 h-8 fill-current" />
                </div>
                <h1 className="text-4xl font-serif text-salon-primary mb-6">Thank You</h1>
                <p className="text-stone-600 mb-8 leading-relaxed">
                    You are now on the list to receive my monthly love letters. I look forward to connecting with you.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-salon-primary text-white px-8 py-3 rounded-full font-medium hover:bg-stone-800 transition-colors"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
