import React from 'react';
import Hello from "./components/Hello";

function App() {
    return (
        <div>
            <h3>Fragment 片段</h3>
            <table>
                <tr>
                    <Hello/>
                </tr>
            </table>
        </div>
    );
}

export default App;