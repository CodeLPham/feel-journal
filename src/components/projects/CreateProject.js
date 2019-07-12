import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        body: '',
    }
    //Don't need to change handleChange cause its pretty generic
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault(); //keep to prevent from reloading.
        console.log(this.state);
    }

    render() {
        {/* going to need a class component to store a local state of user data */}
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Today's Mood</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="body">Body</label>
                        <textarea rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Entry</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject