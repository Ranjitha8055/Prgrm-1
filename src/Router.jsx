import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import Home from './Home'
import Posts from './Posts'
import Comments from './Comments'
import Albums from './Albums'
import Photos from './Photos'
import Todos from './Todos'

function  Router () {
  return (
   <BrowserRouter>
   <Home/>
    <Routes>
       
        <Route path='/posts' element={<Posts/>} />
        <Route path='/albums' element={<Albums/>} />
        <Route path='/photos' element={<Photos/>} />
       
        <Route path='/todos' element={<Todos/>} />
       
           </Routes>
   
   
   </BrowserRouter>
  )
}

export default Router
