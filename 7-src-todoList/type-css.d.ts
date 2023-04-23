// xxx.d.ts 就是类型声明文件  声明less
declare module '*.less'{
    const classes:{
        readonly [key: string]: string
    }
    export default classes
}