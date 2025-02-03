function Mf(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var Ci = { exports: {} }, gr = {}, xi = { exports: {} }, D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function Ff() {
  if (za) return D;
  za = 1;
  var g = Symbol.for("react.element"), L = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), X = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), Y = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), H = Symbol.iterator;
  function j(c) {
    return c === null || typeof c != "object" ? null : (c = H && c[H] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var ze = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, U = {};
  function W(c, v, O) {
    this.props = c, this.context = v, this.refs = U, this.updater = O || ze;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, W.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function Ve() {
  }
  Ve.prototype = W.prototype;
  function we(c, v, O) {
    this.props = c, this.context = v, this.refs = U, this.updater = O || ze;
  }
  var Ee = we.prototype = new Ve();
  Ee.constructor = we, ie(Ee, W.prototype), Ee.isPureReactComponent = !0;
  var _e = Array.isArray, nn = Object.prototype.hasOwnProperty, Te = { current: null }, Ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xe(c, v, O) {
    var M, V = {}, B = null, G = null;
    if (v != null) for (M in v.ref !== void 0 && (G = v.ref), v.key !== void 0 && (B = "" + v.key), v) nn.call(v, M) && !Ie.hasOwnProperty(M) && (V[M] = v[M]);
    var Q = arguments.length - 2;
    if (Q === 1) V.children = O;
    else if (1 < Q) {
      for (var ne = Array(Q), $e = 0; $e < Q; $e++) ne[$e] = arguments[$e + 2];
      V.children = ne;
    }
    if (c && c.defaultProps) for (M in Q = c.defaultProps, Q) V[M] === void 0 && (V[M] = Q[M]);
    return { $$typeof: g, type: c, key: B, ref: G, props: V, _owner: Te.current };
  }
  function Pn(c, v) {
    return { $$typeof: g, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === g;
  }
  function Yn(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(O) {
      return v[O];
    });
  }
  var fn = /\/+/g;
  function Be(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Yn("" + c.key) : v.toString(36);
  }
  function tn(c, v, O, M, V) {
    var B = typeof c;
    (B === "undefined" || B === "boolean") && (c = null);
    var G = !1;
    if (c === null) G = !0;
    else switch (B) {
      case "string":
      case "number":
        G = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case g:
          case L:
            G = !0;
        }
    }
    if (G) return G = c, V = V(G), c = M === "" ? "." + Be(G, 0) : M, _e(V) ? (O = "", c != null && (O = c.replace(fn, "$&/") + "/"), tn(V, v, O, "", function($e) {
      return $e;
    })) : V != null && (gn(V) && (V = Pn(V, O + (!V.key || G && G.key === V.key ? "" : ("" + V.key).replace(fn, "$&/") + "/") + c)), v.push(V)), 1;
    if (G = 0, M = M === "" ? "." : M + ":", _e(c)) for (var Q = 0; Q < c.length; Q++) {
      B = c[Q];
      var ne = M + Be(B, Q);
      G += tn(B, v, O, ne, V);
    }
    else if (ne = j(c), typeof ne == "function") for (c = ne.call(c), Q = 0; !(B = c.next()).done; ) B = B.value, ne = M + Be(B, Q++), G += tn(B, v, O, ne, V);
    else if (B === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return G;
  }
  function dn(c, v, O) {
    if (c == null) return c;
    var M = [], V = 0;
    return tn(c, M, "", "", function(B) {
      return v.call(O, B, V++);
    }), M;
  }
  function Oe(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = O);
      }, function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = O);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ue = { current: null }, k = { transition: null }, R = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: k, ReactCurrentOwner: Te };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return D.Children = { map: dn, forEach: function(c, v, O) {
    dn(c, function() {
      v.apply(this, arguments);
    }, O);
  }, count: function(c) {
    var v = 0;
    return dn(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return dn(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!gn(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, D.Component = W, D.Fragment = m, D.Profiler = b, D.PureComponent = we, D.StrictMode = de, D.Suspense = F, D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, D.act = C, D.cloneElement = function(c, v, O) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var M = ie({}, c.props), V = c.key, B = c.ref, G = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (B = v.ref, G = Te.current), v.key !== void 0 && (V = "" + v.key), c.type && c.type.defaultProps) var Q = c.type.defaultProps;
      for (ne in v) nn.call(v, ne) && !Ie.hasOwnProperty(ne) && (M[ne] = v[ne] === void 0 && Q !== void 0 ? Q[ne] : v[ne]);
    }
    var ne = arguments.length - 2;
    if (ne === 1) M.children = O;
    else if (1 < ne) {
      Q = Array(ne);
      for (var $e = 0; $e < ne; $e++) Q[$e] = arguments[$e + 2];
      M.children = Q;
    }
    return { $$typeof: g, type: c.type, key: V, ref: B, props: M, _owner: G };
  }, D.createContext = function(c) {
    return c = { $$typeof: X, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: pe, _context: c }, c.Consumer = c;
  }, D.createElement = Xe, D.createFactory = function(c) {
    var v = Xe.bind(null, c);
    return v.type = c, v;
  }, D.createRef = function() {
    return { current: null };
  }, D.forwardRef = function(c) {
    return { $$typeof: ee, render: c };
  }, D.isValidElement = gn, D.lazy = function(c) {
    return { $$typeof: oe, _payload: { _status: -1, _result: c }, _init: Oe };
  }, D.memo = function(c, v) {
    return { $$typeof: Y, type: c, compare: v === void 0 ? null : v };
  }, D.startTransition = function(c) {
    var v = k.transition;
    k.transition = {};
    try {
      c();
    } finally {
      k.transition = v;
    }
  }, D.unstable_act = C, D.useCallback = function(c, v) {
    return ue.current.useCallback(c, v);
  }, D.useContext = function(c) {
    return ue.current.useContext(c);
  }, D.useDebugValue = function() {
  }, D.useDeferredValue = function(c) {
    return ue.current.useDeferredValue(c);
  }, D.useEffect = function(c, v) {
    return ue.current.useEffect(c, v);
  }, D.useId = function() {
    return ue.current.useId();
  }, D.useImperativeHandle = function(c, v, O) {
    return ue.current.useImperativeHandle(c, v, O);
  }, D.useInsertionEffect = function(c, v) {
    return ue.current.useInsertionEffect(c, v);
  }, D.useLayoutEffect = function(c, v) {
    return ue.current.useLayoutEffect(c, v);
  }, D.useMemo = function(c, v) {
    return ue.current.useMemo(c, v);
  }, D.useReducer = function(c, v, O) {
    return ue.current.useReducer(c, v, O);
  }, D.useRef = function(c) {
    return ue.current.useRef(c);
  }, D.useState = function(c) {
    return ue.current.useState(c);
  }, D.useSyncExternalStore = function(c, v, O) {
    return ue.current.useSyncExternalStore(c, v, O);
  }, D.useTransition = function() {
    return ue.current.useTransition();
  }, D.version = "18.3.1", D;
}
var Ta;
function Ri() {
  return Ta || (Ta = 1, xi.exports = Ff()), xi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La;
function jf() {
  if (La) return gr;
  La = 1;
  var g = Ri(), L = Symbol.for("react.element"), m = Symbol.for("react.fragment"), de = Object.prototype.hasOwnProperty, b = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(ee, F, Y) {
    var oe, H = {}, j = null, ze = null;
    Y !== void 0 && (j = "" + Y), F.key !== void 0 && (j = "" + F.key), F.ref !== void 0 && (ze = F.ref);
    for (oe in F) de.call(F, oe) && !pe.hasOwnProperty(oe) && (H[oe] = F[oe]);
    if (ee && ee.defaultProps) for (oe in F = ee.defaultProps, F) H[oe] === void 0 && (H[oe] = F[oe]);
    return { $$typeof: L, type: ee, key: j, ref: ze, props: H, _owner: b.current };
  }
  return gr.Fragment = m, gr.jsx = X, gr.jsxs = X, gr;
}
var Ra;
function Uf() {
  return Ra || (Ra = 1, Ci.exports = jf()), Ci.exports;
}
var Ye = Uf(), ut = Ri(), Tl = {}, Ni = { exports: {} }, Ae = {}, Pi = { exports: {} }, zi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function Af() {
  return Ia || (Ia = 1, function(g) {
    function L(k, R) {
      var C = k.length;
      k.push(R);
      e: for (; 0 < C; ) {
        var c = C - 1 >>> 1, v = k[c];
        if (0 < b(v, R)) k[c] = R, k[C] = v, C = c;
        else break e;
      }
    }
    function m(k) {
      return k.length === 0 ? null : k[0];
    }
    function de(k) {
      if (k.length === 0) return null;
      var R = k[0], C = k.pop();
      if (C !== R) {
        k[0] = C;
        e: for (var c = 0, v = k.length, O = v >>> 1; c < O; ) {
          var M = 2 * (c + 1) - 1, V = k[M], B = M + 1, G = k[B];
          if (0 > b(V, C)) B < v && 0 > b(G, V) ? (k[c] = G, k[B] = C, c = B) : (k[c] = V, k[M] = C, c = M);
          else if (B < v && 0 > b(G, C)) k[c] = G, k[B] = C, c = B;
          else break e;
        }
      }
      return R;
    }
    function b(k, R) {
      var C = k.sortIndex - R.sortIndex;
      return C !== 0 ? C : k.id - R.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var pe = performance;
      g.unstable_now = function() {
        return pe.now();
      };
    } else {
      var X = Date, ee = X.now();
      g.unstable_now = function() {
        return X.now() - ee;
      };
    }
    var F = [], Y = [], oe = 1, H = null, j = 3, ze = !1, ie = !1, U = !1, W = typeof setTimeout == "function" ? setTimeout : null, Ve = typeof clearTimeout == "function" ? clearTimeout : null, we = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ee(k) {
      for (var R = m(Y); R !== null; ) {
        if (R.callback === null) de(Y);
        else if (R.startTime <= k) de(Y), R.sortIndex = R.expirationTime, L(F, R);
        else break;
        R = m(Y);
      }
    }
    function _e(k) {
      if (U = !1, Ee(k), !ie) if (m(F) !== null) ie = !0, Oe(nn);
      else {
        var R = m(Y);
        R !== null && ue(_e, R.startTime - k);
      }
    }
    function nn(k, R) {
      ie = !1, U && (U = !1, Ve(Xe), Xe = -1), ze = !0;
      var C = j;
      try {
        for (Ee(R), H = m(F); H !== null && (!(H.expirationTime > R) || k && !Yn()); ) {
          var c = H.callback;
          if (typeof c == "function") {
            H.callback = null, j = H.priorityLevel;
            var v = c(H.expirationTime <= R);
            R = g.unstable_now(), typeof v == "function" ? H.callback = v : H === m(F) && de(F), Ee(R);
          } else de(F);
          H = m(F);
        }
        if (H !== null) var O = !0;
        else {
          var M = m(Y);
          M !== null && ue(_e, M.startTime - R), O = !1;
        }
        return O;
      } finally {
        H = null, j = C, ze = !1;
      }
    }
    var Te = !1, Ie = null, Xe = -1, Pn = 5, gn = -1;
    function Yn() {
      return !(g.unstable_now() - gn < Pn);
    }
    function fn() {
      if (Ie !== null) {
        var k = g.unstable_now();
        gn = k;
        var R = !0;
        try {
          R = Ie(!0, k);
        } finally {
          R ? Be() : (Te = !1, Ie = null);
        }
      } else Te = !1;
    }
    var Be;
    if (typeof we == "function") Be = function() {
      we(fn);
    };
    else if (typeof MessageChannel < "u") {
      var tn = new MessageChannel(), dn = tn.port2;
      tn.port1.onmessage = fn, Be = function() {
        dn.postMessage(null);
      };
    } else Be = function() {
      W(fn, 0);
    };
    function Oe(k) {
      Ie = k, Te || (Te = !0, Be());
    }
    function ue(k, R) {
      Xe = W(function() {
        k(g.unstable_now());
      }, R);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, g.unstable_continueExecution = function() {
      ie || ze || (ie = !0, Oe(nn));
    }, g.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pn = 0 < k ? Math.floor(1e3 / k) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, g.unstable_getFirstCallbackNode = function() {
      return m(F);
    }, g.unstable_next = function(k) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = j;
      }
      var C = j;
      j = R;
      try {
        return k();
      } finally {
        j = C;
      }
    }, g.unstable_pauseExecution = function() {
    }, g.unstable_requestPaint = function() {
    }, g.unstable_runWithPriority = function(k, R) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var C = j;
      j = k;
      try {
        return R();
      } finally {
        j = C;
      }
    }, g.unstable_scheduleCallback = function(k, R, C) {
      var c = g.unstable_now();
      switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? c + C : c) : C = c, k) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = C + v, k = { id: oe++, callback: R, priorityLevel: k, startTime: C, expirationTime: v, sortIndex: -1 }, C > c ? (k.sortIndex = C, L(Y, k), m(F) === null && k === m(Y) && (U ? (Ve(Xe), Xe = -1) : U = !0, ue(_e, C - c))) : (k.sortIndex = v, L(F, k), ie || ze || (ie = !0, Oe(nn))), k;
    }, g.unstable_shouldYield = Yn, g.unstable_wrapCallback = function(k) {
      var R = j;
      return function() {
        var C = j;
        j = R;
        try {
          return k.apply(this, arguments);
        } finally {
          j = C;
        }
      };
    };
  }(zi)), zi;
}
var Oa;
function Vf() {
  return Oa || (Oa = 1, Pi.exports = Af()), Pi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Da;
function Bf() {
  if (Da) return Ae;
  Da = 1;
  var g = Ri(), L = Vf();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var de = /* @__PURE__ */ new Set(), b = {};
  function pe(e, n) {
    X(e, n), X(e + "Capture", n);
  }
  function X(e, n) {
    for (b[e] = n, e = 0; e < n.length; e++) de.add(n[e]);
  }
  var ee = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), F = Object.prototype.hasOwnProperty, Y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, oe = {}, H = {};
  function j(e) {
    return F.call(H, e) ? !0 : F.call(oe, e) ? !1 : Y.test(e) ? H[e] = !0 : (oe[e] = !0, !1);
  }
  function ze(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function ie(e, n, t, r) {
    if (n === null || typeof n > "u" || ze(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null) switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
    return !1;
  }
  function U(e, n, t, r, l, o, i) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    W[e] = new U(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    W[n] = new U(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    W[e] = new U(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    W[e] = new U(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    W[e] = new U(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    W[e] = new U(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    W[e] = new U(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    W[e] = new U(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    W[e] = new U(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Ve = /[\-:]([a-z])/g;
  function we(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      Ve,
      we
    );
    W[n] = new U(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(Ve, we);
    W[n] = new U(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(Ve, we);
    W[n] = new U(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    W[e] = new U(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new U("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    W[e] = new U(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Ee(e, n, t, r) {
    var l = W.hasOwnProperty(n) ? W[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (ie(n, t, l, r) && (t = null), r || l === null ? j(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var _e = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, nn = Symbol.for("react.element"), Te = Symbol.for("react.portal"), Ie = Symbol.for("react.fragment"), Xe = Symbol.for("react.strict_mode"), Pn = Symbol.for("react.profiler"), gn = Symbol.for("react.provider"), Yn = Symbol.for("react.context"), fn = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), tn = Symbol.for("react.suspense_list"), dn = Symbol.for("react.memo"), Oe = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), k = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var C = Object.assign, c;
  function v(e) {
    if (c === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      c = n && n[1] || "";
    }
    return `
` + c + e;
  }
  var O = !1;
  function M(e, n) {
    if (!e || O) return "";
    O = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n) if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (p) {
          r = p;
        }
        e.call(n.prototype);
      }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
        for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
      }
    } finally {
      O = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function V(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = M(e.type, !1), e;
      case 11:
        return e = M(e.type.render, !1), e;
      case 1:
        return e = M(e.type, !0), e;
      default:
        return "";
    }
  }
  function B(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ie:
        return "Fragment";
      case Te:
        return "Portal";
      case Pn:
        return "Profiler";
      case Xe:
        return "StrictMode";
      case Be:
        return "Suspense";
      case tn:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Yn:
        return (e.displayName || "Context") + ".Consumer";
      case gn:
        return (e._context.displayName || "Context") + ".Provider";
      case fn:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case dn:
        return n = e.displayName || null, n !== null ? n : B(e.type) || "Memo";
      case Oe:
        n = e._payload, e = e._init;
        try {
          return B(e(n));
        } catch {
        }
    }
    return null;
  }
  function G(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return B(n);
      case 8:
        return n === Xe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function Q(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ne(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function $e(e) {
    var n = ne(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, o = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, o.call(this, i);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = $e(e));
  }
  function Di(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), r = "";
    return e && (r = ne(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function Sr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ll(e, n) {
    var t = n.checked;
    return C({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Mi(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = Q(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function Fi(e, n) {
    n = n.checked, n != null && Ee(e, "checked", n, !1);
  }
  function Rl(e, n) {
    Fi(e, n);
    var t = Q(n.value), r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Il(e, n.type, t) : n.hasOwnProperty("defaultValue") && Il(e, n.type, Q(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function ji(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Il(e, n, t) {
    (n !== "number" || Sr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Ot = Array.isArray;
  function st(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + Q(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ol(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return C({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ui(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(m(92));
        if (Ot(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: Q(t) };
  }
  function Ai(e, n) {
    var t = Q(n.value), r = Q(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Vi(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Bi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bi(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, $i = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
  function Dt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Mt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Aa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mt).forEach(function(e) {
    Aa.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Mt[n] = Mt[e];
    });
  });
  function Hi(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Mt.hasOwnProperty(e) && Mt[e] ? ("" + n).trim() : n + "px";
  }
  function Wi(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = Hi(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
  }
  var Va = C({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ml(e, n) {
    if (n) {
      if (Va[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function Fl(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var jl = null;
  function Ul(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Al = null, at = null, ct = null;
  function Qi(e) {
    if (e = rr(e)) {
      if (typeof Al != "function") throw Error(m(280));
      var n = e.stateNode;
      n && (n = Wr(n), Al(e.stateNode, e.type, n));
    }
  }
  function Ki(e) {
    at ? ct ? ct.push(e) : ct = [e] : at = e;
  }
  function Yi() {
    if (at) {
      var e = at, n = ct;
      if (ct = at = null, Qi(e), n) for (e = 0; e < n.length; e++) Qi(n[e]);
    }
  }
  function Xi(e, n) {
    return e(n);
  }
  function Gi() {
  }
  var Vl = !1;
  function Zi(e, n, t) {
    if (Vl) return e(n, t);
    Vl = !0;
    try {
      return Xi(e, n, t);
    } finally {
      Vl = !1, (at !== null || ct !== null) && (Gi(), Yi());
    }
  }
  function Ft(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Wr(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Bl = !1;
  if (ee) try {
    var jt = {};
    Object.defineProperty(jt, "passive", { get: function() {
      Bl = !0;
    } }), window.addEventListener("test", jt, jt), window.removeEventListener("test", jt, jt);
  } catch {
    Bl = !1;
  }
  function Ba(e, n, t, r, l, o, i, u, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Ut = !1, Er = null, _r = !1, $l = null, $a = { onError: function(e) {
    Ut = !0, Er = e;
  } };
  function Ha(e, n, t, r, l, o, i, u, s) {
    Ut = !1, Er = null, Ba.apply($a, arguments);
  }
  function Wa(e, n, t, r, l, o, i, u, s) {
    if (Ha.apply(this, arguments), Ut) {
      if (Ut) {
        var p = Er;
        Ut = !1, Er = null;
      } else throw Error(m(198));
      _r || (_r = !0, $l = p);
    }
  }
  function Xn(e) {
    var n = e, t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, n.flags & 4098 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Ji(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function qi(e) {
    if (Xn(e) !== e) throw Error(m(188));
  }
  function Qa(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Xn(e), n === null) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === t) return qi(l), e;
          if (o === r) return qi(l), n;
          o = o.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) t = l, r = o;
      else {
        for (var i = !1, u = l.child; u; ) {
          if (u === t) {
            i = !0, t = l, r = o;
            break;
          }
          if (u === r) {
            i = !0, r = l, t = o;
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === t) {
              i = !0, t = o, r = l;
              break;
            }
            if (u === r) {
              i = !0, r = o, t = l;
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function bi(e) {
    return e = Qa(e), e !== null ? eu(e) : null;
  }
  function eu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = eu(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var nu = L.unstable_scheduleCallback, tu = L.unstable_cancelCallback, Ka = L.unstable_shouldYield, Ya = L.unstable_requestPaint, ae = L.unstable_now, Xa = L.unstable_getCurrentPriorityLevel, Hl = L.unstable_ImmediatePriority, ru = L.unstable_UserBlockingPriority, Cr = L.unstable_NormalPriority, Ga = L.unstable_LowPriority, lu = L.unstable_IdlePriority, xr = null, pn = null;
  function Za(e) {
    if (pn && typeof pn.onCommitFiberRoot == "function") try {
      pn.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var rn = Math.clz32 ? Math.clz32 : ba, Ja = Math.log, qa = Math.LN2;
  function ba(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ja(e) / qa | 0) | 0;
  }
  var Nr = 64, Pr = 4194304;
  function At(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? r = At(u) : (o &= i, o !== 0 && (r = At(o)));
    } else i = t & ~l, i !== 0 ? r = At(i) : o !== 0 && (r = At(o));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - rn(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function ec(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function nc(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - rn(o), u = 1 << i, s = l[i];
      s === -1 ? (!(u & t) || u & r) && (l[i] = ec(u, n)) : s <= n && (e.expiredLanes |= u), o &= ~u;
    }
  }
  function Wl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ou() {
    var e = Nr;
    return Nr <<= 1, !(Nr & 4194240) && (Nr = 64), e;
  }
  function Ql(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Vt(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - rn(n), e[n] = t;
  }
  function tc(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - rn(t), o = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
    }
  }
  function Kl(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - rn(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var K = 0;
  function iu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var uu, Yl, su, au, cu, Xl = !1, Tr = [], zn = null, Tn = null, Ln = null, Bt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), Rn = [], rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function fu(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        Ln = null;
        break;
      case "pointerover":
      case "pointerout":
        Bt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $t.delete(n.pointerId);
    }
  }
  function Ht(e, n, t, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = rr(n), n !== null && Yl(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function lc(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return zn = Ht(zn, e, n, t, r, l), !0;
      case "dragenter":
        return Tn = Ht(Tn, e, n, t, r, l), !0;
      case "mouseover":
        return Ln = Ht(Ln, e, n, t, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return Bt.set(o, Ht(Bt.get(o) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, $t.set(o, Ht($t.get(o) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function du(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = Xn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Ji(t), n !== null) {
            e.blockedOn = n, cu(e.priority, function() {
              su(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Zl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        jl = r, t.target.dispatchEvent(r), jl = null;
      } else return n = rr(t), n !== null && Yl(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function pu(e, n, t) {
    Lr(e) && t.delete(n);
  }
  function oc() {
    Xl = !1, zn !== null && Lr(zn) && (zn = null), Tn !== null && Lr(Tn) && (Tn = null), Ln !== null && Lr(Ln) && (Ln = null), Bt.forEach(pu), $t.forEach(pu);
  }
  function Wt(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Xl || (Xl = !0, L.unstable_scheduleCallback(L.unstable_NormalPriority, oc)));
  }
  function Qt(e) {
    function n(l) {
      return Wt(l, e);
    }
    if (0 < Tr.length) {
      Wt(Tr[0], e);
      for (var t = 1; t < Tr.length; t++) {
        var r = Tr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (zn !== null && Wt(zn, e), Tn !== null && Wt(Tn, e), Ln !== null && Wt(Ln, e), Bt.forEach(n), $t.forEach(n), t = 0; t < Rn.length; t++) r = Rn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && (t = Rn[0], t.blockedOn === null); ) du(t), t.blockedOn === null && Rn.shift();
  }
  var ft = _e.ReactCurrentBatchConfig, Rr = !0;
  function ic(e, n, t, r) {
    var l = K, o = ft.transition;
    ft.transition = null;
    try {
      K = 1, Gl(e, n, t, r);
    } finally {
      K = l, ft.transition = o;
    }
  }
  function uc(e, n, t, r) {
    var l = K, o = ft.transition;
    ft.transition = null;
    try {
      K = 4, Gl(e, n, t, r);
    } finally {
      K = l, ft.transition = o;
    }
  }
  function Gl(e, n, t, r) {
    if (Rr) {
      var l = Zl(e, n, t, r);
      if (l === null) mo(e, n, r, Ir, t), fu(e, r);
      else if (lc(l, e, n, t, r)) r.stopPropagation();
      else if (fu(e, r), n & 4 && -1 < rc.indexOf(e)) {
        for (; l !== null; ) {
          var o = rr(l);
          if (o !== null && uu(o), o = Zl(e, n, t, r), o === null && mo(e, n, r, Ir, t), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else mo(e, n, r, null, t);
    }
  }
  var Ir = null;
  function Zl(e, n, t, r) {
    if (Ir = null, e = Ul(r), e = Gn(e), e !== null) if (n = Xn(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = Ji(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return Ir = e, null;
  }
  function mu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Xa()) {
          case Hl:
            return 1;
          case ru:
            return 4;
          case Cr:
          case Ga:
            return 16;
          case lu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var In = null, Jl = null, Or = null;
  function hu() {
    if (Or) return Or;
    var e, n = Jl, t = n.length, r, l = "value" in In ? In.value : In.textContent, o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++) ;
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
    return Or = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Dr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Mr() {
    return !0;
  }
  function vu() {
    return !1;
  }
  function He(e) {
    function n(t, r, l, o, i) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Mr : vu, this.isPropagationStopped = vu, this;
    }
    return C(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Mr);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Mr);
    }, persist: function() {
    }, isPersistent: Mr }), n;
  }
  var dt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ql = He(dt), Kt = C({}, dt, { view: 0, detail: 0 }), sc = He(Kt), bl, eo, Yt, Fr = C({}, Kt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: to, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Yt && (Yt && e.type === "mousemove" ? (bl = e.screenX - Yt.screenX, eo = e.screenY - Yt.screenY) : eo = bl = 0, Yt = e), bl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : eo;
  } }), yu = He(Fr), ac = C({}, Fr, { dataTransfer: 0 }), cc = He(ac), fc = C({}, Kt, { relatedTarget: 0 }), no = He(fc), dc = C({}, dt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = He(dc), mc = C({}, dt, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), hc = He(mc), vc = C({}, dt, { data: 0 }), gu = He(vc), yc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, gc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, wc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Sc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = wc[e]) ? !!n[e] : !1;
  }
  function to() {
    return Sc;
  }
  var kc = C({}, Kt, { key: function(e) {
    if (e.key) {
      var n = yc[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = Dr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: to, charCode: function(e) {
    return e.type === "keypress" ? Dr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Dr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Ec = He(kc), _c = C({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wu = He(_c), Cc = C({}, Kt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: to }), xc = He(Cc), Nc = C({}, dt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pc = He(Nc), zc = C({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Tc = He(zc), Lc = [9, 13, 27, 32], ro = ee && "CompositionEvent" in window, Xt = null;
  ee && "documentMode" in document && (Xt = document.documentMode);
  var Rc = ee && "TextEvent" in window && !Xt, Su = ee && (!ro || Xt && 8 < Xt && 11 >= Xt), ku = " ", Eu = !1;
  function _u(e, n) {
    switch (e) {
      case "keyup":
        return Lc.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pt = !1;
  function Ic(e, n) {
    switch (e) {
      case "compositionend":
        return Cu(n);
      case "keypress":
        return n.which !== 32 ? null : (Eu = !0, ku);
      case "textInput":
        return e = n.data, e === ku && Eu ? null : e;
      default:
        return null;
    }
  }
  function Oc(e, n) {
    if (pt) return e === "compositionend" || !ro && _u(e, n) ? (e = hu(), Or = Jl = In = null, pt = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Su && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Dc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function xu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Dc[e.type] : n === "textarea";
  }
  function Nu(e, n, t, r) {
    Ki(r), n = Br(n, "onChange"), 0 < n.length && (t = new ql("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Gt = null, Zt = null;
  function Mc(e) {
    Wu(e, 0);
  }
  function jr(e) {
    var n = gt(e);
    if (Di(n)) return e;
  }
  function Fc(e, n) {
    if (e === "change") return n;
  }
  var Pu = !1;
  if (ee) {
    var lo;
    if (ee) {
      var oo = "oninput" in document;
      if (!oo) {
        var zu = document.createElement("div");
        zu.setAttribute("oninput", "return;"), oo = typeof zu.oninput == "function";
      }
      lo = oo;
    } else lo = !1;
    Pu = lo && (!document.documentMode || 9 < document.documentMode);
  }
  function Tu() {
    Gt && (Gt.detachEvent("onpropertychange", Lu), Zt = Gt = null);
  }
  function Lu(e) {
    if (e.propertyName === "value" && jr(Zt)) {
      var n = [];
      Nu(n, Zt, e, Ul(e)), Zi(Mc, n);
    }
  }
  function jc(e, n, t) {
    e === "focusin" ? (Tu(), Gt = n, Zt = t, Gt.attachEvent("onpropertychange", Lu)) : e === "focusout" && Tu();
  }
  function Uc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return jr(Zt);
  }
  function Ac(e, n) {
    if (e === "click") return jr(n);
  }
  function Vc(e, n) {
    if (e === "input" || e === "change") return jr(n);
  }
  function Bc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var ln = typeof Object.is == "function" ? Object.is : Bc;
  function Jt(e, n) {
    if (ln(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!F.call(n, l) || !ln(e[l], n[l])) return !1;
    }
    return !0;
  }
  function Ru(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Iu(e, n) {
    var t = Ru(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Ru(t);
    }
  }
  function Ou(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Ou(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Du() {
    for (var e = window, n = Sr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = Sr(e.document);
    }
    return n;
  }
  function io(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function $c(e) {
    var n = Du(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Ou(t.ownerDocument.documentElement, t)) {
      if (r !== null && io(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Iu(t, o);
          var i = Iu(
            t,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Hc = ee && "documentMode" in document && 11 >= document.documentMode, mt = null, uo = null, qt = null, so = !1;
  function Mu(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    so || mt == null || mt !== Sr(r) || (r = mt, "selectionStart" in r && io(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), qt && Jt(qt, r) || (qt = r, r = Br(uo, "onSelect"), 0 < r.length && (n = new ql("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = mt)));
  }
  function Ur(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var ht = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, ao = {}, Fu = {};
  ee && (Fu = document.createElement("div").style, "AnimationEvent" in window || (delete ht.animationend.animation, delete ht.animationiteration.animation, delete ht.animationstart.animation), "TransitionEvent" in window || delete ht.transitionend.transition);
  function Ar(e) {
    if (ao[e]) return ao[e];
    if (!ht[e]) return e;
    var n = ht[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in Fu) return ao[e] = n[t];
    return e;
  }
  var ju = Ar("animationend"), Uu = Ar("animationiteration"), Au = Ar("animationstart"), Vu = Ar("transitionend"), Bu = /* @__PURE__ */ new Map(), $u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function On(e, n) {
    Bu.set(e, n), pe(n, [e]);
  }
  for (var co = 0; co < $u.length; co++) {
    var fo = $u[co], Wc = fo.toLowerCase(), Qc = fo[0].toUpperCase() + fo.slice(1);
    On(Wc, "on" + Qc);
  }
  On(ju, "onAnimationEnd"), On(Uu, "onAnimationIteration"), On(Au, "onAnimationStart"), On("dblclick", "onDoubleClick"), On("focusin", "onFocus"), On("focusout", "onBlur"), On(Vu, "onTransitionEnd"), X("onMouseEnter", ["mouseout", "mouseover"]), X("onMouseLeave", ["mouseout", "mouseover"]), X("onPointerEnter", ["pointerout", "pointerover"]), X("onPointerLeave", ["pointerout", "pointerover"]), pe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), pe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), pe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), pe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), pe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kc = new Set("cancel close invalid load scroll toggle".split(" ").concat(bt));
  function Hu(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Wa(r, n, void 0, e), e.currentTarget = null;
  }
  function Wu(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (n) for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, p = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
          Hu(l, u, p), o = s;
        }
        else for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, p = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
          Hu(l, u, p), o = s;
        }
      }
    }
    if (_r) throw e = $l, _r = !1, $l = null, e;
  }
  function J(e, n) {
    var t = n[So];
    t === void 0 && (t = n[So] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (Qu(n, e, 2, !1), t.add(r));
  }
  function po(e, n, t) {
    var r = 0;
    n && (r |= 4), Qu(t, e, r, n);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Vr]) {
      e[Vr] = !0, de.forEach(function(t) {
        t !== "selectionchange" && (Kc.has(t) || po(t, !1, e), po(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Vr] || (n[Vr] = !0, po("selectionchange", !1, n));
    }
  }
  function Qu(e, n, t, r) {
    switch (mu(n)) {
      case 1:
        var l = ic;
        break;
      case 4:
        l = uc;
        break;
      default:
        l = Gl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Bl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function mo(e, n, t, r, l) {
    var o = r;
    if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || u.nodeType === 8 && u.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          i = i.return;
        }
        for (; u !== null; ) {
          if (i = Gn(u), i === null) return;
          if (s = i.tag, s === 5 || s === 6) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    Zi(function() {
      var p = o, y = Ul(t), w = [];
      e: {
        var h = Bu.get(e);
        if (h !== void 0) {
          var E = ql, x = e;
          switch (e) {
            case "keypress":
              if (Dr(t) === 0) break e;
            case "keydown":
            case "keyup":
              E = Ec;
              break;
            case "focusin":
              x = "focus", E = no;
              break;
            case "focusout":
              x = "blur", E = no;
              break;
            case "beforeblur":
            case "afterblur":
              E = no;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              E = yu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = cc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = xc;
              break;
            case ju:
            case Uu:
            case Au:
              E = pc;
              break;
            case Vu:
              E = Pc;
              break;
            case "scroll":
              E = sc;
              break;
            case "wheel":
              E = Tc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = wu;
          }
          var N = (n & 4) !== 0, ce = !N && e === "scroll", f = N ? h !== null ? h + "Capture" : null : h;
          N = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var S = d.stateNode;
            if (d.tag === 5 && S !== null && (d = S, f !== null && (S = Ft(a, f), S != null && N.push(nr(a, S, d)))), ce) break;
            a = a.return;
          }
          0 < N.length && (h = new E(h, x, null, t, y), w.push({ event: h, listeners: N }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", h && t !== jl && (x = t.relatedTarget || t.fromElement) && (Gn(x) || x[wn])) break e;
          if ((E || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, E ? (x = t.relatedTarget || t.toElement, E = p, x = x ? Gn(x) : null, x !== null && (ce = Xn(x), x !== ce || x.tag !== 5 && x.tag !== 6) && (x = null)) : (E = null, x = p), E !== x)) {
            if (N = yu, S = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (N = wu, S = "onPointerLeave", f = "onPointerEnter", a = "pointer"), ce = E == null ? h : gt(E), d = x == null ? h : gt(x), h = new N(S, a + "leave", E, t, y), h.target = ce, h.relatedTarget = d, S = null, Gn(y) === p && (N = new N(f, a + "enter", x, t, y), N.target = d, N.relatedTarget = ce, S = N), ce = S, E && x) n: {
              for (N = E, f = x, a = 0, d = N; d; d = vt(d)) a++;
              for (d = 0, S = f; S; S = vt(S)) d++;
              for (; 0 < a - d; ) N = vt(N), a--;
              for (; 0 < d - a; ) f = vt(f), d--;
              for (; a--; ) {
                if (N === f || f !== null && N === f.alternate) break n;
                N = vt(N), f = vt(f);
              }
              N = null;
            }
            else N = null;
            E !== null && Ku(w, h, E, N, !1), x !== null && ce !== null && Ku(w, ce, x, N, !0);
          }
        }
        e: {
          if (h = p ? gt(p) : window, E = h.nodeName && h.nodeName.toLowerCase(), E === "select" || E === "input" && h.type === "file") var P = Fc;
          else if (xu(h)) if (Pu) P = Vc;
          else {
            P = Uc;
            var z = jc;
          }
          else (E = h.nodeName) && E.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = Ac);
          if (P && (P = P(e, p))) {
            Nu(w, P, t, y);
            break e;
          }
          z && z(e, h, p), e === "focusout" && (z = h._wrapperState) && z.controlled && h.type === "number" && Il(h, "number", h.value);
        }
        switch (z = p ? gt(p) : window, e) {
          case "focusin":
            (xu(z) || z.contentEditable === "true") && (mt = z, uo = p, qt = null);
            break;
          case "focusout":
            qt = uo = mt = null;
            break;
          case "mousedown":
            so = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            so = !1, Mu(w, t, y);
            break;
          case "selectionchange":
            if (Hc) break;
          case "keydown":
          case "keyup":
            Mu(w, t, y);
        }
        var T;
        if (ro) e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
        else pt ? _u(e, t) && (I = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (I = "onCompositionStart");
        I && (Su && t.locale !== "ko" && (pt || I !== "onCompositionStart" ? I === "onCompositionEnd" && pt && (T = hu()) : (In = y, Jl = "value" in In ? In.value : In.textContent, pt = !0)), z = Br(p, I), 0 < z.length && (I = new gu(I, e, null, t, y), w.push({ event: I, listeners: z }), T ? I.data = T : (T = Cu(t), T !== null && (I.data = T)))), (T = Rc ? Ic(e, t) : Oc(e, t)) && (p = Br(p, "onBeforeInput"), 0 < p.length && (y = new gu("onBeforeInput", "beforeinput", null, t, y), w.push({ event: y, listeners: p }), y.data = T));
      }
      Wu(w, n);
    });
  }
  function nr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Br(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Ft(e, t), o != null && r.unshift(nr(e, o, l)), o = Ft(e, n), o != null && r.push(nr(e, o, l))), e = e.return;
    }
    return r;
  }
  function vt(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ku(e, n, t, r, l) {
    for (var o = n._reactName, i = []; t !== null && t !== r; ) {
      var u = t, s = u.alternate, p = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 && p !== null && (u = p, l ? (s = Ft(t, o), s != null && i.unshift(nr(t, s, u))) : l || (s = Ft(t, o), s != null && i.push(nr(t, s, u)))), t = t.return;
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var Yc = /\r\n?/g, Xc = /\u0000|\uFFFD/g;
  function Yu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Yc, `
`).replace(Xc, "");
  }
  function $r(e, n, t) {
    if (n = Yu(n), Yu(e) !== n && t) throw Error(m(425));
  }
  function Hr() {
  }
  var ho = null, vo = null;
  function yo(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var go = typeof setTimeout == "function" ? setTimeout : void 0, Gc = typeof clearTimeout == "function" ? clearTimeout : void 0, Xu = typeof Promise == "function" ? Promise : void 0, Zc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xu < "u" ? function(e) {
    return Xu.resolve(null).then(e).catch(Jc);
  } : go;
  function Jc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function wo(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), Qt(n);
          return;
        }
        r--;
      } else t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Qt(n);
  }
  function Dn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Gu(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yt = Math.random().toString(36).slice(2), mn = "__reactFiber$" + yt, tr = "__reactProps$" + yt, wn = "__reactContainer$" + yt, So = "__reactEvents$" + yt, qc = "__reactListeners$" + yt, bc = "__reactHandles$" + yt;
  function Gn(e) {
    var n = e[mn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[wn] || t[mn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Gu(e); e !== null; ) {
          if (t = e[mn]) return t;
          e = Gu(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function rr(e) {
    return e = e[mn] || e[wn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function gt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[tr] || null;
  }
  var ko = [], wt = -1;
  function Mn(e) {
    return { current: e };
  }
  function q(e) {
    0 > wt || (e.current = ko[wt], ko[wt] = null, wt--);
  }
  function Z(e, n) {
    wt++, ko[wt] = e.current, e.current = n;
  }
  var Fn = {}, Ce = Mn(Fn), De = Mn(!1), Zn = Fn;
  function St(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in t) l[o] = n[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Me(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qr() {
    q(De), q(Ce);
  }
  function Zu(e, n, t) {
    if (Ce.current !== Fn) throw Error(m(168));
    Z(Ce, n), Z(De, t);
  }
  function Ju(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, G(e) || "Unknown", l));
    return C({}, t, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, Zn = Ce.current, Z(Ce, e), Z(De, De.current), !0;
  }
  function qu(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t ? (e = Ju(e, n, Zn), r.__reactInternalMemoizedMergedChildContext = e, q(De), q(Ce), Z(Ce, e)) : q(De), Z(De, t);
  }
  var Sn = null, Yr = !1, Eo = !1;
  function bu(e) {
    Sn === null ? Sn = [e] : Sn.push(e);
  }
  function ef(e) {
    Yr = !0, bu(e);
  }
  function jn() {
    if (!Eo && Sn !== null) {
      Eo = !0;
      var e = 0, n = K;
      try {
        var t = Sn;
        for (K = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Sn = null, Yr = !1;
      } catch (l) {
        throw Sn !== null && (Sn = Sn.slice(e + 1)), nu(Hl, jn), l;
      } finally {
        K = n, Eo = !1;
      }
    }
    return null;
  }
  var kt = [], Et = 0, Xr = null, Gr = 0, Ge = [], Ze = 0, Jn = null, kn = 1, En = "";
  function qn(e, n) {
    kt[Et++] = Gr, kt[Et++] = Xr, Xr = e, Gr = n;
  }
  function es(e, n, t) {
    Ge[Ze++] = kn, Ge[Ze++] = En, Ge[Ze++] = Jn, Jn = e;
    var r = kn;
    e = En;
    var l = 32 - rn(r) - 1;
    r &= ~(1 << l), t += 1;
    var o = 32 - rn(n) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, kn = 1 << 32 - rn(n) + l | t << l | r, En = o + e;
    } else kn = 1 << o | t << l | r, En = e;
  }
  function _o(e) {
    e.return !== null && (qn(e, 1), es(e, 1, 0));
  }
  function Co(e) {
    for (; e === Xr; ) Xr = kt[--Et], kt[Et] = null, Gr = kt[--Et], kt[Et] = null;
    for (; e === Jn; ) Jn = Ge[--Ze], Ge[Ze] = null, En = Ge[--Ze], Ge[Ze] = null, kn = Ge[--Ze], Ge[Ze] = null;
  }
  var We = null, Qe = null, te = !1, on = null;
  function ns(e, n) {
    var t = en(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function ts(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, We = e, Qe = Dn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, We = e, Qe = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Jn !== null ? { id: kn, overflow: En } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = en(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, We = e, Qe = null, !0) : !1;
      default:
        return !1;
    }
  }
  function xo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function No(e) {
    if (te) {
      var n = Qe;
      if (n) {
        var t = n;
        if (!ts(e, n)) {
          if (xo(e)) throw Error(m(418));
          n = Dn(t.nextSibling);
          var r = We;
          n && ts(e, n) ? ns(r, t) : (e.flags = e.flags & -4097 | 2, te = !1, We = e);
        }
      } else {
        if (xo(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, te = !1, We = e;
      }
    }
  }
  function rs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    We = e;
  }
  function Zr(e) {
    if (e !== We) return !1;
    if (!te) return rs(e), te = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !yo(e.type, e.memoizedProps)), n && (n = Qe)) {
      if (xo(e)) throw ls(), Error(m(418));
      for (; n; ) ns(e, n), n = Dn(n.nextSibling);
    }
    if (rs(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Qe = Dn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Qe = null;
      }
    } else Qe = We ? Dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ls() {
    for (var e = Qe; e; ) e = Dn(e.nextSibling);
  }
  function _t() {
    Qe = We = null, te = !1;
  }
  function Po(e) {
    on === null ? on = [e] : on.push(e);
  }
  var nf = _e.ReactCurrentBatchConfig;
  function lr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, o = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
          var u = l.refs;
          i === null ? delete u[o] : u[o] = i;
        }, n._stringRef = o, n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Jr(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function os(e) {
    var n = e._init;
    return n(e._payload);
  }
  function is(e) {
    function n(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
      }
    }
    function t(f, a) {
      if (!e) return null;
      for (; a !== null; ) n(f, a), a = a.sibling;
      return null;
    }
    function r(f, a) {
      for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
      return f;
    }
    function l(f, a) {
      return f = Qn(f, a), f.index = 0, f.sibling = null, f;
    }
    function o(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, a, d, S) {
      return a === null || a.tag !== 6 ? (a = gi(d, f.mode, S), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, S) {
      var P = d.type;
      return P === Ie ? y(f, a, d.props.children, S, d.key) : a !== null && (a.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Oe && os(P) === a.type) ? (S = l(a, d.props), S.ref = lr(f, a, d), S.return = f, S) : (S = kl(d.type, d.key, d.props, null, f.mode, S), S.ref = lr(f, a, d), S.return = f, S);
    }
    function p(f, a, d, S) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = wi(d, f.mode, S), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, S, P) {
      return a === null || a.tag !== 7 ? (a = it(d, f.mode, S, P), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function w(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = gi("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case nn:
            return d = kl(a.type, a.key, a.props, null, f.mode, d), d.ref = lr(f, null, a), d.return = f, d;
          case Te:
            return a = wi(a, f.mode, d), a.return = f, a;
          case Oe:
            var S = a._init;
            return w(f, S(a._payload), d);
        }
        if (Ot(a) || R(a)) return a = it(a, f.mode, d, null), a.return = f, a;
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, S) {
      var P = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return P !== null ? null : u(f, a, "" + d, S);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case nn:
            return d.key === P ? s(f, a, d, S) : null;
          case Te:
            return d.key === P ? p(f, a, d, S) : null;
          case Oe:
            return P = d._init, h(
              f,
              a,
              P(d._payload),
              S
            );
        }
        if (Ot(d) || R(d)) return P !== null ? null : y(f, a, d, S, null);
        Jr(f, d);
      }
      return null;
    }
    function E(f, a, d, S, P) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return f = f.get(d) || null, u(a, f, "" + S, P);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case nn:
            return f = f.get(S.key === null ? d : S.key) || null, s(a, f, S, P);
          case Te:
            return f = f.get(S.key === null ? d : S.key) || null, p(a, f, S, P);
          case Oe:
            var z = S._init;
            return E(f, a, d, z(S._payload), P);
        }
        if (Ot(S) || R(S)) return f = f.get(d) || null, y(a, f, S, P, null);
        Jr(a, S);
      }
      return null;
    }
    function x(f, a, d, S) {
      for (var P = null, z = null, T = a, I = a = 0, ge = null; T !== null && I < d.length; I++) {
        T.index > I ? (ge = T, T = null) : ge = T.sibling;
        var $ = h(f, T, d[I], S);
        if ($ === null) {
          T === null && (T = ge);
          break;
        }
        e && T && $.alternate === null && n(f, T), a = o($, a, I), z === null ? P = $ : z.sibling = $, z = $, T = ge;
      }
      if (I === d.length) return t(f, T), te && qn(f, I), P;
      if (T === null) {
        for (; I < d.length; I++) T = w(f, d[I], S), T !== null && (a = o(T, a, I), z === null ? P = T : z.sibling = T, z = T);
        return te && qn(f, I), P;
      }
      for (T = r(f, T); I < d.length; I++) ge = E(T, f, I, d[I], S), ge !== null && (e && ge.alternate !== null && T.delete(ge.key === null ? I : ge.key), a = o(ge, a, I), z === null ? P = ge : z.sibling = ge, z = ge);
      return e && T.forEach(function(Kn) {
        return n(f, Kn);
      }), te && qn(f, I), P;
    }
    function N(f, a, d, S) {
      var P = R(d);
      if (typeof P != "function") throw Error(m(150));
      if (d = P.call(d), d == null) throw Error(m(151));
      for (var z = P = null, T = a, I = a = 0, ge = null, $ = d.next(); T !== null && !$.done; I++, $ = d.next()) {
        T.index > I ? (ge = T, T = null) : ge = T.sibling;
        var Kn = h(f, T, $.value, S);
        if (Kn === null) {
          T === null && (T = ge);
          break;
        }
        e && T && Kn.alternate === null && n(f, T), a = o(Kn, a, I), z === null ? P = Kn : z.sibling = Kn, z = Kn, T = ge;
      }
      if ($.done) return t(
        f,
        T
      ), te && qn(f, I), P;
      if (T === null) {
        for (; !$.done; I++, $ = d.next()) $ = w(f, $.value, S), $ !== null && (a = o($, a, I), z === null ? P = $ : z.sibling = $, z = $);
        return te && qn(f, I), P;
      }
      for (T = r(f, T); !$.done; I++, $ = d.next()) $ = E(T, f, I, $.value, S), $ !== null && (e && $.alternate !== null && T.delete($.key === null ? I : $.key), a = o($, a, I), z === null ? P = $ : z.sibling = $, z = $);
      return e && T.forEach(function(Df) {
        return n(f, Df);
      }), te && qn(f, I), P;
    }
    function ce(f, a, d, S) {
      if (typeof d == "object" && d !== null && d.type === Ie && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case nn:
            e: {
              for (var P = d.key, z = a; z !== null; ) {
                if (z.key === P) {
                  if (P = d.type, P === Ie) {
                    if (z.tag === 7) {
                      t(f, z.sibling), a = l(z, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (z.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Oe && os(P) === z.type) {
                    t(f, z.sibling), a = l(z, d.props), a.ref = lr(f, z, d), a.return = f, f = a;
                    break e;
                  }
                  t(f, z);
                  break;
                } else n(f, z);
                z = z.sibling;
              }
              d.type === Ie ? (a = it(d.props.children, f.mode, S, d.key), a.return = f, f = a) : (S = kl(d.type, d.key, d.props, null, f.mode, S), S.ref = lr(f, a, d), S.return = f, f = S);
            }
            return i(f);
          case Te:
            e: {
              for (z = d.key; a !== null; ) {
                if (a.key === z) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
                else n(f, a);
                a = a.sibling;
              }
              a = wi(d, f.mode, S), a.return = f, f = a;
            }
            return i(f);
          case Oe:
            return z = d._init, ce(f, a, z(d._payload), S);
        }
        if (Ot(d)) return x(f, a, d, S);
        if (R(d)) return N(f, a, d, S);
        Jr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = gi(d, f.mode, S), a.return = f, f = a), i(f)) : t(f, a);
    }
    return ce;
  }
  var Ct = is(!0), us = is(!1), qr = Mn(null), br = null, xt = null, zo = null;
  function To() {
    zo = xt = br = null;
  }
  function Lo(e) {
    var n = qr.current;
    q(qr), e._currentValue = n;
  }
  function Ro(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function Nt(e, n) {
    br = e, zo = xt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (Fe = !0), e.firstContext = null);
  }
  function Je(e) {
    var n = e._currentValue;
    if (zo !== e) if (e = { context: e, memoizedValue: n, next: null }, xt === null) {
      if (br === null) throw Error(m(308));
      xt = e, br.dependencies = { lanes: 0, firstContext: e };
    } else xt = xt.next = e;
    return n;
  }
  var bn = null;
  function Io(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function ss(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Io(n)) : (t.next = l.next, l.next = t), n.interleaved = t, _n(e, r);
  }
  function _n(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Un = !1;
  function Oo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function as(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Cn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function An(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, A & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, _n(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Io(r)) : (n.next = l.next, l.next = n), r.interleaved = n, _n(e, t);
  }
  function el(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Kl(e, t);
    }
  }
  function cs(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, o = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          o === null ? l = o = i : o = o.next = i, t = t.next;
        } while (t !== null);
        o === null ? l = o = n : o = o.next = n;
      } else l = o = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function nl(e, n, t, r) {
    var l = e.updateQueue;
    Un = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u, p = s.next;
      s.next = null, i === null ? o = p : i.next = p, i = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, u = y.lastBaseUpdate, u !== i && (u === null ? y.firstBaseUpdate = p : u.next = p, y.lastBaseUpdate = s));
    }
    if (o !== null) {
      var w = l.baseState;
      i = 0, y = p = s = null, u = o;
      do {
        var h = u.lane, E = u.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: E,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var x = e, N = u;
            switch (h = n, E = t, N.tag) {
              case 1:
                if (x = N.payload, typeof x == "function") {
                  w = x.call(E, w, h);
                  break e;
                }
                w = x;
                break e;
              case 3:
                x.flags = x.flags & -65537 | 128;
              case 0:
                if (x = N.payload, h = typeof x == "function" ? x.call(E, w, h) : x, h == null) break e;
                w = C({}, w, h);
                break e;
              case 2:
                Un = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u));
        } else E = { eventTime: E, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, y === null ? (p = y = E, s = w) : y = y.next = E, i |= h;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = w), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          i |= l.lane, l = l.next;
        while (l !== n);
      } else o === null && (l.shared.lanes = 0);
      tt |= i, e.lanes = i, e.memoizedState = w;
    }
  }
  function fs(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var or = {}, hn = Mn(or), ir = Mn(or), ur = Mn(or);
  function et(e) {
    if (e === or) throw Error(m(174));
    return e;
  }
  function Do(e, n) {
    switch (Z(ur, n), Z(ir, e), Z(hn, or), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Dl(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Dl(n, e);
    }
    q(hn), Z(hn, n);
  }
  function Pt() {
    q(hn), q(ir), q(ur);
  }
  function ds(e) {
    et(ur.current);
    var n = et(hn.current), t = Dl(n, e.type);
    n !== t && (Z(ir, e), Z(hn, t));
  }
  function Mo(e) {
    ir.current === e && (q(hn), q(ir));
  }
  var re = Mn(0);
  function tl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Fo = [];
  function jo() {
    for (var e = 0; e < Fo.length; e++) Fo[e]._workInProgressVersionPrimary = null;
    Fo.length = 0;
  }
  var rl = _e.ReactCurrentDispatcher, Uo = _e.ReactCurrentBatchConfig, nt = 0, le = null, me = null, ve = null, ll = !1, sr = !1, ar = 0, tf = 0;
  function xe() {
    throw Error(m(321));
  }
  function Ao(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!ln(e[t], n[t])) return !1;
    return !0;
  }
  function Vo(e, n, t, r, l, o) {
    if (nt = o, le = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, rl.current = e === null || e.memoizedState === null ? uf : sf, e = t(r, l), sr) {
      o = 0;
      do {
        if (sr = !1, ar = 0, 25 <= o) throw Error(m(301));
        o += 1, ve = me = null, n.updateQueue = null, rl.current = af, e = t(r, l);
      } while (sr);
    }
    if (rl.current = ul, n = me !== null && me.next !== null, nt = 0, ve = me = le = null, ll = !1, n) throw Error(m(300));
    return e;
  }
  function Bo() {
    var e = ar !== 0;
    return ar = 0, e;
  }
  function vn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ve === null ? le.memoizedState = ve = e : ve = ve.next = e, ve;
  }
  function qe() {
    if (me === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var n = ve === null ? le.memoizedState : ve.next;
    if (n !== null) ve = n, me = e;
    else {
      if (e === null) throw Error(m(310));
      me = e, e = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, ve === null ? le.memoizedState = ve = e : ve = ve.next = e;
    }
    return ve;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function $o(e) {
    var n = qe(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = me, l = r.baseQueue, o = t.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, t.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var u = i = null, s = null, p = o;
      do {
        var y = p.lane;
        if ((nt & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var w = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (u = s = w, i = r) : s = s.next = w, le.lanes |= y, tt |= y;
        }
        p = p.next;
      } while (p !== null && p !== o);
      s === null ? i = r : s.next = u, ln(r, n.memoizedState) || (Fe = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, le.lanes |= o, tt |= o, l = l.next;
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Ho(e) {
    var n = qe(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, o = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      ln(o, n.memoizedState) || (Fe = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
    }
    return [o, r];
  }
  function ps() {
  }
  function ms(e, n) {
    var t = le, r = qe(), l = n(), o = !ln(r.memoizedState, l);
    if (o && (r.memoizedState = l, Fe = !0), r = r.queue, Wo(ys.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || ve !== null && ve.memoizedState.tag & 1) {
      if (t.flags |= 2048, fr(9, vs.bind(null, t, r, l, n), void 0, null), ye === null) throw Error(m(349));
      nt & 30 || hs(t, n, l);
    }
    return l;
  }
  function hs(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = le.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, le.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function vs(e, n, t, r) {
    n.value = t, n.getSnapshot = r, gs(n) && ws(e);
  }
  function ys(e, n, t) {
    return t(function() {
      gs(n) && ws(e);
    });
  }
  function gs(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !ln(e, t);
    } catch {
      return !0;
    }
  }
  function ws(e) {
    var n = _n(e, 1);
    n !== null && cn(n, e, 1, -1);
  }
  function Ss(e) {
    var n = vn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, n.queue = e, e = e.dispatch = of.bind(null, le, e), [n.memoizedState, e];
  }
  function fr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = le.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, le.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function ks() {
    return qe().memoizedState;
  }
  function ol(e, n, t, r) {
    var l = vn();
    le.flags |= e, l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function il(e, n, t, r) {
    var l = qe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (me !== null) {
      var i = me.memoizedState;
      if (o = i.destroy, r !== null && Ao(r, i.deps)) {
        l.memoizedState = fr(n, t, o, r);
        return;
      }
    }
    le.flags |= e, l.memoizedState = fr(1 | n, t, o, r);
  }
  function Es(e, n) {
    return ol(8390656, 8, e, n);
  }
  function Wo(e, n) {
    return il(2048, 8, e, n);
  }
  function _s(e, n) {
    return il(4, 2, e, n);
  }
  function Cs(e, n) {
    return il(4, 4, e, n);
  }
  function xs(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function Ns(e, n, t) {
    return t = t != null ? t.concat([e]) : null, il(4, 4, xs.bind(null, n, e), t);
  }
  function Qo() {
  }
  function Ps(e, n) {
    var t = qe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Ao(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function zs(e, n) {
    var t = qe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Ao(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function Ts(e, n, t) {
    return nt & 21 ? (ln(t, n) || (t = ou(), le.lanes |= t, tt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = t);
  }
  function rf(e, n) {
    var t = K;
    K = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = Uo.transition;
    Uo.transition = {};
    try {
      e(!1), n();
    } finally {
      K = t, Uo.transition = r;
    }
  }
  function Ls() {
    return qe().memoizedState;
  }
  function lf(e, n, t) {
    var r = Hn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Rs(e)) Is(n, t);
    else if (t = ss(e, n, t, r), t !== null) {
      var l = Re();
      cn(t, e, r, l), Os(t, n, r);
    }
  }
  function of(e, n, t) {
    var r = Hn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Rs(e)) Is(n, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
        var i = n.lastRenderedState, u = o(i, t);
        if (l.hasEagerState = !0, l.eagerState = u, ln(u, i)) {
          var s = n.interleaved;
          s === null ? (l.next = l, Io(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      t = ss(e, n, l, r), t !== null && (l = Re(), cn(t, e, r, l), Os(t, n, r));
    }
  }
  function Rs(e) {
    var n = e.alternate;
    return e === le || n !== null && n === le;
  }
  function Is(e, n) {
    sr = ll = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Os(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Kl(e, t);
    }
  }
  var ul = { readContext: Je, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useInsertionEffect: xe, useLayoutEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useMutableSource: xe, useSyncExternalStore: xe, useId: xe, unstable_isNewReconciler: !1 }, uf = { readContext: Je, useCallback: function(e, n) {
    return vn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Je, useEffect: Es, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ol(
      4194308,
      4,
      xs.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return ol(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return ol(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = vn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = vn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = lf.bind(null, le, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = vn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: Ss, useDebugValue: Qo, useDeferredValue: function(e) {
    return vn().memoizedState = e;
  }, useTransition: function() {
    var e = Ss(!1), n = e[0];
    return e = rf.bind(null, e[1]), vn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = le, l = vn();
    if (te) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else {
      if (t = n(), ye === null) throw Error(m(349));
      nt & 30 || hs(r, n, t);
    }
    l.memoizedState = t;
    var o = { value: t, getSnapshot: n };
    return l.queue = o, Es(ys.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, fr(9, vs.bind(null, r, o, t, n), void 0, null), t;
  }, useId: function() {
    var e = vn(), n = ye.identifierPrefix;
    if (te) {
      var t = En, r = kn;
      t = (r & ~(1 << 32 - rn(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = ar++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = tf++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, sf = {
    readContext: Je,
    useCallback: Ps,
    useContext: Je,
    useEffect: Wo,
    useImperativeHandle: Ns,
    useInsertionEffect: _s,
    useLayoutEffect: Cs,
    useMemo: zs,
    useReducer: $o,
    useRef: ks,
    useState: function() {
      return $o(cr);
    },
    useDebugValue: Qo,
    useDeferredValue: function(e) {
      var n = qe();
      return Ts(n, me.memoizedState, e);
    },
    useTransition: function() {
      var e = $o(cr)[0], n = qe().memoizedState;
      return [e, n];
    },
    useMutableSource: ps,
    useSyncExternalStore: ms,
    useId: Ls,
    unstable_isNewReconciler: !1
  }, af = { readContext: Je, useCallback: Ps, useContext: Je, useEffect: Wo, useImperativeHandle: Ns, useInsertionEffect: _s, useLayoutEffect: Cs, useMemo: zs, useReducer: Ho, useRef: ks, useState: function() {
    return Ho(cr);
  }, useDebugValue: Qo, useDeferredValue: function(e) {
    var n = qe();
    return me === null ? n.memoizedState = e : Ts(n, me.memoizedState, e);
  }, useTransition: function() {
    var e = Ho(cr)[0], n = qe().memoizedState;
    return [e, n];
  }, useMutableSource: ps, useSyncExternalStore: ms, useId: Ls, unstable_isNewReconciler: !1 };
  function un(e, n) {
    if (e && e.defaultProps) {
      n = C({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Ko(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : C({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var sl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = Re(), l = Hn(e), o = Cn(r, l);
    o.payload = n, t != null && (o.callback = t), n = An(e, o, l), n !== null && (cn(n, e, l, r), el(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Re(), l = Hn(e), o = Cn(r, l);
    o.tag = 1, o.payload = n, t != null && (o.callback = t), n = An(e, o, l), n !== null && (cn(n, e, l, r), el(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Re(), r = Hn(e), l = Cn(t, r);
    l.tag = 2, n != null && (l.callback = n), n = An(e, l, r), n !== null && (cn(n, e, r, t), el(n, e, r));
  } };
  function Ds(e, n, t, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Jt(t, r) || !Jt(l, o) : !0;
  }
  function Ms(e, n, t) {
    var r = !1, l = Fn, o = n.contextType;
    return typeof o == "object" && o !== null ? o = Je(o) : (l = Me(n) ? Zn : Ce.current, r = n.contextTypes, o = (r = r != null) ? St(e, l) : Fn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
  }
  function Fs(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sl.enqueueReplaceState(n, n.state, null);
  }
  function Yo(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, Oo(e);
    var o = n.contextType;
    typeof o == "object" && o !== null ? l.context = Je(o) : (o = Me(n) ? Zn : Ce.current, l.context = St(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Ko(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && sl.enqueueReplaceState(l, l.state, null), nl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zt(e, n) {
    try {
      var t = "", r = n;
      do
        t += V(r), r = r.return;
      while (r);
      var l = t;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Xo(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Go(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var cf = typeof WeakMap == "function" ? WeakMap : Map;
  function js(e, n, t) {
    t = Cn(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      hl || (hl = !0, ci = r), Go(e, n);
    }, t;
  }
  function Us(e, n, t) {
    t = Cn(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        Go(e, n);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      Go(e, n), typeof r != "function" && (Bn === null ? Bn = /* @__PURE__ */ new Set([this]) : Bn.add(this));
      var i = n.stack;
      this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
    }), t;
  }
  function As(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new cf();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = Cf.bind(null, e, n, t), n.then(e, e));
  }
  function Vs(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Bs(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Cn(-1, 1), n.tag = 2, An(t, n, 1))), t.lanes |= 1), e);
  }
  var ff = _e.ReactCurrentOwner, Fe = !1;
  function Le(e, n, t, r) {
    n.child = e === null ? us(n, null, t, r) : Ct(n, e.child, t, r);
  }
  function $s(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return Nt(n, l), r = Vo(e, n, t, r, o, l), t = Bo(), e !== null && !Fe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, xn(e, n, l)) : (te && t && _o(n), n.flags |= 1, Le(e, n, r, l), n.child);
  }
  function Hs(e, n, t, r, l) {
    if (e === null) {
      var o = t.type;
      return typeof o == "function" && !yi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Ws(e, n, o, r, l)) : (e = kl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Jt, t(i, r) && e.ref === n.ref) return xn(e, n, l);
    }
    return n.flags |= 1, e = Qn(o, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Ws(e, n, t, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Jt(o, r) && e.ref === n.ref) if (Fe = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Fe = !0);
      else return n.lanes = e.lanes, xn(e, n, l);
    }
    return Zo(e, n, t, r, l);
  }
  function Qs(e, n, t) {
    var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Z(Lt, Ke), Ke |= t;
    else {
      if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, Z(Lt, Ke), Ke |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, Z(Lt, Ke), Ke |= r;
    }
    else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, Z(Lt, Ke), Ke |= r;
    return Le(e, n, l, t), n.child;
  }
  function Ks(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Zo(e, n, t, r, l) {
    var o = Me(t) ? Zn : Ce.current;
    return o = St(n, o), Nt(n, l), t = Vo(e, n, t, r, o, l), r = Bo(), e !== null && !Fe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, xn(e, n, l)) : (te && r && _o(n), n.flags |= 1, Le(e, n, t, l), n.child);
  }
  function Ys(e, n, t, r, l) {
    if (Me(t)) {
      var o = !0;
      Kr(n);
    } else o = !1;
    if (Nt(n, l), n.stateNode === null) cl(e, n), Ms(n, t, r), Yo(n, t, r, l), r = !0;
    else if (e === null) {
      var i = n.stateNode, u = n.memoizedProps;
      i.props = u;
      var s = i.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = Je(p) : (p = Me(t) ? Zn : Ce.current, p = St(n, p));
      var y = t.getDerivedStateFromProps, w = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== p) && Fs(n, i, r, p), Un = !1;
      var h = n.memoizedState;
      i.state = h, nl(n, r, i, l), s = n.memoizedState, u !== r || h !== s || De.current || Un ? (typeof y == "function" && (Ko(n, t, y, r), s = n.memoizedState), (u = Un || Ds(n, t, u, r, h, s, p)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = p, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      i = n.stateNode, as(e, n), u = n.memoizedProps, p = n.type === n.elementType ? u : un(n.type, u), i.props = p, w = n.pendingProps, h = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Je(s) : (s = Me(t) ? Zn : Ce.current, s = St(n, s));
      var E = t.getDerivedStateFromProps;
      (y = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== w || h !== s) && Fs(n, i, r, s), Un = !1, h = n.memoizedState, i.state = h, nl(n, r, i, l);
      var x = n.memoizedState;
      u !== w || h !== x || De.current || Un ? (typeof E == "function" && (Ko(n, t, E, r), x = n.memoizedState), (p = Un || Ds(n, t, p, r, h, x, s) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = x), i.props = r, i.state = x, i.context = s, r = p) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Jo(e, n, t, r, o, l);
  }
  function Jo(e, n, t, r, l, o) {
    Ks(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && qu(n, t, !1), xn(e, n, o);
    r = n.stateNode, ff.current = n;
    var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && i ? (n.child = Ct(n, e.child, null, o), n.child = Ct(n, null, u, o)) : Le(e, n, u, o), n.memoizedState = r.state, l && qu(n, t, !0), n.child;
  }
  function Xs(e) {
    var n = e.stateNode;
    n.pendingContext ? Zu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Zu(e, n.context, !1), Do(e, n.containerInfo);
  }
  function Gs(e, n, t, r, l) {
    return _t(), Po(l), n.flags |= 256, Le(e, n, t, r), n.child;
  }
  var qo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zs(e, n, t) {
    var r = n.pendingProps, l = re.current, o = !1, i = (n.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Z(re, l & 1), e === null)
      return No(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = El(i, r, 0, null), e = it(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = bo(t), n.memoizedState = qo, e) : ei(n, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return df(e, n, i, r, u, l, t);
    if (o) {
      o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = Qn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Qn(u, o) : (o = it(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? bo(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = qo, r;
    }
    return o = e.child, e = o.sibling, r = Qn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function ei(e, n) {
    return n = El({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function al(e, n, t, r) {
    return r !== null && Po(r), Ct(n, e.child, null, t), e = ei(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function df(e, n, t, r, l, o, i) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Xo(Error(m(422))), al(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), o = it(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && Ct(n, e.child, null, i), n.child.memoizedState = bo(i), n.memoizedState = qo, o);
    if (!(n.mode & 1)) return al(e, n, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, o = Error(m(419)), r = Xo(o, r, void 0), al(e, n, i, r);
    }
    if (u = (i & e.childLanes) !== 0, Fe || u) {
      if (r = ye, r !== null) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, _n(e, l), cn(r, e, l, -1));
      }
      return vi(), r = Xo(Error(m(421))), al(e, n, i, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = xf.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Qe = Dn(l.nextSibling), We = n, te = !0, on = null, e !== null && (Ge[Ze++] = kn, Ge[Ze++] = En, Ge[Ze++] = Jn, kn = e.id, En = e.overflow, Jn = n), n = ei(n, r.children), n.flags |= 4096, n);
  }
  function Js(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Ro(e.return, n, t);
  }
  function ni(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
  }
  function qs(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, o = r.tail;
    if (Le(e, n, r.children, t), r = re.current, r & 2) r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Js(e, t, n);
        else if (e.tag === 19) Js(e, t, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (Z(re, r), !(n.mode & 1)) n.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && tl(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), ni(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && tl(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        ni(n, !0, t, null, o);
        break;
      case "together":
        ni(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function cl(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function xn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), tt |= n.lanes, !(t & n.childLanes)) return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = Qn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Qn(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function pf(e, n, t) {
    switch (n.tag) {
      case 3:
        Xs(n), _t();
        break;
      case 5:
        ds(n);
        break;
      case 1:
        Me(n.type) && Kr(n);
        break;
      case 4:
        Do(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        Z(qr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (Z(re, re.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Zs(e, n, t) : (Z(re, re.current & 1), e = xn(e, n, t), e !== null ? e.sibling : null);
        Z(re, re.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r) return qs(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Z(re, re.current), r) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Qs(e, n, t);
    }
    return xn(e, n, t);
  }
  var bs, ti, ea, na;
  bs = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }, ti = function() {
  }, ea = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, et(hn.current);
      var o = null;
      switch (t) {
        case "input":
          l = Ll(e, l), r = Ll(e, r), o = [];
          break;
        case "select":
          l = C({}, l, { value: void 0 }), r = C({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Ol(e, l), r = Ol(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
      }
      Ml(t, r);
      var i;
      t = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var u = l[p];
        for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (b.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (u = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== u && (s != null || u != null)) if (p === "style") if (u) {
          for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
          for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
        } else t || (o || (o = []), o.push(
          p,
          t
        )), t = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (b.hasOwnProperty(p) ? (s != null && p === "onScroll" && J("scroll", e), o || u === s || (o = [])) : (o = o || []).push(p, s));
      }
      t && (o = o || []).push("style", t);
      var p = o;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, na = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function dr(e, n) {
    if (!te) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ne(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function mf(e, n, t) {
    var r = n.pendingProps;
    switch (Co(n), n.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ne(n), null;
      case 1:
        return Me(n.type) && Qr(), Ne(n), null;
      case 3:
        return r = n.stateNode, Pt(), q(De), q(Ce), jo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, on !== null && (pi(on), on = null))), ti(e, n), Ne(n), null;
      case 5:
        Mo(n);
        var l = et(ur.current);
        if (t = n.type, e !== null && n.stateNode != null) ea(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return Ne(n), null;
          }
          if (e = et(hn.current), Zr(n)) {
            r = n.stateNode, t = n.type;
            var o = n.memoizedProps;
            switch (r[mn] = n, r[tr] = o, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                J("cancel", r), J("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bt.length; l++) J(bt[l], r);
                break;
              case "source":
                J("error", r);
                break;
              case "img":
              case "image":
              case "link":
                J(
                  "error",
                  r
                ), J("load", r);
                break;
              case "details":
                J("toggle", r);
                break;
              case "input":
                Mi(r, o), J("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, J("invalid", r);
                break;
              case "textarea":
                Ui(r, o), J("invalid", r);
            }
            Ml(t, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && $r(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && $r(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : b.hasOwnProperty(i) && u != null && i === "onScroll" && J("scroll", r);
            }
            switch (t) {
              case "input":
                wr(r), ji(r, o, !0);
                break;
              case "textarea":
                wr(r), Vi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Hr);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bi(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[mn] = n, e[tr] = r, bs(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (i = Fl(t, r), t) {
                case "dialog":
                  J("cancel", e), J("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  J("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bt.length; l++) J(bt[l], e);
                  l = r;
                  break;
                case "source":
                  J("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  J(
                    "error",
                    e
                  ), J("load", e), l = r;
                  break;
                case "details":
                  J("toggle", e), l = r;
                  break;
                case "input":
                  Mi(e, r), l = Ll(e, r), J("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = C({}, r, { value: void 0 }), J("invalid", e);
                  break;
                case "textarea":
                  Ui(e, r), l = Ol(e, r), J("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ml(t, l), u = l;
              for (o in u) if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Wi(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && $i(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Dt(e, s) : typeof s == "number" && Dt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (b.hasOwnProperty(o) ? s != null && o === "onScroll" && J("scroll", e) : s != null && Ee(e, o, s, i));
              }
              switch (t) {
                case "input":
                  wr(e), ji(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Vi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? st(e, !!r.multiple, o, !1) : r.defaultValue != null && st(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hr);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return Ne(n), null;
      case 6:
        if (e && n.stateNode != null) na(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (t = et(ur.current), et(hn.current), Zr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[mn] = n, (o = r.nodeValue !== t) && (e = We, e !== null)) switch (e.tag) {
              case 3:
                $r(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && $r(r.nodeValue, t, (e.mode & 1) !== 0);
            }
            o && (n.flags |= 4);
          } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[mn] = n, n.stateNode = r;
        }
        return Ne(n), null;
      case 13:
        if (q(re), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (te && Qe !== null && n.mode & 1 && !(n.flags & 128)) ls(), _t(), n.flags |= 98560, o = !1;
          else if (o = Zr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(m(318));
              if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(m(317));
              o[mn] = n;
            } else _t(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            Ne(n), o = !1;
          } else on !== null && (pi(on), on = null), o = !0;
          if (!o) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || re.current & 1 ? he === 0 && (he = 3) : vi())), n.updateQueue !== null && (n.flags |= 4), Ne(n), null);
      case 4:
        return Pt(), ti(e, n), e === null && er(n.stateNode.containerInfo), Ne(n), null;
      case 10:
        return Lo(n.type._context), Ne(n), null;
      case 17:
        return Me(n.type) && Qr(), Ne(n), null;
      case 19:
        if (q(re), o = n.memoizedState, o === null) return Ne(n), null;
        if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) dr(o, !1);
        else {
          if (he !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
            if (i = tl(e), i !== null) {
              for (n.flags |= 128, dr(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return Z(re, re.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          o.tail !== null && ae() > Rt && (n.flags |= 128, r = !0, dr(o, !1), n.lanes = 4194304);
        }
        else {
          if (!r) if (e = tl(i), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), dr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !te) return Ne(n), null;
          } else 2 * ae() - o.renderingStartTime > Rt && t !== 1073741824 && (n.flags |= 128, r = !0, dr(o, !1), n.lanes = 4194304);
          o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
        }
        return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = ae(), n.sibling = null, t = re.current, Z(re, r ? t & 1 | 2 : t & 1), n) : (Ne(n), null);
      case 22:
      case 23:
        return hi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Ke & 1073741824 && (Ne(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ne(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function hf(e, n) {
    switch (Co(n), n.tag) {
      case 1:
        return Me(n.type) && Qr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Pt(), q(De), q(Ce), jo(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Mo(n), null;
      case 13:
        if (q(re), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(m(340));
          _t();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return q(re), null;
      case 4:
        return Pt(), null;
      case 10:
        return Lo(n.type._context), null;
      case 22:
      case 23:
        return hi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1, Pe = !1, vf = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
  function Tt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (r) {
      se(e, n, r);
    }
    else t.current = null;
  }
  function ri(e, n, t) {
    try {
      t();
    } catch (r) {
      se(e, n, r);
    }
  }
  var ta = !1;
  function yf(e, n) {
    if (ho = Rr, e = Du(), io(e)) {
      if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var i = 0, u = -1, s = -1, p = 0, y = 0, w = e, h = null;
          n: for (; ; ) {
            for (var E; w !== t || l !== 0 && w.nodeType !== 3 || (u = i + l), w !== o || r !== 0 && w.nodeType !== 3 || (s = i + r), w.nodeType === 3 && (i += w.nodeValue.length), (E = w.firstChild) !== null; )
              h = w, w = E;
            for (; ; ) {
              if (w === e) break n;
              if (h === t && ++p === l && (u = i), h === o && ++y === r && (s = i), (E = w.nextSibling) !== null) break;
              w = h, h = w.parentNode;
            }
            w = E;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (vo = { focusedElem: e, selectionRange: t }, Rr = !1, _ = n; _ !== null; ) if (n = _, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, _ = e;
    else for (; _ !== null; ) {
      n = _;
      try {
        var x = n.alternate;
        if (n.flags & 1024) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (x !== null) {
              var N = x.memoizedProps, ce = x.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? N : un(n.type, N), ce);
              f.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var d = n.stateNode.containerInfo;
            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (S) {
        se(n, n.return, S);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, _ = e;
        break;
      }
      _ = n.return;
    }
    return x = ta, ta = !1, x;
  }
  function pr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && ri(n, t, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function li(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function ra(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, ra(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[mn], delete n[tr], delete n[So], delete n[qc], delete n[bc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function la(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function oa(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || la(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function oi(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Hr));
    else if (r !== 4 && (e = e.child, e !== null)) for (oi(e, n, t), e = e.sibling; e !== null; ) oi(e, n, t), e = e.sibling;
  }
  function ii(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ii(e, n, t), e = e.sibling; e !== null; ) ii(e, n, t), e = e.sibling;
  }
  var Se = null, sn = !1;
  function Vn(e, n, t) {
    for (t = t.child; t !== null; ) ia(e, n, t), t = t.sibling;
  }
  function ia(e, n, t) {
    if (pn && typeof pn.onCommitFiberUnmount == "function") try {
      pn.onCommitFiberUnmount(xr, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        Pe || Tt(t, n);
      case 6:
        var r = Se, l = sn;
        Se = null, Vn(e, n, t), Se = r, sn = l, Se !== null && (sn ? (e = Se, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Se.removeChild(t.stateNode));
        break;
      case 18:
        Se !== null && (sn ? (e = Se, t = t.stateNode, e.nodeType === 8 ? wo(e.parentNode, t) : e.nodeType === 1 && wo(e, t), Qt(e)) : wo(Se, t.stateNode));
        break;
      case 4:
        r = Se, l = sn, Se = t.stateNode.containerInfo, sn = !0, Vn(e, n, t), Se = r, sn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pe && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && ri(t, n, i), l = l.next;
          } while (l !== r);
        }
        Vn(e, n, t);
        break;
      case 1:
        if (!Pe && (Tt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (u) {
          se(t, n, u);
        }
        Vn(e, n, t);
        break;
      case 21:
        Vn(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Pe = (r = Pe) || t.memoizedState !== null, Vn(e, n, t), Pe = r) : Vn(e, n, t);
        break;
      default:
        Vn(e, n, t);
    }
  }
  function ua(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new vf()), n.forEach(function(r) {
        var l = Nf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function an(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e, i = n, u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              Se = u.stateNode, sn = !1;
              break e;
            case 3:
              Se = u.stateNode.containerInfo, sn = !0;
              break e;
            case 4:
              Se = u.stateNode.containerInfo, sn = !0;
              break e;
          }
          u = u.return;
        }
        if (Se === null) throw Error(m(160));
        ia(o, i, l), Se = null, sn = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        se(l, n, p);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) sa(n, e), n = n.sibling;
  }
  function sa(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (an(n, e), yn(e), r & 4) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (N) {
            se(e, e.return, N);
          }
          try {
            pr(5, e, e.return);
          } catch (N) {
            se(e, e.return, N);
          }
        }
        break;
      case 1:
        an(n, e), yn(e), r & 512 && t !== null && Tt(t, t.return);
        break;
      case 5:
        if (an(n, e), yn(e), r & 512 && t !== null && Tt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Dt(l, "");
          } catch (N) {
            se(e, e.return, N);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            u === "input" && o.type === "radio" && o.name != null && Fi(l, o), Fl(u, i);
            var p = Fl(u, o);
            for (i = 0; i < s.length; i += 2) {
              var y = s[i], w = s[i + 1];
              y === "style" ? Wi(l, w) : y === "dangerouslySetInnerHTML" ? $i(l, w) : y === "children" ? Dt(l, w) : Ee(l, y, w, p);
            }
            switch (u) {
              case "input":
                Rl(l, o);
                break;
              case "textarea":
                Ai(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null ? st(l, !!o.multiple, E, !1) : h !== !!o.multiple && (o.defaultValue != null ? st(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : st(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[tr] = o;
          } catch (N) {
            se(e, e.return, N);
          }
        }
        break;
      case 6:
        if (an(n, e), yn(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (N) {
            se(e, e.return, N);
          }
        }
        break;
      case 3:
        if (an(n, e), yn(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          Qt(n.containerInfo);
        } catch (N) {
          se(e, e.return, N);
        }
        break;
      case 4:
        an(n, e), yn(e);
        break;
      case 13:
        an(n, e), yn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ai = ae())), r & 4 && ua(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (Pe = (p = Pe) || y, an(n, e), Pe = p) : an(n, e), yn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1) for (_ = e, y = e.child; y !== null; ) {
            for (w = _ = y; _ !== null; ) {
              switch (h = _, E = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, h, h.return);
                  break;
                case 1:
                  Tt(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    r = h, t = h.return;
                    try {
                      n = r, x.props = n.memoizedProps, x.state = n.memoizedState, x.componentWillUnmount();
                    } catch (N) {
                      se(r, t, N);
                    }
                  }
                  break;
                case 5:
                  Tt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    fa(w);
                    continue;
                  }
              }
              E !== null ? (E.return = h, _ = E) : fa(w);
            }
            y = y.sibling;
          }
          e: for (y = null, w = e; ; ) {
            if (w.tag === 5) {
              if (y === null) {
                y = w;
                try {
                  l = w.stateNode, p ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = w.stateNode, s = w.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Hi("display", i));
                } catch (N) {
                  se(e, e.return, N);
                }
              }
            } else if (w.tag === 6) {
              if (y === null) try {
                w.stateNode.nodeValue = p ? "" : w.memoizedProps;
              } catch (N) {
                se(e, e.return, N);
              }
            } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
              w.child.return = w, w = w.child;
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              y === w && (y = null), w = w.return;
            }
            y === w && (y = null), w.sibling.return = w.return, w = w.sibling;
          }
        }
        break;
      case 19:
        an(n, e), yn(e), r & 4 && ua(e);
        break;
      case 21:
        break;
      default:
        an(
          n,
          e
        ), yn(e);
    }
  }
  function yn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (la(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dt(l, ""), r.flags &= -33);
            var o = oa(e);
            ii(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, u = oa(e);
            oi(e, u, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        se(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function gf(e, n, t) {
    _ = e, aa(e);
  }
  function aa(e, n, t) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
      var l = _, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || fl;
        if (!i) {
          var u = l.alternate, s = u !== null && u.memoizedState !== null || Pe;
          u = fl;
          var p = Pe;
          if (fl = i, (Pe = s) && !p) for (_ = l; _ !== null; ) i = _, s = i.child, i.tag === 22 && i.memoizedState !== null ? da(l) : s !== null ? (s.return = i, _ = s) : da(l);
          for (; o !== null; ) _ = o, aa(o), o = o.sibling;
          _ = l, fl = u, Pe = p;
        }
        ca(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, _ = o) : ca(e);
    }
  }
  function ca(e) {
    for (; _ !== null; ) {
      var n = _;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Pe || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !Pe) if (t === null) r.componentDidMount();
              else {
                var l = n.elementType === n.type ? t.memoizedProps : un(n.type, t.memoizedProps);
                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = n.updateQueue;
              o !== null && fs(n, o, r);
              break;
            case 3:
              var i = n.updateQueue;
              if (i !== null) {
                if (t = null, n.child !== null) switch (n.child.tag) {
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
                fs(n, i, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var p = n.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var w = y.dehydrated;
                    w !== null && Qt(w);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(m(163));
          }
          Pe || n.flags & 512 && li(n);
        } catch (h) {
          se(n, n.return, h);
        }
      }
      if (n === e) {
        _ = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, _ = t;
        break;
      }
      _ = n.return;
    }
  }
  function fa(e) {
    for (; _ !== null; ) {
      var n = _;
      if (n === e) {
        _ = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, _ = t;
        break;
      }
      _ = n.return;
    }
  }
  function da(e) {
    for (; _ !== null; ) {
      var n = _;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              dl(4, n);
            } catch (s) {
              se(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                se(n, l, s);
              }
            }
            var o = n.return;
            try {
              li(n);
            } catch (s) {
              se(n, o, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              li(n);
            } catch (s) {
              se(n, i, s);
            }
        }
      } catch (s) {
        se(n, n.return, s);
      }
      if (n === e) {
        _ = null;
        break;
      }
      var u = n.sibling;
      if (u !== null) {
        u.return = n.return, _ = u;
        break;
      }
      _ = n.return;
    }
  }
  var wf = Math.ceil, pl = _e.ReactCurrentDispatcher, ui = _e.ReactCurrentOwner, be = _e.ReactCurrentBatchConfig, A = 0, ye = null, fe = null, ke = 0, Ke = 0, Lt = Mn(0), he = 0, mr = null, tt = 0, ml = 0, si = 0, hr = null, je = null, ai = 0, Rt = 1 / 0, Nn = null, hl = !1, ci = null, Bn = null, vl = !1, $n = null, yl = 0, vr = 0, fi = null, gl = -1, wl = 0;
  function Re() {
    return A & 6 ? ae() : gl !== -1 ? gl : gl = ae();
  }
  function Hn(e) {
    return e.mode & 1 ? A & 2 && ke !== 0 ? ke & -ke : nf.transition !== null ? (wl === 0 && (wl = ou()), wl) : (e = K, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mu(e.type)), e) : 1;
  }
  function cn(e, n, t, r) {
    if (50 < vr) throw vr = 0, fi = null, Error(m(185));
    Vt(e, t, r), (!(A & 2) || e !== ye) && (e === ye && (!(A & 2) && (ml |= t), he === 4 && Wn(e, ke)), Ue(e, r), t === 1 && A === 0 && !(n.mode & 1) && (Rt = ae() + 500, Yr && jn()));
  }
  function Ue(e, n) {
    var t = e.callbackNode;
    nc(e, n);
    var r = zr(e, e === ye ? ke : 0);
    if (r === 0) t !== null && tu(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && tu(t), n === 1) e.tag === 0 ? ef(ma.bind(null, e)) : bu(ma.bind(null, e)), Zc(function() {
        !(A & 6) && jn();
      }), t = null;
      else {
        switch (iu(r)) {
          case 1:
            t = Hl;
            break;
          case 4:
            t = ru;
            break;
          case 16:
            t = Cr;
            break;
          case 536870912:
            t = lu;
            break;
          default:
            t = Cr;
        }
        t = Ea(t, pa.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function pa(e, n) {
    if (gl = -1, wl = 0, A & 6) throw Error(m(327));
    var t = e.callbackNode;
    if (It() && e.callbackNode !== t) return null;
    var r = zr(e, e === ye ? ke : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = Sl(e, r);
    else {
      n = r;
      var l = A;
      A |= 2;
      var o = va();
      (ye !== e || ke !== n) && (Nn = null, Rt = ae() + 500, lt(e, n));
      do
        try {
          Ef();
          break;
        } catch (u) {
          ha(e, u);
        }
      while (!0);
      To(), pl.current = o, A = l, fe !== null ? n = 0 : (ye = null, ke = 0, n = he);
    }
    if (n !== 0) {
      if (n === 2 && (l = Wl(e), l !== 0 && (r = l, n = di(e, l))), n === 1) throw t = mr, lt(e, 0), Wn(e, r), Ue(e, ae()), t;
      if (n === 6) Wn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !Sf(l) && (n = Sl(e, r), n === 2 && (o = Wl(e), o !== 0 && (r = o, n = di(e, o))), n === 1)) throw t = mr, lt(e, 0), Wn(e, r), Ue(e, ae()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ot(e, je, Nn);
            break;
          case 3:
            if (Wn(e, r), (r & 130023424) === r && (n = ai + 500 - ae(), 10 < n)) {
              if (zr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Re(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = go(ot.bind(null, e, je, Nn), n);
              break;
            }
            ot(e, je, Nn);
            break;
          case 4:
            if (Wn(e, r), (r & 4194240) === r) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - rn(r);
              o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = go(ot.bind(null, e, je, Nn), r);
              break;
            }
            ot(e, je, Nn);
            break;
          case 5:
            ot(e, je, Nn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ue(e, ae()), e.callbackNode === t ? pa.bind(null, e) : null;
  }
  function di(e, n) {
    var t = hr;
    return e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256), e = Sl(e, n), e !== 2 && (n = je, je = t, n !== null && pi(n)), e;
  }
  function pi(e) {
    je === null ? je = e : je.push.apply(je, e);
  }
  function Sf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
          var l = t[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!ln(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Wn(e, n) {
    for (n &= ~si, n &= ~ml, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - rn(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function ma(e) {
    if (A & 6) throw Error(m(327));
    It();
    var n = zr(e, 0);
    if (!(n & 1)) return Ue(e, ae()), null;
    var t = Sl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Wl(e);
      r !== 0 && (n = r, t = di(e, r));
    }
    if (t === 1) throw t = mr, lt(e, 0), Wn(e, n), Ue(e, ae()), t;
    if (t === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, ot(e, je, Nn), Ue(e, ae()), null;
  }
  function mi(e, n) {
    var t = A;
    A |= 1;
    try {
      return e(n);
    } finally {
      A = t, A === 0 && (Rt = ae() + 500, Yr && jn());
    }
  }
  function rt(e) {
    $n !== null && $n.tag === 0 && !(A & 6) && It();
    var n = A;
    A |= 1;
    var t = be.transition, r = K;
    try {
      if (be.transition = null, K = 1, e) return e();
    } finally {
      K = r, be.transition = t, A = n, !(A & 6) && jn();
    }
  }
  function hi() {
    Ke = Lt.current, q(Lt);
  }
  function lt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Gc(t)), fe !== null) for (t = fe.return; t !== null; ) {
      var r = t;
      switch (Co(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qr();
          break;
        case 3:
          Pt(), q(De), q(Ce), jo();
          break;
        case 5:
          Mo(r);
          break;
        case 4:
          Pt();
          break;
        case 13:
          q(re);
          break;
        case 19:
          q(re);
          break;
        case 10:
          Lo(r.type._context);
          break;
        case 22:
        case 23:
          hi();
      }
      t = t.return;
    }
    if (ye = e, fe = e = Qn(e.current, null), ke = Ke = n, he = 0, mr = null, si = ml = tt = 0, je = hr = null, bn !== null) {
      for (n = 0; n < bn.length; n++) if (t = bn[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, o = t.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        t.pending = r;
      }
      bn = null;
    }
    return e;
  }
  function ha(e, n) {
    do {
      var t = fe;
      try {
        if (To(), rl.current = ul, ll) {
          for (var r = le.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (nt = 0, ve = me = le = null, sr = !1, ar = 0, ui.current = null, t === null || t.return === null) {
          he = 1, mr = n, fe = null;
          break;
        }
        e: {
          var o = e, i = t.return, u = t, s = n;
          if (n = ke, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = u, w = y.tag;
            if (!(y.mode & 1) && (w === 0 || w === 11 || w === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var E = Vs(i);
            if (E !== null) {
              E.flags &= -257, Bs(E, i, u, o, n), E.mode & 1 && As(o, p, n), n = E, s = p;
              var x = n.updateQueue;
              if (x === null) {
                var N = /* @__PURE__ */ new Set();
                N.add(s), n.updateQueue = N;
              } else x.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                As(o, p, n), vi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (te && u.mode & 1) {
            var ce = Vs(i);
            if (ce !== null) {
              !(ce.flags & 65536) && (ce.flags |= 256), Bs(ce, i, u, o, n), Po(zt(s, u));
              break e;
            }
          }
          o = s = zt(s, u), he !== 4 && (he = 2), hr === null ? hr = [o] : hr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var f = js(o, s, n);
                cs(o, f);
                break e;
              case 1:
                u = s;
                var a = o.type, d = o.stateNode;
                if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Bn === null || !Bn.has(d)))) {
                  o.flags |= 65536, n &= -n, o.lanes |= n;
                  var S = Us(o, u, n);
                  cs(o, S);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ga(t);
      } catch (P) {
        n = P, fe === t && t !== null && (fe = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function va() {
    var e = pl.current;
    return pl.current = ul, e === null ? ul : e;
  }
  function vi() {
    (he === 0 || he === 3 || he === 2) && (he = 4), ye === null || !(tt & 268435455) && !(ml & 268435455) || Wn(ye, ke);
  }
  function Sl(e, n) {
    var t = A;
    A |= 2;
    var r = va();
    (ye !== e || ke !== n) && (Nn = null, lt(e, n));
    do
      try {
        kf();
        break;
      } catch (l) {
        ha(e, l);
      }
    while (!0);
    if (To(), A = t, pl.current = r, fe !== null) throw Error(m(261));
    return ye = null, ke = 0, he;
  }
  function kf() {
    for (; fe !== null; ) ya(fe);
  }
  function Ef() {
    for (; fe !== null && !Ka(); ) ya(fe);
  }
  function ya(e) {
    var n = ka(e.alternate, e, Ke);
    e.memoizedProps = e.pendingProps, n === null ? ga(e) : fe = n, ui.current = null;
  }
  function ga(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = hf(t, n), t !== null) {
          t.flags &= 32767, fe = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          he = 6, fe = null;
          return;
        }
      } else if (t = mf(t, n, Ke), t !== null) {
        fe = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        fe = n;
        return;
      }
      fe = n = e;
    } while (n !== null);
    he === 0 && (he = 5);
  }
  function ot(e, n, t) {
    var r = K, l = be.transition;
    try {
      be.transition = null, K = 1, _f(e, n, t, r);
    } finally {
      be.transition = l, K = r;
    }
    return null;
  }
  function _f(e, n, t, r) {
    do
      It();
    while ($n !== null);
    if (A & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = t.lanes | t.childLanes;
    if (tc(e, o), e === ye && (fe = ye = null, ke = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || vl || (vl = !0, Ea(Cr, function() {
      return It(), null;
    })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
      o = be.transition, be.transition = null;
      var i = K;
      K = 1;
      var u = A;
      A |= 4, ui.current = null, yf(e, t), sa(t, e), $c(vo), Rr = !!ho, vo = ho = null, e.current = t, gf(t), Ya(), A = u, K = i, be.transition = o;
    } else e.current = t;
    if (vl && (vl = !1, $n = e, yl = l), o = e.pendingLanes, o === 0 && (Bn = null), Za(t.stateNode), Ue(e, ae()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = ci, ci = null, e;
    return yl & 1 && e.tag !== 0 && It(), o = e.pendingLanes, o & 1 ? e === fi ? vr++ : (vr = 0, fi = e) : vr = 0, jn(), null;
  }
  function It() {
    if ($n !== null) {
      var e = iu(yl), n = be.transition, t = K;
      try {
        if (be.transition = null, K = 16 > e ? 16 : e, $n === null) var r = !1;
        else {
          if (e = $n, $n = null, yl = 0, A & 6) throw Error(m(331));
          var l = A;
          for (A |= 4, _ = e.current; _ !== null; ) {
            var o = _, i = o.child;
            if (_.flags & 16) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var p = u[s];
                  for (_ = p; _ !== null; ) {
                    var y = _;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, y, o);
                    }
                    var w = y.child;
                    if (w !== null) w.return = y, _ = w;
                    else for (; _ !== null; ) {
                      y = _;
                      var h = y.sibling, E = y.return;
                      if (ra(y), y === p) {
                        _ = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = E, _ = h;
                        break;
                      }
                      _ = E;
                    }
                  }
                }
                var x = o.alternate;
                if (x !== null) {
                  var N = x.child;
                  if (N !== null) {
                    x.child = null;
                    do {
                      var ce = N.sibling;
                      N.sibling = null, N = ce;
                    } while (N !== null);
                  }
                }
                _ = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) i.return = o, _ = i;
            else e: for (; _ !== null; ) {
              if (o = _, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  pr(9, o, o.return);
              }
              var f = o.sibling;
              if (f !== null) {
                f.return = o.return, _ = f;
                break e;
              }
              _ = o.return;
            }
          }
          var a = e.current;
          for (_ = a; _ !== null; ) {
            i = _;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) d.return = i, _ = d;
            else e: for (i = a; _ !== null; ) {
              if (u = _, u.flags & 2048) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dl(9, u);
                }
              } catch (P) {
                se(u, u.return, P);
              }
              if (u === i) {
                _ = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                S.return = u.return, _ = S;
                break e;
              }
              _ = u.return;
            }
          }
          if (A = l, jn(), pn && typeof pn.onPostCommitFiberRoot == "function") try {
            pn.onPostCommitFiberRoot(xr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        K = t, be.transition = n;
      }
    }
    return !1;
  }
  function wa(e, n, t) {
    n = zt(t, n), n = js(e, n, 1), e = An(e, n, 1), n = Re(), e !== null && (Vt(e, 1, n), Ue(e, n));
  }
  function se(e, n, t) {
    if (e.tag === 3) wa(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        wa(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bn === null || !Bn.has(r))) {
          e = zt(t, e), e = Us(n, e, 1), n = An(n, e, 1), e = Re(), n !== null && (Vt(n, 1, e), Ue(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function Cf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Re(), e.pingedLanes |= e.suspendedLanes & t, ye === e && (ke & t) === t && (he === 4 || he === 3 && (ke & 130023424) === ke && 500 > ae() - ai ? lt(e, 0) : si |= t), Ue(e, n);
  }
  function Sa(e, n) {
    n === 0 && (e.mode & 1 ? (n = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : n = 1);
    var t = Re();
    e = _n(e, n), e !== null && (Vt(e, n, t), Ue(e, t));
  }
  function xf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), Sa(e, t);
  }
  function Nf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), Sa(e, t);
  }
  var ka;
  ka = function(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps || De.current) Fe = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return Fe = !1, pf(e, n, t);
      Fe = !!(e.flags & 131072);
    }
    else Fe = !1, te && n.flags & 1048576 && es(n, Gr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        cl(e, n), e = n.pendingProps;
        var l = St(n, Ce.current);
        Nt(n, t), l = Vo(null, n, r, e, l, t);
        var o = Bo();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Me(r) ? (o = !0, Kr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Oo(n), l.updater = sl, n.stateNode = l, l._reactInternals = n, Yo(n, r, e, t), n = Jo(null, n, r, !0, o, t)) : (n.tag = 0, te && o && _o(n), Le(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (cl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = zf(r), e = un(r, e), l) {
            case 0:
              n = Zo(null, n, r, e, t);
              break e;
            case 1:
              n = Ys(null, n, r, e, t);
              break e;
            case 11:
              n = $s(null, n, r, e, t);
              break e;
            case 14:
              n = Hs(null, n, r, un(r.type, e), t);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : un(r, l), Zo(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : un(r, l), Ys(e, n, r, l, t);
      case 3:
        e: {
          if (Xs(n), e === null) throw Error(m(387));
          r = n.pendingProps, o = n.memoizedState, l = o.element, as(e, n), nl(n, r, null, t);
          var i = n.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
            l = zt(Error(m(423)), n), n = Gs(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = zt(Error(m(424)), n), n = Gs(e, n, r, t, l);
            break e;
          } else for (Qe = Dn(n.stateNode.containerInfo.firstChild), We = n, te = !0, on = null, t = us(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (_t(), r === l) {
              n = xn(e, n, t);
              break e;
            }
            Le(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return ds(n), e === null && No(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, yo(r, l) ? i = null : o !== null && yo(r, o) && (n.flags |= 32), Ks(e, n), Le(e, n, i, t), n.child;
      case 6:
        return e === null && No(n), null;
      case 13:
        return Zs(e, n, t);
      case 4:
        return Do(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = Ct(n, null, r, t) : Le(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : un(r, l), $s(e, n, r, l, t);
      case 7:
        return Le(e, n, n.pendingProps, t), n.child;
      case 8:
        return Le(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Le(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, Z(qr, r._currentValue), r._currentValue = i, o !== null) if (ln(o.value, i)) {
            if (o.children === l.children && !De.current) {
              n = xn(e, n, t);
              break e;
            }
          } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
            var u = o.dependencies;
            if (u !== null) {
              i = o.child;
              for (var s = u.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (o.tag === 1) {
                    s = Cn(-1, t & -t), s.tag = 2;
                    var p = o.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), Ro(
                    o.return,
                    t,
                    n
                  ), u.lanes |= t;
                  break;
                }
                s = s.next;
              }
            } else if (o.tag === 10) i = o.type === n.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(m(341));
              i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), Ro(i, t, n), i = o.sibling;
            } else i = o.child;
            if (i !== null) i.return = o;
            else for (i = o; i !== null; ) {
              if (i === n) {
                i = null;
                break;
              }
              if (o = i.sibling, o !== null) {
                o.return = i.return, i = o;
                break;
              }
              i = i.return;
            }
            o = i;
          }
          Le(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, Nt(n, t), l = Je(l), r = r(l), n.flags |= 1, Le(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = un(r, n.pendingProps), l = un(r.type, l), Hs(e, n, r, l, t);
      case 15:
        return Ws(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : un(r, l), cl(e, n), n.tag = 1, Me(r) ? (e = !0, Kr(n)) : e = !1, Nt(n, t), Ms(n, r, l), Yo(n, r, l, t), Jo(null, n, r, !0, e, t);
      case 19:
        return qs(e, n, t);
      case 22:
        return Qs(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function Ea(e, n) {
    return nu(e, n);
  }
  function Pf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function en(e, n, t, r) {
    return new Pf(e, n, t, r);
  }
  function yi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function zf(e) {
    if (typeof e == "function") return yi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === fn) return 11;
      if (e === dn) return 14;
    }
    return 2;
  }
  function Qn(e, n) {
    var t = e.alternate;
    return t === null ? (t = en(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function kl(e, n, t, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") yi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case Ie:
        return it(t.children, l, o, n);
      case Xe:
        i = 8, l |= 8;
        break;
      case Pn:
        return e = en(12, t, n, l | 2), e.elementType = Pn, e.lanes = o, e;
      case Be:
        return e = en(13, t, n, l), e.elementType = Be, e.lanes = o, e;
      case tn:
        return e = en(19, t, n, l), e.elementType = tn, e.lanes = o, e;
      case ue:
        return El(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case gn:
            i = 10;
            break e;
          case Yn:
            i = 9;
            break e;
          case fn:
            i = 11;
            break e;
          case dn:
            i = 14;
            break e;
          case Oe:
            i = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return n = en(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
  }
  function it(e, n, t, r) {
    return e = en(7, e, r, n), e.lanes = t, e;
  }
  function El(e, n, t, r) {
    return e = en(22, e, r, n), e.elementType = ue, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function gi(e, n, t) {
    return e = en(6, e, null, n), e.lanes = t, e;
  }
  function wi(e, n, t) {
    return n = en(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Tf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ql(0), this.expirationTimes = Ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ql(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Si(e, n, t, r, l, o, i, u, s) {
    return e = new Tf(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = en(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oo(o), e;
  }
  function Lf(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Te, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function _a(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (Xn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Me(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Me(t)) return Ju(e, t, n);
    }
    return n;
  }
  function Ca(e, n, t, r, l, o, i, u, s) {
    return e = Si(t, r, !0, e, l, o, i, u, s), e.context = _a(null), t = e.current, r = Re(), l = Hn(t), o = Cn(r, l), o.callback = n ?? null, An(t, o, l), e.current.lanes = l, Vt(e, l, r), Ue(e, r), e;
  }
  function _l(e, n, t, r) {
    var l = n.current, o = Re(), i = Hn(l);
    return t = _a(t), n.context === null ? n.context = t : n.pendingContext = t, n = Cn(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = An(l, n, i), e !== null && (cn(e, l, i, o), el(e, l, i)), i;
  }
  function Cl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function xa(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function ki(e, n) {
    xa(e, n), (e = e.alternate) && xa(e, n);
  }
  var Na = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ei(e) {
    this._internalRoot = e;
  }
  xl.prototype.render = Ei.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(m(409));
    _l(e, n, null, null);
  }, xl.prototype.unmount = Ei.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      rt(function() {
        _l(null, e, null, null);
      }), n[wn] = null;
    }
  };
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = au();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++) ;
      Rn.splice(t, 0, e), t === 0 && du(e);
    }
  };
  function _i(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Nl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Pa() {
  }
  function Rf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var p = Cl(i);
          o.call(p);
        };
      }
      var i = Ca(n, r, e, 0, null, !1, !1, "", Pa);
      return e._reactRootContainer = i, e[wn] = i.current, er(e.nodeType === 8 ? e.parentNode : e), rt(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var p = Cl(s);
        u.call(p);
      };
    }
    var s = Si(e, 0, !1, null, null, !1, !1, "", Pa);
    return e._reactRootContainer = s, e[wn] = s.current, er(e.nodeType === 8 ? e.parentNode : e), rt(function() {
      _l(n, s, t, r);
    }), s;
  }
  function Pl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var s = Cl(i);
          u.call(s);
        };
      }
      _l(n, i, e, l);
    } else i = Rf(t, n, e, l, r);
    return Cl(i);
  }
  uu = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = At(n.pendingLanes);
          t !== 0 && (Kl(n, t | 1), Ue(n, ae()), !(A & 6) && (Rt = ae() + 500, jn()));
        }
        break;
      case 13:
        rt(function() {
          var r = _n(e, 1);
          if (r !== null) {
            var l = Re();
            cn(r, e, 1, l);
          }
        }), ki(e, 1);
    }
  }, Yl = function(e) {
    if (e.tag === 13) {
      var n = _n(e, 134217728);
      if (n !== null) {
        var t = Re();
        cn(n, e, 134217728, t);
      }
      ki(e, 134217728);
    }
  }, su = function(e) {
    if (e.tag === 13) {
      var n = Hn(e), t = _n(e, n);
      if (t !== null) {
        var r = Re();
        cn(t, e, n, r);
      }
      ki(e, n);
    }
  }, au = function() {
    return K;
  }, cu = function(e, n) {
    var t = K;
    try {
      return K = e, n();
    } finally {
      K = t;
    }
  }, Al = function(e, n, t) {
    switch (n) {
      case "input":
        if (Rl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = Wr(r);
              if (!l) throw Error(m(90));
              Di(r), Rl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Ai(e, t);
        break;
      case "select":
        n = t.value, n != null && st(e, !!t.multiple, n, !1);
    }
  }, Xi = mi, Gi = rt;
  var If = { usingClientEntryPoint: !1, Events: [rr, gt, Wr, Ki, Yi, mi] }, yr = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Of = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _e.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = bi(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber) try {
      xr = zl.inject(Of), pn = zl;
    } catch {
    }
  }
  return Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If, Ae.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_i(n)) throw Error(m(200));
    return Lf(e, n, null, t);
  }, Ae.createRoot = function(e, n) {
    if (!_i(e)) throw Error(m(299));
    var t = !1, r = "", l = Na;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Si(e, 1, !1, null, null, t, !1, r, l), e[wn] = n.current, er(e.nodeType === 8 ? e.parentNode : e), new Ei(n);
  }, Ae.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = bi(n), e = e === null ? null : e.stateNode, e;
  }, Ae.flushSync = function(e) {
    return rt(e);
  }, Ae.hydrate = function(e, n, t) {
    if (!Nl(n)) throw Error(m(200));
    return Pl(null, e, n, !0, t);
  }, Ae.hydrateRoot = function(e, n, t) {
    if (!_i(e)) throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, o = "", i = Na;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = Ca(n, null, e, 1, t ?? null, l, !1, o, i), e[wn] = n.current, er(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
      t,
      l
    );
    return new xl(n);
  }, Ae.render = function(e, n, t) {
    if (!Nl(n)) throw Error(m(200));
    return Pl(null, e, n, !1, t);
  }, Ae.unmountComponentAtNode = function(e) {
    if (!Nl(e)) throw Error(m(40));
    return e._reactRootContainer ? (rt(function() {
      Pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[wn] = null;
      });
    }), !0) : !1;
  }, Ae.unstable_batchedUpdates = mi, Ae.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Nl(t)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Pl(e, n, t, !1, r);
  }, Ae.version = "18.3.1-next-f1338f8080-20240426", Ae;
}
var Ma;
function $f() {
  if (Ma) return Ni.exports;
  Ma = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (L) {
        console.error(L);
      }
  }
  return g(), Ni.exports = Bf(), Ni.exports;
}
var Fa;
function Hf() {
  if (Fa) return Tl;
  Fa = 1;
  var g = $f();
  return Tl.createRoot = g.createRoot, Tl.hydrateRoot = g.hydrateRoot, Tl;
}
var Wf = Hf();
const Qf = /* @__PURE__ */ Mf(Wf), Kf = () => {
  const g = document.getElementById("shop-info");
  return JSON.parse((g == null ? void 0 : g.textContent) || "{}");
}, Ii = () => {
  const g = document.getElementById("product-info"), L = JSON.parse((g == null ? void 0 : g.textContent) || "{}");
  return window.shineon = window.shineon || {}, window.shineon.product_info = L, L;
}, Yf = () => {
  const g = Ii();
  return Xf(g);
}, Xf = (g) => {
  var L;
  return !g.shop_cf || !((L = g.shop_pt_id_obj) != null && L.custom_fields) ? [] : g.shop_pt_id_obj.custom_fields.map((m) => ({
    ...g.shop_cf[m.key],
    id: m
  }));
}, Gf = {
  en: {
    errors: {
      invalid_character: " isn't available"
    }
  },
  fr: {
    errors: {
      invalid_character: " n'est pas disponible"
    }
  },
  es: {
    errors: {
      invalid_character: " no está disponible"
    }
  },
  de: {
    errors: {
      invalid_character: " ist nicht verfügbar"
    }
  },
  it: {
    errors: {
      invalid_character: " non è disponibile"
    }
  },
  pt: {
    errors: {
      invalid_character: " não está disponível"
    }
  },
  ua: {
    errors: {
      invalid_character: " недоступний"
    }
  },
  pl: {
    errors: {
      invalid_character: " jest niedostępny"
    }
  }
}, Oi = Ii();
let Ti = Oi.selected_variant;
const Li = {
  get variantInputs() {
    return document.querySelectorAll(Oi.variant_id_input);
  }
}, Zf = () => {
  const g = document.querySelectorAll('form[action="/cart/add"]');
  return Array.from(g).map((L) => L.getAttribute("id"));
}, ja = () => (Ti || Li.variantInputs.forEach((g) => {
  if (g) {
    const L = parseInt(g.value);
    Ti = Oi.product.variants.find((m) => m.id === L);
  }
}), Ti), Jf = (g) => {
  clearTimeout(window.variantChangeTimeout), window.variantChangeTimeout = setTimeout(() => {
    g();
  }, 300);
}, qf = (g) => (Li.variantInputs.forEach((L) => {
  L.addEventListener("change", g);
}), () => {
  Li.variantInputs.forEach((L) => {
    L.removeEventListener("change", g);
  });
}), bf = ({ product_cf: g, required: L, formId: m, onBeforeInput: de, onChange: b }) => {
  const pe = (X, ee) => ({
    type: "text",
    id: X.id.key,
    name: `properties[${X.name}]`,
    autoComplete: "off",
    placeholder: X.placeholder,
    form: ee,
    required: L,
    className: `field__input ${X.class || ""}`,
    minLength: X.minlength > 0 ? X.minlength : void 0,
    maxLength: X.maxlength > 0 ? X.maxlength : 20,
    onBeforeInput: de,
    onChange: b
  });
  return /* @__PURE__ */ Ye.jsx("input", { ...pe(g, m) });
}, Ua = ut.createContext(), ed = (g, L) => {
  switch (L.type) {
    case "UPDATE_SYMBOL_COUNT":
      return {
        ...g,
        symbolCounts: {
          ...g.symbolCounts,
          [L.payload.id]: L.payload.count
        }
      };
    case "SET_ERROR":
      return {
        ...g,
        showNotification: L.payload.show,
        errorSymbol: L.payload.symbol
      };
    case "RESET_SYMBOL_COUNTS":
      return {
        ...g,
        symbolCounts: {}
      };
    default:
      return g;
  }
}, nd = ut.memo(({ product_cf: g, required: L, formId: m, dispatch: de }) => {
  const { state: b } = ut.useContext(Ua), pe = window.Shopify.locale, X = (Y) => {
    const oe = g.pattern;
    oe && (new RegExp(oe).test(Y.data) ? de({
      type: "SET_ERROR",
      payload: { show: !1, symbol: "" }
    }) : (Y.preventDefault(), de({
      type: "SET_ERROR",
      payload: { show: !0, symbol: Y.data }
    })));
  }, ee = (Y) => {
    de({
      type: "UPDATE_SYMBOL_COUNT",
      payload: { id: g.id.key, count: Y.target.value.length }
    }), Jf(() => {
      F(Y.target);
    });
  }, F = (Y) => {
    document.querySelectorAll('form[action="/cart/add"]').forEach((H) => {
      let j = H.querySelector(`input[name="${Y.name}"]`);
      j || (j = document.createElement("input"), j.type = "hidden", j.name = Y.name, H.appendChild(j)), j.value = Y.value;
    });
  };
  return /* @__PURE__ */ Ye.jsxs("div", { className: "field-wrapper", children: [
    /* @__PURE__ */ Ye.jsx("label", { className: "form__label", children: g.name }),
    /* @__PURE__ */ Ye.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ Ye.jsxs("div", { className: "so-input-counter-w", children: [
        /* @__PURE__ */ Ye.jsx(
          bf,
          {
            product_cf: g,
            required: L,
            formId: m,
            onBeforeInput: X,
            onChange: ee
          }
        ),
        !b.showNotification && /* @__PURE__ */ Ye.jsxs(
          "span",
          {
            className: `so-counter ${b.symbolCounts[g.id.key] ? "so-input-filled" : ""}`,
            children: [
              b.symbolCounts[g.id.key] || 0,
              "/",
              g.maxlength || 20
            ]
          }
        )
      ] }),
      b.showNotification && /* @__PURE__ */ Ye.jsx("span", { className: "so-wrong-input-notification", children: `"${b.errorSymbol}"${Gf[pe].errors.invalid_character}` })
    ] })
  ] });
}), td = () => {
  var ze;
  const g = Ii(), L = Yf(), m = Kf(), de = window.Shopify.locale, b = m.sectionID ? "product-form-" + m.sectionID : Zf(), [pe, X] = ut.useState(ja()), [ee, F] = ut.useReducer(ed, {
    symbolCounts: {},
    showNotification: !1,
    errorSymbol: ""
  }), Y = () => {
    document.querySelectorAll('.so-hyper input[type="text"]').forEach((U) => {
      U.value = "", document.querySelectorAll(`input[type="hidden"][name="${U.name}"]`).forEach((Ve) => {
        Ve.remove();
      });
    }), F({ type: "RESET_SYMBOL_COUNTS" });
  }, oe = L.filter((ie) => ie.field_type === "engraving"), H = L.filter((ie) => ie.required && ie.field_type === "engraving").length > 0;
  let j = ((ze = g.variant_metafields[pe.id]) == null ? void 0 : ze.engravings) > 0;
  return ut.useEffect(() => {
    const ie = () => {
      var Ee;
      const we = ja();
      !H && ((Ee = g.variant_metafields[we.id]) == null ? void 0 : Ee.engravings) === 0 && Y();
    }, U = (we) => {
      X(
        g.product.variants.filter(
          (Ee) => Ee.id === parseInt(document.querySelector('[name="id"]').value)
        )[0]
      );
    }, W = document.querySelectorAll(g.trigger_selector);
    W.forEach((we) => we.addEventListener("change", U));
    const Ve = qf(ie);
    return () => {
      W.forEach((we) => we.removeEventListener("change", U)), Ve();
    };
  }, []), /* @__PURE__ */ Ye.jsx(Ua.Provider, { value: { state: ee, dispatch: F }, children: (H || j) && /* @__PURE__ */ Ye.jsx("div", { className: "so-hyper so-tw", children: oe.map((ie, U) => /* @__PURE__ */ Ye.jsx(
    nd,
    {
      product_cf: ie,
      required: H || j && U === 0,
      formId: b,
      dispatch: F,
      locale: de
    },
    U
  )) }) });
};
document.addEventListener("DOMContentLoaded", () => {
  const g = document.getElementById("so-hyper");
  g && Qf.createRoot(g).render(
    /* @__PURE__ */ Ye.jsx(ut.StrictMode, { children: /* @__PURE__ */ Ye.jsx(td, {}) })
  );
});
