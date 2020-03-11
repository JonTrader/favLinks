import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */

        this.state = {
            name: "",
            URL: ""
        };
    }

    // handleChange = event => {
    //     /*
    //         TODO - Logic for changing state based on form changes
    //     */

    //     const { name, value } = event.target;

    //     this.setState({ [name]: value });
    // }

    updateNameLabel = (event) => {
        
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
        this.props.handleSubmit(this.state);

        this.setState({
           name: "",
           URL: ""
        });

    }

    render() {

        const { name, URL } = this.state;

        return(
            <form onSubmit={this.onFormSubmit}>
                // TODO - Logic for returning a form element with labels and inputs for link name and URL
                <label for="name">Name:</label>
                <input
                    type="text" 
                    id="name"
                    value={name} 
                    onChange={this.updateNameLabel}
                />

                

                <input type="submit" value="Submit"></input>
            </form>
        )
    
    }
}

export default Form;
