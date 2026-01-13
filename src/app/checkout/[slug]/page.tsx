import { Suspense } from 'react';
import { courseData } from '@/data/courseContent';
import CheckoutClient from './CheckoutClient';

export function generateStaticParams() {
  return Object.keys(courseData).map((slug) => ({ slug }));
}

export default async function CheckoutPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={
      <div className="bg-stone-50 min-h-screen py-12 px-6 flex items-center justify-center">
        <div className="text-stone-600">Loading checkout...</div>
      </div>
    }>
      <CheckoutClient params={params} />
    </Suspense>
  );
}
