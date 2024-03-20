let aa = 5
// 單純的 +10 並沒有改變 aa 的值
aa + 10 
console.log(aa)
aa += 10    // aa = aa + 10 
console.log(aa)

let bb = 5
bb -= 2    // bb = bb - 2
console.log('bb', bb)

let cc = 5
cc *= 5    // cc = cc*5
console.log('cc', cc)

let dd = 5
dd /= 5    // dd = dd/5
console.log('dd', dd)

let ff = 5
ff %= 5    // ff = ff %5
console.log('ff', ff)

let aaa = 10  // aaa++ --> aaa = aaa + 1
aaa++ 
console.log('aaa', aaa)
++aaa
console.log('aaa',aaa)

let x = 0, y = 10
x = y++ 
console.log(x, y)  // 先執行 x = y 再 y++
let xx = 0, yy = 10
xx = ++yy
console.log(xx, yy)

// promt(輸入框文字) 跳出一個文字輸入框 在輸入框出現時 網頁是暫停狀態
// 會收到輸入的文字 如果按取消的話 則會出現 null
const LastName = prompt('請輸入姓')
const FirstName = prompt('請輸入名')
const FullName = LastName + FirstName
document.write('<h1>' + FullName + '</hi>')
document.write(`<h1>${FullName}</h1>`)