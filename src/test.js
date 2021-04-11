import string from './css.js'

const player = {
    n: 0,
    id: undefined,
    flag: 1,
    time: 100,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    //声明初始化函数
    init: () => {
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key] // pause / play / slow
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    //把所有函数拿到类里面
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        if (player.flag === 1) { player.id = setInterval(player.run, player.time) }
        player.flag = 0;
    },
    pause: () => {
        window.clearInterval(player.id)
        player.flag = 1;
    },
    slow: () => {
        player.pause()
        player.time = 200
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 60
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}
player.init()

