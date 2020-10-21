import React, {Component} from "react";
import {addTask} from "./api/tasks";

class NewTask extends Component {

    state = {
        title: " ",
        description: " ",
        status: "open"
    }
    handleChange = e => {

        this.setState({

            [e.target.name]: e.target.value


        });

    };


    handleSubmit = (e) => {
        e.preventDefault()

        this.props.handleOnNewTask(this.state);
    }


    render() {

        return (
            <div className="card shadow">

                <div className="card-body">

                    <h1 className="card-title">New task</h1>

                    <form>

                        <div className="form-group">

                            <input type="text"

                                   className="form-control"

                                   name="title"

                                   placeholder="Title"
                                   onChange={this.handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <input type="text"

                                   className="form-control"

                                   name="description"

                                   placeholder="Description"
                                   onChange={this.handleChange}
                            />

                        </div>

                        <button className="btn btn-info"

                                onClick={
                                    this.handleSubmit
                                }

                        >

                            Add task

                            <i className="fas fa-plus-circle ml-1"></i>

                        </button>


                    </form>

                </div>

            </div>
        )
    }
}

export default NewTask