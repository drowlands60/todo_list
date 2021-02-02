import React from 'react';

class TodoForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id: "",
            task: "",
            completed: false
          };
    }

    handleTaskInputChange(e) {
        this.setState({task: e});
    }

   
    
    render() {
        return (
            <form>
                <input 
                    name = "task"
                    type = "text"
                    onChange={this.handleTaskInputChange} />
                <button />
            </form>
        );
    }
}


export default TodoForm;