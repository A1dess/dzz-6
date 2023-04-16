import { useState, useEffect } from "react"
import { User } from "../components/User"

export default function UsersPage(){
    
const [user, setUser]= useState([])
const [users, setUsers] = useState([])
const[id, setId] = useState(0)
 useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) =>{
        return res.json()
    })
    .then((data) =>{
        setUser(data)
    })
 },[])

 useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) =>{
        return res.json()
    })
    .then((data)=>{
        setUsers(data)
    })
 },[id])

    return(
        <div>
           <h1>users page</h1>
           <form className="child">
        <ul>id:{users.id}</ul>
        <li>name:{users.name}</li>
        <li>username:{users.username}</li>
        <li>email:{users.email}</li>
        <li>website:{users.website}</li>
        
      </form>
            {
                user.map(el =><User el={el} key={el.id} setId = {setId}/>)
            }
          
        </div>
    )
}