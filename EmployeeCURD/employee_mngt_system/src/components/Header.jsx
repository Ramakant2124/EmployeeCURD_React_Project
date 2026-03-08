import {NavLink} from "react-router"

function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">EMS</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/employee/show"> Show Employee</NavLink>
                            <NavLink className="nav-link" to="/employee/add"> Add Employee</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header