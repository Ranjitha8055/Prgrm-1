import React,{useState,useEffect} from 'react'

const Todos = () => {
    const [r, useref] = useState([])
    function a() {
        fetch('https://jsonplaceholder.typicode.com/todos')
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


export default Todos
