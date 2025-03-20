(function (e, t) {
    let hearts = [];
    const gravity = 0.1;
    const spread = 2.2;
    const emojis = ["😺", "😸", "😻", "😽", "🙀", "😹"];
    const audio = new Audio("/ciallo/ciallo.aac"); // 替换为你的音频文件

    function animate() {   
        for (let i = 0; i < hearts.length; i++) {
            let h = hearts[i];
            if (h.alpha <= 0) {
                t.body.removeChild(h.el);
                hearts.splice(i, 1);
                i--;
            } else {
                h.x += h.vx;
                h.y += h.vy;
                h.vy += gravity;
                h.alpha -= 0.008;
                h.el.style.cssText = `left:${h.x}px;top:${h.y}px;opacity:${h.alpha};transform:scale(${h.scale});color:${h.color};font-size:${h.size}px;z-index:99999;position:fixed;`;
            }
        }
        requestAnimationFrame(animate);
    }

    function createHearts(e) {
        if (e.altKey) {
            createFireworks(e.clientX, e.clientY);
            return;
        }
        for (let i = 0; i < 10; i++) {
            let isEmoji = Math.random() < 0.01;
            let a = t.createElement("div");
            a.className = "floating";
            a.innerText = isEmoji ? emojis[Math.floor(Math.random() * emojis.length)] : "❤";
            let angle = Math.PI / 2 + (Math.random() - 0.5) * Math.PI / 6;
            let speed = Math.random() * 2 + 1;
            hearts.push({
                el: a,
                x: e.clientX,
                y: e.clientY,
                vx: Math.cos(angle) * speed * spread,
                vy: -Math.abs(Math.sin(angle) * speed * spread),
                scale: Math.random() * 0.5 + 0.5,
                alpha: 1,
                color: isEmoji ? "#fff" : randomColor(),
                size: Math.random() * 16 + 16
            });
            t.body.appendChild(a);
        }
        if (Math.random() < 0.006) { // 0.6% 概率播放音频
            audio.play();
        }
    }

    function createFireworks(x, y) {
        for (let i = 0; i < 40; i++) {
            let a = t.createElement("div");
            a.className = "floating";
            a.innerText = "❤";
            let angle = Math.random() * Math.PI * 2;
            let speed = Math.random() * 4 + 2;
            hearts.push({
                el: a,
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                scale: Math.random() * 0.7 + 0.3,
                alpha: 1,
                color: randomColor(),
                size: Math.random() * 20 + 10
            });
            t.body.appendChild(a);
        }
    }

    function addStyles() {
        let style = t.createElement("style");
        style.type = "text/css";
        style.innerHTML = `.floating{position: fixed;pointer-events: none;user-select: none;}`;
        t.head.appendChild(style);
    }

    function randomColor() {
        return `rgb(${~~(255 * Math.random())},${~~(255 * Math.random())},${~~(255 * Math.random())})`;
    }

    e.addEventListener("click", createHearts);
    addStyles();
    animate();
})(window, document);