import { useEffect } from "react"
import { store } from "../../app/store"
import { noteApiSlice } from "../notes/notesApiSlice"
import { userApiSlice } from "../users/usersApiSlice"
import { Outlet } from "react-router-dom"

const Prefetch = () => {
    //we neeed that data is avilable for the entire duration of the 
    useEffect(() => {
        console.log('subscribing');
        const notes = store.dispatch(noteApiSlice.endpoints.getNotes.initiate())
        const users = store.dispatch(userApiSlice.endpoints.getUsers.initiate())
        //we create a manual subscription to notes then
        //allows to to get all the state including prefilling all our forms on reload

        return () => {
            console.log('unsubscribing');
            notes.unsubscribe();
            users.unsubscribe();
        }
    }, [])
    //only run once

    return (<Outlet />)
}

export default Prefetch
