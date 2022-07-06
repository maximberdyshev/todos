import './styles/App.css'
import React from 'react'
import MainForm from './components/MainForm'
import { BrowserRouter } from 'react-router-dom'
import MyNavbar from './components/UI/navbar/MyNavbar'

function App() {
  return (
      <BrowserRouter>
        <MyNavbar />
        <MainForm />
      </BrowserRouter>
  )
}

export default App
