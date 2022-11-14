import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/firebase'
import { addDoc, updateDoc, deleteDoc, collection, getDocs, doc } from 'firebase/firestore'

const Hobbies = () => {
    const [hobbies, setHobbies] = useState([])
    const hobbiesCollectionRef = collection(db, 'hobbies')
    const createHobbie = async () => {
        try {
            await addDoc(hobbiesCollectionRef, {
                hobbie: hobbies
            })

        } catch (err) {
            console.log(err)

        }
    }

    const getAllHobbies = async () => {
        try {
            const data = await getDocs(hobbiesCollectionRef)
            const result = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            console.log(result)
            setHobbies(result)

        } catch (err) {
            console.log(err)

        }

    }


    useEffect(() => {
        getAllHobbies()

    }, [])
    return (
        <div>
            <input onChange={(e) => setHobbies(e.target.value)} placeholder='Enter your hobbie' />
            <button onClick={createHobbie}>Enter</button>
            {hobbies.map((hobbie) => {
                return (
                    <div>
                        <h3>Hobbie: {hobbie.hobbie}</h3>
                        <button>Update Hobbie</button>
                        <button>Delete Hobbie</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Hobbies