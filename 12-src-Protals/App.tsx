import React from 'react';
import ReactDOM from "react-dom";
import ToolTip from "./ToolTip";

function App() {
    const app: any = document.querySelector('#app')
    return ReactDOM.createPortal(
        <ToolTip/>,
        app
    );
}

export default App;