function Df(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var _u = { exports: {} }, yr = {}, xu = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa;
function Mf() {
  if (Pa) return M;
  Pa = 1;
  var S = Symbol.for("react.element"), O = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), ke = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), ce = Symbol.for("react.provider"), ye = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), ge = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), I = Symbol.iterator;
  function j(c) {
    return c === null || typeof c != "object" ? null : (c = I && c[I] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var re = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, se = Object.assign, K = {};
  function Q(c, v, D) {
    this.props = c, this.context = v, this.refs = K, this.updater = D || re;
  }
  Q.prototype.isReactComponent = {}, Q.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, Q.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function qe() {
  }
  qe.prototype = Q.prototype;
  function cn(c, v, D) {
    this.props = c, this.context = v, this.refs = K, this.updater = D || re;
  }
  var be = cn.prototype = new qe();
  be.constructor = cn, se(be, Q.prototype), be.isPureReactComponent = !0;
  var Ee = Array.isArray, en = Object.prototype.hasOwnProperty, Pe = { current: null }, Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, v, D) {
    var F, V = {}, A = null, X = null;
    if (v != null) for (F in v.ref !== void 0 && (X = v.ref), v.key !== void 0 && (A = "" + v.key), v) en.call(v, F) && !Le.hasOwnProperty(F) && (V[F] = v[F]);
    var H = arguments.length - 2;
    if (H === 1) V.children = D;
    else if (1 < H) {
      for (var q = Array(H), Ae = 0; Ae < H; Ae++) q[Ae] = arguments[Ae + 2];
      V.children = q;
    }
    if (c && c.defaultProps) for (F in H = c.defaultProps, H) V[F] === void 0 && (V[F] = H[F]);
    return { $$typeof: S, type: c, key: A, ref: X, props: V, _owner: Pe.current };
  }
  function Pn(c, v) {
    return { $$typeof: S, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === S;
  }
  function Yn(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(D) {
      return v[D];
    });
  }
  var fn = /\/+/g;
  function Ve(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Yn("" + c.key) : v.toString(36);
  }
  function nn(c, v, D, F, V) {
    var A = typeof c;
    (A === "undefined" || A === "boolean") && (c = null);
    var X = !1;
    if (c === null) X = !0;
    else switch (A) {
      case "string":
      case "number":
        X = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case S:
          case O:
            X = !0;
        }
    }
    if (X) return X = c, V = V(X), c = F === "" ? "." + Ve(X, 0) : F, Ee(V) ? (D = "", c != null && (D = c.replace(fn, "$&/") + "/"), nn(V, v, D, "", function(Ae) {
      return Ae;
    })) : V != null && (gn(V) && (V = Pn(V, D + (!V.key || X && X.key === V.key ? "" : ("" + V.key).replace(fn, "$&/") + "/") + c)), v.push(V)), 1;
    if (X = 0, F = F === "" ? "." : F + ":", Ee(c)) for (var H = 0; H < c.length; H++) {
      A = c[H];
      var q = F + Ve(A, H);
      X += nn(A, v, D, q, V);
    }
    else if (q = j(c), typeof q == "function") for (c = q.call(c), H = 0; !(A = c.next()).done; ) A = A.value, q = F + Ve(A, H++), X += nn(A, v, D, q, V);
    else if (A === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return X;
  }
  function dn(c, v, D) {
    if (c == null) return c;
    var F = [], V = 0;
    return nn(c, F, "", "", function(A) {
      return v.call(D, A, V++);
    }), F;
  }
  function Re(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(D) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = D);
      }, function(D) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = D);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var le = { current: null }, k = { transition: null }, L = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: k, ReactCurrentOwner: Pe };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: dn, forEach: function(c, v, D) {
    dn(c, function() {
      v.apply(this, arguments);
    }, D);
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
  } }, M.Component = Q, M.Fragment = m, M.Profiler = Y, M.PureComponent = cn, M.StrictMode = ke, M.Suspense = $, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L, M.act = _, M.cloneElement = function(c, v, D) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var F = se({}, c.props), V = c.key, A = c.ref, X = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (A = v.ref, X = Pe.current), v.key !== void 0 && (V = "" + v.key), c.type && c.type.defaultProps) var H = c.type.defaultProps;
      for (q in v) en.call(v, q) && !Le.hasOwnProperty(q) && (F[q] = v[q] === void 0 && H !== void 0 ? H[q] : v[q]);
    }
    var q = arguments.length - 2;
    if (q === 1) F.children = D;
    else if (1 < q) {
      H = Array(q);
      for (var Ae = 0; Ae < q; Ae++) H[Ae] = arguments[Ae + 2];
      F.children = H;
    }
    return { $$typeof: S, type: c.type, key: V, ref: A, props: F, _owner: X };
  }, M.createContext = function(c) {
    return c = { $$typeof: ye, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: ce, _context: c }, c.Consumer = c;
  }, M.createElement = Qe, M.createFactory = function(c) {
    var v = Qe.bind(null, c);
    return v.type = c, v;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(c) {
    return { $$typeof: te, render: c };
  }, M.isValidElement = gn, M.lazy = function(c) {
    return { $$typeof: fe, _payload: { _status: -1, _result: c }, _init: Re };
  }, M.memo = function(c, v) {
    return { $$typeof: ge, type: c, compare: v === void 0 ? null : v };
  }, M.startTransition = function(c) {
    var v = k.transition;
    k.transition = {};
    try {
      c();
    } finally {
      k.transition = v;
    }
  }, M.unstable_act = _, M.useCallback = function(c, v) {
    return le.current.useCallback(c, v);
  }, M.useContext = function(c) {
    return le.current.useContext(c);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(c) {
    return le.current.useDeferredValue(c);
  }, M.useEffect = function(c, v) {
    return le.current.useEffect(c, v);
  }, M.useId = function() {
    return le.current.useId();
  }, M.useImperativeHandle = function(c, v, D) {
    return le.current.useImperativeHandle(c, v, D);
  }, M.useInsertionEffect = function(c, v) {
    return le.current.useInsertionEffect(c, v);
  }, M.useLayoutEffect = function(c, v) {
    return le.current.useLayoutEffect(c, v);
  }, M.useMemo = function(c, v) {
    return le.current.useMemo(c, v);
  }, M.useReducer = function(c, v, D) {
    return le.current.useReducer(c, v, D);
  }, M.useRef = function(c) {
    return le.current.useRef(c);
  }, M.useState = function(c) {
    return le.current.useState(c);
  }, M.useSyncExternalStore = function(c, v, D) {
    return le.current.useSyncExternalStore(c, v, D);
  }, M.useTransition = function() {
    return le.current.useTransition();
  }, M.version = "18.3.1", M;
}
var za;
function Ru() {
  return za || (za = 1, xu.exports = Mf()), xu.exports;
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
var Ta;
function Ff() {
  if (Ta) return yr;
  Ta = 1;
  var S = Ru(), O = Symbol.for("react.element"), m = Symbol.for("react.fragment"), ke = Object.prototype.hasOwnProperty, Y = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(te, $, ge) {
    var fe, I = {}, j = null, re = null;
    ge !== void 0 && (j = "" + ge), $.key !== void 0 && (j = "" + $.key), $.ref !== void 0 && (re = $.ref);
    for (fe in $) ke.call($, fe) && !ce.hasOwnProperty(fe) && (I[fe] = $[fe]);
    if (te && te.defaultProps) for (fe in $ = te.defaultProps, $) I[fe] === void 0 && (I[fe] = $[fe]);
    return { $$typeof: O, type: te, key: j, ref: re, props: I, _owner: Y.current };
  }
  return yr.Fragment = m, yr.jsx = ye, yr.jsxs = ye, yr;
}
var La;
function jf() {
  return La || (La = 1, _u.exports = Ff()), _u.exports;
}
var Ue = jf(), gr = Ru(), Tl = {}, Nu = { exports: {} }, je = {}, Pu = { exports: {} }, zu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function Uf() {
  return Ra || (Ra = 1, function(S) {
    function O(k, L) {
      var _ = k.length;
      k.push(L);
      e: for (; 0 < _; ) {
        var c = _ - 1 >>> 1, v = k[c];
        if (0 < Y(v, L)) k[c] = L, k[_] = v, _ = c;
        else break e;
      }
    }
    function m(k) {
      return k.length === 0 ? null : k[0];
    }
    function ke(k) {
      if (k.length === 0) return null;
      var L = k[0], _ = k.pop();
      if (_ !== L) {
        k[0] = _;
        e: for (var c = 0, v = k.length, D = v >>> 1; c < D; ) {
          var F = 2 * (c + 1) - 1, V = k[F], A = F + 1, X = k[A];
          if (0 > Y(V, _)) A < v && 0 > Y(X, V) ? (k[c] = X, k[A] = _, c = A) : (k[c] = V, k[F] = _, c = F);
          else if (A < v && 0 > Y(X, _)) k[c] = X, k[A] = _, c = A;
          else break e;
        }
      }
      return L;
    }
    function Y(k, L) {
      var _ = k.sortIndex - L.sortIndex;
      return _ !== 0 ? _ : k.id - L.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ce = performance;
      S.unstable_now = function() {
        return ce.now();
      };
    } else {
      var ye = Date, te = ye.now();
      S.unstable_now = function() {
        return ye.now() - te;
      };
    }
    var $ = [], ge = [], fe = 1, I = null, j = 3, re = !1, se = !1, K = !1, Q = typeof setTimeout == "function" ? setTimeout : null, qe = typeof clearTimeout == "function" ? clearTimeout : null, cn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function be(k) {
      for (var L = m(ge); L !== null; ) {
        if (L.callback === null) ke(ge);
        else if (L.startTime <= k) ke(ge), L.sortIndex = L.expirationTime, O($, L);
        else break;
        L = m(ge);
      }
    }
    function Ee(k) {
      if (K = !1, be(k), !se) if (m($) !== null) se = !0, Re(en);
      else {
        var L = m(ge);
        L !== null && le(Ee, L.startTime - k);
      }
    }
    function en(k, L) {
      se = !1, K && (K = !1, qe(Qe), Qe = -1), re = !0;
      var _ = j;
      try {
        for (be(L), I = m($); I !== null && (!(I.expirationTime > L) || k && !Yn()); ) {
          var c = I.callback;
          if (typeof c == "function") {
            I.callback = null, j = I.priorityLevel;
            var v = c(I.expirationTime <= L);
            L = S.unstable_now(), typeof v == "function" ? I.callback = v : I === m($) && ke($), be(L);
          } else ke($);
          I = m($);
        }
        if (I !== null) var D = !0;
        else {
          var F = m(ge);
          F !== null && le(Ee, F.startTime - L), D = !1;
        }
        return D;
      } finally {
        I = null, j = _, re = !1;
      }
    }
    var Pe = !1, Le = null, Qe = -1, Pn = 5, gn = -1;
    function Yn() {
      return !(S.unstable_now() - gn < Pn);
    }
    function fn() {
      if (Le !== null) {
        var k = S.unstable_now();
        gn = k;
        var L = !0;
        try {
          L = Le(!0, k);
        } finally {
          L ? Ve() : (Pe = !1, Le = null);
        }
      } else Pe = !1;
    }
    var Ve;
    if (typeof cn == "function") Ve = function() {
      cn(fn);
    };
    else if (typeof MessageChannel < "u") {
      var nn = new MessageChannel(), dn = nn.port2;
      nn.port1.onmessage = fn, Ve = function() {
        dn.postMessage(null);
      };
    } else Ve = function() {
      Q(fn, 0);
    };
    function Re(k) {
      Le = k, Pe || (Pe = !0, Ve());
    }
    function le(k, L) {
      Qe = Q(function() {
        k(S.unstable_now());
      }, L);
    }
    S.unstable_IdlePriority = 5, S.unstable_ImmediatePriority = 1, S.unstable_LowPriority = 4, S.unstable_NormalPriority = 3, S.unstable_Profiling = null, S.unstable_UserBlockingPriority = 2, S.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, S.unstable_continueExecution = function() {
      se || re || (se = !0, Re(en));
    }, S.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pn = 0 < k ? Math.floor(1e3 / k) : 5;
    }, S.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, S.unstable_getFirstCallbackNode = function() {
      return m($);
    }, S.unstable_next = function(k) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = j;
      }
      var _ = j;
      j = L;
      try {
        return k();
      } finally {
        j = _;
      }
    }, S.unstable_pauseExecution = function() {
    }, S.unstable_requestPaint = function() {
    }, S.unstable_runWithPriority = function(k, L) {
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
      var _ = j;
      j = k;
      try {
        return L();
      } finally {
        j = _;
      }
    }, S.unstable_scheduleCallback = function(k, L, _) {
      var c = S.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? c + _ : c) : _ = c, k) {
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
      return v = _ + v, k = { id: fe++, callback: L, priorityLevel: k, startTime: _, expirationTime: v, sortIndex: -1 }, _ > c ? (k.sortIndex = _, O(ge, k), m($) === null && k === m(ge) && (K ? (qe(Qe), Qe = -1) : K = !0, le(Ee, _ - c))) : (k.sortIndex = v, O($, k), se || re || (se = !0, Re(en))), k;
    }, S.unstable_shouldYield = Yn, S.unstable_wrapCallback = function(k) {
      var L = j;
      return function() {
        var _ = j;
        j = L;
        try {
          return k.apply(this, arguments);
        } finally {
          j = _;
        }
      };
    };
  }(zu)), zu;
}
var Ia;
function Vf() {
  return Ia || (Ia = 1, Pu.exports = Uf()), Pu.exports;
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
var Oa;
function Af() {
  if (Oa) return je;
  Oa = 1;
  var S = Ru(), O = Vf();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ke = /* @__PURE__ */ new Set(), Y = {};
  function ce(e, n) {
    ye(e, n), ye(e + "Capture", n);
  }
  function ye(e, n) {
    for (Y[e] = n, e = 0; e < n.length; e++) ke.add(n[e]);
  }
  var te = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $ = Object.prototype.hasOwnProperty, ge = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fe = {}, I = {};
  function j(e) {
    return $.call(I, e) ? !0 : $.call(fe, e) ? !1 : ge.test(e) ? I[e] = !0 : (fe[e] = !0, !1);
  }
  function re(e, n, t, r) {
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
  function se(e, n, t, r) {
    if (n === null || typeof n > "u" || re(e, n, t, r)) return !0;
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
  function K(e, n, t, r, l, o, u) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = u;
  }
  var Q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Q[e] = new K(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    Q[n] = new K(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Q[e] = new K(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Q[e] = new K(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Q[e] = new K(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Q[e] = new K(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    Q[e] = new K(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    Q[e] = new K(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    Q[e] = new K(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var qe = /[\-:]([a-z])/g;
  function cn(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      qe,
      cn
    );
    Q[n] = new K(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(qe, cn);
    Q[n] = new K(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(qe, cn);
    Q[n] = new K(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    Q[e] = new K(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), Q.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    Q[e] = new K(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function be(e, n, t, r) {
    var l = Q.hasOwnProperty(n) ? Q[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (se(n, t, l, r) && (t = null), r || l === null ? j(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var Ee = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, en = Symbol.for("react.element"), Pe = Symbol.for("react.portal"), Le = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), Pn = Symbol.for("react.profiler"), gn = Symbol.for("react.provider"), Yn = Symbol.for("react.context"), fn = Symbol.for("react.forward_ref"), Ve = Symbol.for("react.suspense"), nn = Symbol.for("react.suspense_list"), dn = Symbol.for("react.memo"), Re = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), k = Symbol.iterator;
  function L(e) {
    return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, c;
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
  var D = !1;
  function F(e, n) {
    if (!e || D) return "";
    D = !0;
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
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i]; ) i--;
        for (; 1 <= u && 0 <= i; u--, i--) if (l[u] !== o[i]) {
          if (u !== 1 || i !== 1)
            do
              if (u--, i--, 0 > i || l[u] !== o[i]) {
                var s = `
` + l[u].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= u && 0 <= i);
          break;
        }
      }
    } finally {
      D = !1, Error.prepareStackTrace = t;
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
        return e = F(e.type, !1), e;
      case 11:
        return e = F(e.type.render, !1), e;
      case 1:
        return e = F(e.type, !0), e;
      default:
        return "";
    }
  }
  function A(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case Pe:
        return "Portal";
      case Pn:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Ve:
        return "Suspense";
      case nn:
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
        return n = e.displayName || null, n !== null ? n : A(e.type) || "Memo";
      case Re:
        n = e._payload, e = e._init;
        try {
          return A(e(n));
        } catch {
        }
    }
    return null;
  }
  function X(e) {
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
        return A(n);
      case 8:
        return n === Qe ? "StrictMode" : "Mode";
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
  function H(e) {
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
  function q(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Ae(e) {
    var n = q(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, o = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(u) {
        r = "" + u, o.call(this, u);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(u) {
        r = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = Ae(e));
  }
  function Ou(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), r = "";
    return e && (r = q(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
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
    return _({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Du(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = H(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function Mu(e, n) {
    n = n.checked, n != null && be(e, "checked", n, !1);
  }
  function Rl(e, n) {
    Mu(e, n);
    var t = H(n.value), r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Il(e, n.type, t) : n.hasOwnProperty("defaultValue") && Il(e, n.type, H(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Fu(e, n, t) {
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
  var It = Array.isArray;
  function it(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + H(t), n = null, l = 0; l < e.length; l++) {
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
    return _({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ju(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(m(92));
        if (It(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: H(t) };
  }
  function Uu(e, n) {
    var t = H(n.value), r = H(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Vu(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Au(e) {
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
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Au(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, Bu = function(e) {
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
  function Ot(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Dt = {
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
  }, Ua = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dt).forEach(function(e) {
    Ua.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Dt[n] = Dt[e];
    });
  });
  function $u(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Dt.hasOwnProperty(e) && Dt[e] ? ("" + n).trim() : n + "px";
  }
  function Hu(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = $u(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
  }
  var Va = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  var Vl = null, st = null, at = null;
  function Wu(e) {
    if (e = tr(e)) {
      if (typeof Vl != "function") throw Error(m(280));
      var n = e.stateNode;
      n && (n = Wr(n), Vl(e.stateNode, e.type, n));
    }
  }
  function Qu(e) {
    st ? at ? at.push(e) : at = [e] : st = e;
  }
  function Ku() {
    if (st) {
      var e = st, n = at;
      if (at = st = null, Wu(e), n) for (e = 0; e < n.length; e++) Wu(n[e]);
    }
  }
  function Yu(e, n) {
    return e(n);
  }
  function Xu() {
  }
  var Al = !1;
  function Gu(e, n, t) {
    if (Al) return e(n, t);
    Al = !0;
    try {
      return Yu(e, n, t);
    } finally {
      Al = !1, (st !== null || at !== null) && (Xu(), Ku());
    }
  }
  function Mt(e, n) {
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
  if (te) try {
    var Ft = {};
    Object.defineProperty(Ft, "passive", { get: function() {
      Bl = !0;
    } }), window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft);
  } catch {
    Bl = !1;
  }
  function Aa(e, n, t, r, l, o, u, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var jt = !1, Er = null, Cr = !1, $l = null, Ba = { onError: function(e) {
    jt = !0, Er = e;
  } };
  function $a(e, n, t, r, l, o, u, i, s) {
    jt = !1, Er = null, Aa.apply(Ba, arguments);
  }
  function Ha(e, n, t, r, l, o, u, i, s) {
    if ($a.apply(this, arguments), jt) {
      if (jt) {
        var p = Er;
        jt = !1, Er = null;
      } else throw Error(m(198));
      Cr || (Cr = !0, $l = p);
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
  function Zu(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Ju(e) {
    if (Xn(e) !== e) throw Error(m(188));
  }
  function Wa(e) {
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
          if (o === t) return Ju(l), e;
          if (o === r) return Ju(l), n;
          o = o.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) t = l, r = o;
      else {
        for (var u = !1, i = l.child; i; ) {
          if (i === t) {
            u = !0, t = l, r = o;
            break;
          }
          if (i === r) {
            u = !0, r = l, t = o;
            break;
          }
          i = i.sibling;
        }
        if (!u) {
          for (i = o.child; i; ) {
            if (i === t) {
              u = !0, t = o, r = l;
              break;
            }
            if (i === r) {
              u = !0, r = o, t = l;
              break;
            }
            i = i.sibling;
          }
          if (!u) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function qu(e) {
    return e = Wa(e), e !== null ? bu(e) : null;
  }
  function bu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = bu(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var ei = O.unstable_scheduleCallback, ni = O.unstable_cancelCallback, Qa = O.unstable_shouldYield, Ka = O.unstable_requestPaint, ue = O.unstable_now, Ya = O.unstable_getCurrentPriorityLevel, Hl = O.unstable_ImmediatePriority, ti = O.unstable_UserBlockingPriority, _r = O.unstable_NormalPriority, Xa = O.unstable_LowPriority, ri = O.unstable_IdlePriority, xr = null, pn = null;
  function Ga(e) {
    if (pn && typeof pn.onCommitFiberRoot == "function") try {
      pn.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var tn = Math.clz32 ? Math.clz32 : qa, Za = Math.log, Ja = Math.LN2;
  function qa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Za(e) / Ja | 0) | 0;
  }
  var Nr = 64, Pr = 4194304;
  function Ut(e) {
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
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, u = t & 268435455;
    if (u !== 0) {
      var i = u & ~l;
      i !== 0 ? r = Ut(i) : (o &= u, o !== 0 && (r = Ut(o)));
    } else u = t & ~l, u !== 0 ? r = Ut(u) : o !== 0 && (r = Ut(o));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - tn(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function ba(e, n) {
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
  function ec(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var u = 31 - tn(o), i = 1 << u, s = l[u];
      s === -1 ? (!(i & t) || i & r) && (l[u] = ba(i, n)) : s <= n && (e.expiredLanes |= i), o &= ~i;
    }
  }
  function Wl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function li() {
    var e = Nr;
    return Nr <<= 1, !(Nr & 4194240) && (Nr = 64), e;
  }
  function Ql(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Vt(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - tn(n), e[n] = t;
  }
  function nc(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - tn(t), o = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
    }
  }
  function Kl(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - tn(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var W = 0;
  function oi(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ui, Yl, ii, si, ai, Xl = !1, Tr = [], zn = null, Tn = null, Ln = null, At = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), Rn = [], tc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ci(e, n) {
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
        At.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bt.delete(n.pointerId);
    }
  }
  function $t(e, n, t, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = tr(n), n !== null && Yl(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function rc(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return zn = $t(zn, e, n, t, r, l), !0;
      case "dragenter":
        return Tn = $t(Tn, e, n, t, r, l), !0;
      case "mouseover":
        return Ln = $t(Ln, e, n, t, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return At.set(o, $t(At.get(o) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, Bt.set(o, $t(Bt.get(o) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function fi(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = Xn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Zu(t), n !== null) {
            e.blockedOn = n, ai(e.priority, function() {
              ii(t);
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
      } else return n = tr(t), n !== null && Yl(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function di(e, n, t) {
    Lr(e) && t.delete(n);
  }
  function lc() {
    Xl = !1, zn !== null && Lr(zn) && (zn = null), Tn !== null && Lr(Tn) && (Tn = null), Ln !== null && Lr(Ln) && (Ln = null), At.forEach(di), Bt.forEach(di);
  }
  function Ht(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Xl || (Xl = !0, O.unstable_scheduleCallback(O.unstable_NormalPriority, lc)));
  }
  function Wt(e) {
    function n(l) {
      return Ht(l, e);
    }
    if (0 < Tr.length) {
      Ht(Tr[0], e);
      for (var t = 1; t < Tr.length; t++) {
        var r = Tr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (zn !== null && Ht(zn, e), Tn !== null && Ht(Tn, e), Ln !== null && Ht(Ln, e), At.forEach(n), Bt.forEach(n), t = 0; t < Rn.length; t++) r = Rn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && (t = Rn[0], t.blockedOn === null); ) fi(t), t.blockedOn === null && Rn.shift();
  }
  var ct = Ee.ReactCurrentBatchConfig, Rr = !0;
  function oc(e, n, t, r) {
    var l = W, o = ct.transition;
    ct.transition = null;
    try {
      W = 1, Gl(e, n, t, r);
    } finally {
      W = l, ct.transition = o;
    }
  }
  function uc(e, n, t, r) {
    var l = W, o = ct.transition;
    ct.transition = null;
    try {
      W = 4, Gl(e, n, t, r);
    } finally {
      W = l, ct.transition = o;
    }
  }
  function Gl(e, n, t, r) {
    if (Rr) {
      var l = Zl(e, n, t, r);
      if (l === null) mo(e, n, r, Ir, t), ci(e, r);
      else if (rc(l, e, n, t, r)) r.stopPropagation();
      else if (ci(e, r), n & 4 && -1 < tc.indexOf(e)) {
        for (; l !== null; ) {
          var o = tr(l);
          if (o !== null && ui(o), o = Zl(e, n, t, r), o === null && mo(e, n, r, Ir, t), o === l) break;
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
      if (e = Zu(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return Ir = e, null;
  }
  function pi(e) {
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
        switch (Ya()) {
          case Hl:
            return 1;
          case ti:
            return 4;
          case _r:
          case Xa:
            return 16;
          case ri:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var In = null, Jl = null, Or = null;
  function mi() {
    if (Or) return Or;
    var e, n = Jl, t = n.length, r, l = "value" in In ? In.value : In.textContent, o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++) ;
    var u = t - e;
    for (r = 1; r <= u && n[t - r] === l[o - r]; r++) ;
    return Or = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Dr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Mr() {
    return !0;
  }
  function hi() {
    return !1;
  }
  function Be(e) {
    function n(t, r, l, o, u) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Mr : hi, this.isPropagationStopped = hi, this;
    }
    return _(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Mr);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Mr);
    }, persist: function() {
    }, isPersistent: Mr }), n;
  }
  var ft = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ql = Be(ft), Qt = _({}, ft, { view: 0, detail: 0 }), ic = Be(Qt), bl, eo, Kt, Fr = _({}, Qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: to, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Kt && (Kt && e.type === "mousemove" ? (bl = e.screenX - Kt.screenX, eo = e.screenY - Kt.screenY) : eo = bl = 0, Kt = e), bl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : eo;
  } }), vi = Be(Fr), sc = _({}, Fr, { dataTransfer: 0 }), ac = Be(sc), cc = _({}, Qt, { relatedTarget: 0 }), no = Be(cc), fc = _({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), dc = Be(fc), pc = _({}, ft, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), mc = Be(pc), hc = _({}, ft, { data: 0 }), yi = Be(hc), vc = {
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
  }, yc = {
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
  }, gc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function wc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = gc[e]) ? !!n[e] : !1;
  }
  function to() {
    return wc;
  }
  var Sc = _({}, Qt, { key: function(e) {
    if (e.key) {
      var n = vc[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = Dr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: to, charCode: function(e) {
    return e.type === "keypress" ? Dr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Dr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), kc = Be(Sc), Ec = _({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gi = Be(Ec), Cc = _({}, Qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: to }), _c = Be(Cc), xc = _({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Nc = Be(xc), Pc = _({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zc = Be(Pc), Tc = [9, 13, 27, 32], ro = te && "CompositionEvent" in window, Yt = null;
  te && "documentMode" in document && (Yt = document.documentMode);
  var Lc = te && "TextEvent" in window && !Yt, wi = te && (!ro || Yt && 8 < Yt && 11 >= Yt), Si = " ", ki = !1;
  function Ei(e, n) {
    switch (e) {
      case "keyup":
        return Tc.indexOf(n.keyCode) !== -1;
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
  function Ci(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var dt = !1;
  function Rc(e, n) {
    switch (e) {
      case "compositionend":
        return Ci(n);
      case "keypress":
        return n.which !== 32 ? null : (ki = !0, Si);
      case "textInput":
        return e = n.data, e === Si && ki ? null : e;
      default:
        return null;
    }
  }
  function Ic(e, n) {
    if (dt) return e === "compositionend" || !ro && Ei(e, n) ? (e = mi(), Or = Jl = In = null, dt = !1, e) : null;
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
        return wi && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Oc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function _i(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Oc[e.type] : n === "textarea";
  }
  function xi(e, n, t, r) {
    Qu(r), n = Br(n, "onChange"), 0 < n.length && (t = new ql("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Xt = null, Gt = null;
  function Dc(e) {
    Hi(e, 0);
  }
  function jr(e) {
    var n = yt(e);
    if (Ou(n)) return e;
  }
  function Mc(e, n) {
    if (e === "change") return n;
  }
  var Ni = !1;
  if (te) {
    var lo;
    if (te) {
      var oo = "oninput" in document;
      if (!oo) {
        var Pi = document.createElement("div");
        Pi.setAttribute("oninput", "return;"), oo = typeof Pi.oninput == "function";
      }
      lo = oo;
    } else lo = !1;
    Ni = lo && (!document.documentMode || 9 < document.documentMode);
  }
  function zi() {
    Xt && (Xt.detachEvent("onpropertychange", Ti), Gt = Xt = null);
  }
  function Ti(e) {
    if (e.propertyName === "value" && jr(Gt)) {
      var n = [];
      xi(n, Gt, e, Ul(e)), Gu(Dc, n);
    }
  }
  function Fc(e, n, t) {
    e === "focusin" ? (zi(), Xt = n, Gt = t, Xt.attachEvent("onpropertychange", Ti)) : e === "focusout" && zi();
  }
  function jc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return jr(Gt);
  }
  function Uc(e, n) {
    if (e === "click") return jr(n);
  }
  function Vc(e, n) {
    if (e === "input" || e === "change") return jr(n);
  }
  function Ac(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var rn = typeof Object.is == "function" ? Object.is : Ac;
  function Zt(e, n) {
    if (rn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!$.call(n, l) || !rn(e[l], n[l])) return !1;
    }
    return !0;
  }
  function Li(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ri(e, n) {
    var t = Li(e);
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
      t = Li(t);
    }
  }
  function Ii(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Ii(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Oi() {
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
  function uo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Bc(e) {
    var n = Oi(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Ii(t.ownerDocument.documentElement, t)) {
      if (r !== null && uo(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ri(t, o);
          var u = Ri(
            t,
            r
          );
          l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(u.node, u.offset)) : (n.setEnd(u.node, u.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var $c = te && "documentMode" in document && 11 >= document.documentMode, pt = null, io = null, Jt = null, so = !1;
  function Di(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    so || pt == null || pt !== Sr(r) || (r = pt, "selectionStart" in r && uo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jt && Zt(Jt, r) || (Jt = r, r = Br(io, "onSelect"), 0 < r.length && (n = new ql("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = pt)));
  }
  function Ur(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var mt = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, ao = {}, Mi = {};
  te && (Mi = document.createElement("div").style, "AnimationEvent" in window || (delete mt.animationend.animation, delete mt.animationiteration.animation, delete mt.animationstart.animation), "TransitionEvent" in window || delete mt.transitionend.transition);
  function Vr(e) {
    if (ao[e]) return ao[e];
    if (!mt[e]) return e;
    var n = mt[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in Mi) return ao[e] = n[t];
    return e;
  }
  var Fi = Vr("animationend"), ji = Vr("animationiteration"), Ui = Vr("animationstart"), Vi = Vr("transitionend"), Ai = /* @__PURE__ */ new Map(), Bi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function On(e, n) {
    Ai.set(e, n), ce(n, [e]);
  }
  for (var co = 0; co < Bi.length; co++) {
    var fo = Bi[co], Hc = fo.toLowerCase(), Wc = fo[0].toUpperCase() + fo.slice(1);
    On(Hc, "on" + Wc);
  }
  On(Fi, "onAnimationEnd"), On(ji, "onAnimationIteration"), On(Ui, "onAnimationStart"), On("dblclick", "onDoubleClick"), On("focusin", "onFocus"), On("focusout", "onBlur"), On(Vi, "onTransitionEnd"), ye("onMouseEnter", ["mouseout", "mouseover"]), ye("onMouseLeave", ["mouseout", "mouseover"]), ye("onPointerEnter", ["pointerout", "pointerover"]), ye("onPointerLeave", ["pointerout", "pointerover"]), ce("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ce("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ce("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ce("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ce("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ce("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qc = new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));
  function $i(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Ha(r, n, void 0, e), e.currentTarget = null;
  }
  function Hi(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (n) for (var u = r.length - 1; 0 <= u; u--) {
          var i = r[u], s = i.instance, p = i.currentTarget;
          if (i = i.listener, s !== o && l.isPropagationStopped()) break e;
          $i(l, i, p), o = s;
        }
        else for (u = 0; u < r.length; u++) {
          if (i = r[u], s = i.instance, p = i.currentTarget, i = i.listener, s !== o && l.isPropagationStopped()) break e;
          $i(l, i, p), o = s;
        }
      }
    }
    if (Cr) throw e = $l, Cr = !1, $l = null, e;
  }
  function Z(e, n) {
    var t = n[So];
    t === void 0 && (t = n[So] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (Wi(n, e, 2, !1), t.add(r));
  }
  function po(e, n, t) {
    var r = 0;
    n && (r |= 4), Wi(t, e, r, n);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function bt(e) {
    if (!e[Ar]) {
      e[Ar] = !0, ke.forEach(function(t) {
        t !== "selectionchange" && (Qc.has(t) || po(t, !1, e), po(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ar] || (n[Ar] = !0, po("selectionchange", !1, n));
    }
  }
  function Wi(e, n, t, r) {
    switch (pi(n)) {
      case 1:
        var l = oc;
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
      var u = r.tag;
      if (u === 3 || u === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || i.nodeType === 8 && i.parentNode === l) break;
        if (u === 4) for (u = r.return; u !== null; ) {
          var s = u.tag;
          if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          u = u.return;
        }
        for (; i !== null; ) {
          if (u = Gn(i), u === null) return;
          if (s = u.tag, s === 5 || s === 6) {
            r = o = u;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
    Gu(function() {
      var p = o, y = Ul(t), g = [];
      e: {
        var h = Ai.get(e);
        if (h !== void 0) {
          var E = ql, x = e;
          switch (e) {
            case "keypress":
              if (Dr(t) === 0) break e;
            case "keydown":
            case "keyup":
              E = kc;
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
              E = vi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = ac;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = _c;
              break;
            case Fi:
            case ji:
            case Ui:
              E = dc;
              break;
            case Vi:
              E = Nc;
              break;
            case "scroll":
              E = ic;
              break;
            case "wheel":
              E = zc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = mc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = gi;
          }
          var N = (n & 4) !== 0, ie = !N && e === "scroll", f = N ? h !== null ? h + "Capture" : null : h;
          N = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Mt(a, f), w != null && N.push(er(a, w, d)))), ie) break;
            a = a.return;
          }
          0 < N.length && (h = new E(h, x, null, t, y), g.push({ event: h, listeners: N }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", h && t !== jl && (x = t.relatedTarget || t.fromElement) && (Gn(x) || x[wn])) break e;
          if ((E || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, E ? (x = t.relatedTarget || t.toElement, E = p, x = x ? Gn(x) : null, x !== null && (ie = Xn(x), x !== ie || x.tag !== 5 && x.tag !== 6) && (x = null)) : (E = null, x = p), E !== x)) {
            if (N = vi, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (N = gi, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), ie = E == null ? h : yt(E), d = x == null ? h : yt(x), h = new N(w, a + "leave", E, t, y), h.target = ie, h.relatedTarget = d, w = null, Gn(y) === p && (N = new N(f, a + "enter", x, t, y), N.target = d, N.relatedTarget = ie, w = N), ie = w, E && x) n: {
              for (N = E, f = x, a = 0, d = N; d; d = ht(d)) a++;
              for (d = 0, w = f; w; w = ht(w)) d++;
              for (; 0 < a - d; ) N = ht(N), a--;
              for (; 0 < d - a; ) f = ht(f), d--;
              for (; a--; ) {
                if (N === f || f !== null && N === f.alternate) break n;
                N = ht(N), f = ht(f);
              }
              N = null;
            }
            else N = null;
            E !== null && Qi(g, h, E, N, !1), x !== null && ie !== null && Qi(g, ie, x, N, !0);
          }
        }
        e: {
          if (h = p ? yt(p) : window, E = h.nodeName && h.nodeName.toLowerCase(), E === "select" || E === "input" && h.type === "file") var P = Mc;
          else if (_i(h)) if (Ni) P = Vc;
          else {
            P = jc;
            var z = Fc;
          }
          else (E = h.nodeName) && E.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = Uc);
          if (P && (P = P(e, p))) {
            xi(g, P, t, y);
            break e;
          }
          z && z(e, h, p), e === "focusout" && (z = h._wrapperState) && z.controlled && h.type === "number" && Il(h, "number", h.value);
        }
        switch (z = p ? yt(p) : window, e) {
          case "focusin":
            (_i(z) || z.contentEditable === "true") && (pt = z, io = p, Jt = null);
            break;
          case "focusout":
            Jt = io = pt = null;
            break;
          case "mousedown":
            so = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            so = !1, Di(g, t, y);
            break;
          case "selectionchange":
            if ($c) break;
          case "keydown":
          case "keyup":
            Di(g, t, y);
        }
        var T;
        if (ro) e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
        else dt ? Ei(e, t) && (R = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (R = "onCompositionStart");
        R && (wi && t.locale !== "ko" && (dt || R !== "onCompositionStart" ? R === "onCompositionEnd" && dt && (T = mi()) : (In = y, Jl = "value" in In ? In.value : In.textContent, dt = !0)), z = Br(p, R), 0 < z.length && (R = new yi(R, e, null, t, y), g.push({ event: R, listeners: z }), T ? R.data = T : (T = Ci(t), T !== null && (R.data = T)))), (T = Lc ? Rc(e, t) : Ic(e, t)) && (p = Br(p, "onBeforeInput"), 0 < p.length && (y = new yi("onBeforeInput", "beforeinput", null, t, y), g.push({ event: y, listeners: p }), y.data = T));
      }
      Hi(g, n);
    });
  }
  function er(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Br(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Mt(e, t), o != null && r.unshift(er(e, o, l)), o = Mt(e, n), o != null && r.push(er(e, o, l))), e = e.return;
    }
    return r;
  }
  function ht(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qi(e, n, t, r, l) {
    for (var o = n._reactName, u = []; t !== null && t !== r; ) {
      var i = t, s = i.alternate, p = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 && p !== null && (i = p, l ? (s = Mt(t, o), s != null && u.unshift(er(t, s, i))) : l || (s = Mt(t, o), s != null && u.push(er(t, s, i)))), t = t.return;
    }
    u.length !== 0 && e.push({ event: n, listeners: u });
  }
  var Kc = /\r\n?/g, Yc = /\u0000|\uFFFD/g;
  function Ki(e) {
    return (typeof e == "string" ? e : "" + e).replace(Kc, `
`).replace(Yc, "");
  }
  function $r(e, n, t) {
    if (n = Ki(n), Ki(e) !== n && t) throw Error(m(425));
  }
  function Hr() {
  }
  var ho = null, vo = null;
  function yo(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var go = typeof setTimeout == "function" ? setTimeout : void 0, Xc = typeof clearTimeout == "function" ? clearTimeout : void 0, Yi = typeof Promise == "function" ? Promise : void 0, Gc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yi < "u" ? function(e) {
    return Yi.resolve(null).then(e).catch(Zc);
  } : go;
  function Zc(e) {
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
          e.removeChild(l), Wt(n);
          return;
        }
        r--;
      } else t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Wt(n);
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
  function Xi(e) {
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
  var vt = Math.random().toString(36).slice(2), mn = "__reactFiber$" + vt, nr = "__reactProps$" + vt, wn = "__reactContainer$" + vt, So = "__reactEvents$" + vt, Jc = "__reactListeners$" + vt, qc = "__reactHandles$" + vt;
  function Gn(e) {
    var n = e[mn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[wn] || t[mn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Xi(e); e !== null; ) {
          if (t = e[mn]) return t;
          e = Xi(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function tr(e) {
    return e = e[mn] || e[wn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function yt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[nr] || null;
  }
  var ko = [], gt = -1;
  function Mn(e) {
    return { current: e };
  }
  function J(e) {
    0 > gt || (e.current = ko[gt], ko[gt] = null, gt--);
  }
  function G(e, n) {
    gt++, ko[gt] = e.current, e.current = n;
  }
  var Fn = {}, Ce = Mn(Fn), Ie = Mn(!1), Zn = Fn;
  function wt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in t) l[o] = n[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Oe(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qr() {
    J(Ie), J(Ce);
  }
  function Gi(e, n, t) {
    if (Ce.current !== Fn) throw Error(m(168));
    G(Ce, n), G(Ie, t);
  }
  function Zi(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, X(e) || "Unknown", l));
    return _({}, t, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, Zn = Ce.current, G(Ce, e), G(Ie, Ie.current), !0;
  }
  function Ji(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t ? (e = Zi(e, n, Zn), r.__reactInternalMemoizedMergedChildContext = e, J(Ie), J(Ce), G(Ce, e)) : J(Ie), G(Ie, t);
  }
  var Sn = null, Yr = !1, Eo = !1;
  function qi(e) {
    Sn === null ? Sn = [e] : Sn.push(e);
  }
  function bc(e) {
    Yr = !0, qi(e);
  }
  function jn() {
    if (!Eo && Sn !== null) {
      Eo = !0;
      var e = 0, n = W;
      try {
        var t = Sn;
        for (W = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Sn = null, Yr = !1;
      } catch (l) {
        throw Sn !== null && (Sn = Sn.slice(e + 1)), ei(Hl, jn), l;
      } finally {
        W = n, Eo = !1;
      }
    }
    return null;
  }
  var St = [], kt = 0, Xr = null, Gr = 0, Ke = [], Ye = 0, Jn = null, kn = 1, En = "";
  function qn(e, n) {
    St[kt++] = Gr, St[kt++] = Xr, Xr = e, Gr = n;
  }
  function bi(e, n, t) {
    Ke[Ye++] = kn, Ke[Ye++] = En, Ke[Ye++] = Jn, Jn = e;
    var r = kn;
    e = En;
    var l = 32 - tn(r) - 1;
    r &= ~(1 << l), t += 1;
    var o = 32 - tn(n) + l;
    if (30 < o) {
      var u = l - l % 5;
      o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, kn = 1 << 32 - tn(n) + l | t << l | r, En = o + e;
    } else kn = 1 << o | t << l | r, En = e;
  }
  function Co(e) {
    e.return !== null && (qn(e, 1), bi(e, 1, 0));
  }
  function _o(e) {
    for (; e === Xr; ) Xr = St[--kt], St[kt] = null, Gr = St[--kt], St[kt] = null;
    for (; e === Jn; ) Jn = Ke[--Ye], Ke[Ye] = null, En = Ke[--Ye], Ke[Ye] = null, kn = Ke[--Ye], Ke[Ye] = null;
  }
  var $e = null, He = null, b = !1, ln = null;
  function es(e, n) {
    var t = Je(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function ns(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, $e = e, He = Dn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, $e = e, He = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Jn !== null ? { id: kn, overflow: En } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Je(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, $e = e, He = null, !0) : !1;
      default:
        return !1;
    }
  }
  function xo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function No(e) {
    if (b) {
      var n = He;
      if (n) {
        var t = n;
        if (!ns(e, n)) {
          if (xo(e)) throw Error(m(418));
          n = Dn(t.nextSibling);
          var r = $e;
          n && ns(e, n) ? es(r, t) : (e.flags = e.flags & -4097 | 2, b = !1, $e = e);
        }
      } else {
        if (xo(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, b = !1, $e = e;
      }
    }
  }
  function ts(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    $e = e;
  }
  function Zr(e) {
    if (e !== $e) return !1;
    if (!b) return ts(e), b = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !yo(e.type, e.memoizedProps)), n && (n = He)) {
      if (xo(e)) throw rs(), Error(m(418));
      for (; n; ) es(e, n), n = Dn(n.nextSibling);
    }
    if (ts(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                He = Dn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        He = null;
      }
    } else He = $e ? Dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    for (var e = He; e; ) e = Dn(e.nextSibling);
  }
  function Et() {
    He = $e = null, b = !1;
  }
  function Po(e) {
    ln === null ? ln = [e] : ln.push(e);
  }
  var ef = Ee.ReactCurrentBatchConfig;
  function rr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, o = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(u) {
          var i = l.refs;
          u === null ? delete i[o] : i[o] = u;
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
  function ls(e) {
    var n = e._init;
    return n(e._payload);
  }
  function os(e) {
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
    function u(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = gu(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, w) {
      var P = d.type;
      return P === Le ? y(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Re && ls(P) === a.type) ? (w = l(a, d.props), w.ref = rr(f, a, d), w.return = f, w) : (w = kl(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, a, d), w.return = f, w);
    }
    function p(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = wu(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, w, P) {
      return a === null || a.tag !== 7 ? (a = ut(d, f.mode, w, P), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function g(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = gu("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case en:
            return d = kl(a.type, a.key, a.props, null, f.mode, d), d.ref = rr(f, null, a), d.return = f, d;
          case Pe:
            return a = wu(a, f.mode, d), a.return = f, a;
          case Re:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (It(a) || L(a)) return a = ut(a, f.mode, d, null), a.return = f, a;
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var P = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return P !== null ? null : i(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case en:
            return d.key === P ? s(f, a, d, w) : null;
          case Pe:
            return d.key === P ? p(f, a, d, w) : null;
          case Re:
            return P = d._init, h(
              f,
              a,
              P(d._payload),
              w
            );
        }
        if (It(d) || L(d)) return P !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function E(f, a, d, w, P) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, i(a, f, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case en:
            return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, P);
          case Pe:
            return f = f.get(w.key === null ? d : w.key) || null, p(a, f, w, P);
          case Re:
            var z = w._init;
            return E(f, a, d, z(w._payload), P);
        }
        if (It(w) || L(w)) return f = f.get(d) || null, y(a, f, w, P, null);
        Jr(a, w);
      }
      return null;
    }
    function x(f, a, d, w) {
      for (var P = null, z = null, T = a, R = a = 0, ve = null; T !== null && R < d.length; R++) {
        T.index > R ? (ve = T, T = null) : ve = T.sibling;
        var B = h(f, T, d[R], w);
        if (B === null) {
          T === null && (T = ve);
          break;
        }
        e && T && B.alternate === null && n(f, T), a = o(B, a, R), z === null ? P = B : z.sibling = B, z = B, T = ve;
      }
      if (R === d.length) return t(f, T), b && qn(f, R), P;
      if (T === null) {
        for (; R < d.length; R++) T = g(f, d[R], w), T !== null && (a = o(T, a, R), z === null ? P = T : z.sibling = T, z = T);
        return b && qn(f, R), P;
      }
      for (T = r(f, T); R < d.length; R++) ve = E(T, f, R, d[R], w), ve !== null && (e && ve.alternate !== null && T.delete(ve.key === null ? R : ve.key), a = o(ve, a, R), z === null ? P = ve : z.sibling = ve, z = ve);
      return e && T.forEach(function(Kn) {
        return n(f, Kn);
      }), b && qn(f, R), P;
    }
    function N(f, a, d, w) {
      var P = L(d);
      if (typeof P != "function") throw Error(m(150));
      if (d = P.call(d), d == null) throw Error(m(151));
      for (var z = P = null, T = a, R = a = 0, ve = null, B = d.next(); T !== null && !B.done; R++, B = d.next()) {
        T.index > R ? (ve = T, T = null) : ve = T.sibling;
        var Kn = h(f, T, B.value, w);
        if (Kn === null) {
          T === null && (T = ve);
          break;
        }
        e && T && Kn.alternate === null && n(f, T), a = o(Kn, a, R), z === null ? P = Kn : z.sibling = Kn, z = Kn, T = ve;
      }
      if (B.done) return t(
        f,
        T
      ), b && qn(f, R), P;
      if (T === null) {
        for (; !B.done; R++, B = d.next()) B = g(f, B.value, w), B !== null && (a = o(B, a, R), z === null ? P = B : z.sibling = B, z = B);
        return b && qn(f, R), P;
      }
      for (T = r(f, T); !B.done; R++, B = d.next()) B = E(T, f, R, B.value, w), B !== null && (e && B.alternate !== null && T.delete(B.key === null ? R : B.key), a = o(B, a, R), z === null ? P = B : z.sibling = B, z = B);
      return e && T.forEach(function(Of) {
        return n(f, Of);
      }), b && qn(f, R), P;
    }
    function ie(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === Le && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case en:
            e: {
              for (var P = d.key, z = a; z !== null; ) {
                if (z.key === P) {
                  if (P = d.type, P === Le) {
                    if (z.tag === 7) {
                      t(f, z.sibling), a = l(z, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (z.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Re && ls(P) === z.type) {
                    t(f, z.sibling), a = l(z, d.props), a.ref = rr(f, z, d), a.return = f, f = a;
                    break e;
                  }
                  t(f, z);
                  break;
                } else n(f, z);
                z = z.sibling;
              }
              d.type === Le ? (a = ut(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = kl(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, a, d), w.return = f, f = w);
            }
            return u(f);
          case Pe:
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
              a = wu(d, f.mode, w), a.return = f, f = a;
            }
            return u(f);
          case Re:
            return z = d._init, ie(f, a, z(d._payload), w);
        }
        if (It(d)) return x(f, a, d, w);
        if (L(d)) return N(f, a, d, w);
        Jr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = gu(d, f.mode, w), a.return = f, f = a), u(f)) : t(f, a);
    }
    return ie;
  }
  var Ct = os(!0), us = os(!1), qr = Mn(null), br = null, _t = null, zo = null;
  function To() {
    zo = _t = br = null;
  }
  function Lo(e) {
    var n = qr.current;
    J(qr), e._currentValue = n;
  }
  function Ro(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function xt(e, n) {
    br = e, zo = _t = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (De = !0), e.firstContext = null);
  }
  function Xe(e) {
    var n = e._currentValue;
    if (zo !== e) if (e = { context: e, memoizedValue: n, next: null }, _t === null) {
      if (br === null) throw Error(m(308));
      _t = e, br.dependencies = { lanes: 0, firstContext: e };
    } else _t = _t.next = e;
    return n;
  }
  var bn = null;
  function Io(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function is(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Io(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Cn(e, r);
  }
  function Cn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Un = !1;
  function Oo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ss(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function _n(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Vn(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, U & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Cn(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Io(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Cn(e, t);
  }
  function el(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Kl(e, t);
    }
  }
  function as(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, o = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var u = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          o === null ? l = o = u : o = o.next = u, t = t.next;
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
    var o = l.firstBaseUpdate, u = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, p = s.next;
      s.next = null, u === null ? o = p : u.next = p, u = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, i = y.lastBaseUpdate, i !== u && (i === null ? y.firstBaseUpdate = p : i.next = p, y.lastBaseUpdate = s));
    }
    if (o !== null) {
      var g = l.baseState;
      u = 0, y = p = s = null, i = o;
      do {
        var h = i.lane, E = i.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: E,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var x = e, N = i;
            switch (h = n, E = t, N.tag) {
              case 1:
                if (x = N.payload, typeof x == "function") {
                  g = x.call(E, g, h);
                  break e;
                }
                g = x;
                break e;
              case 3:
                x.flags = x.flags & -65537 | 128;
              case 0:
                if (x = N.payload, h = typeof x == "function" ? x.call(E, g, h) : x, h == null) break e;
                g = _({}, g, h);
                break e;
              case 2:
                Un = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [i] : h.push(i));
        } else E = { eventTime: E, lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (p = y = E, s = g) : y = y.next = E, u |= h;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null) break;
          h = i, i = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          u |= l.lane, l = l.next;
        while (l !== n);
      } else o === null && (l.shared.lanes = 0);
      tt |= u, e.lanes = u, e.memoizedState = g;
    }
  }
  function cs(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var lr = {}, hn = Mn(lr), or = Mn(lr), ur = Mn(lr);
  function et(e) {
    if (e === lr) throw Error(m(174));
    return e;
  }
  function Do(e, n) {
    switch (G(ur, n), G(or, e), G(hn, lr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Dl(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Dl(n, e);
    }
    J(hn), G(hn, n);
  }
  function Nt() {
    J(hn), J(or), J(ur);
  }
  function fs(e) {
    et(ur.current);
    var n = et(hn.current), t = Dl(n, e.type);
    n !== t && (G(or, e), G(hn, t));
  }
  function Mo(e) {
    or.current === e && (J(hn), J(or));
  }
  var ee = Mn(0);
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
  var rl = Ee.ReactCurrentDispatcher, Uo = Ee.ReactCurrentBatchConfig, nt = 0, ne = null, de = null, me = null, ll = !1, ir = !1, sr = 0, nf = 0;
  function _e() {
    throw Error(m(321));
  }
  function Vo(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!rn(e[t], n[t])) return !1;
    return !0;
  }
  function Ao(e, n, t, r, l, o) {
    if (nt = o, ne = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, rl.current = e === null || e.memoizedState === null ? of : uf, e = t(r, l), ir) {
      o = 0;
      do {
        if (ir = !1, sr = 0, 25 <= o) throw Error(m(301));
        o += 1, me = de = null, n.updateQueue = null, rl.current = sf, e = t(r, l);
      } while (ir);
    }
    if (rl.current = il, n = de !== null && de.next !== null, nt = 0, me = de = ne = null, ll = !1, n) throw Error(m(300));
    return e;
  }
  function Bo() {
    var e = sr !== 0;
    return sr = 0, e;
  }
  function vn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return me === null ? ne.memoizedState = me = e : me = me.next = e, me;
  }
  function Ge() {
    if (de === null) {
      var e = ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var n = me === null ? ne.memoizedState : me.next;
    if (n !== null) me = n, de = e;
    else {
      if (e === null) throw Error(m(310));
      de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, me === null ? ne.memoizedState = me = e : me = me.next = e;
    }
    return me;
  }
  function ar(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function $o(e) {
    var n = Ge(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = de, l = r.baseQueue, o = t.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        l.next = o.next, o.next = u;
      }
      r.baseQueue = l = o, t.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var i = u = null, s = null, p = o;
      do {
        var y = p.lane;
        if ((nt & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = g, u = r) : s = s.next = g, ne.lanes |= y, tt |= y;
        }
        p = p.next;
      } while (p !== null && p !== o);
      s === null ? u = r : s.next = i, rn(r, n.memoizedState) || (De = !0), n.memoizedState = r, n.baseState = u, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, ne.lanes |= o, tt |= o, l = l.next;
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Ho(e) {
    var n = Ge(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, o = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var u = l = l.next;
      do
        o = e(o, u.action), u = u.next;
      while (u !== l);
      rn(o, n.memoizedState) || (De = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
    }
    return [o, r];
  }
  function ds() {
  }
  function ps(e, n) {
    var t = ne, r = Ge(), l = n(), o = !rn(r.memoizedState, l);
    if (o && (r.memoizedState = l, De = !0), r = r.queue, Wo(vs.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || me !== null && me.memoizedState.tag & 1) {
      if (t.flags |= 2048, cr(9, hs.bind(null, t, r, l, n), void 0, null), he === null) throw Error(m(349));
      nt & 30 || ms(t, n, l);
    }
    return l;
  }
  function ms(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = ne.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ne.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function hs(e, n, t, r) {
    n.value = t, n.getSnapshot = r, ys(n) && gs(e);
  }
  function vs(e, n, t) {
    return t(function() {
      ys(n) && gs(e);
    });
  }
  function ys(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !rn(e, t);
    } catch {
      return !0;
    }
  }
  function gs(e) {
    var n = Cn(e, 1);
    n !== null && an(n, e, 1, -1);
  }
  function ws(e) {
    var n = vn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ar, lastRenderedState: e }, n.queue = e, e = e.dispatch = lf.bind(null, ne, e), [n.memoizedState, e];
  }
  function cr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = ne.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ne.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function Ss() {
    return Ge().memoizedState;
  }
  function ol(e, n, t, r) {
    var l = vn();
    ne.flags |= e, l.memoizedState = cr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function ul(e, n, t, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (de !== null) {
      var u = de.memoizedState;
      if (o = u.destroy, r !== null && Vo(r, u.deps)) {
        l.memoizedState = cr(n, t, o, r);
        return;
      }
    }
    ne.flags |= e, l.memoizedState = cr(1 | n, t, o, r);
  }
  function ks(e, n) {
    return ol(8390656, 8, e, n);
  }
  function Wo(e, n) {
    return ul(2048, 8, e, n);
  }
  function Es(e, n) {
    return ul(4, 2, e, n);
  }
  function Cs(e, n) {
    return ul(4, 4, e, n);
  }
  function _s(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function xs(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ul(4, 4, _s.bind(null, n, e), t);
  }
  function Qo() {
  }
  function Ns(e, n) {
    var t = Ge();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vo(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Ps(e, n) {
    var t = Ge();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vo(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function zs(e, n, t) {
    return nt & 21 ? (rn(t, n) || (t = li(), ne.lanes |= t, tt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, De = !0), e.memoizedState = t);
  }
  function tf(e, n) {
    var t = W;
    W = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = Uo.transition;
    Uo.transition = {};
    try {
      e(!1), n();
    } finally {
      W = t, Uo.transition = r;
    }
  }
  function Ts() {
    return Ge().memoizedState;
  }
  function rf(e, n, t) {
    var r = Hn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ls(e)) Rs(n, t);
    else if (t = is(e, n, t, r), t !== null) {
      var l = Te();
      an(t, e, r, l), Is(t, n, r);
    }
  }
  function lf(e, n, t) {
    var r = Hn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Ls(e)) Rs(n, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
        var u = n.lastRenderedState, i = o(u, t);
        if (l.hasEagerState = !0, l.eagerState = i, rn(i, u)) {
          var s = n.interleaved;
          s === null ? (l.next = l, Io(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      t = is(e, n, l, r), t !== null && (l = Te(), an(t, e, r, l), Is(t, n, r));
    }
  }
  function Ls(e) {
    var n = e.alternate;
    return e === ne || n !== null && n === ne;
  }
  function Rs(e, n) {
    ir = ll = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Is(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Kl(e, t);
    }
  }
  var il = { readContext: Xe, useCallback: _e, useContext: _e, useEffect: _e, useImperativeHandle: _e, useInsertionEffect: _e, useLayoutEffect: _e, useMemo: _e, useReducer: _e, useRef: _e, useState: _e, useDebugValue: _e, useDeferredValue: _e, useTransition: _e, useMutableSource: _e, useSyncExternalStore: _e, useId: _e, unstable_isNewReconciler: !1 }, of = { readContext: Xe, useCallback: function(e, n) {
    return vn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Xe, useEffect: ks, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ol(
      4194308,
      4,
      _s.bind(null, n, e),
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
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = rf.bind(null, ne, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = vn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: ws, useDebugValue: Qo, useDeferredValue: function(e) {
    return vn().memoizedState = e;
  }, useTransition: function() {
    var e = ws(!1), n = e[0];
    return e = tf.bind(null, e[1]), vn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = ne, l = vn();
    if (b) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else {
      if (t = n(), he === null) throw Error(m(349));
      nt & 30 || ms(r, n, t);
    }
    l.memoizedState = t;
    var o = { value: t, getSnapshot: n };
    return l.queue = o, ks(vs.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, cr(9, hs.bind(null, r, o, t, n), void 0, null), t;
  }, useId: function() {
    var e = vn(), n = he.identifierPrefix;
    if (b) {
      var t = En, r = kn;
      t = (r & ~(1 << 32 - tn(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = sr++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = nf++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, uf = {
    readContext: Xe,
    useCallback: Ns,
    useContext: Xe,
    useEffect: Wo,
    useImperativeHandle: xs,
    useInsertionEffect: Es,
    useLayoutEffect: Cs,
    useMemo: Ps,
    useReducer: $o,
    useRef: Ss,
    useState: function() {
      return $o(ar);
    },
    useDebugValue: Qo,
    useDeferredValue: function(e) {
      var n = Ge();
      return zs(n, de.memoizedState, e);
    },
    useTransition: function() {
      var e = $o(ar)[0], n = Ge().memoizedState;
      return [e, n];
    },
    useMutableSource: ds,
    useSyncExternalStore: ps,
    useId: Ts,
    unstable_isNewReconciler: !1
  }, sf = { readContext: Xe, useCallback: Ns, useContext: Xe, useEffect: Wo, useImperativeHandle: xs, useInsertionEffect: Es, useLayoutEffect: Cs, useMemo: Ps, useReducer: Ho, useRef: Ss, useState: function() {
    return Ho(ar);
  }, useDebugValue: Qo, useDeferredValue: function(e) {
    var n = Ge();
    return de === null ? n.memoizedState = e : zs(n, de.memoizedState, e);
  }, useTransition: function() {
    var e = Ho(ar)[0], n = Ge().memoizedState;
    return [e, n];
  }, useMutableSource: ds, useSyncExternalStore: ps, useId: Ts, unstable_isNewReconciler: !1 };
  function on(e, n) {
    if (e && e.defaultProps) {
      n = _({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Ko(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : _({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var sl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = Te(), l = Hn(e), o = _n(r, l);
    o.payload = n, t != null && (o.callback = t), n = Vn(e, o, l), n !== null && (an(n, e, l, r), el(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Te(), l = Hn(e), o = _n(r, l);
    o.tag = 1, o.payload = n, t != null && (o.callback = t), n = Vn(e, o, l), n !== null && (an(n, e, l, r), el(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Te(), r = Hn(e), l = _n(t, r);
    l.tag = 2, n != null && (l.callback = n), n = Vn(e, l, r), n !== null && (an(n, e, r, t), el(n, e, r));
  } };
  function Os(e, n, t, r, l, o, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : n.prototype && n.prototype.isPureReactComponent ? !Zt(t, r) || !Zt(l, o) : !0;
  }
  function Ds(e, n, t) {
    var r = !1, l = Fn, o = n.contextType;
    return typeof o == "object" && o !== null ? o = Xe(o) : (l = Oe(n) ? Zn : Ce.current, r = n.contextTypes, o = (r = r != null) ? wt(e, l) : Fn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
  }
  function Ms(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sl.enqueueReplaceState(n, n.state, null);
  }
  function Yo(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, Oo(e);
    var o = n.contextType;
    typeof o == "object" && o !== null ? l.context = Xe(o) : (o = Oe(n) ? Zn : Ce.current, l.context = wt(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Ko(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && sl.enqueueReplaceState(l, l.state, null), nl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pt(e, n) {
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
  var af = typeof WeakMap == "function" ? WeakMap : Map;
  function Fs(e, n, t) {
    t = _n(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      hl || (hl = !0, cu = r), Go(e, n);
    }, t;
  }
  function js(e, n, t) {
    t = _n(-1, t), t.tag = 3;
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
      var u = n.stack;
      this.componentDidCatch(n.value, { componentStack: u !== null ? u : "" });
    }), t;
  }
  function Us(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new af();
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
  function As(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = _n(-1, 1), n.tag = 2, Vn(t, n, 1))), t.lanes |= 1), e);
  }
  var cf = Ee.ReactCurrentOwner, De = !1;
  function ze(e, n, t, r) {
    n.child = e === null ? us(n, null, t, r) : Ct(n, e.child, t, r);
  }
  function Bs(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return xt(n, l), r = Ao(e, n, t, r, o, l), t = Bo(), e !== null && !De ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, xn(e, n, l)) : (b && t && Co(n), n.flags |= 1, ze(e, n, r, l), n.child);
  }
  function $s(e, n, t, r, l) {
    if (e === null) {
      var o = t.type;
      return typeof o == "function" && !yu(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Hs(e, n, o, r, l)) : (e = kl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var u = o.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Zt, t(u, r) && e.ref === n.ref) return xn(e, n, l);
    }
    return n.flags |= 1, e = Qn(o, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Hs(e, n, t, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Zt(o, r) && e.ref === n.ref) if (De = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (De = !0);
      else return n.lanes = e.lanes, xn(e, n, l);
    }
    return Zo(e, n, t, r, l);
  }
  function Ws(e, n, t) {
    var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(Tt, We), We |= t;
    else {
      if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, G(Tt, We), We |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, G(Tt, We), We |= r;
    }
    else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, G(Tt, We), We |= r;
    return ze(e, n, l, t), n.child;
  }
  function Qs(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Zo(e, n, t, r, l) {
    var o = Oe(t) ? Zn : Ce.current;
    return o = wt(n, o), xt(n, l), t = Ao(e, n, t, r, o, l), r = Bo(), e !== null && !De ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, xn(e, n, l)) : (b && r && Co(n), n.flags |= 1, ze(e, n, t, l), n.child);
  }
  function Ks(e, n, t, r, l) {
    if (Oe(t)) {
      var o = !0;
      Kr(n);
    } else o = !1;
    if (xt(n, l), n.stateNode === null) cl(e, n), Ds(n, t, r), Yo(n, t, r, l), r = !0;
    else if (e === null) {
      var u = n.stateNode, i = n.memoizedProps;
      u.props = i;
      var s = u.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = Xe(p) : (p = Oe(t) ? Zn : Ce.current, p = wt(n, p));
      var y = t.getDerivedStateFromProps, g = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      g || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || s !== p) && Ms(n, u, r, p), Un = !1;
      var h = n.memoizedState;
      u.state = h, nl(n, r, u, l), s = n.memoizedState, i !== r || h !== s || Ie.current || Un ? (typeof y == "function" && (Ko(n, t, y, r), s = n.memoizedState), (i = Un || Os(n, t, i, r, h, s, p)) ? (g || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), u.props = r, u.state = s, u.context = p, r = i) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      u = n.stateNode, ss(e, n), i = n.memoizedProps, p = n.type === n.elementType ? i : on(n.type, i), u.props = p, g = n.pendingProps, h = u.context, s = t.contextType, typeof s == "object" && s !== null ? s = Xe(s) : (s = Oe(t) ? Zn : Ce.current, s = wt(n, s));
      var E = t.getDerivedStateFromProps;
      (y = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== g || h !== s) && Ms(n, u, r, s), Un = !1, h = n.memoizedState, u.state = h, nl(n, r, u, l);
      var x = n.memoizedState;
      i !== g || h !== x || Ie.current || Un ? (typeof E == "function" && (Ko(n, t, E, r), x = n.memoizedState), (p = Un || Os(n, t, p, r, h, x, s) || !1) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, x, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, x, s)), typeof u.componentDidUpdate == "function" && (n.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = x), u.props = r, u.state = x, u.context = s, r = p) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Jo(e, n, t, r, o, l);
  }
  function Jo(e, n, t, r, l, o) {
    Qs(e, n);
    var u = (n.flags & 128) !== 0;
    if (!r && !u) return l && Ji(n, t, !1), xn(e, n, o);
    r = n.stateNode, cf.current = n;
    var i = u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && u ? (n.child = Ct(n, e.child, null, o), n.child = Ct(n, null, i, o)) : ze(e, n, i, o), n.memoizedState = r.state, l && Ji(n, t, !0), n.child;
  }
  function Ys(e) {
    var n = e.stateNode;
    n.pendingContext ? Gi(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Gi(e, n.context, !1), Do(e, n.containerInfo);
  }
  function Xs(e, n, t, r, l) {
    return Et(), Po(l), n.flags |= 256, ze(e, n, t, r), n.child;
  }
  var qo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gs(e, n, t) {
    var r = n.pendingProps, l = ee.current, o = !1, u = (n.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), G(ee, l & 1), e === null)
      return No(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (u = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, u = { mode: "hidden", children: u }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = El(u, r, 0, null), e = ut(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = bo(t), n.memoizedState = qo, e) : eu(n, u));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return ff(e, n, u, r, i, l, t);
    if (o) {
      o = r.fallback, u = n.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(u & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = Qn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = Qn(i, o) : (o = ut(o, u, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, u = e.child.memoizedState, u = u === null ? bo(t) : { baseLanes: u.baseLanes | t, cachePool: null, transitions: u.transitions }, o.memoizedState = u, o.childLanes = e.childLanes & ~t, n.memoizedState = qo, r;
    }
    return o = e.child, e = o.sibling, r = Qn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function eu(e, n) {
    return n = El({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function al(e, n, t, r) {
    return r !== null && Po(r), Ct(n, e.child, null, t), e = eu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function ff(e, n, t, r, l, o, u) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Xo(Error(m(422))), al(e, n, u, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), o = ut(o, l, u, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && Ct(n, e.child, null, u), n.child.memoizedState = bo(u), n.memoizedState = qo, o);
    if (!(n.mode & 1)) return al(e, n, u, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, o = Error(m(419)), r = Xo(o, r, void 0), al(e, n, u, r);
    }
    if (i = (u & e.childLanes) !== 0, De || i) {
      if (r = he, r !== null) {
        switch (u & -u) {
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
        l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Cn(e, l), an(r, e, l, -1));
      }
      return vu(), r = Xo(Error(m(421))), al(e, n, u, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = _f.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, He = Dn(l.nextSibling), $e = n, b = !0, ln = null, e !== null && (Ke[Ye++] = kn, Ke[Ye++] = En, Ke[Ye++] = Jn, kn = e.id, En = e.overflow, Jn = n), n = eu(n, r.children), n.flags |= 4096, n);
  }
  function Zs(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Ro(e.return, n, t);
  }
  function nu(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
  }
  function Js(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, o = r.tail;
    if (ze(e, n, r.children, t), r = ee.current, r & 2) r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zs(e, t, n);
        else if (e.tag === 19) Zs(e, t, n);
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
    if (G(ee, r), !(n.mode & 1)) n.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && tl(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), nu(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && tl(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        nu(n, !0, t, null, o);
        break;
      case "together":
        nu(n, !1, null, null, void 0);
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
  function df(e, n, t) {
    switch (n.tag) {
      case 3:
        Ys(n), Et();
        break;
      case 5:
        fs(n);
        break;
      case 1:
        Oe(n.type) && Kr(n);
        break;
      case 4:
        Do(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        G(qr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (G(ee, ee.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Gs(e, n, t) : (G(ee, ee.current & 1), e = xn(e, n, t), e !== null ? e.sibling : null);
        G(ee, ee.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r) return Js(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), G(ee, ee.current), r) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Ws(e, n, t);
    }
    return xn(e, n, t);
  }
  var qs, tu, bs, ea;
  qs = function(e, n) {
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
  }, tu = function() {
  }, bs = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, et(hn.current);
      var o = null;
      switch (t) {
        case "input":
          l = Ll(e, l), r = Ll(e, r), o = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), r = _({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Ol(e, l), r = Ol(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
      }
      Ml(t, r);
      var u;
      t = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var i = l[p];
        for (u in i) i.hasOwnProperty(u) && (t || (t = {}), t[u] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Y.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== i && (s != null || i != null)) if (p === "style") if (i) {
          for (u in i) !i.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (t || (t = {}), t[u] = "");
          for (u in s) s.hasOwnProperty(u) && i[u] !== s[u] && (t || (t = {}), t[u] = s[u]);
        } else t || (o || (o = []), o.push(
          p,
          t
        )), t = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (o = o || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (Y.hasOwnProperty(p) ? (s != null && p === "onScroll" && Z("scroll", e), o || i === s || (o = [])) : (o = o || []).push(p, s));
      }
      t && (o = o || []).push("style", t);
      var p = o;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, ea = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function fr(e, n) {
    if (!b) switch (e.tailMode) {
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
  function xe(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function pf(e, n, t) {
    var r = n.pendingProps;
    switch (_o(n), n.tag) {
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
        return xe(n), null;
      case 1:
        return Oe(n.type) && Qr(), xe(n), null;
      case 3:
        return r = n.stateNode, Nt(), J(Ie), J(Ce), jo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, ln !== null && (pu(ln), ln = null))), tu(e, n), xe(n), null;
      case 5:
        Mo(n);
        var l = et(ur.current);
        if (t = n.type, e !== null && n.stateNode != null) bs(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return xe(n), null;
          }
          if (e = et(hn.current), Zr(n)) {
            r = n.stateNode, t = n.type;
            var o = n.memoizedProps;
            switch (r[mn] = n, r[nr] = o, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                Z("cancel", r), Z("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qt.length; l++) Z(qt[l], r);
                break;
              case "source":
                Z("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Z(
                  "error",
                  r
                ), Z("load", r);
                break;
              case "details":
                Z("toggle", r);
                break;
              case "input":
                Du(r, o), Z("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, Z("invalid", r);
                break;
              case "textarea":
                ju(r, o), Z("invalid", r);
            }
            Ml(t, o), l = null;
            for (var u in o) if (o.hasOwnProperty(u)) {
              var i = o[u];
              u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && $r(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && $r(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : Y.hasOwnProperty(u) && i != null && u === "onScroll" && Z("scroll", r);
            }
            switch (t) {
              case "input":
                wr(r), Fu(r, o, !0);
                break;
              case "textarea":
                wr(r), Vu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Hr);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Au(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(t, { is: r.is }) : (e = u.createElement(t), t === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, t), e[mn] = n, e[nr] = r, qs(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (u = Fl(t, r), t) {
                case "dialog":
                  Z("cancel", e), Z("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Z("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qt.length; l++) Z(qt[l], e);
                  l = r;
                  break;
                case "source":
                  Z("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Z(
                    "error",
                    e
                  ), Z("load", e), l = r;
                  break;
                case "details":
                  Z("toggle", e), l = r;
                  break;
                case "input":
                  Du(e, r), l = Ll(e, r), Z("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = _({}, r, { value: void 0 }), Z("invalid", e);
                  break;
                case "textarea":
                  ju(e, r), l = Ol(e, r), Z("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ml(t, l), i = l;
              for (o in i) if (i.hasOwnProperty(o)) {
                var s = i[o];
                o === "style" ? Hu(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Bu(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Ot(e, s) : typeof s == "number" && Ot(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Y.hasOwnProperty(o) ? s != null && o === "onScroll" && Z("scroll", e) : s != null && be(e, o, s, u));
              }
              switch (t) {
                case "input":
                  wr(e), Fu(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Vu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + H(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? it(e, !!r.multiple, o, !1) : r.defaultValue != null && it(
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
        return xe(n), null;
      case 6:
        if (e && n.stateNode != null) ea(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (t = et(ur.current), et(hn.current), Zr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[mn] = n, (o = r.nodeValue !== t) && (e = $e, e !== null)) switch (e.tag) {
              case 3:
                $r(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && $r(r.nodeValue, t, (e.mode & 1) !== 0);
            }
            o && (n.flags |= 4);
          } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[mn] = n, n.stateNode = r;
        }
        return xe(n), null;
      case 13:
        if (J(ee), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (b && He !== null && n.mode & 1 && !(n.flags & 128)) rs(), Et(), n.flags |= 98560, o = !1;
          else if (o = Zr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(m(318));
              if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(m(317));
              o[mn] = n;
            } else Et(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            xe(n), o = !1;
          } else ln !== null && (pu(ln), ln = null), o = !0;
          if (!o) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || ee.current & 1 ? pe === 0 && (pe = 3) : vu())), n.updateQueue !== null && (n.flags |= 4), xe(n), null);
      case 4:
        return Nt(), tu(e, n), e === null && bt(n.stateNode.containerInfo), xe(n), null;
      case 10:
        return Lo(n.type._context), xe(n), null;
      case 17:
        return Oe(n.type) && Qr(), xe(n), null;
      case 19:
        if (J(ee), o = n.memoizedState, o === null) return xe(n), null;
        if (r = (n.flags & 128) !== 0, u = o.rendering, u === null) if (r) fr(o, !1);
        else {
          if (pe !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
            if (u = tl(e), u !== null) {
              for (n.flags |= 128, fr(o, !1), r = u.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return G(ee, ee.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          o.tail !== null && ue() > Lt && (n.flags |= 128, r = !0, fr(o, !1), n.lanes = 4194304);
        }
        else {
          if (!r) if (e = tl(u), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), fr(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !b) return xe(n), null;
          } else 2 * ue() - o.renderingStartTime > Lt && t !== 1073741824 && (n.flags |= 128, r = !0, fr(o, !1), n.lanes = 4194304);
          o.isBackwards ? (u.sibling = n.child, n.child = u) : (t = o.last, t !== null ? t.sibling = u : n.child = u, o.last = u);
        }
        return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = ue(), n.sibling = null, t = ee.current, G(ee, r ? t & 1 | 2 : t & 1), n) : (xe(n), null);
      case 22:
      case 23:
        return hu(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? We & 1073741824 && (xe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : xe(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function mf(e, n) {
    switch (_o(n), n.tag) {
      case 1:
        return Oe(n.type) && Qr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Nt(), J(Ie), J(Ce), jo(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Mo(n), null;
      case 13:
        if (J(ee), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(m(340));
          Et();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return J(ee), null;
      case 4:
        return Nt(), null;
      case 10:
        return Lo(n.type._context), null;
      case 22:
      case 23:
        return hu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1, Ne = !1, hf = typeof WeakSet == "function" ? WeakSet : Set, C = null;
  function zt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (r) {
      oe(e, n, r);
    }
    else t.current = null;
  }
  function ru(e, n, t) {
    try {
      t();
    } catch (r) {
      oe(e, n, r);
    }
  }
  var na = !1;
  function vf(e, n) {
    if (ho = Rr, e = Oi(), uo(e)) {
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
          var u = 0, i = -1, s = -1, p = 0, y = 0, g = e, h = null;
          n: for (; ; ) {
            for (var E; g !== t || l !== 0 && g.nodeType !== 3 || (i = u + l), g !== o || r !== 0 && g.nodeType !== 3 || (s = u + r), g.nodeType === 3 && (u += g.nodeValue.length), (E = g.firstChild) !== null; )
              h = g, g = E;
            for (; ; ) {
              if (g === e) break n;
              if (h === t && ++p === l && (i = u), h === o && ++y === r && (s = u), (E = g.nextSibling) !== null) break;
              g = h, h = g.parentNode;
            }
            g = E;
          }
          t = i === -1 || s === -1 ? null : { start: i, end: s };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (vo = { focusedElem: e, selectionRange: t }, Rr = !1, C = n; C !== null; ) if (n = C, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, C = e;
    else for (; C !== null; ) {
      n = C;
      try {
        var x = n.alternate;
        if (n.flags & 1024) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (x !== null) {
              var N = x.memoizedProps, ie = x.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? N : on(n.type, N), ie);
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
      } catch (w) {
        oe(n, n.return, w);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, C = e;
        break;
      }
      C = n.return;
    }
    return x = na, na = !1, x;
  }
  function dr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && ru(n, t, o);
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
  function lu(e) {
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
  function ta(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, ta(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[mn], delete n[nr], delete n[So], delete n[Jc], delete n[qc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ra(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function la(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ra(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ou(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Hr));
    else if (r !== 4 && (e = e.child, e !== null)) for (ou(e, n, t), e = e.sibling; e !== null; ) ou(e, n, t), e = e.sibling;
  }
  function uu(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (uu(e, n, t), e = e.sibling; e !== null; ) uu(e, n, t), e = e.sibling;
  }
  var we = null, un = !1;
  function An(e, n, t) {
    for (t = t.child; t !== null; ) oa(e, n, t), t = t.sibling;
  }
  function oa(e, n, t) {
    if (pn && typeof pn.onCommitFiberUnmount == "function") try {
      pn.onCommitFiberUnmount(xr, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        Ne || zt(t, n);
      case 6:
        var r = we, l = un;
        we = null, An(e, n, t), we = r, un = l, we !== null && (un ? (e = we, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : we.removeChild(t.stateNode));
        break;
      case 18:
        we !== null && (un ? (e = we, t = t.stateNode, e.nodeType === 8 ? wo(e.parentNode, t) : e.nodeType === 1 && wo(e, t), Wt(e)) : wo(we, t.stateNode));
        break;
      case 4:
        r = we, l = un, we = t.stateNode.containerInfo, un = !0, An(e, n, t), we = r, un = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ne && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, u = o.destroy;
            o = o.tag, u !== void 0 && (o & 2 || o & 4) && ru(t, n, u), l = l.next;
          } while (l !== r);
        }
        An(e, n, t);
        break;
      case 1:
        if (!Ne && (zt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (i) {
          oe(t, n, i);
        }
        An(e, n, t);
        break;
      case 21:
        An(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Ne = (r = Ne) || t.memoizedState !== null, An(e, n, t), Ne = r) : An(e, n, t);
        break;
      default:
        An(e, n, t);
    }
  }
  function ua(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new hf()), n.forEach(function(r) {
        var l = xf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function sn(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e, u = n, i = u;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              we = i.stateNode, un = !1;
              break e;
            case 3:
              we = i.stateNode.containerInfo, un = !0;
              break e;
            case 4:
              we = i.stateNode.containerInfo, un = !0;
              break e;
          }
          i = i.return;
        }
        if (we === null) throw Error(m(160));
        oa(o, u, l), we = null, un = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        oe(l, n, p);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) ia(n, e), n = n.sibling;
  }
  function ia(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (sn(n, e), yn(e), r & 4) {
          try {
            dr(3, e, e.return), dl(3, e);
          } catch (N) {
            oe(e, e.return, N);
          }
          try {
            dr(5, e, e.return);
          } catch (N) {
            oe(e, e.return, N);
          }
        }
        break;
      case 1:
        sn(n, e), yn(e), r & 512 && t !== null && zt(t, t.return);
        break;
      case 5:
        if (sn(n, e), yn(e), r & 512 && t !== null && zt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Ot(l, "");
          } catch (N) {
            oe(e, e.return, N);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, u = t !== null ? t.memoizedProps : o, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            i === "input" && o.type === "radio" && o.name != null && Mu(l, o), Fl(i, u);
            var p = Fl(i, o);
            for (u = 0; u < s.length; u += 2) {
              var y = s[u], g = s[u + 1];
              y === "style" ? Hu(l, g) : y === "dangerouslySetInnerHTML" ? Bu(l, g) : y === "children" ? Ot(l, g) : be(l, y, g, p);
            }
            switch (i) {
              case "input":
                Rl(l, o);
                break;
              case "textarea":
                Uu(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null ? it(l, !!o.multiple, E, !1) : h !== !!o.multiple && (o.defaultValue != null ? it(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : it(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[nr] = o;
          } catch (N) {
            oe(e, e.return, N);
          }
        }
        break;
      case 6:
        if (sn(n, e), yn(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (N) {
            oe(e, e.return, N);
          }
        }
        break;
      case 3:
        if (sn(n, e), yn(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          Wt(n.containerInfo);
        } catch (N) {
          oe(e, e.return, N);
        }
        break;
      case 4:
        sn(n, e), yn(e);
        break;
      case 13:
        sn(n, e), yn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (au = ue())), r & 4 && ua(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (Ne = (p = Ne) || y, sn(n, e), Ne = p) : sn(n, e), yn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1) for (C = e, y = e.child; y !== null; ) {
            for (g = C = y; C !== null; ) {
              switch (h = C, E = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  dr(4, h, h.return);
                  break;
                case 1:
                  zt(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    r = h, t = h.return;
                    try {
                      n = r, x.props = n.memoizedProps, x.state = n.memoizedState, x.componentWillUnmount();
                    } catch (N) {
                      oe(r, t, N);
                    }
                  }
                  break;
                case 5:
                  zt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    ca(g);
                    continue;
                  }
              }
              E !== null ? (E.return = h, C = E) : ca(g);
            }
            y = y.sibling;
          }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  l = g.stateNode, p ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, u = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = $u("display", u));
                } catch (N) {
                  oe(e, e.return, N);
                }
              }
            } else if (g.tag === 6) {
              if (y === null) try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (N) {
                oe(e, e.return, N);
              }
            } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
              g.child.return = g, g = g.child;
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), g = g.return;
            }
            y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
          }
        }
        break;
      case 19:
        sn(n, e), yn(e), r & 4 && ua(e);
        break;
      case 21:
        break;
      default:
        sn(
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
            if (ra(t)) {
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
            r.flags & 32 && (Ot(l, ""), r.flags &= -33);
            var o = la(e);
            uu(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, i = la(e);
            ou(e, i, u);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        oe(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function yf(e, n, t) {
    C = e, sa(e);
  }
  function sa(e, n, t) {
    for (var r = (e.mode & 1) !== 0; C !== null; ) {
      var l = C, o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || fl;
        if (!u) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || Ne;
          i = fl;
          var p = Ne;
          if (fl = u, (Ne = s) && !p) for (C = l; C !== null; ) u = C, s = u.child, u.tag === 22 && u.memoizedState !== null ? fa(l) : s !== null ? (s.return = u, C = s) : fa(l);
          for (; o !== null; ) C = o, sa(o), o = o.sibling;
          C = l, fl = i, Ne = p;
        }
        aa(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : aa(e);
    }
  }
  function aa(e) {
    for (; C !== null; ) {
      var n = C;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Ne || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !Ne) if (t === null) r.componentDidMount();
              else {
                var l = n.elementType === n.type ? t.memoizedProps : on(n.type, t.memoizedProps);
                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = n.updateQueue;
              o !== null && cs(n, o, r);
              break;
            case 3:
              var u = n.updateQueue;
              if (u !== null) {
                if (t = null, n.child !== null) switch (n.child.tag) {
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
                cs(n, u, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (t === null && n.flags & 4) {
                t = i;
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
                    var g = y.dehydrated;
                    g !== null && Wt(g);
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
          Ne || n.flags & 512 && lu(n);
        } catch (h) {
          oe(n, n.return, h);
        }
      }
      if (n === e) {
        C = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, C = t;
        break;
      }
      C = n.return;
    }
  }
  function ca(e) {
    for (; C !== null; ) {
      var n = C;
      if (n === e) {
        C = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, C = t;
        break;
      }
      C = n.return;
    }
  }
  function fa(e) {
    for (; C !== null; ) {
      var n = C;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              dl(4, n);
            } catch (s) {
              oe(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                oe(n, l, s);
              }
            }
            var o = n.return;
            try {
              lu(n);
            } catch (s) {
              oe(n, o, s);
            }
            break;
          case 5:
            var u = n.return;
            try {
              lu(n);
            } catch (s) {
              oe(n, u, s);
            }
        }
      } catch (s) {
        oe(n, n.return, s);
      }
      if (n === e) {
        C = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        i.return = n.return, C = i;
        break;
      }
      C = n.return;
    }
  }
  var gf = Math.ceil, pl = Ee.ReactCurrentDispatcher, iu = Ee.ReactCurrentOwner, Ze = Ee.ReactCurrentBatchConfig, U = 0, he = null, ae = null, Se = 0, We = 0, Tt = Mn(0), pe = 0, pr = null, tt = 0, ml = 0, su = 0, mr = null, Me = null, au = 0, Lt = 1 / 0, Nn = null, hl = !1, cu = null, Bn = null, vl = !1, $n = null, yl = 0, hr = 0, fu = null, gl = -1, wl = 0;
  function Te() {
    return U & 6 ? ue() : gl !== -1 ? gl : gl = ue();
  }
  function Hn(e) {
    return e.mode & 1 ? U & 2 && Se !== 0 ? Se & -Se : ef.transition !== null ? (wl === 0 && (wl = li()), wl) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : pi(e.type)), e) : 1;
  }
  function an(e, n, t, r) {
    if (50 < hr) throw hr = 0, fu = null, Error(m(185));
    Vt(e, t, r), (!(U & 2) || e !== he) && (e === he && (!(U & 2) && (ml |= t), pe === 4 && Wn(e, Se)), Fe(e, r), t === 1 && U === 0 && !(n.mode & 1) && (Lt = ue() + 500, Yr && jn()));
  }
  function Fe(e, n) {
    var t = e.callbackNode;
    ec(e, n);
    var r = zr(e, e === he ? Se : 0);
    if (r === 0) t !== null && ni(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && ni(t), n === 1) e.tag === 0 ? bc(pa.bind(null, e)) : qi(pa.bind(null, e)), Gc(function() {
        !(U & 6) && jn();
      }), t = null;
      else {
        switch (oi(r)) {
          case 1:
            t = Hl;
            break;
          case 4:
            t = ti;
            break;
          case 16:
            t = _r;
            break;
          case 536870912:
            t = ri;
            break;
          default:
            t = _r;
        }
        t = ka(t, da.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function da(e, n) {
    if (gl = -1, wl = 0, U & 6) throw Error(m(327));
    var t = e.callbackNode;
    if (Rt() && e.callbackNode !== t) return null;
    var r = zr(e, e === he ? Se : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = Sl(e, r);
    else {
      n = r;
      var l = U;
      U |= 2;
      var o = ha();
      (he !== e || Se !== n) && (Nn = null, Lt = ue() + 500, lt(e, n));
      do
        try {
          kf();
          break;
        } catch (i) {
          ma(e, i);
        }
      while (!0);
      To(), pl.current = o, U = l, ae !== null ? n = 0 : (he = null, Se = 0, n = pe);
    }
    if (n !== 0) {
      if (n === 2 && (l = Wl(e), l !== 0 && (r = l, n = du(e, l))), n === 1) throw t = pr, lt(e, 0), Wn(e, r), Fe(e, ue()), t;
      if (n === 6) Wn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !wf(l) && (n = Sl(e, r), n === 2 && (o = Wl(e), o !== 0 && (r = o, n = du(e, o))), n === 1)) throw t = pr, lt(e, 0), Wn(e, r), Fe(e, ue()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ot(e, Me, Nn);
            break;
          case 3:
            if (Wn(e, r), (r & 130023424) === r && (n = au + 500 - ue(), 10 < n)) {
              if (zr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Te(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = go(ot.bind(null, e, Me, Nn), n);
              break;
            }
            ot(e, Me, Nn);
            break;
          case 4:
            if (Wn(e, r), (r & 4194240) === r) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - tn(r);
              o = 1 << u, u = n[u], u > l && (l = u), r &= ~o;
            }
            if (r = l, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = go(ot.bind(null, e, Me, Nn), r);
              break;
            }
            ot(e, Me, Nn);
            break;
          case 5:
            ot(e, Me, Nn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Fe(e, ue()), e.callbackNode === t ? da.bind(null, e) : null;
  }
  function du(e, n) {
    var t = mr;
    return e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256), e = Sl(e, n), e !== 2 && (n = Me, Me = t, n !== null && pu(n)), e;
  }
  function pu(e) {
    Me === null ? Me = e : Me.push.apply(Me, e);
  }
  function wf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
          var l = t[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!rn(o(), l)) return !1;
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
    for (n &= ~su, n &= ~ml, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - tn(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function pa(e) {
    if (U & 6) throw Error(m(327));
    Rt();
    var n = zr(e, 0);
    if (!(n & 1)) return Fe(e, ue()), null;
    var t = Sl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Wl(e);
      r !== 0 && (n = r, t = du(e, r));
    }
    if (t === 1) throw t = pr, lt(e, 0), Wn(e, n), Fe(e, ue()), t;
    if (t === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, ot(e, Me, Nn), Fe(e, ue()), null;
  }
  function mu(e, n) {
    var t = U;
    U |= 1;
    try {
      return e(n);
    } finally {
      U = t, U === 0 && (Lt = ue() + 500, Yr && jn());
    }
  }
  function rt(e) {
    $n !== null && $n.tag === 0 && !(U & 6) && Rt();
    var n = U;
    U |= 1;
    var t = Ze.transition, r = W;
    try {
      if (Ze.transition = null, W = 1, e) return e();
    } finally {
      W = r, Ze.transition = t, U = n, !(U & 6) && jn();
    }
  }
  function hu() {
    We = Tt.current, J(Tt);
  }
  function lt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Xc(t)), ae !== null) for (t = ae.return; t !== null; ) {
      var r = t;
      switch (_o(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qr();
          break;
        case 3:
          Nt(), J(Ie), J(Ce), jo();
          break;
        case 5:
          Mo(r);
          break;
        case 4:
          Nt();
          break;
        case 13:
          J(ee);
          break;
        case 19:
          J(ee);
          break;
        case 10:
          Lo(r.type._context);
          break;
        case 22:
        case 23:
          hu();
      }
      t = t.return;
    }
    if (he = e, ae = e = Qn(e.current, null), Se = We = n, pe = 0, pr = null, su = ml = tt = 0, Me = mr = null, bn !== null) {
      for (n = 0; n < bn.length; n++) if (t = bn[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, o = t.pending;
        if (o !== null) {
          var u = o.next;
          o.next = l, r.next = u;
        }
        t.pending = r;
      }
      bn = null;
    }
    return e;
  }
  function ma(e, n) {
    do {
      var t = ae;
      try {
        if (To(), rl.current = il, ll) {
          for (var r = ne.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (nt = 0, me = de = ne = null, ir = !1, sr = 0, iu.current = null, t === null || t.return === null) {
          pe = 1, pr = n, ae = null;
          break;
        }
        e: {
          var o = e, u = t.return, i = t, s = n;
          if (n = Se, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var E = Vs(u);
            if (E !== null) {
              E.flags &= -257, As(E, u, i, o, n), E.mode & 1 && Us(o, p, n), n = E, s = p;
              var x = n.updateQueue;
              if (x === null) {
                var N = /* @__PURE__ */ new Set();
                N.add(s), n.updateQueue = N;
              } else x.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Us(o, p, n), vu();
                break e;
              }
              s = Error(m(426));
            }
          } else if (b && i.mode & 1) {
            var ie = Vs(u);
            if (ie !== null) {
              !(ie.flags & 65536) && (ie.flags |= 256), As(ie, u, i, o, n), Po(Pt(s, i));
              break e;
            }
          }
          o = s = Pt(s, i), pe !== 4 && (pe = 2), mr === null ? mr = [o] : mr.push(o), o = u;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var f = Fs(o, s, n);
                as(o, f);
                break e;
              case 1:
                i = s;
                var a = o.type, d = o.stateNode;
                if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Bn === null || !Bn.has(d)))) {
                  o.flags |= 65536, n &= -n, o.lanes |= n;
                  var w = js(o, i, n);
                  as(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ya(t);
      } catch (P) {
        n = P, ae === t && t !== null && (ae = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ha() {
    var e = pl.current;
    return pl.current = il, e === null ? il : e;
  }
  function vu() {
    (pe === 0 || pe === 3 || pe === 2) && (pe = 4), he === null || !(tt & 268435455) && !(ml & 268435455) || Wn(he, Se);
  }
  function Sl(e, n) {
    var t = U;
    U |= 2;
    var r = ha();
    (he !== e || Se !== n) && (Nn = null, lt(e, n));
    do
      try {
        Sf();
        break;
      } catch (l) {
        ma(e, l);
      }
    while (!0);
    if (To(), U = t, pl.current = r, ae !== null) throw Error(m(261));
    return he = null, Se = 0, pe;
  }
  function Sf() {
    for (; ae !== null; ) va(ae);
  }
  function kf() {
    for (; ae !== null && !Qa(); ) va(ae);
  }
  function va(e) {
    var n = Sa(e.alternate, e, We);
    e.memoizedProps = e.pendingProps, n === null ? ya(e) : ae = n, iu.current = null;
  }
  function ya(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = mf(t, n), t !== null) {
          t.flags &= 32767, ae = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          pe = 6, ae = null;
          return;
        }
      } else if (t = pf(t, n, We), t !== null) {
        ae = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        ae = n;
        return;
      }
      ae = n = e;
    } while (n !== null);
    pe === 0 && (pe = 5);
  }
  function ot(e, n, t) {
    var r = W, l = Ze.transition;
    try {
      Ze.transition = null, W = 1, Ef(e, n, t, r);
    } finally {
      Ze.transition = l, W = r;
    }
    return null;
  }
  function Ef(e, n, t, r) {
    do
      Rt();
    while ($n !== null);
    if (U & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = t.lanes | t.childLanes;
    if (nc(e, o), e === he && (ae = he = null, Se = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || vl || (vl = !0, ka(_r, function() {
      return Rt(), null;
    })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
      o = Ze.transition, Ze.transition = null;
      var u = W;
      W = 1;
      var i = U;
      U |= 4, iu.current = null, vf(e, t), ia(t, e), Bc(vo), Rr = !!ho, vo = ho = null, e.current = t, yf(t), Ka(), U = i, W = u, Ze.transition = o;
    } else e.current = t;
    if (vl && (vl = !1, $n = e, yl = l), o = e.pendingLanes, o === 0 && (Bn = null), Ga(t.stateNode), Fe(e, ue()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = cu, cu = null, e;
    return yl & 1 && e.tag !== 0 && Rt(), o = e.pendingLanes, o & 1 ? e === fu ? hr++ : (hr = 0, fu = e) : hr = 0, jn(), null;
  }
  function Rt() {
    if ($n !== null) {
      var e = oi(yl), n = Ze.transition, t = W;
      try {
        if (Ze.transition = null, W = 16 > e ? 16 : e, $n === null) var r = !1;
        else {
          if (e = $n, $n = null, yl = 0, U & 6) throw Error(m(331));
          var l = U;
          for (U |= 4, C = e.current; C !== null; ) {
            var o = C, u = o.child;
            if (C.flags & 16) {
              var i = o.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (C = p; C !== null; ) {
                    var y = C;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(8, y, o);
                    }
                    var g = y.child;
                    if (g !== null) g.return = y, C = g;
                    else for (; C !== null; ) {
                      y = C;
                      var h = y.sibling, E = y.return;
                      if (ta(y), y === p) {
                        C = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = E, C = h;
                        break;
                      }
                      C = E;
                    }
                  }
                }
                var x = o.alternate;
                if (x !== null) {
                  var N = x.child;
                  if (N !== null) {
                    x.child = null;
                    do {
                      var ie = N.sibling;
                      N.sibling = null, N = ie;
                    } while (N !== null);
                  }
                }
                C = o;
              }
            }
            if (o.subtreeFlags & 2064 && u !== null) u.return = o, C = u;
            else e: for (; C !== null; ) {
              if (o = C, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  dr(9, o, o.return);
              }
              var f = o.sibling;
              if (f !== null) {
                f.return = o.return, C = f;
                break e;
              }
              C = o.return;
            }
          }
          var a = e.current;
          for (C = a; C !== null; ) {
            u = C;
            var d = u.child;
            if (u.subtreeFlags & 2064 && d !== null) d.return = u, C = d;
            else e: for (u = a; C !== null; ) {
              if (i = C, i.flags & 2048) try {
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dl(9, i);
                }
              } catch (P) {
                oe(i, i.return, P);
              }
              if (i === u) {
                C = null;
                break e;
              }
              var w = i.sibling;
              if (w !== null) {
                w.return = i.return, C = w;
                break e;
              }
              C = i.return;
            }
          }
          if (U = l, jn(), pn && typeof pn.onPostCommitFiberRoot == "function") try {
            pn.onPostCommitFiberRoot(xr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        W = t, Ze.transition = n;
      }
    }
    return !1;
  }
  function ga(e, n, t) {
    n = Pt(t, n), n = Fs(e, n, 1), e = Vn(e, n, 1), n = Te(), e !== null && (Vt(e, 1, n), Fe(e, n));
  }
  function oe(e, n, t) {
    if (e.tag === 3) ga(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        ga(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bn === null || !Bn.has(r))) {
          e = Pt(t, e), e = js(n, e, 1), n = Vn(n, e, 1), e = Te(), n !== null && (Vt(n, 1, e), Fe(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function Cf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Te(), e.pingedLanes |= e.suspendedLanes & t, he === e && (Se & t) === t && (pe === 4 || pe === 3 && (Se & 130023424) === Se && 500 > ue() - au ? lt(e, 0) : su |= t), Fe(e, n);
  }
  function wa(e, n) {
    n === 0 && (e.mode & 1 ? (n = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : n = 1);
    var t = Te();
    e = Cn(e, n), e !== null && (Vt(e, n, t), Fe(e, t));
  }
  function _f(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), wa(e, t);
  }
  function xf(e, n) {
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
    r !== null && r.delete(n), wa(e, t);
  }
  var Sa;
  Sa = function(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps || Ie.current) De = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return De = !1, df(e, n, t);
      De = !!(e.flags & 131072);
    }
    else De = !1, b && n.flags & 1048576 && bi(n, Gr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        cl(e, n), e = n.pendingProps;
        var l = wt(n, Ce.current);
        xt(n, t), l = Ao(null, n, r, e, l, t);
        var o = Bo();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Oe(r) ? (o = !0, Kr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Oo(n), l.updater = sl, n.stateNode = l, l._reactInternals = n, Yo(n, r, e, t), n = Jo(null, n, r, !0, o, t)) : (n.tag = 0, b && o && Co(n), ze(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (cl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Pf(r), e = on(r, e), l) {
            case 0:
              n = Zo(null, n, r, e, t);
              break e;
            case 1:
              n = Ks(null, n, r, e, t);
              break e;
            case 11:
              n = Bs(null, n, r, e, t);
              break e;
            case 14:
              n = $s(null, n, r, on(r.type, e), t);
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
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : on(r, l), Zo(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : on(r, l), Ks(e, n, r, l, t);
      case 3:
        e: {
          if (Ys(n), e === null) throw Error(m(387));
          r = n.pendingProps, o = n.memoizedState, l = o.element, ss(e, n), nl(n, r, null, t);
          var u = n.memoizedState;
          if (r = u.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
            l = Pt(Error(m(423)), n), n = Xs(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = Pt(Error(m(424)), n), n = Xs(e, n, r, t, l);
            break e;
          } else for (He = Dn(n.stateNode.containerInfo.firstChild), $e = n, b = !0, ln = null, t = us(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Et(), r === l) {
              n = xn(e, n, t);
              break e;
            }
            ze(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return fs(n), e === null && No(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, yo(r, l) ? u = null : o !== null && yo(r, o) && (n.flags |= 32), Qs(e, n), ze(e, n, u, t), n.child;
      case 6:
        return e === null && No(n), null;
      case 13:
        return Gs(e, n, t);
      case 4:
        return Do(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = Ct(n, null, r, t) : ze(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : on(r, l), Bs(e, n, r, l, t);
      case 7:
        return ze(e, n, n.pendingProps, t), n.child;
      case 8:
        return ze(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return ze(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, u = l.value, G(qr, r._currentValue), r._currentValue = u, o !== null) if (rn(o.value, u)) {
            if (o.children === l.children && !Ie.current) {
              n = xn(e, n, t);
              break e;
            }
          } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
            var i = o.dependencies;
            if (i !== null) {
              u = o.child;
              for (var s = i.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (o.tag === 1) {
                    s = _n(-1, t & -t), s.tag = 2;
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
                  ), i.lanes |= t;
                  break;
                }
                s = s.next;
              }
            } else if (o.tag === 10) u = o.type === n.type ? null : o.child;
            else if (o.tag === 18) {
              if (u = o.return, u === null) throw Error(m(341));
              u.lanes |= t, i = u.alternate, i !== null && (i.lanes |= t), Ro(u, t, n), u = o.sibling;
            } else u = o.child;
            if (u !== null) u.return = o;
            else for (u = o; u !== null; ) {
              if (u === n) {
                u = null;
                break;
              }
              if (o = u.sibling, o !== null) {
                o.return = u.return, u = o;
                break;
              }
              u = u.return;
            }
            o = u;
          }
          ze(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, xt(n, t), l = Xe(l), r = r(l), n.flags |= 1, ze(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = on(r, n.pendingProps), l = on(r.type, l), $s(e, n, r, l, t);
      case 15:
        return Hs(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : on(r, l), cl(e, n), n.tag = 1, Oe(r) ? (e = !0, Kr(n)) : e = !1, xt(n, t), Ds(n, r, l), Yo(n, r, l, t), Jo(null, n, r, !0, e, t);
      case 19:
        return Js(e, n, t);
      case 22:
        return Ws(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function ka(e, n) {
    return ei(e, n);
  }
  function Nf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Je(e, n, t, r) {
    return new Nf(e, n, t, r);
  }
  function yu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Pf(e) {
    if (typeof e == "function") return yu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === fn) return 11;
      if (e === dn) return 14;
    }
    return 2;
  }
  function Qn(e, n) {
    var t = e.alternate;
    return t === null ? (t = Je(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function kl(e, n, t, r, l, o) {
    var u = 2;
    if (r = e, typeof e == "function") yu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
      case Le:
        return ut(t.children, l, o, n);
      case Qe:
        u = 8, l |= 8;
        break;
      case Pn:
        return e = Je(12, t, n, l | 2), e.elementType = Pn, e.lanes = o, e;
      case Ve:
        return e = Je(13, t, n, l), e.elementType = Ve, e.lanes = o, e;
      case nn:
        return e = Je(19, t, n, l), e.elementType = nn, e.lanes = o, e;
      case le:
        return El(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case gn:
            u = 10;
            break e;
          case Yn:
            u = 9;
            break e;
          case fn:
            u = 11;
            break e;
          case dn:
            u = 14;
            break e;
          case Re:
            u = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return n = Je(u, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
  }
  function ut(e, n, t, r) {
    return e = Je(7, e, r, n), e.lanes = t, e;
  }
  function El(e, n, t, r) {
    return e = Je(22, e, r, n), e.elementType = le, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function gu(e, n, t) {
    return e = Je(6, e, null, n), e.lanes = t, e;
  }
  function wu(e, n, t) {
    return n = Je(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function zf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ql(0), this.expirationTimes = Ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ql(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Su(e, n, t, r, l, o, u, i, s) {
    return e = new zf(e, n, t, i, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = Je(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oo(o), e;
  }
  function Tf(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Pe, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function Ea(e) {
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
            if (Oe(n.type)) {
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
      if (Oe(t)) return Zi(e, t, n);
    }
    return n;
  }
  function Ca(e, n, t, r, l, o, u, i, s) {
    return e = Su(t, r, !0, e, l, o, u, i, s), e.context = Ea(null), t = e.current, r = Te(), l = Hn(t), o = _n(r, l), o.callback = n ?? null, Vn(t, o, l), e.current.lanes = l, Vt(e, l, r), Fe(e, r), e;
  }
  function Cl(e, n, t, r) {
    var l = n.current, o = Te(), u = Hn(l);
    return t = Ea(t), n.context === null ? n.context = t : n.pendingContext = t, n = _n(o, u), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Vn(l, n, u), e !== null && (an(e, l, u, o), el(e, l, u)), u;
  }
  function _l(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function _a(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function ku(e, n) {
    _a(e, n), (e = e.alternate) && _a(e, n);
  }
  var xa = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Eu(e) {
    this._internalRoot = e;
  }
  xl.prototype.render = Eu.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(m(409));
    Cl(e, n, null, null);
  }, xl.prototype.unmount = Eu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      rt(function() {
        Cl(null, e, null, null);
      }), n[wn] = null;
    }
  };
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = si();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++) ;
      Rn.splice(t, 0, e), t === 0 && fi(e);
    }
  };
  function Cu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Nl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Na() {
  }
  function Lf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var p = _l(u);
          o.call(p);
        };
      }
      var u = Ca(n, r, e, 0, null, !1, !1, "", Na);
      return e._reactRootContainer = u, e[wn] = u.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(), u;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = _l(s);
        i.call(p);
      };
    }
    var s = Su(e, 0, !1, null, null, !1, !1, "", Na);
    return e._reactRootContainer = s, e[wn] = s.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(function() {
      Cl(n, s, t, r);
    }), s;
  }
  function Pl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = _l(u);
          i.call(s);
        };
      }
      Cl(n, u, e, l);
    } else u = Lf(t, n, e, l, r);
    return _l(u);
  }
  ui = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Ut(n.pendingLanes);
          t !== 0 && (Kl(n, t | 1), Fe(n, ue()), !(U & 6) && (Lt = ue() + 500, jn()));
        }
        break;
      case 13:
        rt(function() {
          var r = Cn(e, 1);
          if (r !== null) {
            var l = Te();
            an(r, e, 1, l);
          }
        }), ku(e, 1);
    }
  }, Yl = function(e) {
    if (e.tag === 13) {
      var n = Cn(e, 134217728);
      if (n !== null) {
        var t = Te();
        an(n, e, 134217728, t);
      }
      ku(e, 134217728);
    }
  }, ii = function(e) {
    if (e.tag === 13) {
      var n = Hn(e), t = Cn(e, n);
      if (t !== null) {
        var r = Te();
        an(t, e, n, r);
      }
      ku(e, n);
    }
  }, si = function() {
    return W;
  }, ai = function(e, n) {
    var t = W;
    try {
      return W = e, n();
    } finally {
      W = t;
    }
  }, Vl = function(e, n, t) {
    switch (n) {
      case "input":
        if (Rl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = Wr(r);
              if (!l) throw Error(m(90));
              Ou(r), Rl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Uu(e, t);
        break;
      case "select":
        n = t.value, n != null && it(e, !!t.multiple, n, !1);
    }
  }, Yu = mu, Xu = rt;
  var Rf = { usingClientEntryPoint: !1, Events: [tr, yt, Wr, Qu, Ku, mu] }, vr = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, If = { bundleType: vr.bundleType, version: vr.version, rendererPackageName: vr.rendererPackageName, rendererConfig: vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = qu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: vr.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber) try {
      xr = zl.inject(If), pn = zl;
    } catch {
    }
  }
  return je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rf, je.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Cu(n)) throw Error(m(200));
    return Tf(e, n, null, t);
  }, je.createRoot = function(e, n) {
    if (!Cu(e)) throw Error(m(299));
    var t = !1, r = "", l = xa;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Su(e, 1, !1, null, null, t, !1, r, l), e[wn] = n.current, bt(e.nodeType === 8 ? e.parentNode : e), new Eu(n);
  }, je.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = qu(n), e = e === null ? null : e.stateNode, e;
  }, je.flushSync = function(e) {
    return rt(e);
  }, je.hydrate = function(e, n, t) {
    if (!Nl(n)) throw Error(m(200));
    return Pl(null, e, n, !0, t);
  }, je.hydrateRoot = function(e, n, t) {
    if (!Cu(e)) throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, o = "", u = xa;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), n = Ca(n, null, e, 1, t ?? null, l, !1, o, u), e[wn] = n.current, bt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
      t,
      l
    );
    return new xl(n);
  }, je.render = function(e, n, t) {
    if (!Nl(n)) throw Error(m(200));
    return Pl(null, e, n, !1, t);
  }, je.unmountComponentAtNode = function(e) {
    if (!Nl(e)) throw Error(m(40));
    return e._reactRootContainer ? (rt(function() {
      Pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[wn] = null;
      });
    }), !0) : !1;
  }, je.unstable_batchedUpdates = mu, je.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Nl(t)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Pl(e, n, t, !1, r);
  }, je.version = "18.3.1-next-f1338f8080-20240426", je;
}
var Da;
function Bf() {
  if (Da) return Nu.exports;
  Da = 1;
  function S() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (O) {
        console.error(O);
      }
  }
  return S(), Nu.exports = Af(), Nu.exports;
}
var Ma;
function $f() {
  if (Ma) return Tl;
  Ma = 1;
  var S = Bf();
  return Tl.createRoot = S.createRoot, Tl.hydrateRoot = S.hydrateRoot, Tl;
}
var Hf = $f();
const Wf = /* @__PURE__ */ Df(Hf), Qf = () => {
  const S = document.getElementById("shop-info"), O = JSON.parse((S == null ? void 0 : S.textContent) || "{}");
  return O.isStorefrontPortableWallets = window.Shopify.PaymentButton.isStorefrontPortableWallets, O;
}, ja = () => {
  const S = document.getElementById("product-info");
  return JSON.parse((S == null ? void 0 : S.textContent) || "{}");
}, Iu = ja();
let Tu = Iu.selected_variant;
const Lu = {
  get variantInputs() {
    return document.querySelectorAll(Iu.trigger_selector);
  }
}, Kf = () => {
  const S = document.querySelectorAll('form[action="/cart/add"]');
  return Array.from(S).map((O) => O.getAttribute("id"));
}, Fa = () => (Tu || Lu.variantInputs.forEach((S) => {
  if (S) {
    const O = parseInt(S.value);
    Tu = Iu.variants.find((m) => m.id === O);
  }
}), Tu), Yf = (S) => {
  clearTimeout(window.variantChangeTimeout), window.variantChangeTimeout = setTimeout(() => {
    S();
  }, 300);
}, Xf = (S) => (Lu.variantInputs.forEach((O) => {
  O.addEventListener("change", S);
}), () => {
  Lu.variantInputs.forEach((O) => {
    O.removeEventListener("change", S);
  });
}), Gf = ({ product_cf: S, formId: O, onChange: m }) => {
  const ke = (Y, ce) => ({
    type: "text",
    id: Y.id,
    name: `properties[${Y.name}]`,
    autoComplete: "off",
    placeholder: Y.placeholder,
    form: ce,
    className: `field__input ${Y.class || ""}`,
    minLength: Y.minlength > 0 ? Y.minlength : void 0,
    maxLength: Y.maxlength > 0 ? Y.maxlength : 20,
    onChange: m
  });
  return /* @__PURE__ */ Ue.jsx("input", { ...ke(S, O) });
}, Zf = () => {
  var fe;
  const S = ja(), O = Qf(), m = O.sectionID ? "product-form-" + O.sectionID : Kf(), [ke, Y] = gr.useState({}), [ce, ye] = gr.useState(Fa());
  let te = ((fe = S.variant_metafields[ce.id]) == null ? void 0 : fe.engravings) > 0;
  gr.useEffect(() => {
    const I = () => {
      var re;
      const j = Fa();
      ((re = S.variant_metafields[j.id]) == null ? void 0 : re.engravings) === 0 && (document.querySelectorAll('.so-hyper input[type="text"]').forEach((K) => {
        K.value = "", document.querySelectorAll(`input[type="hidden"][name="${K.name}"]`).forEach((qe) => {
          qe.remove();
        });
      }), Y({}));
    };
    return document.querySelectorAll(".single-option-selector, [name='id']").forEach((j) => {
      j.addEventListener("change", function() {
        ye(
          S.variants.filter((re) => re.id === parseInt(document.querySelector('[name="id"]').value))[0]
        );
      });
    }), Xf(I);
  }, []), gr.useEffect(() => {
    var I;
    te = ((I = S.variant_metafields[ce.id]) == null ? void 0 : I.engravings) > 0, console.log(te);
  }, [ce]);
  const $ = (I, j) => {
    Y((re) => ({
      ...re,
      [I]: j.value.length
    })), Yf(() => {
      ge(j);
    });
  }, ge = (I) => {
    document.querySelectorAll('form[action="/cart/add"]').forEach((re) => {
      let se = re.querySelector(`input[name="${I.name}"]`);
      se || (se = document.createElement("input"), se.type = "hidden", se.name = I.name, re.appendChild(se)), se.value = I.value;
    });
  };
  return /* @__PURE__ */ Ue.jsx(Ue.Fragment, { children: te && /* @__PURE__ */ Ue.jsx("div", { className: "so-hyper so-tw", children: Object.values(S.shop_cf).map((I) => /* @__PURE__ */ Ue.jsxs("div", { className: "field-wrapper", children: [
    /* @__PURE__ */ Ue.jsx("label", { className: "form__label", children: /* @__PURE__ */ Ue.jsx("span", { children: I.name }) }),
    /* @__PURE__ */ Ue.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ Ue.jsx(
        Gf,
        {
          product_cf: I,
          formId: m,
          onChange: (j) => $(I.id, j.target)
        }
      ),
      /* @__PURE__ */ Ue.jsx("span", { className: "so-wrong-input-notification", "data-text": " isn't available" }),
      /* @__PURE__ */ Ue.jsx("span", { className: "so-empty-input-notification" })
    ] }),
    /* @__PURE__ */ Ue.jsxs(
      "div",
      {
        className: `so-input-counter-w ${ke[I.id] ? "so-input-filled" : ""}`,
        children: [
          ke[I.id] || 0,
          "/",
          I.maxlength || 20
        ]
      }
    )
  ] })) }) });
};
document.addEventListener("DOMContentLoaded", () => {
  const S = document.getElementById("so-hyper");
  S && Wf.createRoot(S).render(
    /* @__PURE__ */ Ue.jsx(gr.StrictMode, { children: /* @__PURE__ */ Ue.jsx(Zf, {}) })
  );
});
