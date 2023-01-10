import { useState,useEffect } from "react";
const UserList = () => {
    let[user,setUser] = useState([])
    useEffect(()=>{
        let fetchData = async ()=>{
            let response = await fetch("http://localhost:2000/users")
            let data = await response.json()
            setUser(data)
        }
        fetchData()
    },[])
    
    return ( 
        <div className="userlist">
            <h1>User List</h1>
        {user.map((x)=>(
            <div className="userDetails">
                <h1>{x.name}</h1> 
                <h2>{x.age}</h2>
                <h2>{x.email}</h2>
                <h3>{x.phonenumber}</h3>
                <h3>{x.id}</h3>

            </div> 
        ))}
        </div>
     );
}
 
export default UserList;