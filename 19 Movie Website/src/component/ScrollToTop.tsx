import { ArrowUpWideNarrow } from "lucide-react"
import { useEffect, useState } from "react"

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    useEffect(()=>{
        window.addEventListener("scroll",toggleVisibility);
        return()=>{
            window.removeEventListener("scroll",toggleVisibility)
        }
    },[])


    return (
        <div className="fixed bottom-6 right-6 z-60">
            <button 
            className={`bg-purple-600 hover:bg-purple-700 text-white p-2.5 rounded-full shadow-lg transition-all duration-300 focus:outline-none
                ${isVisible?"opacity-100 translate-y-0":"opacity-0 pointer-events-none"}
                `} 
            onClick={scrollToTop}>
                <ArrowUpWideNarrow />
            </button>

        </div>
    )
}

export default ScrollToTop
