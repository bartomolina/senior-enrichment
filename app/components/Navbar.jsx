import React from 'react'
import { connect } from 'react-redux'

function Navbar(props) {
    const { currentTab } = props

    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <a className="navbar-brand" href="#">Campus Management</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Campus<span className="sr-only">(current)</span></a>
                </li>
            </div>
        </nav>
    )
}

const mapStateToProps = function (state) {
    return {
        currentTab: state.currentTab
    }
}

export default connect(mapStateToProps)(Navbar)