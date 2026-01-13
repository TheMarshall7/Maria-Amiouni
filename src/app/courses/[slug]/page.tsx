import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check, Calendar, Clock, Sparkles } from 'lucide-react';
import { courseData } from '@/data/courseContent';
import JourneyDayBadge from '@/components/JourneyDayBadge';

export function generateStaticParams() {
    return Object.keys(courseData).map((slug) => ({ slug }));
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = courseData[slug];

    if (!course) notFound();

    // Determine repeating atmosphere count based on schedule length
    const scheduleLength = course.schedule && Array.isArray(course.schedule) ? course.schedule.length : 0;
    const orbCount = Math.max(3, Math.ceil(scheduleLength / 3));

    return (
        <div className="bg-white min-h-screen relative">
            {/* Dynamic Atmospheric Orbs - Full Width */}
            {course.schedule && Array.isArray(course.schedule) && (
                <div className="fixed inset-0 pointer-events-none z-0">
                    {Array.from({ length: orbCount }).map((_, i) => (
                        <div
                            key={i}
                            className={`absolute w-[1000px] h-[1000px] rounded-full mix-blend-multiply filter blur-[150px] opacity-15 ${i % 2 === 0
                                ? 'bg-[#8B4513]/20 right-[-500px]' // Brown on Right
                                : 'bg-salon-secondary/20 left-[-500px]' // Green on Left
                                }`}
                            style={{ top: `${(i + 1) * 20}%` }}
                        />
                    ))}
                </div>
            )}
            {/* Premium Hero */}
            <div className="relative h-[70vh] min-h-[600px] z-10">
                {/* Hero Image with Scale Effect */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={slug === 'phoenix-rising-21-days' ? 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop' : course.image}
                        alt={course.title}
                        className="w-full h-full object-cover scale-105"
                    />
                </div>
                
                {/* Premium Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-salon-primary/20 via-transparent to-[#8B4513]/20 mix-blend-multiply" />
                
                {/* Content Container */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="max-w-5xl relative">
                        {/* Decorative Top Element */}
                        <div className="flex items-center justify-center mb-8 gap-3">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                            <Sparkles className="w-5 h-5 text-salon-secondary animate-pulse" />
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                        </div>
                        
                        {/* Hook Text - Enhanced */}
                        {course.hook && (
                            <div className="relative mb-8 group">
                                <div className="absolute -inset-4 bg-white/5 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <p className="text-white text-2xl md:text-3xl font-light mb-2 italic font-serif tracking-wide relative px-8">
                                    <span className="absolute -left-2 -top-2 text-5xl text-salon-secondary/60 font-serif leading-none">"</span>
                                    <span className="relative inline-block py-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                        {course.hook}
                                    </span>
                                    <span className="absolute -right-2 -bottom-4 text-5xl text-salon-secondary/60 font-serif leading-none">"</span>
                                </p>
                            </div>
                        )}
                        
                        {/* Title - Ultra Premium */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1] tracking-tight relative">
                            <span className="relative inline-block">
                                <span className="absolute inset-0 text-salon-secondary/30 blur-xl">{course.title}</span>
                                <span className="relative drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                                    {course.title}
                                </span>
                            </span>
                        </h1>
                        
                        {/* Decorative Bottom Flourish */}
                        <div className="flex items-center justify-center mt-8 gap-3">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/40" />
                            <div className="flex gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-salon-secondary/80 animate-pulse" />
                                <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
                                <div className="w-1.5 h-1.5 rounded-full bg-salon-secondary/80 animate-pulse" style={{ animationDelay: '0.5s' }} />
                            </div>
                            <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/40" />
                        </div>
                        
                        {/* Subtle Accent Badge */}
                        <div className="inline-block mt-8 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                            <span className="text-white/90 text-xs uppercase tracking-[0.2em] font-bold">21-Day Sacred Journey</span>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
                {/* Premium Introduction Section */}
                <div className="mb-24 relative">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-salon-secondary/30" />
                    
                    <div className="pt-16 relative">
                        {/* Subtitle with Premium Styling */}
                        {course.subtitle && (
                            <div className="text-center mb-16 relative">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-salon-secondary/10 rounded-full blur-2xl" />
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <Sparkles className="w-6 h-6 text-salon-secondary opacity-60" />
                                </div>
                                <h2 className="font-serif text-3xl md:text-4xl text-salon-primary leading-snug max-w-3xl mx-auto relative">
                                    <span className="relative inline-block">
                                        <span className="absolute -left-4 top-0 text-5xl text-salon-secondary/20 font-serif">"</span>
                                        {course.subtitle}
                                        <span className="absolute -right-4 bottom-2 text-5xl text-salon-secondary/20 font-serif">"</span>
                                    </span>
                                </h2>
                            </div>
                        )}

                        {/* Description Paragraphs with Enhanced Styling */}
                        <div className="space-y-8 max-w-3xl mx-auto">
                            {course.description.map((p: string, i: number) => (
                                <div key={i} className="relative group">
                                    {/* Accent dot for first paragraph */}
                                    {i === 0 && (
                                        <div className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-gradient-to-br from-salon-secondary to-salon-primary opacity-60" />
                                    )}
                                    
                                    <p className={`text-stone-600 leading-loose text-lg relative ${
                                        i === 0 ? 'text-xl font-light' : ''
                                    } ${i === course.description.length - 1 ? 'text-salon-primary/90 font-medium italic text-xl text-center pt-4' : ''}`}>
                                        {/* Highlight last paragraph with decorative elements */}
                                        {i === course.description.length - 1 && (
                                            <>
                                                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-salon-secondary/40 to-transparent" />
                                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-salon-secondary/40 to-transparent" />
                                            </>
                                        )}
                                        {p}
                                    </p>
                                    
                                    {/* Decorative accent line between paragraphs */}
                                    {i < course.description.length - 1 && (
                                        <div className="absolute -bottom-4 left-0 w-8 h-px bg-gradient-to-r from-salon-primary/20 to-transparent" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Decorative Bottom Flourish */}
                        <div className="flex items-center justify-center mt-12 gap-3">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-salon-secondary/30" />
                            <div className="w-2 h-2 rounded-full bg-salon-secondary/40" />
                            <div className="w-16 h-px bg-gradient-to-r from-salon-secondary/30 via-salon-primary/30 to-salon-secondary/30" />
                            <div className="w-2 h-2 rounded-full bg-salon-secondary/40" />
                            <div className="w-12 h-px bg-gradient-to-l from-transparent to-salon-secondary/30" />
                        </div>
                    </div>
                </div>

                {/* Ultra Premium Origin Story Section */}
                {course.originStory && (
                    <div className="mb-32 relative">
                        {/* Background Decorative Elements */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-salon-secondary/10 rounded-full blur-[120px]" />
                            <div className="absolute -top-10 -right-20 w-[300px] h-[300px] bg-[#8B4513]/10 rounded-full blur-[100px]" />
                        </div>
                        
                        {/* Connecting Line from Above */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-salon-secondary/20 to-salon-primary/40" />
                        
                        <div className="text-center max-w-4xl mx-auto relative z-10 pt-24">
                            {/* Label with Icon */}
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <div className="w-8 h-px bg-gradient-to-r from-transparent to-salon-secondary/30" />
                                <Sparkles className="w-4 h-4 text-salon-secondary" />
                                <span className="text-xs font-bold tracking-[0.3em] text-salon-secondary uppercase">The Origin</span>
                                <Sparkles className="w-4 h-4 text-salon-secondary" />
                                <div className="w-8 h-px bg-gradient-to-l from-transparent to-salon-secondary/30" />
                            </div>
                            
                            {/* Title */}
                            <h3 className="font-serif text-4xl md:text-5xl text-salon-primary mb-12 relative">
                                <span className="relative inline-block">
                                    How Phoenix Rising Was Born
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-salon-secondary/40 to-transparent rounded-full" />
                                </span>
                            </h3>
                            
                            {/* Story Card with Premium Background */}
                            <div className="relative group">
                                {/* Hover Glow Effect - Around Card */}
                                <div className="absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem] pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-salon-secondary/20 via-salon-primary/15 to-salon-secondary/20 rounded-[3rem] blur-lg" />
                                </div>
                                
                                {/* Card Background - Clean White */}
                                <div className="relative bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] group-hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 px-8 md:px-16 py-12 md:py-16">
                                    {/* Decorative Quote Marks */}
                                    <div className="absolute top-8 left-8 md:left-12">
                                        <span className="text-7xl md:text-8xl text-salon-secondary/20 font-serif leading-none">"</span>
                                    </div>
                                    <div className="absolute bottom-8 right-8 md:right-12">
                                        <span className="text-7xl md:text-8xl text-salon-secondary/20 font-serif leading-none rotate-180 inline-block">"</span>
                                    </div>
                                    
                                    {/* Story Text */}
                                    <p className="text-stone-700 text-lg md:text-xl leading-loose font-light italic relative z-10 px-4 md:px-8">
                                        {course.originStory}
                                    </p>
                                    
                                    {/* Bottom Accent */}
                                    <div className="flex items-center justify-center mt-8 gap-2">
                                        <div className="w-1 h-1 rounded-full bg-salon-secondary/40" />
                                        <div className="w-12 h-px bg-gradient-to-r from-salon-secondary/30 to-salon-primary/30" />
                                        <div className="w-1 h-1 rounded-full bg-salon-primary/40" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ultra Premium Details & Inclusions Grid */}
                <div className="grid md:grid-cols-2 gap-10 mb-32 relative">
                    {/* Subtle Background Glow */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-salon-primary/5 rounded-full blur-[150px] pointer-events-none" />
                    
                    {/* Program Details Card - Enhanced */}
                    <div className="bg-gradient-to-br from-salon-primary via-salon-primary to-[#4a6741] text-white p-12 rounded-[3rem] relative overflow-hidden group shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1">
                        {/* Animated Background Orbs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-white/10 transition-colors duration-700" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-salon-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
                        
                        {/* Decorative Corner Accent */}
                        <div className="absolute top-8 right-8 opacity-20">
                            <Calendar className="w-12 h-12 text-salon-secondary" />
                        </div>

                        {/* Header */}
                        <div className="relative z-10 mb-10">
                            <div className="flex items-center gap-2 mb-3">
                                <Clock className="w-5 h-5 text-salon-secondary" />
                                <span className="text-xs uppercase tracking-[0.2em] font-bold text-salon-light/70">Essential Details</span>
                            </div>
                            <h3 className="font-serif text-4xl">Program Details</h3>
                            <div className="w-16 h-1 bg-salon-secondary rounded-full mt-4" />
                        </div>

                        {/* Details List */}
                        <div className="space-y-7 relative z-10">
                            {course.details?.map((detail: string, i: number) => {
                                const [label, value] = detail.includes(':') ? detail.split(':') : [null, detail];
                                return (
                                    <div key={i} className="flex items-start gap-5 pb-6 border-b border-white/10 last:border-0 last:pb-0 group/detail hover:translate-x-1 transition-transform duration-300">
                                        <div className="w-2.5 h-2.5 rounded-full bg-salon-secondary shrink-0 translate-y-2.5 shadow-[0_0_10px_rgba(139,195,139,0.5)]" />
                                        <div className="flex-1">
                                            {label && <span className="block text-white/60 text-xs uppercase tracking-[0.15em] mb-2 font-semibold">{label}</span>}
                                            <span className="text-xl font-light tracking-wide block leading-relaxed">{value || detail}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Inclusions Card - Enhanced */}
                    <div className="bg-gradient-to-br from-white via-salon-light/30 to-white p-12 rounded-[3rem] border-2 border-stone-200/60 relative overflow-hidden group hover:border-salon-primary/30 transition-all duration-500 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.25)] hover:-translate-y-1">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-salon-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-salon-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
                        
                        {/* Decorative Corner Accent */}
                        <div className="absolute top-8 right-8 opacity-10">
                            <Sparkles className="w-12 h-12 text-salon-primary" />
                        </div>

                        {/* Header */}
                        <div className="relative z-10 mb-10">
                            <div className="flex items-center gap-2 mb-3">
                                <Check className="w-5 h-5 text-salon-secondary" />
                                <span className="text-xs uppercase tracking-[0.2em] font-bold text-salon-primary/70">Everything You Need</span>
                            </div>
                            <h3 className="font-serif text-4xl text-salon-primary">What's Included</h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-salon-secondary to-salon-primary rounded-full mt-4" />
                        </div>

                        {/* Inclusions List */}
                        <ul className="space-y-5 relative z-10">
                            {course.inclusions?.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-300">
                                    <div className="w-10 h-10 rounded-full bg-white border-2 border-salon-primary/30 flex items-center justify-center shrink-0 group-hover/item:border-salon-primary group-hover/item:bg-salon-primary/5 transition-all duration-300 shadow-md">
                                        <Check className="w-5 h-5 text-salon-primary" />
                                    </div>
                                    <span className="text-stone-700 font-light text-lg pt-1.5 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {course.takeaways && (
                            <div className="mt-10 pt-10 border-t-2 border-stone-200/60 relative z-10">
                                <div className="flex items-center gap-2 mb-6">
                                    <Sparkles className="w-5 h-5 text-salon-secondary" />
                                    <h4 className="font-serif text-2xl text-salon-primary">You Will Receive</h4>
                                </div>
                                <ul className="space-y-4">
                                    {course.takeaways.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-300">
                                            <Sparkles className="w-5 h-5 text-salon-secondary mt-1 shrink-0" />
                                            <span className="text-stone-700 font-light text-base leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Journey Schedule (Timeline Layout) */}
                {course.schedule && Array.isArray(course.schedule) && (
                    <div className="mb-24 relative">
                        {/* Gradient Orbs Behind Schedule - Full Width with More Transparency */}
                        <div className="fixed inset-0 pointer-events-none z-0">
                            {/* Top Section */}
                            <div className="absolute top-[10%] left-[-20%] w-[900px] h-[900px] bg-salon-secondary/8 rounded-full blur-[150px] mix-blend-multiply" />
                            <div className="absolute top-[15%] right-[-15%] w-[1000px] h-[1000px] bg-[#8B4513]/6 rounded-full blur-[180px] mix-blend-multiply" />
                            
                            {/* Middle Section */}
                            <div className="absolute top-[35%] left-[-25%] w-[850px] h-[850px] bg-salon-primary/8 rounded-full blur-[170px] mix-blend-multiply" />
                            <div className="absolute top-[45%] right-[-20%] w-[950px] h-[950px] bg-salon-secondary/7 rounded-full blur-[190px] mix-blend-multiply" />
                            <div className="absolute top-[55%] left-[5%] w-[700px] h-[700px] bg-[#8B4513]/5 rounded-full blur-[160px] mix-blend-multiply" />
                            
                            {/* Bottom Section */}
                            <div className="absolute bottom-[20%] right-[-18%] w-[900px] h-[900px] bg-salon-secondary/8 rounded-full blur-[180px] mix-blend-multiply" />
                            <div className="absolute bottom-[10%] left-[-15%] w-[800px] h-[800px] bg-salon-primary/7 rounded-full blur-[160px] mix-blend-multiply" />
                        </div>
                        
                        <div className="text-center mb-16 relative z-10">
                            <h2 className="text-4xl md:text-5xl font-serif text-salon-primary mb-6">Journey Schedule</h2>
                            <p className="text-stone-600 max-w-2xl mx-auto">
                                Phoenix Rising - 21 Days of Rituals is a daily journey designed to fit into your life while creating lasting transformation.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto relative px-4 z-10">
                            {/* Central Line */}
                            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-salon-primary/30 to-transparent transform md:-translate-x-1/2" />

                            <div className="space-y-16">
                                {course.schedule.map((day: any, i: number) => (
                                    <div 
                                        key={i} 
                                        id={`day-${i + 1}`}
                                        className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center md:justify-between group ${i % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        }`}>
                                        {/* Content Card - Premium Enhanced */}
                                        <div className="w-full md:w-[45%] pl-16 md:pl-0 relative">
                                            {/* Card Glow Effect - Contained Around Card */}
                                            <div className="absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem] pointer-events-none">
                                                <div className="absolute inset-0 bg-gradient-to-br from-salon-secondary/20 via-salon-primary/15 to-salon-secondary/20 rounded-[3rem] blur-lg" />
                                            </div>
                                            
                                            <div className="relative bg-white p-10 rounded-[3rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border-2 border-stone-50 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] hover:border-salon-primary/30 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                                                {/* Animated Background Orbs - More Subtle */}
                                                <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-salon-secondary/5 rounded-full opacity-0 blur-2xl group-hover:opacity-60 transition-all duration-700" />
                                                <div className="absolute bottom-[-20px] left-[-20px] w-28 h-28 bg-salon-primary/5 rounded-full opacity-0 blur-2xl group-hover:opacity-60 transition-all duration-700 delay-100" />

                                                <div className="relative z-10">
                                                    {/* Top Meta Info */}
                                                    <div className="flex items-center justify-between mb-5">
                                                        <div className="flex items-center gap-2 bg-salon-secondary/15 px-4 py-2 rounded-full border border-salon-secondary/20 group-hover:bg-salon-secondary/25 group-hover:border-salon-secondary/30 transition-all duration-300">
                                                            <Clock className="w-3 h-3 text-salon-secondary" />
                                                            <span className="text-xs font-bold tracking-[0.15em] text-salon-primary uppercase">{day.time}</span>
                                                        </div>
                                                        <span className="text-stone-500 text-sm font-semibold tracking-wide">{day.date}</span>
                                                    </div>

                                                    {/* Title - Premium Typography */}
                                                    <h3 className="font-serif text-3xl md:text-4xl text-salon-primary mb-4 leading-tight group-hover:text-salon-accent transition-colors duration-300">
                                                        {day.title}
                                                    </h3>

                                                    {/* Guide Info */}
                                                    <div className="flex items-center gap-2 mb-5 pb-5 border-b-2 border-stone-100/80 group-hover:border-salon-primary/20 transition-colors duration-300">
                                                        <Sparkles className="w-4 h-4 text-salon-secondary opacity-60" />
                                                        <span className="text-sm font-medium text-stone-500 italic">
                                                            Guided by <span className="text-salon-primary not-italic font-semibold">{day.guide}</span>
                                                        </span>
                                                    </div>

                                                    {/* Description - Enhanced Typography */}
                                                    <p className="text-stone-600 leading-loose text-base font-light">
                                                        {day.description}
                                                    </p>

                                                    {/* Decorative Bottom Accent */}
                                                    <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                                        <div className="w-8 h-px bg-gradient-to-r from-salon-secondary/40 to-transparent" />
                                                        <div className="w-1.5 h-1.5 rounded-full bg-salon-secondary/40" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Center Bubble Marker - Enhanced with Click */}
                                        <JourneyDayBadge dayNumber={i + 1} totalDays={course.schedule.length} />

                                        {/* Empty Space for Balance (Desktop) */}
                                        <div className="hidden md:block w-[45%]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Practitioners */}
                {course.practitioners && (
                    <div className="mb-24 text-center z-10 relative">
                        <h2 className="text-4xl md:text-5xl font-serif text-salon-primary mb-6">Meet the Practitioners</h2>
                        <p className="text-stone-600 max-w-2xl mx-auto mb-20 text-lg leading-relaxed">
                            These are some of our region's best heart leaders, community builders, alchemists, cycle breakers, storytellers, sisters, brothers & friends.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-10 max-w-5xl mx-auto px-4">
                            {course.practitioners.map((p: string, i: number) => (
                                <div
                                    key={i}
                                    className="group flex flex-col items-center transform transition-all duration-500 ease-out hover:scale-[2.0] hover:z-50 w-20 md:w-24 cursor-pointer"
                                >
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-stone-100 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.2)] border-[3px] border-white group-hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.4)] group-hover:border-salon-primary transition-all duration-500 relative overflow-hidden flex items-center justify-center">
                                        {/* Placeholder Avatar */}
                                        <div className="w-full h-full bg-gradient-to-br from-stone-200/50 to-stone-400/50 flex items-center justify-center">
                                            <span className="text-2xl md:text-3xl font-serif text-salon-primary font-bold">
                                                {p.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>

                                        {/* Glossy Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/40 pointer-events-none" />
                                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                                    </div>
                                    <div className="mt-3 px-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                        <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold text-salon-primary block text-center leading-tight">
                                            {p}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Ultra Premium Investment Section - Full Width */}
            {course.pricing && (
                <div className="relative">
                        {/* Premium Gradient Background */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-salon-primary via-salon-primary to-stone-900" />
                            <div className="absolute inset-0 bg-gradient-to-r from-salon-secondary/20 via-transparent to-[#8B4513]/5" />
                            {/* Decorative Orbs */}
                            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-salon-secondary/20 rounded-full blur-[150px]" />
                            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-salon-primary/30 rounded-full blur-[180px]" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 px-6 py-24 md:py-32">
                            <div className="max-w-5xl mx-auto">
                                {/* Header */}
                                <div className="text-center mb-16">
                                    {/* Decorative Top */}
                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-salon-secondary/60 to-transparent" />
                                        <Sparkles className="w-5 h-5 text-salon-secondary animate-pulse" />
                                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-salon-secondary/60 to-transparent" />
                                    </div>
                                    
                                    <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
                                        Begin Your Journey
                                    </h2>
                                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                                        Step into 21 days of transformation, ritual, and sacred practice
                                    </p>
                                </div>

                                {/* Pricing Cards */}
                                <div className={`grid gap-8 mb-12 ${course.pricing.length > 1 ? 'md:grid-cols-2' : 'max-w-lg mx-auto'}`}>
                                    {course.pricing.map((tier: any, i: number) => (
                                        <div 
                                            key={i} 
                                            className="group relative"
                                        >
                                            {/* Card Glow Effect */}
                                            <div className="absolute -inset-1 bg-gradient-to-br from-salon-secondary via-white to-salon-secondary rounded-[3rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                                            
                                            {/* Main Card */}
                                            <div className="relative bg-white backdrop-blur-sm rounded-[3rem] p-12 text-center shadow-2xl group-hover:shadow-[0_30px_80px_-15px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:-translate-y-2">
                                                {/* Background Pattern */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-salon-light/30 via-white to-salon-light/20 rounded-[3rem]" />
                                                
                                                {/* Content */}
                                                <div className="relative z-10">
                                                    {/* Badge */}
                                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-salon-primary/10 rounded-full mb-6">
                                                        <div className="w-2 h-2 rounded-full bg-salon-secondary animate-pulse" />
                                                        <span className="text-xs font-bold tracking-[0.25em] text-salon-primary uppercase">Investment</span>
                                                    </div>
                                                    
                                                    <h3 className="font-serif text-3xl mb-8 text-salon-primary">{tier.name}</h3>
                                                    
                                                    {/* Price */}
                                                    <div className="mb-8">
                                                        <p className="text-6xl md:text-7xl font-serif font-bold text-salon-primary mb-2 tracking-tight">{tier.price}</p>
                                                        {tier.sub && <p className="text-stone-500 text-base font-light">{tier.sub}</p>}
                                                    </div>

                                                    {/* Divider */}
                                                    <div className="flex items-center justify-center gap-2 mb-8">
                                                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-salon-primary/30" />
                                                        <div className="w-2 h-2 rounded-full bg-salon-secondary/40" />
                                                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-salon-primary/30" />
                                                    </div>
                                                    
                                                    {/* CTA Button - Ultra Strong */}
                                                    <Link
                                                        href={`/checkout/${slug}?tier=${tier.name}`}
                                                        className="group/btn relative inline-flex items-center justify-center gap-3 w-full overflow-hidden"
                                                    >
                                                        {/* Button Glow */}
                                                        <div className="absolute -inset-1 bg-gradient-to-r from-salon-primary via-salon-secondary to-salon-primary opacity-70 blur-lg group-hover/btn:opacity-100 transition-all duration-500 animate-pulse" />
                                                        
                                                        {/* Button */}
                                                        <div className="relative w-full bg-gradient-to-br from-salon-primary to-stone-800 text-white px-12 py-6 rounded-full shadow-2xl group-hover/btn:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover/btn:-translate-y-1">
                                                            <span className="text-base font-bold uppercase tracking-[0.2em]">{course.cta}</span>
                                                            <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                                                        </div>
                                                    </Link>

                                                    {/* Subtext */}
                                                    <p className="text-stone-500 text-sm mt-6 font-light">
                                                        Limited spaces • Starts September 10th
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Trust Elements */}
                                <div className="text-center">
                                    <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-salon-secondary" />
                                            <span>21 Days of Guidance</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-salon-secondary" />
                                            <span>19+ Expert Teachers</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-salon-secondary" />
                                            <span>Lifetime Access</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            {!course.pricing && (
                <div className="relative">
                        {/* Premium Gradient Background */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-salon-primary via-salon-primary to-stone-900" />
                            <div className="absolute inset-0 bg-gradient-to-r from-salon-secondary/20 via-transparent to-[#8B4513]/5" />
                            {/* Decorative Orbs */}
                            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-salon-secondary/20 rounded-full blur-[150px]" />
                            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-salon-primary/30 rounded-full blur-[180px]" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 px-6 py-24 md:py-32 text-center">
                            <div className="max-w-3xl mx-auto">
                                <Sparkles className="w-8 h-8 text-salon-secondary mx-auto mb-6 animate-pulse" />
                                <span className="text-sm font-bold tracking-[0.3em] text-salon-secondary uppercase mb-6 block">Ready to Transform?</span>
                                <h2 className="text-5xl md:text-6xl font-serif mb-8 text-white">Join This Sacred Journey</h2>
                                <p className="text-white/80 text-xl mb-12 font-light leading-relaxed">
                                    Step into a container of ritual, renewal, and profound transformation
                                </p>
                                
                                <Link
                                    href={`/checkout/${slug}`}
                                    className="group/btn relative inline-flex items-center justify-center gap-3"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-white via-salon-secondary to-white opacity-70 blur-lg group-hover/btn:opacity-100 transition-all duration-500" />
                                    <div className="relative bg-white text-salon-primary px-16 py-7 rounded-full shadow-2xl group-hover/btn:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.5)] transition-all duration-300 group-hover/btn:-translate-y-1">
                                        <span className="text-lg font-bold uppercase tracking-[0.2em]">{course.cta}</span>
                                        <ArrowRight className="inline-block w-6 h-6 ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

            {/* Reopen Container for Remaining Elements */}
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {course.secondaryCtas && (
                    <div className="flex flex-wrap justify-center gap-4 mt-8 z-10 relative">
                        {course.secondaryCtas.map((cta: string, i: number) => (
                            <button key={i} className="px-6 py-2 rounded-full border border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900 transition-colors text-sm">
                                {cta}
                            </button>
                        ))}
                    </div>
                )}
                {/* Rotating Badge Sign-off */}
                <div className="flex justify-center mt-24 pb-12 reveal-on-scroll relative z-10">
                    <div className="relative w-48 h-48">
                        <div className="relative w-full h-full animate-[spin_20s_linear_infinite]">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                <text className="text-[11px] font-bold uppercase tracking-[0.2em] fill-salon-primary">
                                    <textPath href="#textPath" startOffset="0%">
                                        Maria Amiouni • Spiritual Guide • Mystic
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img src="/images/maria-hero.jpg" className="w-full h-full object-cover" alt="Maria Amiouni" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
