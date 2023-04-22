import React, {Component} from 'react';

interface P{}
interface S{
    cryFlag: boolean
}

class Brother extends Component<P,S> {
    constructor(props:P) {
        super(props);
        this.state = {
            cryFlag: false
        }
    }
    // todo 组件自己修改状态
    setCryFlag = () =>{
        this.setState({
            cryFlag: !this.state.cryFlag
        })
    }

    render() {
        const {cryFlag} = this.state
        return (
            <div>
                { cryFlag && (<img src="https://bpic.51yuansu.com/pic3/cover/00/86/06/58dac231dd653_610.jpg" alt=""/>) }
            </div>
        );
    }
}

export default Brother;