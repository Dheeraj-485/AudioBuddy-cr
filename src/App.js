import React from 'react'
import { Footer, Header } from './components'
import Allroutes from './routes/Allroutes'
import "./App.css"
import "./index.css"

const App = () => {
  return (
    <>
    <Header/>
    <Allroutes/>
    <Footer/>
    </>
  )
}

export default App