import { Car, Computer, Cross, Loader, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { fetchMovieDetails, getImageUrl } from "../services/api";

const MovieDetails = ({ movieId, onClose }: { movieId: any, onClose: () => void }) => {

    // this is a modal


    const [movie, setMovie] = useState<any>(null);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState<any>(null);


    useEffect(() => {
        async function getMovieDetails() {
            try {
                setIsLoading(true);
                const movieData = await fetchMovieDetails(movieId);
                setMovie(movieData)
            } catch (err) {
                console.log("Failed to lead movie please try again");
            } finally {
                setIsLoading(false)
            }
        }
        if (movieId) {
            getMovieDetails();
        }

    }, [movieId])

    if (!movieId) return null;

    const formatRunTime = (minutes: number): string => {
        if (!minutes) return "N/A"
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        return `${hours}h ${remainingMinutes}m`;
    }

    const formatRatings = (rating: number) => {
        return (Math.round(rating * 10) / 10).toFixed(1);
    }

    const formatRevenue = (revenue) => {
        if (!revenue) return "N/A";
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact",
            maximumFractionDigits: 1
        }).format(revenue)
    }

    console.log(movie)


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-auto ">
            <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[900vh] overflow-hidden ">

                {/* Close button */}
                <button
                    className="absolute top-4 right-4 z-10 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-all"
                    onClick={onClose}
                >
                    <Cross />
                </button>

                {/* if rendering */}
                {isloading ? (
                    <div className="flex items-center justify-center h-96">
                        <div className="animate-pulse">
                            <div className="w-16 h-16 border border-purple-500 border-t-transparent rounded-full animate-spin">
                            </div>
                            <p className="mt-4 text-neutral-400">Loading Details...........</p>
                        </div>
                    </div>
                ) : error ? (
                    // {/* Else */ }
                    <div className="flex items-center justify-center h-96">
                        <div className="flex items-center justify-center h-96 ">
                            <div className="text-center">
                                <Loader />
                                <h2 className="text-xl fonst-bold mt-4">Failed to load the Movie Details</h2>
                                <p className="mt-2 text-neutral-500">Error</p>
                                <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md">Close</button>
                            </div>
                        </div>
                    </div>

                ) : movie ? (
                    <div>
                        {/* backddrop filter */}
                        <div className="relative h-72 md:h-96 w-full">
                            {/* Conditional rendering */}
                            <img
                                src={getImageUrl(movie.backdrop_path)}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            {/* else */}
                            <div className="w-full h-full bg-neutral-700"></div>

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-700/70 to-transparent"></div>
                        </div>

                        <div className="p-6 md:p-8">
                            <div className="md:flex gap-8 -mt-32 md:-mt-48 relative">
                                {/* Poster */}
                                <div className="w-32 md:w-64 flex-shrink-0 mb-4 md:mb-0 ">
                                    <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-700">
                                        {/* Conditional rendering */}
                                        {movie.poster_path ?
                                            <img
                                                src={getImageUrl(movie.poster_path, "w500")}
                                                alt=""
                                                className="w-full h-auto"
                                            /> :
                                            // {/* else */}
                                            <div className="w-full aspect-[2/3] bg-neutral-700 flex items-center justify-center">
                                                No Poster Avilable
                                            </div>
                                        }
                                    </div>
                                </div>

                                {/* Movie Info */}
                                <div className="flex-1">
                                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                                        {movie.title}
                                        {movie.release_date &&
                                            <span className="text-neutral-400 font-normal ml-2">
                                                ({movie.release_date.substring(0, 4)})
                                            </span>
                                        }
                                        {/* Conditonal rendering */}
                                    </h1>

                                    {/* Ratings and other meta data */}
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm items-center ">
                                        {/* conditional rendering */}
                                        {movie.vote_average > 0 && (
                                            <div className="flex items-center">
                                                <Star />
                                                <span className="ml-1 font-medium">Movie vote Average</span>
                                            </div>
                                        )}
                                        {/* Else */}
                                        {movie.runtime > 0 && (
                                            <span className="text-neutral-300">{formatRunTime(movie.runtime)}</span>
                                        )}
                                        {/* Conditional rendering */}
                                        {movie.release_date && (
                                            <span className="text-neutral-300">{movie.release_date.substring(0, 4)}</span>
                                        )}
                                        {/* Conditional rendering */}
                                        {movie.adult && (
                                            <span className="bg-red-500/80 text-white text-xs px-2 py-0.5 rounded">18+</span>
                                        )}
                                    </div>

                                    {/* Genre */}
                                    {/* conditional rendering */}

                                    {movie.genres && movie.genres.length > 0 && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {movie.genres.map((genre: any) => (
                                                <span
                                                    key={genre.id}
                                                    className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs"
                                                >
                                                    {(genre.id)}
                                                </span>
                                            ))}
                                        </div>

                                    )}


                                    {/* tag line */}
                                    {movie.tagLine && (
                                        <p className="mt-4 text-neutral-400 italic ">"{movie.tagLine}"</p>
                                    )}

                                    {/* OverView */}
                                    <div className="mt-6">
                                        <h2 className="text-xl font-semibold text-white mb-2">
                                            Overview
                                        </h2>
                                        <p className="text-neutral-300">{movie.overview || "No over view avialable"}</p>
                                    </div>

                                    {/* Button */}
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                                            <Computer />
                                            Watch Now
                                        </button>
                                        <div className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                                            <Computer />
                                            Add to Watchlist
                                        </div>
                                    </div>

                                </div>

                                {/* Additional Details */}
                                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-xl font-semibold text-white mb-4">
                                            Details
                                        </h2>
                                        <div className="space-y-4">
                                            {/* Conditional rendering */}
                                            <div className="text-neutral-400 text-sm mb-1">
                                                <h3 className="text-neutral-400 text-sm mb-1">
                                                    Production Companies
                                                </h3>
                                                <p className="text-white">Movie production countries</p>
                                            </div>

                                            <div className="text-neutral-400 text-sm mb-1">
                                                <h3 className="text-neutral-400 text-sm mb-1">
                                                    Language
                                                </h3>
                                                <p className="text-white">langauge</p>
                                            </div>
                                            <div className="text-neutral-400 text-sm mb-1">
                                                <h3 className="text-neutral-400 text-sm mb-1">
                                                    Budget
                                                </h3>
                                                <p className="text-white">Movie Budget</p>
                                            </div>
                                            <div className="text-neutral-400 text-sm mb-1">
                                                <h3 className="text-neutral-400 text-sm mb-1">
                                                    Revenue
                                                </h3>
                                                <p className="text-white">Revenue</p>
                                            </div>
                                            <div className="text-neutral-400 text-sm mb-1">
                                                <h3 className="text-neutral-400 text-sm mb-1">
                                                    Status
                                                </h3>
                                                <p className="text-white">Status</p>
                                            </div>
                                            <div className="text-neutral-400 text-sm mb-1">
                                                <h3 className="text-neutral-400 text-sm mb-1">
                                                    Original Language
                                                </h3>
                                                <p className="text-white">Original Language</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Else */}
                                    <div className="text-neutral-400">No Rating Avilable</div>

                                </div>

                                {/* IMDB and home page link */}
                                <div className="mt-8 space-y-4">
                                    {/* Conditional rendering */}
                                    <a href="#" className="inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded transition-all">
                                        <Computer />
                                        Official website
                                    </a>

                                    {/* Condtional rendering */}
                                    <a href="#" className="inline-flex items-center bg-yellow-700 hover:bg-yellow-600 text-white px-4 py-2 rounded transition-all">
                                        <Car />
                                        View on IMDB
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                ) : (<div />)}

                {/* Else */}

            </div>
        </div >
    )
}

export default MovieDetails
