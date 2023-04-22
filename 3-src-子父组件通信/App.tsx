/*
* 子父组件通信
*   父组件传递一个方法给子组件
*   子组件调用这个方法，并且传递实参
* */

import React, {Component} from 'react';
import Hello from "./components/Hello";

interface P{}
interface S{
    xJk: number
}

class App extends Component<P,S> {
    constructor(props:P) {
        super(props);
        this.state = {
            xJk: 2000
        }
    }
    // todo修改xJk
    setXJK = (val: number): void => {
        this.setState({
            xJk: this.state.xJk + val
        })
    }
    render() {
        const {xJk} = this.state
        return (
            <div>
                通过自定义属性的形式传递一个方法给子组件
                <Hello setXJK={this.setXJK}/>
                {xJk}
            </div>
        );
    }
}

export default App;