/*
 * 父子组件通信
 *  自定义属性绑定数据
 *
 * 注意点
 *  因为我们使用的是ts，所以Hello组件必须为他接收到的这个money属性定义数据类型
 */


import React, {Component} from 'react';

interface P{
    money: number
}
interface S{}

class Hello extends Component<P,S> {

    render() {
        const {money} = this.props
        return (
            <div>
                Money: {money}
            </div>
        );
    }
}

export default Hello;