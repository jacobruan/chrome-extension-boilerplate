'use strict';
var webExtCoreStorage = (() => {
  var e,
    r,
    s,
    g = Object.create,
    a = Object.defineProperty,
    n = Object.getOwnPropertyDescriptor,
    t = Object.getOwnPropertyNames,
    m = Object.getPrototypeOf,
    i = Object.prototype.hasOwnProperty,
    A = (e, r) => {
      for (var s in r) a(e, s, { get: r[s], enumerable: !0 });
    },
    o = (e, r, s, g) => {
      if ((r && 'object' == typeof r) || 'function' == typeof r)
        for (let m of t(r))
          i.call(e, m) ||
            m === s ||
            a(e, m, {
              get: () => r[m],
              enumerable: !(g = n(r, m)) || g.enumerable,
            });
      return e;
    },
    l = (e, r, s) => (
      (s = null != e ? g(m(e)) : {}),
      o(
        !r && e && e.__esModule
          ? s
          : a(s, 'default', { value: e, enumerable: !0 }),
        e,
      )
    ),
    _ = (e) => o(a({}, '__esModule', { value: !0 }), e),
    x = (e, r, s) =>
      new Promise((g, a) => {
        var n = (e) => {
            try {
              m(s.next(e));
            } catch (r) {
              a(r);
            }
          },
          t = (e) => {
            try {
              m(s.throw(e));
            } catch (r) {
              a(r);
            }
          },
          m = (e) =>
            e.done ? g(e.value) : Promise.resolve(e.value).then(n, t);
        m((s = s.apply(e, r)).next());
      }),
    c =
      ((e = {
        '../../node_modules/.pnpm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js'(
          e,
          r,
        ) {
          !(function (s, g) {
            if ('function' == typeof define && define.amd)
              define('webextension-polyfill', ['module'], g);
            else if (void 0 !== e) g(r);
            else {
              var a = { exports: {} };
              g(a), (s.browser = a.exports);
            }
          })(
            'undefined' != typeof globalThis
              ? globalThis
              : 'undefined' != typeof self
                ? self
                : e,
            function (e) {
              var r, s;
              if (
                !(null ==
                (s = null == (r = globalThis.chrome) ? void 0 : r.runtime)
                  ? void 0
                  : s.id)
              )
                throw Error(
                  'This script should only be loaded in a browser extension.',
                );
              void 0 === globalThis.browser ||
              Object.getPrototypeOf(globalThis.browser) !== Object.prototype
                ? (e.exports = ((e) => {
                    let r = {
                      alarms: {
                        clear: { minArgs: 0, maxArgs: 1 },
                        clearAll: { minArgs: 0, maxArgs: 0 },
                        get: { minArgs: 0, maxArgs: 1 },
                        getAll: { minArgs: 0, maxArgs: 0 },
                      },
                      bookmarks: {
                        create: { minArgs: 1, maxArgs: 1 },
                        get: { minArgs: 1, maxArgs: 1 },
                        getChildren: { minArgs: 1, maxArgs: 1 },
                        getRecent: { minArgs: 1, maxArgs: 1 },
                        getSubTree: { minArgs: 1, maxArgs: 1 },
                        getTree: { minArgs: 0, maxArgs: 0 },
                        move: { minArgs: 2, maxArgs: 2 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        removeTree: { minArgs: 1, maxArgs: 1 },
                        search: { minArgs: 1, maxArgs: 1 },
                        update: { minArgs: 2, maxArgs: 2 },
                      },
                      browserAction: {
                        disable: {
                          minArgs: 0,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                        enable: {
                          minArgs: 0,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                        getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                        getBadgeText: { minArgs: 1, maxArgs: 1 },
                        getPopup: { minArgs: 1, maxArgs: 1 },
                        getTitle: { minArgs: 1, maxArgs: 1 },
                        openPopup: { minArgs: 0, maxArgs: 0 },
                        setBadgeBackgroundColor: {
                          minArgs: 1,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                        setBadgeText: {
                          minArgs: 1,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                        setIcon: { minArgs: 1, maxArgs: 1 },
                        setPopup: {
                          minArgs: 1,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                        setTitle: {
                          minArgs: 1,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                      },
                      browsingData: {
                        remove: { minArgs: 2, maxArgs: 2 },
                        removeCache: { minArgs: 1, maxArgs: 1 },
                        removeCookies: { minArgs: 1, maxArgs: 1 },
                        removeDownloads: { minArgs: 1, maxArgs: 1 },
                        removeFormData: { minArgs: 1, maxArgs: 1 },
                        removeHistory: { minArgs: 1, maxArgs: 1 },
                        removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                        removePasswords: { minArgs: 1, maxArgs: 1 },
                        removePluginData: { minArgs: 1, maxArgs: 1 },
                        settings: { minArgs: 0, maxArgs: 0 },
                      },
                      commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                      contextMenus: {
                        remove: { minArgs: 1, maxArgs: 1 },
                        removeAll: { minArgs: 0, maxArgs: 0 },
                        update: { minArgs: 2, maxArgs: 2 },
                      },
                      cookies: {
                        get: { minArgs: 1, maxArgs: 1 },
                        getAll: { minArgs: 1, maxArgs: 1 },
                        getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 },
                      },
                      devtools: {
                        inspectedWindow: {
                          eval: {
                            minArgs: 1,
                            maxArgs: 2,
                            singleCallbackArg: !1,
                          },
                        },
                        panels: {
                          create: {
                            minArgs: 3,
                            maxArgs: 3,
                            singleCallbackArg: !0,
                          },
                          elements: {
                            createSidebarPane: { minArgs: 1, maxArgs: 1 },
                          },
                        },
                      },
                      downloads: {
                        cancel: { minArgs: 1, maxArgs: 1 },
                        download: { minArgs: 1, maxArgs: 1 },
                        erase: { minArgs: 1, maxArgs: 1 },
                        getFileIcon: { minArgs: 1, maxArgs: 2 },
                        open: {
                          minArgs: 1,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                        pause: { minArgs: 1, maxArgs: 1 },
                        removeFile: { minArgs: 1, maxArgs: 1 },
                        resume: { minArgs: 1, maxArgs: 1 },
                        search: { minArgs: 1, maxArgs: 1 },
                        show: {
                          minArgs: 1,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                      },
                      extension: {
                        isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                        isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                      },
                      history: {
                        addUrl: { minArgs: 1, maxArgs: 1 },
                        deleteAll: { minArgs: 0, maxArgs: 0 },
                        deleteRange: { minArgs: 1, maxArgs: 1 },
                        deleteUrl: { minArgs: 1, maxArgs: 1 },
                        getVisits: { minArgs: 1, maxArgs: 1 },
                        search: { minArgs: 1, maxArgs: 1 },
                      },
                      i18n: {
                        detectLanguage: { minArgs: 1, maxArgs: 1 },
                        getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                      },
                      identity: {
                        launchWebAuthFlow: { minArgs: 1, maxArgs: 1 },
                      },
                      idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                      management: {
                        get: { minArgs: 1, maxArgs: 1 },
                        getAll: { minArgs: 0, maxArgs: 0 },
                        getSelf: { minArgs: 0, maxArgs: 0 },
                        setEnabled: { minArgs: 2, maxArgs: 2 },
                        uninstallSelf: { minArgs: 0, maxArgs: 1 },
                      },
                      notifications: {
                        clear: { minArgs: 1, maxArgs: 1 },
                        create: { minArgs: 1, maxArgs: 2 },
                        getAll: { minArgs: 0, maxArgs: 0 },
                        getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                        update: { minArgs: 2, maxArgs: 2 },
                      },
                      pageAction: {
                        getPopup: { minArgs: 1, maxArgs: 1 },
                        getTitle: { minArgs: 1, maxArgs: 1 },
                        hide: {
                          minArgs: 1,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                        setIcon: { minArgs: 1, maxArgs: 1 },
                        setPopup: {
                          minArgs: 1,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                        setTitle: {
                          minArgs: 1,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                        show: {
                          minArgs: 1,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                      },
                      permissions: {
                        contains: { minArgs: 1, maxArgs: 1 },
                        getAll: { minArgs: 0, maxArgs: 0 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        request: { minArgs: 1, maxArgs: 1 },
                      },
                      runtime: {
                        getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                        getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                        openOptionsPage: { minArgs: 0, maxArgs: 0 },
                        requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                        sendMessage: { minArgs: 1, maxArgs: 3 },
                        sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                        setUninstallURL: { minArgs: 1, maxArgs: 1 },
                      },
                      sessions: {
                        getDevices: { minArgs: 0, maxArgs: 1 },
                        getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                        restore: { minArgs: 0, maxArgs: 1 },
                      },
                      storage: {
                        local: {
                          clear: { minArgs: 0, maxArgs: 0 },
                          get: { minArgs: 0, maxArgs: 1 },
                          getBytesInUse: { minArgs: 0, maxArgs: 1 },
                          remove: { minArgs: 1, maxArgs: 1 },
                          set: { minArgs: 1, maxArgs: 1 },
                        },
                        managed: {
                          get: { minArgs: 0, maxArgs: 1 },
                          getBytesInUse: { minArgs: 0, maxArgs: 1 },
                        },
                        sync: {
                          clear: { minArgs: 0, maxArgs: 0 },
                          get: { minArgs: 0, maxArgs: 1 },
                          getBytesInUse: { minArgs: 0, maxArgs: 1 },
                          remove: { minArgs: 1, maxArgs: 1 },
                          set: { minArgs: 1, maxArgs: 1 },
                        },
                      },
                      tabs: {
                        captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                        create: { minArgs: 1, maxArgs: 1 },
                        detectLanguage: { minArgs: 0, maxArgs: 1 },
                        discard: { minArgs: 0, maxArgs: 1 },
                        duplicate: { minArgs: 1, maxArgs: 1 },
                        executeScript: { minArgs: 1, maxArgs: 2 },
                        get: { minArgs: 1, maxArgs: 1 },
                        getCurrent: { minArgs: 0, maxArgs: 0 },
                        getZoom: { minArgs: 0, maxArgs: 1 },
                        getZoomSettings: { minArgs: 0, maxArgs: 1 },
                        goBack: { minArgs: 0, maxArgs: 1 },
                        goForward: { minArgs: 0, maxArgs: 1 },
                        highlight: { minArgs: 1, maxArgs: 1 },
                        insertCSS: { minArgs: 1, maxArgs: 2 },
                        move: { minArgs: 2, maxArgs: 2 },
                        query: { minArgs: 1, maxArgs: 1 },
                        reload: { minArgs: 0, maxArgs: 2 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        removeCSS: { minArgs: 1, maxArgs: 2 },
                        sendMessage: { minArgs: 2, maxArgs: 3 },
                        setZoom: { minArgs: 1, maxArgs: 2 },
                        setZoomSettings: { minArgs: 1, maxArgs: 2 },
                        update: { minArgs: 1, maxArgs: 2 },
                      },
                      topSites: { get: { minArgs: 0, maxArgs: 0 } },
                      webNavigation: {
                        getAllFrames: { minArgs: 1, maxArgs: 1 },
                        getFrame: { minArgs: 1, maxArgs: 1 },
                      },
                      webRequest: {
                        handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                      },
                      windows: {
                        create: { minArgs: 0, maxArgs: 1 },
                        get: { minArgs: 1, maxArgs: 2 },
                        getAll: { minArgs: 0, maxArgs: 1 },
                        getCurrent: { minArgs: 0, maxArgs: 1 },
                        getLastFocused: { minArgs: 0, maxArgs: 1 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        update: { minArgs: 2, maxArgs: 2 },
                      },
                    };
                    if (0 === Object.keys(r).length)
                      throw Error(
                        'api-metadata.json has not been included in browser-polyfill',
                      );
                    class s extends WeakMap {
                      constructor(e, r) {
                        super(r), (this.createItem = e);
                      }
                      get(e) {
                        return (
                          this.has(e) || this.set(e, this.createItem(e)),
                          super.get(e)
                        );
                      }
                    }
                    let g = (e) =>
                        e &&
                        'object' == typeof e &&
                        'function' == typeof e.then,
                      a =
                        (r, s) =>
                        (...g) => {
                          e.runtime.lastError
                            ? r.reject(Error(e.runtime.lastError.message))
                            : s.singleCallbackArg ||
                                (g.length <= 1 && !1 !== s.singleCallbackArg)
                              ? r.resolve(g[0])
                              : r.resolve(g);
                        },
                      n = (e) => (1 == e ? 'argument' : 'arguments'),
                      t = (e, r) =>
                        function s(g, ...t) {
                          if (t.length < r.minArgs)
                            throw Error(
                              `Expected at least ${r.minArgs} ${n(r.minArgs)} for ${e}(), got ${t.length}`,
                            );
                          if (t.length > r.maxArgs)
                            throw Error(
                              `Expected at most ${r.maxArgs} ${n(r.maxArgs)} for ${e}(), got ${t.length}`,
                            );
                          return new Promise((s, n) => {
                            if (r.fallbackToNoCallback)
                              try {
                                g[e](...t, a({ resolve: s, reject: n }, r));
                              } catch (m) {
                                console.warn(
                                  `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                                  m,
                                ),
                                  g[e](...t),
                                  (r.fallbackToNoCallback = !1),
                                  (r.noCallback = !0),
                                  s();
                              }
                            else
                              r.noCallback
                                ? (g[e](...t), s())
                                : g[e](...t, a({ resolve: s, reject: n }, r));
                          });
                        },
                      m = (e, r, s) =>
                        new Proxy(r, {
                          apply: (r, g, a) => s.call(g, e, ...a),
                        }),
                      i = Function.call.bind(Object.prototype.hasOwnProperty),
                      A = (e, r = {}, s = {}) => {
                        let g = Object.create(null),
                          a = Object.create(e);
                        return new Proxy(a, {
                          has: (r, s) => s in e || s in g,
                          get(a, n, o) {
                            if (n in g) return g[n];
                            if (!(n in e)) return;
                            let l = e[n];
                            if ('function' == typeof l) {
                              if ('function' == typeof r[n])
                                l = m(e, e[n], r[n]);
                              else if (i(s, n)) {
                                let _ = t(n, s[n]);
                                l = m(e, e[n], _);
                              } else l = l.bind(e);
                            } else if (
                              'object' == typeof l &&
                              null !== l &&
                              (i(r, n) || i(s, n))
                            )
                              l = A(l, r[n], s[n]);
                            else {
                              if (!i(s, '*'))
                                return (
                                  Object.defineProperty(g, n, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: () => e[n],
                                    set(r) {
                                      e[n] = r;
                                    },
                                  }),
                                  l
                                );
                              l = A(l, r[n], s['*']);
                            }
                            return (g[n] = l), l;
                          },
                          set: (r, s, a, n) => (
                            s in g ? (g[s] = a) : (e[s] = a), !0
                          ),
                          defineProperty: (e, r, s) =>
                            Reflect.defineProperty(g, r, s),
                          deleteProperty: (e, r) =>
                            Reflect.deleteProperty(g, r),
                        });
                      },
                      o = (e) => ({
                        addListener(r, s, ...g) {
                          r.addListener(e.get(s), ...g);
                        },
                        hasListener: (r, s) => r.hasListener(e.get(s)),
                        removeListener(r, s) {
                          r.removeListener(e.get(s));
                        },
                      }),
                      l = new s((e) =>
                        'function' != typeof e
                          ? e
                          : function r(s) {
                              let g = A(
                                s,
                                {},
                                { getContent: { minArgs: 0, maxArgs: 0 } },
                              );
                              e(g);
                            },
                      ),
                      _ = new s((e) =>
                        'function' != typeof e
                          ? e
                          : function r(s, a, n) {
                              let t = !1,
                                m,
                                i = new Promise((e) => {
                                  m = function (r) {
                                    (t = !0), e(r);
                                  };
                                }),
                                A;
                              try {
                                A = e(s, a, m);
                              } catch (o) {
                                A = Promise.reject(o);
                              }
                              let l = !0 !== A && g(A);
                              return (
                                (!0 === A || !!l || !!t) &&
                                (((e) => {
                                  e.then(
                                    (e) => {
                                      n(e);
                                    },
                                    (e) => {
                                      let r;
                                      n({
                                        __mozWebExtensionPolyfillReject__: !0,
                                        message: (r =
                                          e &&
                                          (e instanceof Error ||
                                            'string' == typeof e.message)
                                            ? e.message
                                            : 'An unexpected error occurred'),
                                      });
                                    },
                                  ).catch((e) => {
                                    console.error(
                                      'Failed to send onMessage rejected reply',
                                      e,
                                    );
                                  });
                                })(l ? A : i),
                                !0)
                              );
                            },
                      ),
                      x = ({ reject: r, resolve: s }, g) => {
                        e.runtime.lastError
                          ? 'The message port closed before a response was received.' ===
                            e.runtime.lastError.message
                            ? s()
                            : r(Error(e.runtime.lastError.message))
                          : g && g.__mozWebExtensionPolyfillReject__
                            ? r(Error(g.message))
                            : s(g);
                      },
                      c = (e, r, s, ...g) => {
                        if (g.length < r.minArgs)
                          throw Error(
                            `Expected at least ${r.minArgs} ${n(r.minArgs)} for ${e}(), got ${g.length}`,
                          );
                        if (g.length > r.maxArgs)
                          throw Error(
                            `Expected at most ${r.maxArgs} ${n(r.maxArgs)} for ${e}(), got ${g.length}`,
                          );
                        return new Promise((e, r) => {
                          let a = x.bind(null, { resolve: e, reject: r });
                          g.push(a), s.sendMessage(...g);
                        });
                      },
                      d = {
                        devtools: { network: { onRequestFinished: o(l) } },
                        runtime: {
                          onMessage: o(_),
                          onMessageExternal: o(_),
                          sendMessage: c.bind(null, 'sendMessage', {
                            minArgs: 1,
                            maxArgs: 3,
                          }),
                        },
                        tabs: {
                          sendMessage: c.bind(null, 'sendMessage', {
                            minArgs: 2,
                            maxArgs: 3,
                          }),
                        },
                      },
                      u = {
                        clear: { minArgs: 1, maxArgs: 1 },
                        get: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 },
                      };
                    return (
                      (r.privacy = {
                        network: { '*': u },
                        services: { '*': u },
                        websites: { '*': u },
                      }),
                      A(e, d, r)
                    );
                  })(chrome))
                : (e.exports = globalThis.browser);
            },
          );
        },
      }),
      function s() {
        return (
          r || (0, e[t(e)[0]])((r = { exports: {} }).exports, r), r.exports
        );
      }),
    d = {};
  A(d, {
    defineExtensionStorage: () => $,
    localExtStorage: () => p,
    managedExtStorage: () => v,
    sessionExtStorage: () => b,
    syncExtStorage: () => h,
  });
  var u = l(c(), 1);
  function $(e) {
    let r = (e) =>
        x(this, null, function* () {
          let r = s.map(({ key: r, cb: s }) => {
            if (!(r in e)) return;
            let { newValue: g, oldValue: a } = e[r];
            if (g !== a) return s(g, a);
          });
          yield Promise.all(r);
        }),
      s = [];
    return {
      clear: () => e.clear(),
      getItem: (r) =>
        e.get(r).then((e) => {
          var s;
          return null != (s = e[r]) ? s : null;
        }),
      setItem: (r, s) => e.set({ [r]: null != s ? s : null }),
      removeItem: (r) => e.remove(r),
      onChange(g, a) {
        var n;
        let t = { key: g, cb: a };
        return (
          (n = t),
          0 === s.length && e.onChanged.addListener(r),
          s.push(n),
          () =>
            (function e(g) {
              let a = s.indexOf(g);
              a >= 0 && s.splice(a, 1),
                0 === s.length && u.default.storage.onChanged.removeListener(r);
            })(t)
        );
      },
    };
  }
  var f = l(c(), 1),
    p = $(f.default.storage.local),
    b = $(f.default.storage.session),
    h = $(f.default.storage.sync),
    v = $(f.default.storage.managed);
  return _(d);
})();
