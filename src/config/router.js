import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Home from '../components/pages/Home'
import TextShadow from '../components/pages/TextShadow'

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/textShadow' element={<TextShadow />} />
      <Route
        path="*"
        element={<Navigate to="/" replace/>} />
    </Routes>
  </Router>
)

export default AppRouter
