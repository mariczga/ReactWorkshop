import React, {Component} from "react";
import Task from "./Task";


class Tasks extends Component {

    render() {
        return (
            <ul>
                {this.props.tasksList?.map(item =>
                    <div key={item.id}>
                        <Task task={item}
                              handleOnDelete={this.props.handleOnDelete}
                              handleOnFinish={this.props.handleOnFinish}
                        />

                    </div>
                )}
            </ul>
        )
    }
}

export default Tasks