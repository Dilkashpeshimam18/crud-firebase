import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'

const Auth = () => {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    useEffect(() => {

    }, [])
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)

        } catch (err) {
            console.log(err)

        }

    }
    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        } catch (err) {
            console.log(err)


        }

    }
    const logout = async () => {
        try {
            await signOut(auth)

        } catch (err) {
            console.log(err)


        }
    }
    return (
        <div>
            <div>
                <h3>Email</h3>
                <input onChange={(e) => setRegisterEmail(e.target.value)} />
                <h3>Password</h3>
                <input type='password' onChange={(e) => setRegisterPassword(e.target.value)} />
                <button onClick={register}>Create User</button>
            </div>
            <div>
                <h3>Email</h3>
                <input onChange={(e) => setLoginEmail(e.target.value)} />
                <h3>Password</h3>
                <input type='password' onChange={(e) => setLoginPassword(e.target.value)} />
                <button onClick={login}>Login User</button>
            </div>
            <div>
                <h2>User logged in:</h2>
                {user?.email}
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Auth