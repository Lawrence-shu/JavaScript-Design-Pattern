const container = document.getElementById('container')
var canvas = document.createElement('canvas')
canvas.setAttribute('id', 'my-canvas')
container.appendChild(canvas)
var CanvasWidth = 400    // 画布宽度
var CanvasHeight = 400   // 画布高度
var CanvasStep = 40      // 动作步长
canvas.width = CanvasWidth
canvas.height = CanvasHeight
// 移动对象类
var Role = function(x, y, imgSrc) {
    this.position = { x, y }
    this.canvas = document.getElementById('my-canvas')
    this.ctx = this.canvas.getContext('2d')
    this.img = new Image()
    this.img.style.width = CanvasStep
    this.img.style.height = CanvasStep
    this.img.src = imgSrc
    this.img.onload = () => {
      this.ctx.drawImage(this.img, x, y, CanvasStep, CanvasStep)
      this.move(0, 0)
    }
}
Role.prototype.move = function(x, y) {
    var pos = this.position
    this.ctx.clearRect(pos.x, pos.y, CanvasStep, CanvasStep)
    pos.x += x
    pos.y += y
    this.ctx.drawImage(this.img, pos.x, pos.y, CanvasStep, CanvasStep)
}

var mario = new Role(200, 200, '../assets/mario.jpg')
// 设置按钮回调
var elementUp = document.getElementById('up-btn')
elementUp.onclick = function() {
    mario.move(0, -CanvasStep)
}
var elementDown = document.getElementById('down-btn')
elementDown.onclick = function() {
    mario.move(0, CanvasStep)
}
var elementLeft = document.getElementById('left-btn')
elementLeft.onclick = function() {
    mario.move(-CanvasStep, 0)
}
var elementRight = document.getElementById('right-btn')
elementRight.onclick = function() {
    mario.move(CanvasStep, 0)
}