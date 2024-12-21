import Painel from './pages/Painel'
import Login from './pages/Login'
import { useContext, useState } from 'react'
import { AutenticacaoContext } from './context/AutenticacaoContext'

function App() {
const { logado } = useContext(AutenticacaoContext)

if(logado) {
  return <Painel/>
}
return <Login/>
}

export default App
