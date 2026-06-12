import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { fetchGenre, fetchPopularMovies, fetchTopRatedMovie, fetchTrendingMovies } from "../services/api";


const MovieContext = createContext();
export const useMovies = () => useContext(MovieContext)


export const MovieProvider = ({ children  }:{children:ReactNode}) => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);
    const [selectedMovieId, setSelectedMovieId] = useState<any>(null);


    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                setLoading(true);
                const [trending, popular, topRated, genreList] = await Promise.all([
                    fetchTrendingMovies(),
                    fetchPopularMovies(),
                    fetchTopRatedMovie(),
                    fetchGenre()
                ]);
                

                setTrendingMovies(trending);
                setPopularMovies(popular);
                setTopRatedMovie(topRated);
                setGenres(genreList);
            } catch (err) {
                console.log("Error fetching movie data: ", err);
            } finally {
                setLoading(false)
            }
        }

        fetchMovieData();
    }, [])

    const openMovieDetails = (movieId: any) => {
        setSelectedMovieId(movieId);
        document.body.style.overflow = "hidden";
    }

    const closeMovieDetails = () => {
        setSelectedMovieId(null);
        document.body.style.overflow = "hidden";
    }


    return (
        <MovieContext
            value={{
                trendingMovies,
                popularMovies,
                topRatedMovies,
                genres,
                loading,
                error,
                selectedMovieId,
                openMovieDetails,
                closeMovieDetails
            }}
        >{children}</MovieContext>
    )

}