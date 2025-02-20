
import { useEffect, useState } from 'react'
import './App.css'
// import Body from './Components/Body'
// import Demo1 from './Components/Demo1'
// import Header from './Components/Header'

function App() {

  const [emojis, setEmojis] = useState([
    '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊',
    '😋', '😎', '😍', '😘', '🥰', '😗', '😙', '😚', '🙂', '🤗',
    '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥'
  ]);
  
  const [emoji, setEmoji] = useState('😥')

  function trocarEmoji(){
    if(emojis.length > 0){
    let i = Math.floor(Math.random() * emojis.length)
    setEmoji(emojis[i])
    setEmojis(emojis.filter((e) => e != emojis[i] ))

    useEffect(() => [])
    }else{
      alert ('Acabou!')
    }
  }

  return (
    <div className='container-app'>
      <p className='emoji' onClick={trocarEmoji}>
        Clique no emoji!
          {emoji}
      </p>

    </div>
  
  
  )
}

export default App;
