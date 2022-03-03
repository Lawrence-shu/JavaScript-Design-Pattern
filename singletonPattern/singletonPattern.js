/* 功能类 */
class FuncClass {
  constructor(bar) { 
    this.bar = bar
    this.init()
  }
  
  init() {
    this.foo = 'Function Class'
  }
}
/* 单例模式的赋能类 */
const Singleton = (function() {
  let _instance = null        // 存储单例
  
  const ProxySingleton = function(bar) {
    if (_instance) return _instance     // 判断是否已有单例
    _instance = new FuncClass(bar)
    return _instance
  }
  
  ProxySingleton.getInstance = function(bar) {
    if (_instance) return _instance
    _instance = new Singleton(bar)
    return _instance
  }
  
  return ProxySingleton
})()
const visitor1 = new Singleton('单例1')
const visitor2 = new Singleton('单例2')
const visitor3 = Singleton.getInstance()
console.log(visitor1 === visitor2)	// true
console.log(visitor1 === visitor3)	// true