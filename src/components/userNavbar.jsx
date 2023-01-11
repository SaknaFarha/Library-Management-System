import { Link } from "react-router-dom";
const UserNavbar = () => {
    return (
        <div className="userNavbar">
            <div className="userNav">
                <div className="navbar">
                    <div className="logo">
                        <img src="https://www.demosoft.co.in/dist/img/admin-logo.png" alt="" width={100} />
                    </div>
                    <div className="content">
                        <h1>User Portal</h1>
                    </div>
                    <div className="nav_links">
                        <Link to="/user/">DashBoard</Link>
                        <Link to="/user/book-list">Book List</Link>
                        <Link to="/">Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserNavbar;