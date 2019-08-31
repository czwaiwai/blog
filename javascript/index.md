## 创建.npmrc 是用淘宝镜像  

```
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
registry=https://registry.npm.taobao.org
```

<<<<<<< Updated upstream

```javascript
// 自己实现一个简易reduce
if(!Array.prototype.reduce) {
  Array.prototype.reduce = function (fn, init) {
    if(typeof fn !== 'function') {
      throw new Error('必须为function')
    }
    let pre = init
    let index = 0
    if(!init) {
      pre = this[0]
      index = 1
    }
    for(var i=index; i<this.length;i++) {
      pre = fn(pre, this[i], i, this)
    }
    return pre
  }  
}
```
```javascript
// js重载的实现方法
// 需要添加重载的对象
  function method (obj,prop,fn) {
      var old = obj[prop] // 关键位置,将上一次执行的method函数所设置的obj[prop]保存起来
      obj[prop] = function () {
          if(fn.length === arguments.length) {
              return fn.apply(obj,arguments)
          } else if(typeof old === 'function'){
              return old.apply(obj,arguments)
          }
      }
  }
// 案例
    var obj = {}
    method(obj,'jump', function (a) {
        console.log('一个参数',a)
    })
    method(obj,'jump', function (a,b) {
        console.log('两个参数',a,b)
    })
    method(obj,'jump', function (a,b,c) {
        console.log('三个参数',a,b,c)
    })
    obj.jump(1,2)
    obj.jump(1,2,3)
    obj.jump(1)

    // 结果
    // 两个参数 1 2
    // 三个参数 1 2 3
    // 一个参数 1
```

```javascript
// compose函数理解
function compose (fns) {
  return  fns.reduce(function (before,curr) {
      return function () {
          return before(curr(...arguments))
      }
  })
}
function a(arg) {
    console.log('a',arg)
    return ++arg
}
function b(arg) {
    console.log('b',arg)
    return ++arg
}
function c(arg) {
    console.log('c',arg)
    return ++arg
}
function d(arg) {
    console.log('d',arg)
    return ++arg
}
fns = [a,b,c,d]
console.log('结果:',compose(fns)(2))
/*
  运行结果-----
  d 2
  c 3
  b 4
  a 5
  结果: 6
*/

// 分解步骤
function compose () {
  var before = function () {
    return a(b(...arguments))
  }
  var before1 = function () {
    return  before(c(...arguments))
  }
  var before2 = function () {
      return before1(d(...arguments))
  }
  return before2
}
compose()(2)
/*
  运行结果-----
  d 2
  c 3
  b 4
  a 5
  结果: 6
*/
=======
#### express 脚手架快速创建应用
```bash
#--view=ejs 指定ejs模板
express --view=ejs  demo_ssoCenter
>>>>>>> Stashed changes
```