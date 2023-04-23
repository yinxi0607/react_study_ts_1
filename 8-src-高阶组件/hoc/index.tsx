// todo 封装一个高阶组件

// 高阶组件是一个函数

// 高阶组件名称中开头以with

import React from "react";

export const withForwardRef = (Comp: any) =>{ // todo 接收组件作为参数
    // todo 返回值是一个新的组件
    return class _ extends React.Component<any, any>{
        // todo多个组件复用的逻辑就可以写这里
        fn = () =>{
            console.log("一万行复写逻辑")
        }
        render(){
            // 将复用的逻辑绑定到传入的组件上
            return <Comp fn={this.fn}/>
        }
    }
}

