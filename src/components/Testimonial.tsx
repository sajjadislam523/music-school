"use-client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
    {
        quote: "This platform introduced me to artists I never knew existed. It's a game-changer!",
        name: "Alex Carter",
        title: "Music Producer",
    },
    {
        quote: "The sound quality and curation are top-notch. I’m constantly discovering new favorite tracks!",
        name: "Jessica Lane",
        title: "Singer-Songwriter",
    },
    {
        quote: "As a DJ, I need fresh beats all the time. This is my go-to place for inspiration.",
        name: "Ryan Michaels",
        title: "DJ & Performer",
    },
    {
        quote: "A paradise for audiophiles! The diversity in music here is incredible.",
        name: "Sophia Bennett",
        title: "Music Critic",
    },
    {
        quote: "Music lovers will appreciate how well this platform brings together different genres.",
        name: "Daniel Reed",
        title: "Concert Organizer",
    },
];

const Testimonial = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">
                Hear our Harmony: Voices of success
            </h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
