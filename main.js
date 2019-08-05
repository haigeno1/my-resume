function writeCode(oldCode,newCode,fn){
  let domCode =document.querySelector('#code')
  let myStyle =document.querySelector('#myStyle')
  let n =0;
  let id =setInterval(()=>{
      n++
      domCode.innerHTML=Prism.highlight(oldCode+newCode.substring(0,n),Prism.languages.css)
      domCode.scrollTop=1000
      myStyle.innerHTML=oldCode+newCode.substring(0,n)
      if(n>=newCode.length){
          window.clearInterval(id)
          fn()
      }
  },20)
}

function writeMarkdown(resume,fn){
  let domResume =document.querySelector('#resume')
  let n =0;
  let id2 =setInterval(()=>{
      n++
      domResume.innerHTML=marked(resume.substring(0,n))
      domResume.scrollTop=1000
      if(n>=resume.length){
          window.clearInterval(id2)
          domResume.scrollTop=0
          fn()
      }
  },30)
}

var result=`/* 您好 */

/* 这是我的动态简历，您很快就会看完 */

/* 先初始化一下代码 */

* {
    margin: 0;
    padding: 0;
    transition: all 2s;
}

/* 再来个代码框 */
#code {
    position: fixed;
    background: #E7EAED;
    left: 0;
    margin: 20px;
    width: 45%;
    height: 95vh;
    overflow: scroll;
    padding: 20px;
    -webkit-box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);
}

/* 再换个背景颜色吧 */

body {
    background: #002B36;
}

/* 给代码加个高亮 */

.token.comment {
    color: slategray
}

.token.selector {
    color: #690;
}

.token.punctuation {
    color: #999
}

.token.property {
    color: #905;
}

.token.function {
    color: #DD4A68;
}

/* 好了，可以正式开始写简历了 */

/* 先做一张用来写简历的纸吧 */

#resume {
    position: fixed;
    background: white;
    right: 0;
    margin: 20px;
    padding:20px;
    width: 45%;
    height: 95vh;
    overflow: scroll;
    -webkit-box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);
}

/* 好了，开始写简历了！*/
`

var myResume =`# 房思博

2015年211大学工程类学科本科毕业，现2年前端开发经验，杭州在职考虑新工作机会。

## 求职意向

中级前端开发工程师

## 教育经历
2011.9-2015.6 哈尔滨工程大学（211高校）

## 工作经历
2018.11-至今 阿里云（外派杭州） 前端开发
2018.03-2018.10 阿里云（外派北京）初级前端开发

阿里云官网运营支撑平台某项目中台前端开发，配合阿里云官网监控及运维团队，
开发云用户所需服务器资源配置管理页面的前端开发。
技术栈——脚手架dawn、框架React、数据管理mobx，也用G2、G6、D3做了部分数据可视化工作。

## 联系方式
邮箱：2276765922@qq.com

## 个人主页

GitHub链接：https://github.com/haigeno1
LeetCode： https://leetcode.com/haigeno1
`

var result2=`/* 这个简历是用Markdown语法写的 */

/* 现在再对这个简历的样式进行一些完善 */

#resume{
    font-family: 楷体;
}
#resume>p{
    padding:5px 20px;
}

/* 来给简历加上一些3D效果吧 */

html {
    perspective: 1000px;
}
#code{
    transform: rotateY(10deg) translateZ(-100px) ;
}
#resume{
    transform-origin: 1450px 1450px;
    transform: rotateY(-10deg) translateZ(100px) ;
}

/*好了，我的动态简历做好了*/

`
writeCode('',result,()=>{
    writeMarkdown(myResume,()=>{
        writeCode(result,result2)
    })
})
