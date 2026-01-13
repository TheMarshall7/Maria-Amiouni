"use client";

import { ArrowRight, Star, Quote } from 'lucide-react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="overflow-hidden bg-salon-bg min-h-screen relative">
      {/* Shared Atmospheric Orbs (Consistent with Phoenix) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#8B4513]/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-salon-secondary/10 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-salon-primary/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 px-6 z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div className="relative z-10 reveal-on-scroll">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/50 border border-salon-primary/20 mb-10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-salon-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-salon-primary">Healing & Transformation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-salon-primary mb-8 sm:mb-12 leading-[1.1]">
              To the conscious, <br />
              <span className="italic">heart centered</span> leaders, mystics, & spiritual devotees.
            </h1>

            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-stone-600 mb-8 sm:mb-12 leading-relaxed font-light max-w-xl">
              <p>
                As a storyteller, I have rewritten the story of my own life many times. Ever since I started exploring the spiritual path 10 years ago, I have gone through many portals of death & rebirth.
              </p>
              <p className="text-salon-primary font-medium border-l-2 border-salon-primary/30 pl-6">
                It is through listening to my intuition over other people’s voices... that I was able to return back home to myself. Back to wholeness. Back to love.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-6">
              <Link href="/utility/discovery-call" className="group bg-salon-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <span>Book A Discovery Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/courses" className="text-salon-primary font-medium hover:text-stone-800 px-6 py-3 sm:py-4 transition-colors text-center sm:text-left">
                View Offerings
              </Link>
            </div>
          </div>

          {/* Editorial Image Composition */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] mt-8 sm:mt-12 lg:mt-0 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="absolute top-0 right-0 lg:right-10 w-full lg:w-80 h-full lg:h-[500px] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[100px] overflow-hidden shadow-2xl z-20 hover:scale-[1.02] transition-transform duration-700 ease-out">
              <img src="/images/maria-hero.jpg" className="w-full h-full object-cover object-top" alt="Maria Amiouni" />
              <div className="absolute inset-0 bg-gradient-to-t from-salon-primary/20 to-transparent mix-blend-multiply" />
            </div>

            {/* Rotating Badge - REMOVED */}

            <div className="hidden lg:block absolute bottom-20 left-20 w-64 h-80 rounded-full overflow-hidden shadow-xl z-10 opacity-80 mix-blend-multiply">
              <div className="w-full h-full bg-salon-secondary/20 backdrop-blur-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section - Editorial Style */}
      <section className="py-32 px-6 relative z-10">
        {/* Decorative Background Text Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-[10%] left-[5%] text-[150px] font-serif text-salon-primary rotate-[-15deg] blur-[2px]">remember</div>
          <div className="absolute top-[40%] right-[10%] text-[120px] font-serif text-salon-secondary rotate-[12deg] blur-[2px]">power</div>
          <div className="absolute bottom-[20%] left-[15%] text-[100px] font-serif text-salon-primary/50 rotate-[-8deg] blur-[3px]">courage</div>
        </div>

        <div className="max-w-5xl mx-auto text-center reveal-on-scroll relative z-10">
          <span className="block w-px h-24 bg-gradient-to-b from-transparent to-salon-primary/30 mx-auto mb-10" />

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-salon-primary mb-8 sm:mb-12 tracking-tight px-4">
            Are you ready to <span className="italic">remember</span> your power?
          </h2>

          <div className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed font-light space-y-6 sm:space-y-8 px-4">
            <p>
              Hello my love, I’m grateful you’re here. If you landed here, you might be looking to break free from your conditioning & remember your power, or you’re just starting your spiritual journey and trying to figure out who you are and why you are here.
            </p>
            <div className="w-20 h-px bg-salon-primary/20 mx-auto" />
            <p className="text-2xl font-serif text-salon-primary italic">
              “I warmly welcome you to this space. Thank you for your courage, curiosity & desire to live a life of alignment, creativity & purpose.”
            </p>
            <p className="font-script text-5xl text-salon-secondary mt-12 rotate-[-2deg]">
              Much love, Maria.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials - Masonry Grid */}
      <section className="py-32 px-6 relative z-10 bg-gradient-to-br from-white/40 via-salon-light/30 to-salon-secondary/10 backdrop-blur-sm">
        {/* Green accent orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-salon-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-salon-secondary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal-on-scroll">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-salon-secondary uppercase mb-4 block">Client Love</span>
              <h2 className="text-4xl md:text-5xl font-serif text-salon-primary">Words from the <span className="italic">Community</span></h2>
            </div>
            <Link href="/success-stories" className="hidden md:flex items-center gap-2 text-salon-primary hover:text-stone-600 transition-colors uppercase text-xs font-bold tracking-widest border-b border-salon-primary pb-1">
              Read All Stories <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              { text: "As someone who is careful about external influences, this reading made me feel even more sure of myself… like an energetic hug.", author: "Sian" },
              { text: "I thought I knew who I was until I did my chart. Maria helped me unlock my full potential.", author: "Ahmed" },
              { text: "Maria was such a light in our session… reminded me of parts of myself.", author: "Rasha" },
              { text: "I felt seen, understood, and less alone… Human Design is helping me step into what makes me unique.", author: "Hessa" },
              { text: "Maria imparts her knowledge seamlessly and gave direction in my personal journey.", author: "Carla" },
              { text: "I was uncomfortable with trying new things… Maria helped me understand and align with my path.", author: "Sonja" },
            ].map((t, i) => (
              <div key={i} className="break-inside-avoid bg-white/90 backdrop-blur-sm p-10 rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-salon-primary/10 hover:shadow-xl hover:border-salon-primary/30 hover:bg-white transition-all duration-300 reveal-on-scroll group" style={{ transitionDelay: `${i * 100}ms` }}>
                <Quote className="w-8 h-8 text-salon-secondary/30 mb-6 group-hover:text-salon-secondary/50 transition-colors" />
                <p className="text-stone-700 leading-loose text-lg mb-8 font-light">"{t.text}"</p>

                <div className="flex items-center justify-between border-t border-stone-50 pt-6">
                  <span className="font-serif text-xl text-salon-primary">{t.author}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-amber-400 fill-current" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
