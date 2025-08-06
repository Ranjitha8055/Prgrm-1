import React, { useState } from 'react'

const Comments = () => {
    const [r, useref] = useState([])
    function a() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((data) => 
                data.json()

            )
            .then((d) => {
                useref(d)
                
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
                    r.map((b)=>(
                        <div key={b.id}>ID {b.id}</div>
                    ))
                }

        </>
    )
}




export default Comments
