var gapi = (window.gapi = window.gapi || {});
gapi._bs = new Date().getTime();
(function () {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var g = this || self,
        h = function (a) {
            return a;
        },
        m = function (a) {
            var b = null,
                c = g.trustedTypes || g.TrustedTypes;
            if (!c || !c.createPolicy) return b;
            try {
                b = c.createPolicy(a, {
                    createHTML: h,
                    createScript: h,
                    createScriptURL: h,
                    createURL: h,
                });
            } catch (d) {
                g.console && g.console.error(d.message);
            }
            return b;
        };
    var n = m('gapi#html');
    var q = function () {
        this.g = '';
    };
    q.prototype.toString = function () {
        return 'SafeScript{' + this.g + '}';
    };
    q.prototype.a = function (a) {
        this.g = n ? n.createScript(a) : a;
    };
    new q().a('');
    var v = function () {
        this.j = '';
    };
    v.prototype.toString = function () {
        return 'SafeStyle{' + this.j + '}';
    };
    v.prototype.a = function (a) {
        this.j = a;
    };
    new v().a('');
    var x = function () {
        this.i = '';
    };
    x.prototype.toString = function () {
        return 'SafeStyleSheet{' + this.i + '}';
    };
    x.prototype.a = function (a) {
        this.i = a;
    };
    new x().a('');
    var y = function () {
        this.f = '';
    };
    y.prototype.toString = function () {
        return 'SafeHtml{' + this.f + '}';
    };
    y.prototype.a = function (a) {
        this.f = n ? n.createHTML(a) : a;
    };
    new y().a('<!DOCTYPE html>');
    new y().a('');
    new y().a('<br>'); /*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var D = window,
        E = document,
        aa = D.location,
        ba = function () {},
        ca = /\[native code\]/,
        F = function (a, b, c) {
            return (a[b] = a[b] || c);
        },
        da = function (a) {
            a = a.sort();
            for (var b = [], c = void 0, d = 0; d < a.length; d++) {
                var e = a[d];
                e != c && b.push(e);
                c = e;
            }
            return b;
        },
        G = function () {
            var a;
            if ((a = Object.create) && ca.test(a)) a = a(null);
            else {
                a = {};
                for (var b in a) a[b] = void 0;
            }
            return a;
        },
        H = F(D, 'gapi', {});
    var I;
    I = F(D, '___jsl', G());
    F(I, 'I', 0);
    F(I, 'hel', 10);
    var J = function () {
            var a = aa.href;
            if (I.dpo) var b = I.h;
            else {
                b = I.h;
                var c = /([#].*&|[#])jsh=([^&#]*)/g,
                    d = /([?#].*&|[?#])jsh=([^&#]*)/g;
                if ((a = a && (c.exec(a) || d.exec(a))))
                    try {
                        b = decodeURIComponent(a[2]);
                    } catch (e) {}
            }
            return b;
        },
        ea = function (a) {
            var b = F(I, 'PQ', []);
            I.PQ = [];
            var c = b.length;
            if (0 === c) a();
            else
                for (
                    var d = 0,
                        e = function () {
                            ++d === c && a();
                        },
                        f = 0;
                    f < c;
                    f++
                )
                    b[f](e);
        },
        K = function (a) {
            return F(F(I, 'H', G()), a, G());
        };
    var L = F(I, 'perf', G()),
        O = F(L, 'g', G()),
        fa = F(L, 'i', G());
    F(L, 'r', []);
    G();
    G();
    var P = function (a, b, c) {
            var d = L.r;
            'function' === typeof d ? d(a, b, c) : d.push([a, b, c]);
        },
        R = function (a, b, c) {
            b &&
                0 < b.length &&
                ((b = Q(b)),
                c && 0 < c.length && (b += '___' + Q(c)),
                28 < b.length && (b = b.substr(0, 28) + (b.length - 28)),
                (c = b),
                (b = F(fa, '_p', G())),
                (F(b, c, G())[a] = new Date().getTime()),
                P(a, '_p', c));
        },
        Q = function (a) {
            return a
                .join('__')
                .replace(/\./g, '_')
                .replace(/\-/g, '_')
                .replace(/,/g, '_');
        };
    var S = G(),
        V = [],
        W = function (a) {
            throw Error('Bad hint' + (a ? ': ' + a : ''));
        };
    V.push([
        'jsl',
        function (a) {
            for (var b in a)
                if (Object.prototype.hasOwnProperty.call(a, b)) {
                    var c = a[b];
                    'object' == typeof c
                        ? (I[b] = F(I, b, []).concat(c))
                        : F(I, b, c);
                }
            if ((b = a.u))
                (a = F(I, 'us', [])),
                    a.push(b),
                    (b = /^https:(.*)$/.exec(b)) && a.push('http:' + b[1]);
        },
    ]);
    var ha = /^(\/[a-zA-Z0-9_\-]+)+$/,
        ia = [/\/amp\//, /\/amp$/, /^\/amp$/],
        ja = /^[a-zA-Z0-9\-_\.,!]+$/,
        la = /^gapi\.loaded_[0-9]+$/,
        ma = /^[a-zA-Z0-9,._-]+$/,
        qa = function (a, b, c, d) {
            var e = a.split(';'),
                f = e.shift(),
                l = S[f],
                k = null;
            l ? (k = l(e, b, c, d)) : W('no hint processor for: ' + f);
            k || W('failed to generate load url');
            b = k;
            c = b.match(na);
            ((d = b.match(oa)) &&
                1 === d.length &&
                pa.test(b) &&
                c &&
                1 === c.length) ||
                W('failed sanity: ' + a);
            return k;
        },
        ta = function (a, b, c, d) {
            a = ra(a);
            la.test(c) || W('invalid_callback');
            b = sa(b);
            d = d && d.length ? sa(d) : null;
            var e = function (f) {
                return encodeURIComponent(f).replace(/%2C/g, ',');
            };
            return [
                encodeURIComponent(a.pathPrefix)
                    .replace(/%2C/g, ',')
                    .replace(/%2F/g, '/'),
                '/k=',
                e(a.version),
                '/m=',
                e(b),
                d ? '/exm=' + e(d) : '',
                '/rt=j/sv=1/d=1/ed=1',
                a.b ? '/am=' + e(a.b) : '',
                a.l ? '/rs=' + e(a.l) : '',
                a.o ? '/t=' + e(a.o) : '',
                '/cb=',
                e(c),
            ].join('');
        },
        ra = function (a) {
            '/' !== a.charAt(0) && W('relative path');
            for (var b = a.substring(1).split('/'), c = []; b.length; ) {
                a = b.shift();
                if (!a.length || 0 == a.indexOf('.'))
                    W('empty/relative directory');
                else if (0 < a.indexOf('=')) {
                    b.unshift(a);
                    break;
                }
                c.push(a);
            }
            a = {};
            for (var d = 0, e = b.length; d < e; ++d) {
                var f = b[d].split('='),
                    l = decodeURIComponent(f[0]),
                    k = decodeURIComponent(f[1]);
                2 == f.length && l && k && (a[l] = a[l] || k);
            }
            b = '/' + c.join('/');
            ha.test(b) || W('invalid_prefix');
            c = 0;
            for (d = ia.length; c < d; ++c)
                ia[c].test(b) && W('invalid_prefix');
            c = X(a, 'k', !0);
            d = X(a, 'am');
            e = X(a, 'rs');
            a = X(a, 't');
            return { pathPrefix: b, version: c, b: d, l: e, o: a };
        },
        sa = function (a) {
            for (var b = [], c = 0, d = a.length; c < d; ++c) {
                var e = a[c].replace(/\./g, '_').replace(/-/g, '_');
                ma.test(e) && b.push(e);
            }
            return b.join(',');
        },
        X = function (a, b, c) {
            a = a[b];
            !a && c && W('missing: ' + b);
            if (a) {
                if (ja.test(a)) return a;
                W('invalid: ' + b);
            }
            return null;
        },
        pa = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        oa = /\/cb=/g,
        na = /\/\//g,
        ua = function () {
            var a = J();
            if (!a) throw Error('Bad hint');
            return a;
        };
    S.m = function (a, b, c, d) {
        (a = a[0]) || W('missing_hint');
        return 'https://apis.google.com' + ta(a, b, c, d);
    };
    var Y = decodeURI('%73cript'),
        va = /^[-+_0-9\/A-Za-z]+={0,2}$/,
        wa = function (a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d],
                    f;
                if ((f = e)) {
                    a: {
                        for (f = 0; f < b.length; f++) if (b[f] === e) break a;
                        f = -1;
                    }
                    f = 0 > f;
                }
                f && c.push(e);
            }
            return c;
        },
        xa = function () {
            var a = I.nonce;
            return void 0 !== a
                ? a && a === String(a) && a.match(va)
                    ? a
                    : (I.nonce = null)
                : E.querySelector
                ? (a = E.querySelector('script[nonce]'))
                    ? ((a = a.nonce || a.getAttribute('nonce') || ''),
                      a && a === String(a) && a.match(va)
                          ? (I.nonce = a)
                          : (I.nonce = null))
                    : null
                : null;
        },
        za = function (a) {
            if ('loading' != E.readyState) ya(a);
            else {
                var b = xa(),
                    c = '';
                null !== b && (c = ' nonce="' + b + '"');
                a =
                    '<' +
                    Y +
                    ' src="' +
                    encodeURI(a) +
                    '"' +
                    c +
                    '></' +
                    Y +
                    '>';
                E.write(Z ? Z.createHTML(a) : a);
            }
        },
        ya = function (a) {
            var b = E.createElement(Y);
            b.setAttribute('src', Z ? Z.createScriptURL(a) : a);
            a = xa();
            null !== a && b.setAttribute('nonce', a);
            b.async = 'true';
            (a = E.getElementsByTagName(Y)[0])
                ? a.parentNode.insertBefore(b, a)
                : (E.head || E.body || E.documentElement).appendChild(b);
        },
        Aa = function (a, b) {
            var c = b && b._c;
            if (c)
                for (var d = 0; d < V.length; d++) {
                    var e = V[d][0],
                        f = V[d][1];
                    f &&
                        Object.prototype.hasOwnProperty.call(c, e) &&
                        f(c[e], a, b);
                }
        },
        Ca = function (a, b, c) {
            Ba(function () {
                var d = b === J() ? F(H, '_', G()) : G();
                d = F(K(b), '_', d);
                a(d);
            }, c);
        },
        Ea = function (a, b) {
            var c = b || {};
            'function' == typeof b && ((c = {}), (c.callback = b));
            Aa(a, c);
            b = a ? a.split(':') : [];
            var d = c.h || ua(),
                e = F(I, 'ah', G());
            if (e['::'] && b.length) {
                a = [];
                for (var f = null; (f = b.shift()); ) {
                    var l = f.split('.');
                    l = e[f] || e[(l[1] && 'ns:' + l[0]) || ''] || d;
                    var k = (a.length && a[a.length - 1]) || null,
                        w = k;
                    (k && k.hint == l) || ((w = { hint: l, c: [] }), a.push(w));
                    w.c.push(f);
                }
                var z = a.length;
                if (1 < z) {
                    var A = c.callback;
                    A &&
                        (c.callback = function () {
                            0 == --z && A();
                        });
                }
                for (; (b = a.shift()); ) Da(b.c, c, b.hint);
            } else Da(b || [], c, d);
        },
        Da = function (a, b, c) {
            a = da(a) || [];
            var d = b.callback,
                e = b.config,
                f = b.timeout,
                l = b.ontimeout,
                k = b.onerror,
                w = void 0;
            'function' == typeof k && (w = k);
            var z = null,
                A = !1;
            if ((f && !l) || (!f && l))
                throw 'Timeout requires both the timeout parameter and ontimeout parameter to be set';
            k = F(K(c), 'r', []).sort();
            var T = F(K(c), 'L', []).sort(),
                M = [].concat(k),
                ka = function (u, B) {
                    if (A) return 0;
                    D.clearTimeout(z);
                    T.push.apply(T, p);
                    var C = ((H || {}).config || {}).update;
                    C ? C(e) : e && F(I, 'cu', []).push(e);
                    if (B) {
                        R('me0', u, M);
                        try {
                            Ca(B, c, w);
                        } finally {
                            R('me1', u, M);
                        }
                    }
                    return 1;
                };
            0 < f &&
                (z = D.setTimeout(function () {
                    A = !0;
                    l();
                }, f));
            var p = wa(a, T);
            if (p.length) {
                p = wa(a, k);
                var r = F(I, 'CP', []),
                    t = r.length;
                r[t] = function (u) {
                    if (!u) return 0;
                    R('ml1', p, M);
                    var B = function (N) {
                            r[t] = null;
                            ka(p, u) &&
                                ea(function () {
                                    d && d();
                                    N();
                                });
                        },
                        C = function () {
                            var N = r[t + 1];
                            N && N();
                        };
                    0 < t && r[t - 1]
                        ? (r[t] = function () {
                              B(C);
                          })
                        : B(C);
                };
                if (p.length) {
                    var U = 'loaded_' + I.I++;
                    H[U] = function (u) {
                        r[t](u);
                        H[U] = null;
                    };
                    a = qa(c, p, 'gapi.' + U, k);
                    k.push.apply(k, p);
                    R('ml0', p, M);
                    b.sync || D.___gapisync ? za(a) : ya(a);
                } else r[t](ba);
            } else ka(p) && d && d();
        },
        Z = m('gapi#gapi');
    var Ba = function (a, b) {
        if (I.hee && 0 < I.hel)
            try {
                return a();
            } catch (c) {
                b && b(c),
                    I.hel--,
                    Ea('debug_error', function () {
                        try {
                            window.___jsl.hefn(c);
                        } catch (d) {
                            throw c;
                        }
                    });
            }
        else
            try {
                return a();
            } catch (c) {
                throw (b && b(c), c);
            }
    };
    H.load = function (a, b) {
        return Ba(function () {
            return Ea(a, b);
        });
    };
    O.bs0 = window.gapi._bs || new Date().getTime();
    P('bs0');
    O.bs1 = new Date().getTime();
    P('bs1');
    delete window.gapi._bs;
}.call(this));
gapi.load('client', {
    callback: null,
    _c: {
        jsl: {
            ci: {
                deviceType: 'desktop',
                'oauth-flow': {
                    authUrl: 'https://accounts.google.com/o/oauth2/auth',
                    proxyUrl:
                        'https://accounts.google.com/o/oauth2/postmessageRelay',
                    disableOpt: true,
                    idpIframeUrl: 'https://accounts.google.com/o/oauth2/iframe',
                    usegapi: false,
                },
                debug: {
                    reportExceptionRate: 0.05,
                    forceIm: false,
                    rethrowException: false,
                    host: 'https://apis.google.com',
                },
                enableMultilogin: true,
                'googleapis.config': { auth: { useFirstPartyAuthV2: true } },
                isPlusUser: false,
                inline: { css: 1 },
                disableRealtimeCallback: false,
                drive_share: { skipInitCommand: true },
                csi: { rate: 0.01 },
                client: { cors: false },
                isLoggedIn: true,
                signInDeprecation: { rate: 0.0 },
                include_granted_scopes: true,
                llang: 'en',
                iframes: {
                    youtube: {
                        params: { location: ['search', 'hash'] },
                        url:
                            ':socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1',
                        methods: ['scroll', 'openwindow'],
                    },
                },
            },
            h:
                'm;/_/scs/apps-static/_/js/k\u003doz.gapi.en.ZYuQputBCnk.O/am\u003dwQE/d\u003d1/ct\u003dzgms/rs\u003dAGLTcCOlWCZaI-QxE9CVQQ7sm2T9b08HbA/m\u003d__features__',
            u: 'https://apis.google.com/js/client.js?onload\u003dgapiLoaded',
            hee: true,
            fp: '6e301c87247264f4c3107aeea091727c8400cad9',
            dpo: false,
        },
        fp: '6e301c87247264f4c3107aeea091727c8400cad9',
        annotation: [
            'interactivepost',
            'recobar',
            'signin2',
            'autocomplete',
            'profile',
        ],
        bimodal: ['signin', 'share'],
    },
});
