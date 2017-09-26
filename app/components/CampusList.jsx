import React from 'react'
import { connect } from 'react-redux'

function CampusList(props) {
    const { campuses } = props
    console.log(campuses)

    return (
        <div>
            {
                campuses.map(campus => (
                    <li key={campus.id}>{campus.name}</li>
                ))
            }
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        campuses: state.campuses
    }
}

export default connect(mapStateToProps)(CampusList)