import React, {Component} from 'react';
import {Todos} from "./TodoList";
import {Button} from "antd";
import "../App.less"

interface P {
    todos: Todos[ ]
    remove: (id: number) => void
    setFlag: (id: number) => void
    open: (task: string,id:number) => void
}

class List extends Component<P> {
    render() {
        const {todos, remove,setFlag,open} = this.props
        if (!todos.length){
            return <div>暂无数据</div>
        }
        return (
            <div>
                {/*内容区域*/}
                <h3>已完成</h3>
                <ul>
                    {
                        todos.filter(item=>item.flag).map(item => <li key={item.id}>
                            <p> {item.task} </p>
                            <div className="btn_box">
                                <label className={item.flag?"radio_active":"radio"} onClick={()=>{
                                    setFlag(item.id)
                                }}></label>
                                <span>{item.flag?"已完成":"未完成"}</span>
                                <Button type="primary" onClick={()=>{
                                    open(item.task,item.id)
                                }}>修改</Button>
                                <Button type="primary" danger onClick={() => {
                                    remove(item.id)
                                }}> 删除</Button>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default List;