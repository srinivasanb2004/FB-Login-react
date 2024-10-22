import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "./App.css"


function App() {

    const navigate = useNavigate()

    const [user, setusers] = useState("")
    const [pass, setpass] = useState("")

    function handleuser(e) {
        setusers(e.target.value)
    }

    function handlepass(e) {
        setpass(e.target.value)
    }

    function check() {

        var logindetails = axios.get(`http://localhost:5000/login?username=${user}&password=${pass}`)
        logindetails.then(function(data){
            if(data.data === true)
            {
                navigate("/Success")
            }
            else{
                navigate("/Fail")
            }
        })
    }

    return (

        <div class="form-container">
            <input onChange={handleuser} name="username" placeholder="username" />
            <input onChange={handlepass} name="password" placeholder="password" />
            <button onClick={check}>Login</button>
        </div>

    )


}

export default App
