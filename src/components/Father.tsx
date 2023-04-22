import React, {Component} from 'react';
import Son from "./Son";

class Father extends Component {
    render() {
        return (
            <div>
                <Son/>
            </div>
        );
    }
}

export default Father;