// todo 用于创建上下文对象

import React, {createContext} from "react";
const ctx:React.Context<number> = createContext(0)

export default ctx