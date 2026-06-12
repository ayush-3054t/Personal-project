import { Star } from "lucide-react"
import { useMovies } from "../context/MovieContext"
import { useEffect, useState } from "react";
import { getImageUrl } from "../services/api";

const HeroSection = () => {

    const { trendingMovies, loading } = useMovies();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false)

    const featuredMovies = trendingMovies.slice(0, 5);


    useEffect(() => {
        if (featuredMovies.length === 0) return;
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % featuredMovies.length)
                setIsTransitioning(false)
            }, 500);
        }, 8000);
        return () => clearInterval(interval);
    }, [loading, featuredMovies.length])

    

    if (loading || featuredMovies.length === 0) {
        return (

            <div className="relative w-full h-screen flex items-center justify-center bg-neutral-900">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" ></div>
                    <p className="mt-4 text-neutral-400">Loading Movies......</p>
                </div>
            </div>

        )

    }



    const currentMovie = featuredMovies[currentSlide];
    const formatRating = (rating: number) => {
        return (Math.round(rating * 10) / 10).toFixed(1);
    };




    return (
        <div className="relative w-full h-screen">
            {/* Movie Backdrop */}
            <div className={`absolute inset-0 bg-cover bg-center  bg-neutral-900 transition-all duration-700 
                ${isTransitioning ? "opacity-0" : "opacity-100"}
                `}
                style={{
                    background: `url(${getImageUrl(currentMovie.backdrop_path)})`,
                }} >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center z-10 container mx-auto px-4">
                <div className="max-w-3xl">
                    {/* Movie Info */}
                    <div className={`transition-all duration-700 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="bg-purple-500/90 text-white text-xs font-semibold px-2 py-1 rounded-sm">
                                FEATURED
                            </span>
                            {/* Conditional rendering */}
                            <div className="flex items-center">
                                <Star />
                                <span>{formatRating(currentMovie.vote_average)}</span>
                            </div>
                            {/* Consditional rendering close */}


                            <span className="text-neutral-400">.</span>
                            <span className="text-neutral-300">{currentMovie.release_date?.substring(0, 4) || "N/A"}</span>
                            {/* Conditonal rendering */}
                            {currentMovie.adult &&
                                <>
                                    <span className="text-neutral-400">.</span>
                                    <span className="bg-neutral-700 text-neutral-300 text-xs px-11.5 py-0.5">18+</span>
                                </>
                            }

                            {/* Consditional rendering close */}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {currentMovie.title}
                        </h1>
                        <p className="text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-2xl">
                            {currentMovie.overview}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                                { }
                                Watch Now
                            </button>
                            <button className="bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all border border-neutral-600">
                                { }
                                Add to Watch List
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10 ">
                {/* Conditional rendering */}
                {featuredMovies.map((_, index) => (
                    <button
                        key={index}
                        className={`h-1.5 rounded-full transition-all cursor-pointer
                        ${currentSlide === index
                                ? "w-8 bg-purple-500"
                                : "w-4 bg-neutral-600/50"
                            }`}

                        onClick={() => {
                            setIsTransitioning(true);
                            setTimeout(() => {
                                setCurrentSlide(index);
                                setIsTransitioning(false)
                            }, 500)
                        }}
                    ></button>
                ))
                }

            </div>
        </div>
    )
}

export default HeroSection
