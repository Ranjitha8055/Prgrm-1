import React, { useEffect, useState } from 'react'
import Loading from './Loading'



const Albums = () => {
    const [r, useref] = useState([])
    const [b,c]=useState(true)

    function a() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((data) => 
                data.json()

            )
            .then((d) => {
                useref(d)
                c(false)
                
            }).catch(() => {
                console.log("no data")
            })
    }
    useEffect(() => {
        a()
    },[])

    return (
        <>
        {
            b&&<Loading/>
        }
                {
                    !b && 
                    r.map((b)=>(
                        <div key={b.id}>ID {b.id}</div>
                    ))
                }

        </>
    )
}



export default Albums;