import React from 'react';
class AddComponent extends React.Component {
    state = {
        id: '',
        name: '',
        salary: '',
    };
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleID = (e) => {
        this.setState({
            id: e.target.value,
        })
    }
    handleSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.id == '' || this.state.name == '' || this.state.salary == '') {
            alert('Missing params')
            return;
        }
        this.props.addJob(this.state)
        this.setState({
            id: '',
            name: '',
            salary: '',
        })
    }

    render() {
        return (
            <div>
                ID:  <input type="text" value={this.state.id}
                    onChange={(event) => this.handleID(event)} />
                <br />
                Name:  <input type="text" value={this.state.name}
                    onChange={(event) => this.handleName(event)} />
                <br />
                Salary:  <input type="text" value={this.state.salary}
                    onChange={(event) => this.handleSalary(event)} />
                <br />
                <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
            </div>
        )
    }
}
export default AddComponent;