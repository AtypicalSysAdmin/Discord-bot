module.exports=function (obj) {
    let keys = Object.keys(obj);
    let key=keys[ keys.length * Math.random() << 0]
    let result= key+":"+obj[key]
    return result
}