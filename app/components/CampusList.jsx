import React from 'react'
import { connect } from 'react-redux'
import { writeCampus, postCampus } from '../reducers'

function Campus(props) {
    const { name, image } = props.campus

    return (
        <div className="col-md-3">
            <div className="panel panel-default">
                <div className="panel-heading">{name}</div>
                <div className="panel-body">
                    <a href="#" className="thumbnail">
                        <img src={image} />
                    </a>
                </div>
            </div>
        </div>
    )
}

function CampusList(props) {
    const { campuses, handleChange, handleSubmit } = props

    return (
        <div>
            <div className="panel panel-default">
                <div className="panel-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="campusName">Campus name</label>
                            <input onChange={handleChange} type="text" className="form-control" id="campusName" placeholder="Campus name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="logo">Logo</label>
                            <input type="text" className="form-control" id="logo" placeholder="Logo" />
                        </div>
                        <button type="submit" className="btn btn-default">New Campus</button>
                    </form>
                </div>
            </div>
            <div className="row">
                {
                    campuses.map(campus => <Campus key={campus.id} campus={campus} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleChange(evt) {
            dispatch(writeCampus(evt.target.value))
        },
        handleSubmit(evt) {
            evt.preventDefault()
        }
    }
}

export default connect(mapStateToProps)(CampusList)