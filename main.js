/*把code写到#code和style标签里*/
function writeCode(prefix, code, fn){
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = 
            Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);    
        styleTag.innerHTML  = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length){
            window.clearInterval(id)
            if(fn!==undefined){
                fn.call()
            }
        }
    }, 10)
}

var result = `/*
*面试官你好，我是xxx
*我将以动画的形式来介绍我自己
*只用文字介绍太单调了
*我就用代码来介绍吧
*首先准备一些样式
*/

*{
    transition:all 1s;
}
html{
    background: rgb(222,222,222);
    font-size: 16px;
}
#code{
    padding: 16px;
    border: 1px solid red;
}

/* 我需要一点代码高亮 */
.token.selector {
    color: #690;
}
.token.property {
    color: #905;
}
.token.function {
    color: #DD4A68;
}

/* 加点3D效果 */


/* 我需要一张白纸 */

`
var result2 = `
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 16px;
}
#paper > .content{
    background: white;
    height: 100%;
    width: 100%;
}

/*
*把Markdown变成HTML - marked.js
*
*给HTML加样式
*
*/
`

var md = `
#自我介绍

我叫XXX
生日 xxxx
xxx 

#技能介绍

1.xxx
2.xxx
3.xxx

#联系方式

QQ xxxxxxx
Email xxxxxxxx
手机 xxxxxxxx

`
//writeCode 是异步任务
//createPaper 是同步任务
//回调
writeCode('', result, ()=>{
    createPaper(() => {
        writeCode(result, result2, ()=> {
            writeMarkdown(md)
        })
    })
})

function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

function writeMarkdown(markdown, fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= code.length){
            window.clearInterval(id)
            if(fn!==undefined){
                fn.call()
            }
        }
    }, 10)
}

