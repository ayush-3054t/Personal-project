import { Loader } from "lucide-react"
import { useMovies } from "../context/MovieContext"
import GenereSection from "./GenereSection"
import HeroSection from "./HeroSection"
import MovieDetails from "./MovieDetails"
import MovieSlider from "./MovieSlider"

const MovieContent = () => {
    const {
        trendingMovies,
        popularMovies,
        topRatedMovies,
        selectedMovieId,
        closeMovieDetails,
        error,
    } = useMovies()


    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white" >
                <div className="text-center">
                    <Loader />
                </div>
                <h2 className="text-2xl font-bold mt-4">Error Loading Movies</h2>
                <p className="mt-2 text-neutral-400">{error}</p>
                <button
                    className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"

                    onClick={() => window.location.reload()}
                >
                    Retry
                </button>
            </div>
        )
    }
    return (
        <>

            <HeroSection />
            <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 ">
                <MovieSlider
                    title="Trending This Week"
                    subtitle="Stay updated with what everyone's watching"
                    movie={trendingMovies}
                    id="trending"
                />
                <MovieSlider
                    title="Popular Movie"
                    subtitle="Most watched movie right now"
                    movie={popularMovies}
                    id="popular"
                />
                <GenereSection />
                <MovieSlider
                    title="Top Rated"
                    subtitle="Most watched movie right now"
                    movie={topRatedMovies}
                    id="top-rated"
                />

            </div>
            {/* Conditional rendering */}
            {selectedMovieId && <MovieDetails movieId={selectedMovieId} onClose={closeMovieDetails} />}
        </>
    )
}

export default MovieContent


