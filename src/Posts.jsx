import React,{useState,useEffect} from 'react'

const Posts = () => {
    const [r, useref] = useState([])
    function a() {
        fetch('https://jsonplaceholder.typicode.com/posts')
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
        <div className='flex flex-wrap'>
                {
                    r.map((b)=>(
                        <div  className='border-2 w-10 'key={b.id}>ID {b.id}</div>
                    ))
                }
                </div>

        </>
    )
}



export default Posts
