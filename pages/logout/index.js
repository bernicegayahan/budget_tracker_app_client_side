//lets build the logic for our logout components

//we are not going to build a physical entity for our document
import { useContext, useEffect } from 'react'
import UserContext from '../../UserContext'
import Router from 'next/router'

export default function index() {
    const { unsetUser } = useContext(UserContext)

    //let's create a side effect that will allow us to clear out the local storage for us to "unmount" the current loggin in user.
    useEffect(() => {
        //decribe what you want to happen.
        unsetUser();
        //redirect the user 
        Router.push('/login')
    }, [])
    return null
}
