import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar({aboutText,title,mode,toggleMode}) {

    // const [btntext, setBtnText] = useState("Enable dark mode")
    // const textChange = ()=>{
    //     if (props.mode === 'dark') {
    //         setBtnText("Enable light mode")
    //     }
    //     else{
    //         setBtnText("Enable dark mode")
    //     }
    // }

  return (

    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        {/* <a className="navbar-brand" href="#">{title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">{aboutText}</Link>
                    {/* <a className="nav-link" href="/about">{aboutText}</a> */}
                </li>
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode==='light'?'dark':'light'} mode</label>
            </div>
        </div>
    </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About"
}



// ${props.mode==='dark'?setBtnText("Enable light mode"):btntext}`
