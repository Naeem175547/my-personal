import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './components/Todo'
import {Provider} from 'react-redux'
import {store} from './app/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Provider store={store}>
     <Todo/>   


     </Provider>
    </>
  )
}

export default App
