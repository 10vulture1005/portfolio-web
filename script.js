(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity),
        l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
}
)();
var Ju = {
    exports: {}
}
  , nl = {}
  , qu = {
    exports: {}
}
  , L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn = Symbol.for("react.element")
  , fc = Symbol.for("react.portal")
  , pc = Symbol.for("react.fragment")
  , mc = Symbol.for("react.strict_mode")
  , hc = Symbol.for("react.profiler")
  , vc = Symbol.for("react.provider")
  , yc = Symbol.for("react.context")
  , gc = Symbol.for("react.forward_ref")
  , xc = Symbol.for("react.suspense")
  , wc = Symbol.for("react.memo")
  , kc = Symbol.for("react.lazy")
  , Vo = Symbol.iterator;
function Sc(e) {
    return e === null || typeof e != "object" ? null : (e = Vo && e[Vo] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var bu = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , es = Object.assign
  , ts = {};
function on(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = ts,
    this.updater = n || bu
}
on.prototype.isReactComponent = {};
on.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
on.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function ns() {}
ns.prototype = on.prototype;
function Qi(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = ts,
    this.updater = n || bu
}
var Ki = Qi.prototype = new ns;
Ki.constructor = Qi;
es(Ki, on.prototype);
Ki.isPureReactComponent = !0;
var Bo = Array.isArray
  , rs = Object.prototype.hasOwnProperty
  , Gi = {
    current: null
}
  , ls = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function is(e, t, n) {
    var r, l = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            rs.call(t, r) && !ls.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1)
        l.children = n;
    else if (1 < u) {
        for (var s = Array(u), d = 0; d < u; d++)
            s[d] = arguments[d + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps,
        u)
            l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: Xn,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Gi.current
    }
}
function Nc(e, t) {
    return {
        $$typeof: Xn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Yi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xn
}
function jc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ho = /\/+/g;
function kl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? jc("" + e.key) : t.toString(36)
}
function xr(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Xn:
            case fc:
                o = !0
            }
        }
    if (o)
        return o = e,
        l = l(o),
        e = r === "" ? "." + kl(o, 0) : r,
        Bo(l) ? (n = "",
        e != null && (n = e.replace(Ho, "$&/") + "/"),
        xr(l, t, n, "", function(d) {
            return d
        })) : l != null && (Yi(l) && (l = Nc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ho, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Bo(e))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var s = r + kl(i, u);
            o += xr(i, t, n, s, l)
        }
    else if (s = Sc(e),
    typeof s == "function")
        for (e = s.call(e),
        u = 0; !(i = e.next()).done; )
            i = i.value,
            s = r + kl(i, u++),
            o += xr(i, t, n, s, l);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function nr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return xr(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }),
    r
}
function Ec(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var se = {
    current: null
}
  , wr = {
    transition: null
}
  , Cc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Gi
};
function os() {
    throw Error("act(...) is not supported in production builds of React.")
}
L.Children = {
    map: nr,
    forEach: function(e, t, n) {
        nr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return nr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return nr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Yi(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
L.Component = on;
L.Fragment = pc;
L.Profiler = hc;
L.PureComponent = Qi;
L.StrictMode = mc;
L.Suspense = xc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cc;
L.act = os;
L.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = es({}, e.props)
      , l = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = Gi.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var u = e.type.defaultProps;
        for (s in t)
            rs.call(t, s) && !ls.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var d = 0; d < s; d++)
            u[d] = arguments[d + 2];
        r.children = u
    }
    return {
        $$typeof: Xn,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
}
;
L.createContext = function(e) {
    return e = {
        $$typeof: yc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: vc,
        _context: e
    },
    e.Consumer = e
}
;
L.createElement = is;
L.createFactory = function(e) {
    var t = is.bind(null, e);
    return t.type = e,
    t
}
;
L.createRef = function() {
    return {
        current: null
    }
}
;
L.forwardRef = function(e) {
    return {
        $$typeof: gc,
        render: e
    }
}
;
L.isValidElement = Yi;
L.lazy = function(e) {
    return {
        $$typeof: kc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ec
    }
}
;
L.memo = function(e, t) {
    return {
        $$typeof: wc,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
L.startTransition = function(e) {
    var t = wr.transition;
    wr.transition = {};
    try {
        e()
    } finally {
        wr.transition = t
    }
}
;
L.unstable_act = os;
L.useCallback = function(e, t) {
    return se.current.useCallback(e, t)
}
;
L.useContext = function(e) {
    return se.current.useContext(e)
}
;
L.useDebugValue = function() {}
;
L.useDeferredValue = function(e) {
    return se.current.useDeferredValue(e)
}
;
L.useEffect = function(e, t) {
    return se.current.useEffect(e, t)
}
;
L.useId = function() {
    return se.current.useId()
}
;
L.useImperativeHandle = function(e, t, n) {
    return se.current.useImperativeHandle(e, t, n)
}
;
L.useInsertionEffect = function(e, t) {
    return se.current.useInsertionEffect(e, t)
}
;
L.useLayoutEffect = function(e, t) {
    return se.current.useLayoutEffect(e, t)
}
;
L.useMemo = function(e, t) {
    return se.current.useMemo(e, t)
}
;
L.useReducer = function(e, t, n) {
    return se.current.useReducer(e, t, n)
}
;
L.useRef = function(e) {
    return se.current.useRef(e)
}
;
L.useState = function(e) {
    return se.current.useState(e)
}
;
L.useSyncExternalStore = function(e, t, n) {
    return se.current.useSyncExternalStore(e, t, n)
}
;
L.useTransition = function() {
    return se.current.useTransition()
}
;
L.version = "18.3.1";
qu.exports = L;
var Nt = qu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _c = Nt
  , Pc = Symbol.for("react.element")
  , zc = Symbol.for("react.fragment")
  , Lc = Object.prototype.hasOwnProperty
  , Tc = _c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Mc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function us(e, t, n) {
    var r, l = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        Lc.call(t, r) && !Mc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Pc,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Tc.current
    }
}
nl.Fragment = zc;
nl.jsx = us;
nl.jsxs = us;
Ju.exports = nl;
var a = Ju.exports
  , ss = {
    exports: {}
}
  , xe = {}
  , as = {
    exports: {}
}
  , cs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, P) {
        var z = j.length;
        j.push(P);
        e: for (; 0 < z; ) {
            var W = z - 1 >>> 1
              , X = j[W];
            if (0 < l(X, P))
                j[W] = P,
                j[z] = X,
                z = W;
            else
                break e
        }
    }
    function n(j) {
        return j.length === 0 ? null : j[0]
    }
    function r(j) {
        if (j.length === 0)
            return null;
        var P = j[0]
          , z = j.pop();
        if (z !== P) {
            j[0] = z;
            e: for (var W = 0, X = j.length, er = X >>> 1; W < er; ) {
                var vt = 2 * (W + 1) - 1
                  , wl = j[vt]
                  , yt = vt + 1
                  , tr = j[yt];
                if (0 > l(wl, z))
                    yt < X && 0 > l(tr, wl) ? (j[W] = tr,
                    j[yt] = z,
                    W = yt) : (j[W] = wl,
                    j[vt] = z,
                    W = vt);
                else if (yt < X && 0 > l(tr, z))
                    j[W] = tr,
                    j[yt] = z,
                    W = yt;
                else
                    break e
            }
        }
        return P
    }
    function l(j, P) {
        var z = j.sortIndex - P.sortIndex;
        return z !== 0 ? z : j.id - P.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , u = o.now();
        e.unstable_now = function() {
            return o.now() - u
        }
    }
    var s = []
      , d = []
      , v = 1
      , h = null
      , m = 3
      , x = !1
      , w = !1
      , k = !1
      , F = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(j) {
        for (var P = n(d); P !== null; ) {
            if (P.callback === null)
                r(d);
            else if (P.startTime <= j)
                r(d),
                P.sortIndex = P.expirationTime,
                t(s, P);
            else
                break;
            P = n(d)
        }
    }
    function y(j) {
        if (k = !1,
        p(j),
        !w)
            if (n(s) !== null)
                w = !0,
                gl(N);
            else {
                var P = n(d);
                P !== null && xl(y, P.startTime - j)
            }
    }
    function N(j, P) {
        w = !1,
        k && (k = !1,
        f(_),
        _ = -1),
        x = !0;
        var z = m;
        try {
            for (p(P),
            h = n(s); h !== null && (!(h.expirationTime > P) || j && !_e()); ) {
                var W = h.callback;
                if (typeof W == "function") {
                    h.callback = null,
                    m = h.priorityLevel;
                    var X = W(h.expirationTime <= P);
                    P = e.unstable_now(),
                    typeof X == "function" ? h.callback = X : h === n(s) && r(s),
                    p(P)
                } else
                    r(s);
                h = n(s)
            }
            if (h !== null)
                var er = !0;
            else {
                var vt = n(d);
                vt !== null && xl(y, vt.startTime - P),
                er = !1
            }
            return er
        } finally {
            h = null,
            m = z,
            x = !1
        }
    }
    var E = !1
      , C = null
      , _ = -1
      , H = 5
      , T = -1;
    function _e() {
        return !(e.unstable_now() - T < H)
    }
    function an() {
        if (C !== null) {
            var j = e.unstable_now();
            T = j;
            var P = !0;
            try {
                P = C(!0, j)
            } finally {
                P ? cn() : (E = !1,
                C = null)
            }
        } else
            E = !1
    }
    var cn;
    if (typeof c == "function")
        cn = function() {
            c(an)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var $o = new MessageChannel
          , dc = $o.port2;
        $o.port1.onmessage = an,
        cn = function() {
            dc.postMessage(null)
        }
    } else
        cn = function() {
            F(an, 0)
        }
        ;
    function gl(j) {
        C = j,
        E || (E = !0,
        cn())
    }
    function xl(j, P) {
        _ = F(function() {
            j(e.unstable_now())
        }, P)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(j) {
        j.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || x || (w = !0,
        gl(N))
    }
    ,
    e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < j ? Math.floor(1e3 / j) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(j) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var P = 3;
            break;
        default:
            P = m
        }
        var z = m;
        m = P;
        try {
            return j()
        } finally {
            m = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(j, P) {
        switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            j = 3
        }
        var z = m;
        m = j;
        try {
            return P()
        } finally {
            m = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(j, P, z) {
        var W = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? W + z : W) : z = W,
        j) {
        case 1:
            var X = -1;
            break;
        case 2:
            X = 250;
            break;
        case 5:
            X = 1073741823;
            break;
        case 4:
            X = 1e4;
            break;
        default:
            X = 5e3
        }
        return X = z + X,
        j = {
            id: v++,
            callback: P,
            priorityLevel: j,
            startTime: z,
            expirationTime: X,
            sortIndex: -1
        },
        z > W ? (j.sortIndex = z,
        t(d, j),
        n(s) === null && j === n(d) && (k ? (f(_),
        _ = -1) : k = !0,
        xl(y, z - W))) : (j.sortIndex = X,
        t(s, j),
        w || x || (w = !0,
        gl(N))),
        j
    }
    ,
    e.unstable_shouldYield = _e,
    e.unstable_wrapCallback = function(j) {
        var P = m;
        return function() {
            var z = m;
            m = P;
            try {
                return j.apply(this, arguments)
            } finally {
                m = z
            }
        }
    }
}
)(cs);
as.exports = cs;
var Rc = as.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ic = Nt
  , ge = Rc;
function g(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ds = new Set
  , Mn = {};
function Tt(e, t) {
    qt(e, t),
    qt(e + "Capture", t)
}
function qt(e, t) {
    for (Mn[e] = t,
    e = 0; e < t.length; e++)
        ds.add(t[e])
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Yl = Object.prototype.hasOwnProperty
  , Oc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Wo = {}
  , Qo = {};
function Dc(e) {
    return Yl.call(Qo, e) ? !0 : Yl.call(Wo, e) ? !1 : Oc.test(e) ? Qo[e] = !0 : (Wo[e] = !0,
    !1)
}
function Fc(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Ac(e, t, n, r) {
    if (t === null || typeof t > "u" || Fc(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ae(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ee[e] = new ae(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ee[t] = new ae(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ee[e] = new ae(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ee[e] = new ae(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ee[e] = new ae(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ee[e] = new ae(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ee[e] = new ae(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ee[e] = new ae(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ee[e] = new ae(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Xi = /[\-:]([a-z])/g;
function Zi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Xi, Zi);
    ee[t] = new ae(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Xi, Zi);
    ee[t] = new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Xi, Zi);
    ee[t] = new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ee[e] = new ae(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ee.xlinkHref = new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ee[e] = new ae(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Ji(e, t, n, r) {
    var l = ee.hasOwnProperty(t) ? ee[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ac(t, n, l, r) && (n = null),
    r || l === null ? Dc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xe = Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , rr = Symbol.for("react.element")
  , It = Symbol.for("react.portal")
  , Ot = Symbol.for("react.fragment")
  , qi = Symbol.for("react.strict_mode")
  , Xl = Symbol.for("react.profiler")
  , fs = Symbol.for("react.provider")
  , ps = Symbol.for("react.context")
  , bi = Symbol.for("react.forward_ref")
  , Zl = Symbol.for("react.suspense")
  , Jl = Symbol.for("react.suspense_list")
  , eo = Symbol.for("react.memo")
  , Je = Symbol.for("react.lazy")
  , ms = Symbol.for("react.offscreen")
  , Ko = Symbol.iterator;
function dn(e) {
    return e === null || typeof e != "object" ? null : (e = Ko && e[Ko] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var V = Object.assign, Sl;
function xn(e) {
    if (Sl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Sl = t && t[1] || ""
        }
    return `
` + Sl + e
}
var Nl = !1;
function jl(e, t) {
    if (!e || Nl)
        return "";
    Nl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var l = d.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; )
                u--;
            for (; 1 <= o && 0 <= u; o--,
            u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if (o--,
                            u--,
                            0 > u || l[o] !== i[u]) {
                                var s = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= o && 0 <= u);
                    break
                }
        }
    } finally {
        Nl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? xn(e) : ""
}
function Uc(e) {
    switch (e.tag) {
    case 5:
        return xn(e.type);
    case 16:
        return xn("Lazy");
    case 13:
        return xn("Suspense");
    case 19:
        return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = jl(e.type, !1),
        e;
    case 11:
        return e = jl(e.type.render, !1),
        e;
    case 1:
        return e = jl(e.type, !0),
        e;
    default:
        return ""
    }
}
function ql(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Ot:
        return "Fragment";
    case It:
        return "Portal";
    case Xl:
        return "Profiler";
    case qi:
        return "StrictMode";
    case Zl:
        return "Suspense";
    case Jl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case ps:
            return (e.displayName || "Context") + ".Consumer";
        case fs:
            return (e._context.displayName || "Context") + ".Provider";
        case bi:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case eo:
            return t = e.displayName || null,
            t !== null ? t : ql(e.type) || "Memo";
        case Je:
            t = e._payload,
            e = e._init;
            try {
                return ql(e(t))
            } catch {}
        }
    return null
}
function $c(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ql(t);
    case 8:
        return t === qi ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function dt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function hs(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Vc(e) {
    var t = hs(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function lr(e) {
    e._valueTracker || (e._valueTracker = Vc(e))
}
function vs(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = hs(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Tr(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function bl(e, t) {
    var n = t.checked;
    return V({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Go(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = dt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function ys(e, t) {
    t = t.checked,
    t != null && Ji(e, "checked", t, !1)
}
function ei(e, t) {
    ys(e, t);
    var n = dt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ti(e, t.type, n) : t.hasOwnProperty("defaultValue") && ti(e, t.type, dt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Yo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ti(e, t, n) {
    (t !== "number" || Tr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var wn = Array.isArray;
function Kt(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + dt(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function ni(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(g(91));
    return V({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Xo(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(g(92));
            if (wn(n)) {
                if (1 < n.length)
                    throw Error(g(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: dt(n)
    }
}
function gs(e, t) {
    var n = dt(t.value)
      , r = dt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Zo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function xs(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ri(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? xs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ir, ws = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ir = ir || document.createElement("div"),
        ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ir.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Rn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Nn = {
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
}
  , Bc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function(e) {
    Bc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Nn[t] = Nn[e]
    })
});
function ks(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nn.hasOwnProperty(e) && Nn[e] ? ("" + t).trim() : t + "px"
}
function Ss(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = ks(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var Hc = V({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function li(e, t) {
    if (t) {
        if (Hc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(g(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(g(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(g(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(g(62))
    }
}
function ii(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
        return !0
    }
}
var oi = null;
function to(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ui = null
  , Gt = null
  , Yt = null;
function Jo(e) {
    if (e = qn(e)) {
        if (typeof ui != "function")
            throw Error(g(280));
        var t = e.stateNode;
        t && (t = ul(t),
        ui(e.stateNode, e.type, t))
    }
}
function Ns(e) {
    Gt ? Yt ? Yt.push(e) : Yt = [e] : Gt = e
}
function js() {
    if (Gt) {
        var e = Gt
          , t = Yt;
        if (Yt = Gt = null,
        Jo(e),
        t)
            for (e = 0; e < t.length; e++)
                Jo(t[e])
    }
}
function Es(e, t) {
    return e(t)
}
function Cs() {}
var El = !1;
function _s(e, t, n) {
    if (El)
        return e(t, n);
    El = !0;
    try {
        return Es(e, t, n)
    } finally {
        El = !1,
        (Gt !== null || Yt !== null) && (Cs(),
        js())
    }
}
function In(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ul(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(g(231, t, typeof n));
    return n
}
var si = !1;
if (Qe)
    try {
        var fn = {};
        Object.defineProperty(fn, "passive", {
            get: function() {
                si = !0
            }
        }),
        window.addEventListener("test", fn, fn),
        window.removeEventListener("test", fn, fn)
    } catch {
        si = !1
    }
function Wc(e, t, n, r, l, i, o, u, s) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (v) {
        this.onError(v)
    }
}
var jn = !1
  , Mr = null
  , Rr = !1
  , ai = null
  , Qc = {
    onError: function(e) {
        jn = !0,
        Mr = e
    }
};
function Kc(e, t, n, r, l, i, o, u, s) {
    jn = !1,
    Mr = null,
    Wc.apply(Qc, arguments)
}
function Gc(e, t, n, r, l, i, o, u, s) {
    if (Kc.apply(this, arguments),
    jn) {
        if (jn) {
            var d = Mr;
            jn = !1,
            Mr = null
        } else
            throw Error(g(198));
        Rr || (Rr = !0,
        ai = d)
    }
}
function Mt(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Ps(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function qo(e) {
    if (Mt(e) !== e)
        throw Error(g(188))
}
function Yc(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Mt(e),
        t === null)
            throw Error(g(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n)
                    return qo(l),
                    e;
                if (i === r)
                    return qo(l),
                    t;
                i = i.sibling
            }
            throw Error(g(188))
        }
        if (n.return !== r.return)
            n = l,
            r = i;
        else {
            for (var o = !1, u = l.child; u; ) {
                if (u === n) {
                    o = !0,
                    n = l,
                    r = i;
                    break
                }
                if (u === r) {
                    o = !0,
                    r = l,
                    n = i;
                    break
                }
                u = u.sibling
            }
            if (!o) {
                for (u = i.child; u; ) {
                    if (u === n) {
                        o = !0,
                        n = i,
                        r = l;
                        break
                    }
                    if (u === r) {
                        o = !0,
                        r = i,
                        n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!o)
                    throw Error(g(189))
            }
        }
        if (n.alternate !== r)
            throw Error(g(190))
    }
    if (n.tag !== 3)
        throw Error(g(188));
    return n.stateNode.current === n ? e : t
}
function zs(e) {
    return e = Yc(e),
    e !== null ? Ls(e) : null
}
function Ls(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Ls(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ts = ge.unstable_scheduleCallback
  , bo = ge.unstable_cancelCallback
  , Xc = ge.unstable_shouldYield
  , Zc = ge.unstable_requestPaint
  , Q = ge.unstable_now
  , Jc = ge.unstable_getCurrentPriorityLevel
  , no = ge.unstable_ImmediatePriority
  , Ms = ge.unstable_UserBlockingPriority
  , Ir = ge.unstable_NormalPriority
  , qc = ge.unstable_LowPriority
  , Rs = ge.unstable_IdlePriority
  , rl = null
  , Ae = null;
function bc(e) {
    if (Ae && typeof Ae.onCommitFiberRoot == "function")
        try {
            Ae.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Me = Math.clz32 ? Math.clz32 : nd
  , ed = Math.log
  , td = Math.LN2;
function nd(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (ed(e) / td | 0) | 0
}
var or = 64
  , ur = 4194304;
function kn(e) {
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
        return e
    }
}
function Or(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var u = o & ~l;
        u !== 0 ? r = kn(u) : (i &= o,
        i !== 0 && (r = kn(i)))
    } else
        o = n & ~l,
        o !== 0 ? r = kn(o) : i !== 0 && (r = kn(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    i = t & -t,
    l >= i || l === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Me(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function rd(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
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
        return t + 5e3;
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
        return -1
    }
}
function ld(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - Me(i)
          , u = 1 << o
          , s = l[o];
        s === -1 ? (!(u & n) || u & r) && (l[o] = rd(u, t)) : s <= t && (e.expiredLanes |= u),
        i &= ~u
    }
}
function ci(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Is() {
    var e = or;
    return or <<= 1,
    !(or & 4194240) && (or = 64),
    e
}
function Cl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Zn(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Me(t),
    e[t] = n
}
function id(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Me(n)
          , i = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~i
    }
}
function ro(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Me(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var R = 0;
function Os(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ds, lo, Fs, As, Us, di = !1, sr = [], rt = null, lt = null, it = null, On = new Map, Dn = new Map, be = [], od = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function eu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        rt = null;
        break;
    case "dragenter":
    case "dragleave":
        lt = null;
        break;
    case "mouseover":
    case "mouseout":
        it = null;
        break;
    case "pointerover":
    case "pointerout":
        On.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Dn.delete(t.pointerId)
    }
}
function pn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    },
    t !== null && (t = qn(t),
    t !== null && lo(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function ud(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return rt = pn(rt, e, t, n, r, l),
        !0;
    case "dragenter":
        return lt = pn(lt, e, t, n, r, l),
        !0;
    case "mouseover":
        return it = pn(it, e, t, n, r, l),
        !0;
    case "pointerover":
        var i = l.pointerId;
        return On.set(i, pn(On.get(i) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return i = l.pointerId,
        Dn.set(i, pn(Dn.get(i) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function $s(e) {
    var t = wt(e.target);
    if (t !== null) {
        var n = Mt(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Ps(n),
                t !== null) {
                    e.blockedOn = t,
                    Us(e.priority, function() {
                        Fs(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function kr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            oi = r,
            n.target.dispatchEvent(r),
            oi = null
        } else
            return t = qn(n),
            t !== null && lo(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function tu(e, t, n) {
    kr(e) && n.delete(t)
}
function sd() {
    di = !1,
    rt !== null && kr(rt) && (rt = null),
    lt !== null && kr(lt) && (lt = null),
    it !== null && kr(it) && (it = null),
    On.forEach(tu),
    Dn.forEach(tu)
}
function mn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    di || (di = !0,
    ge.unstable_scheduleCallback(ge.unstable_NormalPriority, sd)))
}
function Fn(e) {
    function t(l) {
        return mn(l, e)
    }
    if (0 < sr.length) {
        mn(sr[0], e);
        for (var n = 1; n < sr.length; n++) {
            var r = sr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (rt !== null && mn(rt, e),
    lt !== null && mn(lt, e),
    it !== null && mn(it, e),
    On.forEach(t),
    Dn.forEach(t),
    n = 0; n < be.length; n++)
        r = be[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < be.length && (n = be[0],
    n.blockedOn === null); )
        $s(n),
        n.blockedOn === null && be.shift()
}
var Xt = Xe.ReactCurrentBatchConfig
  , Dr = !0;
function ad(e, t, n, r) {
    var l = R
      , i = Xt.transition;
    Xt.transition = null;
    try {
        R = 1,
        io(e, t, n, r)
    } finally {
        R = l,
        Xt.transition = i
    }
}
function cd(e, t, n, r) {
    var l = R
      , i = Xt.transition;
    Xt.transition = null;
    try {
        R = 4,
        io(e, t, n, r)
    } finally {
        R = l,
        Xt.transition = i
    }
}
function io(e, t, n, r) {
    if (Dr) {
        var l = fi(e, t, n, r);
        if (l === null)
            Dl(e, t, r, Fr, n),
            eu(e, r);
        else if (ud(l, e, t, n, r))
            r.stopPropagation();
        else if (eu(e, r),
        t & 4 && -1 < od.indexOf(e)) {
            for (; l !== null; ) {
                var i = qn(l);
                if (i !== null && Ds(i),
                i = fi(e, t, n, r),
                i === null && Dl(e, t, r, Fr, n),
                i === l)
                    break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else
            Dl(e, t, r, null, n)
    }
}
var Fr = null;
function fi(e, t, n, r) {
    if (Fr = null,
    e = to(r),
    e = wt(e),
    e !== null)
        if (t = Mt(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Ps(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Fr = e,
    null
}
function Vs(e) {
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
        switch (Jc()) {
        case no:
            return 1;
        case Ms:
            return 4;
        case Ir:
        case qc:
            return 16;
        case Rs:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var tt = null
  , oo = null
  , Sr = null;
function Bs() {
    if (Sr)
        return Sr;
    var e, t = oo, n = t.length, r, l = "value"in tt ? tt.value : tt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++)
        ;
    return Sr = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Nr(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ar() {
    return !0
}
function nu() {
    return !1
}
function we(e) {
    function t(n, r, l, i, o) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var u in e)
            e.hasOwnProperty(u) && (n = e[u],
            this[u] = n ? n(i) : i[u]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ar : nu,
        this.isPropagationStopped = nu,
        this
    }
    return V(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ar)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ar)
        },
        persist: function() {},
        isPersistent: ar
    }),
    t
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, uo = we(un), Jn = V({}, un, {
    view: 0,
    detail: 0
}), dd = we(Jn), _l, Pl, hn, ll = V({}, Jn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: so,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== hn && (hn && e.type === "mousemove" ? (_l = e.screenX - hn.screenX,
        Pl = e.screenY - hn.screenY) : Pl = _l = 0,
        hn = e),
        _l)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Pl
    }
}), ru = we(ll), fd = V({}, ll, {
    dataTransfer: 0
}), pd = we(fd), md = V({}, Jn, {
    relatedTarget: 0
}), zl = we(md), hd = V({}, un, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), vd = we(hd), yd = V({}, un, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), gd = we(yd), xd = V({}, un, {
    data: 0
}), lu = we(xd), wd = {
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
}, kd = {
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
}, Sd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Nd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Sd[e]) ? !!t[e] : !1
}
function so() {
    return Nd
}
var jd = V({}, Jn, {
    key: function(e) {
        if (e.key) {
            var t = wd[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Nr(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kd[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: so,
    charCode: function(e) {
        return e.type === "keypress" ? Nr(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Nr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Ed = we(jd)
  , Cd = V({}, ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , iu = we(Cd)
  , _d = V({}, Jn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: so
})
  , Pd = we(_d)
  , zd = V({}, un, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Ld = we(zd)
  , Td = V({}, ll, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Md = we(Td)
  , Rd = [9, 13, 27, 32]
  , ao = Qe && "CompositionEvent"in window
  , En = null;
Qe && "documentMode"in document && (En = document.documentMode);
var Id = Qe && "TextEvent"in window && !En
  , Hs = Qe && (!ao || En && 8 < En && 11 >= En)
  , ou = " "
  , uu = !1;
function Ws(e, t) {
    switch (e) {
    case "keyup":
        return Rd.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Qs(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Dt = !1;
function Od(e, t) {
    switch (e) {
    case "compositionend":
        return Qs(t);
    case "keypress":
        return t.which !== 32 ? null : (uu = !0,
        ou);
    case "textInput":
        return e = t.data,
        e === ou && uu ? null : e;
    default:
        return null
    }
}
function Dd(e, t) {
    if (Dt)
        return e === "compositionend" || !ao && Ws(e, t) ? (e = Bs(),
        Sr = oo = tt = null,
        Dt = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Hs && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Fd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Fd[e.type] : t === "textarea"
}
function Ks(e, t, n, r) {
    Ns(r),
    t = Ar(t, "onChange"),
    0 < t.length && (n = new uo("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Cn = null
  , An = null;
function Ad(e) {
    ra(e, 0)
}
function il(e) {
    var t = Ut(e);
    if (vs(t))
        return e
}
function Ud(e, t) {
    if (e === "change")
        return t
}
var Gs = !1;
if (Qe) {
    var Ll;
    if (Qe) {
        var Tl = "oninput"in document;
        if (!Tl) {
            var au = document.createElement("div");
            au.setAttribute("oninput", "return;"),
            Tl = typeof au.oninput == "function"
        }
        Ll = Tl
    } else
        Ll = !1;
    Gs = Ll && (!document.documentMode || 9 < document.documentMode)
}
function cu() {
    Cn && (Cn.detachEvent("onpropertychange", Ys),
    An = Cn = null)
}
function Ys(e) {
    if (e.propertyName === "value" && il(An)) {
        var t = [];
        Ks(t, An, e, to(e)),
        _s(Ad, t)
    }
}
function $d(e, t, n) {
    e === "focusin" ? (cu(),
    Cn = t,
    An = n,
    Cn.attachEvent("onpropertychange", Ys)) : e === "focusout" && cu()
}
function Vd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return il(An)
}
function Bd(e, t) {
    if (e === "click")
        return il(t)
}
function Hd(e, t) {
    if (e === "input" || e === "change")
        return il(t)
}
function Wd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ie = typeof Object.is == "function" ? Object.is : Wd;
function Un(e, t) {
    if (Ie(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Yl.call(t, l) || !Ie(e[l], t[l]))
            return !1
    }
    return !0
}
function du(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function fu(e, t) {
    var n = du(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = du(n)
    }
}
function Xs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xs(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Zs() {
    for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Tr(e.document)
    }
    return t
}
function co(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Qd(e) {
    var t = Zs()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Xs(n.ownerDocument.documentElement, n)) {
        if (r !== null && co(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l),
                !e.extend && i > r && (l = r,
                r = i,
                i = l),
                l = fu(n, i);
                var o = fu(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Kd = Qe && "documentMode"in document && 11 >= document.documentMode
  , Ft = null
  , pi = null
  , _n = null
  , mi = !1;
function pu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mi || Ft == null || Ft !== Tr(r) || (r = Ft,
    "selectionStart"in r && co(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    _n && Un(_n, r) || (_n = r,
    r = Ar(pi, "onSelect"),
    0 < r.length && (t = new uo("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Ft)))
}
function cr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var At = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd")
}
  , Ml = {}
  , Js = {};
Qe && (Js = document.createElement("div").style,
"AnimationEvent"in window || (delete At.animationend.animation,
delete At.animationiteration.animation,
delete At.animationstart.animation),
"TransitionEvent"in window || delete At.transitionend.transition);
function ol(e) {
    if (Ml[e])
        return Ml[e];
    if (!At[e])
        return e;
    var t = At[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Js)
            return Ml[e] = t[n];
    return e
}
var qs = ol("animationend")
  , bs = ol("animationiteration")
  , ea = ol("animationstart")
  , ta = ol("transitionend")
  , na = new Map
  , mu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pt(e, t) {
    na.set(e, t),
    Tt(t, [e])
}
for (var Rl = 0; Rl < mu.length; Rl++) {
    var Il = mu[Rl]
      , Gd = Il.toLowerCase()
      , Yd = Il[0].toUpperCase() + Il.slice(1);
    pt(Gd, "on" + Yd)
}
pt(qs, "onAnimationEnd");
pt(bs, "onAnimationIteration");
pt(ea, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(ta, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Xd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));
function hu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Gc(r, t, void 0, e),
    e.currentTarget = null
}
function ra(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o]
                      , s = u.instance
                      , d = u.currentTarget;
                    if (u = u.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    hu(l, u, d),
                    i = s
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (u = r[o],
                    s = u.instance,
                    d = u.currentTarget,
                    u = u.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    hu(l, u, d),
                    i = s
                }
        }
    }
    if (Rr)
        throw e = ai,
        Rr = !1,
        ai = null,
        e
}
function O(e, t) {
    var n = t[xi];
    n === void 0 && (n = t[xi] = new Set);
    var r = e + "__bubble";
    n.has(r) || (la(t, e, 2, !1),
    n.add(r))
}
function Ol(e, t, n) {
    var r = 0;
    t && (r |= 4),
    la(n, e, r, t)
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function $n(e) {
    if (!e[dr]) {
        e[dr] = !0,
        ds.forEach(function(n) {
            n !== "selectionchange" && (Xd.has(n) || Ol(n, !1, e),
            Ol(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[dr] || (t[dr] = !0,
        Ol("selectionchange", !1, t))
    }
}
function la(e, t, n, r) {
    switch (Vs(t)) {
    case 1:
        var l = ad;
        break;
    case 4:
        l = cd;
        break;
    default:
        l = io
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !si || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function Dl(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || u.nodeType === 8 && u.parentNode === l)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo,
                        s === l || s.nodeType === 8 && s.parentNode === l))
                            return;
                        o = o.return
                    }
                for (; u !== null; ) {
                    if (o = wt(u),
                    o === null)
                        return;
                    if (s = o.tag,
                    s === 5 || s === 6) {
                        r = i = o;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
    _s(function() {
        var d = i
          , v = to(n)
          , h = [];
        e: {
            var m = na.get(e);
            if (m !== void 0) {
                var x = uo
                  , w = e;
                switch (e) {
                case "keypress":
                    if (Nr(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = Ed;
                    break;
                case "focusin":
                    w = "focus",
                    x = zl;
                    break;
                case "focusout":
                    w = "blur",
                    x = zl;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = zl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = ru;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = pd;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = Pd;
                    break;
                case qs:
                case bs:
                case ea:
                    x = vd;
                    break;
                case ta:
                    x = Ld;
                    break;
                case "scroll":
                    x = dd;
                    break;
                case "wheel":
                    x = Md;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = gd;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = iu
                }
                var k = (t & 4) !== 0
                  , F = !k && e === "scroll"
                  , f = k ? m !== null ? m + "Capture" : null : m;
                k = [];
                for (var c = d, p; c !== null; ) {
                    p = c;
                    var y = p.stateNode;
                    if (p.tag === 5 && y !== null && (p = y,
                    f !== null && (y = In(c, f),
                    y != null && k.push(Vn(c, y, p)))),
                    F)
                        break;
                    c = c.return
                }
                0 < k.length && (m = new x(m,w,null,n,v),
                h.push({
                    event: m,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                m && n !== oi && (w = n.relatedTarget || n.fromElement) && (wt(w) || w[Ke]))
                    break e;
                if ((x || m) && (m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window,
                x ? (w = n.relatedTarget || n.toElement,
                x = d,
                w = w ? wt(w) : null,
                w !== null && (F = Mt(w),
                w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null,
                w = d),
                x !== w)) {
                    if (k = ru,
                    y = "onMouseLeave",
                    f = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = iu,
                    y = "onPointerLeave",
                    f = "onPointerEnter",
                    c = "pointer"),
                    F = x == null ? m : Ut(x),
                    p = w == null ? m : Ut(w),
                    m = new k(y,c + "leave",x,n,v),
                    m.target = F,
                    m.relatedTarget = p,
                    y = null,
                    wt(v) === d && (k = new k(f,c + "enter",w,n,v),
                    k.target = p,
                    k.relatedTarget = F,
                    y = k),
                    F = y,
                    x && w)
                        t: {
                            for (k = x,
                            f = w,
                            c = 0,
                            p = k; p; p = Rt(p))
                                c++;
                            for (p = 0,
                            y = f; y; y = Rt(y))
                                p++;
                            for (; 0 < c - p; )
                                k = Rt(k),
                                c--;
                            for (; 0 < p - c; )
                                f = Rt(f),
                                p--;
                            for (; c--; ) {
                                if (k === f || f !== null && k === f.alternate)
                                    break t;
                                k = Rt(k),
                                f = Rt(f)
                            }
                            k = null
                        }
                    else
                        k = null;
                    x !== null && vu(h, m, x, k, !1),
                    w !== null && F !== null && vu(h, F, w, k, !0)
                }
            }
            e: {
                if (m = d ? Ut(d) : window,
                x = m.nodeName && m.nodeName.toLowerCase(),
                x === "select" || x === "input" && m.type === "file")
                    var N = Ud;
                else if (su(m))
                    if (Gs)
                        N = Hd;
                    else {
                        N = Vd;
                        var E = $d
                    }
                else
                    (x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = Bd);
                if (N && (N = N(e, d))) {
                    Ks(h, N, n, v);
                    break e
                }
                E && E(e, m, d),
                e === "focusout" && (E = m._wrapperState) && E.controlled && m.type === "number" && ti(m, "number", m.value)
            }
            switch (E = d ? Ut(d) : window,
            e) {
            case "focusin":
                (su(E) || E.contentEditable === "true") && (Ft = E,
                pi = d,
                _n = null);
                break;
            case "focusout":
                _n = pi = Ft = null;
                break;
            case "mousedown":
                mi = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                mi = !1,
                pu(h, n, v);
                break;
            case "selectionchange":
                if (Kd)
                    break;
            case "keydown":
            case "keyup":
                pu(h, n, v)
            }
            var C;
            if (ao)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                    }
                    _ = void 0
                }
            else
                Dt ? Ws(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
            _ && (Hs && n.locale !== "ko" && (Dt || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Dt && (C = Bs()) : (tt = v,
            oo = "value"in tt ? tt.value : tt.textContent,
            Dt = !0)),
            E = Ar(d, _),
            0 < E.length && (_ = new lu(_,e,null,n,v),
            h.push({
                event: _,
                listeners: E
            }),
            C ? _.data = C : (C = Qs(n),
            C !== null && (_.data = C)))),
            (C = Id ? Od(e, n) : Dd(e, n)) && (d = Ar(d, "onBeforeInput"),
            0 < d.length && (v = new lu("onBeforeInput","beforeinput",null,n,v),
            h.push({
                event: v,
                listeners: d
            }),
            v.data = C))
        }
        ra(h, t)
    })
}
function Vn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ar(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , i = l.stateNode;
        l.tag === 5 && i !== null && (l = i,
        i = In(e, n),
        i != null && r.unshift(Vn(e, i, l)),
        i = In(e, t),
        i != null && r.push(Vn(e, i, l))),
        e = e.return
    }
    return r
}
function Rt(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function vu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var u = n
          , s = u.alternate
          , d = u.stateNode;
        if (s !== null && s === r)
            break;
        u.tag === 5 && d !== null && (u = d,
        l ? (s = In(n, i),
        s != null && o.unshift(Vn(n, s, u))) : l || (s = In(n, i),
        s != null && o.push(Vn(n, s, u)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Zd = /\r\n?/g
  , Jd = /\u0000|\uFFFD/g;
function yu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Zd, `
`).replace(Jd, "")
}
function fr(e, t, n) {
    if (t = yu(t),
    yu(e) !== t && n)
        throw Error(g(425))
}
function Ur() {}
var hi = null
  , vi = null;
function yi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var gi = typeof setTimeout == "function" ? setTimeout : void 0
  , qd = typeof clearTimeout == "function" ? clearTimeout : void 0
  , gu = typeof Promise == "function" ? Promise : void 0
  , bd = typeof queueMicrotask == "function" ? queueMicrotask : typeof gu < "u" ? function(e) {
    return gu.resolve(null).then(e).catch(ef)
}
: gi;
function ef(e) {
    setTimeout(function() {
        throw e
    })
}
function Fl(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    Fn(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Fn(t)
}
function ot(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function xu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var sn = Math.random().toString(36).slice(2)
  , Fe = "__reactFiber$" + sn
  , Bn = "__reactProps$" + sn
  , Ke = "__reactContainer$" + sn
  , xi = "__reactEvents$" + sn
  , tf = "__reactListeners$" + sn
  , nf = "__reactHandles$" + sn;
function wt(e) {
    var t = e[Fe];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ke] || n[Fe]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = xu(e); e !== null; ) {
                    if (n = e[Fe])
                        return n;
                    e = xu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function qn(e) {
    return e = e[Fe] || e[Ke],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ut(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(g(33))
}
function ul(e) {
    return e[Bn] || null
}
var wi = []
  , $t = -1;
function mt(e) {
    return {
        current: e
    }
}
function D(e) {
    0 > $t || (e.current = wi[$t],
    wi[$t] = null,
    $t--)
}
function I(e, t) {
    $t++,
    wi[$t] = e.current,
    e.current = t
}
var ft = {}
  , ie = mt(ft)
  , fe = mt(!1)
  , Ct = ft;
function bt(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n)
        l[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function pe(e) {
    return e = e.childContextTypes,
    e != null
}
function $r() {
    D(fe),
    D(ie)
}
function wu(e, t, n) {
    if (ie.current !== ft)
        throw Error(g(168));
    I(ie, t),
    I(fe, n)
}
function ia(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(g(108, $c(e) || "Unknown", l));
    return V({}, n, r)
}
function Vr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ft,
    Ct = ie.current,
    I(ie, e),
    I(fe, fe.current),
    !0
}
function ku(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(g(169));
    n ? (e = ia(e, t, Ct),
    r.__reactInternalMemoizedMergedChildContext = e,
    D(fe),
    D(ie),
    I(ie, e)) : D(fe),
    I(fe, n)
}
var Ve = null
  , sl = !1
  , Al = !1;
function oa(e) {
    Ve === null ? Ve = [e] : Ve.push(e)
}
function rf(e) {
    sl = !0,
    oa(e)
}
function ht() {
    if (!Al && Ve !== null) {
        Al = !0;
        var e = 0
          , t = R;
        try {
            var n = Ve;
            for (R = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ve = null,
            sl = !1
        } catch (l) {
            throw Ve !== null && (Ve = Ve.slice(e + 1)),
            Ts(no, ht),
            l
        } finally {
            R = t,
            Al = !1
        }
    }
    return null
}
var Vt = []
  , Bt = 0
  , Br = null
  , Hr = 0
  , ke = []
  , Se = 0
  , _t = null
  , Be = 1
  , He = "";
function gt(e, t) {
    Vt[Bt++] = Hr,
    Vt[Bt++] = Br,
    Br = e,
    Hr = t
}
function ua(e, t, n) {
    ke[Se++] = Be,
    ke[Se++] = He,
    ke[Se++] = _t,
    _t = e;
    var r = Be;
    e = He;
    var l = 32 - Me(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var i = 32 - Me(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        l -= o,
        Be = 1 << 32 - Me(t) + l | n << l | r,
        He = i + e
    } else
        Be = 1 << i | n << l | r,
        He = e
}
function fo(e) {
    e.return !== null && (gt(e, 1),
    ua(e, 1, 0))
}
function po(e) {
    for (; e === Br; )
        Br = Vt[--Bt],
        Vt[Bt] = null,
        Hr = Vt[--Bt],
        Vt[Bt] = null;
    for (; e === _t; )
        _t = ke[--Se],
        ke[Se] = null,
        He = ke[--Se],
        ke[Se] = null,
        Be = ke[--Se],
        ke[Se] = null
}
var ye = null
  , ve = null
  , A = !1
  , Te = null;
function sa(e, t) {
    var n = Ne(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Su(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        ye = e,
        ve = ot(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        ye = e,
        ve = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = _t !== null ? {
            id: Be,
            overflow: He
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ne(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        ye = e,
        ve = null,
        !0) : !1;
    default:
        return !1
    }
}
function ki(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Si(e) {
    if (A) {
        var t = ve;
        if (t) {
            var n = t;
            if (!Su(e, t)) {
                if (ki(e))
                    throw Error(g(418));
                t = ot(n.nextSibling);
                var r = ye;
                t && Su(e, t) ? sa(r, n) : (e.flags = e.flags & -4097 | 2,
                A = !1,
                ye = e)
            }
        } else {
            if (ki(e))
                throw Error(g(418));
            e.flags = e.flags & -4097 | 2,
            A = !1,
            ye = e
        }
    }
}
function Nu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    ye = e
}
function pr(e) {
    if (e !== ye)
        return !1;
    if (!A)
        return Nu(e),
        A = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !yi(e.type, e.memoizedProps)),
    t && (t = ve)) {
        if (ki(e))
            throw aa(),
            Error(g(418));
        for (; t; )
            sa(e, t),
            t = ot(t.nextSibling)
    }
    if (Nu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(g(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ve = ot(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ve = null
        }
    } else
        ve = ye ? ot(e.stateNode.nextSibling) : null;
    return !0
}
function aa() {
    for (var e = ve; e; )
        e = ot(e.nextSibling)
}
function en() {
    ve = ye = null,
    A = !1
}
function mo(e) {
    Te === null ? Te = [e] : Te.push(e)
}
var lf = Xe.ReactCurrentBatchConfig;
function vn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(g(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(g(147, e));
            var l = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var u = l.refs;
                o === null ? delete u[i] : u[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(g(284));
        if (!n._owner)
            throw Error(g(290, e))
    }
    return e
}
function mr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ju(e) {
    var t = e._init;
    return t(e._payload)
}
function ca(e) {
    function t(f, c) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [c],
            f.flags |= 16) : p.push(c)
        }
    }
    function n(f, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(f, c),
            c = c.sibling;
        return null
    }
    function r(f, c) {
        for (f = new Map; c !== null; )
            c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
            c = c.sibling;
        return f
    }
    function l(f, c) {
        return f = ct(f, c),
        f.index = 0,
        f.sibling = null,
        f
    }
    function i(f, c, p) {
        return f.index = p,
        e ? (p = f.alternate,
        p !== null ? (p = p.index,
        p < c ? (f.flags |= 2,
        c) : p) : (f.flags |= 2,
        c)) : (f.flags |= 1048576,
        c)
    }
    function o(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function u(f, c, p, y) {
        return c === null || c.tag !== 6 ? (c = Ql(p, f.mode, y),
        c.return = f,
        c) : (c = l(c, p),
        c.return = f,
        c)
    }
    function s(f, c, p, y) {
        var N = p.type;
        return N === Ot ? v(f, c, p.props.children, y, p.key) : c !== null && (c.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Je && ju(N) === c.type) ? (y = l(c, p.props),
        y.ref = vn(f, c, p),
        y.return = f,
        y) : (y = Lr(p.type, p.key, p.props, null, f.mode, y),
        y.ref = vn(f, c, p),
        y.return = f,
        y)
    }
    function d(f, c, p, y) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Kl(p, f.mode, y),
        c.return = f,
        c) : (c = l(c, p.children || []),
        c.return = f,
        c)
    }
    function v(f, c, p, y, N) {
        return c === null || c.tag !== 7 ? (c = Et(p, f.mode, y, N),
        c.return = f,
        c) : (c = l(c, p),
        c.return = f,
        c)
    }
    function h(f, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = Ql("" + c, f.mode, p),
            c.return = f,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case rr:
                return p = Lr(c.type, c.key, c.props, null, f.mode, p),
                p.ref = vn(f, null, c),
                p.return = f,
                p;
            case It:
                return c = Kl(c, f.mode, p),
                c.return = f,
                c;
            case Je:
                var y = c._init;
                return h(f, y(c._payload), p)
            }
            if (wn(c) || dn(c))
                return c = Et(c, f.mode, p, null),
                c.return = f,
                c;
            mr(f, c)
        }
        return null
    }
    function m(f, c, p, y) {
        var N = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return N !== null ? null : u(f, c, "" + p, y);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case rr:
                return p.key === N ? s(f, c, p, y) : null;
            case It:
                return p.key === N ? d(f, c, p, y) : null;
            case Je:
                return N = p._init,
                m(f, c, N(p._payload), y)
            }
            if (wn(p) || dn(p))
                return N !== null ? null : v(f, c, p, y, null);
            mr(f, p)
        }
        return null
    }
    function x(f, c, p, y, N) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return f = f.get(p) || null,
            u(c, f, "" + y, N);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case rr:
                return f = f.get(y.key === null ? p : y.key) || null,
                s(c, f, y, N);
            case It:
                return f = f.get(y.key === null ? p : y.key) || null,
                d(c, f, y, N);
            case Je:
                var E = y._init;
                return x(f, c, p, E(y._payload), N)
            }
            if (wn(y) || dn(y))
                return f = f.get(p) || null,
                v(c, f, y, N, null);
            mr(c, y)
        }
        return null
    }
    function w(f, c, p, y) {
        for (var N = null, E = null, C = c, _ = c = 0, H = null; C !== null && _ < p.length; _++) {
            C.index > _ ? (H = C,
            C = null) : H = C.sibling;
            var T = m(f, C, p[_], y);
            if (T === null) {
                C === null && (C = H);
                break
            }
            e && C && T.alternate === null && t(f, C),
            c = i(T, c, _),
            E === null ? N = T : E.sibling = T,
            E = T,
            C = H
        }
        if (_ === p.length)
            return n(f, C),
            A && gt(f, _),
            N;
        if (C === null) {
            for (; _ < p.length; _++)
                C = h(f, p[_], y),
                C !== null && (c = i(C, c, _),
                E === null ? N = C : E.sibling = C,
                E = C);
            return A && gt(f, _),
            N
        }
        for (C = r(f, C); _ < p.length; _++)
            H = x(C, f, _, p[_], y),
            H !== null && (e && H.alternate !== null && C.delete(H.key === null ? _ : H.key),
            c = i(H, c, _),
            E === null ? N = H : E.sibling = H,
            E = H);
        return e && C.forEach(function(_e) {
            return t(f, _e)
        }),
        A && gt(f, _),
        N
    }
    function k(f, c, p, y) {
        var N = dn(p);
        if (typeof N != "function")
            throw Error(g(150));
        if (p = N.call(p),
        p == null)
            throw Error(g(151));
        for (var E = N = null, C = c, _ = c = 0, H = null, T = p.next(); C !== null && !T.done; _++,
        T = p.next()) {
            C.index > _ ? (H = C,
            C = null) : H = C.sibling;
            var _e = m(f, C, T.value, y);
            if (_e === null) {
                C === null && (C = H);
                break
            }
            e && C && _e.alternate === null && t(f, C),
            c = i(_e, c, _),
            E === null ? N = _e : E.sibling = _e,
            E = _e,
            C = H
        }
        if (T.done)
            return n(f, C),
            A && gt(f, _),
            N;
        if (C === null) {
            for (; !T.done; _++,
            T = p.next())
                T = h(f, T.value, y),
                T !== null && (c = i(T, c, _),
                E === null ? N = T : E.sibling = T,
                E = T);
            return A && gt(f, _),
            N
        }
        for (C = r(f, C); !T.done; _++,
        T = p.next())
            T = x(C, f, _, T.value, y),
            T !== null && (e && T.alternate !== null && C.delete(T.key === null ? _ : T.key),
            c = i(T, c, _),
            E === null ? N = T : E.sibling = T,
            E = T);
        return e && C.forEach(function(an) {
            return t(f, an)
        }),
        A && gt(f, _),
        N
    }
    function F(f, c, p, y) {
        if (typeof p == "object" && p !== null && p.type === Ot && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case rr:
                e: {
                    for (var N = p.key, E = c; E !== null; ) {
                        if (E.key === N) {
                            if (N = p.type,
                            N === Ot) {
                                if (E.tag === 7) {
                                    n(f, E.sibling),
                                    c = l(E, p.props.children),
                                    c.return = f,
                                    f = c;
                                    break e
                                }
                            } else if (E.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Je && ju(N) === E.type) {
                                n(f, E.sibling),
                                c = l(E, p.props),
                                c.ref = vn(f, E, p),
                                c.return = f,
                                f = c;
                                break e
                            }
                            n(f, E);
                            break
                        } else
                            t(f, E);
                        E = E.sibling
                    }
                    p.type === Ot ? (c = Et(p.props.children, f.mode, y, p.key),
                    c.return = f,
                    f = c) : (y = Lr(p.type, p.key, p.props, null, f.mode, y),
                    y.ref = vn(f, c, p),
                    y.return = f,
                    f = y)
                }
                return o(f);
            case It:
                e: {
                    for (E = p.key; c !== null; ) {
                        if (c.key === E)
                            if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                n(f, c.sibling),
                                c = l(c, p.children || []),
                                c.return = f,
                                f = c;
                                break e
                            } else {
                                n(f, c);
                                break
                            }
                        else
                            t(f, c);
                        c = c.sibling
                    }
                    c = Kl(p, f.mode, y),
                    c.return = f,
                    f = c
                }
                return o(f);
            case Je:
                return E = p._init,
                F(f, c, E(p._payload), y)
            }
            if (wn(p))
                return w(f, c, p, y);
            if (dn(p))
                return k(f, c, p, y);
            mr(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        c !== null && c.tag === 6 ? (n(f, c.sibling),
        c = l(c, p),
        c.return = f,
        f = c) : (n(f, c),
        c = Ql(p, f.mode, y),
        c.return = f,
        f = c),
        o(f)) : n(f, c)
    }
    return F
}
var tn = ca(!0)
  , da = ca(!1)
  , Wr = mt(null)
  , Qr = null
  , Ht = null
  , ho = null;
function vo() {
    ho = Ht = Qr = null
}
function yo(e) {
    var t = Wr.current;
    D(Wr),
    e._currentValue = t
}
function Ni(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Zt(e, t) {
    Qr = e,
    ho = Ht = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (de = !0),
    e.firstContext = null)
}
function Ee(e) {
    var t = e._currentValue;
    if (ho !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Ht === null) {
            if (Qr === null)
                throw Error(g(308));
            Ht = e,
            Qr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Ht = Ht.next = e;
    return t
}
var kt = null;
function go(e) {
    kt === null ? kt = [e] : kt.push(e)
}
function fa(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    go(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    Ge(e, r)
}
function Ge(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var qe = !1;
function xo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function pa(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function We(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        Ge(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    go(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    Ge(e, n)
}
function jr(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        ro(e, n)
    }
}
function Eu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else
            l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Kr(e, t, n, r) {
    var l = e.updateQueue;
    qe = !1;
    var i = l.firstBaseUpdate
      , o = l.lastBaseUpdate
      , u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u
          , d = s.next;
        s.next = null,
        o === null ? i = d : o.next = d,
        o = s;
        var v = e.alternate;
        v !== null && (v = v.updateQueue,
        u = v.lastBaseUpdate,
        u !== o && (u === null ? v.firstBaseUpdate = d : u.next = d,
        v.lastBaseUpdate = s))
    }
    if (i !== null) {
        var h = l.baseState;
        o = 0,
        v = d = s = null,
        u = i;
        do {
            var m = u.lane
              , x = u.eventTime;
            if ((r & m) === m) {
                v !== null && (v = v.next = {
                    eventTime: x,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var w = e
                      , k = u;
                    switch (m = t,
                    x = n,
                    k.tag) {
                    case 1:
                        if (w = k.payload,
                        typeof w == "function") {
                            h = w.call(x, h, m);
                            break e
                        }
                        h = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = k.payload,
                        m = typeof w == "function" ? w.call(x, h, m) : w,
                        m == null)
                            break e;
                        h = V({}, h, m);
                        break e;
                    case 2:
                        qe = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64,
                m = l.effects,
                m === null ? l.effects = [u] : m.push(u))
            } else
                x = {
                    eventTime: x,
                    lane: m,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                },
                v === null ? (d = v = x,
                s = h) : v = v.next = x,
                o |= m;
            if (u = u.next,
            u === null) {
                if (u = l.shared.pending,
                u === null)
                    break;
                m = u,
                u = m.next,
                m.next = null,
                l.lastBaseUpdate = m,
                l.shared.pending = null
            }
        } while (!0);
        if (v === null && (s = h),
        l.baseState = s,
        l.firstBaseUpdate = d,
        l.lastBaseUpdate = v,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                o |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            i === null && (l.shared.lanes = 0);
        zt |= o,
        e.lanes = o,
        e.memoizedState = h
    }
}
function Cu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(g(191, l));
                l.call(r)
            }
        }
}
var bn = {}
  , Ue = mt(bn)
  , Hn = mt(bn)
  , Wn = mt(bn);
function St(e) {
    if (e === bn)
        throw Error(g(174));
    return e
}
function wo(e, t) {
    switch (I(Wn, t),
    I(Hn, e),
    I(Ue, bn),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ri(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ri(t, e)
    }
    D(Ue),
    I(Ue, t)
}
function nn() {
    D(Ue),
    D(Hn),
    D(Wn)
}
function ma(e) {
    St(Wn.current);
    var t = St(Ue.current)
      , n = ri(t, e.type);
    t !== n && (I(Hn, e),
    I(Ue, n))
}
function ko(e) {
    Hn.current === e && (D(Ue),
    D(Hn))
}
var U = mt(0);
function Gr(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ul = [];
function So() {
    for (var e = 0; e < Ul.length; e++)
        Ul[e]._workInProgressVersionPrimary = null;
    Ul.length = 0
}
var Er = Xe.ReactCurrentDispatcher
  , $l = Xe.ReactCurrentBatchConfig
  , Pt = 0
  , $ = null
  , G = null
  , Z = null
  , Yr = !1
  , Pn = !1
  , Qn = 0
  , of = 0;
function ne() {
    throw Error(g(321))
}
function No(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ie(e[n], t[n]))
            return !1;
    return !0
}
function jo(e, t, n, r, l, i) {
    if (Pt = i,
    $ = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Er.current = e === null || e.memoizedState === null ? cf : df,
    e = n(r, l),
    Pn) {
        i = 0;
        do {
            if (Pn = !1,
            Qn = 0,
            25 <= i)
                throw Error(g(301));
            i += 1,
            Z = G = null,
            t.updateQueue = null,
            Er.current = ff,
            e = n(r, l)
        } while (Pn)
    }
    if (Er.current = Xr,
    t = G !== null && G.next !== null,
    Pt = 0,
    Z = G = $ = null,
    Yr = !1,
    t)
        throw Error(g(300));
    return e
}
function Eo() {
    var e = Qn !== 0;
    return Qn = 0,
    e
}
function De() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Z === null ? $.memoizedState = Z = e : Z = Z.next = e,
    Z
}
function Ce() {
    if (G === null) {
        var e = $.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = G.next;
    var t = Z === null ? $.memoizedState : Z.next;
    if (t !== null)
        Z = t,
        G = e;
    else {
        if (e === null)
            throw Error(g(310));
        G = e,
        e = {
            memoizedState: G.memoizedState,
            baseState: G.baseState,
            baseQueue: G.baseQueue,
            queue: G.queue,
            next: null
        },
        Z === null ? $.memoizedState = Z = e : Z = Z.next = e
    }
    return Z
}
function Kn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Vl(e) {
    var t = Ce()
      , n = t.queue;
    if (n === null)
        throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = G
      , l = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next,
            i.next = o
        }
        r.baseQueue = l = i,
        n.pending = null
    }
    if (l !== null) {
        i = l.next,
        r = r.baseState;
        var u = o = null
          , s = null
          , d = i;
        do {
            var v = d.lane;
            if ((Pt & v) === v)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                }),
                r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var h = {
                    lane: v,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                s === null ? (u = s = h,
                o = r) : s = s.next = h,
                $.lanes |= v,
                zt |= v
            }
            d = d.next
        } while (d !== null && d !== i);
        s === null ? o = r : s.next = u,
        Ie(r, t.memoizedState) || (de = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            i = l.lane,
            $.lanes |= i,
            zt |= i,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Bl(e) {
    var t = Ce()
      , n = t.queue;
    if (n === null)
        throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== l);
        Ie(i, t.memoizedState) || (de = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function ha() {}
function va(e, t) {
    var n = $
      , r = Ce()
      , l = t()
      , i = !Ie(r.memoizedState, l);
    if (i && (r.memoizedState = l,
    de = !0),
    r = r.queue,
    Co(xa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Z !== null && Z.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Gn(9, ga.bind(null, n, r, l, t), void 0, null),
        J === null)
            throw Error(g(349));
        Pt & 30 || ya(n, t, l)
    }
    return l
}
function ya(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = $.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    $.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function ga(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    wa(t) && ka(e)
}
function xa(e, t, n) {
    return n(function() {
        wa(t) && ka(e)
    })
}
function wa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ie(e, n)
    } catch {
        return !0
    }
}
function ka(e) {
    var t = Ge(e, 1);
    t !== null && Re(t, e, 1, -1)
}
function _u(e) {
    var t = De();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kn,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = af.bind(null, $, e),
    [t.memoizedState, e]
}
function Gn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = $.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    $.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Sa() {
    return Ce().memoizedState
}
function Cr(e, t, n, r) {
    var l = De();
    $.flags |= e,
    l.memoizedState = Gn(1 | t, n, void 0, r === void 0 ? null : r)
}
function al(e, t, n, r) {
    var l = Ce();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (G !== null) {
        var o = G.memoizedState;
        if (i = o.destroy,
        r !== null && No(r, o.deps)) {
            l.memoizedState = Gn(t, n, i, r);
            return
        }
    }
    $.flags |= e,
    l.memoizedState = Gn(1 | t, n, i, r)
}
function Pu(e, t) {
    return Cr(8390656, 8, e, t)
}
function Co(e, t) {
    return al(2048, 8, e, t)
}
function Na(e, t) {
    return al(4, 2, e, t)
}
function ja(e, t) {
    return al(4, 4, e, t)
}
function Ea(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Ca(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    al(4, 4, Ea.bind(null, t, e), n)
}
function _o() {}
function _a(e, t) {
    var n = Ce();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && No(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Pa(e, t) {
    var n = Ce();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && No(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function za(e, t, n) {
    return Pt & 21 ? (Ie(n, t) || (n = Is(),
    $.lanes |= n,
    zt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    de = !0),
    e.memoizedState = n)
}
function uf(e, t) {
    var n = R;
    R = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = $l.transition;
    $l.transition = {};
    try {
        e(!1),
        t()
    } finally {
        R = n,
        $l.transition = r
    }
}
function La() {
    return Ce().memoizedState
}
function sf(e, t, n) {
    var r = at(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ta(e))
        Ma(t, n);
    else if (n = fa(e, t, n, r),
    n !== null) {
        var l = ue();
        Re(n, e, r, l),
        Ra(n, t, r)
    }
}
function af(e, t, n) {
    var r = at(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ta(e))
        Ma(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , u = i(o, n);
                if (l.hasEagerState = !0,
                l.eagerState = u,
                Ie(u, o)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l,
                    go(t)) : (l.next = s.next,
                    s.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = fa(e, t, l, r),
        n !== null && (l = ue(),
        Re(n, e, r, l),
        Ra(n, t, r))
    }
}
function Ta(e) {
    var t = e.alternate;
    return e === $ || t !== null && t === $
}
function Ma(e, t) {
    Pn = Yr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Ra(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        ro(e, n)
    }
}
var Xr = {
    readContext: Ee,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1
}
  , cf = {
    readContext: Ee,
    useCallback: function(e, t) {
        return De().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ee,
    useEffect: Pu,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Cr(4194308, 4, Ea.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Cr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Cr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = De();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = De();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = sf.bind(null, $, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = De();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: _u,
    useDebugValue: _o,
    useDeferredValue: function(e) {
        return De().memoizedState = e
    },
    useTransition: function() {
        var e = _u(!1)
          , t = e[0];
        return e = uf.bind(null, e[1]),
        De().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = $
          , l = De();
        if (A) {
            if (n === void 0)
                throw Error(g(407));
            n = n()
        } else {
            if (n = t(),
            J === null)
                throw Error(g(349));
            Pt & 30 || ya(r, t, n)
        }
        l.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return l.queue = i,
        Pu(xa.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Gn(9, ga.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = De()
          , t = J.identifierPrefix;
        if (A) {
            var n = He
              , r = Be;
            n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Qn++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = of++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , df = {
    readContext: Ee,
    useCallback: _a,
    useContext: Ee,
    useEffect: Co,
    useImperativeHandle: Ca,
    useInsertionEffect: Na,
    useLayoutEffect: ja,
    useMemo: Pa,
    useReducer: Vl,
    useRef: Sa,
    useState: function() {
        return Vl(Kn)
    },
    useDebugValue: _o,
    useDeferredValue: function(e) {
        var t = Ce();
        return za(t, G.memoizedState, e)
    },
    useTransition: function() {
        var e = Vl(Kn)[0]
          , t = Ce().memoizedState;
        return [e, t]
    },
    useMutableSource: ha,
    useSyncExternalStore: va,
    useId: La,
    unstable_isNewReconciler: !1
}
  , ff = {
    readContext: Ee,
    useCallback: _a,
    useContext: Ee,
    useEffect: Co,
    useImperativeHandle: Ca,
    useInsertionEffect: Na,
    useLayoutEffect: ja,
    useMemo: Pa,
    useReducer: Bl,
    useRef: Sa,
    useState: function() {
        return Bl(Kn)
    },
    useDebugValue: _o,
    useDeferredValue: function(e) {
        var t = Ce();
        return G === null ? t.memoizedState = e : za(t, G.memoizedState, e)
    },
    useTransition: function() {
        var e = Bl(Kn)[0]
          , t = Ce().memoizedState;
        return [e, t]
    },
    useMutableSource: ha,
    useSyncExternalStore: va,
    useId: La,
    unstable_isNewReconciler: !1
};
function ze(e, t) {
    if (e && e.defaultProps) {
        t = V({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ji(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : V({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var cl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Mt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , l = at(e)
          , i = We(r, l);
        i.payload = t,
        n != null && (i.callback = n),
        t = ut(e, i, l),
        t !== null && (Re(t, e, l, r),
        jr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , l = at(e)
          , i = We(r, l);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = ut(e, i, l),
        t !== null && (Re(t, e, l, r),
        jr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ue()
          , r = at(e)
          , l = We(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = ut(e, l, r),
        t !== null && (Re(t, e, r, n),
        jr(t, e, r))
    }
};
function zu(e, t, n, r, l, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Un(n, r) || !Un(l, i) : !0
}
function Ia(e, t, n) {
    var r = !1
      , l = ft
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Ee(i) : (l = pe(t) ? Ct : ie.current,
    r = t.contextTypes,
    i = (r = r != null) ? bt(e, l) : ft),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = cl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Lu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cl.enqueueReplaceState(t, t.state, null)
}
function Ei(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    xo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = Ee(i) : (i = pe(t) ? Ct : ie.current,
    l.context = bt(e, i)),
    l.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (ji(e, t, i, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && cl.enqueueReplaceState(l, l.state, null),
    Kr(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function rn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Uc(r),
            r = r.return;
        while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function Hl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Ci(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var pf = typeof WeakMap == "function" ? WeakMap : Map;
function Oa(e, t, n) {
    n = We(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Jr || (Jr = !0,
        Di = r),
        Ci(e, t)
    }
    ,
    n
}
function Da(e, t, n) {
    n = We(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            Ci(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Ci(e, t),
        typeof r != "function" && (st === null ? st = new Set([this]) : st.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Tu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new pf;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = _f.bind(null, e, t, n),
    t.then(e, e))
}
function Mu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ru(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = We(-1, 1),
    t.tag = 2,
    ut(n, t, 1))),
    n.lanes |= 1),
    e)
}
var mf = Xe.ReactCurrentOwner
  , de = !1;
function oe(e, t, n, r) {
    t.child = e === null ? da(t, null, n, r) : tn(t, e.child, n, r)
}
function Iu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Zt(t, l),
    r = jo(e, t, n, r, i, l),
    n = Eo(),
    e !== null && !de ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Ye(e, t, l)) : (A && n && fo(t),
    t.flags |= 1,
    oe(e, t, r, l),
    t.child)
}
function Ou(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Oo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        Fa(e, t, i, r, l)) : (e = Lr(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Un,
        n(o, r) && e.ref === t.ref)
            return Ye(e, t, l)
    }
    return t.flags |= 1,
    e = ct(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Fa(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Un(i, r) && e.ref === t.ref)
            if (de = !1,
            t.pendingProps = r = i,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (de = !0);
            else
                return t.lanes = e.lanes,
                Ye(e, t, l)
    }
    return _i(e, t, n, r, l)
}
function Aa(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            I(Qt, he),
            he |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                I(Qt, he),
                he |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            I(Qt, he),
            he |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        I(Qt, he),
        he |= r;
    return oe(e, t, l, n),
    t.child
}
function Ua(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function _i(e, t, n, r, l) {
    var i = pe(n) ? Ct : ie.current;
    return i = bt(t, i),
    Zt(t, l),
    n = jo(e, t, n, r, i, l),
    r = Eo(),
    e !== null && !de ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Ye(e, t, l)) : (A && r && fo(t),
    t.flags |= 1,
    oe(e, t, n, l),
    t.child)
}
function Du(e, t, n, r, l) {
    if (pe(n)) {
        var i = !0;
        Vr(t)
    } else
        i = !1;
    if (Zt(t, l),
    t.stateNode === null)
        _r(e, t),
        Ia(t, n, r),
        Ei(t, n, r, l),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , u = t.memoizedProps;
        o.props = u;
        var s = o.context
          , d = n.contextType;
        typeof d == "object" && d !== null ? d = Ee(d) : (d = pe(n) ? Ct : ie.current,
        d = bt(t, d));
        var v = n.getDerivedStateFromProps
          , h = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== d) && Lu(t, o, r, d),
        qe = !1;
        var m = t.memoizedState;
        o.state = m,
        Kr(t, r, o, l),
        s = t.memoizedState,
        u !== r || m !== s || fe.current || qe ? (typeof v == "function" && (ji(t, n, v, r),
        s = t.memoizedState),
        (u = qe || zu(t, n, u, r, m, s, d)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        o.props = r,
        o.state = s,
        o.context = d,
        r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        pa(e, t),
        u = t.memoizedProps,
        d = t.type === t.elementType ? u : ze(t.type, u),
        o.props = d,
        h = t.pendingProps,
        m = o.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = Ee(s) : (s = pe(n) ? Ct : ie.current,
        s = bt(t, s));
        var x = n.getDerivedStateFromProps;
        (v = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || m !== s) && Lu(t, o, r, s),
        qe = !1,
        m = t.memoizedState,
        o.state = m,
        Kr(t, r, o, l);
        var w = t.memoizedState;
        u !== h || m !== w || fe.current || qe ? (typeof x == "function" && (ji(t, n, x, r),
        w = t.memoizedState),
        (d = qe || zu(t, n, d, r, m, w, s) || !1) ? (v || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        o.props = r,
        o.state = w,
        o.context = s,
        r = d) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Pi(e, t, n, r, i, l)
}
function Pi(e, t, n, r, l, i) {
    Ua(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return l && ku(t, n, !1),
        Ye(e, t, i);
    r = t.stateNode,
    mf.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = tn(t, e.child, null, i),
    t.child = tn(t, null, u, i)) : oe(e, t, u, i),
    t.memoizedState = r.state,
    l && ku(t, n, !0),
    t.child
}
function $a(e) {
    var t = e.stateNode;
    t.pendingContext ? wu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wu(e, t.context, !1),
    wo(e, t.containerInfo)
}
function Fu(e, t, n, r, l) {
    return en(),
    mo(l),
    t.flags |= 256,
    oe(e, t, n, r),
    t.child
}
var zi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Li(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Va(e, t, n) {
    var r = t.pendingProps, l = U.current, i = !1, o = (t.flags & 128) !== 0, u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    I(U, l & 1),
    e === null)
        return Si(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = pl(o, r, 0, null),
        e = Et(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Li(n),
        t.memoizedState = zi,
        e) : Po(t, o));
    if (l = e.memoizedState,
    l !== null && (u = l.dehydrated,
    u !== null))
        return hf(e, t, o, r, u, l, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        l = e.child,
        u = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = ct(l, s),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        u !== null ? i = ct(u, i) : (i = Et(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? Li(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = zi,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = ct(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Po(e, t) {
    return t = pl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function hr(e, t, n, r) {
    return r !== null && mo(r),
    tn(t, e.child, null, n),
    e = Po(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function hf(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Hl(Error(g(422))),
        hr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        l = t.mode,
        r = pl({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        i = Et(i, l, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && tn(t, e.child, null, o),
        t.child.memoizedState = Li(o),
        t.memoizedState = zi,
        i);
    if (!(t.mode & 1))
        return hr(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var u = r.dgst;
        return r = u,
        i = Error(g(419)),
        r = Hl(i, r, void 0),
        hr(e, t, o, r)
    }
    if (u = (o & e.childLanes) !== 0,
    de || u) {
        if (r = J,
        r !== null) {
            switch (o & -o) {
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
                l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l,
            l !== 0 && l !== i.retryLane && (i.retryLane = l,
            Ge(e, l),
            Re(r, e, l, -1))
        }
        return Io(),
        r = Hl(Error(g(421))),
        hr(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Pf.bind(null, e),
    l._reactRetry = t,
    null) : (e = i.treeContext,
    ve = ot(l.nextSibling),
    ye = t,
    A = !0,
    Te = null,
    e !== null && (ke[Se++] = Be,
    ke[Se++] = He,
    ke[Se++] = _t,
    Be = e.id,
    He = e.overflow,
    _t = t),
    t = Po(t, r.children),
    t.flags |= 4096,
    t)
}
function Au(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ni(e.return, t, n)
}
function Wl(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = l)
}
function Ba(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , i = r.tail;
    if (oe(e, t, r.children, n),
    r = U.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Au(e, n, t);
                else if (e.tag === 19)
                    Au(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (I(U, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && Gr(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            Wl(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && Gr(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            Wl(t, !0, n, null, i);
            break;
        case "together":
            Wl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function _r(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Ye(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    zt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(g(153));
    if (t.child !== null) {
        for (e = t.child,
        n = ct(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = ct(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function vf(e, t, n) {
    switch (t.tag) {
    case 3:
        $a(t),
        en();
        break;
    case 5:
        ma(t);
        break;
    case 1:
        pe(t.type) && Vr(t);
        break;
    case 4:
        wo(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        I(Wr, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (I(U, U.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Va(e, t, n) : (I(U, U.current & 1),
            e = Ye(e, t, n),
            e !== null ? e.sibling : null);
        I(U, U.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Ba(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        I(U, U.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Aa(e, t, n)
    }
    return Ye(e, t, n)
}
var Ha, Ti, Wa, Qa;
Ha = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ti = function() {}
;
Wa = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        St(Ue.current);
        var i = null;
        switch (n) {
        case "input":
            l = bl(e, l),
            r = bl(e, r),
            i = [];
            break;
        case "select":
            l = V({}, l, {
                value: void 0
            }),
            r = V({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            l = ni(e, l),
            r = ni(e, r),
            i = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ur)
        }
        li(n, r);
        var o;
        n = null;
        for (d in l)
            if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
                if (d === "style") {
                    var u = l[d];
                    for (o in u)
                        u.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Mn.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
        for (d in r) {
            var s = r[d];
            if (u = l != null ? l[d] : void 0,
            r.hasOwnProperty(d) && s !== u && (s != null || u != null))
                if (d === "style")
                    if (u) {
                        for (o in u)
                            !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in s)
                            s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}),
                            n[o] = s[o])
                    } else
                        n || (i || (i = []),
                        i.push(d, n)),
                        n = s;
                else
                    d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    u = u ? u.__html : void 0,
                    s != null && u !== s && (i = i || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Mn.hasOwnProperty(d) ? (s != null && d === "onScroll" && O("scroll", e),
                    i || u === s || (i = [])) : (i = i || []).push(d, s))
        }
        n && (i = i || []).push("style", n);
        var d = i;
        (t.updateQueue = d) && (t.flags |= 4)
    }
}
;
Qa = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function yn(e, t) {
    if (!A)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function yf(e, t, n) {
    var r = t.pendingProps;
    switch (po(t),
    t.tag) {
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
        return re(t),
        null;
    case 1:
        return pe(t.type) && $r(),
        re(t),
        null;
    case 3:
        return r = t.stateNode,
        nn(),
        D(fe),
        D(ie),
        So(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (pr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Te !== null && (Ui(Te),
        Te = null))),
        Ti(e, t),
        re(t),
        null;
    case 5:
        ko(t);
        var l = St(Wn.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Wa(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(g(166));
                return re(t),
                null
            }
            if (e = St(Ue.current),
            pr(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Fe] = t,
                r[Bn] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    O("cancel", r),
                    O("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    O("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Sn.length; l++)
                        O(Sn[l], r);
                    break;
                case "source":
                    O("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    O("error", r),
                    O("load", r);
                    break;
                case "details":
                    O("toggle", r);
                    break;
                case "input":
                    Go(r, i),
                    O("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    O("invalid", r);
                    break;
                case "textarea":
                    Xo(r, i),
                    O("invalid", r)
                }
                li(n, i),
                l = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var u = i[o];
                        o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && fr(r.textContent, u, e),
                        l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && fr(r.textContent, u, e),
                        l = ["children", "" + u]) : Mn.hasOwnProperty(o) && u != null && o === "onScroll" && O("scroll", r)
                    }
                switch (n) {
                case "input":
                    lr(r),
                    Yo(r, i, !0);
                    break;
                case "textarea":
                    lr(r),
                    Zo(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Ur)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = xs(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[Fe] = t,
                e[Bn] = r,
                Ha(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = ii(n, r),
                    n) {
                    case "dialog":
                        O("cancel", e),
                        O("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        O("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < Sn.length; l++)
                            O(Sn[l], e);
                        l = r;
                        break;
                    case "source":
                        O("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        O("error", e),
                        O("load", e),
                        l = r;
                        break;
                    case "details":
                        O("toggle", e),
                        l = r;
                        break;
                    case "input":
                        Go(e, r),
                        l = bl(e, r),
                        O("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = V({}, r, {
                            value: void 0
                        }),
                        O("invalid", e);
                        break;
                    case "textarea":
                        Xo(e, r),
                        l = ni(e, r),
                        O("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    li(n, l),
                    u = l;
                    for (i in u)
                        if (u.hasOwnProperty(i)) {
                            var s = u[i];
                            i === "style" ? Ss(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && ws(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Rn(e, s) : typeof s == "number" && Rn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Mn.hasOwnProperty(i) ? s != null && i === "onScroll" && O("scroll", e) : s != null && Ji(e, i, s, o))
                        }
                    switch (n) {
                    case "input":
                        lr(e),
                        Yo(e, r, !1);
                        break;
                    case "textarea":
                        lr(e),
                        Zo(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + dt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Kt(e, !!r.multiple, i, !1) : r.defaultValue != null && Kt(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = Ur)
                    }
                    switch (n) {
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return re(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Qa(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(g(166));
            if (n = St(Wn.current),
            St(Ue.current),
            pr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Fe] = t,
                (i = r.nodeValue !== n) && (e = ye,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        fr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && fr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Fe] = t,
                t.stateNode = r
        }
        return re(t),
        null;
    case 13:
        if (D(U),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (A && ve !== null && t.mode & 1 && !(t.flags & 128))
                aa(),
                en(),
                t.flags |= 98560,
                i = !1;
            else if (i = pr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(g(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(g(317));
                    i[Fe] = t
                } else
                    en(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                re(t),
                i = !1
            } else
                Te !== null && (Ui(Te),
                Te = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || U.current & 1 ? Y === 0 && (Y = 3) : Io())),
        t.updateQueue !== null && (t.flags |= 4),
        re(t),
        null);
    case 4:
        return nn(),
        Ti(e, t),
        e === null && $n(t.stateNode.containerInfo),
        re(t),
        null;
    case 10:
        return yo(t.type._context),
        re(t),
        null;
    case 17:
        return pe(t.type) && $r(),
        re(t),
        null;
    case 19:
        if (D(U),
        i = t.memoizedState,
        i === null)
            return re(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                yn(i, !1);
            else {
                if (Y !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Gr(e),
                        o !== null) {
                            for (t.flags |= 128,
                            yn(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return I(U, U.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && Q() > ln && (t.flags |= 128,
                r = !0,
                yn(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Gr(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    yn(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !A)
                        return re(t),
                        null
                } else
                    2 * Q() - i.renderingStartTime > ln && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    yn(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = Q(),
        t.sibling = null,
        n = U.current,
        I(U, r ? n & 1 | 2 : n & 1),
        t) : (re(t),
        null);
    case 22:
    case 23:
        return Ro(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? he & 1073741824 && (re(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(g(156, t.tag))
}
function gf(e, t) {
    switch (po(t),
    t.tag) {
    case 1:
        return pe(t.type) && $r(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return nn(),
        D(fe),
        D(ie),
        So(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ko(t),
        null;
    case 13:
        if (D(U),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(g(340));
            en()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return D(U),
        null;
    case 4:
        return nn(),
        null;
    case 10:
        return yo(t.type._context),
        null;
    case 22:
    case 23:
        return Ro(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var vr = !1
  , le = !1
  , xf = typeof WeakSet == "function" ? WeakSet : Set
  , S = null;
function Wt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                B(e, t, r)
            }
        else
            n.current = null
}
function Mi(e, t, n) {
    try {
        n()
    } catch (r) {
        B(e, t, r)
    }
}
var Uu = !1;
function wf(e, t) {
    if (hi = Dr,
    e = Zs(),
    co(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , u = -1
                      , s = -1
                      , d = 0
                      , v = 0
                      , h = e
                      , m = null;
                    t: for (; ; ) {
                        for (var x; h !== n || l !== 0 && h.nodeType !== 3 || (u = o + l),
                        h !== i || r !== 0 && h.nodeType !== 3 || (s = o + r),
                        h.nodeType === 3 && (o += h.nodeValue.length),
                        (x = h.firstChild) !== null; )
                            m = h,
                            h = x;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (m === n && ++d === l && (u = o),
                            m === i && ++v === r && (s = o),
                            (x = h.nextSibling) !== null)
                                break;
                            h = m,
                            m = h.parentNode
                        }
                        h = x
                    }
                    n = u === -1 || s === -1 ? null : {
                        start: u,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (vi = {
        focusedElem: e,
        selectionRange: n
    },
    Dr = !1,
    S = t; S !== null; )
        if (t = S,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            S = e;
        else
            for (; S !== null; ) {
                t = S;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps
                                  , F = w.memoizedState
                                  , f = t.stateNode
                                  , c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : ze(t.type, k), F);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(g(163))
                        }
                } catch (y) {
                    B(t, t.return, y)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    S = e;
                    break
                }
                S = t.return
            }
    return w = Uu,
    Uu = !1,
    w
}
function zn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0,
                i !== void 0 && Mi(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}
function dl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ri(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Ka(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Ka(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Fe],
    delete t[Bn],
    delete t[xi],
    delete t[tf],
    delete t[nf])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Ga(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function $u(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ga(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ur));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ii(e, t, n),
        e = e.sibling; e !== null; )
            Ii(e, t, n),
            e = e.sibling
}
function Oi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Oi(e, t, n),
        e = e.sibling; e !== null; )
            Oi(e, t, n),
            e = e.sibling
}
var q = null
  , Le = !1;
function Ze(e, t, n) {
    for (n = n.child; n !== null; )
        Ya(e, t, n),
        n = n.sibling
}
function Ya(e, t, n) {
    if (Ae && typeof Ae.onCommitFiberUnmount == "function")
        try {
            Ae.onCommitFiberUnmount(rl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        le || Wt(n, t);
    case 6:
        var r = q
          , l = Le;
        q = null,
        Ze(e, t, n),
        q = r,
        Le = l,
        q !== null && (Le ? (e = q,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
        break;
    case 18:
        q !== null && (Le ? (e = q,
        n = n.stateNode,
        e.nodeType === 8 ? Fl(e.parentNode, n) : e.nodeType === 1 && Fl(e, n),
        Fn(e)) : Fl(q, n.stateNode));
        break;
    case 4:
        r = q,
        l = Le,
        q = n.stateNode.containerInfo,
        Le = !0,
        Ze(e, t, n),
        q = r,
        Le = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!le && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var i = l
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Mi(n, t, o),
                l = l.next
            } while (l !== r)
        }
        Ze(e, t, n);
        break;
    case 1:
        if (!le && (Wt(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (u) {
                B(n, t, u)
            }
        Ze(e, t, n);
        break;
    case 21:
        Ze(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (le = (r = le) || n.memoizedState !== null,
        Ze(e, t, n),
        le = r) : Ze(e, t, n);
        break;
    default:
        Ze(e, t, n)
    }
}
function Vu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new xf),
        t.forEach(function(r) {
            var l = zf.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function Pe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e
                  , o = t
                  , u = o;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                    case 5:
                        q = u.stateNode,
                        Le = !1;
                        break e;
                    case 3:
                        q = u.stateNode.containerInfo,
                        Le = !0;
                        break e;
                    case 4:
                        q = u.stateNode.containerInfo,
                        Le = !0;
                        break e
                    }
                    u = u.return
                }
                if (q === null)
                    throw Error(g(160));
                Ya(i, o, l),
                q = null,
                Le = !1;
                var s = l.alternate;
                s !== null && (s.return = null),
                l.return = null
            } catch (d) {
                B(l, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Xa(t, e),
            t = t.sibling
}
function Xa(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Pe(t, e),
        Oe(e),
        r & 4) {
            try {
                zn(3, e, e.return),
                dl(3, e)
            } catch (k) {
                B(e, e.return, k)
            }
            try {
                zn(5, e, e.return)
            } catch (k) {
                B(e, e.return, k)
            }
        }
        break;
    case 1:
        Pe(t, e),
        Oe(e),
        r & 512 && n !== null && Wt(n, n.return);
        break;
    case 5:
        if (Pe(t, e),
        Oe(e),
        r & 512 && n !== null && Wt(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                Rn(l, "")
            } catch (k) {
                B(e, e.return, k)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , u = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    u === "input" && i.type === "radio" && i.name != null && ys(l, i),
                    ii(u, o);
                    var d = ii(u, i);
                    for (o = 0; o < s.length; o += 2) {
                        var v = s[o]
                          , h = s[o + 1];
                        v === "style" ? Ss(l, h) : v === "dangerouslySetInnerHTML" ? ws(l, h) : v === "children" ? Rn(l, h) : Ji(l, v, h, d)
                    }
                    switch (u) {
                    case "input":
                        ei(l, i);
                        break;
                    case "textarea":
                        gs(l, i);
                        break;
                    case "select":
                        var m = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!i.multiple;
                        var x = i.value;
                        x != null ? Kt(l, !!i.multiple, x, !1) : m !== !!i.multiple && (i.defaultValue != null ? Kt(l, !!i.multiple, i.defaultValue, !0) : Kt(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Bn] = i
                } catch (k) {
                    B(e, e.return, k)
                }
        }
        break;
    case 6:
        if (Pe(t, e),
        Oe(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(g(162));
            l = e.stateNode,
            i = e.memoizedProps;
            try {
                l.nodeValue = i
            } catch (k) {
                B(e, e.return, k)
            }
        }
        break;
    case 3:
        if (Pe(t, e),
        Oe(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Fn(t.containerInfo)
            } catch (k) {
                B(e, e.return, k)
            }
        break;
    case 4:
        Pe(t, e),
        Oe(e);
        break;
    case 13:
        Pe(t, e),
        Oe(e),
        l = e.child,
        l.flags & 8192 && (i = l.memoizedState !== null,
        l.stateNode.isHidden = i,
        !i || l.alternate !== null && l.alternate.memoizedState !== null || (To = Q())),
        r & 4 && Vu(e);
        break;
    case 22:
        if (v = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (le = (d = le) || v,
        Pe(t, e),
        le = d) : Pe(t, e),
        Oe(e),
        r & 8192) {
            if (d = e.memoizedState !== null,
            (e.stateNode.isHidden = d) && !v && e.mode & 1)
                for (S = e,
                v = e.child; v !== null; ) {
                    for (h = S = v; S !== null; ) {
                        switch (m = S,
                        x = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            zn(4, m, m.return);
                            break;
                        case 1:
                            Wt(m, m.return);
                            var w = m.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (k) {
                                    B(r, n, k)
                                }
                            }
                            break;
                        case 5:
                            Wt(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                Hu(h);
                                continue
                            }
                        }
                        x !== null ? (x.return = m,
                        S = x) : Hu(h)
                    }
                    v = v.sibling
                }
            e: for (v = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (v === null) {
                        v = h;
                        try {
                            l = h.stateNode,
                            d ? (i = l.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = h.stateNode,
                            s = h.memoizedProps.style,
                            o = s != null && s.hasOwnProperty("display") ? s.display : null,
                            u.style.display = ks("display", o))
                        } catch (k) {
                            B(e, e.return, k)
                        }
                    }
                } else if (h.tag === 6) {
                    if (v === null)
                        try {
                            h.stateNode.nodeValue = d ? "" : h.memoizedProps
                        } catch (k) {
                            B(e, e.return, k)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    v === h && (v = null),
                    h = h.return
                }
                v === h && (v = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        Pe(t, e),
        Oe(e),
        r & 4 && Vu(e);
        break;
    case 21:
        break;
    default:
        Pe(t, e),
        Oe(e)
    }
}
function Oe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Ga(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(g(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (Rn(l, ""),
                r.flags &= -33);
                var i = $u(e);
                Oi(e, i, l);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , u = $u(e);
                Ii(e, u, o);
                break;
            default:
                throw Error(g(161))
            }
        } catch (s) {
            B(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function kf(e, t, n) {
    S = e,
    Za(e)
}
function Za(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null; ) {
        var l = S
          , i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || vr;
            if (!o) {
                var u = l.alternate
                  , s = u !== null && u.memoizedState !== null || le;
                u = vr;
                var d = le;
                if (vr = o,
                (le = s) && !d)
                    for (S = l; S !== null; )
                        o = S,
                        s = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Wu(l) : s !== null ? (s.return = o,
                        S = s) : Wu(l);
                for (; i !== null; )
                    S = i,
                    Za(i),
                    i = i.sibling;
                S = l,
                vr = u,
                le = d
            }
            Bu(e)
        } else
            l.subtreeFlags & 8772 && i !== null ? (i.return = l,
            S = i) : Bu(e)
    }
}
function Bu(e) {
    for (; S !== null; ) {
        var t = S;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || dl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : ze(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Cu(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Cu(t, o, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
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
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var v = d.memoizedState;
                                if (v !== null) {
                                    var h = v.dehydrated;
                                    h !== null && Fn(h)
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
                        throw Error(g(163))
                    }
                le || t.flags & 512 && Ri(t)
            } catch (m) {
                B(t, t.return, m)
            }
        }
        if (t === e) {
            S = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            S = n;
            break
        }
        S = t.return
    }
}
function Hu(e) {
    for (; S !== null; ) {
        var t = S;
        if (t === e) {
            S = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            S = n;
            break
        }
        S = t.return
    }
}
function Wu(e) {
    for (; S !== null; ) {
        var t = S;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    dl(4, t)
                } catch (s) {
                    B(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        B(t, l, s)
                    }
                }
                var i = t.return;
                try {
                    Ri(t)
                } catch (s) {
                    B(t, i, s)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Ri(t)
                } catch (s) {
                    B(t, o, s)
                }
            }
        } catch (s) {
            B(t, t.return, s)
        }
        if (t === e) {
            S = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return,
            S = u;
            break
        }
        S = t.return
    }
}
var Sf = Math.ceil
  , Zr = Xe.ReactCurrentDispatcher
  , zo = Xe.ReactCurrentOwner
  , je = Xe.ReactCurrentBatchConfig
  , M = 0
  , J = null
  , K = null
  , b = 0
  , he = 0
  , Qt = mt(0)
  , Y = 0
  , Yn = null
  , zt = 0
  , fl = 0
  , Lo = 0
  , Ln = null
  , ce = null
  , To = 0
  , ln = 1 / 0
  , $e = null
  , Jr = !1
  , Di = null
  , st = null
  , yr = !1
  , nt = null
  , qr = 0
  , Tn = 0
  , Fi = null
  , Pr = -1
  , zr = 0;
function ue() {
    return M & 6 ? Q() : Pr !== -1 ? Pr : Pr = Q()
}
function at(e) {
    return e.mode & 1 ? M & 2 && b !== 0 ? b & -b : lf.transition !== null ? (zr === 0 && (zr = Is()),
    zr) : (e = R,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Vs(e.type)),
    e) : 1
}
function Re(e, t, n, r) {
    if (50 < Tn)
        throw Tn = 0,
        Fi = null,
        Error(g(185));
    Zn(e, n, r),
    (!(M & 2) || e !== J) && (e === J && (!(M & 2) && (fl |= n),
    Y === 4 && et(e, b)),
    me(e, r),
    n === 1 && M === 0 && !(t.mode & 1) && (ln = Q() + 500,
    sl && ht()))
}
function me(e, t) {
    var n = e.callbackNode;
    ld(e, t);
    var r = Or(e, e === J ? b : 0);
    if (r === 0)
        n !== null && bo(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && bo(n),
        t === 1)
            e.tag === 0 ? rf(Qu.bind(null, e)) : oa(Qu.bind(null, e)),
            bd(function() {
                !(M & 6) && ht()
            }),
            n = null;
        else {
            switch (Os(r)) {
            case 1:
                n = no;
                break;
            case 4:
                n = Ms;
                break;
            case 16:
                n = Ir;
                break;
            case 536870912:
                n = Rs;
                break;
            default:
                n = Ir
            }
            n = lc(n, Ja.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Ja(e, t) {
    if (Pr = -1,
    zr = 0,
    M & 6)
        throw Error(g(327));
    var n = e.callbackNode;
    if (Jt() && e.callbackNode !== n)
        return null;
    var r = Or(e, e === J ? b : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = br(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var i = ba();
        (J !== e || b !== t) && ($e = null,
        ln = Q() + 500,
        jt(e, t));
        do
            try {
                Ef();
                break
            } catch (u) {
                qa(e, u)
            }
        while (!0);
        vo(),
        Zr.current = i,
        M = l,
        K !== null ? t = 0 : (J = null,
        b = 0,
        t = Y)
    }
    if (t !== 0) {
        if (t === 2 && (l = ci(e),
        l !== 0 && (r = l,
        t = Ai(e, l))),
        t === 1)
            throw n = Yn,
            jt(e, 0),
            et(e, r),
            me(e, Q()),
            n;
        if (t === 6)
            et(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !Nf(l) && (t = br(e, r),
            t === 2 && (i = ci(e),
            i !== 0 && (r = i,
            t = Ai(e, i))),
            t === 1))
                throw n = Yn,
                jt(e, 0),
                et(e, r),
                me(e, Q()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(g(345));
            case 2:
                xt(e, ce, $e);
                break;
            case 3:
                if (et(e, r),
                (r & 130023424) === r && (t = To + 500 - Q(),
                10 < t)) {
                    if (Or(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        ue(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = gi(xt.bind(null, e, ce, $e), t);
                    break
                }
                xt(e, ce, $e);
                break;
            case 4:
                if (et(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var o = 31 - Me(r);
                    i = 1 << o,
                    o = t[o],
                    o > l && (l = o),
                    r &= ~i
                }
                if (r = l,
                r = Q() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Sf(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = gi(xt.bind(null, e, ce, $e), r);
                    break
                }
                xt(e, ce, $e);
                break;
            case 5:
                xt(e, ce, $e);
                break;
            default:
                throw Error(g(329))
            }
        }
    }
    return me(e, Q()),
    e.callbackNode === n ? Ja.bind(null, e) : null
}
function Ai(e, t) {
    var n = Ln;
    return e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
    e = br(e, t),
    e !== 2 && (t = ce,
    ce = n,
    t !== null && Ui(t)),
    e
}
function Ui(e) {
    ce === null ? ce = e : ce.push.apply(ce, e)
}
function Nf(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Ie(i(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function et(e, t) {
    for (t &= ~Lo,
    t &= ~fl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Me(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Qu(e) {
    if (M & 6)
        throw Error(g(327));
    Jt();
    var t = Or(e, 0);
    if (!(t & 1))
        return me(e, Q()),
        null;
    var n = br(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ci(e);
        r !== 0 && (t = r,
        n = Ai(e, r))
    }
    if (n === 1)
        throw n = Yn,
        jt(e, 0),
        et(e, t),
        me(e, Q()),
        n;
    if (n === 6)
        throw Error(g(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    xt(e, ce, $e),
    me(e, Q()),
    null
}
function Mo(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n,
        M === 0 && (ln = Q() + 500,
        sl && ht())
    }
}
function Lt(e) {
    nt !== null && nt.tag === 0 && !(M & 6) && Jt();
    var t = M;
    M |= 1;
    var n = je.transition
      , r = R;
    try {
        if (je.transition = null,
        R = 1,
        e)
            return e()
    } finally {
        R = r,
        je.transition = n,
        M = t,
        !(M & 6) && ht()
    }
}
function Ro() {
    he = Qt.current,
    D(Qt)
}
function jt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    qd(n)),
    K !== null)
        for (n = K.return; n !== null; ) {
            var r = n;
            switch (po(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && $r();
                break;
            case 3:
                nn(),
                D(fe),
                D(ie),
                So();
                break;
            case 5:
                ko(r);
                break;
            case 4:
                nn();
                break;
            case 13:
                D(U);
                break;
            case 19:
                D(U);
                break;
            case 10:
                yo(r.type._context);
                break;
            case 22:
            case 23:
                Ro()
            }
            n = n.return
        }
    if (J = e,
    K = e = ct(e.current, null),
    b = he = t,
    Y = 0,
    Yn = null,
    Lo = fl = zt = 0,
    ce = Ln = null,
    kt !== null) {
        for (t = 0; t < kt.length; t++)
            if (n = kt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l,
                    r.next = o
                }
                n.pending = r
            }
        kt = null
    }
    return e
}
function qa(e, t) {
    do {
        var n = K;
        try {
            if (vo(),
            Er.current = Xr,
            Yr) {
                for (var r = $.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                Yr = !1
            }
            if (Pt = 0,
            Z = G = $ = null,
            Pn = !1,
            Qn = 0,
            zo.current = null,
            n === null || n.return === null) {
                Y = 1,
                Yn = t,
                K = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , u = n
                  , s = t;
                if (t = b,
                u.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var d = s
                      , v = u
                      , h = v.tag;
                    if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = v.alternate;
                        m ? (v.updateQueue = m.updateQueue,
                        v.memoizedState = m.memoizedState,
                        v.lanes = m.lanes) : (v.updateQueue = null,
                        v.memoizedState = null)
                    }
                    var x = Mu(o);
                    if (x !== null) {
                        x.flags &= -257,
                        Ru(x, o, u, i, t),
                        x.mode & 1 && Tu(i, d, t),
                        t = x,
                        s = d;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(s),
                            t.updateQueue = k
                        } else
                            w.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Tu(i, d, t),
                            Io();
                            break e
                        }
                        s = Error(g(426))
                    }
                } else if (A && u.mode & 1) {
                    var F = Mu(o);
                    if (F !== null) {
                        !(F.flags & 65536) && (F.flags |= 256),
                        Ru(F, o, u, i, t),
                        mo(rn(s, u));
                        break e
                    }
                }
                i = s = rn(s, u),
                Y !== 4 && (Y = 2),
                Ln === null ? Ln = [i] : Ln.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var f = Oa(i, s, t);
                        Eu(i, f);
                        break e;
                    case 1:
                        u = s;
                        var c = i.type
                          , p = i.stateNode;
                        if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (st === null || !st.has(p)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var y = Da(i, u, t);
                            Eu(i, y);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            tc(n)
        } catch (N) {
            t = N,
            K === n && n !== null && (K = n = n.return);
            continue
        }
        break
    } while (!0)
}
function ba() {
    var e = Zr.current;
    return Zr.current = Xr,
    e === null ? Xr : e
}
function Io() {
    (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    J === null || !(zt & 268435455) && !(fl & 268435455) || et(J, b)
}
function br(e, t) {
    var n = M;
    M |= 2;
    var r = ba();
    (J !== e || b !== t) && ($e = null,
    jt(e, t));
    do
        try {
            jf();
            break
        } catch (l) {
            qa(e, l)
        }
    while (!0);
    if (vo(),
    M = n,
    Zr.current = r,
    K !== null)
        throw Error(g(261));
    return J = null,
    b = 0,
    Y
}
function jf() {
    for (; K !== null; )
        ec(K)
}
function Ef() {
    for (; K !== null && !Xc(); )
        ec(K)
}
function ec(e) {
    var t = rc(e.alternate, e, he);
    e.memoizedProps = e.pendingProps,
    t === null ? tc(e) : K = t,
    zo.current = null
}
function tc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = gf(n, t),
            n !== null) {
                n.flags &= 32767,
                K = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Y = 6,
                K = null;
                return
            }
        } else if (n = yf(n, t, he),
        n !== null) {
            K = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            K = t;
            return
        }
        K = t = e
    } while (t !== null);
    Y === 0 && (Y = 5)
}
function xt(e, t, n) {
    var r = R
      , l = je.transition;
    try {
        je.transition = null,
        R = 1,
        Cf(e, t, n, r)
    } finally {
        je.transition = l,
        R = r
    }
    return null
}
function Cf(e, t, n, r) {
    do
        Jt();
    while (nt !== null);
    if (M & 6)
        throw Error(g(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(g(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (id(e, i),
    e === J && (K = J = null,
    b = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || yr || (yr = !0,
    lc(Ir, function() {
        return Jt(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = je.transition,
        je.transition = null;
        var o = R;
        R = 1;
        var u = M;
        M |= 4,
        zo.current = null,
        wf(e, n),
        Xa(n, e),
        Qd(vi),
        Dr = !!hi,
        vi = hi = null,
        e.current = n,
        kf(n),
        Zc(),
        M = u,
        R = o,
        je.transition = i
    } else
        e.current = n;
    if (yr && (yr = !1,
    nt = e,
    qr = l),
    i = e.pendingLanes,
    i === 0 && (st = null),
    bc(n.stateNode),
    me(e, Q()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (Jr)
        throw Jr = !1,
        e = Di,
        Di = null,
        e;
    return qr & 1 && e.tag !== 0 && Jt(),
    i = e.pendingLanes,
    i & 1 ? e === Fi ? Tn++ : (Tn = 0,
    Fi = e) : Tn = 0,
    ht(),
    null
}
function Jt() {
    if (nt !== null) {
        var e = Os(qr)
          , t = je.transition
          , n = R;
        try {
            if (je.transition = null,
            R = 16 > e ? 16 : e,
            nt === null)
                var r = !1;
            else {
                if (e = nt,
                nt = null,
                qr = 0,
                M & 6)
                    throw Error(g(331));
                var l = M;
                for (M |= 4,
                S = e.current; S !== null; ) {
                    var i = S
                      , o = i.child;
                    if (S.flags & 16) {
                        var u = i.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var d = u[s];
                                for (S = d; S !== null; ) {
                                    var v = S;
                                    switch (v.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zn(8, v, i)
                                    }
                                    var h = v.child;
                                    if (h !== null)
                                        h.return = v,
                                        S = h;
                                    else
                                        for (; S !== null; ) {
                                            v = S;
                                            var m = v.sibling
                                              , x = v.return;
                                            if (Ka(v),
                                            v === d) {
                                                S = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = x,
                                                S = m;
                                                break
                                            }
                                            S = x
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var F = k.sibling;
                                        k.sibling = null,
                                        k = F
                                    } while (k !== null)
                                }
                            }
                            S = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        S = o;
                    else
                        e: for (; S !== null; ) {
                            if (i = S,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    zn(9, i, i.return)
                                }
                            var f = i.sibling;
                            if (f !== null) {
                                f.return = i.return,
                                S = f;
                                break e
                            }
                            S = i.return
                        }
                }
                var c = e.current;
                for (S = c; S !== null; ) {
                    o = S;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null)
                        p.return = o,
                        S = p;
                    else
                        e: for (o = c; S !== null; ) {
                            if (u = S,
                            u.flags & 2048)
                                try {
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        dl(9, u)
                                    }
                                } catch (N) {
                                    B(u, u.return, N)
                                }
                            if (u === o) {
                                S = null;
                                break e
                            }
                            var y = u.sibling;
                            if (y !== null) {
                                y.return = u.return,
                                S = y;
                                break e
                            }
                            S = u.return
                        }
                }
                if (M = l,
                ht(),
                Ae && typeof Ae.onPostCommitFiberRoot == "function")
                    try {
                        Ae.onPostCommitFiberRoot(rl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            R = n,
            je.transition = t
        }
    }
    return !1
}
function Ku(e, t, n) {
    t = rn(n, t),
    t = Oa(e, t, 1),
    e = ut(e, t, 1),
    t = ue(),
    e !== null && (Zn(e, 1, t),
    me(e, t))
}
function B(e, t, n) {
    if (e.tag === 3)
        Ku(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ku(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (st === null || !st.has(r))) {
                    e = rn(n, e),
                    e = Da(t, e, 1),
                    t = ut(t, e, 1),
                    e = ue(),
                    t !== null && (Zn(t, 1, e),
                    me(t, e));
                    break
                }
            }
            t = t.return
        }
}
function _f(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ue(),
    e.pingedLanes |= e.suspendedLanes & n,
    J === e && (b & n) === n && (Y === 4 || Y === 3 && (b & 130023424) === b && 500 > Q() - To ? jt(e, 0) : Lo |= n),
    me(e, t)
}
function nc(e, t) {
    t === 0 && (e.mode & 1 ? (t = ur,
    ur <<= 1,
    !(ur & 130023424) && (ur = 4194304)) : t = 1);
    var n = ue();
    e = Ge(e, t),
    e !== null && (Zn(e, t, n),
    me(e, n))
}
function Pf(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    nc(e, n)
}
function zf(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(g(314))
    }
    r !== null && r.delete(t),
    nc(e, n)
}
var rc;
rc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || fe.current)
            de = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return de = !1,
                vf(e, t, n);
            de = !!(e.flags & 131072)
        }
    else
        de = !1,
        A && t.flags & 1048576 && ua(t, Hr, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        _r(e, t),
        e = t.pendingProps;
        var l = bt(t, ie.current);
        Zt(t, n),
        l = jo(null, t, r, e, l, n);
        var i = Eo();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        pe(r) ? (i = !0,
        Vr(t)) : i = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        xo(t),
        l.updater = cl,
        t.stateNode = l,
        l._reactInternals = t,
        Ei(t, r, e, n),
        t = Pi(null, t, r, !0, i, n)) : (t.tag = 0,
        A && i && fo(t),
        oe(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (_r(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = Tf(r),
            e = ze(r, e),
            l) {
            case 0:
                t = _i(null, t, r, e, n);
                break e;
            case 1:
                t = Du(null, t, r, e, n);
                break e;
            case 11:
                t = Iu(null, t, r, e, n);
                break e;
            case 14:
                t = Ou(null, t, r, ze(r.type, e), n);
                break e
            }
            throw Error(g(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ze(r, l),
        _i(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ze(r, l),
        Du(e, t, r, l, n);
    case 3:
        e: {
            if ($a(t),
            e === null)
                throw Error(g(387));
            r = t.pendingProps,
            i = t.memoizedState,
            l = i.element,
            pa(e, t),
            Kr(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    l = rn(Error(g(423)), t),
                    t = Fu(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = rn(Error(g(424)), t),
                    t = Fu(e, t, r, n, l);
                    break e
                } else
                    for (ve = ot(t.stateNode.containerInfo.firstChild),
                    ye = t,
                    A = !0,
                    Te = null,
                    n = da(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (en(),
                r === l) {
                    t = Ye(e, t, n);
                    break e
                }
                oe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return ma(t),
        e === null && Si(t),
        r = t.type,
        l = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = l.children,
        yi(r, l) ? o = null : i !== null && yi(r, i) && (t.flags |= 32),
        Ua(e, t),
        oe(e, t, o, n),
        t.child;
    case 6:
        return e === null && Si(t),
        null;
    case 13:
        return Va(e, t, n);
    case 4:
        return wo(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = tn(t, null, r, n) : oe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ze(r, l),
        Iu(e, t, r, l, n);
    case 7:
        return oe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return oe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return oe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            i = t.memoizedProps,
            o = l.value,
            I(Wr, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (Ie(i.value, o)) {
                    if (i.children === l.children && !fe.current) {
                        t = Ye(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var u = i.dependencies;
                        if (u !== null) {
                            o = i.child;
                            for (var s = u.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (i.tag === 1) {
                                        s = We(-1, n & -n),
                                        s.tag = 2;
                                        var d = i.updateQueue;
                                        if (d !== null) {
                                            d = d.shared;
                                            var v = d.pending;
                                            v === null ? s.next = s : (s.next = v.next,
                                            v.next = s),
                                            d.pending = s
                                        }
                                    }
                                    i.lanes |= n,
                                    s = i.alternate,
                                    s !== null && (s.lanes |= n),
                                    Ni(i.return, n, t),
                                    u.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(g(341));
                            o.lanes |= n,
                            u = o.alternate,
                            u !== null && (u.lanes |= n),
                            Ni(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            oe(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        Zt(t, n),
        l = Ee(l),
        r = r(l),
        t.flags |= 1,
        oe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = ze(r, t.pendingProps),
        l = ze(r.type, l),
        Ou(e, t, r, l, n);
    case 15:
        return Fa(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ze(r, l),
        _r(e, t),
        t.tag = 1,
        pe(r) ? (e = !0,
        Vr(t)) : e = !1,
        Zt(t, n),
        Ia(t, r, l),
        Ei(t, r, l, n),
        Pi(null, t, r, !0, e, n);
    case 19:
        return Ba(e, t, n);
    case 22:
        return Aa(e, t, n)
    }
    throw Error(g(156, t.tag))
}
;
function lc(e, t) {
    return Ts(e, t)
}
function Lf(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ne(e, t, n, r) {
    return new Lf(e,t,n,r)
}
function Oo(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Tf(e) {
    if (typeof e == "function")
        return Oo(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === bi)
            return 11;
        if (e === eo)
            return 14
    }
    return 2
}
function ct(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ne(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Lr(e, t, n, r, l, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Oo(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Ot:
            return Et(n.children, l, i, t);
        case qi:
            o = 8,
            l |= 8;
            break;
        case Xl:
            return e = Ne(12, n, t, l | 2),
            e.elementType = Xl,
            e.lanes = i,
            e;
        case Zl:
            return e = Ne(13, n, t, l),
            e.elementType = Zl,
            e.lanes = i,
            e;
        case Jl:
            return e = Ne(19, n, t, l),
            e.elementType = Jl,
            e.lanes = i,
            e;
        case ms:
            return pl(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case fs:
                    o = 10;
                    break e;
                case ps:
                    o = 9;
                    break e;
                case bi:
                    o = 11;
                    break e;
                case eo:
                    o = 14;
                    break e;
                case Je:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(g(130, e == null ? e : typeof e, ""))
        }
    return t = Ne(o, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Et(e, t, n, r) {
    return e = Ne(7, e, r, t),
    e.lanes = n,
    e
}
function pl(e, t, n, r) {
    return e = Ne(22, e, r, t),
    e.elementType = ms,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ql(e, t, n) {
    return e = Ne(6, e, null, t),
    e.lanes = n,
    e
}
function Kl(e, t, n) {
    return t = Ne(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Mf(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Cl(0),
    this.expirationTimes = Cl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Cl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function Do(e, t, n, r, l, i, o, u, s) {
    return e = new Mf(e,t,n,u,s),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = Ne(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    xo(i),
    e
}
function Rf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: It,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function ic(e) {
    if (!e)
        return ft;
    e = e._reactInternals;
    e: {
        if (Mt(e) !== e || e.tag !== 1)
            throw Error(g(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (pe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(g(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (pe(n))
            return ia(e, n, t)
    }
    return t
}
function oc(e, t, n, r, l, i, o, u, s) {
    return e = Do(n, r, !0, e, l, i, o, u, s),
    e.context = ic(null),
    n = e.current,
    r = ue(),
    l = at(n),
    i = We(r, l),
    i.callback = t ?? null,
    ut(n, i, l),
    e.current.lanes = l,
    Zn(e, l, r),
    me(e, r),
    e
}
function ml(e, t, n, r) {
    var l = t.current
      , i = ue()
      , o = at(l);
    return n = ic(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = We(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = ut(l, t, o),
    e !== null && (Re(e, l, o, i),
    jr(e, l, o)),
    o
}
function el(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Gu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Fo(e, t) {
    Gu(e, t),
    (e = e.alternate) && Gu(e, t)
}
function If() {
    return null
}
var uc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ao(e) {
    this._internalRoot = e
}
hl.prototype.render = Ao.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(g(409));
    ml(e, t, null, null)
}
;
hl.prototype.unmount = Ao.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Lt(function() {
            ml(null, e, null, null)
        }),
        t[Ke] = null
    }
}
;
function hl(e) {
    this._internalRoot = e
}
hl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = As();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++)
            ;
        be.splice(n, 0, e),
        n === 0 && $s(e)
    }
}
;
function Uo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function vl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Yu() {}
function Of(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var d = el(o);
                i.call(d)
            }
        }
        var o = oc(t, r, e, 0, null, !1, !1, "", Yu);
        return e._reactRootContainer = o,
        e[Ke] = o.current,
        $n(e.nodeType === 8 ? e.parentNode : e),
        Lt(),
        o
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var d = el(s);
            u.call(d)
        }
    }
    var s = Do(e, 0, !1, null, null, !1, !1, "", Yu);
    return e._reactRootContainer = s,
    e[Ke] = s.current,
    $n(e.nodeType === 8 ? e.parentNode : e),
    Lt(function() {
        ml(t, s, n, r)
    }),
    s
}
function yl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var s = el(o);
                u.call(s)
            }
        }
        ml(t, o, e, l)
    } else
        o = Of(n, t, e, l, r);
    return el(o)
}
Ds = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = kn(t.pendingLanes);
            n !== 0 && (ro(t, n | 1),
            me(t, Q()),
            !(M & 6) && (ln = Q() + 500,
            ht()))
        }
        break;
    case 13:
        Lt(function() {
            var r = Ge(e, 1);
            if (r !== null) {
                var l = ue();
                Re(r, e, 1, l)
            }
        }),
        Fo(e, 1)
    }
}
;
lo = function(e) {
    if (e.tag === 13) {
        var t = Ge(e, 134217728);
        if (t !== null) {
            var n = ue();
            Re(t, e, 134217728, n)
        }
        Fo(e, 134217728)
    }
}
;
Fs = function(e) {
    if (e.tag === 13) {
        var t = at(e)
          , n = Ge(e, t);
        if (n !== null) {
            var r = ue();
            Re(n, e, t, r)
        }
        Fo(e, t)
    }
}
;
As = function() {
    return R
}
;
Us = function(e, t) {
    var n = R;
    try {
        return R = e,
        t()
    } finally {
        R = n
    }
}
;
ui = function(e, t, n) {
    switch (t) {
    case "input":
        if (ei(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = ul(r);
                    if (!l)
                        throw Error(g(90));
                    vs(r),
                    ei(r, l)
                }
            }
        }
        break;
    case "textarea":
        gs(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Kt(e, !!n.multiple, t, !1)
    }
}
;
Es = Mo;
Cs = Lt;
var Df = {
    usingClientEntryPoint: !1,
    Events: [qn, Ut, ul, Ns, js, Mo]
}
  , gn = {
    findFiberByHostInstance: wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Ff = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = zs(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || If,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gr.isDisabled && gr.supportsFiber)
        try {
            rl = gr.inject(Ff),
            Ae = gr
        } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Df;
xe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Uo(t))
        throw Error(g(200));
    return Rf(e, t, null, n)
}
;
xe.createRoot = function(e, t) {
    if (!Uo(e))
        throw Error(g(299));
    var n = !1
      , r = ""
      , l = uc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = Do(e, 1, !1, null, null, n, !1, r, l),
    e[Ke] = t.current,
    $n(e.nodeType === 8 ? e.parentNode : e),
    new Ao(t)
}
;
xe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","),
        Error(g(268, e)));
    return e = zs(t),
    e = e === null ? null : e.stateNode,
    e
}
;
xe.flushSync = function(e) {
    return Lt(e)
}
;
xe.hydrate = function(e, t, n) {
    if (!vl(t))
        throw Error(g(200));
    return yl(null, e, t, !0, n)
}
;
xe.hydrateRoot = function(e, t, n) {
    if (!Uo(e))
        throw Error(g(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , i = ""
      , o = uc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = oc(t, null, e, 1, n ?? null, l, !1, i, o),
    e[Ke] = t.current,
    $n(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new hl(t)
}
;
xe.render = function(e, t, n) {
    if (!vl(t))
        throw Error(g(200));
    return yl(null, e, t, !1, n)
}
;
xe.unmountComponentAtNode = function(e) {
    if (!vl(e))
        throw Error(g(40));
    return e._reactRootContainer ? (Lt(function() {
        yl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ke] = null
        })
    }),
    !0) : !1
}
;
xe.unstable_batchedUpdates = Mo;
xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!vl(n))
        throw Error(g(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(g(38));
    return yl(e, t, n, !1, r)
}
;
xe.version = "18.3.1-next-f1338f8080-20240426";
function sc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc)
        } catch (e) {
            console.error(e)
        }
}
sc(),
ss.exports = xe;
var Af = ss.exports, ac, Xu = Af;
ac = Xu.createRoot,
Xu.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Uf = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $f = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , te = (e, t) => {
    const n = Nt.forwardRef( ({color: r="currentColor", size: l=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: u="", children: s, ...d}, v) => Nt.createElement("svg", {
        ref: v,
        ...Uf,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${$f(e)}`, u].join(" "),
        ...d
    }, [...t.map( ([h,m]) => Nt.createElement(h, m)), ...Array.isArray(s) ? s : [s]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = te("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = te("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $i = te("Blocks", [["rect", {
    width: "7",
    height: "7",
    x: "14",
    y: "3",
    rx: "1",
    key: "6d4xhi"
}], ["path", {
    d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
    key: "1fpvtg"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vi = te("Brain", [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zu = te("Code2", [["path", {
    d: "m18 16 4-4-4-4",
    key: "1inbqp"
}], ["path", {
    d: "m6 8-4 4 4 4",
    key: "15zrgr"
}], ["path", {
    d: "m14.5 4-5 16",
    key: "e7oirm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = te("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hf = te("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bi = te("Github", [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wf = te("GraduationCap", [["path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
    key: "j76jl0"
}], ["path", {
    d: "M22 10v6",
    key: "1lu8f3"
}], ["path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
    key: "1r8lef"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hi = te("LineChart", [["path", {
    d: "M3 3v18h18",
    key: "1s2lah"
}], ["path", {
    d: "m19 9-5 5-4-4-3 3",
    key: "2osh9i"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wi = te("Linkedin", [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qf = te("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kf = te("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gf = te("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yf = te("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = te("Trophy", [["path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
    key: "17hqa7"
}], ["path", {
    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
    key: "lmptdp"
}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
    key: "1nw9bq"
}], ["path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
    key: "1np0yb"
}], ["path", {
    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
    key: "u46fv3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xf = te("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
function Zf() {
    const [e,t] = Nt.useState(!1);
    return a.jsx("header", {
        className: "fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm",
        children: a.jsxs("div", {
            className: "container mx-auto px-4 py-4 flex justify-between items-center",
            children: [a.jsx("a", {
                href: "#",
                className: "text-2xl font-bold text-gray-800",
                children: "Vaidik Saxena"
            }), a.jsx("button", {
                className: "md:hidden",
                onClick: () => t(!e),
                children: e ? a.jsx(Xf, {
                    size: 24
                }) : a.jsx(Kf, {
                    size: 24
                })
            }), a.jsxs("nav", {
                className: "hidden md:flex items-center gap-8",
                children: [a.jsx("a", {
                    href: "#about",
                    className: "text-gray-600 hover:text-gray-900",
                    children: "About"
                }), a.jsx("a", {
                    href: "#skills",
                    className: "text-gray-600 hover:text-gray-900",
                    children: "Skills"
                }), a.jsx("a", {
                    href: "#projects",
                    className: "text-gray-600 hover:text-gray-900",
                    children: "Projects"
                }), a.jsx("a", {
                    href: "#cp",
                    className: "text-gray-600 hover:text-gray-900",
                    children: "CP Profile"
                }), a.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [a.jsx("a", {
                        href: "https://github.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: a.jsx(Bi, {
                            className: "w-5 h-5 text-gray-600 hover:text-gray-900"
                        })
                    }), a.jsx("a", {
                        href: "https://linkedin.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: a.jsx(Wi, {
                            className: "w-5 h-5 text-gray-600 hover:text-gray-900"
                        })
                    }), a.jsx("a", {
                        href: "https://leetcode.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: a.jsx(Zu, {
                            className: "w-5 h-5 text-gray-600 hover:text-gray-900"
                        })
                    })]
                })]
            }), e && a.jsx("nav", {
                className: "absolute top-full left-0 right-0 bg-white shadow-lg md:hidden",
                children: a.jsxs("div", {
                    className: "flex flex-col p-4 gap-4",
                    children: [a.jsx("a", {
                        href: "#about",
                        className: "text-gray-600 hover:text-gray-900",
                        children: "About"
                    }), a.jsx("a", {
                        href: "#skills",
                        className: "text-gray-600 hover:text-gray-900",
                        children: "Skills"
                    }), a.jsx("a", {
                        href: "#projects",
                        className: "text-gray-600 hover:text-gray-900",
                        children: "Projects"
                    }), a.jsx("a", {
                        href: "#cp",
                        className: "text-gray-600 hover:text-gray-900",
                        children: "CP Profile"
                    }), a.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [a.jsx("a", {
                            href: "https://github.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: a.jsx(Bi, {
                                className: "w-5 h-5 text-gray-600 hover:text-gray-900"
                            })
                        }), a.jsx("a", {
                            href: "https://linkedin.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: a.jsx(Wi, {
                                className: "w-5 h-5 text-gray-600 hover:text-gray-900"
                            })
                        }), a.jsx("a", {
                            href: "https://leetcode.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: a.jsx(Zu, {
                                className: "w-5 h-5 text-gray-600 hover:text-gray-900"
                            })
                        })]
                    })]
                })
            })]
        })
    })
}
function Jf() {
    return a.jsx("section", {
        className: "pt-24 pb-12 px-4 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50",
        children: a.jsxs("div", {
            className: "container mx-auto grid md:grid-cols-2 gap-12 items-center",
            children: [a.jsxs("div", {
                className: "relative z-10",
                children: [a.jsx("div", {
                    className: "absolute -top-20 -left-20 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-30"
                }), a.jsx("div", {
                    className: "absolute -bottom-20 -right-20 w-40 h-40 bg-purple-100 rounded-full filter blur-3xl opacity-30"
                }), a.jsxs("h1", {
                    className: "text-6xl font-bold text-gray-900 mb-6",
                    children: ["Hi, I'm", " ", a.jsx("span", {
                        className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600",
                        children: "Vaidik Saxena"
                    })]
                }), a.jsx("p", {
                    className: "text-xl text-gray-600 mb-8 leading-relaxed",
                    children: "A passionate Computer Science student at IIIT Lucknow, exploring the realms of Machine Learning, Algorithmic Trading, and Web Development. INSPIRE Scholar with a drive for innovation and problem-solving."
                }), a.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 mb-8",
                    children: [a.jsxs("a", {
                        href: "#projects",
                        className: "px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                        children: ["View Projects ", a.jsx(Vf, {
                            size: 20
                        })]
                    }), a.jsxs("a", {
                        href: "#contact",
                        className: "px-8 py-4 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-0.5",
                        children: ["Contact Me ", a.jsx(Qf, {
                            size: 20
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "flex items-center gap-6",
                    children: [a.jsx("a", {
                        href: "https://github.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-600 hover:text-gray-900 transition",
                        children: a.jsx(Bi, {
                            size: 24
                        })
                    }), a.jsx("a", {
                        href: "https://linkedin.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-600 hover:text-gray-900 transition",
                        children: a.jsx(Wi, {
                            size: 24
                        })
                    })]
                })]
            }), a.jsxs("div", {
                className: "relative",
                children: [a.jsx("div", {
                    className: "absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-pulse"
                }), a.jsxs("div", {
                    className: "grid grid-cols-6 gap-4",
                    children: [a.jsx("div", {
                        className: "col-span-4",
                        children: a.jsx("img", {
                            src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
                            alt: "AI and Machine Learning",
                            className: "rounded-2xl shadow-xl relative z-10 transform hover:scale-105 transition duration-500 w-full h-48 object-cover"
                        })
                    }), a.jsx("div", {
                        className: "col-span-3 mt-4",
                        children: a.jsx("img", {
                            src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
                            alt: "Trading Analytics",
                            className: "rounded-2xl shadow-xl relative z-10 transform hover:scale-105 transition duration-500 w-full h-40 object-cover"
                        })
                    }), a.jsx("div", {
                        className: "col-span-3 mt-4",
                        children: a.jsx("img", {
                            src: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80",
                            alt: "Web Development",
                            className: "rounded-2xl shadow-xl relative z-10 transform hover:scale-105 transition duration-500 w-full h-40 object-cover"
                        })
                    })]
                }), a.jsxs("div", {
                    className: "absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20",
                    children: [a.jsx("p", {
                        className: "text-sm font-medium text-gray-600",
                        children: "Currently working on"
                    }), a.jsx("p", {
                        className: "text-lg font-bold text-blue-600",
                        children: "ML Trading Bot"
                    })]
                })]
            })]
        })
    })
}
function qf() {
    return a.jsx("section", {
        id: "education",
        className: "py-20 bg-white",
        children: a.jsxs("div", {
            className: "container mx-auto px-4",
            children: [a.jsx("h2", {
                className: "text-3xl font-bold text-center mb-12",
                children: "Education & Achievements"
            }), a.jsxs("div", {
                className: "max-w-3xl mx-auto space-y-8",
                children: [a.jsx("div", {
                    className: "bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition",
                    children: a.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [a.jsx(Wf, {
                            className: "w-8 h-8 text-blue-600 flex-shrink-0 mt-1"
                        }), a.jsxs("div", {
                            children: [a.jsx("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: "IIIT Lucknow"
                            }), a.jsx("p", {
                                className: "text-gray-600 mb-2",
                                children: "B.Tech in Computer Science (First Year)"
                            }), a.jsx("p", {
                                className: "text-gray-500",
                                children: "2024 - Present"
                            }), a.jsx("p", {
                                className: "text-gray-600 mt-2",
                                children: "CGPA: 0/10.0"
                            })]
                        })]
                    })
                }), a.jsx("div", {
                    className: "bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition",
                    children: a.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [a.jsx(tl, {
                            className: "w-8 h-8 text-yellow-600 flex-shrink-0 mt-1"
                        }), a.jsxs("div", {
                            children: [a.jsx("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: "JEE Mains 2024"
                            }), a.jsx("p", {
                                className: "text-gray-600 mb-2",
                                children: "All India Rank: 9672"
                            }), a.jsx("p", {
                                className: "text-gray-600",
                                children: "Top 0.6% among 15 lakh candidates"
                            })]
                        })]
                    })
                }), a.jsx("div", {
                    className: "bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition",
                    children: a.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [a.jsx(cc, {
                            className: "w-8 h-8 text-purple-600 flex-shrink-0 mt-1"
                        }), a.jsxs("div", {
                            children: [a.jsx("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: "INSPIRE Scholarship"
                            }), a.jsx("p", {
                                className: "text-gray-600 mb-2",
                                children: "Department of Science & Technology, Govt. of India"
                            }), a.jsx("p", {
                                className: "text-gray-600",
                                children: "Awarded for exceptional academic performance"
                            })]
                        })]
                    })
                })]
            })]
        })
    })
}
function bf() {
    return a.jsx("section", {
        id: "skills",
        className: "py-20 bg-white",
        children: a.jsxs("div", {
            className: "container mx-auto px-4",
            children: [a.jsx("h2", {
                className: "text-3xl font-bold text-center mb-12",
                children: "Skills & Interests"
            }), a.jsxs("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: [a.jsxs("div", {
                    className: "p-6 bg-gray-50 rounded-lg",
                    children: [a.jsx(Vi, {
                        className: "w-12 h-12 text-blue-600 mb-4"
                    }), a.jsx("h3", {
                        className: "text-xl font-semibold mb-3",
                        children: "Machine Learning"
                    }), a.jsx("p", {
                        className: "text-gray-600",
                        children: "Deep understanding of ML algorithms, neural networks, and data analysis. Experience with PyTorch and TensorFlow."
                    })]
                }), a.jsxs("div", {
                    className: "p-6 bg-gray-50 rounded-lg",
                    children: [a.jsx(Hi, {
                        className: "w-12 h-12 text-green-600 mb-4"
                    }), a.jsx("h3", {
                        className: "text-xl font-semibold mb-3",
                        children: "Trading"
                    }), a.jsx("p", {
                        className: "text-gray-600",
                        children: "Market analysis, algorithmic trading strategies, and financial modeling using Python and quantitative methods."
                    })]
                }), a.jsxs("div", {
                    className: "p-6 bg-gray-50 rounded-lg",
                    children: [a.jsx(tl, {
                        className: "w-12 h-12 text-purple-600 mb-4"
                    }), a.jsx("h3", {
                        className: "text-xl font-semibold mb-3",
                        children: "Competitive Programming"
                    }), a.jsx("p", {
                        className: "text-gray-600",
                        children: "Expert problem solver on CodeForces and LeetCode. Specialist rank with strong algorithmic skills."
                    })]
                }), a.jsxs("div", {
                    className: "p-6 bg-gray-50 rounded-lg",
                    children: [a.jsx($i, {
                        className: "w-12 h-12 text-indigo-600 mb-4"
                    }), a.jsx("h3", {
                        className: "text-xl font-semibold mb-3",
                        children: "Web Development"
                    }), a.jsx("p", {
                        className: "text-gray-600",
                        children: "Full-stack development with React, Node.js, and modern web technologies. Building responsive and scalable applications."
                    })]
                })]
            })]
        })
    })
}
function Gl({title: e, description: t, tech: n, link: r, icon: l, iconColor: i}) {
    return a.jsxs("div", {
        className: "bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition group",
        children: [a.jsxs("div", {
            className: "flex items-start justify-between mb-4",
            children: [a.jsx(l, {
                className: `w-8 h-8 ${i}`
            }), a.jsx("a", {
                href: r,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-gray-400 hover:text-gray-600 transition",
                children: a.jsx(Hf, {
                    className: "w-5 h-5"
                })
            })]
        }), a.jsx("h4", {
            className: "text-xl font-semibold mb-3 group-hover:text-blue-600 transition",
            children: e
        }), a.jsx("p", {
            className: "text-gray-600 mb-4",
            children: t
        }), a.jsx("div", {
            className: "flex flex-wrap gap-2",
            children: n.map( (o, u) => a.jsx("span", {
                className: "px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full",
                children: o
            }, u))
        })]
    })
}
function ep() {
    const e = {
        ml: [{
            title: "Sentiment Analysis Trading Bot",
            description: "ML model analyzing social media sentiment for crypto trading signals. Uses BERT for NLP and achieved 78% accuracy in price movement prediction.",
            tech: ["PyTorch", "BERT", "Python", "FastAPI"],
            link: "https://github.com",
            icon: Vi,
            iconColor: "text-blue-600"
        }],
        trading: [{
            title: "Algorithmic Trading System",
            description: "Automated trading system using technical indicators and statistical arbitrage. Backtested with 5 years of data showing 15% annual returns.",
            tech: ["Python", "pandas", "NumPy", "MongoDB"],
            link: "https://github.com",
            icon: Hi,
            iconColor: "text-green-600"
        }],
        webdev: [{
            title: "Real-time Market Dashboard",
            description: "Full-stack application for real-time market data visualization and analysis. Features live charts and customizable technical indicators.",
            tech: ["React", "Node.js", "WebSocket", "D3.js"],
            link: "https://github.com",
            icon: $i,
            iconColor: "text-indigo-600"
        }]
    };
    return a.jsx("section", {
        id: "projects",
        className: "py-20 bg-gray-50",
        children: a.jsxs("div", {
            className: "container mx-auto px-4",
            children: [a.jsx("h2", {
                className: "text-3xl font-bold text-center mb-12",
                children: "Featured Projects"
            }), a.jsxs("div", {
                className: "mb-16",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-3 mb-8",
                    children: [a.jsx(Vi, {
                        className: "w-8 h-8 text-blue-600"
                    }), a.jsx("h3", {
                        className: "text-2xl font-semibold",
                        children: "Machine Learning Projects"
                    })]
                }), a.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: e.ml.map( (t, n) => a.jsx(Gl, {
                        ...t
                    }, n))
                })]
            }), a.jsxs("div", {
                className: "mb-16",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-3 mb-8",
                    children: [a.jsx(Hi, {
                        className: "w-8 h-8 text-green-600"
                    }), a.jsx("h3", {
                        className: "text-2xl font-semibold",
                        children: "Trading Projects"
                    })]
                }), a.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: e.trading.map( (t, n) => a.jsx(Gl, {
                        ...t
                    }, n))
                })]
            }), a.jsxs("div", {
                className: "mb-16",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-3 mb-8",
                    children: [a.jsx($i, {
                        className: "w-8 h-8 text-indigo-600"
                    }), a.jsx("h3", {
                        className: "text-2xl font-semibold",
                        children: "Web Development Projects"
                    })]
                }), a.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: e.webdev.map( (t, n) => a.jsx(Gl, {
                        ...t
                    }, n))
                })]
            })]
        })
    })
}
function tp() {
    return a.jsx("section", {
        id: "cp",
        className: "py-20 bg-gray-50",
        children: a.jsxs("div", {
            className: "container mx-auto px-4",
            children: [a.jsx("h2", {
                className: "text-3xl font-bold text-center mb-12",
                children: "Competitive Programming Profile"
            }), a.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8 mb-12",
                children: [a.jsxs("div", {
                    className: "bg-white p-6 rounded-lg shadow-md",
                    children: [a.jsxs("h3", {
                        className: "text-xl font-semibold mb-4 flex items-center gap-2",
                        children: [a.jsx(tl, {
                            className: "text-yellow-500"
                        }), " CodeForces"]
                    }), a.jsxs("div", {
                        className: "space-y-3",
                        children: [a.jsxs("p", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                children: "Max Rating"
                            }), a.jsx("span", {
                                className: "font-semibold",
                                children: "1876"
                            })]
                        }), a.jsxs("p", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                children: "Current Rating"
                            }), a.jsx("span", {
                                className: "font-semibold",
                                children: "1824"
                            })]
                        }), a.jsxs("p", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                children: "Problems Solved"
                            }), a.jsx("span", {
                                className: "font-semibold",
                                children: "1200+"
                            })]
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "bg-white p-6 rounded-lg shadow-md",
                    children: [a.jsxs("h3", {
                        className: "text-xl font-semibold mb-4 flex items-center gap-2",
                        children: [a.jsx(Bf, {
                            className: "text-red-500"
                        }), " CodeChef"]
                    }), a.jsxs("div", {
                        className: "space-y-3",
                        children: [a.jsxs("p", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                children: "Max Rating"
                            }), a.jsx("span", {
                                className: "font-semibold",
                                children: "2012"
                            })]
                        }), a.jsxs("p", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                children: "Current Rating"
                            }), a.jsx("span", {
                                className: "font-semibold",
                                children: "1956"
                            })]
                        }), a.jsxs("p", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                children: "Division"
                            }), a.jsx("span", {
                                className: "font-semibold text-red-500",
                                children: "Division 1"
                            })]
                        }), a.jsxs("p", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                children: "Problems Solved"
                            }), a.jsx("span", {
                                className: "font-semibold",
                                children: "500+"
                            })]
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "bg-white p-6 rounded-lg shadow-md",
                    children: [a.jsxs("h3", {
                        className: "text-xl font-semibold mb-4 flex items-center gap-2",
                        children: [a.jsx(Gf, {
                            className: "text-orange-500"
                        }), " LeetCode"]
                    }), a.jsxs("div", {
                        className: "space-y-3",
                        children: [a.jsxs("p", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                children: "Contest Rating"
                            }), a.jsx("span", {
                                className: "font-semibold",
                                children: "2100+"
                            })]
                        }), a.jsxs("p", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                children: "Problems Solved"
                            }), a.jsx("span", {
                                className: "font-semibold",
                                children: "800+"
                            })]
                        }), a.jsxs("p", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                children: "Global Rank"
                            }), a.jsx("span", {
                                className: "font-semibold",
                                children: "Top 5%"
                            })]
                        })]
                    })]
                })]
            }), a.jsxs("div", {
                className: "bg-white p-8 rounded-lg shadow-md",
                children: [a.jsx("h3", {
                    className: "text-xl font-semibold mb-6",
                    children: "Notable Achievements"
                }), a.jsxs("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: [a.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [a.jsx(cc, {
                            className: "text-purple-500 flex-shrink-0"
                        }), a.jsxs("div", {
                            children: [a.jsx("h4", {
                                className: "font-semibold",
                                children: "Google Kickstart"
                            }), a.jsx("p", {
                                className: "text-gray-600",
                                children: "Global Rank 345 (Round F 2023)"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [a.jsx(Yf, {
                            className: "text-blue-500 flex-shrink-0"
                        }), a.jsxs("div", {
                            children: [a.jsx("h4", {
                                className: "font-semibold",
                                children: "ICPC Regionals"
                            }), a.jsx("p", {
                                className: "text-gray-600",
                                children: "AIR 76 (Kanpur-Mathura)"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [a.jsx(tl, {
                            className: "text-yellow-500 flex-shrink-0"
                        }), a.jsxs("div", {
                            children: [a.jsx("h4", {
                                className: "font-semibold",
                                children: "CodeChef SnackDown"
                            }), a.jsx("p", {
                                className: "text-gray-600",
                                children: "Global Rank 234 (2023)"
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}
function np() {
    return a.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [a.jsx(Zf, {}), a.jsxs("main", {
            children: [a.jsx(Jf, {}), a.jsx(qf, {}), a.jsx(bf, {}), a.jsx(ep, {}), a.jsx(tp, {})]
        })]
    })
}
ac(document.getElementById("root")).render(a.jsx(Nt.StrictMode, {
    children: a.jsx(np, {})
}));
