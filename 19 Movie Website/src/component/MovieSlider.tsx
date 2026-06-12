import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { getImageUrl } from "../services/api"
import { useRef, useState } from "react"
import { useMovies } from "../context/MovieContext";

const MovieSlider = ({ title, movie, subtitle = "" }) => {

    const sliderRef = useRef(null);
    const [isScrollling, setIsScrolling] = useState(false);
    const [hoveredMovie, setHoveredMovie] = useState(null);
    const { openMovieDetails } = useMovies()


    const scroll = (direction) => {
        if (isScrollling) return;

        setIsScrolling(true);
        const { current } = sliderRef;
        const scrollAmount = direction === "left" ? -current.clientWidth * 0.75 : current.clientWidth * 0.75;


        current.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        })

        setTimeout(() => {
            setIsScrolling(false)
        }, 500)
    }

    const formatRatings = (rating: number) => {
        return (Math.round(rating * 10) / 10).toFixed(1);
    }

    const handleMovieClick = (movieId) => {
        openMovieDetails(movieId)
    }

    if (!movie || movie.length === 0) {
        return null;
    }

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex items-baseline justify-between mb-8">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                        <h2>{title}</h2>
                        {/* Conditional rendering */}
                        {subtitle &&
                            <p className="text-neutral-400 text-sm mt-1">{subtitle}</p>
                        }
                    </div>

                    <div className="flex space-x-2">
                        <button
                            className="p-2 rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-white transition-all"
                            aria-label="Scrool Left"
                            onClick={() => scroll("left")}
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            className="p-2 rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-white transition-all"
                            aria-label="Scrool Left"
                            onClick={() => scroll("right")}
                        >
                            <ArrowRight />
                        </button>
                    </div>

                </div>

                {/* Movie Slider */}
                <div className="relative">
                    <div
                        className="flex space-x-4 overflow-x-hidden scrollbar-hide pb-4 snap-x"
                        ref={sliderRef}
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {/* Conditional rendering */}
                        {movie?.map((movie) => (
                            <div
                                className="min-w-[200px] md:min-w-[240px] snap-start relative group cursor-pointer"
                                key={movie.id}
                                onMouseEnter={()=>setHoveredMovie(movie.id)}
                                onMouseLeave={()=>setHoveredMovie(null)}
                                onClick={()=>handleMovieClick(movie.id)}
                            >
                                <div className="rounded-lg overflow-hidden bg-neutral-800">
                                    <div className="relative aspect-[2/3]">
                                        <img
                                            src={getImageUrl(movie.poster_path, "w500")}
                                            alt=""
                                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35"
                                        />

                                        {/* Hover Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-1">
                                                        <Star fill="white" stroke="none" />
                                                        <span className="text-yellow-400 text-sm font-medium">
                                                            {formatRatings(movie.vote_average)}
                                                        </span>
                                                    </div>
                                                    <span className="text-neutral-400 text-sm ">
                                                        {movie.release_date.substring(0,4)||"N/A"}
                                                    </span>
                                                </div>
                                                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md flex items-center justify-center gap-1 transition-all text-sm">
                                                    { }
                                                    View details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Movie Info */}
                                <div className="mt-3">
                                    <h3 className="text-white text-sm font-medium truncate">
                                        {movie.title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1">
                                            <Star fill="yellow" stroke="none" />
                                            <span className="text-neutral-400 text-xs">{formatRatings(movie.vote_average)}</span>
                                        </div>

                                        <span className="text-neutral-500 text-xs">
                                            {movie.release_date.substring(0, 4) || "N/A"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        ))}



                    </div>

                </div>
            </div>
        </section>
    )
}

export default MovieSlider
