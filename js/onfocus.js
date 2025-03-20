var OriginTitle = document.title;
var titleTime;

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '╥﹏╥... 呜呜~不要走嘛';
        clearTimeout(titleTime);
    } else {
        document.title = 'Ciallo～(∠・ω< )⌒★';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});