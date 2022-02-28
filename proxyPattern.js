class Leek {
  constructor (name) {
    this.name = name
    this.investmentDesire = false
  }

  investMent() {
    console.log('开始被割韭菜')
  }
}

class Stockbroker {
  constructor (name) {
    this.name = name
  }
  proxy() {
    const l = new Leek('sck')
    const p = new Proxy(l, {
      set(obj, prop, val) {
        if (prop !== 'investmentDesire') {
          return
        }
        if (!obj.investmentDesire && val) {
          obj.investmentDesire = true
          obj.investMent()
        }
        return true
      }
    })
    setTimeout(() => {
      p.investmentDesire = true
      console.log('忽悠成功')
    }, 2000)
  }
  fool(increase) {
    if(increase > 0.01) {
      console.log('可以投资了')
      this.proxy()
    } else {
      console.log('忽悠失败')
    }
  }
}

const s = new Stockbroker('张三')
s.fool(0.02)