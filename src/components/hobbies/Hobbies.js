import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/firebase'
import { addDoc, updateDoc, deleteDoc, collection, getDocs, doc } from 'firebase/firestore'

const Hobbies = () => {
    const [hobbie, setHobbie] = useState('')
    const [hobbies, setHobbies] = useState([])
    const hobbiesCollectionRef = collection(db, 'hobbies')
    const createHobbie = async () => {
        try {
            await addDoc(hobbiesCollectionRef, {
                hobbie: hobbie
            })

            getAllHobbies()


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
            setHobbies(result)

        } catch (err) {
            console.log(err)

        }

    }

    const updateHobbie = async (id) => {
        try {
            const hobbieDoc = doc(db, 'hobbies', id)



        } catch (err) {
            console.log(err)
        }

    }

    const deleteHobbie = async (id) => {
        try {
            const hobbieDoc = doc(db, 'hobbies', id)
            await deleteDoc(hobbieDoc)

        } catch (err) {
            console.log(err)
        }

    }


    useEffect(() => {
        getAllHobbies()
    }, [])
    return (
        <div>
            <input value={hobbie} onChange={(e) => setHobbie(e.target.value)} placeholder='Enter your hobbie' />
            <button onClick={createHobbie}>Enter</button>
            {hobbies && hobbies?.map((hobbie, index) => {
                return (
                    <div key={index}>
                        <h3>Hobbie: {hobbie.hobbie}</h3>
                        <button onClick={() => updateHobbie(hobbie.id)}>Update Hobbie</button>
                        <button onClick={() => deleteHobbie(hobbie.id)}>Delete Hobbie</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Hobbies