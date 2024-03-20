// 單行註解寫法  /* 多行註解寫法 */
// alert('hello world') 跳出瀏覽器的警示視窗

// var 全域變數 可重複宣告 但舊的會被新的覆蓋 
// 若改值時 不須重複宣告 用 = 修改即可
var a = 1
console.log(a) 
if (true) {
    a = 2
    console.log(a)  // 2
}
console.log(a)  // 2

// let 區域變數 在區域內不可重複宣告 { }為一區域
let b = 1
if (true) {
    let b = 2
    console.log(b)  // 2
}
console.log(b)  // 1

// const 區域變數 區域內不可重複宣告
const c = 1 // 且因不能修改值 若更改則無法顯示
if (true) {
    c = 2
    console.log(c)
}
console.log(c)

// 數字
const number = 1
const pi = 3.14
// 布林值
const on = true
const off = false
// 文字  如果文字裡面要使用相同的引號 以 \ 去跳脫文字
// ' 和 " 內不可換行
const text1 = 'aaa'
const text2 = "bbb\"b\"bbbb"
// 可用於換行 ` ` 且可加入 ${} 以新增變數
const text3 = `cccc  
        cccc
    cccc`

console.log(number, typeof number)  // number
console.log(on, typeof on)  // boolean
console.log(text3, typeof text3)  // string
