import React, {Component} from 'react';
import GrandSon from "./GrandSon";

class Son extends Component {
    render() {
        return (
            <div>
                <GrandSon/>
            </div>
        );
    }
}

export default Son;