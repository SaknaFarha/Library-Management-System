import { Link } from "react-router-dom";
import "../styles/adminNavbar.css"
const AdminNavbar = () => {
    return (
        <div className="adminNav">
            <div className="navbar">
                <div className="logo">
                    <img src="https://www.demosoft.co.in/dist/img/admin-logo.png" alt="" width={100} />
                </div>
                <div className="content">
                    <h1>Admin Portal</h1>
                </div>
                <div className="nav_links">
                    <Link to="/admin/">DashBoard</Link>
                    <Link to="/admin/add-book">Add Books</Link>
                    <Link t0="/admin/add-user">Add User</Link>
                    <Link to="/admin/book-list">Book List</Link>
                    <Link to="/admin/user-list">User List</Link>
                    <Link to="/">Logout</Link>
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;
