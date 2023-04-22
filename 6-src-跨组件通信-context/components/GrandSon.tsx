import React, {Component, useContext} from 'react';
import ctx from '../context'


class GrandSon extends Component {
    static contextType = ctx; //todo 子孙组件通过contextType来接收ctx这个上下文对象
    render() {
        return (
            <ctx.Consumer>
                {(contextData) => (
                    <div>
                        <p>Money: {contextData}</p>
                    </div>
                )}
            </ctx.Consumer>
        )
    }
}

export default GrandSon;