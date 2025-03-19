// 浏览器标题
// Based on: https://static.likepoems.com/cdn/javascript/onfocus.js
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '╥﹏╥... 呜呜~不要走嘛';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = 'Ciallo～(∠・ω< )⌒★';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});