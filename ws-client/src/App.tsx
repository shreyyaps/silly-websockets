import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [message, setMessage] = useState<string[]>([])
  const [currmessage, setCurrmessage] = useState<string>("")
  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      console.log('connected')
      setSocket(socket)
    }
    socket.onmessage = (message) => {
      console.log('received message :', message.data)
      setMessage((m)=>[...m, message.data])
    }
     return () => {
    console.log("closing socket")
    socket.close()
  }
    
  },[])

  if(!socket){
    return (
     <div>
      loading
     </div>
    )
  }
  if (socket){
    return (
      <div>
        <p>sendmessage</p>
        <input type={'text'} onChange={(e) => setCurrmessage(e.target.value)} />
        <button
        onClick={()=> socket.send(currmessage)}
        >send</button>
        {message}
      </div>
    )
  }
}

export default App
