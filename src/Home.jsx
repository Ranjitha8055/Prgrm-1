import { useEffect, useState } from "react"
import { Link } from "react-router"


const Home = () => {
    return (
        <div className=' gap-7  flex bg-fuchsia-300'>
            <div className=' border-2 p-3 m-2 pl-5 pr-5 underline'><Link to='/posts'>Posts</Link></div>
           
            <div className='border-2 p-3 m-2 pl-5 pr-5 underline'><Link to='/albums'>Albums</Link></div>
            <div className='border-2 p-3 m-2 pl-5 pr-5 underline'><Link to='/todos'>Todos</Link></div>
            <div className='border-2 p-3 m-2 pl-5 pr-5 underline'><Link to='/photos'>Photos</Link></div>
            
        </div>
    )
}

export default Home
