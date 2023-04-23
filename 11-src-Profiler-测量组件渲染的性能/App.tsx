import React,{Profiler} from 'react';
import Hello from "./Hello";

function App() {
    const callback = (
        id:any, // 发生提交的 Profiler 树的 “id”
        phase:any, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
        actualDuration:any, // 本次更新 committed 花费的渲染时间
        baseDuration:any, // 估计不使用 memoization 的情况下渲染整棵子树需要的时间
        startTime:any, // 本次更新中 React 开始渲染的时间
        commitTime:any, // 本次更新中 React committed 的时间
        interactions:any // 属于本次更新的 interactions 的集合
    ) =>{
        console.log('id',id)
        console.log('phase',phase)
        console.log('actualDuration',actualDuration)
        console.log('baseDuration',baseDuration)
        console.log('startTime',startTime)
        console.log('commitTime',commitTime)
        console.log('interactions',interactions)

    }
    return (
        <div>
            <Profiler onRender={callback} id="hello">
                <Hello/>
            </Profiler>
        </div>
    );
}

export default App;