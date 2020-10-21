import React, {Component} from "react";
import {addTask, deleteTask} from "./api/tasks";


class Task extends Component {


    state = {
        title: this.props.task.title,
        description: this.props.task.description,
        status: this.props.task.status,
        id : this.props.task.id
    }


    render() {
        let closeButton;
        let addOperationButton;
        if (this.state.status === "open") {
            closeButton =
                <button className="btn btn-dark btn-sm" onClick={() =>
                    this.props.handleOnFinish(this.state)


                }>

                    Finish

                    <i className="fas fa-archive ml-1"></i>

                </button>


            addOperationButton =
                <button className="btn btn-info btn-sm mr-2">

                    Add operation

                    <i className="fas fa-plus-circle ml-1"></i>

                </button>
        }
        return (

            <section className="card mt-5 shadow-sm">

                <div className="card-header d-flex justify-content-between align-items-center">

                    <div>

                        <h5>{this.state.title}</h5>

                        <h6 className="card-subtitle text-muted">{this.state.description}</h6>

                    </div>


                    <div>

                        {addOperationButton}

                        {closeButton}

                        <button className="btn btn-outline-danger btn-sm ml-2" onClick={() =>this.props.handleOnDelete(this.state.id) }>
                            <i className="fas fa-trash false"></i>

                        </button>


                    </div>

                </div>


            </section>

        )
    }
}

export default Task