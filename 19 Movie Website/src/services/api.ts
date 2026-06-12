const API_KEY = "1239edc8338a0de80cd8a7aaeb981314"
const BASE_URL = "https://api.themoviedb.org/3"

export const fetchTrendingMovies = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
}


export const fetchPopularMovies = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
}

export const fetchTopRatedMovie = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
}



export const fetchMovieByGenre = async (genreId: any) => {
    try {
        const response = await fetch(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}&page=1`
        );
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
}


export const fetchGenre = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();
        return data.genres;
    }
    catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
}


export const fetchMovieDetails = async (movieId: any) => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
        );
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
}


export const searchMovies = async (query: string) => {
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
        );
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error("Error Fetching trending movies", error);
        return [];
    }
}

export const getImageUrl = (path: string, size = "original") => {
    if (!path) {
        return "https://placehold.co/400x600?text=No+Image+Available"
    }
    return `https://image.tmdb.org/t/p/${size}${path}`
}