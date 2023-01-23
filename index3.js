(function (){
    !(function (n, e) {
        'object' == typeof exports && 'object' == typeof module
            ? (module.exports = e())
            : 'function' == typeof define && define.amd
            ? define('zoid', [], e)
            : 'object' == typeof exports
                ? (exports.zoid = e())
                : (n.zoid = e())
    })('undefined' != typeof self ? self : this, function () {
        return (function (n) {
            var e = {}
            function r(t) {
                if (e[t]) return e[t].exports
                var o = (e[t] = { i: t, l: !1, exports: {} })
                return n[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
            }
            return (
                (r.m = n),
                    (r.c = e),
                    (r.d = function (n, e, t) {
                        r.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t })
                    }),
                    (r.r = function (n) {
                        'undefined' != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
                            Object.defineProperty(n, '__esModule', { value: !0 })
                    }),
                    (r.t = function (n, e) {
                        if ((1 & e && (n = r(n)), 8 & e)) return n
                        if (4 & e && 'object' == typeof n && n && n.__esModule) return n
                        var t = Object.create(null)
                        if ((r.r(t), Object.defineProperty(t, 'default', { enumerable: !0, value: n }), 2 & e && 'string' != typeof n))
                            for (var o in n)
                                r.d(
                                    t,
                                    o,
                                    function (e) {
                                        return n[e]
                                    }.bind(null, o),
                                )
                        return t
                    }),
                    (r.n = function (n) {
                        var e =
                            n && n.__esModule
                                ? function () {
                                    return n.default
                                }
                                : function () {
                                    return n
                                }
                        return r.d(e, 'a', e), e
                    }),
                    (r.o = function (n, e) {
                        return {}.hasOwnProperty.call(n, e)
                    }),
                    (r.p = ''),
                    r((r.s = 0))
            )
        })([
            function (n, e, r) {
                'use strict'
                function t(n, e) {
                    return (t =
                        Object.setPrototypeOf ||
                        function (n, e) {
                            return (n.__proto__ = e), n
                        })(n, e)
                }
                function o(n, e) {
                    ;(n.prototype = Object.create(e.prototype)), (n.prototype.constructor = n), t(n, e)
                }
                function i() {
                    return (i =
                        Object.assign ||
                        function (n) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = arguments[e]
                                for (var t in r) ({}).hasOwnProperty.call(r, t) && (n[t] = r[t])
                            }
                            return n
                        }).apply(this, arguments)
                }
                function a(n) {
                    try {
                        if (!n) return !1
                        if ('undefined' != typeof Promise && n instanceof Promise) return !0
                        if ('undefined' != typeof window && 'function' == typeof window.Window && n instanceof window.Window)
                            return !1
                        if (
                            'undefined' != typeof window &&
                            'function' == typeof window.constructor &&
                            n instanceof window.constructor
                        )
                            return !1
                        var e = {}.toString
                        if (e) {
                            var r = e.call(n)
                            if ('[object Window]' === r || '[object global]' === r || '[object DOMWindow]' === r) return !1
                        }
                        if ('function' == typeof n.then) return !0
                    } catch (n) {
                        return !1
                    }
                    return !1
                }
                r.r(e),
                    r.d(e, 'PopupOpenError', function () {
                        return Rn
                    }),
                    r.d(e, 'create', function () {
                        return at
                    }),
                    r.d(e, 'destroy', function () {
                        return dt
                    }),
                    r.d(e, 'destroyComponents', function () {
                        return ut
                    }),
                    r.d(e, 'destroyAll', function () {
                        return ct
                    }),
                    r.d(e, 'PROP_TYPE', function () {
                        return Fr
                    }),
                    r.d(e, 'PROP_SERIALIZATION', function () {
                        return Mr
                    }),
                    r.d(e, 'CONTEXT', function () {
                        return Ur
                    }),
                    r.d(e, 'EVENT', function () {
                        return Lr
                    })
                var u,
                    c = [],
                    d = [],
                    f = 0
                function s() {
                    if (!f && u) {
                        var n = u
                        ;(u = null), n.resolve()
                    }
                }
                function l() {
                    f += 1
                }
                function w() {
                    ;(f -= 1), s()
                }
                var h = (function () {
                    function n(n) {
                        var e = this
                        if (
                            ((this.resolved = void 0),
                                (this.rejected = void 0),
                                (this.errorHandled = void 0),
                                (this.value = void 0),
                                (this.error = void 0),
                                (this.handlers = void 0),
                                (this.dispatching = void 0),
                                (this.stack = void 0),
                                (this.resolved = !1),
                                (this.rejected = !1),
                                (this.errorHandled = !1),
                                (this.handlers = []),
                                n)
                        ) {
                            var r,
                                t,
                                o = !1,
                                i = !1,
                                a = !1
                            l()
                            try {
                                n(
                                    function (n) {
                                        a ? e.resolve(n) : ((o = !0), (r = n))
                                    },
                                    function (n) {
                                        a ? e.reject(n) : ((i = !0), (t = n))
                                    },
                                )
                            } catch (n) {
                                return w(), void this.reject(n)
                            }
                            w(), (a = !0), o ? this.resolve(r) : i && this.reject(t)
                        }
                    }
                    var e = n.prototype
                    return (
                        (e.resolve = function (n) {
                            if (this.resolved || this.rejected) return this
                            if (a(n)) throw new Error('Can not resolve promise with another promise')
                            return (this.resolved = !0), (this.value = n), this.dispatch(), this
                        }),
                            (e.reject = function (n) {
                                var e = this
                                if (this.resolved || this.rejected) return this
                                if (a(n)) throw new Error('Can not reject promise with another promise')
                                if (!n) {
                                    var r = n && 'function' == typeof n.toString ? n.toString() : {}.toString.call(n)
                                    n = new Error('Expected reject to be called with Error, got ' + r)
                                }
                                return (
                                    (this.rejected = !0),
                                        (this.error = n),
                                    this.errorHandled ||
                                    setTimeout(function () {
                                        e.errorHandled ||
                                        (function (n, e) {
                                            if (-1 === c.indexOf(n)) {
                                                c.push(n),
                                                    setTimeout(function () {
                                                        throw n
                                                    }, 1)
                                                for (var r = 0; r < d.length; r++) d[r](n, e)
                                            }
                                        })(n, e)
                                    }, 1),
                                        this.dispatch(),
                                        this
                                )
                            }),
                            (e.asyncReject = function (n) {
                                return (this.errorHandled = !0), this.reject(n), this
                            }),
                            (e.dispatch = function () {
                                var e = this.resolved,
                                    r = this.rejected,
                                    t = this.handlers
                                if (!this.dispatching && (e || r)) {
                                    ;(this.dispatching = !0), l()
                                    for (
                                        var o = function (n, e) {
                                                return n.then(
                                                    function (n) {
                                                        e.resolve(n)
                                                    },
                                                    function (n) {
                                                        e.reject(n)
                                                    },
                                                )
                                            },
                                            i = 0;
                                        i < t.length;
                                        i++
                                    ) {
                                        var u = t[i],
                                            c = u.onSuccess,
                                            d = u.onError,
                                            f = u.promise,
                                            s = void 0
                                        if (e)
                                            try {
                                                s = c ? c(this.value) : this.value
                                            } catch (n) {
                                                f.reject(n)
                                                continue
                                            }
                                        else if (r) {
                                            if (!d) {
                                                f.reject(this.error)
                                                continue
                                            }
                                            try {
                                                s = d(this.error)
                                            } catch (n) {
                                                f.reject(n)
                                                continue
                                            }
                                        }
                                        if (s instanceof n && (s.resolved || s.rejected)) {
                                            var h = s
                                            h.resolved ? f.resolve(h.value) : f.reject(h.error), (h.errorHandled = !0)
                                        } else
                                            a(s)
                                                ? s instanceof n && (s.resolved || s.rejected)
                                                ? s.resolved
                                                    ? f.resolve(s.value)
                                                    : f.reject(s.error)
                                                : o(s, f)
                                                : f.resolve(s)
                                    }
                                    ;(t.length = 0), (this.dispatching = !1), w()
                                }
                            }),
                            (e.then = function (e, r) {
                                if (e && 'function' != typeof e && !e.call)
                                    throw new Error('Promise.then expected a function for success handler')
                                if (r && 'function' != typeof r && !r.call)
                                    throw new Error('Promise.then expected a function for error handler')
                                var t = new n()
                                return (
                                    this.handlers.push({ promise: t, onSuccess: e, onError: r }), (this.errorHandled = !0), this.dispatch(), t
                                )
                            }),
                            (e.catch = function (n) {
                                return this.then(void 0, n)
                            }),
                            (e.finally = function (e) {
                                if (e && 'function' != typeof e && !e.call) throw new Error('Promise.finally expected a function')
                                return this.then(
                                    function (r) {
                                        return n.try(e).then(function () {
                                            return r
                                        })
                                    },
                                    function (r) {
                                        return n.try(e).then(function () {
                                            throw r
                                        })
                                    },
                                )
                            }),
                            (e.timeout = function (n, e) {
                                var r = this
                                if (this.resolved || this.rejected) return this
                                var t = setTimeout(function () {
                                    r.resolved || r.rejected || r.reject(e || new Error('Promise timed out after ' + n + 'ms'))
                                }, n)
                                return this.then(function (n) {
                                    return clearTimeout(t), n
                                })
                            }),
                            (e.toPromise = function () {
                                if ('undefined' == typeof Promise) throw new TypeError('Could not find Promise')
                                return Promise.resolve(this)
                            }),
                            (e.lazy = function () {
                                return (this.errorHandled = !0), this
                            }),
                            (n.resolve = function (e) {
                                return e instanceof n
                                    ? e
                                    : a(e)
                                        ? new n(function (n, r) {
                                            return e.then(n, r)
                                        })
                                        : new n().resolve(e)
                            }),
                            (n.reject = function (e) {
                                return new n().reject(e)
                            }),
                            (n.asyncReject = function (e) {
                                return new n().asyncReject(e)
                            }),
                            (n.all = function (e) {
                                var r = new n(),
                                    t = e.length,
                                    o = [].slice()
                                if (!t) return r.resolve(o), r
                                for (
                                    var i = function (n, e, i) {
                                            return e.then(
                                                function (e) {
                                                    ;(o[n] = e), 0 == (t -= 1) && r.resolve(o)
                                                },
                                                function (n) {
                                                    i.reject(n)
                                                },
                                            )
                                        },
                                        u = 0;
                                    u < e.length;
                                    u++
                                ) {
                                    var c = e[u]
                                    if (c instanceof n) {
                                        if (c.resolved) {
                                            ;(o[u] = c.value), (t -= 1)
                                            continue
                                        }
                                    } else if (!a(c)) {
                                        ;(o[u] = c), (t -= 1)
                                        continue
                                    }
                                    i(u, n.resolve(c), r)
                                }
                                return 0 === t && r.resolve(o), r
                            }),
                            (n.hash = function (e) {
                                var r = {},
                                    t = [],
                                    o = function (n) {
                                        if (e.hasOwnProperty(n)) {
                                            var o = e[n]
                                            a(o)
                                                ? t.push(
                                                o.then(function (e) {
                                                    r[n] = e
                                                }),
                                                )
                                                : (r[n] = o)
                                        }
                                    }
                                for (var i in e) o(i)
                                return n.all(t).then(function () {
                                    return r
                                })
                            }),
                            (n.map = function (e, r) {
                                return n.all(e.map(r))
                            }),
                            (n.onPossiblyUnhandledException = function (n) {
                                return (function (n) {
                                    return (
                                        d.push(n),
                                            {
                                                cancel: function () {
                                                    d.splice(d.indexOf(n), 1)
                                                },
                                            }
                                    )
                                })(n)
                            }),
                            (n.try = function (e, r, t) {
                                if (e && 'function' != typeof e && !e.call) throw new Error('Promise.try expected a function')
                                var o
                                l()
                                try {
                                    o = e.apply(r, t || [])
                                } catch (e) {
                                    return w(), n.reject(e)
                                }
                                return w(), n.resolve(o)
                            }),
                            (n.delay = function (e) {
                                return new n(function (n) {
                                    setTimeout(n, e)
                                })
                            }),
                            (n.isPromise = function (e) {
                                return !!(e && e instanceof n) || a(e)
                            }),
                            (n.flush = function () {
                                return (e = u = u || new n()), s(), e
                                var e
                            }),
                            n
                    )
                })()
                function p(n) {
                    return '[object RegExp]' === {}.toString.call(n)
                }
                var v = 'Call was rejected by callee.\r\n'
                function m(n) {
                    return void 0 === n && (n = window), n.location.protocol
                }
                function y(n) {
                    if ((void 0 === n && (n = window), n.mockDomain)) {
                        var e = n.mockDomain.split('//')[0]
                        if (e) return e
                    }
                    return m(n)
                }
                function g(n) {
                    return void 0 === n && (n = window), 'about:' === y(n)
                }
                function b(n) {
                    if ((void 0 === n && (n = window), n))
                        try {
                            if (n.parent && n.parent !== n) return n.parent
                        } catch (n) {}
                }
                function E(n) {
                    if ((void 0 === n && (n = window), n && !b(n)))
                        try {
                            return n.opener
                        } catch (n) {}
                }
                function _(n) {
                    try {
                        return !0
                    } catch (n) {}
                    return !1
                }
                function x(n) {
                    void 0 === n && (n = window)
                    var e = n.location
                    if (!e) throw new Error('Can not read window location')
                    var r = m(n)
                    if (!r) throw new Error('Can not read window protocol')
                    if ('file:' === r) return 'file://'
                    if ('about:' === r) {
                        var t = b(n)
                        return t && _() ? x(t) : 'about://'
                    }
                    var o = e.host
                    if (!o) throw new Error('Can not read window host')
                    return r + '//' + o
                }
                function P(n) {
                    void 0 === n && (n = window)
                    var e = x(n)
                    return e && n.mockDomain && 0 === n.mockDomain.indexOf('mock:') ? n.mockDomain : e
                }
                function O(n) {
                    if (
                        !(function (n) {
                            try {
                                if (n === window) return !0
                            } catch (n) {}
                            try {
                                var e = Object.getOwnPropertyDescriptor(n, 'location')
                                if (e && !1 === e.enumerable) return !1
                            } catch (n) {}
                            try {
                                if (g(n) && _()) return !0
                            } catch (n) {}
                            try {
                                if (
                                    (function (n) {
                                        return void 0 === n && (n = window), 'mock:' === y(n)
                                    })(n) &&
                                    _()
                                )
                                    return !0
                            } catch (n) {}
                            try {
                                if (x(n) === x(window)) return !0
                            } catch (n) {}
                            return !1
                        })(n)
                    )
                        return !1
                    try {
                        if (n === window) return !0
                        if (g(n) && _()) return !0
                        if (P(window) === P(n)) return !0
                    } catch (n) {}
                    return !1
                }
                function C(n) {
                    if (!O(n)) throw new Error('Expected window to be same domain')
                    return n
                }
                function W(n, e) {
                    if (!n || !e) return !1
                    var r = b(e)
                    return r
                        ? r === n
                        : -1 !==
                        (function (n) {
                            var e = []
                            try {
                                for (; n.parent !== n; ) e.push(n.parent), (n = n.parent)
                            } catch (n) {}
                            return e
                        })(e).indexOf(n)
                }
                function S(n) {
                    var e,
                        r,
                        t = []
                    try {
                        e = n.frames
                    } catch (r) {
                        e = n
                    }
                    try {
                        r = e.length
                    } catch (n) {}
                    if (0 === r) return t
                    if (r) {
                        for (var o = 0; o < r; o++) {
                            var i = void 0
                            try {
                                i = e[o]
                            } catch (n) {
                                continue
                            }
                            t.push(i)
                        }
                        return t
                    }
                    for (var a = 0; a < 100; a++) {
                        var u = void 0
                        try {
                            u = e[a]
                        } catch (n) {
                            return t
                        }
                        if (!u) return t
                        t.push(u)
                    }
                    return t
                }
                function D(n) {
                    for (var e = [], r = 0, t = S(n); r < t.length; r++) {
                        var o = t[r]
                        e.push(o)
                        for (var i = 0, a = D(o); i < a.length; i++) e.push(a[i])
                    }
                    return e
                }
                function N(n) {
                    void 0 === n && (n = window)
                    try {
                        if (n.top) return n.top
                    } catch (n) {}
                    if (b(n) === n) return n
                    try {
                        if (W(window, n) && window.top) return window.top
                    } catch (n) {}
                    try {
                        if (W(n, window) && window.top) return window.top
                    } catch (n) {}
                    for (var e = 0, r = D(n); e < r.length; e++) {
                        var t = r[e]
                        try {
                            if (t.top) return t.top
                        } catch (n) {}
                        if (b(t) === t) return t
                    }
                }
                function j(n) {
                    var e = N(n)
                    if (!e) throw new Error('Can not determine top window')
                    var r = [].concat(D(e), [e])
                    return -1 === r.indexOf(n) && (r = [].concat(r, [n], D(n))), r
                }
                var A = [],
                    k = []
                function T(n, e) {
                    void 0 === e && (e = !0)
                    try {
                        if (n === window) return !1
                    } catch (n) {
                        return !0
                    }
                    try {
                        if (!n) return !0
                    } catch (n) {
                        return !0
                    }
                    try {
                        if (n.closed) return !0
                    } catch (n) {
                        return !n || n.message !== v
                    }
                    if (e && O(n))
                        try {
                            if (n.mockclosed) return !0
                        } catch (n) {}
                    try {
                        if (!n.parent || !n.top) return !0
                    } catch (n) {}
                    var r = (function (n, e) {
                        for (var r = 0; r < n.length; r++)
                            try {
                                if (n[r] === e) return r
                            } catch (n) {}
                        return -1
                    })(A, n)
                    if (-1 !== r) {
                        var t = k[r]
                        if (
                            t &&
                            (function (n) {
                                if (!n.contentWindow) return !0
                                if (!n.parentNode) return !0
                                var e = n.ownerDocument
                                if (e && e.documentElement && !e.documentElement.contains(n)) {
                                    for (var r = n; r.parentNode && r.parentNode !== r; ) r = r.parentNode
                                    if (!r.host || !e.documentElement.contains(r.host)) return !0
                                }
                                return !1
                            })(t)
                        )
                            return !0
                    }
                    return !1
                }
                function R(n) {
                    return (n = n || window).navigator.mockUserAgent || n.navigator.userAgent
                }
                function I(n, e) {
                    for (var r = S(n), t = 0; t < r.length; t++) {
                        var o = r[t]
                        try {
                            if (O(o) && o.name === e && -1 !== r.indexOf(o)) return o
                        } catch (n) {}
                    }
                    try {
                        if (-1 !== r.indexOf(n.frames[e])) return n.frames[e]
                    } catch (n) {}
                    try {
                        if (-1 !== r.indexOf(n[e])) return n[e]
                    } catch (n) {}
                }
                function z(n, e) {
                    return n === E(e)
                }
                function F(n) {
                    return void 0 === n && (n = window), E((n = n || window)) || b(n) || void 0
                }
                function M(n, e) {
                    for (var r = 0; r < n.length; r++) for (var t = n[r], o = 0; o < e.length; o++) if (t === e[o]) return !0
                    return !1
                }
                function U(n, e) {
                    var r = N(n) || n,
                        t = N(e) || e
                    try {
                        if (r && t) return r === t
                    } catch (n) {}
                    var o = j(n),
                        i = j(e)
                    if (M(o, i)) return !0
                    var a = E(r),
                        u = E(t)
                    return (a && M(j(a), i)) || (u && M(j(u), o)), !1
                }
                function L(n, e) {
                    if ('string' == typeof n) {
                        if ('string' == typeof e) return '*' === n || e === n
                        if (p(e)) return !1
                        if (Array.isArray(e)) return !1
                    }
                    return p(n)
                        ? p(e)
                            ? n.toString() === e.toString()
                            : !Array.isArray(e) && Boolean(e.match(n))
                        : !!Array.isArray(n) &&
                        (Array.isArray(e)
                            ? JSON.stringify(n) === JSON.stringify(e)
                            : !p(e) &&
                            n.some(function (n) {
                                return L(n, e)
                            }))
                }
                function B(n) {
                    return n.match(/^(https?|mock|file):\/\//) ? n.split('/').slice(0, 3).join('/') : P()
                }
                function q(n) {
                    try {
                        if (n === window) return !0
                    } catch (n) {
                        if (n && n.message === v) return !0
                    }
                    try {
                        if ('[object Window]' === {}.toString.call(n)) return !0
                    } catch (n) {
                        if (n && n.message === v) return !0
                    }
                    try {
                        if (window.Window && n instanceof window.Window) return !0
                    } catch (n) {
                        if (n && n.message === v) return !0
                    }
                    try {
                        if (n && n.self === n) return !0
                    } catch (n) {
                        if (n && n.message === v) return !0
                    }
                    try {
                        if (n && n.parent === n) return !0
                    } catch (n) {
                        if (n && n.message === v) return !0
                    }
                    try {
                        if (n && n.top === n) return !0
                    } catch (n) {
                        if (n && n.message === v) return !0
                    }
                    try {
                        if (n && '__unlikely_value__' === n.__cross_domain_utils_window_check__) return !1
                    } catch (n) {
                        return !0
                    }
                    try {
                        if ('postMessage' in n && 'self' in n && 'location' in n) return !0
                    } catch (n) {}
                    return !1
                }
                function J(n) {
                    if (O(n)) return C(n).frameElement
                    for (var e = 0, r = document.querySelectorAll('iframe'); e < r.length; e++) {
                        var t = r[e]
                        if (t && t.contentWindow && t.contentWindow === n) return t
                    }
                }
                function H(n) {
                    if (
                        (function (n) {
                            return void 0 === n && (n = window), Boolean(b(n))
                        })(n)
                    ) {
                        var e = J(n)
                        if (e && e.parentElement) return void e.parentElement.removeChild(e)
                    }
                    try {
                        n.close()
                    } catch (n) {}
                }
                function Y(n, e) {
                    for (var r = 0; r < n.length; r++)
                        try {
                            if (n[r] === e) return r
                        } catch (n) {}
                    return -1
                }
                var Z,
                    G = (function () {
                        function n() {
                            if (
                                ((this.name = void 0),
                                    (this.weakmap = void 0),
                                    (this.keys = void 0),
                                    (this.values = void 0),
                                    (this.name = '__weakmap_' + ((1e9 * Math.random()) >>> 0) + '__'),
                                    (function () {
                                        if ('undefined' == typeof WeakMap) return !1
                                        if (void 0 === Object.freeze) return !1
                                        try {
                                            var n = new WeakMap(),
                                                e = {}
                                            return Object.freeze(e), n.set(e, '__testvalue__'), '__testvalue__' === n.get(e)
                                        } catch (n) {
                                            return !1
                                        }
                                    })())
                            )
                                try {
                                    this.weakmap = new WeakMap()
                                } catch (n) {}
                            ;(this.keys = []), (this.values = [])
                        }
                        var e = n.prototype
                        return (
                            (e._cleanupClosedWindows = function () {
                                for (var n = this.weakmap, e = this.keys, r = 0; r < e.length; r++) {
                                    var t = e[r]
                                    if (q(t) && T(t)) {
                                        if (n)
                                            try {
                                                n.delete(t)
                                            } catch (n) {}
                                        e.splice(r, 1), this.values.splice(r, 1), (r -= 1)
                                    }
                                }
                            }),
                                (e.isSafeToReadWrite = function (n) {
                                    return !q(n)
                                }),
                                (e.set = function (n, e) {
                                    if (!n) throw new Error('WeakMap expected key')
                                    var r = this.weakmap
                                    if (r)
                                        try {
                                            r.set(n, e)
                                        } catch (n) {
                                            delete this.weakmap
                                        }
                                    if (this.isSafeToReadWrite(n))
                                        try {
                                            var t = this.name,
                                                o = n[t]
                                            return void (o && o[0] === n
                                                ? (o[1] = e)
                                                : Object.defineProperty(n, t, { value: [n, e], writable: !0 }))
                                        } catch (n) {}
                                    this._cleanupClosedWindows()
                                    var i = this.keys,
                                        a = this.values,
                                        u = Y(i, n)
                                    ;-1 === u ? (i.push(n), a.push(e)) : (a[u] = e)
                                }),
                                (e.get = function (n) {
                                    if (!n) throw new Error('WeakMap expected key')
                                    var e = this.weakmap
                                    if (e)
                                        try {
                                            if (e.has(n)) return e.get(n)
                                        } catch (n) {
                                            delete this.weakmap
                                        }
                                    if (this.isSafeToReadWrite(n))
                                        try {
                                            var r = n[this.name]
                                            return r && r[0] === n ? r[1] : void 0
                                        } catch (n) {}
                                    this._cleanupClosedWindows()
                                    var t = Y(this.keys, n)
                                    if (-1 !== t) return this.values[t]
                                }),
                                (e.delete = function (n) {
                                    if (!n) throw new Error('WeakMap expected key')
                                    var e = this.weakmap
                                    if (e)
                                        try {
                                            e.delete(n)
                                        } catch (n) {
                                            delete this.weakmap
                                        }
                                    if (this.isSafeToReadWrite(n))
                                        try {
                                            var r = n[this.name]
                                            r && r[0] === n && (r[0] = r[1] = void 0)
                                        } catch (n) {}
                                    this._cleanupClosedWindows()
                                    var t = this.keys,
                                        o = Y(t, n)
                                    ;-1 !== o && (t.splice(o, 1), this.values.splice(o, 1))
                                }),
                                (e.has = function (n) {
                                    if (!n) throw new Error('WeakMap expected key')
                                    var e = this.weakmap
                                    if (e)
                                        try {
                                            if (e.has(n)) return !0
                                        } catch (n) {
                                            delete this.weakmap
                                        }
                                    if (this.isSafeToReadWrite(n))
                                        try {
                                            var r = n[this.name]
                                            return !(!r || r[0] !== n)
                                        } catch (n) {}
                                    return this._cleanupClosedWindows(), -1 !== Y(this.keys, n)
                                }),
                                (e.getOrSet = function (n, e) {
                                    if (this.has(n)) return this.get(n)
                                    var r = e()
                                    return this.set(n, r), r
                                }),
                                n
                        )
                    })()
                function V(n) {
                    return (V = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (n) {
                            return n.__proto__ || Object.getPrototypeOf(n)
                        })(n)
                }
                function X() {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                    if (Reflect.construct.sham) return !1
                    if ('function' == typeof Proxy) return !0
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (n) {
                        return !1
                    }
                }
                function $(n, e, r) {
                    return ($ = X()
                        ? Reflect.construct
                        : function (n, e, r) {
                            var o = [null]
                            o.push.apply(o, e)
                            var i = new (Function.bind.apply(n, o))()
                            return r && t(i, r.prototype), i
                        }).apply(null, arguments)
                }
                function K(n) {
                    var e = 'function' == typeof Map ? new Map() : void 0
                    return (K = function (n) {
                        if (null === n || -1 === Function.toString.call(n).indexOf('[native code]')) return n
                        if ('function' != typeof n) throw new TypeError('Super expression must either be null or a function')
                        if (void 0 !== e) {
                            if (e.has(n)) return e.get(n)
                            e.set(n, r)
                        }
                        function r() {
                            return $(n, arguments, V(this).constructor)
                        }
                        return (
                            (r.prototype = Object.create(n.prototype, {
                                constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
                            })),
                                t(r, n)
                        )
                    })(n)
                }
                function Q(n) {
                    var e = !1
                    try {
                        ;(n instanceof window.Element ||
                            (null !== n &&
                                'object' == typeof n &&
                                1 === n.nodeType &&
                                'object' == typeof n.style &&
                                'object' == typeof n.ownerDocument)) &&
                        (e = !0)
                    } catch (n) {}
                    return e
                }
                function nn(n) {
                    return n.name || n.__name__ || n.displayName || 'anonymous'
                }
                function en(n, e) {
                    try {
                        delete n.name, (n.name = e)
                    } catch (n) {}
                    return (n.__name__ = n.displayName = e), n
                }
                function rn(n) {
                    if ('function' == typeof btoa)
                        return btoa(
                            encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, function (n, e) {
                                return String.fromCharCode(parseInt(e, 16))
                            }),
                        ).replace(/[=]/g, '')
                    if ('undefined' != typeof Buffer) return Buffer.from(n, 'utf8').toString('base64').replace(/[=]/g, '')
                    throw new Error('Can not find window.btoa or Buffer')
                }
                function tn() {
                    var n = '0123456789abcdef'
                    return (
                        'uid_' +
                        'xxxxxxxxxx'.replace(/./g, function () {
                            return n.charAt(Math.floor(Math.random() * n.length))
                        }) +
                        '_' +
                        rn(new Date().toISOString().slice(11, 19).replace('T', '.'))
                            .replace(/[^a-zA-Z0-9]/g, '')
                            .toLowerCase()
                    )
                }
                function on(n) {
                    try {
                        return JSON.stringify([].slice.call(n), function (n, e) {
                            return 'function' == typeof e
                                ? 'memoize[' +
                                (function (n) {
                                    if (((Z = Z || new G()), null == n || ('object' != typeof n && 'function' != typeof n)))
                                        throw new Error('Invalid object')
                                    var e = Z.get(n)
                                    return e || ((e = typeof n + ':' + tn()), Z.set(n, e)), e
                                })(e) +
                                ']'
                                : Q(e)
                                    ? {}
                                    : e
                        })
                    } catch (n) {
                        throw new Error('Arguments not serializable -- can not be used to memoize')
                    }
                }
                function an() {
                    return {}
                }
                var un = 0,
                    cn = 0
                function dn(n, e) {
                    void 0 === e && (e = {})
                    var r,
                        t,
                        o = e.thisNamespace,
                        i = void 0 !== o && o,
                        a = e.time,
                        u = un
                    un += 1
                    var c = function () {
                        for (var e = arguments.length, o = new Array(e), c = 0; c < e; c++) o[c] = arguments[c]
                        var d, f
                        u < cn && ((r = null), (t = null), (u = un), (un += 1)),
                            (d = i ? (t = t || new G()).getOrSet(this, an) : (r = r || {}))
                        try {
                            f = on(o)
                        } catch (e) {
                            return n.apply(this, arguments)
                        }
                        var s = d[f]
                        if ((s && a && Date.now() - s.time < a && (delete d[f], (s = null)), s)) return s.value
                        var l = Date.now(),
                            w = n.apply(this, arguments)
                        return (d[f] = { time: l, value: w }), w
                    }
                    return (
                        (c.reset = function () {
                            ;(r = null), (t = null)
                        }),
                            en(c, (e.name || nn(n)) + '::memoized')
                    )
                }
                function fn(n) {
                    var e = {}
                    function r() {
                        for (var r = arguments, t = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
                            i[a] = arguments[a]
                        var u = on(i)
                        return (
                            e.hasOwnProperty(u) ||
                            (e[u] = h
                                .try(function () {
                                    return n.apply(t, r)
                                })
                                .finally(function () {
                                    delete e[u]
                                })),
                                e[u]
                        )
                    }
                    return (
                        (r.reset = function () {
                            e = {}
                        }),
                            en(r, nn(n) + '::promiseMemoized')
                    )
                }
                function sn() {}
                function ln(n) {
                    var e = !1
                    return en(function () {
                        if (!e) return (e = !0), n.apply(this, arguments)
                    }, nn(n) + '::once')
                }
                function wn(n, e) {
                    if ((void 0 === e && (e = 1), e >= 3)) return 'stringifyError stack overflow'
                    try {
                        if (!n) return '<unknown error: ' + {}.toString.call(n) + '>'
                        if ('string' == typeof n) return n
                        if (n instanceof Error) {
                            var r = n && n.stack,
                                t = n && n.message
                            if (r && t) return -1 !== r.indexOf(t) ? r : t + '\n' + r
                            if (r) return r
                            if (t) return t
                        }
                        return n && n.toString && 'function' == typeof n.toString ? n.toString() : {}.toString.call(n)
                    } catch (n) {
                        return 'Error while stringifying error: ' + wn(n, e + 1)
                    }
                }
                function hn(n) {
                    return 'string' == typeof n
                        ? n
                        : n && n.toString && 'function' == typeof n.toString
                            ? n.toString()
                            : {}.toString.call(n)
                }
                function pn(n, e) {
                    if (!e) return n
                    if (Object.assign) return Object.assign(n, e)
                    for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r])
                    return n
                }
                function vn(n) {
                    return n
                }
                function mn(n, e) {
                    var r
                    return (
                        (function t() {
                            r = setTimeout(function () {
                                n(), t()
                            }, e)
                        })(),
                            {
                                cancel: function () {
                                    clearTimeout(r)
                                },
                            }
                    )
                }
                function yn(n) {
                    return [].slice.call(n)
                }
                function gn(n) {
                    return null != n
                }
                function bn(n) {
                    return '[object RegExp]' === {}.toString.call(n)
                }
                function En(n, e, r) {
                    if (n.hasOwnProperty(e)) return n[e]
                    var t = r()
                    return (n[e] = t), t
                }
                function _n(n) {
                    var e,
                        r = [],
                        t = !1,
                        o = {
                            set: function (e, r) {
                                return (
                                    t ||
                                    ((n[e] = r),
                                        o.register(function () {
                                            delete n[e]
                                        })),
                                        r
                                )
                            },
                            register: function (n) {
                                var o = ln(function () {
                                    return n(e)
                                })
                                return (
                                    t ? n(e) : r.push(o),
                                        {
                                            cancel: function () {
                                                var n = r.indexOf(o)
                                                ;-1 !== n && r.splice(n, 1)
                                            },
                                        }
                                )
                            },
                            all: function (n) {
                                e = n
                                var o = []
                                for (t = !0; r.length; ) {
                                    var i = r.shift()
                                    o.push(i())
                                }
                                return h.all(o).then(sn)
                            },
                        }
                    return o
                }
                function xn(n, e) {
                    if (null == e) throw new Error('Expected ' + n + ' to be present')
                    return e
                }
                ;(dn.clear = function () {
                    cn = un
                }),
                    dn(function (n) {
                        if (Object.values) return Object.values(n)
                        var e = []
                        for (var r in n) n.hasOwnProperty(r) && e.push(n[r])
                        return e
                    })
                var Pn = (function (n) {
                    function e(e) {
                        var r
                        return (
                            ((r = n.call(this, e) || this).name = r.constructor.name),
                                'function' == typeof Error.captureStackTrace
                                    ? Error.captureStackTrace(
                                    (function (n) {
                                        if (void 0 === n)
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                                        return n
                                    })(r),
                                    r.constructor,
                                    )
                                    : (r.stack = new Error(e).stack),
                                r
                        )
                    }
                    return o(e, n), e
                })(K(Error))
                function On() {
                    var n = document.body
                    if (!n) throw new Error('Body element not found')
                    return n
                }
                function Cn() {
                    return Boolean(document.body) && 'complete' === document.readyState
                }
                function Wn() {
                    return Boolean(document.body) && 'interactive' === document.readyState
                }
                function Sn(n) {
                    return encodeURIComponent(n)
                }
                function Dn(n) {
                    return (function (e, r, t) {
                        void 0 === t && (t = [])
                        var o = (e.__inline_memoize_cache__ = e.__inline_memoize_cache__ || {}),
                            i = on(t)
                        return o.hasOwnProperty(i)
                            ? o[i]
                            : (o[i] = function () {
                                var e = {}
                                if (!n) return e
                                if (-1 === n.indexOf('=')) return e
                                for (var r = 0, t = n.split('&'); r < t.length; r++) {
                                    var o = t[r]
                                    ;(o = o.split('='))[0] && o[1] && (e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]))
                                }
                                return e
                            }.apply(void 0, t))
                    })(Dn, 0, [n])
                }
                function Nn(n, e) {
                    return (
                        void 0 === e && (e = {}),
                            e && Object.keys(e).length
                                ? (void 0 === (r = i({}, Dn(n), e)) && (r = {}),
                                    Object.keys(r)
                                        .filter(function (n) {
                                            return 'string' == typeof r[n] || 'boolean' == typeof r[n]
                                        })
                                        .map(function (n) {
                                            var e = r[n]
                                            if ('string' != typeof e && 'boolean' != typeof e) throw new TypeError('Invalid type for query')
                                            return Sn(n) + '=' + Sn(e.toString())
                                        })
                                        .join('&'))
                                : n
                    )
                    var r
                }
                function jn(n, e) {
                    n.appendChild(e)
                }
                function An(n, e) {
                    return void 0 === e && (e = document), Q(n) ? n : 'string' == typeof n ? e.querySelector(n) : void 0
                }
                function kn(n) {
                    return new h(function (e, r) {
                        var t = hn(n),
                            o = An(n)
                        if (o) return e(o)
                        if (Cn()) return r(new Error('Document is ready and element ' + t + ' does not exist'))
                        var i = setInterval(function () {
                            return (o = An(n))
                                ? (e(o), void clearInterval(i))
                                : Cn()
                                    ? (clearInterval(i), r(new Error('Document is ready and element ' + t + ' does not exist')))
                                    : void 0
                        }, 10)
                    })
                }
                dn(function () {
                    return new h(function (n) {
                        if (Cn() || Wn()) return n()
                        var e = setInterval(function () {
                            if (Cn() || Wn()) return clearInterval(e), n()
                        }, 10)
                    })
                })
                var Tn,
                    Rn = (function (n) {
                        function e() {
                            return n.apply(this, arguments) || this
                        }
                        return o(e, n), e
                    })(Pn)
                function In(n) {
                    if ((Tn = Tn || new G()).has(n)) {
                        var e = Tn.get(n)
                        if (e) return e
                    }
                    var r = new h(function (e, r) {
                        n.addEventListener('load', function () {
                            ;(function (n) {
                                if (
                                    ((function () {
                                        for (var n = 0; n < A.length; n++) {
                                            var e = !1
                                            try {
                                                e = A[n].closed
                                            } catch (n) {}
                                            e && (k.splice(n, 1), A.splice(n, 1))
                                        }
                                    })(),
                                    n && n.contentWindow)
                                )
                                    try {
                                        A.push(n.contentWindow), k.push(n)
                                    } catch (n) {}
                            })(n),
                                e(n)
                        }),
                            n.addEventListener('error', function (t) {
                                n.contentWindow ? e(n) : r(t)
                            })
                    })
                    return Tn.set(n, r), r
                }
                function zn(n) {
                    return In(n).then(function (n) {
                        if (!n.contentWindow) throw new Error('Could not find window in iframe')
                        return n.contentWindow
                    })
                }
                function Fn(n, e) {
                    void 0 === n && (n = {})
                    var r = n.style || {},
                        t = (function (n, e, r) {
                            void 0 === n && (n = 'div'), void 0 === e && (e = {}), (n = n.toLowerCase())
                            var t,
                                o,
                                i,
                                a = document.createElement(n)
                            if (
                                (e.style && pn(a.style, e.style),
                                e.class && (a.className = e.class.join(' ')),
                                e.id && a.setAttribute('id', e.id),
                                    e.attributes)
                            )
                                for (var u = 0, c = Object.keys(e.attributes); u < c.length; u++) {
                                    var d = c[u]
                                    a.setAttribute(d, e.attributes[d])
                                }
                            if (
                                (e.styleSheet &&
                                ((t = a),
                                    (o = e.styleSheet),
                                void 0 === i && (i = window.document),
                                    t.styleSheet ? (t.styleSheet.cssText = o) : t.appendChild(i.createTextNode(o))),
                                    e.html)
                            ) {
                                if ('iframe' === n)
                                    throw new Error('Iframe html can not be written unless container provided and iframe in DOM')
                                a.innerHTML = e.html
                            }
                            return a
                        })('iframe', {
                            attributes: i({ allowTransparency: 'true' }, n.attributes || {}),
                            style: i({ backgroundColor: 'transparent', border: 'none' }, r),
                            html: n.html,
                            class: n.class,
                        }),
                        o = window.navigator.userAgent.match(/MSIE|Edge/i)
                    return (
                        t.hasAttribute('id') || t.setAttribute('id', tn()),
                            In(t),
                        e &&
                        (function (n, e) {
                            void 0 === e && (e = document)
                            var r = An(n, e)
                            if (r) return r
                            throw new Error('Can not find element: ' + hn(n))
                        })(e).appendChild(t),
                        (n.url || o) && t.setAttribute('src', n.url || 'about:blank'),
                            t
                    )
                }
                function Mn(n, e, r) {
                    return (
                        n.addEventListener(e, r),
                            {
                                cancel: function () {
                                    n.removeEventListener(e, r)
                                },
                            }
                    )
                }
                function Un(n) {
                    n.style.setProperty('display', '')
                }
                function Ln(n) {
                    n.style.setProperty('display', 'none', 'important')
                }
                function Bn(n) {
                    n && n.parentNode && n.parentNode.removeChild(n)
                }
                function qn(n) {
                    return !(
                        n &&
                        n.parentNode &&
                        n.ownerDocument &&
                        n.ownerDocument.documentElement &&
                        n.ownerDocument.documentElement.contains(n)
                    )
                }
                function Jn(n, e, r) {
                    var t = void 0 === r ? {} : r,
                        o = t.width,
                        i = void 0 === o || o,
                        a = t.height,
                        u = void 0 === a || a,
                        c = t.interval,
                        d = void 0 === c ? 100 : c,
                        f = t.win,
                        s = void 0 === f ? window : f,
                        l = n.offsetWidth,
                        w = n.offsetHeight,
                        h = !1
                    e({ width: l, height: w })
                    var p,
                        v,
                        m = function () {
                            if (
                                !h &&
                                (function (n) {
                                    return Boolean(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
                                })(n)
                            ) {
                                var r = n.offsetWidth,
                                    t = n.offsetHeight
                                ;((i && r !== l) || (u && t !== w)) && e({ width: r, height: t }), (l = r), (w = t)
                            }
                        }
                    return (
                        s.addEventListener('resize', m),
                            void 0 !== s.ResizeObserver
                                ? ((p = new s.ResizeObserver(m)).observe(n), (v = mn(m, 10 * d)))
                                : void 0 !== s.MutationObserver
                                ? ((p = new s.MutationObserver(m)).observe(n, {
                                    attributes: !0,
                                    childList: !0,
                                    subtree: !0,
                                    characterData: !1,
                                }),
                                    (v = mn(m, 10 * d)))
                                : (v = mn(m, d)),
                            {
                                cancel: function () {
                                    ;(h = !0), p.disconnect(), window.removeEventListener('resize', m), v.cancel()
                                },
                            }
                    )
                }
                function Hn(n) {
                    for (; n.parentNode; ) n = n.parentNode
                    return '[object ShadowRoot]' === n.toString()
                }
                var Yn = 'undefined' != typeof document ? document.currentScript : null,
                    Zn = dn(function () {
                        if (Yn) return Yn
                        if (
                            (Yn = (function () {
                                try {
                                    var n = (function () {
                                            try {
                                                throw new Error('_')
                                            } catch (n) {
                                                return n.stack || ''
                                            }
                                        })(),
                                        e = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(n),
                                        r = e && e[1]
                                    if (!r) return
                                    for (
                                        var t = 0, o = [].slice.call(document.getElementsByTagName('script')).reverse();
                                        t < o.length;
                                        t++
                                    ) {
                                        var i = o[t]
                                        if (i.src && i.src === r) return i
                                    }
                                } catch (n) {}
                            })())
                        )
                            return Yn
                        throw new Error('Can not determine current script')
                    }),
                    Gn = tn()
                function Vn(n) {
                    return 'string' == typeof n && /^[0-9]+%$/.test(n)
                }
                function Xn(n) {
                    if ('number' == typeof n) return n
                    var e = n.match(/^([0-9]+)(px|%)$/)
                    if (!e) throw new Error('Could not match css value from ' + n)
                    return parseInt(e[1], 10)
                }
                function $n(n) {
                    return Xn(n) + 'px'
                }
                function Kn(n) {
                    return 'number' == typeof n ? $n(n) : Vn(n) ? n : $n(n)
                }
                function Qn(n, e) {
                    if ('number' == typeof n) return n
                    if (Vn(n)) return parseInt((e * Xn(n)) / 100, 10)
                    var r
                    if ('string' == typeof (r = n) && /^[0-9]+px$/.test(r)) return Xn(n)
                    throw new Error('Can not normalize dimension: ' + n)
                }
                function ne(n) {
                    void 0 === n && (n = window)
                    var e = '__post_robot_10_0_46__'
                    return n !== window ? n[e] : (n[e] = n[e] || {})
                }
                dn(function () {
                    var n
                    try {
                        n = Zn()
                    } catch (n) {
                        return Gn
                    }
                    var e = n.getAttribute('data-uid')
                    if (e && 'string' == typeof e) return e
                    if ((e = n.getAttribute('data-uid-auto')) && 'string' == typeof e) return e
                    if (n.src) {
                        var r = (function (n) {
                            for (var e = '', r = 0; r < n.length; r++) {
                                var t = n[r].charCodeAt(0) * r
                                n[r + 1] && (t += n[r + 1].charCodeAt(0) * (r - 1)), (e += String.fromCharCode(97 + (Math.abs(t) % 26)))
                            }
                            return e
                        })(JSON.stringify({ src: n.src, dataset: n.dataset }))
                        e = 'uid_' + r.slice(r.length - 30)
                    } else e = tn()
                    return n.setAttribute('data-uid-auto', e), e
                })
                var ee = function () {
                    return {}
                }
                function re(n, e) {
                    return (
                        void 0 === n && (n = 'store'),
                        void 0 === e && (e = ee),
                            En(ne(), n, function () {
                                var n = e()
                                return {
                                    has: function (e) {
                                        return n.hasOwnProperty(e)
                                    },
                                    get: function (e, r) {
                                        return n.hasOwnProperty(e) ? n[e] : r
                                    },
                                    set: function (e, r) {
                                        return (n[e] = r), r
                                    },
                                    del: function (e) {
                                        delete n[e]
                                    },
                                    getOrSet: function (e, r) {
                                        return En(n, e, r)
                                    },
                                    reset: function () {
                                        n = e()
                                    },
                                    keys: function () {
                                        return Object.keys(n)
                                    },
                                }
                            })
                    )
                }
                var te,
                    oe = function () {}
                function ie() {
                    var n = ne()
                    return (n.WINDOW_WILDCARD = n.WINDOW_WILDCARD || new oe()), n.WINDOW_WILDCARD
                }
                function ae(n, e) {
                    return (
                        void 0 === n && (n = 'store'),
                        void 0 === e && (e = ee),
                            re('windowStore').getOrSet(n, function () {
                                var r = new G(),
                                    t = function (n) {
                                        return r.getOrSet(n, e)
                                    }
                                return {
                                    has: function (e) {
                                        return t(e).hasOwnProperty(n)
                                    },
                                    get: function (e, r) {
                                        var o = t(e)
                                        return o.hasOwnProperty(n) ? o[n] : r
                                    },
                                    set: function (e, r) {
                                        return (t(e)[n] = r), r
                                    },
                                    del: function (e) {
                                        delete t(e)[n]
                                    },
                                    getOrSet: function (e, r) {
                                        return En(t(e), n, r)
                                    },
                                }
                            })
                    )
                }
                function ue() {
                    return re('instance').getOrSet('instanceID', tn)
                }
                function ce(n, e) {
                    var r = e.domain,
                        t = ae('helloPromises'),
                        o = t.get(n)
                    o && o.resolve({ domain: r })
                    var i = h.resolve({ domain: r })
                    return t.set(n, i), i
                }
                function de(n, e) {
                    return (0, e.send)(n, 'postrobot_hello', { instanceID: ue() }, { domain: '*', timeout: -1 }).then(function (e) {
                        var r = e.origin,
                            t = e.data.instanceID
                        return ce(n, { domain: r }), { win: n, domain: r, instanceID: t }
                    })
                }
                function fe(n, e) {
                    var r = e.send
                    return ae('windowInstanceIDPromises').getOrSet(n, function () {
                        return de(n, { send: r }).then(function (n) {
                            return n.instanceID
                        })
                    })
                }
                function se(n, e, r) {
                    void 0 === e && (e = 5e3), void 0 === r && (r = 'Window')
                    var t = (function (n) {
                        return ae('helloPromises').getOrSet(n, function () {
                            return new h()
                        })
                    })(n)
                    return -1 !== e && (t = t.timeout(e, new Error(r + ' did not load after ' + e + 'ms'))), t
                }
                function le(n) {
                    ae('knownWindows').set(n, !0)
                }
                function we(n) {
                    return 'object' == typeof n && null !== n && 'string' == typeof n.__type__
                }
                function he(n) {
                    return void 0 === n
                        ? 'undefined'
                        : null === n
                            ? 'null'
                            : Array.isArray(n)
                                ? 'array'
                                : 'function' == typeof n
                                    ? 'function'
                                    : 'object' == typeof n
                                        ? n instanceof Error
                                            ? 'error'
                                            : 'function' == typeof n.then
                                                ? 'promise'
                                                : '[object RegExp]' === {}.toString.call(n)
                                                    ? 'regex'
                                                    : '[object Date]' === {}.toString.call(n)
                                                        ? 'date'
                                                        : 'object'
                                        : 'string' == typeof n
                                            ? 'string'
                                            : 'number' == typeof n
                                                ? 'number'
                                                : 'boolean' == typeof n
                                                    ? 'boolean'
                                                    : void 0
                }
                function pe(n, e) {
                    return { __type__: n, __val__: e }
                }
                var ve,
                    me =
                        (((te = {}).function = function () {}),
                            (te.error = function (n) {
                                return pe('error', { message: n.message, stack: n.stack, code: n.code, data: n.data })
                            }),
                            (te.promise = function () {}),
                            (te.regex = function (n) {
                                return pe('regex', n.source)
                            }),
                            (te.date = function (n) {
                                return pe('date', n.toJSON())
                            }),
                            (te.array = function (n) {
                                return n
                            }),
                            (te.object = function (n) {
                                return n
                            }),
                            (te.string = function (n) {
                                return n
                            }),
                            (te.number = function (n) {
                                return n
                            }),
                            (te.boolean = function (n) {
                                return n
                            }),
                            (te.null = function (n) {
                                return n
                            }),
                            (te[void 0] = function (n) {
                                return pe('undefined', n)
                            }),
                            te),
                    ye = {},
                    ge =
                        (((ve = {}).function = function () {
                            throw new Error('Function serialization is not implemented; nothing to deserialize')
                        }),
                            (ve.error = function (n) {
                                var e = n.stack,
                                    r = n.code,
                                    t = n.data,
                                    o = new Error(n.message)
                                return (o.code = r), t && (o.data = t), (o.stack = e + '\n\n' + o.stack), o
                            }),
                            (ve.promise = function () {
                                throw new Error('Promise serialization is not implemented; nothing to deserialize')
                            }),
                            (ve.regex = function (n) {
                                return new RegExp(n)
                            }),
                            (ve.date = function (n) {
                                return new Date(n)
                            }),
                            (ve.array = function (n) {
                                return n
                            }),
                            (ve.object = function (n) {
                                return n
                            }),
                            (ve.string = function (n) {
                                return n
                            }),
                            (ve.number = function (n) {
                                return n
                            }),
                            (ve.boolean = function (n) {
                                return n
                            }),
                            (ve.null = function (n) {
                                return n
                            }),
                            (ve[void 0] = function () {}),
                            ve),
                    be = {}
                function Ee() {
                    return !!R(window).match(/MSIE|trident|edge\/12|edge\/13/i)
                }
                function _e(n) {
                    return !U(window, n)
                }
                function xe(n, e) {
                    if (n) {
                        if (P() !== B(n)) return !0
                    } else if (e && !O(e)) return !0
                    return !1
                }
                function Pe(n) {
                    var e = n.win,
                        r = n.domain
                    return !(!Ee() || (r && !xe(r, e)) || (e && !_e(e)))
                }
                function Oe(n) {
                    return '__postrobot_bridge___' + (n = n || B(n)).replace(/[^a-zA-Z0-9]+/g, '_')
                }
                function Ce() {
                    return Boolean(window.name && window.name === Oe(P()))
                }
                var We = new h(function (n) {
                    if (window.document && window.document.body) return n(window.document.body)
                    var e = setInterval(function () {
                        if (window.document && window.document.body) return clearInterval(e), n(window.document.body)
                    }, 10)
                })
                function Se(n) {
                    ae('remoteWindowPromises').getOrSet(n, function () {
                        return new h()
                    })
                }
                function De(n) {
                    var e = ae('remoteWindowPromises').get(n)
                    if (!e) throw new Error('Remote window promise not found')
                    return e
                }
                function Ne(n, e, r) {
                    De(n).resolve(function (t, o, i) {
                        if (t !== n) throw new Error('Remote window does not match window')
                        if (!L(o, e)) throw new Error('Remote domain ' + o + ' does not match domain ' + e)
                        r.fireAndForget(i)
                    })
                }
                function je(n, e) {
                    De(n).reject(e).catch(sn)
                }
                function Ae(n) {
                    for (
                        var e = n.win,
                            r = n.name,
                            t = n.domain,
                            o = re('popupWindowsByName'),
                            i = ae('popupWindowsByWin'),
                            a = 0,
                            u = o.keys();
                        a < u.length;
                        a++
                    ) {
                        var c = u[a],
                            d = o.get(c)
                        ;(d && !T(d.win)) || o.del(c)
                    }
                    if (T(e)) return { win: e, name: r, domain: t }
                    var f = i.getOrSet(e, function () {
                        return r
                            ? o.getOrSet(r, function () {
                                return { win: e, name: r }
                            })
                            : { win: e }
                    })
                    if (f.win && f.win !== e) throw new Error('Different window already linked for window: ' + (r || 'undefined'))
                    return r && ((f.name = r), o.set(r, f)), t && ((f.domain = t), Se(e)), i.set(e, f), f
                }
                function ke(n) {
                    var e,
                        r = n.on,
                        t = n.send,
                        o = n.receiveMessage
                    ;(e = window.open),
                        (window.open = function (n, r, t, o) {
                            var i = e.call(
                                this,
                                (function (n) {
                                    if (0 !== B(n).indexOf('mock:')) return n
                                    throw new Error('Mock urls not supported out of test mode')
                                })(n),
                                r,
                                t,
                                o,
                            )
                            return i ? (Ae({ win: i, name: r, domain: n ? B(n) : null }), i) : i
                        }),
                        (function (n) {
                            var e = n.on,
                                r = n.send,
                                t = n.receiveMessage,
                                o = re('popupWindowsByName')
                            e('postrobot_open_tunnel', function (n) {
                                var i = n.source,
                                    a = n.origin,
                                    u = n.data,
                                    c = re('bridges').get(a)
                                if (!c) throw new Error('Can not find bridge promise for domain ' + a)
                                return c.then(function (n) {
                                    if (i !== n) throw new Error('Message source does not matched registered bridge for domain ' + a)
                                    if (!u.name) throw new Error('Register window expected to be passed window name')
                                    if (!u.sendMessage) throw new Error('Register window expected to be passed sendMessage method')
                                    if (!o.has(u.name))
                                        throw new Error('Window with name ' + u.name + ' does not exist, or was not opened by this window')
                                    var c = function () {
                                        return o.get(u.name)
                                    }
                                    if (!c().domain) throw new Error('We do not have a registered domain for window ' + u.name)
                                    if (c().domain !== a)
                                        throw new Error(
                                            'Message origin ' + a + ' does not matched registered window origin ' + (c().domain || 'unknown'),
                                        )
                                    return (
                                        Ne(c().win, a, u.sendMessage),
                                            {
                                                sendMessage: function (n) {
                                                    if (window && !window.closed && c()) {
                                                        var o = c().domain
                                                        if (o)
                                                            try {
                                                                t({ data: n, origin: o, source: c().win }, { on: e, send: r })
                                                            } catch (n) {
                                                                h.reject(n)
                                                            }
                                                    }
                                                },
                                            }
                                    )
                                })
                            })
                        })({ on: r, send: t, receiveMessage: o }),
                        (function (n) {
                            var e = n.send
                            ne(window).openTunnelToParent = function (n) {
                                var r = n.name,
                                    t = n.source,
                                    o = n.canary,
                                    i = n.sendMessage,
                                    a = re('tunnelWindows'),
                                    u = b(window)
                                if (!u) throw new Error('No parent window found to open tunnel to')
                                var c = (function (n) {
                                    var e = n.name,
                                        r = n.source,
                                        t = n.canary,
                                        o = n.sendMessage
                                    !(function () {
                                        for (var n = re('tunnelWindows'), e = 0, r = n.keys(); e < r.length; e++) {
                                            var t = r[e]
                                            T(n[t].source) && n.del(t)
                                        }
                                    })()
                                    var i = tn()
                                    return re('tunnelWindows').set(i, { name: e, source: r, canary: t, sendMessage: o }), i
                                })({ name: r, source: t, canary: o, sendMessage: i })
                                return e(
                                    u,
                                    'postrobot_open_tunnel',
                                    {
                                        name: r,
                                        sendMessage: function () {
                                            var n = a.get(c)
                                            if (n && n.source && !T(n.source)) {
                                                try {
                                                    n.canary()
                                                } catch (n) {
                                                    return
                                                }
                                                n.sendMessage.apply(this, arguments)
                                            }
                                        },
                                    },
                                    { domain: '*' },
                                )
                            }
                        })({ send: t }),
                        (function (n) {
                            var e = n.on,
                                r = n.send,
                                t = n.receiveMessage
                            h.try(function () {
                                var n,
                                    o = E(window)
                                if (o && Pe({ win: o }))
                                    return (
                                        Se(o),
                                            ((n = o),
                                                ae('remoteBridgeAwaiters').getOrSet(n, function () {
                                                    return h.try(function () {
                                                        var e = I(n, Oe(P()))
                                                        if (e)
                                                            return O(e) && ne(C(e))
                                                                ? e
                                                                : new h(function (n) {
                                                                    var r, t
                                                                    ;(r = setInterval(function () {
                                                                        if (e && O(e) && ne(C(e))) return clearInterval(r), clearTimeout(t), n(e)
                                                                    }, 100)),
                                                                        (t = setTimeout(function () {
                                                                            return clearInterval(r), n()
                                                                        }, 2e3))
                                                                })
                                                    })
                                                })).then(function (n) {
                                                return n
                                                    ? window.name
                                                        ? ne(C(n))
                                                            .openTunnelToParent({
                                                                name: window.name,
                                                                source: window,
                                                                canary: function () {},
                                                                sendMessage: function (n) {
                                                                    try {
                                                                        window
                                                                    } catch (n) {
                                                                        return
                                                                    }
                                                                    if (window && !window.closed)
                                                                        try {
                                                                            t({ data: n, origin: this.origin, source: this.source }, { on: e, send: r })
                                                                        } catch (n) {
                                                                            h.reject(n)
                                                                        }
                                                                },
                                                            })
                                                            .then(function (n) {
                                                                var e = n.source,
                                                                    r = n.origin,
                                                                    t = n.data
                                                                if (e !== o) throw new Error('Source does not match opener')
                                                                Ne(e, r, t.sendMessage)
                                                            })
                                                            .catch(function (n) {
                                                                throw (je(o, n), n)
                                                            })
                                                        : je(o, new Error('Can not register with opener: window does not have a name'))
                                                    : je(o, new Error('Can not register with opener: no bridge found in opener'))
                                            })
                                    )
                            })
                        })({ on: r, send: t, receiveMessage: o })
                }
                function Te() {
                    for (var n = re('idToProxyWindow'), e = 0, r = n.keys(); e < r.length; e++) {
                        var t = r[e]
                        n.get(t).shouldClean() && n.del(t)
                    }
                }
                function Re(n, e) {
                    var r = e.send,
                        t = e.id,
                        o = void 0 === t ? tn() : t,
                        i = n.then(function (n) {
                            if (O(n)) return C(n).name
                        }),
                        a = n.then(function (n) {
                            if (T(n)) throw new Error('Window is closed, can not determine type')
                            return E(n) ? 'popup' : 'iframe'
                        })
                    i.catch(sn), a.catch(sn)
                    var u = function () {
                        return n.then(function (n) {
                            if (!T(n)) return O(n) ? C(n).name : i
                        })
                    }
                    return {
                        id: o,
                        getType: function () {
                            return a
                        },
                        getInstanceID: fn(function () {
                            return n.then(function (n) {
                                return fe(n, { send: r })
                            })
                        }),
                        close: function () {
                            return n.then(H)
                        },
                        getName: u,
                        focus: function () {
                            return n.then(function (n) {
                                n.focus()
                            })
                        },
                        isClosed: function () {
                            return n.then(function (n) {
                                return T(n)
                            })
                        },
                        setLocation: function (e, r) {
                            return (
                                void 0 === r && (r = {}),
                                    n.then(function (n) {
                                        var t = window.location.protocol + '//' + window.location.host,
                                            o = r.method,
                                            i = void 0 === o ? 'get' : o,
                                            a = r.body
                                        if (0 === e.indexOf('/')) e = '' + t + e
                                        else if (!e.match(/^https?:\/\//) && 0 !== e.indexOf(t))
                                            throw new Error('Expected url to be http or https url, or absolute path, got ' + JSON.stringify(e))
                                        if ('post' === i)
                                            return u().then(function (n) {
                                                if (!n) throw new Error('Can not post to window without target name')
                                                !(function (n) {
                                                    var e = n.url,
                                                        r = n.target,
                                                        t = n.body,
                                                        o = n.method,
                                                        i = void 0 === o ? 'post' : o,
                                                        a = document.createElement('form')
                                                    if (
                                                        (a.setAttribute('target', r),
                                                            a.setAttribute('method', i),
                                                            a.setAttribute('action', e),
                                                            (a.style.display = 'none'),
                                                            t)
                                                    )
                                                        for (var u = 0, c = Object.keys(t); u < c.length; u++) {
                                                            var d,
                                                                f = c[u],
                                                                s = document.createElement('input')
                                                            s.setAttribute('name', f),
                                                                s.setAttribute('value', null == (d = t[f]) ? void 0 : d.toString()),
                                                                a.appendChild(s)
                                                        }
                                                    On().appendChild(a), a.submit(), On().removeChild(a)
                                                })({ url: e, target: n, method: i, body: a })
                                            })
                                        if ('get' !== i) throw new Error('Unsupported method: ' + i)
                                        if (O(n))
                                            try {
                                                if (n.location && 'function' == typeof n.location.replace) return void n.location.replace(e)
                                            } catch (n) {}
                                        n.location = e
                                    })
                            )
                        },
                        setName: function (e) {
                            return n.then(function (n) {
                                Ae({ win: n, name: e })
                                var r = O(n),
                                    t = J(n)
                                if (!r) throw new Error('Can not set name for cross-domain window: ' + e)
                                    ;(C(n).name = e), t && t.setAttribute('name', e), (i = h.resolve(e))
                            })
                        },
                    }
                }
                var Ie = (function () {
                    function n(n) {
                        var e = n.send,
                            r = n.win,
                            t = n.serializedWindow
                        ;(this.id = void 0),
                            (this.isProxyWindow = !0),
                            (this.serializedWindow = void 0),
                            (this.actualWindow = void 0),
                            (this.actualWindowPromise = void 0),
                            (this.send = void 0),
                            (this.name = void 0),
                            (this.actualWindowPromise = new h()),
                            (this.serializedWindow = t || Re(this.actualWindowPromise, { send: e })),
                            re('idToProxyWindow').set(this.getID(), this),
                        r && this.setWindow(r, { send: e })
                    }
                    var e = n.prototype
                    return (
                        (e.getID = function () {
                            return this.serializedWindow.id
                        }),
                            (e.getType = function () {
                                return this.serializedWindow.getType()
                            }),
                            (e.isPopup = function () {
                                return this.getType().then(function (n) {
                                    return 'popup' === n
                                })
                            }),
                            (e.setLocation = function (n, e) {
                                var r = this
                                return this.serializedWindow.setLocation(n, e).then(function () {
                                    return r
                                })
                            }),
                            (e.getName = function () {
                                return this.serializedWindow.getName()
                            }),
                            (e.setName = function (n) {
                                var e = this
                                return this.serializedWindow.setName(n).then(function () {
                                    return e
                                })
                            }),
                            (e.close = function () {
                                var n = this
                                return this.serializedWindow.close().then(function () {
                                    return n
                                })
                            }),
                            (e.focus = function () {
                                var n = this,
                                    e = this.isPopup(),
                                    r = this.getName(),
                                    t = h.hash({ isPopup: e, name: r }).then(function (n) {
                                        var e = n.name
                                        n.isPopup && e && window.open('', e, 'noopener')
                                    }),
                                    o = this.serializedWindow.focus()
                                return h.all([t, o]).then(function () {
                                    return n
                                })
                            }),
                            (e.isClosed = function () {
                                return this.serializedWindow.isClosed()
                            }),
                            (e.getWindow = function () {
                                return this.actualWindow
                            }),
                            (e.setWindow = function (n, e) {
                                var r = e.send
                                ;(this.actualWindow = n),
                                    this.actualWindowPromise.resolve(this.actualWindow),
                                    (this.serializedWindow = Re(this.actualWindowPromise, { send: r, id: this.getID() })),
                                    ae('winToProxyWindow').set(n, this)
                            }),
                            (e.awaitWindow = function () {
                                return this.actualWindowPromise
                            }),
                            (e.matchWindow = function (n, e) {
                                var r = this,
                                    t = e.send
                                return h.try(function () {
                                    return r.actualWindow
                                        ? n === r.actualWindow
                                        : h
                                            .hash({ proxyInstanceID: r.getInstanceID(), knownWindowInstanceID: fe(n, { send: t }) })
                                            .then(function (e) {
                                                var o = e.proxyInstanceID === e.knownWindowInstanceID
                                                return o && r.setWindow(n, { send: t }), o
                                            })
                                })
                            }),
                            (e.unwrap = function () {
                                return this.actualWindow || this
                            }),
                            (e.getInstanceID = function () {
                                return this.serializedWindow.getInstanceID()
                            }),
                            (e.shouldClean = function () {
                                return Boolean(this.actualWindow && T(this.actualWindow))
                            }),
                            (e.serialize = function () {
                                return this.serializedWindow
                            }),
                            (n.unwrap = function (e) {
                                return n.isProxyWindow(e) ? e.unwrap() : e
                            }),
                            (n.serialize = function (e, r) {
                                var t = r.send
                                return Te(), n.toProxyWindow(e, { send: t }).serialize()
                            }),
                            (n.deserialize = function (e, r) {
                                var t = r.send
                                return Te(), re('idToProxyWindow').get(e.id) || new n({ serializedWindow: e, send: t })
                            }),
                            (n.isProxyWindow = function (n) {
                                return Boolean(n && !q(n) && n.isProxyWindow)
                            }),
                            (n.toProxyWindow = function (e, r) {
                                var t = r.send
                                if ((Te(), n.isProxyWindow(e))) return e
                                var o = e
                                return ae('winToProxyWindow').get(o) || new n({ win: o, send: t })
                            }),
                            n
                    )
                })()
                function ze(n, e, r, t, o) {
                    var i = ae('methodStore'),
                        a = re('proxyWindowMethods')
                    Ie.isProxyWindow(t)
                        ? a.set(n, { val: e, name: r, domain: o, source: t })
                        : (a.del(n),
                            (i.getOrSet(t, function () {
                                return {}
                            })[n] = { domain: o, name: r, val: e, source: t }))
                }
                function Fe(n, e) {
                    var r = ae('methodStore'),
                        t = re('proxyWindowMethods')
                    return (
                        r.getOrSet(n, function () {
                            return {}
                        })[e] || t.get(e)
                    )
                }
                function Me(n, e, r, t, o) {
                    var i, a, u
                    ;(a = (i = { on: o.on, send: o.send }).on),
                        (u = i.send),
                        re('builtinListeners').getOrSet('functionCalls', function () {
                            return a('postrobot_method', { domain: '*' }, function (n) {
                                var e = n.source,
                                    r = n.origin,
                                    t = n.data,
                                    o = t.id,
                                    i = t.name,
                                    a = Fe(e, o)
                                if (!a) throw new Error("Could not find method '" + i + "' with id: " + t.id + ' in ' + P(window))
                                var c = a.source,
                                    d = a.domain,
                                    f = a.val
                                return h
                                    .try(function () {
                                        if (!L(d, r))
                                            throw new Error(
                                                "Method '" +
                                                t.name +
                                                "' domain " +
                                                JSON.stringify(bn(a.domain) ? a.domain.source : a.domain) +
                                                ' does not match origin ' +
                                                r +
                                                ' in ' +
                                                P(window),
                                            )
                                        if (Ie.isProxyWindow(c))
                                            return c.matchWindow(e, { send: u }).then(function (n) {
                                                if (!n)
                                                    throw new Error(
                                                        "Method call '" + t.name + "' failed - proxy window does not match source in " + P(window),
                                                    )
                                            })
                                    })
                                    .then(
                                        function () {
                                            return f.apply({ source: e, origin: r }, t.args)
                                        },
                                        function (n) {
                                            return h
                                                .try(function () {
                                                    if (f.onError) return f.onError(n)
                                                })
                                                .then(function () {
                                                    var e
                                                    throw (
                                                        (n.stack &&
                                                        (n.stack =
                                                            'Remote call to ' +
                                                            i +
                                                            '(' +
                                                            (void 0 === (e = t.args) && (e = []),
                                                            yn(e)
                                                                .map(function (n) {
                                                                    return 'string' == typeof n
                                                                        ? "'" + n + "'"
                                                                        : void 0 === n
                                                                            ? 'undefined'
                                                                            : null === n
                                                                                ? 'null'
                                                                                : 'boolean' == typeof n
                                                                                    ? n.toString()
                                                                                    : Array.isArray(n)
                                                                                        ? '[ ... ]'
                                                                                        : 'object' == typeof n
                                                                                            ? '{ ... }'
                                                                                            : 'function' == typeof n
                                                                                                ? '() => { ... }'
                                                                                                : '<' + typeof n + '>'
                                                                })
                                                                .join(', ') + ') failed\n\n') +
                                                            n.stack),
                                                            n)
                                                    )
                                                })
                                        },
                                    )
                                    .then(function (n) {
                                        return { result: n, id: o, name: i }
                                    })
                            })
                        })
                    var c = r.__id__ || tn()
                    n = Ie.unwrap(n)
                    var d = r.__name__ || r.name || t
                    return (
                        'string' == typeof d &&
                        'function' == typeof d.indexOf &&
                        0 === d.indexOf('anonymous::') &&
                        (d = d.replace('anonymous::', t + '::')),
                            Ie.isProxyWindow(n)
                                ? (ze(c, r, d, n, e),
                                    n.awaitWindow().then(function (n) {
                                        ze(c, r, d, n, e)
                                    }))
                                : ze(c, r, d, n, e),
                            pe('cross_domain_function', { id: c, name: d })
                    )
                }
                function Ue(n, e, r, t) {
                    var o,
                        i = t.on,
                        a = t.send
                    return (function (n, e) {
                        void 0 === e && (e = ye)
                        var r = JSON.stringify(n, function (n) {
                            var r = this[n]
                            if (we(this)) return r
                            var t = he(r)
                            if (!t) return r
                            var o = e[t] || me[t]
                            return o ? o(r, n) : r
                        })
                        return void 0 === r ? 'undefined' : r
                    })(
                        r,
                        (((o = {}).promise = function (r, t) {
                            return (function (n, e, r, t, o) {
                                return pe('cross_domain_zalgo_promise', {
                                    then: Me(
                                        n,
                                        e,
                                        function (n, e) {
                                            return r.then(n, e)
                                        },
                                        t,
                                        { on: o.on, send: o.send },
                                    ),
                                })
                            })(n, e, r, t, { on: i, send: a })
                        }),
                            (o.function = function (r, t) {
                                return Me(n, e, r, t, { on: i, send: a })
                            }),
                            (o.object = function (n) {
                                return q(n) || Ie.isProxyWindow(n) ? pe('cross_domain_window', Ie.serialize(n, { send: a })) : n
                            }),
                            o),
                    )
                }
                function Le(n, e, r, t) {
                    var o,
                        i = t.send
                    return (function (n, e) {
                        if ((void 0 === e && (e = be), 'undefined' !== n))
                            return JSON.parse(n, function (n, r) {
                                if (we(this)) return r
                                var t, o
                                if ((we(r) ? ((t = r.__type__), (o = r.__val__)) : ((t = he(r)), (o = r)), !t)) return o
                                var i = e[t] || ge[t]
                                return i ? i(o, n) : o
                            })
                    })(
                        r,
                        (((o = {}).cross_domain_zalgo_promise = function (n) {
                            return (function (n, e, r) {
                                return new h(r.then)
                            })(0, 0, n)
                        }),
                            (o.cross_domain_function = function (r) {
                                return (function (n, e, r, t) {
                                    var o = r.id,
                                        i = r.name,
                                        a = t.send,
                                        u = function (r) {
                                            function t() {
                                                var u = arguments
                                                return Ie.toProxyWindow(n, { send: a })
                                                    .awaitWindow()
                                                    .then(function (n) {
                                                        var c = Fe(n, o)
                                                        if (c && c.val !== t) return c.val.apply({ source: window, origin: P() }, u)
                                                        var d = [].slice.call(u)
                                                        return r.fireAndForget
                                                            ? a(n, 'postrobot_method', { id: o, name: i, args: d }, { domain: e, fireAndForget: !0 })
                                                            : a(
                                                                n,
                                                                'postrobot_method',
                                                                { id: o, name: i, args: d },
                                                                { domain: e, fireAndForget: !1 },
                                                            ).then(function (n) {
                                                                return n.data.result
                                                            })
                                                    })
                                                    .catch(function (n) {
                                                        throw n
                                                    })
                                            }
                                            return (
                                                void 0 === r && (r = {}),
                                                    (t.__name__ = i),
                                                    (t.__origin__ = e),
                                                    (t.__source__ = n),
                                                    (t.__id__ = o),
                                                    (t.origin = e),
                                                    t
                                            )
                                        },
                                        c = u()
                                    return (c.fireAndForget = u({ fireAndForget: !0 })), c
                                })(n, e, r, { send: i })
                            }),
                            (o.cross_domain_window = function (n) {
                                return Ie.deserialize(n, { send: i })
                            }),
                            o),
                    )
                }
                var Be = {}
                function qe(n, e, r, t) {
                    var o = t.on,
                        i = t.send
                    return h
                        .try(function () {
                            var t = ae().getOrSet(n, function () {
                                return {}
                            })
                            return (
                                (t.buffer = t.buffer || []),
                                    t.buffer.push(r),
                                    (t.flush =
                                        t.flush ||
                                        h.flush().then(function () {
                                            if (T(n)) throw new Error('Window is closed')
                                            var r,
                                                a = Ue(n, e, (((r = {}).__post_robot_10_0_46__ = t.buffer || []), r), { on: o, send: i })
                                            delete t.buffer
                                            for (var u = Object.keys(Be), c = [], d = 0; d < u.length; d++) {
                                                var f = u[d]
                                                try {
                                                    Be[f](n, a, e)
                                                } catch (n) {
                                                    c.push(n)
                                                }
                                            }
                                            if (c.length === u.length)
                                                throw new Error(
                                                    'All post-robot messaging strategies failed:\n\n' +
                                                    c
                                                        .map(function (n, e) {
                                                            return e + '. ' + wn(n)
                                                        })
                                                        .join('\n\n'),
                                                )
                                        })),
                                    t.flush.then(function () {
                                        delete t.flush
                                    })
                            )
                        })
                        .then(sn)
                }
                function Je(n) {
                    return re('responseListeners').get(n)
                }
                function He(n) {
                    re('responseListeners').del(n)
                }
                function Ye(n) {
                    return re('erroredResponseListeners').has(n)
                }
                function Ze(n) {
                    var e = n.name,
                        r = n.win,
                        t = n.domain,
                        o = ae('requestListeners')
                    if (('*' === r && (r = null), '*' === t && (t = null), !e))
                        throw new Error('Name required to get request listener')
                    for (var i = 0, a = [r, ie()]; i < a.length; i++) {
                        var u = a[i]
                        if (u) {
                            var c = o.get(u)
                            if (c) {
                                var d = c[e]
                                if (d) {
                                    if (t && 'string' == typeof t) {
                                        if (d[t]) return d[t]
                                        if (d.__domain_regex__)
                                            for (var f = 0, s = d.__domain_regex__; f < s.length; f++) {
                                                var l = s[f],
                                                    w = l.listener
                                                if (L(l.regex, t)) return w
                                            }
                                    }
                                    if (d['*']) return d['*']
                                }
                            }
                        }
                    }
                }
                function Ge(n, e, r, t) {
                    var o = t.on,
                        i = t.send,
                        a = Ze({ name: r.name, win: n, domain: e }),
                        u = 'postrobot_method' === r.name && r.data && 'string' == typeof r.data.name ? r.data.name + '()' : r.name
                    function c(t, a, c) {
                        return h.flush().then(function () {
                            if (!r.fireAndForget && !T(n))
                                try {
                                    return qe(
                                        n,
                                        e,
                                        {
                                            id: tn(),
                                            origin: P(window),
                                            type: 'postrobot_message_response',
                                            hash: r.hash,
                                            name: r.name,
                                            ack: t,
                                            data: a,
                                            error: c,
                                        },
                                        { on: o, send: i },
                                    )
                                } catch (n) {
                                    throw new Error('Send response message failed for ' + u + ' in ' + P() + '\n\n' + wn(n))
                                }
                        })
                    }
                    return h
                        .all([
                            h.flush().then(function () {
                                if (!r.fireAndForget && !T(n))
                                    try {
                                        return qe(
                                            n,
                                            e,
                                            { id: tn(), origin: P(window), type: 'postrobot_message_ack', hash: r.hash, name: r.name },
                                            { on: o, send: i },
                                        )
                                    } catch (n) {
                                        throw new Error('Send ack message failed for ' + u + ' in ' + P() + '\n\n' + wn(n))
                                    }
                            }),
                            h
                                .try(function () {
                                    if (!a)
                                        throw new Error(
                                            'No handler found for post message: ' +
                                            r.name +
                                            ' from ' +
                                            e +
                                            ' in ' +
                                            window.location.protocol +
                                            '//' +
                                            window.location.host +
                                            window.location.pathname,
                                        )
                                    return a.handler({ source: n, origin: e, data: r.data })
                                })
                                .then(
                                    function (n) {
                                        return c('success', n)
                                    },
                                    function (n) {
                                        return c('error', null, n)
                                    },
                                ),
                        ])
                        .then(sn)
                        .catch(function (n) {
                            if (a && a.handleError) return a.handleError(n)
                            throw n
                        })
                }
                function Ve(n, e, r) {
                    if (!Ye(r.hash)) {
                        var t = Je(r.hash)
                        if (!t)
                            throw new Error(
                                'No handler found for post message ack for message: ' +
                                r.name +
                                ' from ' +
                                e +
                                ' in ' +
                                window.location.protocol +
                                '//' +
                                window.location.host +
                                window.location.pathname,
                            )
                        try {
                            if (!L(t.domain, e)) throw new Error('Ack origin ' + e + ' does not match domain ' + t.domain.toString())
                            if (n !== t.win) throw new Error('Ack source does not match registered window')
                        } catch (n) {
                            t.promise.reject(n)
                        }
                        t.ack = !0
                    }
                }
                function Xe(n, e, r) {
                    if (!Ye(r.hash)) {
                        var t,
                            o = Je(r.hash)
                        if (!o)
                            throw new Error(
                                'No handler found for post message response for message: ' +
                                r.name +
                                ' from ' +
                                e +
                                ' in ' +
                                window.location.protocol +
                                '//' +
                                window.location.host +
                                window.location.pathname,
                            )
                        if (!L(o.domain, e))
                            throw new Error(
                                'Response origin ' +
                                e +
                                ' does not match domain ' +
                                ((t = o.domain),
                                    Array.isArray(t) ? '(' + t.join(' | ') + ')' : p(t) ? 'RegExp(' + t.toString() + ')' : t.toString()),
                            )
                        if (n !== o.win) throw new Error('Response source does not match registered window')
                        He(r.hash),
                            'error' === r.ack
                                ? o.promise.reject(r.error)
                                : 'success' === r.ack && o.promise.resolve({ source: n, origin: e, data: r.data })
                    }
                }
                function $e(n, e) {
                    var r = e.on,
                        t = e.send,
                        o = re('receivedMessages')
                    try {
                        if (!window || window.closed || !n.source) return
                    } catch (n) {
                        return
                    }
                    var i = n.source,
                        a = n.origin,
                        u = (function (n, e, r, t) {
                            var o,
                                i = t.on,
                                a = t.send
                            try {
                                o = Le(e, r, n, { on: i, send: a })
                            } catch (n) {
                                return
                            }
                            if (o && 'object' == typeof o && null !== o) {
                                var u = o.__post_robot_10_0_46__
                                if (Array.isArray(u)) return u
                            }
                        })(n.data, i, a, { on: r, send: t })
                    if (u) {
                        le(i)
                        for (var c = 0; c < u.length; c++) {
                            var d = u[c]
                            if (o.has(d.id)) return
                            if ((o.set(d.id, !0), T(i) && !d.fireAndForget)) return
                            0 === d.origin.indexOf('file:') && (a = 'file://')
                            try {
                                'postrobot_message_request' === d.type
                                    ? Ge(i, a, d, { on: r, send: t })
                                    : 'postrobot_message_response' === d.type
                                    ? Xe(i, a, d)
                                    : 'postrobot_message_ack' === d.type && Ve(i, a, d)
                            } catch (n) {
                                setTimeout(function () {
                                    throw n
                                }, 0)
                            }
                        }
                    }
                }
                function Ke(n, e, r) {
                    if (!n) throw new Error('Expected name')
                    if (('function' == typeof (e = e || {}) && ((r = e), (e = {})), !r)) throw new Error('Expected handler')
                    var t = (function n(e, r) {
                        var t = e.name,
                            o = e.win,
                            i = e.domain,
                            a = ae('requestListeners')
                        if (!t || 'string' != typeof t) throw new Error('Name required to add request listener')
                        if (o && '*' !== o && Ie.isProxyWindow(o)) {
                            var u = o.awaitWindow().then(function (e) {
                                return n({ name: t, win: e, domain: i }, r)
                            })
                            return {
                                cancel: function () {
                                    u.then(function (n) {
                                        return n.cancel()
                                    }, sn)
                                },
                            }
                        }
                        var c = o
                        if (Array.isArray(c)) {
                            for (var d = [], f = 0, s = c; f < s.length; f++) d.push(n({ name: t, domain: i, win: s[f] }, r))
                            return {
                                cancel: function () {
                                    for (var n = 0; n < d.length; n++) d[n].cancel()
                                },
                            }
                        }
                        if (Array.isArray(i)) {
                            for (var l = [], w = 0, h = i; w < h.length; w++) l.push(n({ name: t, win: c, domain: h[w] }, r))
                            return {
                                cancel: function () {
                                    for (var n = 0; n < l.length; n++) l[n].cancel()
                                },
                            }
                        }
                        var p = Ze({ name: t, win: c, domain: i })
                        ;(c && '*' !== c) || (c = ie())
                        var v = (i = i || '*').toString()
                        if (p)
                            throw c && i
                                ? new Error(
                                    'Request listener already exists for ' +
                                    t +
                                    ' on domain ' +
                                    i.toString() +
                                    ' for ' +
                                    (c === ie() ? 'wildcard' : 'specified') +
                                    ' window',
                                )
                                : c
                                    ? new Error(
                                        'Request listener already exists for ' +
                                        t +
                                        ' for ' +
                                        (c === ie() ? 'wildcard' : 'specified') +
                                        ' window',
                                    )
                                    : i
                                        ? new Error('Request listener already exists for ' + t + ' on domain ' + i.toString())
                                        : new Error('Request listener already exists for ' + t)
                        var m,
                            y,
                            g = a.getOrSet(c, function () {
                                return {}
                            }),
                            b = En(g, t, function () {
                                return {}
                            })
                        return (
                            bn(i)
                                ? (m = En(b, '__domain_regex__', function () {
                                    return []
                                })).push((y = { regex: i, listener: r }))
                                : (b[v] = r),
                                {
                                    cancel: function () {
                                        delete b[v],
                                        y && (m.splice(m.indexOf(y, 1)), m.length || delete b.__domain_regex__),
                                        Object.keys(b).length || delete g[t],
                                        c && !Object.keys(g).length && a.del(c)
                                    },
                                }
                        )
                    })(
                        { name: n, win: e.window, domain: e.domain || '*' },
                        {
                            handler: r || e.handler,
                            handleError:
                                e.errorHandler ||
                                function (n) {
                                    throw n
                                },
                        },
                    )
                    return {
                        cancel: function () {
                            t.cancel()
                        },
                    }
                }
                ;(Be.postrobot_post_message = function (n, e, r) {
                    0 === r.indexOf('file:') && (r = '*'), n.postMessage(e, r)
                }),
                    (Be.postrobot_bridge = function (n, e, r) {
                        if (!Ee() && !Ce()) throw new Error('Bridge not needed for browser')
                        if (O(n)) throw new Error('Post message through bridge disabled between same domain windows')
                        if (!1 !== U(window, n))
                            throw new Error('Can only use bridge to communicate between two different windows, not between frames')
                        !(function (n, e, r) {
                            var t = z(window, n),
                                o = z(n, window)
                            if (!t && !o) throw new Error('Can only send messages to and from parent and popup windows')
                            De(n).then(function (t) {
                                return t(n, e, r)
                            })
                        })(n, r, e)
                    }),
                    (Be.postrobot_global = function (n, e) {
                        if (!R(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i))
                            throw new Error('Global messaging not needed for browser')
                        if (!O(n)) throw new Error('Post message through global disabled between different domain windows')
                        if (!1 !== U(window, n))
                            throw new Error('Can only use global to communicate between two different windows, not between frames')
                        var r = ne(n)
                        if (!r) throw new Error('Can not find postRobot global on foreign window')
                        r.receiveMessage({ source: window, origin: P(), data: e })
                    })
                var Qe,
                    nr = function n(e, r, t, o) {
                        var i = (o = o || {}).domain || '*',
                            a = o.timeout || -1,
                            u = o.timeout || 5e3,
                            c = o.fireAndForget || !1
                        return Ie.toProxyWindow(e, { send: n })
                            .awaitWindow()
                            .then(function (e) {
                                return h
                                    .try(function () {
                                        if (
                                            ((function (n, e, r) {
                                                if (!n) throw new Error('Expected name')
                                                if (r && 'string' != typeof r && !Array.isArray(r) && !bn(r))
                                                    throw new TypeError(
                                                        'Can not send ' +
                                                        n +
                                                        '. Expected domain ' +
                                                        JSON.stringify(r) +
                                                        ' to be a string, array, or regex',
                                                    )
                                                if (T(e)) throw new Error('Can not send ' + n + '. Target window is closed')
                                            })(r, e, i),
                                                (function (n, e) {
                                                    var r = F(e)
                                                    if (r) return r === n
                                                    if (e === n) return !1
                                                    if (N(e) === e) return !1
                                                    for (var t = 0, o = S(n); t < o.length; t++) if (o[t] === e) return !0
                                                    return !1
                                                })(window, e))
                                        )
                                            return se(e, u)
                                    })
                                    .then(function (r) {
                                        return (function (n, e, r, t) {
                                            var o = t.send
                                            return h.try(function () {
                                                return 'string' == typeof e
                                                    ? e
                                                    : h
                                                        .try(function () {
                                                            return (
                                                                r ||
                                                                de(n, { send: o }).then(function (n) {
                                                                    return n.domain
                                                                })
                                                            )
                                                        })
                                                        .then(function (n) {
                                                            if (!L(e, e)) throw new Error('Domain ' + hn(e) + ' does not match ' + hn(e))
                                                            return n
                                                        })
                                            })
                                        })(e, i, (void 0 === r ? {} : r).domain, { send: n })
                                    })
                                    .then(function (o) {
                                        var i = o,
                                            u = 'postrobot_method' === r && t && 'string' == typeof t.name ? t.name + '()' : r,
                                            d = new h(),
                                            f = r + '_' + tn()
                                        if (!c) {
                                            var s = { name: r, win: e, domain: i, promise: d }
                                            !(function (n, e) {
                                                re('responseListeners').set(n, e)
                                            })(f, s)
                                            var l = ae('requestPromises').getOrSet(e, function () {
                                                return []
                                            })
                                            l.push(d),
                                                d.catch(function () {
                                                    !(function (n) {
                                                        re('erroredResponseListeners').set(n, !0)
                                                    })(f),
                                                        He(f)
                                                })
                                            var w = (function (n) {
                                                    return ae('knownWindows').get(n, !1)
                                                })(e)
                                                ? 1e4
                                                : 2e3,
                                                p = a,
                                                v = w,
                                                m = p,
                                                y = mn(function () {
                                                    return T(e)
                                                        ? d.reject(new Error('Window closed for ' + r + ' before ' + (s.ack ? 'response' : 'ack')))
                                                        : s.cancelled
                                                            ? d.reject(new Error('Response listener was cancelled for ' + r))
                                                            : ((v = Math.max(v - 500, 0)),
                                                            -1 !== m && (m = Math.max(m - 500, 0)),
                                                                s.ack || 0 !== v
                                                                    ? 0 === m
                                                                    ? d.reject(
                                                                        new Error('No response for postMessage ' + u + ' in ' + P() + ' in ' + p + 'ms'),
                                                                    )
                                                                    : void 0
                                                                    : d.reject(new Error('No ack for postMessage ' + u + ' in ' + P() + ' in ' + w + 'ms')))
                                                }, 500)
                                            d.finally(function () {
                                                y.cancel(), l.splice(l.indexOf(d, 1))
                                            }).catch(sn)
                                        }
                                        return qe(
                                            e,
                                            i,
                                            {
                                                id: tn(),
                                                origin: P(window),
                                                type: 'postrobot_message_request',
                                                hash: f,
                                                name: r,
                                                data: t,
                                                fireAndForget: c,
                                            },
                                            { on: Ke, send: n },
                                        ).then(
                                            function () {
                                                return c ? d.resolve() : d
                                            },
                                            function (n) {
                                                throw new Error('Send request message failed for ' + u + ' in ' + P() + '\n\n' + wn(n))
                                            },
                                        )
                                    })
                            })
                    }
                function er(n) {
                    return Ie.toProxyWindow(n, { send: nr })
                }
                function rr(n) {
                    for (var e = 0, r = ae('requestPromises').get(n, []); e < r.length; e++)
                        r[e].reject(new Error('Window ' + (T(n) ? 'closed' : 'cleaned up') + ' before response')).catch(sn)
                }
                function tr(n) {
                    return '[object RegExp]' === {}.toString.call(n)
                }
                function or(n) {
                    return void 0 === n && (n = window), n.location.protocol
                }
                function ir(n) {
                    if ((void 0 === n && (n = window), n.mockDomain)) {
                        var e = n.mockDomain.split('//')[0]
                        if (e) return e
                    }
                    return or(n)
                }
                function ar(n) {
                    return void 0 === n && (n = window), 'about:' === ir(n)
                }
                function ur(n) {
                    if ((void 0 === n && (n = window), n))
                        try {
                            if (n.parent && n.parent !== n) return n.parent
                        } catch (n) {}
                }
                function cr(n) {
                    if ((void 0 === n && (n = window), n && !ur(n)))
                        try {
                            return n.opener
                        } catch (n) {}
                }
                function dr(n) {
                    try {
                        return !0
                    } catch (n) {}
                    return !1
                }
                function fr(n) {
                    void 0 === n && (n = window)
                    var e = n.location
                    if (!e) throw new Error('Can not read window location')
                    var r = or(n)
                    if (!r) throw new Error('Can not read window protocol')
                    if ('file:' === r) return 'file://'
                    if ('about:' === r) {
                        var t = ur(n)
                        return t && dr() ? fr(t) : 'about://'
                    }
                    var o = e.host
                    if (!o) throw new Error('Can not read window host')
                    return r + '//' + o
                }
                function sr(n) {
                    void 0 === n && (n = window)
                    var e = fr(n)
                    return e && n.mockDomain && 0 === n.mockDomain.indexOf('mock:') ? n.mockDomain : e
                }
                function lr(n) {
                    if (
                        !(function (n) {
                            try {
                                if (n === window) return !0
                            } catch (n) {}
                            try {
                                var e = Object.getOwnPropertyDescriptor(n, 'location')
                                if (e && !1 === e.enumerable) return !1
                            } catch (n) {}
                            try {
                                if (ar(n) && dr()) return !0
                            } catch (n) {}
                            try {
                                if (
                                    (function (n) {
                                        return void 0 === n && (n = window), 'mock:' === ir(n)
                                    })(n) &&
                                    dr()
                                )
                                    return !0
                            } catch (n) {}
                            try {
                                if (fr(n) === fr(window)) return !0
                            } catch (n) {}
                            return !1
                        })(n)
                    )
                        return !1
                    try {
                        if (n === window) return !0
                        if (ar(n) && dr()) return !0
                        if (sr(window) === sr(n)) return !0
                    } catch (n) {}
                    return !1
                }
                function wr(n) {
                    if (!lr(n)) throw new Error('Expected window to be same domain')
                    return n
                }
                function hr(n, e) {
                    if (!n || !e) return !1
                    var r = ur(e)
                    return r
                        ? r === n
                        : -1 !==
                        (function (n) {
                            var e = []
                            try {
                                for (; n.parent !== n; ) e.push(n.parent), (n = n.parent)
                            } catch (n) {}
                            return e
                        })(e).indexOf(n)
                }
                function pr(n) {
                    var e,
                        r,
                        t = []
                    try {
                        e = n.frames
                    } catch (r) {
                        e = n
                    }
                    try {
                        r = e.length
                    } catch (n) {}
                    if (0 === r) return t
                    if (r) {
                        for (var o = 0; o < r; o++) {
                            var i = void 0
                            try {
                                i = e[o]
                            } catch (n) {
                                continue
                            }
                            t.push(i)
                        }
                        return t
                    }
                    for (var a = 0; a < 100; a++) {
                        var u = void 0
                        try {
                            u = e[a]
                        } catch (n) {
                            return t
                        }
                        if (!u) return t
                        t.push(u)
                    }
                    return t
                }
                function vr(n) {
                    for (var e = [], r = 0, t = pr(n); r < t.length; r++) {
                        var o = t[r]
                        e.push(o)
                        for (var i = 0, a = vr(o); i < a.length; i++) e.push(a[i])
                    }
                    return e
                }
                function mr(n) {
                    void 0 === n && (n = window)
                    try {
                        if (n.top) return n.top
                    } catch (n) {}
                    if (ur(n) === n) return n
                    try {
                        if (hr(window, n) && window.top) return window.top
                    } catch (n) {}
                    try {
                        if (hr(n, window) && window.top) return window.top
                    } catch (n) {}
                    for (var e = 0, r = vr(n); e < r.length; e++) {
                        var t = r[e]
                        try {
                            if (t.top) return t.top
                        } catch (n) {}
                        if (ur(t) === t) return t
                    }
                }
                function yr(n) {
                    var e = mr(n)
                    if (!e) throw new Error('Can not determine top window')
                    var r = [].concat(vr(e), [e])
                    return -1 === r.indexOf(n) && (r = [].concat(r, [n], vr(n))), r
                }
                Qe = {
                    setupBridge: ke,
                    openBridge: function (n, e) {
                        var r = re('bridges'),
                            t = re('bridgeFrames')
                        return (
                            (e = e || B(n)),
                                r.getOrSet(e, function () {
                                    return h.try(function () {
                                        if (P() === e) throw new Error('Can not open bridge on the same domain as current domain: ' + e)
                                        var r = Oe(e)
                                        if (I(window, r)) throw new Error('Frame with name ' + r + ' already exists on page')
                                        var o = (function (n, e) {
                                            var r = document.createElement('iframe')
                                            return (
                                                r.setAttribute('name', n),
                                                    r.setAttribute('id', n),
                                                    r.setAttribute(
                                                        'style',
                                                        'display: none; margin: 0; padding: 0; border: 0px none; overflow: hidden;',
                                                    ),
                                                    r.setAttribute('frameborder', '0'),
                                                    r.setAttribute('border', '0'),
                                                    r.setAttribute('scrolling', 'no'),
                                                    r.setAttribute('allowTransparency', 'true'),
                                                    r.setAttribute('tabindex', '-1'),
                                                    r.setAttribute('hidden', 'true'),
                                                    r.setAttribute('title', ''),
                                                    r.setAttribute('role', 'presentation'),
                                                    (r.src = e),
                                                    r
                                            )
                                        })(r, n)
                                        return (
                                            t.set(e, o),
                                                We.then(function (e) {
                                                    e.appendChild(o)
                                                    var r = o.contentWindow
                                                    return new h(function (n, e) {
                                                        o.addEventListener('load', n), o.addEventListener('error', e)
                                                    })
                                                        .then(function () {
                                                            return se(r, 5e3, 'Bridge ' + n)
                                                        })
                                                        .then(function () {
                                                            return r
                                                        })
                                                })
                                        )
                                    })
                                })
                        )
                    },
                    linkWindow: Ae,
                    linkUrl: function (n, e) {
                        Ae({ win: n, domain: B(e) })
                    },
                    isBridge: Ce,
                    needsBridge: Pe,
                    needsBridgeForBrowser: Ee,
                    hasBridge: function (n, e) {
                        return re('bridges').has(e || B(n))
                    },
                    needsBridgeForWin: _e,
                    needsBridgeForDomain: xe,
                    destroyBridges: function () {
                        for (var n = re('bridges'), e = re('bridgeFrames'), r = 0, t = e.keys(); r < t.length; r++) {
                            var o = e.get(t[r])
                            o && o.parentNode && o.parentNode.removeChild(o)
                        }
                        e.reset(), n.reset()
                    },
                }
                var gr = [],
                    br = []
                function Er(n, e) {
                    void 0 === e && (e = !0)
                    try {
                        if (n === window) return !1
                    } catch (n) {
                        return !0
                    }
                    try {
                        if (!n) return !0
                    } catch (n) {
                        return !0
                    }
                    try {
                        if (n.closed) return !0
                    } catch (n) {
                        return !n || 'Call was rejected by callee.\r\n' !== n.message
                    }
                    if (e && lr(n))
                        try {
                            if (n.mockclosed) return !0
                        } catch (n) {}
                    try {
                        if (!n.parent || !n.top) return !0
                    } catch (n) {}
                    var r = (function (n, e) {
                        for (var r = 0; r < n.length; r++)
                            try {
                                if (n[r] === e) return r
                            } catch (n) {}
                        return -1
                    })(gr, n)
                    if (-1 !== r) {
                        var t = br[r]
                        if (
                            t &&
                            (function (n) {
                                if (!n.contentWindow) return !0
                                if (!n.parentNode) return !0
                                var e = n.ownerDocument
                                if (e && e.documentElement && !e.documentElement.contains(n)) {
                                    for (var r = n; r.parentNode && r.parentNode !== r; ) r = r.parentNode
                                    if (!r.host || !e.documentElement.contains(r.host)) return !0
                                }
                                return !1
                            })(t)
                        )
                            return !0
                    }
                    return !1
                }
                function _r(n, e) {
                    for (var r = pr(n), t = 0; t < r.length; t++) {
                        var o = r[t]
                        try {
                            if (lr(o) && o.name === e && -1 !== r.indexOf(o)) return o
                        } catch (n) {}
                    }
                    try {
                        if (-1 !== r.indexOf(n.frames[e])) return n.frames[e]
                    } catch (n) {}
                    try {
                        if (-1 !== r.indexOf(n[e])) return n[e]
                    } catch (n) {}
                }
                function xr(n) {
                    return void 0 === n && (n = window), cr((n = n || window)) || ur(n) || void 0
                }
                function Pr(n, e) {
                    for (var r = 0; r < n.length; r++) for (var t = n[r], o = 0; o < e.length; o++) if (t === e[o]) return !0
                    return !1
                }
                function Or(n) {
                    void 0 === n && (n = window)
                    for (var e = 0, r = n; r; ) (r = ur(r)) && (e += 1)
                    return e
                }
                function Cr(n, e) {
                    if ('string' == typeof n) {
                        if ('string' == typeof e) return '*' === n || e === n
                        if (tr(e)) return !1
                        if (Array.isArray(e)) return !1
                    }
                    return tr(n)
                        ? tr(e)
                            ? n.toString() === e.toString()
                            : !Array.isArray(e) && Boolean(e.match(n))
                        : !!Array.isArray(n) &&
                        (Array.isArray(e)
                            ? JSON.stringify(n) === JSON.stringify(e)
                            : !tr(e) &&
                            n.some(function (n) {
                                return Cr(n, e)
                            }))
                }
                function Wr(n) {
                    return n.match(/^(https?|mock|file):\/\//) ? n.split('/').slice(0, 3).join('/') : sr()
                }
                function Sr(n, e, r, t) {
                    var o
                    return (
                        void 0 === r && (r = 1e3),
                        void 0 === t && (t = 1 / 0),
                            (function i() {
                                if (Er(n)) return o && clearTimeout(o), e()
                                t <= 0 ? clearTimeout(o) : ((t -= r), (o = setTimeout(i, r)))
                            })(),
                            {
                                cancel: function () {
                                    o && clearTimeout(o)
                                },
                            }
                    )
                }
                function Dr(n) {
                    try {
                        if (n === window) return !0
                    } catch (n) {
                        if (n && 'Call was rejected by callee.\r\n' === n.message) return !0
                    }
                    try {
                        if ('[object Window]' === {}.toString.call(n)) return !0
                    } catch (n) {
                        if (n && 'Call was rejected by callee.\r\n' === n.message) return !0
                    }
                    try {
                        if (window.Window && n instanceof window.Window) return !0
                    } catch (n) {
                        if (n && 'Call was rejected by callee.\r\n' === n.message) return !0
                    }
                    try {
                        if (n && n.self === n) return !0
                    } catch (n) {
                        if (n && 'Call was rejected by callee.\r\n' === n.message) return !0
                    }
                    try {
                        if (n && n.parent === n) return !0
                    } catch (n) {
                        if (n && 'Call was rejected by callee.\r\n' === n.message) return !0
                    }
                    try {
                        if (n && n.top === n) return !0
                    } catch (n) {
                        if (n && 'Call was rejected by callee.\r\n' === n.message) return !0
                    }
                    try {
                        if (n && '__unlikely_value__' === n.__cross_domain_utils_window_check__) return !1
                    } catch (n) {
                        return !0
                    }
                    try {
                        if ('postMessage' in n && 'self' in n && 'location' in n) return !0
                    } catch (n) {}
                    return !1
                }
                function Nr(n) {
                    if (0 !== Wr(n).indexOf('mock:')) return n
                    throw new Error('Mock urls not supported out of test mode')
                }
                function jr(n) {
                    if (!lr(n)) throw new Error('Can not get global for window on different domain')
                    return n.__zoid_9_0_87__ || (n.__zoid_9_0_87__ = {}), n.__zoid_9_0_87__
                }
                function Ar(n, e) {
                    try {
                        return e(jr(n))
                    } catch (n) {}
                }
                function kr(n) {
                    return {
                        get: function () {
                            var e = this
                            return h.try(function () {
                                if (e.source && e.source !== window)
                                    throw new Error('Can not call get on proxy object from a remote window')
                                return n
                            })
                        },
                    }
                }
                function Tr(n) {
                    return rn(JSON.stringify(n))
                }
                function Rr(n) {
                    var e = jr(n)
                    return (e.references = e.references || {}), e.references
                }
                function Ir(n) {
                    var e,
                        r,
                        t = n.data,
                        o = n.metaData,
                        i = n.sender,
                        a = n.receiver,
                        u = n.passByReference,
                        c = void 0 !== u && u,
                        d = n.basic,
                        f = void 0 !== d && d,
                        s = er(a.win),
                        l = f ? JSON.stringify(t) : Ue(s, a.domain, t, { on: Ke, send: nr }),
                        w = c
                            ? ((e = l), (r = tn()), (Rr(window)[r] = e), { type: 'uid', uid: r })
                            : (function (n) {
                                return { type: 'raw', val: n }
                            })(l)
                    return {
                        serializedData: Tr({ sender: { domain: i.domain }, metaData: o, reference: w }),
                        cleanReference: function () {
                            var n, e
                            ;(n = window), 'uid' === (e = w).type && delete Rr(n)[e.uid]
                        },
                    }
                }
                function zr(n) {
                    var e,
                        r,
                        t = n.sender,
                        o = n.basic,
                        i = void 0 !== o && o,
                        a = (function (n) {
                            return JSON.parse(
                                (function (n) {
                                    if ('function' == typeof atob)
                                        return decodeURIComponent(
                                            [].map
                                                .call(atob(n), function (n) {
                                                    return '%' + ('00' + n.charCodeAt(0).toString(16)).slice(-2)
                                                })
                                                .join(''),
                                        )
                                    if ('undefined' != typeof Buffer) return Buffer.from(n, 'base64').toString('utf8')
                                    throw new Error('Can not find window.atob or Buffer')
                                })(n),
                            )
                        })(n.data),
                        u = a.reference,
                        c = a.metaData
                    ;(e = 'function' == typeof t.win ? t.win({ metaData: c }) : t.win),
                        (r =
                            'function' == typeof t.domain
                                ? t.domain({ metaData: c })
                                : 'string' == typeof t.domain
                                ? t.domain
                                : a.sender.domain)
                    var d = (function (n, e) {
                        if ('raw' === e.type) return e.val
                        if ('uid' === e.type) return Rr(n)[e.uid]
                        throw new Error('Unsupported ref type: ' + e.type)
                    })(e, u)
                    return {
                        data: i
                            ? JSON.parse(d)
                            : (function (n, e, r) {
                                return Le(n, e, r, { on: Ke, send: nr })
                            })(e, r, d),
                        metaData: c,
                        sender: { win: e, domain: r },
                        reference: u,
                    }
                }
                var Fr = {
                        STRING: 'string',
                        OBJECT: 'object',
                        FUNCTION: 'function',
                        BOOLEAN: 'boolean',
                        NUMBER: 'number',
                        ARRAY: 'array',
                    },
                    Mr = { JSON: 'json', DOTIFY: 'dotify', BASE64: 'base64' },
                    Ur = { IFRAME: 'iframe', POPUP: 'popup' },
                    Lr = {
                        RENDER: 'zoid-render',
                        RENDERED: 'zoid-rendered',
                        DISPLAY: 'zoid-display',
                        ERROR: 'zoid-error',
                        CLOSE: 'zoid-close',
                        DESTROY: 'zoid-destroy',
                        PROPS: 'zoid-props',
                        RESIZE: 'zoid-resize',
                        FOCUS: 'zoid-focus',
                    }
                function Br(n) {
                    return '__zoid__' + n.name + '__' + n.serializedPayload + '__'
                }
                function qr(n) {
                    if (!n) throw new Error('No window name')
                    var e = n.split('__'),
                        r = e[1],
                        t = e[2],
                        o = e[3]
                    if ('zoid' !== r) throw new Error('Window not rendered by zoid - got ' + r)
                    if (!t) throw new Error('Expected component name')
                    if (!o) throw new Error('Expected serialized payload ref')
                    return { name: t, serializedInitialPayload: o }
                }
                var Jr = dn(function (n) {
                    var e = zr({
                        data: qr(n).serializedInitialPayload,
                        sender: {
                            win: function (n) {
                                return (function (n) {
                                    if ('opener' === n.type) return xn('opener', cr(window))
                                    if ('parent' === n.type && 'number' == typeof n.distance)
                                        return xn(
                                            'parent',
                                            ((e = window),
                                            void 0 === (r = n.distance) && (r = 1),
                                                (function (n, e) {
                                                    void 0 === e && (e = 1)
                                                    for (var r = n, t = 0; t < e; t++) {
                                                        if (!r) return
                                                        r = ur(r)
                                                    }
                                                    return r
                                                })(e, Or(e) - r)),
                                        )
                                    var e, r
                                    if ('global' === n.type && n.uid && 'string' == typeof n.uid) {
                                        var t = (function () {
                                            var e = n.uid,
                                                r = xr(window)
                                            if (!r) throw new Error('Can not find ancestor window')
                                            for (var t = 0, o = yr(r); t < o.length; t++) {
                                                var i = o[t]
                                                if (lr(i)) {
                                                    var a = Ar(i, function (n) {
                                                        return n.windows && n.windows[e]
                                                    })
                                                    if (a) return { v: a }
                                                }
                                            }
                                        })()
                                        if ('object' == typeof t) return t.v
                                    } else if ('name' === n.type) {
                                        var o = n.name
                                        return xn(
                                            'namedWindow',
                                            (function (n, e) {
                                                return (
                                                    _r(n, e) ||
                                                    (function n(e, r) {
                                                        var t = _r(e, r)
                                                        if (t) return t
                                                        for (var o = 0, i = pr(e); o < i.length; o++) {
                                                            var a = n(i[o], r)
                                                            if (a) return a
                                                        }
                                                    })(mr(n) || n, e)
                                                )
                                            })(xn('ancestor', xr(window)), o),
                                        )
                                    }
                                    throw new Error('Unable to find ' + n.type + ' parent component window')
                                })(n.metaData.windowRef)
                            },
                        },
                    })
                    return { parent: e.sender, payload: e.data, reference: e.reference }
                })
                function Hr() {
                    return Jr(window.name)
                }
                function Yr(n, e) {
                    if ((void 0 === e && (e = window), n === ur(e))) return { type: 'parent', distance: Or(n) }
                    if (n === cr(e)) return { type: 'opener' }
                    if (lr(n) && (t = n) !== mr(t)) {
                        var r = wr(n).name
                        if (r) return { type: 'name', name: r }
                    }
                    var t
                }
                function Zr(n, e, r, t, o) {
                    if (!n.hasOwnProperty(r)) return t
                    var i = n[r]
                    return 'function' == typeof i.childDecorate
                        ? i.childDecorate({
                            value: t,
                            uid: o.uid,
                            tag: o.tag,
                            close: o.close,
                            focus: o.focus,
                            onError: o.onError,
                            onProps: o.onProps,
                            resize: o.resize,
                            getParent: o.getParent,
                            getParentDomain: o.getParentDomain,
                            show: o.show,
                            hide: o.hide,
                            export: o.export,
                            getSiblings: o.getSiblings,
                        })
                        : t
                }
                function Gr() {
                    return h.try(function () {
                        window.focus()
                    })
                }
                function Vr() {
                    return h.try(function () {
                        window.close()
                    })
                }
                var Xr = function () {
                        return sn
                    },
                    $r = function (n) {
                        return ln(n.value)
                    }
                function Kr(n, e, r) {
                    for (var t = 0, o = Object.keys(i({}, n, e)); t < o.length; t++) {
                        var a = o[t]
                        r(a, e[a], n[a])
                    }
                }
                function Qr(n, e, r) {
                    var t = {}
                    return h
                        .all(
                            (function (n, e, o) {
                                var i = []
                                return (
                                    Kr(n, e, function (n, e, o) {
                                        var a = (function (n, e, o) {
                                            return h.resolve().then(function () {
                                                var i, a
                                                if (null != o && e) {
                                                    var u = ((i = {}), (i.get = e.queryParam), (i.post = e.bodyParam), i)[r],
                                                        c = ((a = {}), (a.get = e.queryValue), (a.post = e.bodyValue), a)[r]
                                                    if (u)
                                                        return h
                                                            .hash({
                                                                finalParam: h.try(function () {
                                                                    return 'function' == typeof u ? u({ value: o }) : 'string' == typeof u ? u : n
                                                                }),
                                                                finalValue: h.try(function () {
                                                                    return 'function' == typeof c && gn(o) ? c({ value: o }) : o
                                                                }),
                                                            })
                                                            .then(function (r) {
                                                                var o,
                                                                    i = r.finalParam,
                                                                    a = r.finalValue
                                                                if ('boolean' == typeof a) o = a.toString()
                                                                else if ('string' == typeof a) o = a.toString()
                                                                else if ('object' == typeof a && null !== a) {
                                                                    if (e.serialization === Mr.JSON) o = JSON.stringify(a)
                                                                    else if (e.serialization === Mr.BASE64) o = rn(JSON.stringify(a))
                                                                    else if (e.serialization === Mr.DOTIFY || !e.serialization) {
                                                                        o = (function n(e, r, t) {
                                                                            for (var o in (void 0 === r && (r = ''),
                                                                            void 0 === t && (t = {}),
                                                                                (r = r ? r + '.' : r),
                                                                                e))
                                                                                e.hasOwnProperty(o) &&
                                                                                null != e[o] &&
                                                                                'function' != typeof e[o] &&
                                                                                (e[o] &&
                                                                                Array.isArray(e[o]) &&
                                                                                e[o].length &&
                                                                                e[o].every(function (n) {
                                                                                    return 'object' != typeof n
                                                                                })
                                                                                    ? (t['' + r + o + '[]'] = e[o].join(','))
                                                                                    : e[o] && 'object' == typeof e[o]
                                                                                        ? (t = n(e[o], '' + r + o, t))
                                                                                        : (t['' + r + o] = e[o].toString()))
                                                                            return t
                                                                        })(a, n)
                                                                        for (var u = 0, c = Object.keys(o); u < c.length; u++) {
                                                                            var d = c[u]
                                                                            t[d] = o[d]
                                                                        }
                                                                        return
                                                                    }
                                                                } else 'number' == typeof a && (o = a.toString())
                                                                t[i] = o
                                                            })
                                                }
                                            })
                                        })(n, e, o)
                                        i.push(a)
                                    }),
                                        i
                                )
                            })(e, n),
                        )
                        .then(function () {
                            return t
                        })
                }
                function nt(n) {
                    var e,
                        r,
                        t,
                        o,
                        a,
                        u,
                        c,
                        d,
                        f = n.uid,
                        s = n.options,
                        l = n.overrides,
                        w = void 0 === l ? {} : l,
                        p = n.parentWin,
                        v = void 0 === p ? window : p,
                        m = s.propsDef,
                        y = s.containerTemplate,
                        g = s.prerenderTemplate,
                        b = s.tag,
                        E = s.name,
                        _ = s.attributes,
                        x = s.dimensions,
                        P = s.autoResize,
                        O = s.url,
                        W = s.domain,
                        S = s.exports,
                        D = new h(),
                        N = [],
                        j = _n(),
                        A = {},
                        k = {},
                        R = { visible: !0 },
                        I = w.event
                            ? w.event
                            : ((e = {}),
                                (r = {}),
                                (t = {
                                    on: function (n, e) {
                                        var t = (r[n] = r[n] || [])
                                        t.push(e)
                                        var o = !1
                                        return {
                                            cancel: function () {
                                                o || ((o = !0), t.splice(t.indexOf(e), 1))
                                            },
                                        }
                                    },
                                    once: function (n, e) {
                                        var r = t.on(n, function () {
                                            r.cancel(), e()
                                        })
                                        return r
                                    },
                                    trigger: function (n) {
                                        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
                                            t[o - 1] = arguments[o]
                                        var i = r[n],
                                            a = []
                                        if (i)
                                            for (
                                                var u = function (n) {
                                                        var e = i[n]
                                                        a.push(
                                                            h.try(function () {
                                                                return e.apply(void 0, t)
                                                            }),
                                                        )
                                                    },
                                                    c = 0;
                                                c < i.length;
                                                c++
                                            )
                                                u(c)
                                        return h.all(a).then(sn)
                                    },
                                    triggerOnce: function (n) {
                                        if (e[n]) return h.resolve()
                                        e[n] = !0
                                        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                                            o[i - 1] = arguments[i]
                                        return t.trigger.apply(t, [n].concat(o))
                                    },
                                    reset: function () {
                                        r = {}
                                    },
                                })),
                        z = w.props ? w.props : {},
                        F = w.onError,
                        M = w.getProxyContainer,
                        U = w.show,
                        L = w.hide,
                        B = w.close,
                        q = w.renderContainer,
                        J = w.getProxyWindow,
                        H = w.setProxyWin,
                        Y = w.openFrame,
                        Z = w.openPrerenderFrame,
                        G = w.prerender,
                        V = w.open,
                        X = w.openPrerender,
                        $ = w.watchForUnload,
                        K = w.getInternalState,
                        Q = w.setInternalState,
                        nn = function () {
                            return 'function' == typeof x ? x({ props: z }) : x
                        },
                        en = function () {
                            return h.try(function () {
                                return w.resolveInitPromise ? w.resolveInitPromise() : D.resolve()
                            })
                        },
                        rn = function (n) {
                            return h.try(function () {
                                return w.rejectInitPromise ? w.rejectInitPromise(n) : D.reject(n)
                            })
                        },
                        on = function (n) {
                            for (var e = {}, r = 0, t = Object.keys(z); r < t.length; r++) {
                                var o = t[r],
                                    i = m[o]
                                ;(i && !1 === i.sendToChild) || (i && i.sameDomain && !Cr(n, sr(window))) || (e[o] = z[o])
                            }
                            return h.hash(e)
                        },
                        an = function () {
                            return h.try(function () {
                                return K ? K() : R
                            })
                        },
                        un = function (n) {
                            return h.try(function () {
                                return Q ? Q(n) : (R = i({}, R, n))
                            })
                        },
                        cn = function () {
                            return J
                                ? J()
                                : h.try(function () {
                                    var n = z.window
                                    if (n) {
                                        var e = er(n)
                                        return (
                                            j.register(function () {
                                                return n.close()
                                            }),
                                                e
                                        )
                                    }
                                    return new Ie({ send: nr })
                                })
                        },
                        fn = function (n) {
                            return H
                                ? H(n)
                                : h.try(function () {
                                    o = n
                                })
                        },
                        vn = function () {
                            return U
                                ? U()
                                : h.hash({ setState: un({ visible: !0 }), showElement: a ? a.get().then(Un) : null }).then(sn)
                        },
                        bn = function () {
                            return L
                                ? L()
                                : h.hash({ setState: un({ visible: !1 }), showElement: a ? a.get().then(Ln) : null }).then(sn)
                        },
                        En = function () {
                            return 'function' == typeof O ? O({ props: z }) : O
                        },
                        xn = function () {
                            return 'function' == typeof _ ? _({ props: z }) : _
                        },
                        Pn = function () {
                            return Wr(En())
                        },
                        On = function (n, e) {
                            var r = e.windowName
                            return Y
                                ? Y(n, { windowName: r })
                                : h.try(function () {
                                    if (n === Ur.IFRAME) return kr(Fn({ attributes: i({ name: r, title: E }, xn().iframe) }))
                                })
                        },
                        Cn = function (n) {
                            return Z
                                ? Z(n)
                                : h.try(function () {
                                    if (n === Ur.IFRAME)
                                        return kr(
                                            Fn({
                                                attributes: i(
                                                    { name: '__zoid_prerender_frame__' + E + '_' + tn() + '__', title: 'prerender__' + E },
                                                    xn().iframe,
                                                ),
                                            }),
                                        )
                                })
                        },
                        Wn = function (n, e, r) {
                            return X
                                ? X(n, e, r)
                                : h.try(function () {
                                    if (n === Ur.IFRAME) {
                                        if (!r) throw new Error('Expected proxy frame to be passed')
                                        return r.get().then(function (n) {
                                            return (
                                                j.register(function () {
                                                    return Bn(n)
                                                }),
                                                    zn(n)
                                                        .then(function (n) {
                                                            return wr(n)
                                                        })
                                                        .then(function (n) {
                                                            return er(n)
                                                        })
                                            )
                                        })
                                    }
                                    if (n === Ur.POPUP) return e
                                    throw new Error('No render context available for ' + n)
                                })
                        },
                        Sn = function () {
                            return h.try(function () {
                                if (o) return h.all([I.trigger(Lr.FOCUS), o.focus()]).then(sn)
                            })
                        },
                        Dn = function (n, e, r, t) {
                            if (e === sr(window))
                                return {
                                    type: 'global',
                                    uid:
                                        ((o = jr(window)),
                                            (o.windows = o.windows || {}),
                                            (o.windows[f] = window),
                                            j.register(function () {
                                                delete o.windows[f]
                                            }),
                                            f),
                                }
                            var o
                            if (n !== window)
                                throw new Error('Can not construct cross-domain window reference for different target window')
                            if (z.window) {
                                var i = t.getWindow()
                                if (!i) throw new Error('Can not construct cross-domain window reference for lazy window prop')
                                if (xr(i) !== window)
                                    throw new Error(
                                        'Can not construct cross-domain window reference for window prop with different ancestor',
                                    )
                            }
                            if (r === Ur.POPUP) return { type: 'opener' }
                            if (r === Ur.IFRAME) return { type: 'parent', distance: Or(window) }
                            throw new Error('Can not construct window reference for child')
                        },
                        Tn = function (n, e) {
                            return h.try(function () {
                                ;(c = n),
                                    (u = e),
                                    en(),
                                    j.register(function () {
                                        return e.close.fireAndForget().catch(sn)
                                    })
                            })
                        },
                        In = function (n) {
                            var e = n.width,
                                r = n.height
                            return h.try(function () {
                                I.trigger(Lr.RESIZE, { width: e, height: r })
                            })
                        },
                        Yn = function (n) {
                            return h
                                .try(function () {
                                    return I.trigger(Lr.DESTROY)
                                })
                                .catch(sn)
                                .then(function () {
                                    return j.all(n)
                                })
                                .then(function () {
                                    D.asyncReject(n || new Error('Component destroyed'))
                                })
                        },
                        Zn = dn(function (n) {
                            return h.try(function () {
                                if (B) {
                                    if (Er(B.__source__)) return
                                    return B()
                                }
                                return h
                                    .try(function () {
                                        return I.trigger(Lr.CLOSE)
                                    })
                                    .then(function () {
                                        return Yn(n || new Error('Component closed'))
                                    })
                            })
                        }),
                        Gn = function (n, e) {
                            var r = e.proxyWin,
                                t = e.proxyFrame,
                                o = e.windowName
                            return V
                                ? V(n, { proxyWin: r, proxyFrame: t, windowName: o })
                                : h
                                    .try(function () {
                                        if (n === Ur.IFRAME) {
                                            if (!t) throw new Error('Expected proxy frame to be passed')
                                            return t.get().then(function (n) {
                                                return zn(n).then(function (e) {
                                                    return (
                                                        j.register(function () {
                                                            return Bn(n)
                                                        }),
                                                            j.register(function () {
                                                                return rr(e)
                                                            }),
                                                            e
                                                    )
                                                })
                                            })
                                        }
                                        if (n === Ur.POPUP) {
                                            var e = nn(),
                                                r = e.width,
                                                a = void 0 === r ? '300px' : r,
                                                u = e.height,
                                                c = void 0 === u ? '150px' : u
                                            ;(a = Qn(a, window.outerWidth)), (c = Qn(c, window.outerWidth))
                                            var d = (function (n, e) {
                                                var r = (e = e || {}).closeOnUnload,
                                                    t = void 0 === r ? 1 : r,
                                                    o = e.name,
                                                    a = void 0 === o ? '' : o,
                                                    u = e.width,
                                                    c = e.height,
                                                    d = 0,
                                                    f = 0
                                                u &&
                                                (window.outerWidth
                                                    ? (f = Math.round((window.outerWidth - u) / 2) + window.screenX)
                                                    : window.screen.width && (f = Math.round((window.screen.width - u) / 2))),
                                                c &&
                                                (window.outerHeight
                                                    ? (d = Math.round((window.outerHeight - c) / 2) + window.screenY)
                                                    : window.screen.height && (d = Math.round((window.screen.height - c) / 2))),
                                                    delete e.closeOnUnload,
                                                    delete e.name,
                                                u &&
                                                c &&
                                                (e = i(
                                                    {
                                                        top: d,
                                                        left: f,
                                                        width: u,
                                                        height: c,
                                                        status: 1,
                                                        toolbar: 0,
                                                        menubar: 0,
                                                        resizable: 1,
                                                        scrollbars: 1,
                                                    },
                                                    e,
                                                ))
                                                var s,
                                                    l,
                                                    w = Object.keys(e)
                                                        .map(function (n) {
                                                            if (null != e[n]) return n + '=' + hn(e[n])
                                                        })
                                                        .filter(Boolean)
                                                        .join(',')
                                                try {
                                                    s = window.open('', a, w)
                                                } catch (l) {
                                                    throw new Rn('Can not open popup window - ' + (l.stack || l.message))
                                                }
                                                if (T(s)) throw new Rn('Can not open popup window - blocked')
                                                return (
                                                    t &&
                                                    window.addEventListener('unload', function () {
                                                        return s.close()
                                                    }),
                                                        s
                                                )
                                            })(0, i({ name: o, width: a, height: c }, xn().popup))
                                            return (
                                                j.register(function () {
                                                    return (function (n) {
                                                        if (
                                                            (function (n) {
                                                                return void 0 === n && (n = window), Boolean(ur(n))
                                                            })(n)
                                                        ) {
                                                            var e = (function (n) {
                                                                if (lr(n)) return wr(n).frameElement
                                                                for (var e = 0, r = document.querySelectorAll('iframe'); e < r.length; e++) {
                                                                    var t = r[e]
                                                                    if (t && t.contentWindow && t.contentWindow === n) return t
                                                                }
                                                            })(n)
                                                            if (e && e.parentElement) return void e.parentElement.removeChild(e)
                                                        }
                                                        try {
                                                            n.close()
                                                        } catch (n) {}
                                                    })(d)
                                                }),
                                                    j.register(function () {
                                                        return rr(d)
                                                    }),
                                                    d
                                            )
                                        }
                                        throw new Error('No render context available for ' + n)
                                    })
                                    .then(function (n) {
                                        return (
                                            r.setWindow(n, { send: nr }),
                                                r.setName(o).then(function () {
                                                    return r
                                                })
                                        )
                                    })
                        },
                        Vn = function () {
                            return h.try(function () {
                                var n = Mn(
                                    window,
                                    'unload',
                                    ln(function () {
                                        Yn(new Error('Window navigated away'))
                                    }),
                                    ),
                                    e = Sr(v, Yn, 3e3)
                                if ((j.register(e.cancel), j.register(n.cancel), $)) return $()
                            })
                        },
                        Xn = function (n) {
                            var e = !1
                            return n
                                .isClosed()
                                .then(function (r) {
                                    return r
                                        ? ((e = !0), Zn(new Error('Detected component window close')))
                                        : h
                                            .delay(200)
                                            .then(function () {
                                                return n.isClosed()
                                            })
                                            .then(function (n) {
                                                if (n) return (e = !0), Zn(new Error('Detected component window close'))
                                            })
                                })
                                .then(function () {
                                    return e
                                })
                        },
                        $n = function (n) {
                            return F
                                ? F(n)
                                : h.try(function () {
                                    if (-1 === N.indexOf(n)) return N.push(n), D.asyncReject(n), I.trigger(Lr.ERROR, n)
                                })
                        },
                        Kn = new h(),
                        ne = function (n) {
                            return h.try(function () {
                                Kn.resolve(n)
                            })
                        }
                    Tn.onError = $n
                    var ee = function (n, e) {
                            return n({
                                uid: f,
                                container: e.container,
                                context: e.context,
                                doc: e.doc,
                                frame: e.frame,
                                prerenderFrame: e.prerenderFrame,
                                focus: Sn,
                                close: Zn,
                                state: A,
                                props: z,
                                tag: b,
                                dimensions: nn(),
                                event: I,
                            })
                        },
                        re = function (n, e) {
                            var r = e.context
                            return G
                                ? G(n, { context: r })
                                : h.try(function () {
                                    if (g) {
                                        var e = n.getWindow()
                                        if (
                                            e &&
                                            lr(e) &&
                                            (function (n) {
                                                try {
                                                    if (!n.location.href) return !0
                                                    if ('about:blank' === n.location.href) return !0
                                                } catch (n) {}
                                                return !1
                                            })(e)
                                        ) {
                                            var t = (e = wr(e)).document,
                                                o = ee(g, { context: r, doc: t })
                                            if (o) {
                                                if (o.ownerDocument !== t)
                                                    throw new Error(
                                                        'Expected prerender template to have been created with document from child window',
                                                    )
                                                !(function (n, e) {
                                                    var r = e.tagName.toLowerCase()
                                                    if ('html' !== r) throw new Error('Expected element to be html, got ' + r)
                                                    for (var t = n.document.documentElement, o = 0, i = yn(t.children); o < i.length; o++)
                                                        t.removeChild(i[o])
                                                    for (var a = 0, u = yn(e.children); a < u.length; a++) t.appendChild(u[a])
                                                })(e, o)
                                                var i = P.width,
                                                    a = void 0 !== i && i,
                                                    u = P.height,
                                                    c = void 0 !== u && u,
                                                    d = P.element,
                                                    f = void 0 === d ? 'body' : d
                                                if ((f = An(f, t)) && (a || c)) {
                                                    var s = Jn(
                                                        f,
                                                        function (n) {
                                                            In({ width: a ? n.width : void 0, height: c ? n.height : void 0 })
                                                        },
                                                        { width: a, height: c, win: e },
                                                    )
                                                    I.on(Lr.RENDERED, s.cancel)
                                                }
                                            }
                                        }
                                    }
                                })
                        },
                        te = function (n, e) {
                            var r = e.proxyFrame,
                                t = e.proxyPrerenderFrame,
                                o = e.context,
                                i = e.rerender
                            return q
                                ? q(n, { proxyFrame: r, proxyPrerenderFrame: t, context: o, rerender: i })
                                : h
                                    .hash({
                                        container: n.get(),
                                        frame: r ? r.get() : null,
                                        prerenderFrame: t ? t.get() : null,
                                        internalState: an(),
                                    })
                                    .then(function (n) {
                                        var e = n.container,
                                            r = n.internalState.visible,
                                            t = ee(y, {
                                                context: o,
                                                container: e,
                                                frame: n.frame,
                                                prerenderFrame: n.prerenderFrame,
                                                doc: document,
                                            })
                                        if (t) {
                                            r || Ln(t), jn(e, t)
                                            var u = (function (n, e) {
                                                e = ln(e)
                                                var r,
                                                    t,
                                                    o,
                                                    i = !1,
                                                    a = [],
                                                    u = function () {
                                                        i = !0
                                                        for (var n = 0; n < a.length; n++) a[n].disconnect()
                                                        r && r.cancel(), o && o.removeEventListener('unload', c), t && Bn(t)
                                                    },
                                                    c = function () {
                                                        i || (e(), u())
                                                    }
                                                if (qn(n)) return c(), { cancel: u }
                                                if (window.MutationObserver)
                                                    for (var d = n.parentElement; d; ) {
                                                        var f = new window.MutationObserver(function () {
                                                            qn(n) && c()
                                                        })
                                                        f.observe(d, { childList: !0 }), a.push(f), (d = d.parentElement)
                                                    }
                                                return (
                                                    (t = document.createElement('iframe')).setAttribute('name', '__detect_close_' + tn() + '__'),
                                                        (t.style.display = 'none'),
                                                        zn(t).then(function (n) {
                                                            ;(o = C(n)).addEventListener('unload', c)
                                                        }),
                                                        n.appendChild(t),
                                                        (r = mn(function () {
                                                            qn(n) && c()
                                                        }, 1e3)),
                                                        { cancel: u }
                                                )
                                            })(t, function () {
                                                var n = new Error('Detected container element removed from DOM')
                                                return h.delay(1).then(function () {
                                                    if (!qn(t)) return j.all(n), i().then(en, rn)
                                                    Zn(n)
                                                })
                                            })
                                            return (
                                                j.register(function () {
                                                    return u.cancel()
                                                }),
                                                    j.register(function () {
                                                        return Bn(t)
                                                    }),
                                                    (a = kr(t))
                                            )
                                        }
                                    })
                        },
                        oe = function () {
                            return {
                                state: A,
                                event: I,
                                close: Zn,
                                focus: Sn,
                                resize: In,
                                onError: $n,
                                updateProps: ae,
                                show: vn,
                                hide: bn,
                            }
                        },
                        ie = function (n) {
                            void 0 === n && (n = {})
                            var e = d,
                                r = oe()
                            pn(k, n),
                                (function (n, e, r, t, o) {
                                    var i = t.state,
                                        a = t.close,
                                        u = t.focus,
                                        c = t.event,
                                        d = t.onError
                                    Kr(r, n, function (n, t, f) {
                                        var s = !1,
                                            l = f
                                        Object.defineProperty(e, n, {
                                            configurable: !0,
                                            enumerable: !0,
                                            get: function () {
                                                return s
                                                    ? l
                                                    : ((s = !0),
                                                        (function () {
                                                            if (!t) return l
                                                            var s = t.alias
                                                            if (
                                                                (s && !gn(f) && gn(r[s]) && (l = r[s]),
                                                                t.value &&
                                                                (l = t.value({
                                                                    props: e,
                                                                    state: i,
                                                                    close: a,
                                                                    focus: u,
                                                                    event: c,
                                                                    onError: d,
                                                                    container: o,
                                                                })),
                                                                !t.default ||
                                                                gn(l) ||
                                                                gn(r[n]) ||
                                                                (l = t.default({
                                                                    props: e,
                                                                    state: i,
                                                                    close: a,
                                                                    focus: u,
                                                                    event: c,
                                                                    onError: d,
                                                                    container: o,
                                                                })),
                                                                    gn(l))
                                                            ) {
                                                                if (t.type === Fr.ARRAY ? !Array.isArray(l) : typeof l !== t.type)
                                                                    throw new TypeError('Prop is not of type ' + t.type + ': ' + n)
                                                            } else if (!1 !== t.required && !gn(r[n]))
                                                                throw new Error('Expected prop "' + n + '" to be defined')
                                                            return (
                                                                gn(l) &&
                                                                t.decorate &&
                                                                (l = t.decorate({
                                                                    value: l,
                                                                    props: e,
                                                                    state: i,
                                                                    close: a,
                                                                    focus: u,
                                                                    event: c,
                                                                    onError: d,
                                                                    container: o,
                                                                })),
                                                                    l
                                                            )
                                                        })())
                                            },
                                        })
                                    }),
                                        Kr(e, n, sn)
                                })(m, z, k, r, e)
                        },
                        ae = function (n) {
                            return (
                                ie(n),
                                    D.then(function () {
                                        var n = u,
                                            e = o
                                        if (n && e && c)
                                            return on(c).then(function (r) {
                                                return n.updateProps(r).catch(function (n) {
                                                    return Xn(e).then(function (e) {
                                                        if (!e) throw n
                                                    })
                                                })
                                            })
                                    })
                            )
                        },
                        ue = function (n) {
                            return M
                                ? M(n)
                                : h
                                    .try(function () {
                                        return kn(n)
                                    })
                                    .then(function (n) {
                                        return (
                                            Hn(n) &&
                                            (n = (function n(e) {
                                                var r = (function (n) {
                                                    var e = (function (n) {
                                                        for (; n.parentNode; ) n = n.parentNode
                                                        if (Hn(n)) return n
                                                    })(n)
                                                    if (e && e.host) return e.host
                                                })(e)
                                                if (!r) throw new Error('Element is not in shadow dom')
                                                var t = 'shadow-slot-' + tn(),
                                                    o = document.createElement('slot')
                                                o.setAttribute('name', t), e.appendChild(o)
                                                var i = document.createElement('div')
                                                return i.setAttribute('slot', t), r.appendChild(i), Hn(r) ? n(i) : i
                                            })(n)),
                                                (d = n),
                                                kr(n)
                                        )
                                    })
                        }
                    return {
                        init: function () {
                            I.on(Lr.RENDER, function () {
                                return z.onRender()
                            }),
                                I.on(Lr.DISPLAY, function () {
                                    return z.onDisplay()
                                }),
                                I.on(Lr.RENDERED, function () {
                                    return z.onRendered()
                                }),
                                I.on(Lr.CLOSE, function () {
                                    return z.onClose()
                                }),
                                I.on(Lr.DESTROY, function () {
                                    return z.onDestroy()
                                }),
                                I.on(Lr.RESIZE, function () {
                                    return z.onResize()
                                }),
                                I.on(Lr.FOCUS, function () {
                                    return z.onFocus()
                                }),
                                I.on(Lr.PROPS, function (n) {
                                    return z.onProps(n)
                                }),
                                I.on(Lr.ERROR, function (n) {
                                    return z && z.onError
                                        ? z.onError(n)
                                        : rn(n).then(function () {
                                            setTimeout(function () {
                                                throw n
                                            }, 1)
                                        })
                                }),
                                j.register(I.reset)
                        },
                        render: function (n) {
                            var e = n.target,
                                r = n.container,
                                t = n.context,
                                i = n.rerender
                            return h
                                .try(function () {
                                    var n = Pn(),
                                        a = W || Pn()
                                    !(function (n, e, r) {
                                        if (n !== window) {
                                            if (
                                                !(function (n, e) {
                                                    var r = mr(n) || n,
                                                        t = mr(e) || e
                                                    try {
                                                        if (r && t) return r === t
                                                    } catch (n) {}
                                                    var o = yr(n),
                                                        i = yr(e)
                                                    if (Pr(o, i)) return !0
                                                    var a = cr(r),
                                                        u = cr(t)
                                                    return (a && Pr(yr(a), i)) || (u && Pr(yr(u), o)), !1
                                                })(window, n)
                                            )
                                                throw new Error('Can only renderTo an adjacent frame')
                                            var t = sr()
                                            if (!Cr(e, t) && !lr(n))
                                                throw new Error('Can not render remotely to ' + e.toString() + ' - can only render to ' + t)
                                            if (r && 'string' != typeof r)
                                                throw new Error('Container passed to renderTo must be a string selector, got ' + typeof r + ' }')
                                        }
                                    })(e, a, r)
                                    var u = h.try(function () {
                                            if (e !== window)
                                                return (function (n, e) {
                                                    for (var r = {}, t = 0, o = Object.keys(z); t < o.length; t++) {
                                                        var i = o[t],
                                                            a = m[i]
                                                        a && a.allowDelegate && (r[i] = z[i])
                                                    }
                                                    var u = nr(e, 'zoid_delegate_' + E, {
                                                        uid: f,
                                                        overrides: {
                                                            props: r,
                                                            event: I,
                                                            close: Zn,
                                                            onError: $n,
                                                            getInternalState: an,
                                                            setInternalState: un,
                                                            resolveInitPromise: en,
                                                            rejectInitPromise: rn,
                                                        },
                                                    })
                                                        .then(function (n) {
                                                            var r = n.data.parent
                                                            return (
                                                                j.register(function (n) {
                                                                    if (!Er(e)) return r.destroy(n)
                                                                }),
                                                                    r.getDelegateOverrides()
                                                            )
                                                        })
                                                        .catch(function (n) {
                                                            throw new Error(
                                                                'Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n' +
                                                                wn(n),
                                                            )
                                                        })
                                                    return (
                                                        (M = function () {
                                                            for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r]
                                                            return u.then(function (n) {
                                                                return n.getProxyContainer.apply(n, e)
                                                            })
                                                        }),
                                                            (q = function () {
                                                                for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r]
                                                                return u.then(function (n) {
                                                                    return n.renderContainer.apply(n, e)
                                                                })
                                                            }),
                                                            (U = function () {
                                                                for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r]
                                                                return u.then(function (n) {
                                                                    return n.show.apply(n, e)
                                                                })
                                                            }),
                                                            (L = function () {
                                                                for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r]
                                                                return u.then(function (n) {
                                                                    return n.hide.apply(n, e)
                                                                })
                                                            }),
                                                            ($ = function () {
                                                                for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r]
                                                                return u.then(function (n) {
                                                                    return n.watchForUnload.apply(n, e)
                                                                })
                                                            }),
                                                            n === Ur.IFRAME
                                                                ? ((J = function () {
                                                                    for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r]
                                                                    return u.then(function (n) {
                                                                        return n.getProxyWindow.apply(n, e)
                                                                    })
                                                                }),
                                                                    (Y = function () {
                                                                        for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r]
                                                                        return u.then(function (n) {
                                                                            return n.openFrame.apply(n, e)
                                                                        })
                                                                    }),
                                                                    (Z = function () {
                                                                        for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r]
                                                                        return u.then(function (n) {
                                                                            return n.openPrerenderFrame.apply(n, e)
                                                                        })
                                                                    }),
                                                                    (G = function () {
                                                                        for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r]
                                                                        return u.then(function (n) {
                                                                            return n.prerender.apply(n, e)
                                                                        })
                                                                    }),
                                                                    (V = function () {
                                                                        for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r]
                                                                        return u.then(function (n) {
                                                                            return n.open.apply(n, e)
                                                                        })
                                                                    }),
                                                                    (X = function () {
                                                                        for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r]
                                                                        return u.then(function (n) {
                                                                            return n.openPrerender.apply(n, e)
                                                                        })
                                                                    }))
                                                                : n === Ur.POPUP &&
                                                                (H = function () {
                                                                    for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r]
                                                                    return u.then(function (n) {
                                                                        return n.setProxyWin.apply(n, e)
                                                                    })
                                                                }),
                                                            u
                                                    )
                                                })(t, e)
                                        }),
                                        c = z.window,
                                        d = Vn(),
                                        l = Qr(m, z, 'post'),
                                        w = I.trigger(Lr.RENDER),
                                        p = ue(r),
                                        v = cn(),
                                        y = p.then(function () {
                                            return ie()
                                        }),
                                        g = y.then(function () {
                                            return Qr(m, z, 'get').then(function (n) {
                                                return (function (n, e) {
                                                    var r,
                                                        t,
                                                        o = e.query || {},
                                                        i = e.hash || {},
                                                        a = n.split('#')
                                                    t = a[1]
                                                    var u = (r = a[0]).split('?')
                                                    r = u[0]
                                                    var c = Nn(u[1], o),
                                                        d = Nn(t, i)
                                                    return c && (r = r + '?' + c), d && (r = r + '#' + d), r
                                                })(Nr(En()), { query: n })
                                            })
                                        }),
                                        _ = v.then(function (r) {
                                            return (function (n) {
                                                var e = void 0 === n ? {} : n,
                                                    r = e.proxyWin,
                                                    t = e.initialChildDomain,
                                                    o = e.childDomainMatch,
                                                    i = e.target,
                                                    a = void 0 === i ? window : i,
                                                    u = e.context
                                                return (function (n) {
                                                    var e = void 0 === n ? {} : n,
                                                        r = e.proxyWin,
                                                        t = e.childDomainMatch,
                                                        o = e.context
                                                    return on(e.initialChildDomain).then(function (n) {
                                                        return {
                                                            uid: f,
                                                            context: o,
                                                            tag: b,
                                                            childDomainMatch: t,
                                                            version: '9_0_87',
                                                            props: n,
                                                            exports:
                                                                ((e = r),
                                                                    {
                                                                        init: function (n) {
                                                                            return Tn(this.origin, n)
                                                                        },
                                                                        close: Zn,
                                                                        checkClose: function () {
                                                                            return Xn(e)
                                                                        },
                                                                        resize: In,
                                                                        onError: $n,
                                                                        show: vn,
                                                                        hide: bn,
                                                                        export: ne,
                                                                    }),
                                                        }
                                                        var e
                                                    })
                                                })({ proxyWin: r, initialChildDomain: t, childDomainMatch: o, context: u }).then(function (n) {
                                                    var e = Ir({
                                                            data: n,
                                                            metaData: { windowRef: Dn(a, t, u, r) },
                                                            sender: { domain: sr(window) },
                                                            receiver: { win: r, domain: o },
                                                            passByReference: t === sr(),
                                                        }),
                                                        i = e.serializedData
                                                    return j.register(e.cleanReference), i
                                                })
                                            })({
                                                proxyWin: (o = { proxyWin: r, initialChildDomain: n, childDomainMatch: a, target: e, context: t })
                                                    .proxyWin,
                                                initialChildDomain: o.initialChildDomain,
                                                childDomainMatch: o.childDomainMatch,
                                                target: o.target,
                                                context: o.context,
                                            }).then(function (n) {
                                                return Br({ name: E, serializedPayload: n })
                                            })
                                            var o
                                        }),
                                        x = _.then(function (n) {
                                            return On(t, { windowName: n })
                                        }),
                                        P = Cn(t),
                                        O = h
                                            .hash({ proxyContainer: p, proxyFrame: x, proxyPrerenderFrame: P })
                                            .then(function (n) {
                                                return te(n.proxyContainer, {
                                                    context: t,
                                                    proxyFrame: n.proxyFrame,
                                                    proxyPrerenderFrame: n.proxyPrerenderFrame,
                                                    rerender: i,
                                                })
                                            })
                                            .then(function (n) {
                                                return n
                                            }),
                                        C = h.hash({ windowName: _, proxyFrame: x, proxyWin: v }).then(function (n) {
                                            var e = n.proxyWin
                                            return c ? e : Gn(t, { windowName: n.windowName, proxyWin: e, proxyFrame: n.proxyFrame })
                                        }),
                                        S = h.hash({ proxyWin: C, proxyPrerenderFrame: P }).then(function (n) {
                                            return Wn(t, n.proxyWin, n.proxyPrerenderFrame)
                                        }),
                                        N = C.then(function (n) {
                                            return (o = n), fn(n)
                                        }),
                                        A = h.hash({ proxyPrerenderWin: S, state: N }).then(function (n) {
                                            return re(n.proxyPrerenderWin, { context: t })
                                        }),
                                        k = h.hash({ proxyWin: C, windowName: _ }).then(function (n) {
                                            if (c) return n.proxyWin.setName(n.windowName)
                                        }),
                                        T = h.hash({ body: l }).then(function (n) {
                                            return s.method ? s.method : Object.keys(n.body).length ? 'post' : 'get'
                                        }),
                                        R = h
                                            .hash({ proxyWin: C, windowUrl: g, body: l, method: T, windowName: k, prerender: A })
                                            .then(function (n) {
                                                return n.proxyWin.setLocation(n.windowUrl, { method: n.method, body: n.body })
                                            }),
                                        F = C.then(function (n) {
                                            !(function n(e, r) {
                                                var t = !1
                                                return (
                                                    j.register(function () {
                                                        t = !0
                                                    }),
                                                        h
                                                            .delay(2e3)
                                                            .then(function () {
                                                                return e.isClosed()
                                                            })
                                                            .then(function (o) {
                                                                if (!t) return o ? Zn(new Error('Detected ' + r + ' close')) : n(e, r)
                                                            })
                                                )
                                            })(n, t)
                                        }),
                                        B = h.hash({ container: O, prerender: A }).then(function () {
                                            return I.trigger(Lr.DISPLAY)
                                        }),
                                        K = C.then(function (e) {
                                            return (function (n, e, r) {
                                                return h
                                                    .try(function () {
                                                        return n.awaitWindow()
                                                    })
                                                    .then(function (n) {
                                                        if (Qe && Qe.needsBridge({ win: n, domain: e }) && !Qe.hasBridge(e, e)) {
                                                            var t = 'function' == typeof s.bridgeUrl ? s.bridgeUrl({ props: z }) : s.bridgeUrl
                                                            if (!t) throw new Error('Bridge needed to render ' + r)
                                                            var o = Wr(t)
                                                            return Qe.linkUrl(n, e), Qe.openBridge(Nr(t), o)
                                                        }
                                                    })
                                            })(e, n, t)
                                        }),
                                        Q = R.then(function () {
                                            return h.try(function () {
                                                var n = z.timeout
                                                if (n) return D.timeout(n, new Error('Loading component timed out after ' + n + ' milliseconds'))
                                            })
                                        }),
                                        nn = D.then(function () {
                                            return I.trigger(Lr.RENDERED)
                                        })
                                    return h.hash({
                                        initPromise: D,
                                        buildUrlPromise: g,
                                        onRenderPromise: w,
                                        getProxyContainerPromise: p,
                                        openFramePromise: x,
                                        openPrerenderFramePromise: P,
                                        renderContainerPromise: O,
                                        openPromise: C,
                                        openPrerenderPromise: S,
                                        setStatePromise: N,
                                        prerenderPromise: A,
                                        loadUrlPromise: R,
                                        buildWindowNamePromise: _,
                                        setWindowNamePromise: k,
                                        watchForClosePromise: F,
                                        onDisplayPromise: B,
                                        openBridgePromise: K,
                                        runTimeoutPromise: Q,
                                        onRenderedPromise: nn,
                                        delegatePromise: u,
                                        watchForUnloadPromise: d,
                                        finalSetPropsPromise: y,
                                    })
                                })
                                .catch(function (n) {
                                    return h.all([$n(n), Yn(n)]).then(
                                        function () {
                                            throw n
                                        },
                                        function () {
                                            throw n
                                        },
                                    )
                                })
                                .then(sn)
                        },
                        destroy: Yn,
                        getProps: function () {
                            return z
                        },
                        setProps: ie,
                        export: ne,
                        getHelpers: oe,
                        getDelegateOverrides: function () {
                            return h.try(function () {
                                return {
                                    getProxyContainer: ue,
                                    show: vn,
                                    hide: bn,
                                    renderContainer: te,
                                    getProxyWindow: cn,
                                    watchForUnload: Vn,
                                    openFrame: On,
                                    openPrerenderFrame: Cn,
                                    prerender: re,
                                    open: Gn,
                                    openPrerender: Wn,
                                    setProxyWin: fn,
                                }
                            })
                        },
                        getExports: function () {
                            return S({
                                getExports: function () {
                                    return Kn
                                },
                            })
                        },
                    }
                }
                function et(n) {
                    var e = n.uid,
                        r = n.frame,
                        t = n.prerenderFrame,
                        o = n.doc,
                        i = n.props,
                        a = n.event,
                        u = n.dimensions,
                        c = u.width,
                        d = u.height
                    if (r && t) {
                        var f = o.createElement('div')
                        f.setAttribute('id', e)
                        var s = o.createElement('style')
                        return (
                            i.cspNonce && s.setAttribute('nonce', i.cspNonce),
                                s.appendChild(
                                    o.createTextNode(
                                        '\n            #' +
                                        e +
                                        ' {\n                display: inline-block;\n                position: relative;\n                width: ' +
                                        c +
                                        ';\n                height: ' +
                                        d +
                                        ';\n            }\n\n            #' +
                                        e +
                                        ' > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #' +
                                        e +
                                        ' > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #' +
                                        e +
                                        ' > iframe.zoid-visible {\n                opacity: 1;\n        }\n        ',
                                    ),
                                ),
                                f.appendChild(r),
                                f.appendChild(t),
                                f.appendChild(s),
                                t.classList.add('zoid-visible'),
                                r.classList.add('zoid-invisible'),
                                a.on(Lr.RENDERED, function () {
                                    t.classList.remove('zoid-visible'),
                                        t.classList.add('zoid-invisible'),
                                        r.classList.remove('zoid-invisible'),
                                        r.classList.add('zoid-visible'),
                                        setTimeout(function () {
                                            Bn(t)
                                        }, 1)
                                }),
                                a.on(Lr.RESIZE, function (n) {
                                    var e = n.width,
                                        r = n.height
                                    'number' == typeof e && (f.style.width = Kn(e)), 'number' == typeof r && (f.style.height = Kn(r))
                                }),
                                f
                        )
                    }
                }
                function rt(n) {
                    var e = n.doc,
                        r = n.props,
                        t = e.createElement('html'),
                        o = e.createElement('body'),
                        i = e.createElement('style'),
                        a = e.createElement('div')
                    return (
                        a.classList.add('spinner'),
                        r.cspNonce && i.setAttribute('nonce', r.cspNonce),
                            t.appendChild(o),
                            o.appendChild(a),
                            o.appendChild(i),
                            i.appendChild(
                                e.createTextNode(
                                    '\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        ',
                                ),
                            ),
                            t
                    )
                }
                var tt = _n(),
                    ot = _n()
                function it(n) {
                    var e,
                        r,
                        t = (function (n) {
                            var e = n.tag,
                                r = n.url,
                                t = n.domain,
                                o = n.bridgeUrl,
                                a = n.props,
                                u = void 0 === a ? {} : a,
                                c = n.dimensions,
                                d = void 0 === c ? {} : c,
                                f = n.autoResize,
                                s = void 0 === f ? {} : f,
                                l = n.allowedParentDomains,
                                w = void 0 === l ? '*' : l,
                                h = n.attributes,
                                p = void 0 === h ? {} : h,
                                v = n.defaultContext,
                                m = void 0 === v ? Ur.IFRAME : v,
                                y = n.containerTemplate,
                                g = void 0 === y ? et : y,
                                b = n.prerenderTemplate,
                                E = void 0 === b ? rt : b,
                                _ = n.validate,
                                x = n.eligible,
                                P =
                                    void 0 === x
                                        ? function () {
                                            return { eligible: !0 }
                                        }
                                        : x,
                                O = n.logger,
                                C = void 0 === O ? { info: sn } : O,
                                W = n.exports,
                                S = void 0 === W ? sn : W,
                                D = n.method,
                                N = n.children,
                                j =
                                    void 0 === N
                                        ? function () {
                                            return {}
                                        }
                                        : N,
                                A = e.replace(/-/g, '_'),
                                k = i(
                                    {},
                                    {
                                        window: {
                                            type: Fr.OBJECT,
                                            sendToChild: !1,
                                            required: !1,
                                            allowDelegate: !0,
                                            validate: function (n) {
                                                var e = n.value
                                                if (!Dr(e) && !Ie.isProxyWindow(e)) throw new Error('Expected Window or ProxyWindow')
                                                if (Dr(e)) {
                                                    if (Er(e)) throw new Error('Window is closed')
                                                    if (!lr(e)) throw new Error('Window is not same domain')
                                                }
                                            },
                                            decorate: function (n) {
                                                return er(n.value)
                                            },
                                        },
                                        timeout: { type: Fr.NUMBER, required: !1, sendToChild: !1 },
                                        cspNonce: { type: Fr.STRING, required: !1 },
                                        onDisplay: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            allowDelegate: !0,
                                            default: Xr,
                                            decorate: $r,
                                        },
                                        onRendered: { type: Fr.FUNCTION, required: !1, sendToChild: !1, default: Xr, decorate: $r },
                                        onRender: { type: Fr.FUNCTION, required: !1, sendToChild: !1, default: Xr, decorate: $r },
                                        onClose: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            allowDelegate: !0,
                                            default: Xr,
                                            decorate: $r,
                                        },
                                        onDestroy: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            allowDelegate: !0,
                                            default: Xr,
                                            decorate: $r,
                                        },
                                        onResize: { type: Fr.FUNCTION, required: !1, sendToChild: !1, allowDelegate: !0, default: Xr },
                                        onFocus: { type: Fr.FUNCTION, required: !1, sendToChild: !1, allowDelegate: !0, default: Xr },
                                        close: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.close
                                            },
                                        },
                                        focus: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.focus
                                            },
                                        },
                                        resize: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.resize
                                            },
                                        },
                                        uid: {
                                            type: Fr.STRING,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.uid
                                            },
                                        },
                                        tag: {
                                            type: Fr.STRING,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.tag
                                            },
                                        },
                                        getParent: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.getParent
                                            },
                                        },
                                        getParentDomain: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.getParentDomain
                                            },
                                        },
                                        show: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.show
                                            },
                                        },
                                        hide: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.hide
                                            },
                                        },
                                        export: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.export
                                            },
                                        },
                                        onError: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.onError
                                            },
                                        },
                                        onProps: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.onProps
                                            },
                                        },
                                        getSiblings: {
                                            type: Fr.FUNCTION,
                                            required: !1,
                                            sendToChild: !1,
                                            childDecorate: function (n) {
                                                return n.getSiblings
                                            },
                                        },
                                    },
                                    u,
                                )
                            if (!g) throw new Error('Container template required')
                            return {
                                name: A,
                                tag: e,
                                url: r,
                                domain: t,
                                bridgeUrl: o,
                                method: D,
                                propsDef: k,
                                dimensions: d,
                                autoResize: s,
                                allowedParentDomains: w,
                                attributes: p,
                                defaultContext: m,
                                containerTemplate: g,
                                prerenderTemplate: E,
                                validate: _,
                                logger: C,
                                eligible: P,
                                children: j,
                                exports:
                                    'function' == typeof S
                                        ? S
                                        : function (n) {
                                            for (
                                                var e = n.getExports,
                                                    r = {},
                                                    t = function (n, t) {
                                                        var o = t[n],
                                                            i = S[o].type,
                                                            a = e().then(function (n) {
                                                                return n[o]
                                                            })
                                                        r[o] =
                                                            i === Fr.FUNCTION
                                                                ? function () {
                                                                    for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
                                                                        e[r] = arguments[r]
                                                                    return a.then(function (n) {
                                                                        return n.apply(void 0, e)
                                                                    })
                                                                }
                                                                : a
                                                    },
                                                    o = 0,
                                                    i = Object.keys(S);
                                                o < i.length;
                                                o++
                                            )
                                                t(o, i)
                                            return r
                                        },
                            }
                        })(n),
                        o = t.name,
                        a = t.tag,
                        u = t.defaultContext,
                        c = t.eligible,
                        d = t.children,
                        f = jr(window),
                        s = [],
                        l = function () {
                            if (
                                (function (n) {
                                    try {
                                        return qr(window.name).name === n
                                    } catch (n) {}
                                    return !1
                                })(o)
                            ) {
                                var n = Hr().payload
                                if (n.tag === a && Cr(n.childDomainMatch, sr())) return !0
                            }
                            return !1
                        },
                        w = dn(function () {
                            if (l()) {
                                if (window.xprops)
                                    throw (
                                        (delete f.components[a], new Error('Can not register ' + o + ' as child - child already registered'))
                                    )
                                var n = (function (n) {
                                    var e,
                                        r = n.tag,
                                        t = n.propsDef,
                                        o = n.autoResize,
                                        i = n.allowedParentDomains,
                                        a = [],
                                        u = Hr(),
                                        c = u.parent,
                                        d = u.payload,
                                        f = c.win,
                                        s = c.domain,
                                        l = new h(),
                                        w = d.version,
                                        p = d.uid,
                                        v = d.exports,
                                        m = d.context,
                                        y = d.props
                                    if ('9_0_87' !== w)
                                        throw new Error('Parent window has zoid version ' + w + ', child window has version 9_0_87')
                                    var g = v.show,
                                        b = v.hide,
                                        E = v.close,
                                        _ = v.onError,
                                        x = v.checkClose,
                                        P = v.export,
                                        O = v.resize,
                                        C = v.init,
                                        W = function () {
                                            return f
                                        },
                                        S = function () {
                                            return s
                                        },
                                        D = function (n) {
                                            return (
                                                a.push(n),
                                                    {
                                                        cancel: function () {
                                                            a.splice(a.indexOf(n), 1)
                                                        },
                                                    }
                                            )
                                        },
                                        N = function (n) {
                                            return O.fireAndForget({ width: n.width, height: n.height })
                                        },
                                        j = function (n) {
                                            return l.resolve(n), P(n)
                                        },
                                        A = function (n) {
                                            var t = (void 0 === n ? {} : n).anyParent,
                                                o = [],
                                                i = e.parent
                                            if ((void 0 === t && (t = !i), !t && !i)) throw new Error('No parent found for ' + r + ' child')
                                            for (var a = 0, u = yr(window); a < u.length; a++) {
                                                var c = u[a]
                                                if (lr(c)) {
                                                    var d = wr(c).xprops
                                                    if (d && W() === d.getParent()) {
                                                        var f = d.parent
                                                        if (t || !i || (f && f.uid === i.uid)) {
                                                            var s = Ar(c, function (n) {
                                                                return n.exports
                                                            })
                                                            o.push({ props: d, exports: s })
                                                        }
                                                    }
                                                }
                                            }
                                            return o
                                        },
                                        k = function (n, o, i) {
                                            void 0 === i && (i = !1)
                                            var u = (function (n, e, r, t, o, i) {
                                                void 0 === i && (i = !1)
                                                for (var a = {}, u = 0, c = Object.keys(r); u < c.length; u++) {
                                                    var d = c[u],
                                                        f = e[d]
                                                    if (!f || !f.sameDomain || (t === sr(window) && lr(n))) {
                                                        var s = Zr(e, 0, d, r[d], o)
                                                        ;(a[d] = s), f && f.alias && !a[f.alias] && (a[f.alias] = s)
                                                    }
                                                }
                                                if (!i)
                                                    for (var l = 0, w = Object.keys(e); l < w.length; l++) {
                                                        var h = w[l]
                                                        r.hasOwnProperty(h) || (a[h] = Zr(e, 0, h, void 0, o))
                                                    }
                                                return a
                                            })(
                                                f,
                                                t,
                                                n,
                                                o,
                                                {
                                                    tag: r,
                                                    show: g,
                                                    hide: b,
                                                    close: E,
                                                    focus: Gr,
                                                    onError: _,
                                                    resize: N,
                                                    getSiblings: A,
                                                    onProps: D,
                                                    getParent: W,
                                                    getParentDomain: S,
                                                    uid: p,
                                                    export: j,
                                                },
                                                i,
                                            )
                                            e ? pn(e, u) : (e = u)
                                            for (var c = 0; c < a.length; c++) (0, a[c])(e)
                                        },
                                        T = function (n) {
                                            return h.try(function () {
                                                return k(n, s, !0)
                                            })
                                        }
                                    return {
                                        init: function () {
                                            return h
                                                .try(function () {
                                                    return (
                                                        lr(f) &&
                                                        (function (n) {
                                                            var e = n.componentName,
                                                                r = n.parentComponentWindow,
                                                                t = zr({
                                                                    data: qr(window.name).serializedInitialPayload,
                                                                    sender: { win: r },
                                                                    basic: !0,
                                                                }),
                                                                o = t.sender
                                                            if ('uid' === t.reference.type || 'global' === t.metaData.windowRef.type) {
                                                                var i = Ir({
                                                                    data: t.data,
                                                                    metaData: { windowRef: Yr(r) },
                                                                    sender: { domain: o.domain },
                                                                    receiver: { win: window, domain: sr() },
                                                                    basic: !0,
                                                                })
                                                                window.name = Br({ name: e, serializedPayload: i.serializedData })
                                                            }
                                                        })({ componentName: n.name, parentComponentWindow: f }),
                                                            (jr(window).exports = n.exports({
                                                                getExports: function () {
                                                                    return l
                                                                },
                                                            })),
                                                            (function (n, e) {
                                                                if (!Cr(n, e)) throw new Error('Can not be rendered by domain: ' + e)
                                                            })(i, s),
                                                            le(f),
                                                            window.addEventListener('beforeunload', function () {
                                                                x.fireAndForget()
                                                            }),
                                                            window.addEventListener('unload', function () {
                                                                x.fireAndForget()
                                                            }),
                                                            Sr(f, function () {
                                                                Vr()
                                                            }),
                                                            C({ updateProps: T, close: Vr })
                                                    )
                                                })
                                                .then(function () {
                                                    return ((n = o.width),
                                                        (e = void 0 !== n && n),
                                                        (r = o.height),
                                                        (t = void 0 !== r && r),
                                                        (i = o.element),
                                                        kn(void 0 === i ? 'body' : i)
                                                            .catch(sn)
                                                            .then(function (n) {
                                                                return { width: e, height: t, element: n }
                                                            })).then(function (n) {
                                                        var e = n.width,
                                                            r = n.height,
                                                            t = n.element
                                                        t &&
                                                        (e || r) &&
                                                        m !== Ur.POPUP &&
                                                        Jn(
                                                            t,
                                                            function (n) {
                                                                N({ width: e ? n.width : void 0, height: r ? n.height : void 0 })
                                                            },
                                                            { width: e, height: r },
                                                        )
                                                    })
                                                    var n, e, r, t, i
                                                })
                                                .catch(function (n) {
                                                    _(n)
                                                })
                                        },
                                        getProps: function () {
                                            return e || (k(y, s), e)
                                        },
                                    }
                                })(t)
                                return n.init(), n
                            }
                        })
                    if (
                        (w(),
                            (e = Ke('zoid_allow_delegate_' + o, function () {
                                return !0
                            })),
                            (r = Ke('zoid_delegate_' + o, function (n) {
                                var e = n.data
                                return { parent: nt({ uid: e.uid, options: t, overrides: e.overrides, parentWin: n.source }) }
                            })),
                            ot.register(e.cancel),
                            ot.register(r.cancel),
                            (f.components = f.components || {}),
                            f.components[a])
                    )
                        throw new Error('Can not register multiple components with the same tag: ' + a)
                    return (
                        (f.components[a] = !0),
                            {
                                init: function n(e) {
                                    var r,
                                        f = 'zoid-' + a + '-' + tn(),
                                        l = e || {},
                                        w = c({ props: l }),
                                        p = w.eligible,
                                        v = w.reason,
                                        m = l.onDestroy
                                    l.onDestroy = function () {
                                        if ((r && p && s.splice(s.indexOf(r), 1), m)) return m.apply(void 0, arguments)
                                    }
                                    var y = nt({ uid: f, options: t })
                                    y.init(),
                                        p ? y.setProps(l) : l.onDestroy && l.onDestroy(),
                                        tt.register(function (n) {
                                            return y.destroy(n || new Error('zoid destroyed all components'))
                                        })
                                    var g = function (e) {
                                            var r = (void 0 === e ? {} : e).decorate
                                            return n((void 0 === r ? vn : r)(l))
                                        },
                                        b = function (n, e, t) {
                                            return h
                                                .try(function () {
                                                    if (!p) {
                                                        var e = new Error(v || o + ' component is not eligible')
                                                        return y.destroy(e).then(function () {
                                                            throw e
                                                        })
                                                    }
                                                    if (!Dr(n)) throw new Error('Must pass window to renderTo')
                                                    return (function (n, e) {
                                                        return h.try(function () {
                                                            if (n.window) return er(n.window).getType()
                                                            if (e) {
                                                                if (e !== Ur.IFRAME && e !== Ur.POPUP) throw new Error('Unrecognized context: ' + e)
                                                                return e
                                                            }
                                                            return u
                                                        })
                                                    })(l, t)
                                                })
                                                .then(function (o) {
                                                    if (
                                                        ((e = (function (n, e) {
                                                            if (e) {
                                                                if ('string' != typeof e && !Q(e))
                                                                    throw new TypeError('Expected string or element selector to be passed')
                                                                return e
                                                            }
                                                            if (n === Ur.POPUP) return 'body'
                                                            throw new Error('Expected element to be passed to render iframe')
                                                        })(o, e)),
                                                        n !== window && 'string' != typeof e)
                                                    )
                                                        throw new Error('Must pass string element when rendering to another window')
                                                    return y.render({
                                                        target: n,
                                                        container: e,
                                                        context: o,
                                                        rerender: function () {
                                                            var o = g()
                                                            return pn(r, o), o.renderTo(n, e, t)
                                                        },
                                                    })
                                                })
                                                .catch(function (n) {
                                                    return y.destroy(n).then(function () {
                                                        throw n
                                                    })
                                                })
                                        }
                                    return (
                                        (r = i(
                                            {},
                                            y.getExports(),
                                            y.getHelpers(),
                                            (function () {
                                                for (
                                                    var n = d(),
                                                        e = {},
                                                        r = function (r, t) {
                                                            var o = t[r],
                                                                a = n[o]
                                                            e[o] = function (n) {
                                                                var e = y.getProps(),
                                                                    r = i({}, n, { parent: { uid: f, props: e, export: y.export } })
                                                                return a(r)
                                                            }
                                                        },
                                                        t = 0,
                                                        o = Object.keys(n);
                                                    t < o.length;
                                                    t++
                                                )
                                                    r(t, o)
                                                return e
                                            })(),
                                            {
                                                isEligible: function () {
                                                    return p
                                                },
                                                clone: g,
                                                render: function (n, e) {
                                                    return b(window, n, e)
                                                },
                                                renderTo: function (n, e, r) {
                                                    return b(n, e, r)
                                                },
                                            },
                                        )),
                                        p && s.push(r),
                                            r
                                    )
                                },
                                instances: s,
                                driver: function (n, e) {
                                    throw new Error('Driver support not enabled')
                                },
                                isChild: l,
                                canRenderTo: function (n) {
                                    return nr(n, 'zoid_allow_delegate_' + o)
                                        .then(function (n) {
                                            return n.data
                                        })
                                        .catch(function () {
                                            return !1
                                        })
                                },
                                registerChild: w,
                            }
                    )
                }
                var at = function (n) {
                    var e, r, t, o
                    ne().initialized ||
                    ((ne().initialized = !0),
                        (r = (e = { on: Ke, send: nr }).on),
                        (t = e.send),
                        ((o = ne()).receiveMessage =
                            o.receiveMessage ||
                            function (n) {
                                return $e(n, { on: r, send: t })
                            }),
                        (function (n) {
                            var e = n.on,
                                r = n.send
                            re().getOrSet('postMessageListener', function () {
                                return Mn(window, 'message', function (n) {
                                    !(function (n, e) {
                                        var r = e.on,
                                            t = e.send
                                        h.try(function () {
                                            var e = n.source || n.sourceElement,
                                                o = n.origin || (n.originalEvent && n.originalEvent.origin),
                                                i = n.data
                                            if (('null' === o && (o = 'file://'), e)) {
                                                if (!o) throw new Error('Post message did not have origin domain')
                                                $e({ source: e, origin: o, data: i }, { on: r, send: t })
                                            }
                                        })
                                    })(n, { on: e, send: r })
                                })
                            })
                        })({ on: Ke, send: nr }),
                        ke({ on: Ke, send: nr, receiveMessage: $e }),
                        (function (n) {
                            var e = n.on,
                                r = n.send
                            re('builtinListeners').getOrSet('helloListener', function () {
                                var n = e('postrobot_hello', { domain: '*' }, function (n) {
                                        return ce(n.source, { domain: n.origin }), { instanceID: ue() }
                                    }),
                                    t = F()
                                return t && de(t, { send: r }).catch(function (n) {}), n
                            })
                        })({ on: Ke, send: nr }))
                    var i = it(n),
                        a = function (n) {
                            return i.init(n)
                        }
                    ;(a.driver = function (n, e) {
                        return i.driver(n, e)
                    }),
                        (a.isChild = function () {
                            return i.isChild()
                        }),
                        (a.canRenderTo = function (n) {
                            return i.canRenderTo(n)
                        }),
                        (a.instances = i.instances)
                    var u = i.registerChild()
                    return u && (window.xprops = a.xprops = u.getProps()), a
                }
                function ut(n) {
                    Qe && Qe.destroyBridges()
                    var e = tt.all(n)
                    return (tt = _n()), e
                }
                var ct = ut
                function dt(n) {
                    return (
                        ct(),
                            delete window.__zoid_9_0_87__,
                            (function () {
                                for (var n = re('responseListeners'), e = 0, r = n.keys(); e < r.length; e++) {
                                    var t = r[e],
                                        o = n.get(t)
                                    o && (o.cancelled = !0), n.del(t)
                                }
                            })(),
                        (e = re().get('postMessageListener')) && e.cancel(),
                            delete window.__post_robot_10_0_46__,
                            ot.all(n)
                    )
                    var e
                }
            },
        ])
    })
//# sourceMappingURL=zoid.min.js.map




    !function(root, factory) {
        "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("pragmatic", [], factory) : "object" == typeof exports ? exports.pragmatic = factory() : root.pragmatic = factory();
    }("undefined" != typeof self ? self : this, (function() {
        return function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
                if (installedModules[moduleId]) return installedModules[moduleId].exports;
                var module = installedModules[moduleId] = {
                    i: moduleId,
                    l: !1,
                    exports: {}
                };
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                module.l = !0;
                return module.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports, name, getter) {
                __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                    enumerable: !0,
                    get: getter
                });
            };
            __webpack_require__.r = function(exports) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                });
            };
            __webpack_require__.t = function(value, mode) {
                1 & mode && (value = __webpack_require__(value));
                if (8 & mode) return value;
                if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                var ns = Object.create(null);
                __webpack_require__.r(ns);
                Object.defineProperty(ns, "default", {
                    enumerable: !0,
                    value: value
                });
                if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                    return value[key];
                }.bind(null, key));
                return ns;
            };
            __webpack_require__.n = function(module) {
                var getter = module && module.__esModule ? function() {
                    return module.default;
                } : function() {
                    return module;
                };
                __webpack_require__.d(getter, "a", getter);
                return getter;
            };
            __webpack_require__.o = function(object, property) {
                return {}.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = 0);
        }([ function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "ElementNode", (function() {
                return node_ElementNode;
            }));
            __webpack_require__.d(__webpack_exports__, "FragmentNode", (function() {
                return node_FragmentNode;
            }));
            __webpack_require__.d(__webpack_exports__, "TextNode", (function() {
                return node_TextNode;
            }));
            __webpack_require__.d(__webpack_exports__, "ComponentNode", (function() {
                return node_ComponentNode;
            }));
            __webpack_require__.d(__webpack_exports__, "node", (function() {
                return node_node;
            }));
            __webpack_require__.d(__webpack_exports__, "Fragment", (function() {
                return Fragment;
            }));
            __webpack_require__.d(__webpack_exports__, "text", (function() {
                return text_text;
            }));
            __webpack_require__.d(__webpack_exports__, "dom", (function() {
                return dom;
            }));
            __webpack_require__.d(__webpack_exports__, "react", (function() {
                return react;
            }));
            __webpack_require__.d(__webpack_exports__, "html", (function() {
                return html;
            }));
            __webpack_require__.d(__webpack_exports__, "preact", (function() {
                return preact;
            }));
            __webpack_require__.d(__webpack_exports__, "regex", (function() {
                return regex;
            }));
            __webpack_require__.d(__webpack_exports__, "NODE_TYPE", (function() {
                return NODE_TYPE;
            }));
            __webpack_require__.d(__webpack_exports__, "Style", (function() {
                return Style;
            }));
            __webpack_require__.d(__webpack_exports__, "Regex", (function() {
                return Regex;
            }));
            __webpack_require__.d(__webpack_exports__, "RegexText", (function() {
                return RegexText;
            }));
            __webpack_require__.d(__webpack_exports__, "RegexWord", (function() {
                return RegexWord;
            }));
            __webpack_require__.d(__webpack_exports__, "RegexCharacters", (function() {
                return RegexCharacters;
            }));
            __webpack_require__.d(__webpack_exports__, "RegexGroup", (function() {
                return RegexGroup;
            }));
            __webpack_require__.d(__webpack_exports__, "RegexUnion", (function() {
                return RegexUnion;
            }));
            var NODE_TYPE = {
                ELEMENT: "element",
                TEXT: "text",
                COMPONENT: "component",
                FRAGMENT: "fragment"
            };
            function _renderChildren(children, renderer) {
                var result = [];
                for (var _i2 = 0; _i2 < children.length; _i2++) {
                    var renderedChild = children[_i2].render(renderer);
                    if (renderedChild) if (Array.isArray(renderedChild)) for (var _i4 = 0; _i4 < renderedChild.length; _i4++) {
                        var subchild = renderedChild[_i4];
                        subchild && result.push(subchild);
                    } else result.push(renderedChild);
                }
                return result;
            }
            var node_ElementNode = function() {
                function ElementNode(name, props, children) {
                    this.type = NODE_TYPE.ELEMENT;
                    this.name = void 0;
                    this.props = void 0;
                    this.children = void 0;
                    this.onRender = void 0;
                    this.name = name;
                    this.props = props || {};
                    this.children = children;
                    var onRender = this.props.onRender;
                    if ("function" == typeof onRender) {
                        this.onRender = onRender;
                        delete props.onRender;
                    }
                }
                var _proto = ElementNode.prototype;
                _proto.render = function(renderer) {
                    var el = renderer(this);
                    this.onRender && this.onRender(el);
                    return el;
                };
                _proto.renderChildren = function(renderer) {
                    return _renderChildren(this.children, renderer);
                };
                return ElementNode;
            }();
            var node_FragmentNode = function() {
                function FragmentNode(children) {
                    this.type = NODE_TYPE.FRAGMENT;
                    this.children = void 0;
                    this.children = children;
                }
                FragmentNode.prototype.render = function(renderer) {
                    return _renderChildren(this.children, renderer);
                };
                return FragmentNode;
            }();
            var node_TextNode = function() {
                function TextNode(text) {
                    this.type = NODE_TYPE.TEXT;
                    this.text = void 0;
                    this.text = text;
                }
                TextNode.prototype.render = function(renderer) {
                    return renderer(this);
                };
                return TextNode;
            }();
            var node_ComponentNode = function() {
                function ComponentNode(component, props, children) {
                    this.type = NODE_TYPE.COMPONENT;
                    this.component = void 0;
                    this.props = void 0;
                    this.children = void 0;
                    this.component = component;
                    this.props = props || {};
                    this.children = children;
                    this.props.children = children;
                }
                var _proto4 = ComponentNode.prototype;
                _proto4.renderComponent = function(renderer) {
                    var child = function(child) {
                        var children = normalizeChildren(Array.isArray(child) ? child : [ child ]);
                        return 1 === children.length ? children[0] : children.length > 1 ? new node_FragmentNode(children) : void 0;
                    }(this.component(this.props, this.children));
                    if (child) return child.render(renderer);
                };
                _proto4.render = function(renderer) {
                    return renderer(this);
                };
                _proto4.renderChildren = function(renderer) {
                    return _renderChildren(this.children, renderer);
                };
                return ComponentNode;
            }();
            function normalizeChildren(children) {
                var result = [];
                for (var _i6 = 0; _i6 < children.length; _i6++) {
                    var child = children[_i6];
                    if (child) if ("string" == typeof child || "number" == typeof child) result.push(new node_TextNode(child.toString())); else {
                        if ("boolean" == typeof child) continue;
                        if (Array.isArray(child)) for (var _i8 = 0, _normalizeChildren2 = normalizeChildren(child); _i8 < _normalizeChildren2.length; _i8++) result.push(_normalizeChildren2[_i8]); else {
                            if (!child || child.type !== NODE_TYPE.ELEMENT && child.type !== NODE_TYPE.TEXT && child.type !== NODE_TYPE.COMPONENT) throw new TypeError("Unrecognized node type: " + typeof child);
                            result.push(child);
                        }
                    }
                }
                return result;
            }
            var node_node = function(element, props) {
                for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) children[_key - 2] = arguments[_key];
                children = normalizeChildren(children);
                if ("string" == typeof element) return new node_ElementNode(element, props, children);
                if ("function" == typeof element) return new node_ComponentNode(element, props, children);
                throw new TypeError("Expected jsx element to be a string or a function");
            };
            var Fragment = function(props, children) {
                return children;
            };
            function text_text() {
                return function textRenderer(node) {
                    if (node.type === NODE_TYPE.COMPONENT) return [].concat(node.renderComponent(textRenderer)).join("");
                    if (node.type === NODE_TYPE.ELEMENT) throw new Error("Text renderer does not support basic elements");
                    if (node.type === NODE_TYPE.TEXT) return node.text;
                    throw new TypeError("Unhandleable node: " + node.type);
                };
            }
            function isDefined(val) {
                return null != val;
            }
            var _ELEMENT_DEFAULT_XML_, _ATTRIBUTE_DEFAULT_XM, _ADD_CHILDREN;
            var ELEMENT_DEFAULT_XML_NAMESPACE = ((_ELEMENT_DEFAULT_XML_ = {}).svg = "http://www.w3.org/2000/svg",
                _ELEMENT_DEFAULT_XML_);
            var ATTRIBUTE_DEFAULT_XML_NAMESPACE = ((_ATTRIBUTE_DEFAULT_XM = {})["xlink:href"] = "http://www.w3.org/1999/xlink",
                _ATTRIBUTE_DEFAULT_XM);
            function createTextElement(doc, node) {
                return doc.createTextNode(node.text);
            }
            function addProps(el, node) {
                var props = node.props;
                for (var _i4 = 0, _Object$keys2 = Object.keys(props); _i4 < _Object$keys2.length; _i4++) {
                    var prop = _Object$keys2[_i4];
                    var val = props[prop];
                    if (null != val && "el" !== prop && "innerHTML" !== prop) if (prop.match(/^on[A-Z][a-z]/) && "function" == typeof val) el.addEventListener(prop.slice(2).toLowerCase(), val); else if ("string" == typeof val || "number" == typeof val) {
                        var xmlNamespace = ATTRIBUTE_DEFAULT_XML_NAMESPACE[prop];
                        xmlNamespace ? el.setAttributeNS(xmlNamespace, prop, val.toString()) : el.setAttribute(prop, val.toString());
                    } else "boolean" == typeof val && !0 === val && el.setAttribute(prop, "");
                }
                "iframe" !== el.tagName.toLowerCase() || props.id || el.setAttribute("id", "jsx-iframe-" + "xxxxxxxxxx".replace(/./g, (function() {
                    return "0123456789abcdef".charAt(Math.floor(Math.random() * "0123456789abcdef".length));
                })));
            }
            var ADD_CHILDREN = ((_ADD_CHILDREN = {}).iframe = function(el, node) {
                var firstChild = node.children[0];
                if (1 !== node.children.length || !firstChild || firstChild.type !== NODE_TYPE.ELEMENT || "html" !== firstChild.name) throw new Error("Expected only single html element node as child of iframe element");
                el.addEventListener("load", (function() {
                    var win = el.contentWindow;
                    if (!win) throw new Error("Expected frame to have contentWindow");
                    var doc = win.document;
                    var docElement = doc.documentElement;
                    for (;docElement.children && docElement.children.length; ) docElement.removeChild(docElement.children[0]);
                    var child = firstChild.render(dom({
                        doc: doc
                    }));
                    for (;child.children.length; ) docElement.appendChild(child.children[0]);
                }));
            }, _ADD_CHILDREN.script = function(el, node) {
                var firstChild = node.children[0];
                if (1 !== node.children.length || !firstChild || firstChild.type !== NODE_TYPE.TEXT) throw new Error("Expected only single text node as child of script element");
                el.text = firstChild.text;
            }, _ADD_CHILDREN.default = function(el, node, renderer) {
                for (var _i6 = 0, _node$renderChildren2 = node.renderChildren(renderer); _i6 < _node$renderChildren2.length; _i6++) el.appendChild(_node$renderChildren2[_i6]);
            }, _ADD_CHILDREN);
            function addChildren(el, node, doc, renderer) {
                if (node.props.hasOwnProperty("innerHTML")) {
                    if (node.children.length) throw new Error("Expected no children to be passed when innerHTML prop is set");
                    var html = node.props.innerHTML;
                    if ("string" != typeof html) throw new TypeError("innerHTML prop must be string");
                    if ("script" === node.name) el.text = html; else {
                        el.innerHTML = html;
                        !function(el, doc) {
                            void 0 === doc && (doc = window.document);
                            for (var _i2 = 0, _el$querySelectorAll2 = el.querySelectorAll("script"); _i2 < _el$querySelectorAll2.length; _i2++) {
                                var script = _el$querySelectorAll2[_i2];
                                var parentNode = script.parentNode;
                                if (parentNode) {
                                    var newScript = doc.createElement("script");
                                    newScript.text = script.textContent;
                                    parentNode.replaceChild(newScript, script);
                                }
                            }
                        }(el, doc);
                    }
                } else (ADD_CHILDREN[node.name] || ADD_CHILDREN.default)(el, node, renderer);
            }
            function dom(opts) {
                void 0 === opts && (opts = {});
                var _opts$doc = opts.doc, doc = void 0 === _opts$doc ? document : _opts$doc;
                return function domRenderer(node) {
                    if (node.type === NODE_TYPE.COMPONENT) return node.renderComponent(domRenderer);
                    if (node.type === NODE_TYPE.TEXT) return createTextElement(doc, node);
                    if (node.type === NODE_TYPE.ELEMENT) {
                        var xmlNamespace = ELEMENT_DEFAULT_XML_NAMESPACE[node.name.toLowerCase()];
                        if (xmlNamespace) return function xmlNamespaceDomRenderer(node, xmlNamespace) {
                            if (node.type === NODE_TYPE.COMPONENT) return node.renderComponent((function(childNode) {
                                return xmlNamespaceDomRenderer(childNode, xmlNamespace);
                            }));
                            if (node.type === NODE_TYPE.TEXT) return createTextElement(doc, node);
                            if (node.type === NODE_TYPE.ELEMENT) {
                                var el = function(doc, node, xmlNamespace) {
                                    return doc.createElementNS(xmlNamespace, node.name);
                                }(doc, node, xmlNamespace);
                                addProps(el, node);
                                addChildren(el, node, doc, (function(childNode) {
                                    return xmlNamespaceDomRenderer(childNode, xmlNamespace);
                                }));
                                return el;
                            }
                            throw new TypeError("Unhandleable node");
                        }(node, xmlNamespace);
                        var el = function(doc, node) {
                            return node.props.el ? node.props.el : doc.createElement(node.name);
                        }(doc, node);
                        addProps(el, node);
                        addChildren(el, node, doc, domRenderer);
                        return el;
                    }
                    throw new TypeError("Unhandleable node");
                };
            }
            function _extends() {
                return (_extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }).apply(this, arguments);
            }
            function _objectWithoutPropertiesLoose(source, excluded) {
                if (null == source) return {};
                var target = {};
                var sourceKeys = Object.keys(source);
                var key, i;
                for (i = 0; i < sourceKeys.length; i++) excluded.indexOf(key = sourceKeys[i]) >= 0 || (target[key] = source[key]);
                return target;
            }
            var _excluded = [ "innerHTML", "class" ];
            function react(_temp) {
                var React = (void 0 === _temp ? {} : _temp).React;
                if (!React) throw new Error("Must pass React library to react renderer");
                return function reactRenderer(node) {
                    if (node.type === NODE_TYPE.COMPONENT) return React.createElement.apply(React, [ function() {
                        return node.renderComponent(reactRenderer) || null;
                    }, node.props ].concat(node.renderChildren(reactRenderer)));
                    if (node.type === NODE_TYPE.ELEMENT) return React.createElement.apply(React, [ node.name, (props = node.props,
                        innerHTML = props.innerHTML, _extends({
                        dangerouslySetInnerHTML: innerHTML ? {
                            __html: innerHTML
                        } : null,
                        className: props.class
                    }, _objectWithoutPropertiesLoose(props, _excluded))) ].concat(node.renderChildren(reactRenderer)));
                    var props, innerHTML;
                    if (node.type === NODE_TYPE.TEXT) return node.text;
                    throw new TypeError("Unhandleable node");
                };
            }
            var SELF_CLOSING_TAGS = {
                br: !0
            };
            function htmlEncode(text) {
                return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;");
            }
            function html() {
                return function htmlRenderer(node) {
                    if (node.type === NODE_TYPE.COMPONENT) return [].concat(node.renderComponent(htmlRenderer)).join("");
                    if (node.type === NODE_TYPE.ELEMENT) {
                        var renderedProps = (props = node.props, (keys = Object.keys(props).filter((function(key) {
                            var val = props[key];
                            return "innerHTML" !== key && ("string" == typeof val || "number" == typeof val || !0 === val);
                        }))).length ? " " + keys.map((function(key) {
                            var val = props[key];
                            if (!0 === val) return "" + htmlEncode(key);
                            if ("string" != typeof val && "number" != typeof val) throw new TypeError("Unexpected prop type: " + typeof val);
                            return "" === val ? htmlEncode(key) : htmlEncode(key) + '="' + htmlEncode(val.toString()) + '"';
                        })).join(" ") : "");
                        if (SELF_CLOSING_TAGS[node.name]) return "<" + node.name + renderedProps + " />";
                        var renderedChildren = "string" == typeof node.props.innerHTML ? node.props.innerHTML : node.renderChildren(htmlRenderer).join("");
                        return "<" + node.name + renderedProps + ">" + renderedChildren + "</" + node.name + ">";
                    }
                    var props, keys;
                    if (node.type === NODE_TYPE.TEXT) return htmlEncode(node.text);
                    throw new TypeError("Unhandleable node: " + node.type);
                };
            }
            var preact_excluded = [ "innerHTML" ];
            function preact(_temp) {
                var Preact = (void 0 === _temp ? {} : _temp).Preact;
                if (!Preact) throw new Error("Must pass Preact library to react renderer");
                return function reactRenderer(node) {
                    if (node.type === NODE_TYPE.COMPONENT) return Preact.h.apply(Preact, [ function() {
                        return node.renderComponent(reactRenderer) || null;
                    }, node.props ].concat(node.renderChildren(reactRenderer)));
                    if (node.type === NODE_TYPE.ELEMENT) return Preact.h.apply(Preact, [ node.name, (props = node.props,
                        innerHTML = props.innerHTML, _extends({
                        dangerouslySetInnerHTML: innerHTML ? {
                            __html: innerHTML
                        } : null
                    }, _objectWithoutPropertiesLoose(props, preact_excluded))) ].concat(node.renderChildren(reactRenderer)));
                    var props, innerHTML;
                    if (node.type === NODE_TYPE.TEXT) return node.text;
                    throw new TypeError("Unhandleable node");
                };
            }
            function regex() {
                var regexRenderer = text_text();
                return function(nodeInstance) {
                    return new RegExp(regexRenderer(nodeInstance));
                };
            }
            regex.node = function(el, props) {
                for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) children[_key - 2] = arguments[_key];
                var nodeInstance = node_node.apply(void 0, [ el, props ].concat(children));
                return el.renderer ? nodeInstance.render(el.renderer()) : nodeInstance;
            };
            function Style(_ref) {
                var css = _ref.css, nonce = _ref.nonce, children = _ref.children;
                return node_node(Fragment, null, node_node("style", {
                    innerHTML: "string" == typeof css ? css : css._getCss(),
                    nonce: nonce
                }), children);
            }
            var escapeRegex = function(text) {
                return text.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
            };
            var regex_validateAndEscapeChildren = function(name, children) {
                return (children = function(name, children) {
                    if (!children) throw new Error("Must pass children to " + name);
                    return children;
                }(name, children)).map((function(child) {
                    return child.type === NODE_TYPE.TEXT ? new node_TextNode(escapeRegex(child.text)) : child;
                }));
            };
            function Regex(_ref, children) {
                var _ref$exact = _ref.exact, exact = void 0 === _ref$exact || _ref$exact;
                children = regex_validateAndEscapeChildren("RegexGroup", children);
                return exact ? [ "^" ].concat(children, [ "$" ]) : children;
            }
            Regex.renderer = regex;
            function RegexText(props, children) {
                return regex_validateAndEscapeChildren("RegexText", children);
            }
            function RegexWord(props, children) {
                !function(name, children) {
                    if (children && children.length) throw new Error("Must not pass children to RegexWord");
                }(0, children);
                return "\\w+";
            }
            function RegexCharacters(props, children) {
                return [ "[" ].concat(regex_validateAndEscapeChildren("RegexText", children), [ "]" ]);
            }
            function RegexGroup(_ref2, children) {
                var repeat = _ref2.repeat, repeatMin = _ref2.repeatMin, repeatMax = _ref2.repeatMax, name = _ref2.name, _ref2$optional = _ref2.optional, optional = void 0 !== _ref2$optional && _ref2$optional, _ref2$capture = _ref2.capture, capture = void 0 === _ref2$capture || _ref2$capture, _ref2$union = _ref2.union, union = void 0 !== _ref2$union && _ref2$union;
                children = regex_validateAndEscapeChildren("RegexGroup", children);
                if (isDefined(repeat) && (isDefined(repeatMin) || isDefined(repeatMax))) throw new Error("repeat can not be used with repeatMin or repeatMax");
                if (name && !capture) throw new Error("Named groups must be captured");
                if (union) {
                    var _result = [];
                    for (var _i2 = 0, _children2 = children; _i2 < _children2.length; _i2++) {
                        _result.push(_children2[_i2]);
                        _result.push(new node_TextNode("|"));
                    }
                    _result.pop();
                    children = _result;
                }
                var result = [];
                result.push(capture ? "(" : "(?:");
                name && result.push("?<" + escapeRegex(name) + ">");
                result.push.apply(result, children);
                result.push(")");
                isDefined(repeat) && ("number" == typeof repeat ? result.push("{" + repeat + "}") : !0 === repeat && result.push("+"));
                (isDefined(repeatMin) || isDefined(repeatMax)) && result.push("{" + (repeatMin || "") + "," + (repeatMax || "") + "}");
                optional && result.push("?");
                return result;
            }
            function RegexUnion(props, children) {
                var result = [];
                for (var _i4 = 0, _children4 = children = regex_validateAndEscapeChildren("RegexGroup", children); _i4 < _children4.length; _i4++) {
                    result.push(_children4[_i4]);
                    result.push("|");
                }
                result.pop();
                return result;
            }
        } ]);
    }));


    window.badFeatured = zoid.create({
        dimensions: {
            width: "100%",
            height: "322px"
        },
        attributes: {
            iframe: {
                scrolling: "no",
            },
        },
        props: {
            accessKey: {
                type: 'string',
                queryParam: true,
                required: true,
            },
        },
        tag: "bad-featured",
        url: "https://bandit-ui-core.vercel.app/widgets/featured-collections"

    })


    window.badStats = zoid.create({
        dimensions: {
            width: "100%",
            height: "900px"
        },
        attributes: {
            iframe: {
                scrolling: "no",
            },
        },
        props: {
            accessKey: {
                type: 'string',
                queryParam: true,
                required: true,
            },
        },
        tag: "bad-stats",
        url: "https://bandit-ui-core.vercel.app/widgets/stats"

    })


    window.renderCollection = function (collectionId, from){
        const ele = document.createElement("div")
        // ele.className = "collection-overlay"
        // ele.id = "collection-overlay"
        ele.innerHTML = ` <div id="collection-overlay" class="collection-overlay" style="position: fixed;top: 0;left: 0;z-index: 99999999;background: rgba(0,0,0,0.8);overflow-y: hidden;cursor: pointer;width: 100%;height: 100%;opacity: 1">
                     <div id="bad-collection" class="overlay-content" style="height: calc(100vh - 40px);overflow-y: auto;background: white;cursor: default;margin-top: 40px;border-top-left-radius: 20px;border-top-right-radius: 20px"></div>
                    </div>
                    `
        document.body.appendChild(ele)


        const accessKey = from === "f" ? document.querySelector('#bad-featured').dataset.accessKey : document.querySelector('#bad-stats').dataset.accessKey


        badCollection({
            collectionId,
            accessKey,
            removeOverlay: function (){
                const overlayEle =   document.getElementById("collection-overlay")
                if(!!overlayEle){
                    overlayEle.remove()
                }

            },
            showMint: function (){
                badMint().render("body", zoid.CONTEXT.POPUP)
            }
        }).render("#bad-collection")
    }

    window.badCollection = zoid.create({
        dimensions: {
            width: "100%",
            height: "100%"
        },
        attributes: {
            iframe: {
                scrolling: "no",
            },
        },
        props:{
            collectionId: {
                type: 'number',
                queryParam: true,
                required: true
            },
            accessKey: {
                type: 'string',
                queryParam: true,
                required: true
            },
        },
        tag: "bad-collection",
        url: "https://bandit-ui-core.vercel.app/widgets/collection",

    })



    window.badMint = zoid.create({
        dimensions: {
            width: '500px',
            height: '500px',
        },
        attributes: {
            iframe: {
                scrolling: 'no',
            },
        },
        props:{
            collectionId: {
                type: 'number',
                queryParam: true,
                required: true
            },
            accessKey: {
                type: 'string',
                queryParam: true,
                required: true
            },
        },
        tag: 'bad-mint',
        url: 'https://bandit-ui-core.vercel.app/widgets/mint',

        containerTemplate: ({ uid, tag, context, focus, close, doc }) => {
            function closeComponent(event) {
                event.preventDefault();
                event.stopPropagation();
                return close();
            }

            function focusComponent(event) {
                event.preventDefault();
                event.stopPropagation();
                return focus();
            }

            return pragmatic
                .node(
                    "div",
                    {
                        id: uid,
                        onClick: focusComponent,
                        class: `${tag} ${tag}-context-${context} ${tag}-focus`,
                    },

                    pragmatic.node("a", {
                        href: "#",
                        onClick: closeComponent,
                        class: `${tag}-close`,
                    }),

                    pragmatic.node(
                        "style",
                        null,
                        `
                #${uid} {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.8);
                    z-index: 4;
                }
                #${uid}.${tag}-context-${zoid.CONTEXT.POPUP} {
                    cursor: pointer;
                }
                #${uid} .${tag}-close {
                    position: absolute;
                    right: 16px;
                    top: 16px;
                    width: 16px;
                    height: 16px;
                    opacity: 0.6;
                }
                #${uid} .${tag}-close:hover {
                    opacity: 1;
                }
                #${uid} .${tag}-close:before,
                #${uid} .${tag}-close:after {
                    position: absolute;
                    left: 8px;
                    content: ' ';
                    height: 16px;
                    width: 2px;
                    background-color: white;
                }
                #${uid} .${tag}-close:before {
                    transform: rotate(45deg);
                }
                #${uid} .${tag}-close:after {
                    transform: rotate(-45deg);
                }
            `
                    )
                )
                .render(pragmatic.dom({ doc }));
        },
    })
})();
