import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Perfil } from './Perfil'
import Login  from './Login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Login/> } />
        <Route path="/perfil" element={ <Perfil/> }/>
      </Routes>
    </>
  )
}

export default App
