// action分模块存放 -  存放type对应的方法，在dispatch时执行对应的操作
export default {
    cheng: num => ({ type: 'CHENG', data: num }),
    chu: num => ({ type: 'CHU', data: num })
}