import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/firebase'
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';


const Users = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const usersCollectionRef = collection(db, "users")

    const createUser = async () => {
        try {
            const newUser = {
                name: name,
                age: Number(age)
            }
            await addDoc(usersCollectionRef, newUser)

        } catch (err) {
            console.log(err)
        }

    }

    const increaseAge = async (id, age) => {
        try {
            const userDoc = doc(db, 'users', id)
            const newField = { age: age + 1 }
            await updateDoc(userDoc, newField)
        } catch (err) {
            console.log(err)
        }
    }

    const deleteUser = async (id) => {
        try {
            const userDoc = doc(db, 'users', id)
            await deleteDoc(userDoc)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {

        const getUsers = async () => {
            try {
                const data = await getDocs(usersCollectionRef)
                const res = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }))
                console.log(res)
                setUsers(res)
            } catch (err) {
                console.log(err)
            }

        }
        getUsers()

    }, [])
    return (
        <div>
            <div>
                <input placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='number' placeholder='Enter age' value={age} onChange={(e) => setAge(e.target.value)} />
                <button onClick={createUser}>Create User</button>
            </div>
            {users.map((user) => {
                return <div>
                    <p>Name:{user.name}</p>
                    <p>Age:{user.age}</p>
                    <button onClick={() => increaseAge(user.id, user.age)}>Increase age</button>
                    <button onClick={() => deleteUser(user.id)}>Delete User</button>
                </div>
            })}
        </div>
    )
}

export default Users