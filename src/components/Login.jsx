import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    
    const handeSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    };
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' value={userName} onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handeSubmit}>Login</button>
    </div>
  )
}

export default Login;