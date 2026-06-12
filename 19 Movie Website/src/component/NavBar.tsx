import { useEffect, useRef, useState } from "react"
import { useMovies } from "../context/MovieContext"
import { Menu, SearchCheck, SquareX, X } from "lucide-react";
import { getImageUrl, searchMovies } from "../services/api";

const NavBar = () => {
    const { openMovieDetails } = useMovies()

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const searchContainerRef = useRef<any>(null);



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    useEffect(() => {
        const handleSearch = async () => {
            if (searchQuery.trim().length > 2) {
                setIsSearching(true);
                try {
                    const result = await searchMovies(searchQuery);
                    setSearchResult(result ? result.slice(0, 5) : []);
                } catch (err) {
                    console.log("Error searching the movie")

                }
                finally {
                    setIsSearching(false);
                }
            }
        }

        const debounceTimer = setTimeout(() => {
            handleSearch();
        }, 500)

        return () => {
            clearTimeout(debounceTimer);
        }
    }, [searchQuery])

    const handleSearchFocus = () => {
        if (searchQuery.trim().length > 2 && searchResult.length > 0) {
            setShowSearchResult(true);
        }
    }

    const handleClickOutside = (e: any) => {
        if (searchContainerRef.current &&
            !searchContainerRef.current.contains(e.target)) {
            setShowSearchResult(false);
        }
    }

    console.log(showSearchResult)




    const handleMovieSelect = (movieId: any) => {
        openMovieDetails(movieId);
        setShowSearchResult(false);
        setSearchQuery("");
    }




    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-neutral-900/95 backdrop-blur-md shadow-lg"
                : "bg-transparent"
                }`
            }


        >
            <div className="container mx-auto py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <span className="text-purple-500 font-bold text-3xl">
                                Cine<span className="text-white">Mix</span>
                            </span>
                        </a>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="#"
                            className="text-white hover:text-purple-400 transition-all font-medium"
                        >Home</a>
                        <a
                            href="#trending"
                            className="text-white hover:text-purple-400 transition-all font-medium"
                        >Trending</a>
                        <a
                            href="#popular"
                            className="text-white hover:text-purple-400 transition-all font-medium"
                        >Popular</a>
                        <a
                            href="#top-rated"
                            className="text-white hover:text-purple-400 transition-all font-medium"
                        >Top Rated</a>
                    </nav>

                    {/* Desktop search */}
                    <div className="hidden md:block relative search-container" ref={searchContainerRef} >
                        <div className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={handleSearchFocus}
                                placeholder="Search Movies......."
                                className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                            />

                            {/* Conditional Rendering  */}
                            {isSearching ? <div className="absolute right-3 top-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                            </div> :
                                <div className="absolute right-3 top-1.5">
                                    <X />
                                </div>
                            }


                            {/* else */}
                        </div>

                        {/* Search Result DropDown Conditional Rendering*/}
                        {showSearchResult && searchResult && searchResult.length > 0 && (
                            <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                                <ul className="divide-y divide-neutral-700">

                                    {searchResult.map((movie) => (
                                        <li className="hover:bg-neutral-700" key={movie.id}>
                                            <button

                                                onClick={()=>handleMovieSelect(movie.id)}
                                                className="flex items-center p-3 w-full text-left"
                                            >
                                                <div className="w-10 h-10 bg-neutral-700 rounded overflow-hidden flex-shrink-0">

                                                    {/* Conditional rendering */}
                                                    {movie.poster_path &&
                                                        <img src={getImageUrl(movie.poster_path)} alt="" className="w-full h-full object-cover" />
                                                    }

                                                    {/* else */}
                                                    <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs">
                                                        {/*  */}
                                                        No Image
                                                    </div>
                                                </div>

                                                <div className="ml-3 flex-1">
                                                    <p className="text-sm font-medium text-white truncate">
                                                        {movie.title}
                                                    </p>
                                                    <p className="text-xs text-neutral-400">
                                                        {movie.release_date.substring(0, 4)}
                                                    </p>

                                                </div>

                                            </button>
                                        </li>

                                    ))}

                                </ul>

                            </div>
                        )

                        }


                        {/* Conditonal Rendering */}
                        {showSearchResult && searchQuery.trim().length > 2 && (!searchResult || searchResult.length === 0) && !isSearching &&
                            <div className=" absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                                <div className="p-4 text-center text-neutral-400 text-sm ">
                                    No Movies found matching.....
                                </div>
                            </div>
                        }

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {/* Conditional Rendering */}
                        {isMobileMenuOpen ? <SquareX /> : <Menu />}
                    </button>


                </div>

                {/* Mobile Navigation bar Conditoinal rendering*/}
                {isMobileMenuOpen &&
                    <div className="mt-4 pb-4 space-y-4 md:hidden">
                        <a
                            href="#"
                            className="block text-white hover:text-purple-400 transition-colors py-2"
                        >Home</a>
                        <a
                            href="#trending"
                            className="block text-white hover:text-purple-400 transition-all font-medium"
                        >Trending</a>
                        <a
                            href="#popular"
                            className="block text-white hover:text-purple-400 transition-all font-medium"
                        >Popular</a>
                        <a
                            href="#top-rated"
                            className="block text-white hover:text-purple-400 transition-all font-medium"
                        >Top Rated</a>
                        <div className="relative mt-3 search-container">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search Movies......."
                                    className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                />

                                {/* Conditional Rendering  */}

                                {isSearching ?
                                    <div className="absolute right-3 top-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                                    </div>

                                    : <div className="absolute right-3 top-2.5">
                                        <X />
                                    </div>
                                }



                                {/* else */}



                                {/* Mobile Search Result conditional rendering */}
                                {showSearchResult && searchResult && searchResult.length > 0 &&
                                    <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                                        <ul className="divide-y divide-neutral-700">
                                            {/* map Method  */}
                                            <li className="hover:bg-neutral-700">
                                                <button className="flex items-center p-3 w-full text-left">
                                                    <div className="w-10 h-10 bg-neutral-700 rounded-full overflow-hidden flex-shrink-0">

                                                        {/* Conditional Rendering */}
                                                        <img src="" alt="" className="w-full h-full object-cover" />

                                                        {/* Else */}
                                                        <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs">
                                                            No Image
                                                        </div>
                                                    </div>
                                                    <div className="ml-3 flex-1">
                                                        <p className="text-sm font-medium text-white truncate">
                                                            Movies Title
                                                        </p>
                                                        <p className="text-xs text-neutral-400">
                                                            Movie Release date
                                                        </p>
                                                    </div>
                                                </button>
                                            </li>

                                        </ul>
                                    </div>
                                }

                                {/* Connditional rendering */}
                                {showSearchResult && searchQuery.trim().length > 2 && (!searchResult || searchResult.length === 0) && !isSearching &&

                                    <div className="absolute mt-2 w-full bg-neutral rounded-lg shadow-lg overflow-hidden z-50">
                                        <div className="p-4 text-center text-neutral-400 text-sm">
                                            No Movies found matching......
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                }
            </div>
        </header>
    )
}

export default NavBar
