const a = 10, b = 20
if (a > b) {
    console.log('a 大於 b')
} else {
    console.log('a 不大於 b')
}

const c = 100, d = '100'
if (c == d) {
    console.log('c == d')
} else {
    console.log('c != d')
}
if (c === d) {
    console.log('c === d')
} else {
    console.log('c !== d')
}

//  在判斷布林值時 可省略 if (ok === true)
const ok = false  // 判斷形式
if (ok) {
    console.log('ok')
}
if (!ok) {
    console.log('not ok')
}

// confirm(訊息) 跳出確認視窗 會收到 true / false
const sleep = confirm('中午有沒有睡覺')
// 如果 if、else、else if、for 裡面只有單行 可省略 { }
if (sleep)  console.log('有睡')
else        console.log('沒睡')

const like = confirm('你喜歡JS嗎')
// let message = ' '
// if(like)   message = '喜歡'
//else        message = '不喜歡'
const message = like ? '喜歡' : '不喜歡'
// like --> confirm  message --> like
console.log(message)

const rain = false, wind = false 
if (!rain && !wind) {
    console.log('看電影')
} else {
    console.log('在家休息')
}

const dinner = '便當'
if (dinner === '炸雞' || dinner === '披薩') {
    console.log('好耶')
} else {
    console.log('喔不')
}

const coding = confirm ('你會寫code嗎')
const game = confirm ('你有玩原神嗎')
const player = confirm ('你是可莉玩家嗎')
if ((game && player) || coding) {
    console.log('cool')
} else {
    console.log('加油')
}

// else if 用於多個判斷式
const age = prompt('請輸入年齡', 0)
if (age >= 18) {
    document.write('限制級')
} else if (age >= 15) {
    document.write('輔 15')
} else if (age >= 12) {
    document.write('輔 12')
} else if (age >= 6) {
    document.write('保護級')
} else if (age >= 0) {
    document.write(普遍級)
} else {
    document.write('輸入年齡不正確')
}

const lang = prompt('請輸入語言')
if (lang === 'zh-tw') {
    document.write('台灣中文')
} else if (lang === 'ja-jp') {
    document.write('日本日文')
} else if (lang === 'en-us' || lang === 'en') {
    document.write('窩不知道')
}

const message2 =
    lang === 'zh-tw' ? '台灣中文' :
    lang === 'ja-jp' ? '日本日文' :
    (lang === 'en-us' || lang === 'en') ? '英文' : '窩不知道'
document.write(message2)

/* switch case 變數&迴圈 
   從符合的 case 開始往下執行 直到遇到 break
   default 代表以上皆非 不一定要有 */
switch(lang) {
    case 'zh-tw':
        document.write('台灣中文')
        break
    case 'ja-jp':
        document.write('日本日文')
        break
    case 'en-us':
    case 'us':
        document.write('英文')
        break
    default:
        document.write('窩不知道')
        break
}

const weather = 'rain'
const umbrella = false
if (weather === 'rain') {
    if (umbrella) {
        document.write('下雨，有帶傘，沒事')
    } else{
        document.write('下雨，沒傘，有事')
    }
    } else {
        document.write('沒下雨，沒差')
    }
