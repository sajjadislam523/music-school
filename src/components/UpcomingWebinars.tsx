"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
    const featuredWebinars = [
        {
            title: "Understanding Music Theory",
            description:
                "Dive deep into the fundamentals of music theory and enhance your musical skills.",
            slug: "understanding-music-theory",
            isFeatured: false,
        },
        {
            title: "The Art of Songwriting",
            description:
                "Learn the craft of songwriting from experienced musicians and songwriters.",
            slug: "the-art-of-songwriting",
            isFeatured: true,
        },
        {
            title: "Mastering Your Instrument",
            description:
                "Advanced techniques to master your musical instrument of choice.",
            slug: "mastering-your-instrument",
            isFeatured: false,
        },
        {
            title: "Music Production Essentials",
            description:
                "Get started with music production with this comprehensive overview.",
            slug: "music-production-essentials",
            isFeatured: false,
        },
        {
            title: "Live Performance Techniques",
            description:
                "Enhance your live performance skills with expert tips and strategies.",
            slug: "live-performance-techniques",
            isFeatured: false,
        },
        {
            title: "Digital Music Marketing",
            description:
                "Learn how to promote your music effectively in the digital age.",
            slug: "digital-music-marketing",
            isFeatured: true,
        },

        {
            title: "Introduction to Audio Engineering",
            description:
                "Discover the basics of recording, mixing, and audio post-production techniques.",
            slug: "introduction-to-audio-engineering",
            isFeatured: true,
        },
        {
            title: "Jazz Improvisation Basics",
            description:
                "Explore the fundamentals of improvisation in jazz and blues music.",
            slug: "jazz-improvisation-basics",
            isFeatured: false,
        },
        {
            title: "Classical Composition Techniques",
            description:
                "Study traditional composition methods from the great classical composers.",
            slug: "classical-composition-techniques",
            isFeatured: true,
        },
        {
            title: "Building a Home Studio",
            description:
                "Learn how to set up an effective home recording studio on a budget.",
            slug: "building-a-home-studio",
            isFeatured: false,
        },
        {
            title: "Music Business 101",
            description:
                "Essential knowledge for navigating the music industry and monetizing your talent.",
            slug: "music-business-101",
            isFeatured: false,
        },
        {
            title: "Electronic Music Production",
            description:
                "Create cutting-edge electronic music with modern DAWs and synthesizers.",
            slug: "electronic-music-production",
            isFeatured: true,
        },
        {
            title: "Vocal Training and Techniques",
            description:
                "Improve your singing voice through proper breathing and vocal exercises.",
            slug: "vocal-training-and-techniques",
            isFeatured: false,
        },
        {
            title: "Rhythm and Percussion Fundamentals",
            description:
                "Master rhythmic patterns and percussion instrument techniques.",
            slug: "rhythm-and-percussion-fundamentals",
            isFeatured: true,
        },
        {
            title: "Music Therapy Foundations",
            description:
                "Discover how music can be used for healing and emotional well-being.",
            slug: "music-therapy-foundations",
            isFeatured: false,
        },
        {
            title: "World Music Exploration",
            description:
                "Journey through global musical traditions and cultural expressions.",
            slug: "world-music-exploration",
            isFeatured: false,
        },
    ];

    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
                        FEATURED WEBINARS
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Enhance Your Musical Journey
                    </p>
                </div>
                <div className="mt-10">
                    <HoverEffect
                        items={featuredWebinars
                            .filter((webinar) => webinar.isFeatured)
                            .map((webinar) => ({
                                title: webinar.title,
                                description: webinar.description,
                                link: `/webinars/${webinar.slug}`,
                            }))}
                    />
                </div>
                <div className="mt-10 text-center">
                    <Link
                        href={"#"}
                        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                        View All Webinars
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UpcomingWebinars;
