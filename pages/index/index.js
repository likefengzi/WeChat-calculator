// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    num: "0",
    op: " "
  },
  onShareAppMessage() {

  },
  onShareTimeline() {

  },
  result: null,
  isClear: false,
  isOp: false,
  isEqual: false,
  numBtn: function (e) {
    if (this.isEqual) {
      this.isOp = false
      this.isEqual = false
      this.result = null
      this.isClear = false
      this.setData({ num: "0", op: " " })
    }
    this.isOp = false
    this.isEqual = false

    var num = e.target.dataset.val
    if (this.data.num == "0" || this.isClear) {
      this.setData({ num: num })
      this.isClear = false
    } else {
      this.setData({ num: this.data.num + num })
    }
  },
  opBtn: function (e) {
    this.isEqual = false
    var op = this.data.op
    var num = Number(this.data.num)
    this.setData({ op: e.target.dataset.val })
    if (this.isOp || this.isClear) {
      return
    }
    this.isOp = true
    this.isClear = true
    if (this.result === null) {
      this.result = num
      return
    }
    
    if (op === "+") {
      this.result = this.result + num
    } else if (op === "-") {
      this.result = this.result - num
    } else if (op === "*") {
      this.result = this.result * num
    } else if (op === "/") {
      this.result = this.result / num
    } else if (op === "%") {
      this.result = this.result % num
    } else {
      
    }
    this.setData({ num: this.result + "" })
    if (e.target.dataset.val === "=") {
      this.isEqual = true
      //this.result = null
    }
  },
  dotBtn: function () {
    this.isOp = false
    this.isEqual = false
    if (this.isClear) {
      this.setData({ num: "0." })
      this.isClear = false
      return
    }
    if (this.data.num.indexOf(".") > 0) {
      return
    }
    this.setData({ num: this.data.num + "." })
  },
  delBtn: function () {
    this.isOp = false
    this.isEqual = false
    var num = this.data.num.substr(0, this.data.num.length - 1)
    this.setData({ num: num === "" ? "0" : num })
  },
  resetBtn: function () {
    this.isOp = false
    this.isEqual = false
    this.result = null
    this.isClear = false
    this.setData({ num: "0", op: " " })
  }
})



