import { blogPosts } from '@/data/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
    const post = blogPosts[currentIndex];

    if (!post) notFound();

    const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
    const prevPostButton = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

    return (
        <div className="bg-white min-h-screen relative">
            {/* Atmospheric Gradient Orbs - Full Width */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[15%] right-[-15%] w-[800px] h-[800px] bg-salon-secondary/15 rounded-full blur-[150px] mix-blend-multiply" />
                <div className="absolute top-[40%] left-[-20%] w-[900px] h-[900px] bg-[#8B4513]/10 rounded-full blur-[180px] mix-blend-multiply" />
                <div className="absolute top-[70%] right-[-10%] w-[700px] h-[700px] bg-salon-primary/12 rounded-full blur-[160px] mix-blend-multiply" />
                <div className="absolute bottom-[10%] left-[-10%] w-[850px] h-[850px] bg-salon-secondary/12 rounded-full blur-[200px] mix-blend-multiply" />
            </div>

            {/* Dark Green Article Header */}
            <header className="bg-salon-primary text-white py-20 sm:py-28 md:py-32 px-4 sm:px-6 relative rounded-b-[2rem] sm:rounded-b-[3rem] shadow-xl overflow-hidden mb-8 sm:mb-12 md:mb-16 z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <Link href="/writings" className="inline-flex items-center text-xs font-bold tracking-widest text-salon-light/70 hover:text-white transition-colors mb-6 sm:mb-8 uppercase bg-salon-secondary/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm hover:bg-salon-secondary/50">
                        <ArrowLeft className="w-3 h-3 mr-2" /> Back to Writings
                    </Link>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6 sm:mb-8 leading-tight px-4">
                        {post.title}
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-salon-light/90 font-medium tracking-wide px-4">
                        <span className="flex items-center bg-salon-secondary/20 px-3 sm:px-4 py-1.5 rounded-full">
                            <Calendar className="w-4 h-4 mr-2 opacity-80" />
                            {post.date}
                        </span>
                        <span className="flex items-center bg-salon-secondary/20 px-3 sm:px-4 py-1.5 rounded-full">
                            <User className="w-4 h-4 mr-2 opacity-80" />
                            {post.author}
                        </span>
                    </div>
                </div>
            </header>

            <article className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="prose prose-stone prose-lg prose-editorial mx-auto prose-headings:font-serif prose-headings:font-bold prose-headings:text-salon-primary prose-a:text-salon-secondary hover:prose-a:text-salon-primary prose-img:rounded-3xl prose-blockquote:border-l-salon-primary prose-blockquote:bg-stone-50 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:font-serif prose-blockquote:leading-relaxed prose-p:leading-loose prose-p:text-stone-600 prose-headings:mt-12 prose-headings:mb-6">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                {/* Navigation Footer */}
                <div className="border-t-2 border-stone-100 pt-16 mt-20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Previous (Newer) Post */}
                        <div className="flex-1 w-full md:w-auto">
                            {prevPostButton ? (
                                <Link
                                    href={`/writings/${prevPostButton.slug}`}
                                    className="group flex flex-col items-center md:items-start p-6 rounded-2xl transition-all hover:bg-stone-50"
                                >
                                    <span className="flex items-center text-xs font-bold text-stone-400 uppercase tracking-widest group-hover:text-salon-primary transition-colors mb-3">
                                        <ArrowLeft className="w-4 h-4 mr-2 text-salon-secondary" /> Previous Article
                                    </span>
                                    <span className="font-serif text-2xl font-bold text-salon-primary group-hover:text-salon-accent transition-colors text-center md:text-left leading-tight">
                                        {prevPostButton.title}
                                    </span>
                                </Link>
                            ) : (
                                <div />
                            )}
                        </div>

                        {/* Next (Older) Post */}
                        <div className="flex-1 w-full md:w-auto">
                            {nextPost ? (
                                <Link
                                    href={`/writings/${nextPost.slug}`}
                                    className="group flex flex-col items-center md:items-end p-6 rounded-2xl transition-all hover:bg-stone-50"
                                >
                                    <span className="flex items-center text-xs font-bold text-stone-400 uppercase tracking-widest group-hover:text-salon-primary transition-colors mb-3">
                                        Next Article <ArrowRight className="w-4 h-4 ml-2 text-salon-secondary" />
                                    </span>
                                    <span className="font-serif text-2xl font-bold text-salon-primary group-hover:text-salon-accent transition-colors text-center md:text-right leading-tight">
                                        {nextPost.title}
                                    </span>
                                </Link>
                            ) : (
                                <div />
                            )}
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
