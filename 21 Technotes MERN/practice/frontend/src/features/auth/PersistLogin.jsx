import { useSelector } from "react-redux"
import usePersist from "../../hooks/usePersist"
import { selectCurrentToken } from "./authSlice"
import { useEffect, useState } from "react"
import { useRefreshMutation } from "./authApiSlice"



const PersistLogin = () => {

    const [persist] = usePersist()
    const token = useSelector(selectCurrentToken)
    const effectRan = useRef(false)

    const [trueSuccess, setTrueSuccess] = useState(false)

    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error
    }] = useRefreshMutation()

    useEffect(() => {
        if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
            const verifyRefreshToken = async () => {
                console.log("verifying refresh token")

                try {
                    await refresh()
                    setTrueSuccess(true)
                } catch (err) {
                    console.log(err)
                }
            }
            if (!token && persist) verifyRefreshToken()
        }
        return () => effectRan.current = true
    },[])


    let content;
    if (!persist) { //no persist 
        console.log("No persist")
        content = <Outlet />
    } else if (isLoading) {// persist:yes , token: no
        console.log('loading')
        content = <p>Loading...</p>
    } else if (isError) { //persist : yes, token:no
        console.log('error')
        content = (
            <p className="errmsg">
                {`${error?.data?.message} - `} <Link to='/login' >Please login again</Link>
            </p>
        )
    } else if (isSuccess || trueSuccess) { // persist - yes , token - yes
        console.log('success')
        content = <Outlet />
    } else if (token && isUninitialized) {
        console.log('token and uninit')
        console.log(isUninitialized)
        content = <Outlet />
    }

    return content
}

export default PersistLogin
