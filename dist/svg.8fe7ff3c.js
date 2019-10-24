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
})({"src/svg.js":[function(require,module,exports) {
!function (d) {
  var c,
      l = '<svg><symbol id="w-laud" viewBox="0 0 1024 1024"><path d="M841.900615 408.186609 664.015206 408.186609c-4.087085 0-7.605212-1.823532-9.635451-4.979408-2.044566-3.188622-2.387373-6.788613-0.932232-10.313903 10.105149-19.105127 57.494459-115.41052 44.899606-217.797421-3.51915-28.749788-18.948561-67.455321-72.482825-88.576361-13.886265-5.465478-39.682791-8.026814-59.192124-8.601912-46.860261-1.38044-56.329936 7.693216-60.373019 11.568477-0.164752 0.155543-0.324388 0.316202-0.484024 0.476861C490.730581 105.371886 491.958548 127.455857 493.514997 155.415652c0.795109 14.287401 1.694595 30.466895 0.857531 48.953945-4.579295 49.570999-11.171434 76.334549-24.283056 98.636484-40.689724 69.270666-109.423155 104.141872-122.656551 105.213273l-96.509031 0L86.587054 408.219355c-11.761881 0-21.296025 9.534144-21.296025 21.296025L65.291029 844.261383c0 11.760858 9.534144 21.296025 21.296025 21.296025l164.337859 0c0.858554 0 1.700735-0.065492 2.533706-0.164752l104.601336 0c1.191128 0.969071 2.534729 2.081405 3.739161 3.082198 22.952758 19.025309 83.921341 69.563332 184.571692 69.563332l209.634508 0c53.634548 0 96.863095-29.224602 112.819508-76.270081 0.13917-0.409322 0.26606-0.823761 0.38067-1.24127 2.246157-8.247848 8.025791-25.420973 15.344476-47.162136 27.735691-82.408895 74.159-220.339314 74.159-294.15653C958.708971 446.576965 918.317029 408.186609 841.900615 408.186609zM107.883079 450.812429l121.744785 0 0 372.152928L107.883079 822.965357 107.883079 450.812429zM844.182588 799.778262c-7.649214 22.723537-13.225209 39.289841-15.882736 48.862871-10.205433 29.319769-37.183877 46.803979-72.293513 46.803979l-209.634508 0c-85.292572 0-135.816269-41.879829-157.38961-59.763129-9.691733-8.03193-15.541975-12.881378-24.845874-12.881378l-91.914386 0L272.221962 450.812429l75.364455 0c20.070104 0 51.52142-17.555841 74.262354-33.985022 24.394596-17.623379 58.936297-47.932686 84.96409-92.242867 19.039635-32.386618 25.602098-68.703755 30.019711-116.802216 0.029676-0.317225 0.051165-0.63445 0.066515-0.952698 0.975211-20.862143-0.039909-39.114856-0.855484-53.780881-0.63445-11.403724-1.402953-25.209148-0.179079-31.395034 15.941064-3.081175 61.369719-0.632403 74.387197 4.490268 27.712155 10.934027 42.701544 28.639271 45.822628 54.138014 11.341303 92.193749-35.07689 182.903703-40.407292 192.944384-0.493234 0.932232-0.74906 1.486864-0.74906 1.486864-7.703449 16.70138-6.353708 35.947723 3.624551 51.509141 9.889231 15.376199 26.888394 24.556279 45.473681 24.556279l177.88541 0c52.712549 0 74.215282 19.825534 74.215282 68.429509C916.115897 586.05053 869.322152 725.084073 844.182588 799.778262z"  ></path></symbol><symbol id="w-loading" viewBox="0 0 1024 1024"><path d="M589.63269901 247.10053157c0 36.08583927-29.24826622 65.33410549-65.33410548 65.3341055-36.08236313 0-65.33410549-29.24826622-65.3341055-65.3341055C458.96796417 211.01469231 488.21623039 181.76642608 524.29859353 181.76642608c36.08236313 0 65.33410549 29.25174236 65.33410548 65.33410549zM524.29859353 730.61462593c-31.57380581 0-57.16516972 25.59484005-57.16516972 57.16516972s25.59484005 57.16516972 57.16516972 57.16516971 57.16516972-25.59484005 57.1651697-57.16516971-25.59136391-57.16516972-57.1651697-57.16516972z m270.34310818-172.34021187c-22.55321503 0-40.83425045-18.27755928-40.83425046-40.83425044 0-22.55321503 18.28103542-40.83425045 40.83425046-40.83425046 22.55669117 0 40.83425045 18.28103542 40.83425043 40.83425046-0.00347615 22.55321503-18.28451157 40.83425045-40.83425043 40.83425044zM319.28959084 517.44016362c0-36.08236313-29.24826622-65.33410549-65.3341055-65.33410549-36.08236313 0-65.33410549 29.24826622-65.33410548 65.33410549 0 36.08236313 29.24826622 65.33410549 65.33410548 65.33410549 36.08583927 0 65.33410549-29.25174236 65.3341055-65.33410549z m60.0503683-237.35451223c25.51488877 25.51488877 25.51488877 66.88098908 0 92.39240171-25.51488877 25.51488877-66.88098908 25.51488877-92.39587784 0s-25.51488877-66.88098908 0-92.39587785 66.88098908-25.51488877 92.39587784 0.00347614z m301.47196769 393.86784554c-19.13616657 19.13616657-19.13616657 50.16074181-0.00347612 69.29690838 19.13616657 19.13616657 50.16074181 19.13616657 69.29690837 0 19.13616657-19.13616657 19.13616657-50.16074181 0-69.29690838-19.13269043-19.13964272-50.15726567-19.13964272-69.29343225 0z m57.74916174-324.5744133c-12.75744439 12.75744439-33.44397068 12.75744439-46.19446279 0-12.76092053-12.76092053-12.76092053-33.44397068 0-46.19793892a32.65488625 32.65488625 0 0 1 46.19446279 0c12.75744439 12.75744439 12.75744439 33.44397068 0 46.19793892zM379.33995914 662.40227412c-25.51488877-25.51488877-66.88098908-25.51488877-92.39587784 1e-8s-25.51488877 66.88098908 0 92.3924017c25.51488877 25.51488877 66.88098908 25.51488877 92.39240171 0 25.51488877-25.51141262 25.51488877-66.87751294 0.00347613-92.3924017z"  ></path></symbol><symbol id="w-left" viewBox="0 0 1024 1024"><path d="M752.4 172.6L413 512l339.4 339.4-70.7 70.7L271.6 512l410.1-410.1 70.7 70.7z"  ></path></symbol><symbol id="w-settings" viewBox="0 0 1024 1024"><path d="M903.9 425.3l-71.1-9.1c-6.5-22-15.3-43.1-26.2-63.2l43.8-56.7c20.7-22.2 20.2-57-1.4-78.6l-43.4-43.4c-21.6-21.6-56.5-22.1-78.6-1.4l-56.7 43.8c-20.1-10.9-41.3-19.6-63.2-26.2l-9.1-71.1c-1.1-30.3-26-54.6-56.6-54.6h-61.3c-30.6 0-55.5 24.3-56.6 54.6l-9.1 71.1c-22 6.5-43.1 15.3-63.2 26.2l-56.7-43.8c-10.5-9.8-24.2-15.2-38.6-15.2-15.1 0-29.3 5.9-40 16.6l-43.4 43.4c-21.6 21.6-22.1 56.5-1.4 78.6l43.8 56.7c-10.9 20.1-19.6 41.3-26.2 63.2l-71.1 9.1c-30.3 1.1-54.6 26-54.6 56.6v61.3c0 30.6 24.3 55.5 54.6 56.6l71.1 9.1c6.6 22 15.3 43.1 26.2 63.2l-43.8 56.7c-20.7 22.2-20.2 57 1.4 78.6l43.4 43.4c10.7 10.7 24.9 16.6 40 16.6 14.5 0 28.1-5.4 38.6-15.2l56.7-43.8c20.1 10.9 41.3 19.6 63.2 26.2l9.1 71.1c1.1 30.3 26 54.6 56.6 54.6h61.3c30.6 0 55.5-24.3 56.6-54.6l9.1-71.1c22-6.5 43.1-15.3 63.2-26.2l56.7 43.8c22.2 20.7 57 20.2 78.6-1.4l43.4-43.4c21.6-21.6 22.1-56.5 1.4-78.6l-43.8-56.7c10.9-20.1 19.6-41.3 26.2-63.2l71.1-9.1c30.3-1.1 54.6-26 54.6-56.6v-61.3c0-30.6-24.3-55.6-54.6-56.6z m0.8 117.9c0 1.6-1.3 2.8-2.8 2.8l-112.2 14.2-4.3 18.1c-6.9 29-18.3 56.6-33.9 81.9l-9.7 15.8 67 86.8 2.3 2.6c1.1 1.1 1.1 2.9 0 4l-43.4 43.4c-1.1 1.1-2.9 1.1-4 0l-89.3-69.3-15.8 9.7c-25.3 15.6-52.9 27-81.9 33.9l-18.1 4.3-14 108.8-0.2 3.4c0 1.6-1.3 2.8-2.8 2.8h-61.3c-1.6 0-2.8-1.3-2.8-2.8l-14.2-112.2-18.1-4.3c-29-6.9-56.6-18.3-81.9-33.9l-15.8-9.7-86.8 67-2.6 2.3c-1.1 1.1-2.9 1.1-4 0l-43.4-43.4c-1.1-1.1-1.1-2.9 0-4L280 676l-9.7-15.8c-15.6-25.3-27-52.9-33.9-81.9l-4.3-18.1-108.8-14-3.4-0.2c-1.6 0-2.8-1.3-2.8-2.8v-61.3c0-1.6 1.3-2.8 2.8-2.8l112.2-14.2 4.3-18.1c6.9-29.1 18.3-56.6 33.9-81.9l9.7-15.8-67-86.8-2.3-2.6c-1.1-1.1-1.1-2.9 0-4l43.4-43.4c1.1-1.1 2.9-1.1 4 0l89.4 69.3 15.8-9.7c25.3-15.6 52.9-27 81.9-33.9l18.1-4.3 14-108.8 0.2-3.4c0-1.6 1.3-2.8 2.8-2.8h61.3c1.6 0 2.8 1.3 2.8 2.8l14.2 112.2 18.1 4.3c29 6.9 56.6 18.3 81.9 33.9l15.8 9.7 86.8-67 2.6-2.3c1.1-1.1 2.9-1.1 4 0l43.4 43.4c1.1 1.1 1.1 2.9 0 4L741.7 349l9.7 15.8c15.6 25.3 27 52.9 33.9 81.9l4.3 18.1 108.8 14 3.4 0.2c1.6 0 2.8 1.3 2.8 2.8v61.4z"  ></path><path d="M510.8 318.7c-106.9 0-193.8 87-193.8 193.8s87 193.8 193.8 193.8 193.8-87 193.8-193.8-86.9-193.8-193.8-193.8z m0 333.9c-77.2 0-140.1-62.8-140.1-140.1s62.8-140.1 140.1-140.1 140.1 62.8 140.1 140.1S588 652.6 510.8 652.6z"  ></path></symbol><symbol id="w-download" viewBox="0 0 1024 1024"><path d="M220.672 859.136c-63.488 0-99.84-36.352-99.84-99.84V584.704c0-10.752 8.704-19.456 19.456-19.456 29.184 0 58.88-4.096 58.88 23.552v165.888c0 13.824 11.264 24.576 24.576 24.576h576.512c13.824 0 25.088-11.264 25.088-25.088V584.192c0-10.752 8.704-19.456 19.456-19.456 29.184 0 58.88-4.096 58.88 23.552v175.104c0 63.488-31.232 94.72-94.72 94.72l-588.288 1.024z"  ></path><path d="M512 647.68c-21.504 0-38.912-17.408-38.912-38.912V170.496c0-21.504 17.408-23.552 38.912-23.552 21.504 0 38.912 2.048 38.912 23.552v438.272c0 21.504-17.408 38.912-38.912 38.912z"  ></path><path d="M509.952 662.016c-10.24 0-20.48-4.096-27.648-11.264l-179.2-179.2c-18.944-18.944-17.92-37.376 0-55.296s37.376-17.92 55.296 0l151.552 151.552 160.256-160.256c13.312-13.312 32.768-9.728 48.128 5.632s22.016 34.816 7.168 49.664L537.6 650.24c-7.168 7.168-17.408 11.264-27.648 11.264v0.512z"  ></path></symbol><symbol id="w-right" viewBox="0 0 1024 1024"><path d="M271.6 851.4L611 512l-339.4-339.4 70.7-70.7L752.4 512l-410.1 410.1-70.7-70.7z"  ></path></symbol><symbol id="w-up" viewBox="0 0 1024 1024"><path d="M851.4 752.4L512 413l-339.4 339.4-70.7-70.7L512 271.6l410.1 410.1-70.7 70.7z"  ></path></symbol><symbol id="w-down" viewBox="0 0 1024 1024"><path d="M172.6 271.6L512 611l339.4-339.4 70.7 70.7L512 752.4l-410.1-410.1 70.7-70.7z"  ></path></symbol></svg>',
      t = (c = document.getElementsByTagName("script"))[c.length - 1].getAttribute("data-injectcss");

  if (t && !d.__iconfont__svg__cssinject__) {
    d.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (c) {
      console && console.log(c);
    }
  }

  !function (c) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(c, 0);else {
        var t = function t() {
          document.removeEventListener("DOMContentLoaded", t, !1), c();
        };

        document.addEventListener("DOMContentLoaded", t, !1);
      }
    } else document.attachEvent && (e = c, o = d.document, n = !1, (_i = function i() {
      try {
        o.documentElement.doScroll("left");
      } catch (c) {
        return void setTimeout(_i, 50);
      }

      l();
    })(), o.onreadystatechange = function () {
      "complete" == o.readyState && (o.onreadystatechange = null, l());
    });

    function l() {
      n || (n = !0, e());
    }

    var e, o, n, _i;
  }(function () {
    var c, t;
    (c = document.createElement("div")).innerHTML = l, l = null, (t = c.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", function (c, t) {
      t.firstChild ? function (c, t) {
        t.parentNode.insertBefore(c, t);
      }(c, t.firstChild) : t.appendChild(c);
    }(t, document.body));
  });
}(window);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "10384" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/svg.js"], null)
//# sourceMappingURL=/svg.8fe7ff3c.js.map