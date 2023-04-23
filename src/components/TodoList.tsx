import React, {Component} from 'react';
import Tab from "./Tab";
import List from "./List";
import Modal from "./Modal";
import UnFinishList from "./UnFinishList";
import "../App.less"

interface P {
}

export interface Todos {
    readonly id: number;
    task: string;
    flag: boolean;
}

interface S {
    cloneTodos: Todos[]
    todos: Todos[]
    maskFlag: boolean
    activeTask: string
    activeId: number
}

class TodoList extends Component<P, S> {
    /*
    * 分析：将数据定义在子组件的共有父组件中，会简单一些
    * */
    constructor(props: P) {
        super(props);
        this.state = {
            cloneTodos: [],
            todos: [
                {
                    id: 1,
                    task: '任务1',
                    flag: true
                }
            ],
            maskFlag: false,
            activeTask: "",
            activeId: 0
        }
    }

    // todo 数据在哪里定义，就在哪里去书写修改这个数据的方法
    addTodos = (val: string) => {
        this.state.todos.unshift({
            id: this.state.todos.length + 1,
            task: val,
            flag: false
        })
        this.setState({
            todos: this.state.todos,
            cloneTodos: this.state.todos
        })
    }

    remove = (id: number) => {
        const arr = this.state.todos.filter(item => item.id !== id)
        this.setState({
            todos: arr,
            cloneTodos: arr
        })
    }

    setFlag = (id: number) => {
        this.state.todos.forEach(item => {
            if (item.id === id) {
                item.flag = !item.flag
            }
        })
        this.setState({
            todos: this.state.todos,
            cloneTodos: this.state.todos
        })
    }

    searchTodos = (val: string) => {
        const arr = this.state.cloneTodos.filter(item => item.task.indexOf(val) !== -1)
        this.setState({
            todos: arr
        })
    }

    // todo mask遮罩的控制方法
    open = (task: string, id: number) => {
        this.setState({
            maskFlag: true,
            activeTask: task,
            activeId: id
        })
    }
    close = (e: any) => {
        e.stopPropagation()
        this.setState({
            maskFlag: false
        })
    }

    edit = (newTask: string) => {
        this.state.todos.forEach(item => {
            if (item.id === this.state.activeId) {
                item.task = newTask
            }
        })
        this.setState({
            todos: this.state.todos,
            cloneTodos: this.state.todos
        })
    }

    render() {
        const {todos, maskFlag, activeTask} = this.state
        return (
            <div>
                <Tab addTodos={this.addTodos} searchTodos={this.searchTodos}/>
                <div className="wrapper">
                    <List todos={todos} remove={this.remove} setFlag={this.setFlag} open={this.open}/>
                    {maskFlag && <Modal close={this.close} activeTask={activeTask} edit={this.edit}/>}
                    <UnFinishList todos={todos} remove={this.remove} setFlag={this.setFlag} open={this.open}/>
                    {maskFlag && <Modal close={this.close} activeTask={activeTask} edit={this.edit}/>}
                </div>

            </div>
        );
    }
}

export default TodoList;