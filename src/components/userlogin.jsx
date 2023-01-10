import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    let navigate = useNavigate()
    let login=()=>{
        navigate('/user/')
    }
    return ( 
        <div className="userlogin">
            <div className="form container card">
                <h1>Login as User</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>
                        <div className="email">
                            <label htmlFor="">Email</label><br />
                            <input type="email"  />
                        </div>
                        <div className="password">
                            <label htmlFor="">Password</label><br />
                            <input type="password" />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    
     );
}
 
export default UserLogin;