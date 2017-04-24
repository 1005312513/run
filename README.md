## Welcome to orzplay

<div id="show"></div>
<html>
<head>
<meta charset="utf-8">
<title>思无涯的主页</title>
</head>

<body>
<h1>思无涯，学无涯</h1> 
<b>有朋自远方来，不亦乐乎!</b><hr/><h2>人生只有三天<hr/>
&nbsp;&nbsp;<a href="html\news.html">>>昨天</a>
&nbsp;&nbsp;<a href="html\my.html">>>今天</a>
&nbsp;&nbsp;<a href="html\study.html">>>明天</a>
<hr/>我的游戏</h2>
<a href="game\first game\start_project-release-signed.zip">>>第一个游戏官方DEMO改编</a>
<a href="game\second game\hello_world2-release-signed.zip">>>第二个游戏射击小游戏</a>
<h3>出门左拐：<a href="http://www.baidu.com">>>百度一下</a>
</h3>


<script type="text/javascript">
 window.onload = function() {
  var show = document.getElementById("show");
  setInterval(function() {
   var time = new Date();
   // 程序计时的月从0开始取值后+1
   var m = time.getMonth() + 1;
   var t = time.getFullYear() + "-" + m + "-"
     + time.getDate() + " " + time.getHours() + ":"
     + time.getMinutes() + ":" + time.getSeconds();
   show.innerHTML = t;
  }, 1000);
 };
</script></body>

</html>
