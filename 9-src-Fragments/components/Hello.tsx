import React,{Fragment} from 'react';

function Hello() {
    // 组件的jsx必须要有唯一的根元素
    return (
        // 可以充当唯一根元素，还不会渲染到界面
        <Fragment>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
        </Fragment>
    );
}

export default Hello;