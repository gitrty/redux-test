// action分模块存放 -  存放type对应的方法，在dispatch时执行对应的操作
export default {
    add: num => ({ type: 'ADD', data: num }),
    del: num => ({ type: 'DEL', data: num })
}