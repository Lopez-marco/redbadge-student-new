import React, { Component } from 'react';

class PropsExmple extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { name, business } = this.props;
        return ( <div>
            {name} is the founder of {this.props.business}
        </div> );
    }
}
 
export default PropsExmple;