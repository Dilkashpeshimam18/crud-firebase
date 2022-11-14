import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/firebase'
import { addDoc, updateDoc, deleteDoc, collection } from 'firebase/firestore'

const Hobbies = () => {
    const [hobbie, setHobbie] = useState([])
    const hobbiesCollectionRef = collection(db, 'hobbies')
    const createHobbie = async () => {
        try {
            await addDoc(hobbiesCollectionRef, {
                hobbie: hobbie
            })

        } catch (err) {
            console.log(err)

        }
    }


    useEffect(() => {


    }, [])
    return (
        <div>
            <input onChange={(e) => setHobbie(e.target.value)} placeholder='Enter your hobbie' />
            <button onClick={createHobbie}>Enter</button>
        </div>
    )
}

export default Hobbies