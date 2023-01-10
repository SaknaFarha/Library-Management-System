import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
    let[name,setName] = useState("")
    let[age,setAge] = useState("")
    let[email,setEmail] = useState("")
    let[phoneNumber,setPhoneNumber] = useState("")

    let navigate=useNavigate()
    let handleRemove = (e) => {
        e.preventDefault();
        //data to be posted

        //posting data to the server
        fetch("http://localhost:2000/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringfy(userData)
        })
        alert('User Successfully added')
        navigate('/admin/user-list')

    }

        return ( 
        <div className="addUser">
            <h1>Add a new user</h1>
            <div className="forms">
                <div className="name">
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter name"/>
                </div>
                <div className="age">
                    <input type="number"min="1" value={age} onChange={(e)=>setAge(e.target.value)}placeholder="enter age"/>
                </div>
                <div className="email">
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="phoneNumber">
                    <input type="tel" minLength='10' maxLength='10'value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}placeholder="enter the phone number          "/>
                </div>
            </div>
        </div>
     );
}
 
export default AddUser;