import React, {Component} from 'react';

interface P{
    setXJK: (val:number) => void
}
interface S{
    hongBao: number
}

class Hello extends Component<P,S> {
    constructor(props:P) {
        super(props);
        this.state = {
            hongBao: 888
        }
    }

    give = () => {
        this.props.setXJK(this.state.hongBao)
    }

    render() {
        return (
            <div>
                <button onClick={this.give}>给红包</button>
            </div>
        );
    }
}

export default Hello;