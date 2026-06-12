import Footer from "./component/Footer"
import MovieContent from "./component/MovieContent"
import NavBar from "./component/NavBar"
import ScrollToTop from "./component/ScrollToTop"
import { MovieProvider } from "./context/MovieContext"
import { fetchTopRatedMovie, fetchTrendingMovies } from "./services/api"

const App = () => {
    return (
        <MovieProvider>
            <div className="min-h-screen text-white">
                <NavBar />
                <main>
                    <MovieContent />
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </MovieProvider>
    )
}

export default App