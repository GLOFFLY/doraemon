parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n="\n.doraemon *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n }\n .doraemon *::before{box-sizing: border-box;}\n \n .doraemon{\n    background: #93B8CA;\n    min-height: 60vh;\n }\n.head{\n    position: relative;\n    width: 420px;\n\theight: 400px;\n\tbackground: #07bbee;\n\tborder: 3px solid #000;\n\tborder-radius: 48% 48% 48% 48%;\n    background: -webkit-radial-gradient(right top,#fff 10%,#08b8e9 20%,#4b9ef1 75%,#000);\n    top:20px;\n    left:50%;\n    margin-left:-210px;\n}\n\n.eye{\n    border: 2px solid #000;\n    position: absolute;  \n    top: 40px;\n    left: 50%;\n    margin-left: -47px;\n    width: 94px;\n    height: 120px;\n    border-radius: 46%;\n    background-color: #FFF;\n    z-index: 1;\n}\n.eye.left{\n    transform: translateX(-46px);\n}\n.eye.right{\n    transform: translateX(47px);\n}\n.eye .black{\n    width: 19px;\n\theight: 19px;\n\tbackground: #000;\n\tborder-radius: 50%;\n\tposition: absolute;\n\ttop: 40px;\n    animation: eyemove 2s linear infinite;\t\n}\n.eye .bleft{left: 60px;}\n.eye .bright{left: 12px;}\n\n.face{\n    position: absolute;\n    bottom: 0;\n\tleft: 50%;\n\twidth: 360px;\n\theight: 300px;\n    margin-left: -180px;\n    border: 2px solid #000;\n    background-color: #FFF;\n    border-radius: 50% 50% 45% 45%;\n    background: -webkit-radial-gradient(right top,#fff 75%,#eee 80%,#999 90%,#444);\n}\n.nose{\n    border: 2px solid #000;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    top: 46px;\n    left: 50%;\n    margin-left: -25px;\n    background-color: #f00c;\n    border-radius: 50%;\n}\n.nose .light{\n    position: absolute;\n    width: 13px;\n    height: 13px;\n    top: 10px;\n    left: 25px;\n    background-color: #fff;\n    border-radius: 50%;\n    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.8);\n}\n.nose_line{\n    position: absolute;\n    background:#000;\n    height: 30px;\n    width: 2px;\n    left: 50%;\n    margin-left: -1px;\n    top: 95px;\n}\n.mouth{\n    position: absolute;\n    width: 240px;\n\theight: 180px;\n    left: 50%;\n    margin-left: -120px;\n    top: 120px;\n}\n.mouth::before{\n    content: '';\n    display: block;\n    height:26px;\n}\n.mouth .up .lip{\n    position: absolute;\n    border: 2px solid #000;\n    height: 90px;\n    width: 40px;\n    border-top-color: transparent;\n    top: -30px;  \n    background: #fff;\n}\n.mouth .up .lip.right{\n    border-radius: 0 0 0 100%;\n    border-right-color: transparent;\n    transform: rotate(-61deg) translateX(-3px);\n    left: 200px;\n    z-index: 1;\n}\n.mouth .up .lip.left{\n    border-radius: 0 0 100% 0;\n    border-left-color: transparent;\n    transform: rotate(61deg) translateX(5px);\n    left: -4px;\n    z-index: 1;\n}\n.mouth .up .lip.center{\n    width: 220px;\n\theight: 80px;\n    background: #9b000a;\n\tborder-radius: 50% 50% 0 0 / 100% 100% 0 0;\n\ttop: 3px;\n\tleft: 50%;\n    margin-left: -110px;\n}\n\n.mouth .down{\n   position: absolute;\n   height: 226px;\n   width: 100%;\n   overflow: hidden;\n}\n.mouth .down .yuan1{\n   border: 2px solid #000;\n   position: absolute;\n   width: 240px;\n   height: 1000px;\n   bottom: 95px;\n   border-radius: 210px / 220px;\n   background: #9b000a;\n   overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\n   width: 240px;\n   height: 100px;\n   left: 50%;\n   margin-left: -160px;\n   position: absolute;\n   bottom:-2px;  \n   border-radius:50% 50% 0 0 / 100% 100% 0 0;\n   background:#ff495f;\n   z-index: 1;\n}\n\n.face .whiskers{\n\twidth: 280px;\n\theight: 80px;\n\tborder-radius: 15px;\n\tposition: absolute;\n\ttop: 80px;\n\tleft: 50%;\n    margin-left: -140px;\n}\n.face .whiskers .whisker{\n\twidth: 70px;\n\theight: 2px;\n\tbackground: #333;\n\tposition: absolute;\n\tz-index: 2;\n}\n.doraemon .whiskers .rTop{\n\tleft: 205px;\n\ttop: 5px;\n    transform: rotate(160deg);\n}\n.doraemon .whiskers .rMiddle{\n\tleft: 207px;\n\ttop: 25px;\n}\n.doraemon .whiskers .rBottom{\n\tleft: 205px;\n\ttop: 45px;\n    transform: rotate(200deg);\n}\n.doraemon .whiskers .lTop{\n\tleft: 0;\n\ttop: 5px;\n    transform: rotate(-160deg);\n}\n.doraemon .whiskers .lMiddle{\n\tleft: -2px;\n\ttop: 25px;\n}\n.doraemon .whiskers .lBottom{\n\tleft: 0;\n\ttop: 45px;\n    transform: rotate(-200deg);\n}\n\n.choker{\n    position: relative;\n    border: 2px solid #000;\n    width: 260px;\n    height: 33px;\n    left: 50%;\n    margin-left: -130px;\n    z-index: 1;\n    border-radius: 20px;\n    background: #c40;\t\n    background: -webkit-gradient(linear,left top ,left bottom,from(#c40),to(#800400));\n }\n.choker .bell {\n    position: absolute;\n    border: 2px solid #000;\n    width: 40px;\n    height: 40px;\n    overflow: hidden; /*IE6 hack*/\n    border-radius: 50%;\n    top: 5px;\n    left: 50%;\n    margin-left: -20px;\n    background: #f9f12a;\n    background: -webkit-gradient(linear, left top, left bottom, from(#f9f12a),color-stop(0.5, #e9e11a), to(#a9a100));\n    box-shadow: -5px 5px 10px rgba(0,0,0,0.25);\n}\n.choker .bell_line {\n    position: absolute;\n    border: 2px solid #333;\n    width: 36px;\n    height: 5px;\n    top:7px;\n}\n.choker .bell_circle{\n    width:12px;\n    height:10px;\n    background:#000;\n    border-radius:5px;\n    position:absolute;\n    top:15px;\n    left:13px;\n}\n.choker .bell_under{\n    width: 3px;\n    height:15px;\n    background:#000;\n    position:absolute;\n    left: 17px;\n    top: 25px;\n}\n.doraemon .choker .bell_light{\n    width:12px;\n    height:12px;\n    border-radius:10px;\n    box-shadow:19px 8px 5px #fff;\n    position:absolute;\n    top:-5px;\n    left:5px;\n    opacity:0.7;\n}\n\n@keyframes eyemove{\n    20%{\n\t\tmargin: 20px 0 0 0;\n\t}\n\t40%{\n\t\tmargin: -15px 0 0 0;\n\t}\n\t60%{\n\t\tmargin: -15px 0 0 5px;\n\t}\n\t80%{\n\t\tmargin: -15px 0 0 0;\n\t}\n}\n",t=n;exports.default=t;
},{}],"HdJB":[function(require,module,exports) {
"use strict";var e=n(require("./css.js"));function n(e){return e&&e.__esModule?e:{default:e}}var t={n:0,id:void 0,flag:1,time:100,ui:{demo:document.querySelector("#demo"),demo2:document.querySelector("#demo2")},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},init:function(){t.bindEvents(),t.play()},bindEvents:function(){for(var e in t.events)if(t.events.hasOwnProperty(e)){var n=t.events[e];document.querySelector(e).onclick=t[n]}},run:function(){t.n+=1,t.n>e.default.length?window.clearInterval(t.id):(t.ui.demo2.innerHTML=e.default.substr(0,t.n),t.ui.demo.innerText=e.default.substr(0,t.n),t.ui.demo.scrollTop=t.ui.demo.scrollHeight)},play:function(){1===t.flag&&(t.id=setInterval(t.run,t.time)),t.flag=0},pause:function(){window.clearInterval(t.id),t.flag=1},slow:function(){t.pause(),t.time=200,t.play()},normal:function(){t.pause(),t.time=60,t.play()},fast:function(){t.pause(),t.time=0,t.play()}};t.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.7b34154c.js.map