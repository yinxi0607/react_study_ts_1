import React, {Component} from 'react';

interface P{
    kick: () => void
}
interface S{}

class Sister extends Component<P,S> {
    render() {
        return (
            <div>
                <button onClick={this.props.kick}>打弟弟</button>
            </div>
        );
    }
}

export default Sister;