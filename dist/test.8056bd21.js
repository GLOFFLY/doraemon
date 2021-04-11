// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.doraemon *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n }\n .doraemon *::before{box-sizing: border-box;}\n \n .doraemon{\n    background: #93B8CA;\n    min-height: 60vh;\n }\n.head{\n    position: relative;\n    width: 420px;\n\theight: 400px;\n\tbackground: #07bbee;\n\tborder: 3px solid #000;\n\tborder-radius: 48% 48% 48% 48%;\n    background: -webkit-radial-gradient(right top,#fff 10%,#08b8e9 20%,#4b9ef1 75%,#000);\n    top:20px;\n    left:50%;\n    margin-left:-210px;\n}\n\n.eye{\n    border: 2px solid #000;\n    position: absolute;  \n    top: 40px;\n    left: 50%;\n    margin-left: -47px;\n    width: 94px;\n    height: 120px;\n    border-radius: 46%;\n    background-color: #FFF;\n    z-index: 1;\n}\n.eye.left{\n    transform: translateX(-46px);\n}\n.eye.right{\n    transform: translateX(47px);\n}\n.eye .black{\n    width: 19px;\n\theight: 19px;\n\tbackground: #000;\n\tborder-radius: 50%;\n\tposition: absolute;\n\ttop: 40px;\n    animation: eyemove 2s linear infinite;\t\n}\n.eye .bleft{left: 60px;}\n.eye .bright{left: 12px;}\n\n.face{\n    position: absolute;\n    bottom: 0;\n\tleft: 50%;\n\twidth: 360px;\n\theight: 300px;\n    margin-left: -180px;\n    border: 2px solid #000;\n    background-color: #FFF;\n    border-radius: 50% 50% 45% 45%;\n    background: -webkit-radial-gradient(right top,#fff 75%,#eee 80%,#999 90%,#444);\n}\n.nose{\n    border: 2px solid #000;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    top: 46px;\n    left: 50%;\n    margin-left: -25px;\n    background-color: #f00c;\n    border-radius: 50%;\n}\n.nose .light{\n    position: absolute;\n    width: 13px;\n    height: 13px;\n    top: 10px;\n    left: 25px;\n    background-color: #fff;\n    border-radius: 50%;\n    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.8);\n}\n.nose_line{\n    position: absolute;\n    background:#000;\n    height: 30px;\n    width: 2px;\n    left: 50%;\n    margin-left: -1px;\n    top: 95px;\n}\n.mouth{\n    position: absolute;\n    width: 240px;\n\theight: 180px;\n    left: 50%;\n    margin-left: -120px;\n    top: 120px;\n}\n.mouth::before{\n    content: '';\n    display: block;\n    height:26px;\n}\n.mouth .up .lip{\n    position: absolute;\n    border: 2px solid #000;\n    height: 90px;\n    width: 40px;\n    border-top-color: transparent;\n    top: -30px;  \n    background: #fff;\n}\n.mouth .up .lip.right{\n    border-radius: 0 0 0 100%;\n    border-right-color: transparent;\n    transform: rotate(-61deg) translateX(-3px);\n    left: 200px;\n    z-index: 1;\n}\n.mouth .up .lip.left{\n    border-radius: 0 0 100% 0;\n    border-left-color: transparent;\n    transform: rotate(61deg) translateX(5px);\n    left: -4px;\n    z-index: 1;\n}\n.mouth .up .lip.center{\n    width: 220px;\n\theight: 80px;\n    background: #9b000a;\n\tborder-radius: 50% 50% 0 0 / 100% 100% 0 0;\n\ttop: 3px;\n\tleft: 50%;\n    margin-left: -110px;\n}\n\n.mouth .down{\n   position: absolute;\n   height: 226px;\n   width: 100%;\n   overflow: hidden;\n}\n.mouth .down .yuan1{\n   border: 2px solid #000;\n   position: absolute;\n   width: 240px;\n   height: 1000px;\n   bottom: 95px;\n   border-radius: 210px / 220px;\n   background: #9b000a;\n   overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\n   width: 240px;\n   height: 100px;\n   left: 50%;\n   margin-left: -160px;\n   position: absolute;\n   bottom:-2px;  \n   border-radius:50% 50% 0 0 / 100% 100% 0 0;\n   background:#ff495f;\n   z-index: 1;\n}\n\n.face .whiskers{\n\twidth: 280px;\n\theight: 80px;\n\tborder-radius: 15px;\n\tposition: absolute;\n\ttop: 80px;\n\tleft: 50%;\n    margin-left: -140px;\n}\n.face .whiskers .whisker{\n\twidth: 70px;\n\theight: 2px;\n\tbackground: #333;\n\tposition: absolute;\n\tz-index: 2;\n}\n.doraemon .whiskers .rTop{\n\tleft: 205px;\n\ttop: 5px;\n    transform: rotate(160deg);\n}\n.doraemon .whiskers .rMiddle{\n\tleft: 207px;\n\ttop: 25px;\n}\n.doraemon .whiskers .rBottom{\n\tleft: 205px;\n\ttop: 45px;\n    transform: rotate(200deg);\n}\n.doraemon .whiskers .lTop{\n\tleft: 0;\n\ttop: 5px;\n    transform: rotate(-160deg);\n}\n.doraemon .whiskers .lMiddle{\n\tleft: -2px;\n\ttop: 25px;\n}\n.doraemon .whiskers .lBottom{\n\tleft: 0;\n\ttop: 45px;\n    transform: rotate(-200deg);\n}\n\n.choker{\n    position: relative;\n    border: 2px solid #000;\n    width: 260px;\n    height: 33px;\n    left: 50%;\n    margin-left: -130px;\n    z-index: 1;\n    border-radius: 20px;\n    background: #c40;\t\n    background: -webkit-gradient(linear,left top ,left bottom,from(#c40),to(#800400));\n }\n.choker .bell {\n    position: absolute;\n    border: 2px solid #000;\n    width: 40px;\n    height: 40px;\n    overflow: hidden; /*IE6 hack*/\n    border-radius: 50%;\n    top: 5px;\n    left: 50%;\n    margin-left: -20px;\n    background: #f9f12a;\n    background: -webkit-gradient(linear, left top, left bottom, from(#f9f12a),color-stop(0.5, #e9e11a), to(#a9a100));\n    box-shadow: -5px 5px 10px rgba(0,0,0,0.25);\n}\n.choker .bell_line {\n    position: absolute;\n    border: 2px solid #333;\n    width: 36px;\n    height: 5px;\n    top:7px;\n}\n.choker .bell_circle{\n    width:12px;\n    height:10px;\n    background:#000;\n    border-radius:5px;\n    position:absolute;\n    top:15px;\n    left:13px;\n}\n.choker .bell_under{\n    width: 3px;\n    height:15px;\n    background:#000;\n    position:absolute;\n    left: 17px;\n    top: 25px;\n}\n.doraemon .choker .bell_light{\n    width:12px;\n    height:12px;\n    border-radius:10px;\n    box-shadow:19px 8px 5px #fff;\n    position:absolute;\n    top:-5px;\n    left:5px;\n    opacity:0.7;\n}\n\n@keyframes eyemove{\n    20%{\n\t\tmargin: 20px 0 0 0;\n\t}\n\t40%{\n\t\tmargin: -15px 0 0 0;\n\t}\n\t60%{\n\t\tmargin: -15px 0 0 5px;\n\t}\n\t80%{\n\t\tmargin: -15px 0 0 0;\n\t}\n}\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
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
  init: function init() {
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  //把所有函数拿到类里面
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    if (player.flag === 1) {
      player.id = setInterval(player.run, player.time);
    }

    player.flag = 0;
  },
  pause: function pause() {
    window.clearInterval(player.id);
    player.flag = 1;
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 60;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.8056bd21.js.map