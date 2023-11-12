import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicModules from '../public/auth';



const MainRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<PublicModules />} />
    </Routes>
  )
}

export default MainRouter;