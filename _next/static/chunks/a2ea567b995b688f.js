(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  427217,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let a = t.forwardRef(function ({ title: e, titleId: a, ...i }, s) {
      return t.createElement(
        "svg",
        Object.assign(
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: s,
            "aria-labelledby": a,
          },
          i,
        ),
        e ? t.createElement("title", { id: a }, e) : null,
        t.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 18 18 6M6 6l12 12",
        }),
      );
    });
    e.s(["XMarkIcon", 0, a], 427217);
  },
  618566,
  (e, t, a) => {
    t.exports = e.r(976562);
  },
  754338,
  (e) => {
    "use strict";
    var t = e.i(117595);
    class a extends Error {}
    ((a.prototype.name = "InvalidTokenError"),
      e.s(
        [
          "getUser",
          0,
          () => {
            let e = t.default.get("token");
            if (!e) return null;
            try {
              return (function (e, t) {
                let i;
                if ("string" != typeof e)
                  throw new a("Invalid token specified: must be a string");
                t || (t = {});
                let s = +(!0 !== t.header),
                  n = e.split(".")[s];
                if ("string" != typeof n)
                  throw new a(
                    `Invalid token specified: missing part #${s + 1}`,
                  );
                try {
                  i = (function (e) {
                    let t = e.replace(/-/g, "+").replace(/_/g, "/");
                    switch (t.length % 4) {
                      case 0:
                        break;
                      case 2:
                        t += "==";
                        break;
                      case 3:
                        t += "=";
                        break;
                      default:
                        throw Error(
                          "base64 string is not of the correct length",
                        );
                    }
                    try {
                      var a;
                      return (
                        (a = t),
                        decodeURIComponent(
                          atob(a).replace(/(.)/g, (e, t) => {
                            let a = t.charCodeAt(0).toString(16).toUpperCase();
                            return (a.length < 2 && (a = "0" + a), "%" + a);
                          }),
                        )
                      );
                    } catch (e) {
                      return atob(t);
                    }
                  })(n);
                } catch (e) {
                  throw new a(
                    `Invalid token specified: invalid base64 for part #${s + 1} (${e.message})`,
                  );
                }
                try {
                  return JSON.parse(i);
                } catch (e) {
                  throw new a(
                    `Invalid token specified: invalid json for part #${s + 1} (${e.message})`,
                  );
                }
              })(e);
            } catch {
              return (console.error("Invalid Token"), null);
            }
          },
        ],
        754338,
      ));
  },
  233525,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "warnOnce", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let i = (e) => {};
  },
  818581,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    let i = e.r(271645);
    function s(e, t) {
      let a = (0, i.useRef)(null),
        s = (0, i.useRef)(null);
      return (0, i.useCallback)(
        (i) => {
          if (null === i) {
            let e = a.current;
            e && ((a.current = null), e());
            let t = s.current;
            t && ((s.current = null), t());
          } else (e && (a.current = n(e, i)), t && (s.current = n(t, i)));
        },
        [e, t],
      );
    }
    function n(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let a = e(t);
        return "function" == typeof a ? a : () => e(null);
      }
    }
    ("function" == typeof a.default ||
      ("object" == typeof a.default && null !== a.default)) &&
      void 0 === a.default.__esModule &&
      (Object.defineProperty(a.default, "__esModule", { value: !0 }),
      Object.assign(a.default, a),
      (t.exports = a.default));
  },
  998183,
  (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var i = {
      assign: function () {
        return d;
      },
      searchParamsToUrlQuery: function () {
        return n;
      },
      urlQueryToSearchParams: function () {
        return r;
      },
    };
    for (var s in i) Object.defineProperty(a, s, { enumerable: !0, get: i[s] });
    function n(e) {
      let t = {};
      for (let [a, i] of e.entries()) {
        let e = t[a];
        void 0 === e
          ? (t[a] = i)
          : Array.isArray(e)
            ? e.push(i)
            : (t[a] = [e, i]);
      }
      return t;
    }
    function l(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function r(e) {
      let t = new URLSearchParams();
      for (let [a, i] of Object.entries(e))
        if (Array.isArray(i)) for (let e of i) t.append(a, l(e));
        else t.set(a, l(i));
      return t;
    }
    function d(e, ...t) {
      for (let a of t) {
        for (let t of a.keys()) e.delete(t);
        for (let [t, i] of a.entries()) e.append(t, i);
      }
      return e;
    }
  },
  195057,
  (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var i = {
      formatUrl: function () {
        return r;
      },
      formatWithValidation: function () {
        return o;
      },
      urlObjectKeys: function () {
        return d;
      },
    };
    for (var s in i) Object.defineProperty(a, s, { enumerable: !0, get: i[s] });
    let n = e.r(190809)._(e.r(998183)),
      l = /https?|ftp|gopher|file/;
    function r(e) {
      let { auth: t, hostname: a } = e,
        i = e.protocol || "",
        s = e.pathname || "",
        r = e.hash || "",
        d = e.query || "",
        o = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (o = t + e.host)
          : a &&
            ((o = t + (~a.indexOf(":") ? `[${a}]` : a)),
            e.port && (o += ":" + e.port)),
        d && "object" == typeof d && (d = String(n.urlQueryToSearchParams(d))));
      let c = e.search || (d && `?${d}`) || "";
      return (
        i && !i.endsWith(":") && (i += ":"),
        e.slashes || ((!i || l.test(i)) && !1 !== o)
          ? ((o = "//" + (o || "")), s && "/" !== s[0] && (s = "/" + s))
          : o || (o = ""),
        r && "#" !== r[0] && (r = "#" + r),
        c && "?" !== c[0] && (c = "?" + c),
        (s = s.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${i}${o}${s}${c}${r}`
      );
    }
    let d = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function o(e) {
      return r(e);
    }
  },
  718967,
  (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var i = {
      DecodeError: function () {
        return f;
      },
      MiddlewareNotFoundError: function () {
        return N;
      },
      MissingStaticPage: function () {
        return j;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return v;
      },
      SP: function () {
        return p;
      },
      ST: function () {
        return g;
      },
      WEB_VITALS: function () {
        return n;
      },
      execOnce: function () {
        return l;
      },
      getDisplayName: function () {
        return m;
      },
      getLocationOrigin: function () {
        return o;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return d;
      },
      isResSent: function () {
        return x;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return u;
      },
      stringifyError: function () {
        return y;
      },
    };
    for (var s in i) Object.defineProperty(a, s, { enumerable: !0, get: i[s] });
    let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function l(e) {
      let t,
        a = !1;
      return (...i) => (a || ((a = !0), (t = e(...i))), t);
    }
    let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      d = (e) => r.test(e);
    function o() {
      let { protocol: e, hostname: t, port: a } = window.location;
      return `${e}//${t}${a ? ":" + a : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = o();
      return e.substring(t.length);
    }
    function m(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function x(e) {
      return e.finished || e.headersSent;
    }
    function u(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function h(e, t) {
      let a = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await h(t.Component, t.ctx) }
          : {};
      let i = await e.getInitialProps(t);
      if (a && x(a)) return i;
      if (!i)
        throw Object.defineProperty(
          Error(
            `"${m(e)}.getInitialProps()" should resolve to an object. But found "${i}" instead.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return i;
    }
    let p = "undefined" != typeof performance,
      g =
        p &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class f extends Error {}
    class b extends Error {}
    class v extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class j extends Error {
      constructor(e, t) {
        (super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class N extends Error {
      constructor() {
        (super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module"));
      }
    }
    function y(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  573668,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let i = e.r(718967),
      s = e.r(652817);
    function n(e) {
      if (!(0, i.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, i.getLocationOrigin)(),
          a = new URL(e, t);
        return a.origin === t && (0, s.hasBasePath)(a.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  284508,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "errorOnce", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let i = (e) => {};
  },
  522016,
  (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var i = {
      default: function () {
        return f;
      },
      useLinkStatus: function () {
        return v;
      },
    };
    for (var s in i) Object.defineProperty(a, s, { enumerable: !0, get: i[s] });
    let n = e.r(190809),
      l = e.r(843476),
      r = n._(e.r(271645)),
      d = e.r(195057),
      o = e.r(8372),
      c = e.r(818581),
      m = e.r(718967),
      x = e.r(405550);
    e.r(233525);
    let u = e.r(91949),
      h = e.r(573668),
      p = e.r(509396);
    function g(e) {
      return "string" == typeof e ? e : (0, d.formatUrl)(e);
    }
    function f(t) {
      var a;
      let i,
        s,
        n,
        [d, f] = (0, r.useOptimistic)(u.IDLE_LINK_STATUS),
        v = (0, r.useRef)(null),
        {
          href: j,
          as: N,
          children: y,
          prefetch: w = null,
          passHref: _,
          replace: k,
          shallow: C,
          scroll: D,
          onClick: T,
          onMouseEnter: I,
          onTouchStart: S,
          legacyBehavior: M = !1,
          onNavigate: V,
          ref: $,
          unstable_dynamicOnHover: B,
          ...A
        } = t;
      ((i = y),
        M &&
          ("string" == typeof i || "number" == typeof i) &&
          (i = (0, l.jsx)("a", { children: i })));
      let F = r.default.useContext(o.AppRouterContext),
        z = !1 !== w,
        L =
          !1 !== w
            ? null === (a = w) || "auto" === a
              ? p.FetchStrategy.PPR
              : p.FetchStrategy.Full
            : p.FetchStrategy.PPR,
        { href: P, as: H } = r.default.useMemo(() => {
          let e = g(j);
          return { href: e, as: N ? g(N) : e };
        }, [j, N]);
      if (M) {
        if (i?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        s = r.default.Children.only(i);
      }
      let R = M ? s && "object" == typeof s && s.ref : $,
        E = r.default.useCallback(
          (e) => (
            null !== F &&
              (v.current = (0, u.mountLinkInstance)(e, P, F, L, z, f)),
            () => {
              (v.current &&
                ((0, u.unmountLinkForCurrentNavigation)(v.current),
                (v.current = null)),
                (0, u.unmountPrefetchableInstance)(e));
            }
          ),
          [z, P, F, L, f],
        ),
        O = {
          ref: (0, c.useMergedRef)(E, R),
          onClick(t) {
            (M || "function" != typeof T || T(t),
              M &&
                s.props &&
                "function" == typeof s.props.onClick &&
                s.props.onClick(t),
              !F ||
                t.defaultPrevented ||
                (function (t, a, i, s, n, l, d) {
                  if ("undefined" != typeof window) {
                    let o,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((o = t.currentTarget.getAttribute("target")) &&
                          "_self" !== o) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, h.isLocalURL)(a)) {
                      n && (t.preventDefault(), location.replace(a));
                      return;
                    }
                    if ((t.preventDefault(), d)) {
                      let e = !1;
                      if (
                        (d({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: m } = e.r(699781);
                    r.default.startTransition(() => {
                      m(i || a, n ? "replace" : "push", l ?? !0, s.current);
                    });
                  }
                })(t, P, H, v, k, D, V));
          },
          onMouseEnter(e) {
            (M || "function" != typeof I || I(e),
              M &&
                s.props &&
                "function" == typeof s.props.onMouseEnter &&
                s.props.onMouseEnter(e),
              F && z && (0, u.onNavigationIntent)(e.currentTarget, !0 === B));
          },
          onTouchStart: function (e) {
            (M || "function" != typeof S || S(e),
              M &&
                s.props &&
                "function" == typeof s.props.onTouchStart &&
                s.props.onTouchStart(e),
              F && z && (0, u.onNavigationIntent)(e.currentTarget, !0 === B));
          },
        };
      return (
        (0, m.isAbsoluteUrl)(H)
          ? (O.href = H)
          : (M && !_ && ("a" !== s.type || "href" in s.props)) ||
            (O.href = (0, x.addBasePath)(H)),
        (n = M
          ? r.default.cloneElement(s, O)
          : (0, l.jsx)("a", { ...A, ...O, children: i })),
        (0, l.jsx)(b.Provider, { value: d, children: n })
      );
    }
    e.r(284508);
    let b = (0, r.createContext)(u.IDLE_LINK_STATUS),
      v = () => (0, r.useContext)(b);
    ("function" == typeof a.default ||
      ("object" == typeof a.default && null !== a.default)) &&
      void 0 === a.default.__esModule &&
      (Object.defineProperty(a.default, "__esModule", { value: !0 }),
      Object.assign(a.default, a),
      (t.exports = a.default));
  },
  488143,
  (e, t, a) => {
    "use strict";
    function i({
      widthInt: e,
      heightInt: t,
      blurWidth: a,
      blurHeight: i,
      blurDataURL: s,
      objectFit: n,
    }) {
      let l = a ? 40 * a : e,
        r = i ? 40 * i : t,
        d = l && r ? `viewBox='0 0 ${l} ${r}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d ? "none" : "contain" === n ? "xMidYMid" : "cover" === n ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${s}'/%3E%3C/svg%3E`;
    }
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
  },
  987690,
  (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var i = {
      VALID_LOADERS: function () {
        return n;
      },
      imageConfigDefault: function () {
        return l;
      },
    };
    for (var s in i) Object.defineProperty(a, s, { enumerable: !0, get: i[s] });
    let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
      l = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
      };
  },
  908927,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "getImgProps", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }),
      e.r(233525));
    let i = e.r(488143),
      s = e.r(987690),
      n = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function l(e) {
      return void 0 !== e.default;
    }
    function r(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
            ? parseInt(e, 10)
            : NaN;
    }
    function d(
      {
        src: e,
        sizes: t,
        unoptimized: a = !1,
        priority: d = !1,
        preload: o = !1,
        loading: c,
        className: m,
        quality: x,
        width: u,
        height: h,
        fill: p = !1,
        style: g,
        overrideSrc: f,
        onLoad: b,
        onLoadingComplete: v,
        placeholder: j = "empty",
        blurDataURL: N,
        fetchPriority: y,
        decoding: w = "async",
        layout: _,
        objectFit: k,
        objectPosition: C,
        lazyBoundary: D,
        lazyRoot: T,
        ...I
      },
      S,
    ) {
      var M;
      let V,
        $,
        B,
        { imgConf: A, showAltText: F, blurComplete: z, defaultLoader: L } = S,
        P = A || s.imageConfigDefault;
      if ("allSizes" in P) V = P;
      else {
        let e = [...P.deviceSizes, ...P.imageSizes].sort((e, t) => e - t),
          t = P.deviceSizes.sort((e, t) => e - t),
          a = P.qualities?.sort((e, t) => e - t);
        V = { ...P, allSizes: e, deviceSizes: t, qualities: a };
      }
      if (void 0 === L)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 },
        );
      let H = I.loader || L;
      (delete I.loader, delete I.srcSet);
      let R = "__next_img_default" in H;
      if (R) {
        if ("custom" === V.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 },
          );
      } else {
        let e = H;
        H = (t) => {
          let { config: a, ...i } = t;
          return e(i);
        };
      }
      if (_) {
        "fill" === _ && (p = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[_];
        e && (g = { ...g, ...e });
        let a = { responsive: "100vw", fill: "100vw" }[_];
        a && !t && (t = a);
      }
      let E = "",
        O = r(u),
        U = r(h);
      if ((M = e) && "object" == typeof M && (l(M) || void 0 !== M.src)) {
        let t = l(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 },
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 },
          );
        if (
          (($ = t.blurWidth),
          (B = t.blurHeight),
          (N = N || t.blurDataURL),
          (E = t.src),
          !p)
        )
          if (O || U) {
            if (O && !U) {
              let e = O / t.width;
              U = Math.round(t.height * e);
            } else if (!O && U) {
              let e = U / t.height;
              O = Math.round(t.width * e);
            }
          } else ((O = t.width), (U = t.height));
      }
      let G = !d && !o && ("lazy" === c || void 0 === c);
      ((!(e = "string" == typeof e ? e : E) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((a = !0), (G = !1)),
        V.unoptimized && (a = !0),
        R &&
          !V.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (a = !0));
      let q = r(x),
        W = Object.assign(
          p
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: k,
                objectPosition: C,
              }
            : {},
          F ? {} : { color: "transparent" },
          g,
        ),
        Y =
          z || "empty" === j
            ? null
            : "blur" === j
              ? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({ widthInt: O, heightInt: U, blurWidth: $, blurHeight: B, blurDataURL: N || "", objectFit: W.objectFit })}")`
              : `url("${j}")`,
        Q = n.includes(W.objectFit)
          ? "fill" === W.objectFit
            ? "100% 100%"
            : "cover"
          : W.objectFit,
        K = Y
          ? {
              backgroundSize: Q,
              backgroundPosition: W.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: Y,
            }
          : {},
        X = (function ({
          config: e,
          src: t,
          unoptimized: a,
          width: i,
          quality: s,
          sizes: n,
          loader: l,
        }) {
          if (a) return { src: t, srcSet: void 0, sizes: void 0 };
          let { widths: r, kind: d } = (function (
              { deviceSizes: e, allSizes: t },
              a,
              i,
            ) {
              if (i) {
                let a = /(^|\s)(1?\d?\d)vw/g,
                  s = [];
                for (let e; (e = a.exec(i)); ) s.push(parseInt(e[2]));
                if (s.length) {
                  let a = 0.01 * Math.min(...s);
                  return { widths: t.filter((t) => t >= e[0] * a), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof a
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [a, 2 * a].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1],
                        ),
                      ),
                    ],
                    kind: "x",
                  };
            })(e, i, n),
            o = r.length - 1;
          return {
            sizes: n || "w" !== d ? n : "100vw",
            srcSet: r
              .map(
                (a, i) =>
                  `${l({ config: e, src: t, quality: s, width: a })} ${"w" === d ? a : i + 1}${d}`,
              )
              .join(", "),
            src: l({ config: e, src: t, quality: s, width: r[o] }),
          };
        })({
          config: V,
          src: e,
          unoptimized: a,
          width: O,
          quality: q,
          sizes: t,
          loader: H,
        }),
        J = G ? "lazy" : c;
      return {
        props: {
          ...I,
          loading: J,
          fetchPriority: y,
          width: O,
          height: U,
          decoding: w,
          className: m,
          style: { ...W, ...K },
          sizes: X.sizes,
          srcSet: X.srcSet,
          src: f || X.src,
        },
        meta: { unoptimized: a, preload: o || d, placeholder: j, fill: p },
      };
    }
  },
  898879,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "default", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let i = e.r(271645),
      s = "undefined" == typeof window,
      n = s ? () => {} : i.useLayoutEffect,
      l = s ? () => {} : i.useEffect;
    function r(e) {
      let { headManager: t, reduceComponentsToState: a } = e;
      function r() {
        if (t && t.mountedInstances) {
          let e = i.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean),
          );
          t.updateHead(a(e));
        }
      }
      return (
        s && (t?.mountedInstances?.add(e.children), r()),
        n(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          ),
        ),
        n(
          () => (
            t && (t._pendingUpdate = r),
            () => {
              t && (t._pendingUpdate = r);
            }
          ),
        ),
        l(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          ),
        ),
        null
      );
    }
  },
  325633,
  (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var i = {
      default: function () {
        return p;
      },
      defaultHead: function () {
        return m;
      },
    };
    for (var s in i) Object.defineProperty(a, s, { enumerable: !0, get: i[s] });
    let n = e.r(555682),
      l = e.r(190809),
      r = e.r(843476),
      d = l._(e.r(271645)),
      o = n._(e.r(898879)),
      c = e.r(742732);
    function m() {
      return [
        (0, r.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, r.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport",
        ),
      ];
    }
    function x(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === d.default.Fragment
          ? e.concat(
              d.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                [],
              ),
            )
          : e.concat(t);
    }
    e.r(233525);
    let u = ["name", "httpEquiv", "charSet", "itemProp"];
    function h(e) {
      let t, a, i, s;
      return e
        .reduce(x, [])
        .reverse()
        .concat(m().reverse())
        .filter(
          ((t = new Set()),
          (a = new Set()),
          (i = new Set()),
          (s = {}),
          (e) => {
            let n = !0,
              l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              l = !0;
              let a = e.key.slice(e.key.indexOf("$") + 1);
              t.has(a) ? (n = !1) : t.add(a);
            }
            switch (e.type) {
              case "title":
              case "base":
                a.has(e.type) ? (n = !1) : a.add(e.type);
                break;
              case "meta":
                for (let t = 0, a = u.length; t < a; t++) {
                  let a = u[t];
                  if (e.props.hasOwnProperty(a))
                    if ("charSet" === a) i.has(a) ? (n = !1) : i.add(a);
                    else {
                      let t = e.props[a],
                        i = s[a] || new Set();
                      ("name" !== a || !l) && i.has(t)
                        ? (n = !1)
                        : (i.add(t), (s[a] = i));
                    }
                }
            }
            return n;
          }),
        )
        .reverse()
        .map((e, t) => {
          let a = e.key || t;
          return d.default.cloneElement(e, { key: a });
        });
    }
    let p = function ({ children: e }) {
      let t = (0, d.useContext)(c.HeadManagerContext);
      return (0, r.jsx)(o.default, {
        reduceComponentsToState: h,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof a.default ||
      ("object" == typeof a.default && null !== a.default)) &&
      void 0 === a.default.__esModule &&
      (Object.defineProperty(a.default, "__esModule", { value: !0 }),
      Object.assign(a.default, a),
      (t.exports = a.default));
  },
  918556,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let i = e.r(555682)._(e.r(271645)),
      s = e.r(987690),
      n = i.default.createContext(s.imageConfigDefault);
  },
  65856,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "RouterContext", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let i = e.r(555682)._(e.r(271645)).default.createContext(null);
  },
  670965,
  (e, t, a) => {
    "use strict";
    function i(e, t) {
      let a = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - a) < Math.abs(e - a) ? t : e),
            0,
          )
        : a;
    }
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
  },
  1948,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let i = e.r(670965);
    function s({ config: e, src: t, width: a, quality: s }) {
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 },
        );
      let n = (0, i.findClosestQuality)(s, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${a}&q=${n}${(t.startsWith("/_next/static/media/"), "")}`;
    }
    s.__next_img_default = !0;
    let n = s;
  },
  605500,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "Image", {
        enumerable: !0,
        get: function () {
          return j;
        },
      }));
    let i = e.r(555682),
      s = e.r(190809),
      n = e.r(843476),
      l = s._(e.r(271645)),
      r = i._(e.r(174080)),
      d = i._(e.r(325633)),
      o = e.r(908927),
      c = e.r(987690),
      m = e.r(918556);
    e.r(233525);
    let x = e.r(65856),
      u = i._(e.r(1948)),
      h = e.r(818581),
      p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function g(e, t, a, i, s, n, l) {
      let r = e?.src;
      e &&
        e["data-loaded-src"] !== r &&
        ((e["data-loaded-src"] = r),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && s(!0), a?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let i = !1,
                  s = !1;
                a.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => i,
                  isPropagationStopped: () => s,
                  persist: () => {},
                  preventDefault: () => {
                    ((i = !0), t.preventDefault());
                  },
                  stopPropagation: () => {
                    ((s = !0), t.stopPropagation());
                  },
                });
              }
              i?.current && i.current(e);
            }
          }));
    }
    function f(e) {
      return l.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, l.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: a,
          height: i,
          width: s,
          decoding: r,
          className: d,
          style: o,
          fetchPriority: c,
          placeholder: m,
          loading: x,
          unoptimized: u,
          fill: p,
          onLoadRef: b,
          onLoadingCompleteRef: v,
          setBlurComplete: j,
          setShowAltText: N,
          sizesInput: y,
          onLoad: w,
          onError: _,
          ...k
        },
        C,
      ) => {
        let D = (0, l.useCallback)(
            (e) => {
              e && (_ && (e.src = e.src), e.complete && g(e, m, b, v, j, u, y));
            },
            [e, m, b, v, j, _, u, y],
          ),
          T = (0, h.useMergedRef)(C, D);
        return (0, n.jsx)("img", {
          ...k,
          ...f(c),
          loading: x,
          width: s,
          height: i,
          decoding: r,
          "data-nimg": p ? "fill" : "1",
          className: d,
          style: o,
          sizes: a,
          srcSet: t,
          src: e,
          ref: T,
          onLoad: (e) => {
            g(e.currentTarget, m, b, v, j, u, y);
          },
          onError: (e) => {
            (N(!0), "empty" !== m && j(!0), _ && _(e));
          },
        });
      },
    );
    function v({ isAppRouter: e, imgAttributes: t }) {
      let a = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...f(t.fetchPriority),
      };
      return e && r.default.preload
        ? (r.default.preload(t.src, a), null)
        : (0, n.jsx)(d.default, {
            children: (0, n.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...a },
              "__nimg-" + t.src + t.srcSet + t.sizes,
            ),
          });
    }
    let j = (0, l.forwardRef)((e, t) => {
      let a = (0, l.useContext)(x.RouterContext),
        i = (0, l.useContext)(m.ImageConfigContext),
        s = (0, l.useMemo)(() => {
          let e = p || i || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            a = e.deviceSizes.sort((e, t) => e - t),
            s = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: a,
            qualities: s,
            localPatterns:
              "undefined" == typeof window ? i?.localPatterns : e.localPatterns,
          };
        }, [i]),
        { onLoad: r, onLoadingComplete: d } = e,
        h = (0, l.useRef)(r);
      (0, l.useEffect)(() => {
        h.current = r;
      }, [r]);
      let g = (0, l.useRef)(d);
      (0, l.useEffect)(() => {
        g.current = d;
      }, [d]);
      let [f, j] = (0, l.useState)(!1),
        [N, y] = (0, l.useState)(!1),
        { props: w, meta: _ } = (0, o.getImgProps)(e, {
          defaultLoader: u.default,
          imgConf: s,
          blurComplete: f,
          showAltText: N,
        });
      return (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(b, {
            ...w,
            unoptimized: _.unoptimized,
            placeholder: _.placeholder,
            fill: _.fill,
            onLoadRef: h,
            onLoadingCompleteRef: g,
            setBlurComplete: j,
            setShowAltText: y,
            sizesInput: e.sizes,
            ref: t,
          }),
          _.preload
            ? (0, n.jsx)(v, { isAppRouter: !a, imgAttributes: w })
            : null,
        ],
      });
    });
    ("function" == typeof a.default ||
      ("object" == typeof a.default && null !== a.default)) &&
      void 0 === a.default.__esModule &&
      (Object.defineProperty(a.default, "__esModule", { value: !0 }),
      Object.assign(a.default, a),
      (t.exports = a.default));
  },
  794909,
  (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var i = {
      default: function () {
        return c;
      },
      getImageProps: function () {
        return o;
      },
    };
    for (var s in i) Object.defineProperty(a, s, { enumerable: !0, get: i[s] });
    let n = e.r(555682),
      l = e.r(908927),
      r = e.r(605500),
      d = n._(e.r(1948));
    function o(e) {
      let { props: t } = (0, l.getImgProps)(e, {
        defaultLoader: d.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e];
      return { props: t };
    }
    let c = r.Image;
  },
  657688,
  (e, t, a) => {
    t.exports = e.r(794909);
  },
  310542,
  895420,
  (e) => {
    "use strict";
    let t, a;
    var i = e.i(271329),
      s = e.i(947414),
      n = e.i(271645);
    e.i(105369);
    var l = e.i(965566);
    e.i(861200);
    var r = e.i(930551),
      d = e.i(260830),
      o = e.i(28327);
    function c(e, t) {
      let a,
        i = () => {
          let { currentTime: i } = t,
            s = (null === i ? 0 : i.value) / 100;
          (a !== s && e(s), (a = s));
        };
      return (o.frame.update(i, !0), () => (0, o.cancelFrame)(i));
    }
    var m = e.i(749652);
    let x = new WeakMap();
    function u({ target: e, contentRect: t, borderBoxSize: a }) {
      var i;
      null == (i = x.get(e)) ||
        i.forEach((i) => {
          i({
            target: e,
            contentSize: t,
            get size() {
              return (function (e, t) {
                if (t) {
                  let { inlineSize: e, blockSize: a } = t[0];
                  return { width: e, height: a };
                }
                return e instanceof SVGElement && "getBBox" in e
                  ? e.getBBox()
                  : { width: e.offsetWidth, height: e.offsetHeight };
              })(e, a);
            },
          });
        });
    }
    function h(e) {
      e.forEach(u);
    }
    let p = new Set();
    var g = e.i(783920),
      f = e.i(368935);
    let b = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      }),
      v = {
        x: { length: "Width", position: "Left" },
        y: { length: "Height", position: "Top" },
      };
    function j(e, t, a, i) {
      let s = a[t],
        { length: n, position: l } = v[t],
        r = s.current,
        d = a.time;
      ((s.current = e[`scroll${l}`]),
        (s.scrollLength = e[`scroll${n}`] - e[`client${n}`]),
        (s.offset.length = 0),
        (s.offset[0] = 0),
        (s.offset[1] = s.scrollLength),
        (s.progress = (0, g.progress)(0, s.scrollLength, s.current)));
      let o = i - d;
      s.velocity = o > 50 ? 0 : (0, f.velocityPerSecond)(s.current - r, o);
    }
    e.i(247167);
    var N = e.i(974780),
      y = e.i(625711),
      w = e.i(630040);
    let _ = { start: 0, center: 0.5, end: 1 };
    function k(e, t, a = 0) {
      let i = 0;
      if ((e in _ && (e = _[e]), "string" == typeof e)) {
        let t = parseFloat(e);
        e.endsWith("px")
          ? (i = t)
          : e.endsWith("%")
            ? (e = t / 100)
            : e.endsWith("vw")
              ? (i = (t / 100) * document.documentElement.clientWidth)
              : e.endsWith("vh")
                ? (i = (t / 100) * document.documentElement.clientHeight)
                : (e = t);
      }
      return ("number" == typeof e && (i = t * e), a + i);
    }
    let C = [0, 0],
      D = [
        [0, 0],
        [1, 1],
      ],
      T = { x: 0, y: 0 },
      I = new WeakMap(),
      S = new WeakMap(),
      M = new WeakMap(),
      V = (e) => (e === document.documentElement ? window : e);
    function $(e, { container: i = document.documentElement, ...s } = {}) {
      let n = M.get(i);
      n || ((n = new Set()), M.set(i, n));
      let l = (function (e, t, a, i = {}) {
        return {
          measure: () =>
            (function (e, t = e, a) {
              if (((a.x.targetOffset = 0), (a.y.targetOffset = 0), t !== e)) {
                let i = t;
                for (; i && i !== e; )
                  ((a.x.targetOffset += i.offsetLeft),
                    (a.y.targetOffset += i.offsetTop),
                    (i = i.offsetParent));
              }
              ((a.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
                (a.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
                (a.x.containerLength = e.clientWidth),
                (a.y.containerLength = e.clientHeight));
            })(e, i.target, a),
          update: (t) => {
            (j(e, "x", a, t),
              j(e, "y", a, t),
              (a.time = t),
              (i.offset || i.target) &&
                (function (e, t, a) {
                  let { offset: i = D } = a,
                    { target: s = e, axis: n = "y" } = a,
                    l = "y" === n ? "height" : "width",
                    r =
                      s !== e
                        ? (function (e, t) {
                            let a = { x: 0, y: 0 },
                              i = e;
                            for (; i && i !== t; )
                              if (i instanceof HTMLElement)
                                ((a.x += i.offsetLeft),
                                  (a.y += i.offsetTop),
                                  (i = i.offsetParent));
                              else if ("svg" === i.tagName) {
                                let e = i.getBoundingClientRect(),
                                  t = (i =
                                    i.parentElement).getBoundingClientRect();
                                ((a.x += e.left - t.left),
                                  (a.y += e.top - t.top));
                              } else if (i instanceof SVGGraphicsElement) {
                                let { x: e, y: t } = i.getBBox();
                                ((a.x += e), (a.y += t));
                                let s = null,
                                  n = i.parentNode;
                                for (; !s; )
                                  ("svg" === n.tagName && (s = n),
                                    (n = i.parentNode));
                                i = s;
                              } else break;
                            return a;
                          })(s, e)
                        : T,
                    d =
                      s === e
                        ? { width: e.scrollWidth, height: e.scrollHeight }
                        : "getBBox" in s && "svg" !== s.tagName
                          ? s.getBBox()
                          : { width: s.clientWidth, height: s.clientHeight },
                    o = { width: e.clientWidth, height: e.clientHeight };
                  t[n].offset.length = 0;
                  let c = !t[n].interpolate,
                    m = i.length;
                  for (let e = 0; e < m; e++) {
                    let a = (function (e, t, a, i) {
                      let s = Array.isArray(e) ? e : C,
                        n = 0;
                      return (
                        "number" == typeof e
                          ? (s = [e, e])
                          : "string" == typeof e &&
                            (s = (e = e.trim()).includes(" ")
                              ? e.split(" ")
                              : [e, _[e] ? e : "0"]),
                        (n = k(s[0], a, i)) - k(s[1], t)
                      );
                    })(i[e], o[l], d[l], r[n]);
                    (c || a === t[n].interpolatorOffsets[e] || (c = !0),
                      (t[n].offset[e] = a));
                  }
                  (c &&
                    ((t[n].interpolate = (0, y.interpolate)(
                      t[n].offset,
                      (0, w.defaultOffset)(i),
                      { clamp: !1 },
                    )),
                    (t[n].interpolatorOffsets = [...t[n].offset])),
                    (t[n].progress = (0, N.clamp)(
                      0,
                      1,
                      t[n].interpolate(t[n].current),
                    )));
                })(e, a, i));
          },
          notify: () => t(a),
        };
      })(i, e, { time: 0, x: b(), y: b() }, s);
      if ((n.add(l), !I.has(i))) {
        let e,
          s = () => {
            for (let e of n) e.measure();
          },
          l = () => {
            for (let e of n) e.update(o.frameData.timestamp);
          },
          r = () => {
            for (let e of n) e.notify();
          },
          d = () => {
            (o.frame.read(s, !1, !0),
              o.frame.read(l, !1, !0),
              o.frame.update(r, !1, !0));
          };
        I.set(i, d);
        let c = V(i);
        (window.addEventListener("resize", d, { passive: !0 }),
          i !== document.documentElement &&
            S.set(
              i,
              "function" == typeof i
                ? (p.add(i),
                  a ||
                    ((a = () => {
                      let e = {
                          width: window.innerWidth,
                          height: window.innerHeight,
                        },
                        t = { target: window, size: e, contentSize: e };
                      p.forEach((e) => e(t));
                    }),
                    window.addEventListener("resize", a)),
                  () => {
                    (p.delete(i), !p.size && a && (a = void 0));
                  })
                : (t ||
                    ("undefined" != typeof ResizeObserver &&
                      (t = new ResizeObserver(h))),
                  (e = (0, m.resolveElements)(i)).forEach((e) => {
                    let a = x.get(e);
                    (a || ((a = new Set()), x.set(e, a)),
                      a.add(d),
                      null == t || t.observe(e));
                  }),
                  () => {
                    e.forEach((e) => {
                      let a = x.get(e);
                      (null == a || a.delete(d),
                        (null == a ? void 0 : a.size) ||
                          null == t ||
                          t.unobserve(e));
                    });
                  }),
            ),
          c.addEventListener("scroll", d, { passive: !0 }));
      }
      let r = I.get(i);
      return (
        o.frame.read(r, !1, !0),
        () => {
          var e;
          (0, o.cancelFrame)(r);
          let t = M.get(i);
          if (!t || (t.delete(l), t.size)) return;
          let a = I.get(i);
          (I.delete(i),
            a &&
              (V(i).removeEventListener("scroll", a),
              null == (e = S.get(i)) || e(),
              window.removeEventListener("resize", a)));
        }
      );
    }
    let B = new Map();
    function A({
      source: e,
      container: t = document.documentElement,
      axis: a = "y",
    } = {}) {
      (e && (t = e), B.has(t) || B.set(t, {}));
      let i = B.get(t);
      return (
        i[a] ||
          (i[a] = (0, r.supportsScrollTimeline)()
            ? new ScrollTimeline({ source: t, axis: a })
            : (function ({ source: e, container: t, axis: a = "y" }) {
                e && (t = e);
                let i = { value: 0 },
                  s = $(
                    (e) => {
                      i.value = 100 * e[a].progress;
                    },
                    { container: t, axis: a },
                  );
                return { currentTime: i, cancel: s };
              })({ source: t, axis: a })),
        i[a]
      );
    }
    function F(e) {
      return e && (e.target || e.offset);
    }
    var z = e.i(674008);
    function L(e, t) {
      (0, l.warning)(
        !!(!t || t.current),
        `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`,
      );
    }
    let P = () => ({
      scrollX: (0, i.motionValue)(0),
      scrollY: (0, i.motionValue)(0),
      scrollXProgress: (0, i.motionValue)(0),
      scrollYProgress: (0, i.motionValue)(0),
    });
    function H({ container: e, target: t, layoutEffect: a = !0, ...i } = {}) {
      let l = (0, s.useConstant)(P);
      return (
        (a ? z.useIsomorphicLayoutEffect : n.useEffect)(
          () => (
            L("target", t),
            L("container", e),
            (function (e, { axis: t = "y", ...a } = {}) {
              var i, s;
              let n = { axis: t, ...a };
              return "function" == typeof e
                ? ((i = e),
                  (s = n),
                  2 === i.length || F(s)
                    ? $((e) => {
                        i(e[s.axis].progress, e);
                      }, s)
                    : c(i, A(s)))
                : (function (e, t) {
                    if ((e.flatten(), F(t)))
                      return (
                        e.pause(),
                        $((a) => {
                          e.time = e.duration * a[t.axis].progress;
                        }, t)
                      );
                    {
                      let a = A(t);
                      return e.attachTimeline
                        ? e.attachTimeline(
                            a,
                            (e) => (
                              e.pause(),
                              c((t) => {
                                e.time = e.duration * t;
                              }, a)
                            ),
                          )
                        : d.noop;
                    }
                  })(e, n);
            })(
              (e, { x: t, y: a }) => {
                (l.scrollX.set(t.current),
                  l.scrollXProgress.set(t.progress),
                  l.scrollY.set(a.current),
                  l.scrollYProgress.set(a.progress));
              },
              {
                ...i,
                container: (null == e ? void 0 : e.current) || void 0,
                target: (null == t ? void 0 : t.current) || void 0,
              },
            )
          ),
          [e, t, JSON.stringify(i.offset)],
        ),
        l
      );
    }
    e.s(["useScroll", () => H], 310542);
    var R = e.i(737806);
    function E(e, t) {
      let a = (function (e) {
          let t = (0, s.useConstant)(() => (0, i.motionValue)(e)),
            { isStatic: a } = (0, n.useContext)(R.MotionConfigContext);
          if (a) {
            let [, a] = (0, n.useState)(e);
            (0, n.useEffect)(() => t.on("change", a), []);
          }
          return t;
        })(t()),
        l = () => a.set(t());
      return (
        l(),
        (0, z.useIsomorphicLayoutEffect)(() => {
          let t = () => o.frame.preRender(l, !1, !0),
            a = e.map((e) => e.on("change", t));
          return () => {
            (a.forEach((e) => e()), (0, o.cancelFrame)(l));
          };
        }),
        a
      );
    }
    function O(e, t, a, s) {
      if ("function" == typeof e) {
        let t;
        return (
          (i.collectMotionValues.current = []),
          e(),
          (t = E(i.collectMotionValues.current, e)),
          (i.collectMotionValues.current = void 0),
          t
        );
      }
      let n =
        "function" == typeof t
          ? t
          : (function (...e) {
              var t;
              let a,
                i = !Array.isArray(e[0]),
                s = i ? 0 : -1,
                n = e[0 + s],
                l = e[1 + s],
                r = e[2 + s],
                d = e[3 + s],
                o = (0, y.interpolate)(l, r, {
                  mixer:
                    (a = t = r[0]) && "object" == typeof a && a.mix
                      ? t.mix
                      : void 0,
                  ...d,
                });
              return i ? o(n) : o;
            })(t, a, s);
      return Array.isArray(e) ? U(e, n) : U([e], ([e]) => n(e));
    }
    function U(e, t) {
      let a = (0, s.useConstant)(() => []);
      return E(e, () => {
        a.length = 0;
        let i = e.length;
        for (let t = 0; t < i; t++) a[t] = e[t].get();
        return t(a);
      });
    }
    e.s(["useTransform", () => O], 895420);
  },
  514673,
  (e) => {
    "use strict";
    var t = e.i(401355);
    e.s(["QuicksandRegular", () => t.default]);
  },
  710134,
  875958,
  (e) => {
    "use strict";
    var t = e.i(525241);
    e.s(["greatVibes", () => t.default], 710134);
    var a = e.i(546526);
    e.s(["sourceSans3", () => a.default], 875958);
  },
  497072,
  (e) => {
    "use strict";
    var t = e.i(583266);
    e.s(["GreatVibes", () => t.default]);
  },
  864254,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(283210);
    var a = e.i(574567),
      i = e.i(935167),
      s = e.i(50595),
      n = e.i(677169),
      l = e.i(60521),
      r = e.i(589997);
    function d({ banner: e }) {
      return (0, t.jsxs)("div", {
        className: "relative over",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute top-0 z-[0] right-[-21%] md:right-[-15%] w-[48%] md:w-[42%]",
            children: (0, t.jsx)("img", {
              src: "./assets/ecards/wedding-20/song-hy.webp",
              className: "object-cover w-full",
            }),
          }),
          (0, t.jsx)("div", {
            className:
              "absolute bottom-[12%] md:bottom-[18%] z-[0] left-[-26%] md:left-[-21%] w-[75%] md:w-[60%]",
            children: (0, t.jsx)("img", {
              src: "./assets/ecards/wedding-20/song-hy.webp",
              className: "object-cover w-full",
            }),
          }),
          (0, t.jsxs)("div", {
            className:
              "text-white flex flex-col justify-center items-center gap-3 md:gap-10 relative",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "flex flex-col justify-center items-center gap-5 md:gap-12 w-full",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "flex flex-col justify-center items-start w-full mt-8 md:mt-16",
                    children: [
                      (0, t.jsx)("h1", {
                        className: `${a.BlackMango.className} text-[37px] md:text-[76px] !leading-snug !italic !font-bold`,
                        children: "SAVE THE DATE",
                      }),
                      (0, t.jsx)("p", {
                        className: `${l.default.className} text-[25px] md:text-[50px] !leading-snug !italic`,
                        children: (() => {
                          try {
                            if (!e.weddingDate) return " ";
                            return (0, r.formatDateDDMMYYYY2)(e.weddingDate);
                          } catch {
                            return " ";
                          }
                        })(),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    children: (0, t.jsxs)("h1", {
                      className: `${i.UTMAzkia.className} text-[50px] md:text-8xl font-bold [text-shadow:0px_4px_4px_rgba(0,0,0,1)]`,
                      children: [e.groomName, " & ", e.brideName],
                    }),
                  }),
                ],
              }),
              e.guestName &&
                "" !== e.guestName.trim() &&
                (0, t.jsxs)("div", {
                  className:
                    "flex justify-center flex-col items-center gap-3 md:gap-4",
                  children: [
                    (0, t.jsx)("h2", {
                      className: `${s.SVNMightiest.className} text-[22px] md:text-[40px] !leading-snug md:mb-4`,
                      children: "Trân Trọng Kính Mời:",
                    }),
                    (0, t.jsx)("h2", {
                      style: {
                        textShadow: "0px 4px 4px rgba(0,0,0,1) !important",
                      },
                      className: `px-4 md:px-8 text-2xl md:text-5xl ${n.ViceroyJF.className} border-b md:border-b-2 border-dotted border-gray-200`,
                      children: e.guestName,
                    }),
                  ],
                }),
            ],
          }),
          (0, t.jsx)("div", {
            className: "overflow-hidden relative",
            children: (0, t.jsx)("img", {
              src: "./assets/ecards/wedding-20/groom-bride.webp",
              className: "object-cover w-full scale-[105%]",
            }),
          }),
        ],
      });
    }
    var o = e.i(846932),
      c = e.i(521920),
      m = e.i(341615),
      x = e.i(95022);
    function u({ invitation: e }) {
      return (0, t.jsx)(o.motion.div, {
        className: "",
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0 },
        children: (0, t.jsxs)("div", {
          className:
            "px-4 md:px-8 py-6 md:py-12 flex flex-col items-center gap-6 md:gap-14",
          children: [
            (0, t.jsxs)(o.motion.div, {
              className: "flex justify-around w-full",
              children: [
                (0, t.jsxs)(o.motion.div, {
                  className:
                    "text-center w-5/12 flex flex-col items-center gap-3",
                  children: [
                    (0, t.jsxs)("div", {
                      className: `flex flex-col text-base md:text-[32px] !leading-snug md:gap-1 ${c.UTMCafeta.className} uppercase`,
                      children: [
                        (0, t.jsx)("p", {
                          className: "",
                          children: "NHÀ TRAI",
                        }),
                        e.groomFather?.toString().trim() &&
                          (0, t.jsx)("p", {
                            className: "",
                            children: e.groomFather
                              .toString()
                              .trim()
                              .toUpperCase(),
                          }),
                        e.groomMother?.toString().trim() &&
                          (0, t.jsx)("p", {
                            className: "",
                            children: e.groomMother
                              .toString()
                              .trim()
                              .toUpperCase(),
                          }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: `${x.default.className} text-[13px] sm:text-base md:text-[26px] md:pt-3 !leading-tight`,
                      children: e.groomAddress,
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "max-w-16 md:max-w-32",
                  children: (0, t.jsx)(o.motion.div, {
                    className: "relative",
                    animate: { scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] },
                    transition: { duration: 4, repeat: 1 / 0 },
                    children: (0, t.jsx)("img", {
                      src: "./assets/ecards/wedding-10/img-13.webp",
                      alt: "Wedding symbol",
                      className: "scale-[130%] md:scale-[125%] object-cover",
                    }),
                  }),
                }),
                (0, t.jsxs)(o.motion.div, {
                  className:
                    "text-center w-5/12 flex flex-col items-center gap-3",
                  children: [
                    (0, t.jsxs)("div", {
                      className: `flex flex-col text-base md:text-[32px] !leading-snug md:gap-1 ${c.UTMCafeta.className} uppercase`,
                      children: [
                        (0, t.jsx)("p", { className: "", children: "NHÀ GÁI" }),
                        e.brideFather?.toString().trim() &&
                          (0, t.jsx)("p", {
                            className: "",
                            children: e.brideFather
                              .toString()
                              .trim()
                              .toUpperCase(),
                          }),
                        e.brideMother?.toString().trim() &&
                          (0, t.jsx)("p", {
                            className: "",
                            children: e.brideMother
                              .toString()
                              .trim()
                              .toUpperCase(),
                          }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: `${x.default.className} text-[13px]  md:text-[26px] md:pt-3 !leading-tight`,
                      children: e.brideAddress,
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "w-full flex flex-col items-center",
              children: [
                (0, t.jsx)(o.motion.div, {
                  className:
                    "pt-3 pb-3 text-sm md:pt-5 md:pb-7 md:text-3xl font-medium",
                  children: (0, t.jsxs)(o.motion.h2, {
                    className: a.BlackMango.className,
                    children: [
                      "Trân Trọng Báo Tin",
                      " ",
                      e.weddingName?.toString().trim()
                        ? e.weddingName
                            .toLowerCase()
                            .split(" ")
                            .filter((e) => e.length > 0)
                            .map((e) => e[0].toUpperCase() + e.slice(1))
                            .join(" ")
                        : "Lễ Thành Hôn",
                      " ",
                      "Của",
                    ],
                  }),
                }),
                (0, t.jsxs)(o.motion.div, {
                  className: `flex flex-col justify-center text-[40px] md:text-[78px] !leading-snug ${m.EphesisRegular.className}`,
                  children: [
                    (0, t.jsx)(o.motion.h1, { children: e.groomFullName }),
                    (0, t.jsx)(o.motion.span, {
                      className: `${i.UTMAzkia.className} !leading-[0.5]`,
                      children: "&",
                    }),
                    (0, t.jsx)(o.motion.h1, { children: e.brideFullName }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    function h() {
      return (0, t.jsx)("div", {
        children: (0, t.jsxs)("div", {
          className: "py-2 relative",
          children: [
            (0, t.jsx)("div", {
              className:
                "border-t-2 md:border-t-6 border-dashed border-[rgba(83,96,119,1)] w-full",
            }),
            (0, t.jsx)("div", {
              className:
                "absolute top-1/2 left-[-5.6%] -translate-y-1/2  w-[52px] h-[52px] md:w-28 md:h-28 bg-[rgba(125,31,42,1)]  rounded-full z-[2]",
            }),
            (0, t.jsx)("div", {
              className:
                "absolute top-1/2 right-[-5.6%] -translate-y-1/2  w-[52px] h-[52px] md:w-28 md:h-28 bg-[rgba(125,31,42,1)]  rounded-full z-[2]",
            }),
          ],
        }),
      });
    }
    var p = e.i(987006),
      g = e.i(233812);
    let f = (e, t) => {
        try {
          if (!e) return " ";
          return (0, r.getDatePart)(e, t) || " ";
        } catch {
          return " ";
        }
      },
      b = ({ date: e }) => {
        let a = e.getFullYear(),
          i = e.getMonth(),
          s = new Date(a, i + 1, 0).getDate(),
          n = new Date(a, i, 1).getDay(),
          l = 0 === n ? 6 : n - 1,
          r = Array.from({ length: 7 * Math.ceil((s + l) / 7) }, (e, t) => {
            let a = t - l + 1;
            return a > 0 && a <= s ? a : null;
          }),
          d = [];
        for (let e = 0; e < r.length; e += 7) d.push(r.slice(e, e + 7));
        return (0, t.jsxs)(o.motion.table, {
          className: `${p.Arial.className} w-full table-auto border md:border-3 border-solid border-[#AB0C0A]`,
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.6 },
          children: [
            (0, t.jsx)("thead", {
              children: (0, t.jsxs)("tr", {
                className: "text-[14px] md:text-[26px] !font-extrabold",
                children: [
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5",
                    children: "T2",
                  }),
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5",
                    children: "T3",
                  }),
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5",
                    children: "T4",
                  }),
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5",
                    children: "T5",
                  }),
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5",
                    children: "T6",
                  }),
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5",
                    children: "T7",
                  }),
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5 font-bold",
                    children: "CN",
                  }),
                ],
              }),
            }),
            (0, t.jsx)("tbody", {
              children: d.map((s, n) =>
                (0, t.jsx)(
                  o.motion.tr,
                  {
                    className: "text-center text-sm md:text-2xl",
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.4, delay: 0.1 * n },
                    children: s.map((s, n) => {
                      let l =
                          s &&
                          new Date(a, i, s).toDateString() === e.toDateString(),
                        r = `p-3 md:p-6 text-center ${6 === n ? "font-bold" : ""}`;
                      return (0, t.jsxs)(
                        "td",
                        {
                          className: `${r} ${l ? "relative" : ""}`,
                          children: [
                            s || "",
                            l
                              ? (0, t.jsx)(o.motion.div, {
                                  className:
                                    "w-[35px] md:w-[60px] top-[5px] md:top-[9px] md:left-[20px] left-[6px] h-[35px] md:h-[60px] overflow-hidden absolute",
                                  animate: {
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0],
                                  },
                                  transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                  },
                                  children: (0, t.jsx)("img", {
                                    className: l
                                      ? 'w-full scale-110 h-full bg-[url("./assets/ecards/wedding-10/date-wedding-template-11.webp")] bg-no-repeat bg-center bg-cover'
                                      : "",
                                    alt: "",
                                  }),
                                })
                              : null,
                          ],
                        },
                        n,
                      );
                    }),
                  },
                  n,
                ),
              ),
            }),
          ],
        });
      };
    function v({ calendar: e }) {
      return (0, t.jsxs)("div", {
        className:
          "pb-10 md:pb-20 flex flex-col items-center justify-center px-4 md:px-8",
        children: [
          (0, t.jsx)("div", {
            className: "w-1/2",
            children: (0, t.jsx)("img", {
              src: "./assets/ecards/wedding-20/yellow-flower-line.png",
              className: "object-cover w-full",
            }),
          }),
          (0, t.jsx)("h1", {
            className: `${g.LNTHYellowtail.className} text-[31px] md:text-7xl !leading-snug`,
            children: "Trân Trọng Kính Mời",
          }),
          (0, t.jsxs)("div", {
            className: `py-4 md:py-8 ${p.Arial.className} text-[14px] md:text-3xl !leading-snug w-full tracking-[0.12em] flex flex-col gap-4 md:gap-3`,
            children: [
              (0, t.jsxs)("h2", {
                className: "",
                children: [
                  "THAM DỰ TIỆC MỪNG ",
                  e.weddingName?.toString().trim()
                    ? e.weddingName?.toString().trim().toUpperCase()
                    : "LỄ THÀNH HÔN",
                  (0, t.jsx)("br", {}),
                  "Vào Lúc",
                ],
              }),
              (0, t.jsxs)(o.motion.div, {
                className:
                  "md:pb-5 flex gap-1 md:gap-14 md:pt-8 justify-center w-full",
                children: [
                  (0, t.jsx)(o.motion.div, {
                    className: "flex items-center justify-center",
                    children: (0, t.jsx)("p", {
                      className:
                        "border-r md:border-r-2 border-[#536077] pr-4 pt-6 pb-6 md:pr-7 md:pt-10 md:pb-10",
                      children: e.weddingTime
                        ?.slice(0, 5)
                        .replace(":", " giờ "),
                    }),
                  }),
                  (0, t.jsxs)(o.motion.div, {
                    className:
                      "w-2/5 md:w-1/4 flex flex-wrap gap-1 items-center justify-center",
                    children: [
                      (0, t.jsx)("div", {
                        className: "w-full",
                        children: (0, t.jsxs)("p", {
                          children: [
                            (() => {
                              try {
                                var t;
                                let a;
                                if (!e.weddingDate) return " ";
                                return (
                                  (t = e.weddingDate),
                                  (a = new Date(t).getDay()),
                                  0 === a ? "Chủ Nhật" : `Thứ ${a + 1}`
                                );
                              } catch {
                                return " ";
                              }
                            })(),
                            " ",
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "w-full",
                        children: (0, t.jsx)(o.motion.p, {
                          className:
                            "text-[35px] md:text-7xl md:pt-3 md:pb-3 font-bold",
                          animate: {
                            scale: [1, 1.1, 1],
                            color: ["#000000", "#8e0101", "#000000"],
                          },
                          transition: { duration: 2, repeat: 1 / 0 },
                          children: f(e.weddingDate, "d"),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsxs)("p", {
                          className: "w-full",
                          children: ["Tháng ", f(e.weddingDate, "m")],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)(o.motion.div, {
                    className: "flex items-center justify-center",
                    children: (0, t.jsxs)("p", {
                      className:
                        "border-l md:border-l-2 border-[#536077] pl-4 pt-6 pb-6 md:pl-7 md:pt-10 md:pb-10",
                      children: ["Năm ", f(e.weddingDate, "y")],
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(o.motion.div, {
                className: "md:pt-3 pb-3",
                children: (0, t.jsxs)("p", {
                  className: "text-center italic",
                  children: [
                    "(Vào ",
                    (() => {
                      if (!e.weddingDateLunar) return " ";
                      try {
                        return (0, r.formatLunarDate)(e.weddingDateLunar)
                          .toLowerCase()
                          .split(" ")
                          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                          .join(" ");
                      } catch {
                        return " ";
                      }
                    })(),
                    ")",
                  ],
                }),
              }),
            ],
          }),
          (0, t.jsx)(o.motion.div, {
            className:
              "pt-1 pb-3 md:pb-7 md:px-4 w-full border-solid border md:border-2 border-[rgb(125,31,42)] rounded-2xl md:rounded-[34px]",
            children: (0, t.jsxs)("div", {
              className: "px-2 py-5 md:py-14",
              children: [
                (0, t.jsxs)(o.motion.p, {
                  className: `${a.BlackMango.className} text-[22px] md:text-5xl pb-2 md:pb-8`,
                  animate: {
                    y: [0, -5, 0],
                    color: ["#000000", "#8e0101", "#000000"],
                  },
                  transition: { duration: 3, repeat: 1 / 0 },
                  children: [
                    "THÁNG ",
                    f(e.weddingDate, "m"),
                    " -",
                    " ",
                    f(e.weddingDate, "y"),
                  ],
                }),
                (0, t.jsx)(b, { date: new Date(e.weddingDate) }),
              ],
            }),
          }),
        ],
      });
    }
    var j = e.i(73646);
    function N({ location: e }) {
      return (0, t.jsxs)("div", {
        className: "py-5 md:py-14 flex flex-col px-10 md:px-16 gap-3 md:gap-8",
        children: [
          (0, t.jsx)("h1", {
            className: `${g.LNTHYellowtail.className} text-[31px] md:text-7xl !leading-snug`,
            children: "Địa Điểm Tổ Chức",
          }),
          (0, t.jsxs)("div", {
            className: "flex flex-col gap-1 md:gap-3",
            children: [
              (0, t.jsx)("h2", {
                className: `${j.default.className} text-[21px] md:text-5xl text-center !font-bold !leading-snug`,
                children: e.weddingVenueName,
              }),
              (0, t.jsx)("p", {
                className: `${p.Arial.className} text-[14px] md:text-3xl text-center !leading-snug`,
                children: e.weddingVenueAddress,
              }),
            ],
          }),
          e.googleMap &&
            (0, t.jsxs)("div", {
              className: "flex justify-center",
              children: [
                "  ",
                (0, t.jsx)("a", {
                  type: "button",
                  href: `${e.googleMap}`,
                  target: "_blank",
                  className: `${p.Arial.className} text-[15px] md:text-3xl cursor-pointer focus:outline-none text-white bg-[rgb(125,31,42)] shadow-md shadow-black/25 focus:ring-4 focus:ring-red-300 font-medium rounded-full px-4 py-1 md:px-7 md:py-3 max-w-full inline-block`,
                  children: "Xem Chỉ Đường",
                }),
              ],
            }),
        ],
      });
    }
    var y = e.i(854878),
      w = e.i(472317),
      _ = e.i(271645),
      k = e.i(33160),
      C = e.i(485636);
    let D =
      "border-double border-2 md:border-3 border-[rgba(125,31,42,1)] w-full text-[13px] md:text-2xl px-3 py-2 md:p-4 placeholder:text-[black] text-[black] focus:outline-none focus-visible:outline-none";
    function T({ confirmData: e }) {
      let [a, s] = (0, _.useState)(!1),
        [n, l] = (0, _.useState)({
          id: 0,
          ecard_my_user_id: Number(e.id),
          ecard_my_user_invitee_id: 0,
          name: e.guestName ?? "",
          content: "",
          is_tham_du: null,
          so_nguoi_tham_du: void 0,
        }),
        d = (0, _.useCallback)(() => {
          s(!1);
        }, []),
        c = async (e) => {
          e.preventDefault();
          try {
            let e = (0, r.getCookies)("ecard_my_user_invitee_id"),
              t = { ...n };
            ((t.ecard_my_user_invitee_id =
              e && !isNaN(Number(e)) ? Number(e) : 0),
              (void 0 === t.so_nguoi_tham_du || !0 !== t.is_tham_du) &&
                (t.so_nguoi_tham_du = 0));
            let a = await (0, w.AddCongratulations)(t);
            a.success
              ? ((0, r.setCookies)(
                  "ecard_my_user_invitee_id",
                  a.data.data.invitee_id,
                  1825,
                ),
                s(!0))
              : (0, k.showToast)(a.message || "Đăng nhập thất bại", "error");
          } catch (e) {
            (console.error("Login error:", e),
              (0, k.showToast)("Có lỗi xảy ra, vui lòng thử lại!", "error"));
          }
        };
      return (0, t.jsxs)("div", {
        className: "md:px-16 py-6 md:py-14",
        children: [
          (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(o.motion.div, {
                className: "",
                animate: {
                  y: [0, -10, 0],
                  color: ["#000000", "#8e0101", "#000000"],
                },
                transition: { duration: 3, repeat: 1 / 0 },
                children: (0, t.jsxs)("h2", {
                  className: `text-[30px] md:text-6xl ${m.EphesisRegular.className} !leading-[1.1]`,
                  children: [
                    "Xác Nhận Tham Dự",
                    (0, t.jsx)("br", {}),
                    "&",
                    (0, t.jsx)("br", {}),
                    "Gửi Lời Chúc",
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: "w-full rounded-3xl md:mt-8 md:mb-8",
                children: (0, t.jsx)("form", {
                  onSubmit: c,
                  children: (0, t.jsxs)("div", {
                    className:
                      "p-4 md:p-9 flex gap-3 md:gap-6 flex-wrap justify-center items-center",
                    children: [
                      (0, t.jsx)("input", {
                        required: !0,
                        className: D,
                        type: "text",
                        name: "name",
                        maxLength: 200,
                        placeholder: "Vui lòng điền tên của bạn",
                        value: n.name,
                        onChange: (e) => {
                          let { name: t, value: a } = e.target;
                          l((e) => ({ ...e, [t]: a }));
                        },
                      }),
                      (0, t.jsx)("textarea", {
                        rows: 2,
                        required: !0,
                        name: "content",
                        className: D,
                        maxLength: 1e3,
                        placeholder: "Gửi lời chúc đến Dâu Rể nhé!",
                        value: n.content,
                        onChange: (e) => {
                          let { name: t, value: a } = e.target;
                          l((e) => ({ ...e, [t]: a }));
                        },
                      }),
                      (0, t.jsxs)("select", {
                        className: D,
                        name: "is_tham_du",
                        required: !0,
                        value:
                          null === n.is_tham_du
                            ? ""
                            : n.is_tham_du
                              ? "true"
                              : "false",
                        onChange: (e) => {
                          let { name: t, value: a } = e.target;
                          l((e) => ({
                            ...e,
                            [t]:
                              "is_tham_du" === t
                                ? "" === a
                                  ? null
                                  : "true" === a
                                : a,
                          }));
                        },
                        children: [
                          (0, t.jsx)("option", {
                            value: "",
                            children: "Bạn Sẽ Tham Dự Cùng Chúng Mình Nhé?",
                          }),
                          (0, t.jsx)("option", {
                            value: "true",
                            children: "Mình Sẽ Tham Dự Nha",
                          }),
                          (0, t.jsx)("option", {
                            value: "false",
                            children:
                              "Tiếc Quá! Mình Không Thể Tham Dự Được Mất Rồi",
                          }),
                        ],
                      }),
                      n.is_tham_du &&
                        (0, t.jsx)("input", {
                          required: !0,
                          className: D,
                          type: "number",
                          name: "so_nguoi_tham_du",
                          min: 1,
                          placeholder: "Số lượng người đến tham dự",
                          value: n.so_nguoi_tham_du,
                          onChange: (e) => {
                            let { name: t, value: a, type: i } = e.target;
                            l((e) => ({
                              ...e,
                              [t]:
                                "number" === i
                                  ? "" === a
                                    ? ""
                                    : Number(a)
                                  : a,
                            }));
                          },
                        }),
                      (0, t.jsx)(o.motion.button, {
                        type: "submit",
                        className: `${C.default.className} !leading-snug w-full cursor-pointer focus:outline-none text-black bg-white shadow-md shadow-black/25 focus:ring-4 font-semibold text-sm py-2 md:text-2xl md:py-4`,
                        whileHover: { scale: 1.05, y: -3 },
                        whileTap: { scale: 0.95 },
                        animate: {
                          scale: [1, 1.02, 1],
                          boxShadow: [
                            "0 4px 6px rgba(0,0,0,0.25)",
                            "0 8px 12px rgba(0,0,0,0.3)",
                            "0 4px 6px rgba(0,0,0,0.25)",
                          ],
                        },
                        transition: { duration: 2, repeat: 1 / 0 },
                        children: "GỬI NGAY",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          (0, t.jsxs)(y.Dialog, {
            open: a,
            onClose: d,
            className: "relative z-10",
            children: [
              (0, t.jsx)(y.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-screen items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(y.DialogPanel, {
                    transition: !0,
                    className:
                      "relative transform overflow-hidden rounded-2xl bg-[rgba(255,255,255,1)] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, t.jsxs)("button", {
                        type: "button",
                        className:
                          "absolute right-2 top-2 z-20 rounded-full p-1 text-gray-400 hover:text-gray-600 focus:outline-none",
                        onClick: d,
                        children: [
                          (0, t.jsx)("span", {
                            className: "sr-only",
                            children: "Close",
                          }),
                          (0, t.jsx)("svg", {
                            className: "h-6 w-6 md:h-16 md:w-16",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "1.5",
                            stroke: "currentColor",
                            children: (0, t.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M6 18L18 6M6 6l12 12",
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)(o.motion.div, {
                        className: "bg-[rgb(125,31,42)]",
                        initial: { scale: 0.8, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        transition: { duration: 0.3 },
                        children: (0, t.jsxs)("div", {
                          className: "flex relative",
                          children: [
                            (0, t.jsx)("img", {
                              className: "w-full aspect-[736/980] object-cover",
                              src: "./assets/ecards/wedding-20/groom-bride.webp",
                              alt: "Thank you background",
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "bg-black/50 w-full absolute -translate-0.5 top-1/2 flex flex-wrap items-center justify-center",
                              children: [
                                (0, t.jsx)("img", {
                                  className: "w-full md:w-80%",
                                  src: "./assets/ecards/wedding-10/thank-you.webp",
                                  alt: "Thank you",
                                }),
                                (0, t.jsx)("p", {
                                  className: `text-[38px] md:text-8xl text-white absolute bottom-1/5 ${i.UTMAzkia.className}`,
                                  children: "Rất hân hạnh được đón tiếp!",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
    }
    var I = e.i(788164),
      S = e.i(56506);
    e.s(
      [
        "default",
        0,
        ({ refData: e, guestName: a, inviteeid: s }) => {
          let n = a && !Array.isArray(a) ? decodeURIComponent(a) : void 0;
          s && s > 0 && (0, r.setCookies)("ecard_my_user_invitee_id", s, 1825);
          let l = e?.formData || {},
            o = l.chure || " ",
            c = l.hoten_chure || " ",
            m = l.codau || " ",
            x = l.hoten_codau || " ",
            p = l.nha_trai_ong ? "Ông " + l.nha_trai_ong : "",
            g = l.nha_trai_ba ? "Bà " + l.nha_trai_ba : "",
            f = l.nha_trai_dia_chi,
            b = l.nha_gai_ong ? "Ông " + l.nha_gai_ong : "",
            j = l.nha_gai_ba ? "Bà " + l.nha_gai_ba : "",
            y = l.nha_gai_dia_chi,
            w = e.formData.ten_le,
            _ = e.formData.tiec_ngay,
            k = e.formData.tiec_ngay_am,
            C = e.formData.tiec_gio,
            D = e.formData.tiec_ten,
            M = e.formData.tiec_dia_chi,
            V = e.formData.google_map;
          return (0, t.jsxs)("div", {
            className:
              "begindowload max-w-4xl px-4 md:px-10 py-3 md:py-5 mx-auto text-center bg-[rgba(125,31,42,1.000)] overflow-hidden",
            children: [
              (0, t.jsx)(d, {
                banner: {
                  weddingDate: _,
                  brideName: m,
                  groomName: o,
                  guestName: n,
                },
              }),
              (0, t.jsxs)("div", {
                className:
                  "bg-[rgba(255,249,236,1)] my-10 rounded-[30px] md:rounded-[50px] overflow-hidden",
                children: [
                  (0, t.jsx)("h1", {
                    className: `${I.VNFSheliaRegular.className} text-[39px] md:text-7xl pb-4 md:pb-7 !leading-normal !font-bold border-b-4 md:border-b-6 borde-solid border-[rgba(125,31,42,1.000)]`,
                    children: "Wedding Invitation",
                  }),
                  (0, t.jsx)(u, {
                    invitation: {
                      groomFather: p,
                      groomMother: g,
                      groomAddress: f,
                      brideFather: b,
                      brideMother: j,
                      brideAddress: y,
                      weddingName: w,
                      groomFullName: c,
                      brideFullName: x,
                    },
                  }),
                  (0, t.jsx)(h, {}),
                  (0, t.jsx)(v, {
                    calendar: {
                      weddingName: w,
                      weddingTime: C,
                      weddingDate: _,
                      weddingDateLunar: k,
                    },
                  }),
                  (0, t.jsx)(h, {}),
                  (0, t.jsx)(N, {
                    location: {
                      weddingVenueName: D,
                      weddingVenueAddress: M,
                      googleMap: V,
                    },
                  }),
                  (0, t.jsx)(h, {}),
                  (0, t.jsx)(T, {
                    confirmData: { id: e.id ?? 0, guestName: n ?? "" },
                  }),
                  (0, t.jsx)("h1", {
                    className: `${i.UTMAzkia.className} text-[33px] md:text-7xl pt-4 md:pt-8 pb-3 md:pb-4 !leading-snug border-t-4 md:border-t-6 borde-solid border-[rgba(125,31,42,1.000)]`,
                    children: "Rất Hân Hạnh Được Đón Tiếp!",
                  }),
                ],
              }),
              (0, t.jsx)(S.default, {
                urlMp3: e.formData.audio,
                ecardMyUserId: e.id,
              }),
            ],
          });
        },
      ],
      864254,
    );
  },
  341615,
  (e) => {
    "use strict";
    var t = e.i(391220);
    e.s(["EphesisRegular", () => t.default]);
  },
  987006,
  (e) => {
    "use strict";
    var t = e.i(255538);
    e.s(["Arial", () => t.default]);
  },
  574567,
  (e) => {
    "use strict";
    var t = e.i(72220);
    e.s(["BlackMango", () => t.default]);
  },
  521920,
  (e) => {
    "use strict";
    var t = e.i(788882);
    e.s(["UTMCafeta", () => t.default]);
  },
  935167,
  (e) => {
    "use strict";
    var t = e.i(534606);
    e.s(["UTMAzkia", () => t.default]);
  },
  50595,
  (e) => {
    "use strict";
    var t = e.i(723323);
    e.s(["SVNMightiest", () => t.default]);
  },
  143914,
  (e) => {
    e.v({ className: "roboto_392752d8-module__ecso2G__className" });
  },
  251346,
  (e) => {
    e.v({ className: "roboto_2f65e263-module__beKiOG__className" });
  },
  643807,
  (e) => {
    e.v({ className: "roboto_2f8452c6-module__xGOsPq__className" });
  },
  304965,
  (e) => {
    e.v({ className: "roboto_1ca76549-module__mIDeka__className" });
  },
  60521,
  95022,
  233812,
  73646,
  485636,
  788164,
  (e) => {
    "use strict";
    var t = e.i(143914);
    let a = {
      className: t.default.className,
      style: { fontFamily: "'Roboto', 'Roboto Fallback'", fontStyle: "normal" },
    };
    (null != t.default.variable && (a.variable = t.default.variable),
      e.s(["default", 0, a], 60521));
    var i = e.i(251346);
    let s = {
      className: i.default.className,
      style: { fontFamily: "'Roboto', 'Roboto Fallback'", fontStyle: "normal" },
    };
    (null != i.default.variable && (s.variable = i.default.variable),
      e.s(["default", 0, s], 95022));
    var n = e.i(777052);
    e.s(["LNTHYellowtail", () => n.default], 233812);
    var l = e.i(643807);
    let r = {
      className: l.default.className,
      style: { fontFamily: "'Roboto', 'Roboto Fallback'", fontStyle: "normal" },
    };
    (null != l.default.variable && (r.variable = l.default.variable),
      e.s(["default", 0, r], 73646));
    var d = e.i(304965);
    let o = {
      className: d.default.className,
      style: { fontFamily: "'Roboto', 'Roboto Fallback'", fontStyle: "normal" },
    };
    (null != d.default.variable && (o.variable = d.default.variable),
      e.s(["default", 0, o], 485636));
    var c = e.i(651836);
    e.s(["VNFSheliaRegular", () => c.default], 788164);
  },
  994624,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(283210);
    var a = e.i(574567),
      i = e.i(935167),
      s = e.i(50595),
      n = e.i(677169),
      l = e.i(60521),
      r = e.i(589997);
    function d({ banner: e }) {
      return (0, t.jsxs)("div", {
        className: "relative over",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute top-0 z-[0] right-[-21%] md:right-[-15%] w-[48%] md:w-[42%]",
            children: (0, t.jsx)("img", {
              src: "./assets/ecards/wedding-20/song-hy.webp",
              className: "object-cover w-full",
            }),
          }),
          (0, t.jsx)("div", {
            className:
              "absolute bottom-[12%] md:bottom-[18%] z-[0] left-[-26%] md:left-[-21%] w-[75%] md:w-[60%]",
            children: (0, t.jsx)("img", {
              src: "./assets/ecards/wedding-20/song-hy.webp",
              className: "object-cover w-full",
            }),
          }),
          (0, t.jsxs)("div", {
            className:
              "text-white flex flex-col justify-center items-center gap-3 md:gap-10 relative",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "flex flex-col justify-center items-center gap-5 md:gap-12 w-full",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "flex flex-col justify-center items-start w-full mt-8 md:mt-16",
                    children: [
                      (0, t.jsx)("h1", {
                        className: `${a.BlackMango.className} text-[37px] md:text-[76px] !leading-snug !italic !font-bold`,
                        children: "SAVE THE DATE",
                      }),
                      (0, t.jsx)("p", {
                        className: `${l.default.className} text-[25px] md:text-[50px] !leading-snug !italic`,
                        children: (() => {
                          try {
                            if (!e.weddingDate) return " ";
                            return (0, r.formatDateDDMMYYYY2)(e.weddingDate);
                          } catch {
                            return " ";
                          }
                        })(),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    children: (0, t.jsxs)("h1", {
                      className: `${i.UTMAzkia.className} text-[50px] md:text-8xl font-bold [text-shadow:0px_4px_4px_rgba(0,0,0,1)]`,
                      children: [e.brideName, " & ", e.groomName],
                    }),
                  }),
                ],
              }),
              e.guestName &&
                "" !== e.guestName.trim() &&
                (0, t.jsxs)("div", {
                  className:
                    "flex justify-center flex-col items-center gap-3 md:gap-4",
                  children: [
                    (0, t.jsx)("h2", {
                      className: `${s.SVNMightiest.className} text-[22px] md:text-[40px] !leading-snug md:mb-4`,
                      children: "Trân Trọng Kính Mời:",
                    }),
                    (0, t.jsx)("h2", {
                      style: {
                        textShadow: "0px 4px 4px rgba(0,0,0,1) !important",
                      },
                      className: `px-4 md:px-8 text-2xl md:text-5xl ${n.ViceroyJF.className} border-b md:border-b-2 border-dotted border-gray-200`,
                      children: e.guestName,
                    }),
                  ],
                }),
            ],
          }),
          (0, t.jsx)("div", {
            className: "overflow-hidden relative",
            children: (0, t.jsx)("img", {
              src: "./assets/ecards/wedding-20/groom-bride.webp",
              className: "object-cover w-full scale-[105%]",
            }),
          }),
        ],
      });
    }
    var o = e.i(846932),
      c = e.i(521920),
      m = e.i(341615),
      x = e.i(95022);
    function u({ invitation: e }) {
      return (0, t.jsx)(o.motion.div, {
        className: "",
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0 },
        children: (0, t.jsxs)("div", {
          className:
            "px-4 md:px-8 py-6 md:py-12 flex flex-col items-center gap-6 md:gap-14",
          children: [
            (0, t.jsxs)(o.motion.div, {
              className: "flex justify-around w-full",
              children: [
                (0, t.jsxs)(o.motion.div, {
                  className:
                    "text-center w-5/12 flex flex-col items-center gap-3",
                  children: [
                    (0, t.jsxs)("div", {
                      className: `flex flex-col text-base md:text-[32px] !leading-snug md:gap-1 ${c.UTMCafeta.className} uppercase`,
                      children: [
                        (0, t.jsx)("p", { className: "", children: "NHÀ GÁI" }),
                        e.brideFather?.toString().trim() &&
                          (0, t.jsx)("p", {
                            className: "",
                            children: e.brideFather
                              .toString()
                              .trim()
                              .toUpperCase(),
                          }),
                        e.brideMother?.toString().trim() &&
                          (0, t.jsx)("p", {
                            className: "",
                            children: e.brideMother
                              .toString()
                              .trim()
                              .toUpperCase(),
                          }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: `${x.default.className} text-[13px]  md:text-[26px] md:pt-3 !leading-tight`,
                      children: e.brideAddress,
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "max-w-16 md:max-w-32",
                  children: (0, t.jsx)(o.motion.div, {
                    className: "relative",
                    animate: { scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] },
                    transition: { duration: 4, repeat: 1 / 0 },
                    children: (0, t.jsx)("img", {
                      src: "./assets/ecards/wedding-10/img-13.webp",
                      alt: "Wedding symbol",
                      className: "scale-[130%] md:scale-[125%] object-cover",
                    }),
                  }),
                }),
                (0, t.jsxs)(o.motion.div, {
                  className:
                    "text-center w-5/12 flex flex-col items-center gap-3",
                  children: [
                    (0, t.jsxs)("div", {
                      className: `flex flex-col text-base md:text-[32px] !leading-snug md:gap-1 ${c.UTMCafeta.className} uppercase`,
                      children: [
                        (0, t.jsx)("p", {
                          className: "",
                          children: "NHÀ TRAI",
                        }),
                        e.groomFather?.toString().trim() &&
                          (0, t.jsx)("p", {
                            className: "",
                            children: e.groomFather
                              .toString()
                              .trim()
                              .toUpperCase(),
                          }),
                        e.groomMother?.toString().trim() &&
                          (0, t.jsx)("p", {
                            className: "",
                            children: e.groomMother
                              .toString()
                              .trim()
                              .toUpperCase(),
                          }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: `${x.default.className} text-[13px] sm:text-base md:text-[26px] md:pt-3 !leading-tight`,
                      children: e.groomAddress,
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "w-full flex flex-col items-center",
              children: [
                (0, t.jsx)(o.motion.div, {
                  className:
                    "pt-3 pb-3 text-sm md:pt-5 md:pb-7 md:text-3xl font-medium",
                  children: (0, t.jsxs)(o.motion.h2, {
                    className: a.BlackMango.className,
                    children: [
                      "Trân Trọng Báo Tin",
                      " ",
                      e.weddingName?.toString().trim()
                        ? e.weddingName
                            .toLowerCase()
                            .split(" ")
                            .filter((e) => e.length > 0)
                            .map((e) => e[0].toUpperCase() + e.slice(1))
                            .join(" ")
                        : "Lễ Đính Hôn",
                      " ",
                      "Của",
                    ],
                  }),
                }),
                (0, t.jsxs)(o.motion.div, {
                  className: `flex flex-col justify-center text-[40px] md:text-[78px] !leading-snug ${m.EphesisRegular.className}`,
                  children: [
                    (0, t.jsx)(o.motion.h1, { children: e.brideFullName }),
                    (0, t.jsx)(o.motion.span, {
                      className: `${i.UTMAzkia.className} !leading-[0.5]`,
                      children: "&",
                    }),
                    (0, t.jsx)(o.motion.h1, { children: e.groomFullName }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    function h() {
      return (0, t.jsx)("div", {
        children: (0, t.jsxs)("div", {
          className: "py-2 relative",
          children: [
            (0, t.jsx)("div", {
              className:
                "border-t-2 md:border-t-6 border-dashed border-[rgba(83,96,119,1)] w-full",
            }),
            (0, t.jsx)("div", {
              className:
                "absolute top-1/2 left-[-5.6%] -translate-y-1/2  w-[52px] h-[52px] md:w-28 md:h-28 bg-[rgba(125,31,42,1)]  rounded-full z-[2]",
            }),
            (0, t.jsx)("div", {
              className:
                "absolute top-1/2 right-[-5.6%] -translate-y-1/2  w-[52px] h-[52px] md:w-28 md:h-28 bg-[rgba(125,31,42,1)]  rounded-full z-[2]",
            }),
          ],
        }),
      });
    }
    var p = e.i(987006),
      g = e.i(233812);
    let f = (e, t) => {
        try {
          if (!e) return " ";
          return (0, r.getDatePart)(e, t) || " ";
        } catch {
          return " ";
        }
      },
      b = ({ date: e }) => {
        let a = e.getFullYear(),
          i = e.getMonth(),
          s = new Date(a, i + 1, 0).getDate(),
          n = new Date(a, i, 1).getDay(),
          l = 0 === n ? 6 : n - 1,
          r = Array.from({ length: 7 * Math.ceil((s + l) / 7) }, (e, t) => {
            let a = t - l + 1;
            return a > 0 && a <= s ? a : null;
          }),
          d = [];
        for (let e = 0; e < r.length; e += 7) d.push(r.slice(e, e + 7));
        return (0, t.jsxs)(o.motion.table, {
          className: `${p.Arial.className} w-full table-auto border md:border-3 border-solid border-[#AB0C0A]`,
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.6 },
          children: [
            (0, t.jsx)("thead", {
              children: (0, t.jsxs)("tr", {
                className: "text-[14px] md:text-[26px] !font-extrabold",
                children: [
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5",
                    children: "T2",
                  }),
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5",
                    children: "T3",
                  }),
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5",
                    children: "T4",
                  }),
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5",
                    children: "T5",
                  }),
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5",
                    children: "T6",
                  }),
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5",
                    children: "T7",
                  }),
                  (0, t.jsx)("th", {
                    className: "pt-2 pb-2 md:pt-5 font-bold",
                    children: "CN",
                  }),
                ],
              }),
            }),
            (0, t.jsx)("tbody", {
              children: d.map((s, n) =>
                (0, t.jsx)(
                  o.motion.tr,
                  {
                    className: "text-center text-sm md:text-2xl",
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.4, delay: 0.1 * n },
                    children: s.map((s, n) => {
                      let l =
                          s &&
                          new Date(a, i, s).toDateString() === e.toDateString(),
                        r = `p-3 md:p-6 text-center ${6 === n ? "font-bold" : ""}`;
                      return (0, t.jsxs)(
                        "td",
                        {
                          className: `${r} ${l ? "relative" : ""}`,
                          children: [
                            s || "",
                            l
                              ? (0, t.jsx)(o.motion.div, {
                                  className:
                                    "w-[35px] md:w-[60px] top-[5px] md:top-[9px] md:left-[20px] left-[6px] h-[35px] md:h-[60px] overflow-hidden absolute",
                                  animate: {
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0],
                                  },
                                  transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                  },
                                  children: (0, t.jsx)("img", {
                                    className: l
                                      ? 'w-full scale-110 h-full bg-[url("./assets/ecards/wedding-10/date-wedding-template-11.webp")] bg-no-repeat bg-center bg-cover'
                                      : "",
                                    alt: "",
                                  }),
                                })
                              : null,
                          ],
                        },
                        n,
                      );
                    }),
                  },
                  n,
                ),
              ),
            }),
          ],
        });
      };
    function v({ calendar: e }) {
      return (0, t.jsxs)("div", {
        className:
          "pb-10 md:pb-20 flex flex-col items-center justify-center px-4 md:px-8",
        children: [
          (0, t.jsx)("div", {
            className: "w-1/2",
            children: (0, t.jsx)("img", {
              src: "./assets/ecards/wedding-20/yellow-flower-line.png",
              className: "object-cover w-full",
            }),
          }),
          (0, t.jsx)("h1", {
            className: `${g.LNTHYellowtail.className} text-[31px] md:text-7xl !leading-snug`,
            children: "Trân Trọng Kính Mời",
          }),
          (0, t.jsxs)("div", {
            className: `py-4 md:py-8 ${p.Arial.className} text-[14px] md:text-3xl !leading-snug w-full tracking-[0.12em] flex flex-col gap-4 md:gap-3`,
            children: [
              (0, t.jsxs)("h2", {
                className: "",
                children: [
                  "THAM DỰ TIỆC MỪNG ",
                  e.weddingName?.toString().trim()
                    ? e.weddingName?.toString().trim().toUpperCase()
                    : "LỄ THÀNH HÔN",
                  (0, t.jsx)("br", {}),
                  "Vào Lúc",
                ],
              }),
              (0, t.jsxs)(o.motion.div, {
                className:
                  "md:pb-5 flex gap-1 md:gap-14 md:pt-8 justify-center w-full",
                children: [
                  (0, t.jsx)(o.motion.div, {
                    className: "flex items-center justify-center",
                    children: (0, t.jsx)("p", {
                      className:
                        "border-r md:border-r-2 border-[#536077] pr-4 pt-6 pb-6 md:pr-7 md:pt-10 md:pb-10",
                      children: e.weddingTime
                        ?.slice(0, 5)
                        .replace(":", " giờ "),
                    }),
                  }),
                  (0, t.jsxs)(o.motion.div, {
                    className:
                      "w-2/5 md:w-1/4 flex flex-wrap gap-1 items-center justify-center",
                    children: [
                      (0, t.jsx)("div", {
                        className: "w-full",
                        children: (0, t.jsxs)("p", {
                          children: [
                            (() => {
                              try {
                                var t;
                                let a;
                                if (!e.weddingDate) return " ";
                                return (
                                  (t = e.weddingDate),
                                  (a = new Date(t).getDay()),
                                  0 === a ? "Chủ Nhật" : `Thứ ${a + 1}`
                                );
                              } catch {
                                return " ";
                              }
                            })(),
                            " ",
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "w-full",
                        children: (0, t.jsx)(o.motion.p, {
                          className:
                            "text-[35px] md:text-7xl md:pt-3 md:pb-3 font-bold",
                          animate: {
                            scale: [1, 1.1, 1],
                            color: ["#000000", "#8e0101", "#000000"],
                          },
                          transition: { duration: 2, repeat: 1 / 0 },
                          children: f(e.weddingDate, "d"),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsxs)("p", {
                          className: "w-full",
                          children: ["Tháng ", f(e.weddingDate, "m")],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)(o.motion.div, {
                    className: "flex items-center justify-center",
                    children: (0, t.jsxs)("p", {
                      className:
                        "border-l md:border-l-2 border-[#536077] pl-4 pt-6 pb-6 md:pl-7 md:pt-10 md:pb-10",
                      children: ["Năm ", f(e.weddingDate, "y")],
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(o.motion.div, {
                className: "md:pt-3 pb-3",
                children: (0, t.jsxs)("p", {
                  className: "text-center italic",
                  children: [
                    "(Vào ",
                    (() => {
                      if (!e.weddingDateLunar) return " ";
                      try {
                        return (0, r.formatLunarDate)(e.weddingDateLunar)
                          .toLowerCase()
                          .split(" ")
                          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                          .join(" ");
                      } catch {
                        return " ";
                      }
                    })(),
                    ")",
                  ],
                }),
              }),
            ],
          }),
          (0, t.jsx)(o.motion.div, {
            className:
              "pt-1 pb-3 md:pb-7 md:px-4 w-full border-solid border md:border-2 border-[rgb(125,31,42)] rounded-2xl md:rounded-[34px]",
            children: (0, t.jsxs)("div", {
              className: "px-2 py-5 md:py-14",
              children: [
                (0, t.jsxs)(o.motion.p, {
                  className: `${a.BlackMango.className} text-[22px] md:text-5xl pb-2 md:pb-8`,
                  animate: {
                    y: [0, -5, 0],
                    color: ["#000000", "#8e0101", "#000000"],
                  },
                  transition: { duration: 3, repeat: 1 / 0 },
                  children: [
                    "THÁNG ",
                    f(e.weddingDate, "m"),
                    " -",
                    " ",
                    f(e.weddingDate, "y"),
                  ],
                }),
                (0, t.jsx)(b, { date: new Date(e.weddingDate) }),
              ],
            }),
          }),
        ],
      });
    }
    var j = e.i(73646);
    function N({ location: e }) {
      return (0, t.jsxs)("div", {
        className: "py-5 md:py-14 flex flex-col px-10 md:px-16 gap-3 md:gap-8",
        children: [
          (0, t.jsx)("h1", {
            className: `${g.LNTHYellowtail.className} text-[31px] md:text-7xl !leading-snug`,
            children: "Địa Điểm Tổ Chức",
          }),
          (0, t.jsxs)("div", {
            className: "flex flex-col gap-1 md:gap-3",
            children: [
              (0, t.jsx)("h2", {
                className: `${j.default.className} text-[21px] md:text-5xl text-center !font-bold !leading-snug`,
                children: e.weddingVenueName,
              }),
              (0, t.jsx)("p", {
                className: `${p.Arial.className} text-[14px] md:text-3xl text-center !leading-snug`,
                children: e.weddingVenueAddress,
              }),
            ],
          }),
          e.googleMap &&
            (0, t.jsxs)("div", {
              className: "flex justify-center",
              children: [
                "  ",
                (0, t.jsx)("a", {
                  type: "button",
                  href: `${e.googleMap}`,
                  target: "_blank",
                  className: `${p.Arial.className} text-[15px] md:text-3xl cursor-pointer focus:outline-none text-white bg-[rgb(125,31,42)] shadow-md shadow-black/25 focus:ring-4 focus:ring-red-300 font-medium rounded-full px-4 py-1 md:px-7 md:py-3 max-w-full inline-block`,
                  children: "Xem Chỉ Đường",
                }),
              ],
            }),
        ],
      });
    }
    var y = e.i(854878),
      w = e.i(472317),
      _ = e.i(271645),
      k = e.i(33160),
      C = e.i(485636);
    let D =
      "border-double border-2 md:border-3 border-[rgba(125,31,42,1)] w-full text-[13px] md:text-2xl px-3 py-2 md:p-4 placeholder:text-[black] text-[black] focus:outline-none focus-visible:outline-none";
    function T({ confirmData: e }) {
      let [a, s] = (0, _.useState)(!1),
        [n, l] = (0, _.useState)({
          id: 0,
          ecard_my_user_id: Number(e.id),
          ecard_my_user_invitee_id: 0,
          name: e.guestName ?? "",
          content: "",
          is_tham_du: null,
          so_nguoi_tham_du: void 0,
        }),
        d = (0, _.useCallback)(() => {
          s(!1);
        }, []),
        c = async (e) => {
          e.preventDefault();
          try {
            let e = (0, r.getCookies)("ecard_my_user_invitee_id"),
              t = { ...n };
            ((t.ecard_my_user_invitee_id =
              e && !isNaN(Number(e)) ? Number(e) : 0),
              (void 0 === t.so_nguoi_tham_du || !0 !== t.is_tham_du) &&
                (t.so_nguoi_tham_du = 0));
            let a = await (0, w.AddCongratulations)(t);
            a.success
              ? ((0, r.setCookies)(
                  "ecard_my_user_invitee_id",
                  a.data.data.invitee_id,
                  1825,
                ),
                s(!0))
              : (0, k.showToast)(a.message || "Đăng nhập thất bại", "error");
          } catch (e) {
            (console.error("Login error:", e),
              (0, k.showToast)("Có lỗi xảy ra, vui lòng thử lại!", "error"));
          }
        };
      return (0, t.jsxs)("div", {
        className: "md:px-16 py-6 md:py-14",
        children: [
          (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(o.motion.div, {
                className: "",
                animate: {
                  y: [0, -10, 0],
                  color: ["#000000", "#8e0101", "#000000"],
                },
                transition: { duration: 3, repeat: 1 / 0 },
                children: (0, t.jsxs)("h2", {
                  className: `text-[30px] md:text-6xl ${m.EphesisRegular.className} !leading-[1.1]`,
                  children: [
                    "Xác Nhận Tham Dự",
                    (0, t.jsx)("br", {}),
                    "&",
                    (0, t.jsx)("br", {}),
                    "Gửi Lời Chúc",
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: "w-full rounded-3xl md:mt-8 md:mb-8",
                children: (0, t.jsx)("form", {
                  onSubmit: c,
                  children: (0, t.jsxs)("div", {
                    className:
                      "p-4 md:p-9 flex gap-3 md:gap-6 flex-wrap justify-center items-center",
                    children: [
                      (0, t.jsx)("input", {
                        required: !0,
                        className: D,
                        type: "text",
                        name: "name",
                        maxLength: 200,
                        placeholder: "Vui lòng điền tên của bạn",
                        value: n.name,
                        onChange: (e) => {
                          let { name: t, value: a } = e.target;
                          l((e) => ({ ...e, [t]: a }));
                        },
                      }),
                      (0, t.jsx)("textarea", {
                        rows: 2,
                        required: !0,
                        name: "content",
                        className: D,
                        maxLength: 1e3,
                        placeholder: "Gửi lời chúc đến Dâu Rể nhé!",
                        value: n.content,
                        onChange: (e) => {
                          let { name: t, value: a } = e.target;
                          l((e) => ({ ...e, [t]: a }));
                        },
                      }),
                      (0, t.jsxs)("select", {
                        className: D,
                        name: "is_tham_du",
                        required: !0,
                        value:
                          null === n.is_tham_du
                            ? ""
                            : n.is_tham_du
                              ? "true"
                              : "false",
                        onChange: (e) => {
                          let { name: t, value: a } = e.target;
                          l((e) => ({
                            ...e,
                            [t]:
                              "is_tham_du" === t
                                ? "" === a
                                  ? null
                                  : "true" === a
                                : a,
                          }));
                        },
                        children: [
                          (0, t.jsx)("option", {
                            value: "",
                            children: "Bạn Sẽ Tham Dự Cùng Chúng Mình Nhé?",
                          }),
                          (0, t.jsx)("option", {
                            value: "true",
                            children: "Mình Sẽ Tham Dự Nha",
                          }),
                          (0, t.jsx)("option", {
                            value: "false",
                            children:
                              "Tiếc Quá! Mình Không Thể Tham Dự Được Mất Rồi",
                          }),
                        ],
                      }),
                      n.is_tham_du &&
                        (0, t.jsx)("input", {
                          required: !0,
                          className: D,
                          type: "number",
                          name: "so_nguoi_tham_du",
                          min: 1,
                          placeholder: "Số lượng người đến tham dự",
                          value: n.so_nguoi_tham_du,
                          onChange: (e) => {
                            let { name: t, value: a, type: i } = e.target;
                            l((e) => ({
                              ...e,
                              [t]:
                                "number" === i
                                  ? "" === a
                                    ? ""
                                    : Number(a)
                                  : a,
                            }));
                          },
                        }),
                      (0, t.jsx)(o.motion.button, {
                        type: "submit",
                        className: `${C.default.className} !leading-snug w-full cursor-pointer focus:outline-none text-black bg-white shadow-md shadow-black/25 focus:ring-4 font-semibold text-sm py-2 md:text-2xl md:py-4`,
                        whileHover: { scale: 1.05, y: -3 },
                        whileTap: { scale: 0.95 },
                        animate: {
                          scale: [1, 1.02, 1],
                          boxShadow: [
                            "0 4px 6px rgba(0,0,0,0.25)",
                            "0 8px 12px rgba(0,0,0,0.3)",
                            "0 4px 6px rgba(0,0,0,0.25)",
                          ],
                        },
                        transition: { duration: 2, repeat: 1 / 0 },
                        children: "GỬI NGAY",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          (0, t.jsxs)(y.Dialog, {
            open: a,
            onClose: d,
            className: "relative z-10",
            children: [
              (0, t.jsx)(y.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-screen items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(y.DialogPanel, {
                    transition: !0,
                    className:
                      "relative transform overflow-hidden rounded-2xl bg-[rgba(255,255,255,1)] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, t.jsxs)("button", {
                        type: "button",
                        className:
                          "absolute right-2 top-2 z-20 rounded-full p-1 text-gray-400 hover:text-gray-600 focus:outline-none",
                        onClick: d,
                        children: [
                          (0, t.jsx)("span", {
                            className: "sr-only",
                            children: "Close",
                          }),
                          (0, t.jsx)("svg", {
                            className: "h-6 w-6 md:h-16 md:w-16",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "1.5",
                            stroke: "currentColor",
                            children: (0, t.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M6 18L18 6M6 6l12 12",
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)(o.motion.div, {
                        className: "bg-[rgb(125,31,42)]",
                        initial: { scale: 0.8, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        transition: { duration: 0.3 },
                        children: (0, t.jsxs)("div", {
                          className: "flex relative",
                          children: [
                            (0, t.jsx)("img", {
                              className: "w-full aspect-[736/980] object-cover",
                              src: "./assets/ecards/wedding-20/groom-bride.webp",
                              alt: "Thank you background",
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "bg-black/50 w-full absolute -translate-0.5 top-1/2 flex flex-wrap items-center justify-center",
                              children: [
                                (0, t.jsx)("img", {
                                  className: "w-full md:w-80%",
                                  src: "./assets/ecards/wedding-10/thank-you.webp",
                                  alt: "Thank you",
                                }),
                                (0, t.jsx)("p", {
                                  className: `text-[38px] md:text-8xl text-white absolute bottom-1/5 ${i.UTMAzkia.className}`,
                                  children: "Rất hân hạnh được đón tiếp!",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
    }
    var I = e.i(788164),
      S = e.i(56506);
    e.s(
      [
        "default",
        0,
        ({ refData: e, guestName: a, inviteeid: s }) => {
          let n = a && !Array.isArray(a) ? decodeURIComponent(a) : void 0;
          s && s > 0 && (0, r.setCookies)("ecard_my_user_invitee_id", s, 1825);
          let l = e?.formData || {},
            o = l.chure || " ",
            c = l.hoten_chure || " ",
            m = l.codau || " ",
            x = l.hoten_codau || " ",
            p = l.nha_trai_ong ? "Ông " + l.nha_trai_ong : "",
            g = l.nha_trai_ba ? "Bà " + l.nha_trai_ba : "",
            f = l.nha_trai_dia_chi,
            b = l.nha_gai_ong ? "Ông " + l.nha_gai_ong : "",
            j = l.nha_gai_ba ? "Bà " + l.nha_gai_ba : "",
            y = l.nha_gai_dia_chi,
            w = e.formData.ten_le,
            _ = e.formData.tiec_ngay,
            k = e.formData.tiec_ngay_am,
            C = e.formData.tiec_gio,
            D = e.formData.tiec_ten,
            M = e.formData.tiec_dia_chi,
            V = e.formData.google_map;
          return (0, t.jsxs)("div", {
            className:
              "begindowload max-w-4xl px-4 md:px-10 py-3 md:py-5 mx-auto text-center bg-[rgba(125,31,42,1.000)] overflow-hidden",
            children: [
              (0, t.jsx)(d, {
                banner: {
                  weddingDate: _,
                  brideName: m,
                  groomName: o,
                  guestName: n,
                },
              }),
              (0, t.jsxs)("div", {
                className:
                  "bg-[rgba(255,249,236,1)] my-10 rounded-[30px] md:rounded-[50px] overflow-hidden",
                children: [
                  (0, t.jsx)("h1", {
                    className: `${I.VNFSheliaRegular.className} text-[39px] md:text-7xl pb-4 md:pb-7 !leading-normal !font-bold border-b-4 md:border-b-6 borde-solid border-[rgba(125,31,42,1.000)]`,
                    children: "Wedding Invitation",
                  }),
                  (0, t.jsx)(u, {
                    invitation: {
                      groomFather: p,
                      groomMother: g,
                      groomAddress: f,
                      brideFather: b,
                      brideMother: j,
                      brideAddress: y,
                      weddingName: w,
                      groomFullName: c,
                      brideFullName: x,
                    },
                  }),
                  (0, t.jsx)(h, {}),
                  (0, t.jsx)(v, {
                    calendar: {
                      weddingName: w,
                      weddingTime: C,
                      weddingDate: _,
                      weddingDateLunar: k,
                    },
                  }),
                  (0, t.jsx)(h, {}),
                  (0, t.jsx)(N, {
                    location: {
                      weddingVenueName: D,
                      weddingVenueAddress: M,
                      googleMap: V,
                    },
                  }),
                  (0, t.jsx)(h, {}),
                  (0, t.jsx)(T, {
                    confirmData: { id: e.id ?? 0, guestName: n ?? "" },
                  }),
                  (0, t.jsx)("h1", {
                    className: `${i.UTMAzkia.className} text-[33px] md:text-7xl pt-4 md:pt-8 pb-3 md:pb-4 !leading-snug border-t-4 md:border-t-6 borde-solid border-[rgba(125,31,42,1.000)]`,
                    children: "Rất Hân Hạnh Được Đón Tiếp!",
                  }),
                ],
              }),
              (0, t.jsx)(S.default, {
                urlMp3: e.formData.audio,
                ecardMyUserId: e.id,
              }),
            ],
          });
        },
      ],
      994624,
    );
  },
  560539,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let a = t.forwardRef(function ({ title: e, titleId: a, ...i }, s) {
      return t.createElement(
        "svg",
        Object.assign(
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: s,
            "aria-labelledby": a,
          },
          i,
        ),
        e ? t.createElement("title", { id: a }, e) : null,
        t.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
        }),
        t.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
        }),
      );
    });
    e.s(["MapPinIcon", 0, a], 560539);
  },
  673253,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let a = t.forwardRef(function ({ title: e, titleId: a, ...i }, s) {
      return t.createElement(
        "svg",
        Object.assign(
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: s,
            "aria-labelledby": a,
          },
          i,
        ),
        e ? t.createElement("title", { id: a }, e) : null,
        t.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z",
        }),
      );
    });
    e.s(["GiftIcon", 0, a], 673253);
  },
  883290,
  (e) => {
    e.v({
      className: "great_vibes_471470fb-module__2mLDXG__className",
      variable: "great_vibes_471470fb-module__2mLDXG__variable",
    });
  },
  893904,
  (e) => {
    e.v({
      className: "playfair_display_a7a1214f-module__b0ZHJa__className",
      variable: "playfair_display_a7a1214f-module__b0ZHJa__variable",
    });
  },
  73269,
  (e) => {
    e.v({
      className: "montserrat_a3b0bd3b-module__tDEqfa__className",
      variable: "montserrat_a3b0bd3b-module__tDEqfa__variable",
    });
  },
  772516,
  (e) => {
    e.v({
      className: "pinyon_script_803d9626-module__YJTU0G__className",
      variable: "pinyon_script_803d9626-module__YJTU0G__variable",
    });
  },
  401815,
  560286,
  255264,
  507088,
  (e) => {
    "use strict";
    var t = e.i(883290);
    let a = {
      className: t.default.className,
      style: {
        fontFamily: "'Great Vibes', 'Great Vibes Fallback'",
        fontWeight: 400,
        fontStyle: "normal",
      },
    };
    (null != t.default.variable && (a.variable = t.default.variable),
      e.s(["default", 0, a], 401815));
    var i = e.i(893904);
    let s = {
      className: i.default.className,
      style: {
        fontFamily: "'Playfair Display', 'Playfair Display Fallback'",
        fontStyle: "normal",
      },
    };
    (null != i.default.variable && (s.variable = i.default.variable),
      e.s(["default", 0, s], 560286));
    var n = e.i(73269);
    let l = {
      className: n.default.className,
      style: {
        fontFamily: "'Montserrat', 'Montserrat Fallback'",
        fontStyle: "normal",
      },
    };
    (null != n.default.variable && (l.variable = n.default.variable),
      e.s(["default", 0, l], 255264));
    var r = e.i(772516);
    let d = {
      className: r.default.className,
      style: {
        fontFamily: "'Pinyon Script', 'Pinyon Script Fallback'",
        fontWeight: 400,
        fontStyle: "normal",
      },
    };
    (null != r.default.variable && (d.variable = r.default.variable),
      e.s(["default", 0, d], 507088));
  },
  401202,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(271645),
      i = e.i(401815),
      s = e.i(560286),
      n = e.i(255264),
      l = e.i(507088),
      r = e.i(657688),
      d = e.i(560539),
      o = e.i(673253),
      c = e.i(427217),
      m = e.i(846932);
    function x({ images: e }) {
      let a = e && e.length > 0 ? e : [],
        i = {
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
          },
        };
      return (0, t.jsxs)("div", {
        className: "pb-10 bg-[#F8F9F7]",
        children: [
          (0, t.jsx)(m.motion.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0 },
            className: "text-center mb-12",
            children: (0, t.jsxs)(m.motion.div, {
              variants: {
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              },
              className:
                "flex flex-col items-center justify-center leading-none",
              children: [
                (0, t.jsx)(m.motion.span, {
                  initial: { opacity: 0, scale: 0.8 },
                  whileInView: { opacity: 1, scale: 1 },
                  transition: { duration: 0.8, ease: "easeOut" },
                  className:
                    "font-serif text-[#3A5A40] text-6xl md:text-8xl tracking-widest",
                  children: "ALBUM",
                }),
                (0, t.jsxs)(m.motion.div, {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className: "flex items-center gap-4 -mt-4 md:-mt-8",
                  children: [
                    (0, t.jsx)(m.motion.span, {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 0.6, delay: 0.3 },
                      className:
                        "font-[family-name:var(--font-great-vibes)] text-[#3A5A40] text-5xl md:text-7xl",
                      children: "of",
                    }),
                    (0, t.jsx)(m.motion.span, {
                      initial: { opacity: 0, x: 20 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 0.6, delay: 0.4 },
                      className:
                        "font-serif text-[#3A5A40] text-6xl md:text-8xl tracking-widest",
                      children: "LOVE",
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, t.jsx)("div", {
            className: "max-w-5xl mx-auto px-4",
            children: (0, t.jsx)(m.motion.div, {
              className: "grid grid-cols-2 gap-4",
              variants: {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              },
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-100px" },
              children: a.map((e, a) =>
                (0, t.jsx)(
                  m.motion.div,
                  {
                    variants: i,
                    whileHover: {
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(58, 90, 64, 0.3)",
                    },
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                    className:
                      "relative w-full aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group",
                    children: (0, t.jsx)(r.default, {
                      src: e || "/placeholder.svg",
                      alt: `Wedding Album ${a + 1}`,
                      fill: !0,
                      className: "object-cover",
                    }),
                  },
                  a,
                ),
              ),
            }),
          }),
        ],
      });
    }
    function u({ backgroundImage: e }) {
      let a = {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        },
        i = {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        };
      return (0, t.jsxs)("div", {
        className:
          "relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden",
        children: [
          (0, t.jsxs)("div", {
            className: "absolute inset-0",
            children: [
              (0, t.jsx)(r.default, {
                src: e || "/placeholder.svg",
                alt: "Thank You Background",
                fill: !0,
                className: "object-cover",
              }),
              (0, t.jsx)(m.motion.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { duration: 0.6 },
                className: "absolute inset-0 bg-black/60",
              }),
            ],
          }),
          (0, t.jsxs)(m.motion.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0 },
            variants: i,
            className:
              "relative z-10 max-w-2xl mx-auto px-6 text-center text-white space-y-8",
            children: [
              (0, t.jsxs)(m.motion.div, {
                variants: {
                  hidden: { opacity: 0, y: -30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                },
                className: "flex flex-col items-center",
                children: [
                  (0, t.jsx)("h2", {
                    className:
                      "font-[family-name:var(--font-great-vibes)] text-6xl md:text-7xl mb-4",
                    children: "Lời ngỏ",
                  }),
                  (0, t.jsx)(m.motion.div, {
                    initial: { width: 0 },
                    whileInView: { width: 96 },
                    transition: { duration: 0.8, delay: 0.2 },
                    className: "h-[2px] bg-white/80",
                  }),
                ],
              }),
              (0, t.jsxs)(m.motion.div, {
                variants: i,
                className:
                  "space-y-6 font-sans text-sm md:text-base font-light leading-relaxed opacity-90 text-justify md:text-center",
                children: [
                  (0, t.jsx)(m.motion.p, {
                    variants: a,
                    children:
                      "Cảm ơn Quý Khách đã dành tình cảm cho chúng tôi! Chúng tôi biết Quý Khách đều đang rất bận rộn, bận với công việc, với cuộc sống và với cả gia đình.",
                  }),
                  (0, t.jsx)(m.motion.p, {
                    variants: a,
                    children:
                      "Nhưng thực sự sẽ rất tuyệt vời nếu như ngày hạnh phúc của chúng tôi có thêm sự góp mặt của Quý Khách và người thương. Chúng tôi rất hi vọng sẽ có sự tham gia của Quý Khách trong ngày quan trọng này để chứng kiến và chia sẻ niềm hạnh phúc cùng chúng tôi.",
                  }),
                  (0, t.jsx)(m.motion.p, {
                    variants: a,
                    className: "font-medium",
                    children: "Một lần nữa chân thành cảm ơn Quý Khách!",
                  }),
                ],
              }),
              (0, t.jsx)(m.motion.div, {
                variants: {
                  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 1, ease: "easeOut" },
                  },
                },
                className: "pt-12",
                children: (0, t.jsx)("p", {
                  className:
                    "font-[family-name:var(--font-great-vibes)] text-5xl md:text-7xl -rotate-6",
                  children: "Thank you!",
                }),
              }),
            ],
          }),
        ],
      });
    }
    var h = e.i(589997),
      p = e.i(472317),
      g = e.i(56506);
    let f = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      },
      b = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
      },
      v = {
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      },
      j = {
        hidden: { opacity: 0, x: 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      },
      N = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      },
      y = ({ dateString: e }) => {
        let [a, i, s] = e.split("-").map(Number),
          n = new Date(a, i - 1, s),
          l = n.getMonth(),
          r = n.getFullYear(),
          d = n.getDate(),
          o = new Date(r, l + 1, 0).getDate(),
          c = new Date(r, l, 1).getDay();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(m.motion.p, {
              animate: { scale: [1, 1.05, 1] },
              transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
              className: "font-serif text-4xl italic opacity-90",
              children: [
                "THÁNG 1",
                "THÁNG 2",
                "THÁNG 3",
                "THÁNG 4",
                "THÁNG 5",
                "THÁNG 6",
                "THÁNG 7",
                "THÁNG 8",
                "THÁNG 9",
                "THÁNG 10",
                "THÁNG 11",
                "THÁNG 12",
              ][l],
            }),
            (0, t.jsxs)("div", {
              className:
                "bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "grid grid-cols-7 mb-6 text-sm font-serif border-b border-white/20 pb-4",
                  children: [
                    (0, t.jsx)("span", { children: "T2" }),
                    (0, t.jsx)("span", { children: "T3" }),
                    (0, t.jsx)("span", { children: "T4" }),
                    (0, t.jsx)("span", { children: "T5" }),
                    (0, t.jsx)("span", { children: "T6" }),
                    (0, t.jsx)("span", { children: "T7" }),
                    (0, t.jsx)("span", { children: "CN" }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className:
                    "grid grid-cols-7 gap-y-6 text-sm md:text-base font-sans font-light",
                  children: [
                    Array.from({ length: 0 === c ? 6 : c - 1 }).map((e, a) =>
                      (0, t.jsx)("span", {}, `empty-${a}`),
                    ),
                    Array.from({ length: o }).map((e, a) => {
                      let i = a + 1;
                      return i === d
                        ? (0, t.jsx)(
                            "span",
                            {
                              className:
                                "relative flex items-center justify-center",
                              children: (0, t.jsx)("span", {
                                className:
                                  "w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-lg",
                                children: i,
                              }),
                            },
                            i,
                          )
                        : (0, t.jsx)("span", { children: i }, i);
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      },
      w = ({
        title: e,
        time: a,
        day: i,
        date: s,
        month: n,
        year: l,
        lunarDate: o,
        location: c,
        address: x,
        mapLink: u,
      }) =>
        (0, t.jsxs)("div", {
          className: "flex flex-col items-center space-y-6 text-[rgb(1,1,1)]",
          children: [
            (0, t.jsxs)(m.motion.div, {
              variants: j,
              className: "text-center space-y-2",
              children: [
                (0, t.jsx)("p", {
                  className: "text-lg md:text-xl uppercase tracking-widest",
                  children: e,
                }),
                (0, t.jsxs)("p", {
                  className: "text-lg md:text-xl",
                  children: ["VÀO LÚC ", a],
                }),
              ],
            }),
            (0, t.jsx)(m.motion.p, {
              variants: j,
              className: "text-lg md:text-xl uppercase tracking-widest",
              children: i,
            }),
            (0, t.jsxs)(m.motion.div, {
              variants: v,
              className: "flex items-center justify-center gap-4 md:gap-8",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "flex flex-col border-y border-[rgb(1,1,1)] py-2 px-2 md:px-4",
                  children: (0, t.jsxs)("span", {
                    className: "text-sm md:text-base uppercase",
                    children: ["THÁNG ", n],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "text-6xl md:text-7xl leading-none",
                  children: s,
                }),
                (0, t.jsx)("div", {
                  className:
                    "flex flex-col border-y border-[rgb(1,1,1)] py-2 px-2 md:px-4",
                  children: (0, t.jsxs)("span", {
                    className: "text-sm md:text-base uppercase",
                    children: ["NĂM ", l],
                  }),
                }),
              ],
            }),
            (0, t.jsxs)("p", {
              className: "text-base italic",
              children: ["(", o, ")"],
            }),
            (0, t.jsx)("div", {
              className: "relative w-32 h-32 md:w-40 md:h-40 opacity-80",
              children: (0, t.jsx)(r.default, {
                src: "./assets/ecards/wedding-21/ly-ruou.png",
                alt: "Decorative Wine Glass",
                fill: !0,
                className: "object-contain",
              }),
            }),
            (c || x) &&
              (0, t.jsxs)("div", {
                className: "text-center space-y-2",
                children: [
                  c &&
                    (0, t.jsx)("p", {
                      className: "text-xl uppercase tracking-widest",
                      children: c,
                    }),
                  x &&
                    (0, t.jsx)("p", {
                      className: "text-sm md:text-base",
                      children: x,
                    }),
                ],
              }),
            u &&
              (0, t.jsxs)("a", {
                href: u,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "inline-flex items-center gap-2 border border-[rgb(1,1,1)] px-6 py-2 rounded-full hover:bg-[rgb(1,1,1)] hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs md:text-sm",
                children: [
                  (0, t.jsx)(d.MapPinIcon, { className: "w-4 h-4" }),
                  "CHỈ ĐƯỜNG",
                ],
              }),
          ],
        });
    function _({ refData: e, previewMode: d, guestName: _, inviteeid: k }) {
      let C = _ && !Array.isArray(_) ? decodeURIComponent(_) : void 0;
      k && k > 0 && (0, h.setCookies)("ecard_my_user_invitee_id", k, 1825);
      let [D, T] = (0, a.useState)(""),
        [I, S] = (0, a.useState)(!1),
        M = e?.formData || {},
        V = e?.imagesAlbum || [],
        $ = M.ten_le,
        B = M.codau,
        A = M.chure,
        F = M.ngay_hon_le ? (0, h.formatDateDDMMYYYY2)(M.ngay_hon_le) : "",
        z = M.tiec_gio ? (0, h.formatTimeToHHMM)(M.tiec_gio) : "",
        L = M.tiec_ngay ? (0, h.getDayOfWeek)(M.tiec_ngay) : "",
        P = M.tiec_ngay ? (0, h.getDatePart)(M.tiec_ngay, "d") : "",
        H = M.tiec_ngay ? (0, h.getDatePart)(M.tiec_ngay, "m") : "",
        R = M.tiec_ngay ? (0, h.getDatePart)(M.tiec_ngay, "y") : "",
        E = M.tiec_ngay_am
          ? "Vào ngày " + (0, h.formatLunarDate)(M.tiec_ngay_am)
          : "",
        O = M.tiec_dia_chi ? M.tiec_dia_chi : "",
        U = M.tiec_ten ? "Tại " + M.tiec_ten : "",
        G = M.google_map ? M.google_map : "",
        q = M.nha_gai_ong ? "Ông: " + M.nha_gai_ong : "",
        W = M.nha_gai_ba ? "Bà: " + M.nha_gai_ba : "",
        Y = M.nha_gai_dia_chi ? M.nha_gai_dia_chi : "",
        Q = M.nha_trai_ong ? "Ông: " + M.nha_trai_ong : "",
        K = M.nha_trai_ba ? "Bà: " + M.nha_trai_ba : "",
        X = M.nha_trai_dia_chi ? M.nha_trai_dia_chi : "",
        J = M.ngh ? M.ngh : "",
        Z = M.stk ? M.stk : "",
        ee = M.ttk ? M.ttk : "",
        et = (0, h.getImagesByFieldCode)("banner_image_url", V)[0],
        ea = (0, h.getImagesByFieldCode)("album2", V),
        ei = (0, h.getImagesByFieldCode)("album3", V),
        es = (0, h.getImagesByFieldCode)("album4", V),
        en = (0, h.getImagesByFieldCode)("footer_image_url", V)[0],
        el = (0, h.getImagesByFieldCode)("image_bank_url", V)[0],
        [er, ed] = (0, a.useState)({
          id: 0,
          ecard_my_user_id: Number(e?.id ?? 0),
          ecard_my_user_invitee_id: 0,
          name: Array.isArray(_) ? _[0] : (_ ?? ""),
          content: "",
          is_tham_du: null,
          so_nguoi_tham_du: void 0,
        }),
        [eo, ec] = (0, a.useState)({
          name: "",
          content: "",
          attendance: "",
          so_nguoi_tham_du: "",
        }),
        [em, ex] = (0, a.useState)(""),
        [eu, eh] = (0, a.useState)(!1),
        ep = a.default.useRef(null),
        eg = a.default.useRef(null),
        ef = a.default.useRef(null),
        eb = async () => {
          ex("");
          let e = {
              name: "",
              content: "",
              attendance: "",
              so_nguoi_tham_du: "",
            },
            t = !1;
          if (
            (er.name ||
              ((e.name = "Vui lòng nhập tên của Quý Khách"), (t = !0)),
            er.content || ((e.content = "Vui lòng nhập lời chúc"), (t = !0)),
            null === er.is_tham_du &&
              ((e.attendance = "Vui lòng xác nhận sự tham dự"), (t = !0)),
            !0 != er.is_tham_du ||
              (er.so_nguoi_tham_du && 0 !== er.so_nguoi_tham_du) ||
              ((e.so_nguoi_tham_du =
                "Vui lòng xác nhận số lượng người tham dự"),
              (t = !0)),
            ec(e),
            t)
          )
            return void (e.name
              ? ep.current?.focus()
              : e.content
                ? eg.current?.focus()
                : e.attendance && ef.current?.focus());
          try {
            let e = (0, h.getCookies)("ecard_my_user_invitee_id"),
              t = { ...er };
            ((t.ecard_my_user_invitee_id =
              e && !isNaN(Number(e)) ? Number(e) : 0),
              (void 0 === t.so_nguoi_tham_du || !0 !== t.is_tham_du) &&
                (t.so_nguoi_tham_du = 0));
            let a = await (0, p.AddCongratulations)(t);
            a.success
              ? ((0, h.setCookies)(
                  "ecard_my_user_invitee_id",
                  a.data.data.invitee_id,
                  1825,
                ),
                eh(!0),
                ed((e) => ({
                  ...e,
                  content: "",
                  is_tham_du: null,
                  so_nguoi_tham_du: void 0,
                })),
                T(""),
                ec({
                  name: "",
                  content: "",
                  attendance: "",
                  so_nguoi_tham_du: "",
                }))
              : ex(a.message || "Gửi thất bại");
          } catch (e) {
            (console.error("Error:", e),
              ex("Có lỗi xảy ra, vui lòng thử lại!"));
          }
        };
      return (0, t.jsxs)("div", {
        className: `${i.default.variable} ${s.default.variable} ${n.default.variable} ${l.default.variable} font-sans min-h-screen bg-[#F8F9F7]`,
        children: [
          (0, t.jsxs)("div", {
            className: "max-w-3xl mx-auto bg-[#F8F9F7] min-h-screen shadow-sm",
            children: [
              (0, t.jsxs)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: b,
                className:
                  "relative w-full flex items-center justify-center overflow-hidden",
                children: [
                  (0, t.jsx)("div", {
                    className: "relative w-full",
                    children: (0, t.jsx)(r.default, {
                      src: et,
                      alt: "Couple Hero Background",
                      width: 0,
                      height: 0,
                      sizes: "100vw",
                      className: "w-full h-auto",
                      priority: !0,
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "absolute -bottom-5 left-0 w-full h-24 bg-gradient-to-b from-[rgba(232,249,255,0)] to-[rgba(248,253,255,1)]",
                  }),
                ],
              }),
              (0, t.jsxs)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: v,
                className: "text-center py-12 px-4 space-y-6",
                children: [
                  (0, t.jsxs)("h1", {
                    className:
                      "font-[family-name:var(--font-pinyon)] text-3xl min-[400px]:text-4xl sm:text-5xl md:text-7xl text-gray-900 whitespace-nowrap",
                    children: [A, " & ", B],
                  }),
                  (0, t.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, t.jsx)("p", {
                        className:
                          "text-sm tracking-[0.2em] text-gray-600 uppercase",
                        children: "Save the Date",
                      }),
                      (0, t.jsx)("p", {
                        className: "text-4xl md:text-5xl text-gray-900",
                        children: F,
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: N,
                className: "grid grid-cols-3 gap-2 md:gap-4 px-2 md:px-8",
                children: [
                  (0, t.jsxs)(m.motion.div, {
                    variants: f,
                    className: "relative aspect-[3/4] md:aspect-auto md:h-96",
                    children: [
                      (0, t.jsx)(r.default, {
                        src: ea[0],
                        alt: "Couple 1",
                        fill: !0,
                        className: "object-cover",
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent flex flex-col items-center justify-end text-center text-white p-2 md:p-4 pb-4 md:pb-8",
                        children: [
                          (0, t.jsx)("p", {
                            className: "font-serif text-sm md:text-3xl italic",
                            children: "AND you",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "font-serif text-xs md:text-2xl uppercase tracking-widest",
                            children: "ARE MINE",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "text-[6px] md:text-[10px] text-gray-300 mt-1 px-1 md:px-4 opacity-80 leading-tight",
                            children:
                              "I'd give up my life if I could command one smile of your eyes, one touch of your hand.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(m.motion.div, {
                    variants: f,
                    className: "relative aspect-[3/4] md:aspect-auto md:h-96",
                    children: (0, t.jsx)(r.default, {
                      src: ea[1],
                      alt: "Couple 2",
                      fill: !0,
                      className: "object-cover",
                    }),
                  }),
                  (0, t.jsx)(m.motion.div, {
                    variants: f,
                    className: "relative aspect-[3/4] md:aspect-auto md:h-96",
                    children: (0, t.jsx)(r.default, {
                      src: ea[2],
                      alt: "Couple 3",
                      fill: !0,
                      className: "object-cover",
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: N,
                className: "bg-white py-12 px-4",
                children: (0, t.jsxs)("div", {
                  className: "max-w-4xl mx-auto",
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "flex justify-center items-start gap-4 md:gap-12 text-[rgb(1,1,1)]",
                      children: [
                        (0, t.jsxs)(m.motion.div, {
                          variants: v,
                          className: "flex-1 text-center space-y-2",
                          children: [
                            (0, t.jsx)("h3", {
                              className:
                                "text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider",
                              children: "NHÀ TRAI",
                            }),
                            (0, t.jsx)("p", {
                              className: "text-base md:text-lg",
                              children: Q,
                            }),
                            (0, t.jsx)("p", {
                              className: "text-base md:text-lg",
                              children: K,
                            }),
                            (0, t.jsx)("p", {
                              className: "text-base md:text-lg pt-2",
                              children: X,
                            }),
                          ],
                        }),
                        (0, t.jsx)(m.motion.div, {
                          variants: f,
                          className:
                            "w-[1px] bg-[rgb(1,1,1)] self-stretch min-h-[120px] opacity-50",
                        }),
                        (0, t.jsxs)(m.motion.div, {
                          variants: j,
                          className: "flex-1 text-center space-y-2",
                          children: [
                            (0, t.jsx)("h3", {
                              className:
                                "text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider",
                              children: "NHÀ GÁI",
                            }),
                            (0, t.jsx)("p", {
                              className: "text-base md:text-lg",
                              children: q,
                            }),
                            (0, t.jsx)("p", {
                              className: "text-base md:text-lg",
                              children: W,
                            }),
                            (0, t.jsx)("p", {
                              className: "text-base md:text-lg pt-2",
                              children: Y,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "flex justify-center mt-12",
                      children: (0, t.jsx)(m.motion.div, {
                        animate: { rotate: [-5, 5, -5] },
                        transition: {
                          duration: 2,
                          repeat: 1 / 0,
                          ease: "easeInOut",
                        },
                        className:
                          "relative w-20 h-20 md:w-24 md:h-24 opacity-80",
                        children: (0, t.jsx)(r.default, {
                          src: "./assets/ecards/wedding-21/cd-cr-chibi-2.png",
                          alt: "Decorative Wedding Rings",
                          fill: !0,
                          className: "object-contain",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: f,
                className:
                  "relative py-10 px-4 text-center text-white overflow-hidden",
                children: [
                  (0, t.jsxs)("div", {
                    className: "absolute inset-0",
                    children: [
                      (0, t.jsx)(r.default, {
                        src: "./assets/ecards/wedding-21/invite-bg.png",
                        alt: "Invitation Background",
                        fill: !0,
                        className: "object-cover blur-[2px]",
                      }),
                      (0, t.jsx)("div", {
                        className: "absolute inset-0 bg-black/30",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative z-10 max-w-lg mx-auto space-y-8",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex flex-col items-center gap-6",
                        children: [
                          (0, t.jsx)(m.motion.p, {
                            variants: j,
                            className:
                              "font-[family-name:var(--font-pinyon)] text-5xl md:text-6xl",
                            children: "Thân mời !",
                          }),
                          C &&
                            "" !== C.trim() &&
                            (0, t.jsx)("div", {
                              className:
                                "border-b-2 border-dotted border-white/50 pb-2 px-12 min-w-[200px]",
                              children: (0, t.jsx)("p", {
                                className: "font-serif text-2xl md:text-3xl",
                                children: C,
                              }),
                            }),
                          (0, t.jsxs)("p", {
                            className:
                              "text-sm md:text-base uppercase tracking-widest opacity-90",
                            children: ["Đến dự buổi ", $, " của ", A, " & ", B],
                          }),
                        ],
                      }),
                      (0, t.jsx)(y, {
                        dateString: M.tiec_ngay || "2025-11-28",
                      }),
                      (0, t.jsx)(m.motion.div, {
                        variants: v,
                        className:
                          "space-y-4 text-sm md:text-base font-light opacity-90 leading-relaxed px-4",
                        children: (0, t.jsx)("p", {
                          children:
                            "Ngày vui sẽ rất tuyệt vời nếu như có thêm sự góp mặt của Quý Khách và người thương. Chúng tôi rất hi vọng sẽ có sự tham gia của Quý Khách trong ngày quan trọng này để chứng kiến và chia sẻ niềm hạnh phúc cùng chúng tôi!",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: N,
                className: "bg-white py-10 px-4 text-center text-gray-900",
                children: (0, t.jsx)("div", {
                  className: "max-w-2xl mx-auto space-y-20",
                  children: (0, t.jsx)(m.motion.div, {
                    variants: f,
                    children: (0, t.jsx)(w, {
                      title: $ + " ĐƯỢC TỔ CHỨC",
                      time: z,
                      day: L,
                      date: P,
                      month: H,
                      year: R,
                      lunarDate: E,
                      address: O,
                      location: U,
                      mapLink: G,
                    }),
                  }),
                }),
              }),
              (0, t.jsxs)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: b,
                className: "bg-[#F8F9F7]",
                children: [
                  (0, t.jsxs)("div", {
                    className: "relative h-[400px] md:h-[600px]",
                    children: [
                      (0, t.jsx)("div", {
                        className: "grid grid-cols-2 h-full",
                        children:
                          ei &&
                          ei.length > 0 &&
                          ei.map((e, a) =>
                            (0, t.jsxs)(
                              "div",
                              {
                                className: "relative h-full",
                                children: [
                                  (0, t.jsx)(r.default, {
                                    src: e,
                                    alt: "Tạo thiệp cưới online - Thiep360.com",
                                    fill: !0,
                                    className: "object-cover",
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "absolute inset-0 bg-black/20",
                                  }),
                                ],
                              },
                              a,
                            ),
                          ),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "absolute inset-0 flex flex-col items-center justify-end pb-10 text-white z-10 p-4 text-center space-y-2",
                        children: [
                          (0, t.jsx)("p", {
                            className:
                              "font-serif text-6xl md:text-8xl opacity-90",
                            children: "RSVP",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "font-sans text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto",
                            children:
                              "Hãy xác nhận sự có mặt của Quý Khách để chúng tôi chuẩn bị đón tiếp một cách chu đáo nhất. Trân trọng!",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "pt-10 px-4 max-w-xl mx-auto space-y-6",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("input", {
                            ref: ep,
                            required: !0,
                            maxLength: 200,
                            type: "text",
                            placeholder: "Tên của Quý Khách",
                            value: er.name,
                            onChange: (e) =>
                              ed({ ...er, name: e.target.value }),
                            className: `w-full bg-transparent border ${eo.name ? "border-red-500" : "border-gray-400"} rounded-full px-6 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors`,
                          }),
                          eo.name &&
                            (0, t.jsx)("p", {
                              className:
                                "text-red-500 text-sm px-4 mt-2 text-left",
                              children: eo.name,
                            }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("textarea", {
                            ref: eg,
                            placeholder: "Gửi lời nhắn đến cô dâu chú rể",
                            rows: 4,
                            value: er.content,
                            onChange: (e) =>
                              ed({ ...er, content: e.target.value }),
                            className: `w-full bg-transparent border ${eo.content ? "border-red-500" : "border-gray-400"} rounded-3xl px-6 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors resize-none`,
                          }),
                          eo.content &&
                            (0, t.jsx)("p", {
                              className:
                                "text-red-500 text-sm px-4 mt-2 text-left",
                              children: eo.content,
                            }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, t.jsxs)("select", {
                                ref: ef,
                                value: D,
                                onChange: (e) => {
                                  (T(e.target.value),
                                    ed({
                                      ...er,
                                      is_tham_du:
                                        "yes" === e.target.value ||
                                        ("no" !== e.target.value && null),
                                    }));
                                },
                                className: `w-full bg-transparent border ${eo.attendance ? "border-red-500" : "border-gray-400"} rounded-full px-6 py-3 text-gray-900 appearance-none focus:outline-none focus:border-gray-900 cursor-pointer`,
                                children: [
                                  (0, t.jsx)("option", {
                                    value: "",
                                    disabled: !0,
                                    children: "Quý Khách sẽ đến chứ?",
                                  }),
                                  (0, t.jsx)("option", {
                                    value: "yes",
                                    children: "Tôi sẽ đến",
                                  }),
                                  (0, t.jsx)("option", {
                                    value: "no",
                                    children: "Tôi bận mất rồi",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none",
                                children: (0, t.jsx)("svg", {
                                  className: "w-4 h-4 text-gray-500",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M19 9l-7 7-7-7",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          eo.attendance &&
                            (0, t.jsx)("p", {
                              className:
                                "text-red-500 text-sm px-4 mt-2 text-left",
                              children: eo.attendance,
                            }),
                        ],
                      }),
                      "yes" === D &&
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("input", {
                              type: "number",
                              placeholder: "Số lượng người tham dự",
                              min: "1",
                              value: er.so_nguoi_tham_du || "",
                              onChange: (e) =>
                                ed({
                                  ...er,
                                  so_nguoi_tham_du: Number(e.target.value),
                                }),
                              className: `w-full bg-transparent border ${eo.so_nguoi_tham_du ? "border-red-500" : "border-gray-400"} rounded-full px-6 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors`,
                            }),
                            eo.so_nguoi_tham_du &&
                              (0, t.jsx)("p", {
                                className:
                                  "text-red-500 text-sm px-4 mt-2 text-left",
                                children: eo.so_nguoi_tham_du,
                              }),
                          ],
                        }),
                      (0, t.jsxs)("div", {
                        className: "space-y-4 pt-4",
                        children: [
                          em &&
                            (0, t.jsx)("p", {
                              className: "text-red-500 text-sm text-center",
                              children: em,
                            }),
                          (0, t.jsx)("button", {
                            onClick: eb,
                            className:
                              "w-full border border-gray-900 text-gray-900 rounded-full py-3 uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300",
                            children: "GỬI LỜI CHÚC",
                          }),
                          J &&
                            (0, t.jsxs)("button", {
                              onClick: () => S(!0),
                              className:
                                "w-full border border-gray-900 text-gray-900 rounded-full py-3 uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2",
                              children: [
                                (0, t.jsx)(m.motion.div, {
                                  animate: { rotate: [-10, 10, -10, 10, 0] },
                                  transition: {
                                    duration: 0.5,
                                    repeat: 1 / 0,
                                    repeatDelay: 0,
                                    ease: "easeInOut",
                                  },
                                  children: (0, t.jsx)(o.GiftIcon, {
                                    className: "w-5 h-5 text-red-600",
                                  }),
                                }),
                                "MỪNG CƯỚI",
                              ],
                            }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "text-center pt-2 space-y-2",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: f,
                children: (0, t.jsx)(x, { images: es }),
              }),
              (0, t.jsx)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: f,
                children: (0, t.jsx)(u, { backgroundImage: en }),
              }),
            ],
          }),
          I &&
            (0, t.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
              onClick: () => S(!1),
              children: (0, t.jsxs)("div", {
                className:
                  "relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl",
                onClick: (e) => e.stopPropagation(),
                children: [
                  (0, t.jsx)("button", {
                    onClick: () => S(!1),
                    className:
                      "absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors",
                    children: (0, t.jsx)("svg", {
                      className: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, t.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M6 18L18 6M6 6l12 12",
                      }),
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "text-center space-y-6",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                          (0, t.jsx)("p", {
                            className: "font-serif text-2xl text-[#3A5A40]",
                            children: "Mừng Cưới",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-sm text-gray-500",
                            children: "Quét mã QR để gửi quà",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200",
                        children: (0, t.jsx)(r.default, {
                          src: el,
                          alt: "QR Code",
                          fill: !0,
                          className: "object-contain p-4",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "space-y-3 text-sm",
                        children: (0, t.jsxs)("div", {
                          className: "p-4 bg-gray-50 rounded-xl space-y-2",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex justify-between items-center",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "text-gray-500",
                                  children: "Ngân hàng",
                                }),
                                (0, t.jsx)("span", {
                                  className: "font-semibold text-gray-900",
                                  children: J,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex justify-between items-center",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "text-gray-500",
                                  children: "Số tài khoản",
                                }),
                                (0, t.jsx)("span", {
                                  className: "font-semibold text-gray-900",
                                  children: Z,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex justify-between items-center",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "text-gray-500",
                                  children: "Chủ tài khoản",
                                }),
                                (0, t.jsx)("span", {
                                  className: "font-semibold text-gray-900",
                                  children: ee,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          eu &&
            (0, t.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
              children: (0, t.jsxs)("div", {
                className:
                  "relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl",
                children: [
                  (0, t.jsx)("button", {
                    onClick: () => eh(!1),
                    className:
                      "absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors",
                    children: (0, t.jsx)(c.XMarkIcon, { className: "w-8 h-8" }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative aspect-[3/4] w-full",
                    children: [
                      (0, t.jsx)(r.default, {
                        src: en,
                        alt: "Thank You",
                        fill: !0,
                        className: "object-cover",
                      }),
                      (0, t.jsx)("div", {
                        className: "absolute inset-0 bg-black/20",
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "absolute inset-0 flex flex-col items-center justify-end pb-12 text-center text-white space-y-4 p-6",
                        children: [
                          (0, t.jsx)("p", {
                            className:
                              "font-serif text-xl md:text-2xl tracking-wider",
                            children: "Rất hân hạnh được đón tiếp!",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "font-[family-name:var(--font-great-vibes)] text-6xl md:text-7xl",
                            children: "Thank You",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          (0, t.jsx)(g.default, {
            urlMp3: e.formData.audio,
            ecardMyUserId: e.id,
          }),
        ],
      });
    }
    e.s(["default", () => _], 401202);
  },
  776797,
  328898,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(846932),
      i = e.i(657688);
    function s({ images: e }) {
      let s = e && e.length > 0 ? e : [],
        n = {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
          },
        };
      return (0, t.jsxs)("div", {
        className: "pb-10 bg-[#F8F9F7]",
        children: [
          (0, t.jsx)(a.motion.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0 },
            className: "text-center mb-12",
            children: (0, t.jsxs)(a.motion.div, {
              variants: {
                hidden: { opacity: 0, y: -30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              },
              className:
                "flex flex-col items-center justify-center leading-none",
              children: [
                (0, t.jsx)(a.motion.span, {
                  initial: { opacity: 0, scale: 0.8 },
                  whileInView: { opacity: 1, scale: 1 },
                  transition: { duration: 0.8, ease: "easeOut" },
                  className:
                    "font-serif text-[#3A5A40] text-6xl md:text-8xl tracking-widest",
                  children: "ALBUM",
                }),
                (0, t.jsxs)(a.motion.div, {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className: "flex items-center gap-4 -mt-4 md:-mt-8",
                  children: [
                    (0, t.jsx)(a.motion.span, {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 0.6, delay: 0.3 },
                      className:
                        "font-[family-name:var(--font-great-vibes)] text-[#3A5A40] text-5xl md:text-7xl",
                      children: "of",
                    }),
                    (0, t.jsx)(a.motion.span, {
                      initial: { opacity: 0, x: 20 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 0.6, delay: 0.4 },
                      className:
                        "font-serif text-[#3A5A40] text-6xl md:text-8xl tracking-widest",
                      children: "LOVE",
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, t.jsx)("div", {
            className: "max-w-5xl mx-auto px-4",
            children: (0, t.jsx)(a.motion.div, {
              className: "grid grid-cols-2 gap-4",
              variants: {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              },
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0, margin: "-100px" },
              children: s.map((e, s) =>
                (0, t.jsx)(
                  a.motion.div,
                  {
                    variants: n,
                    whileHover: {
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(58, 90, 64, 0.3)",
                    },
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                    className:
                      "relative w-full aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group",
                    children: (0, t.jsx)(i.default, {
                      src: e || "/placeholder.svg",
                      alt: `Wedding Album ${s + 1}`,
                      fill: !0,
                      className: "object-cover",
                    }),
                  },
                  s,
                ),
              ),
            }),
          }),
        ],
      });
    }
    function n({ backgroundImage: e }) {
      let s = {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        },
        n = {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        };
      return (0, t.jsxs)("div", {
        className:
          "relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden",
        children: [
          (0, t.jsxs)("div", {
            className: "absolute inset-0",
            children: [
              (0, t.jsx)(i.default, {
                src: e || "/placeholder.svg",
                alt: "Thank You Background",
                fill: !0,
                className: "object-cover",
              }),
              (0, t.jsx)(a.motion.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { duration: 0.6 },
                className: "absolute inset-0 bg-black/60",
              }),
            ],
          }),
          (0, t.jsxs)(a.motion.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0 },
            variants: n,
            className:
              "relative z-10 max-w-2xl mx-auto px-6 text-center text-white space-y-8",
            children: [
              (0, t.jsxs)(a.motion.div, {
                variants: {
                  hidden: { opacity: 0, y: -30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                },
                className: "flex flex-col items-center",
                children: [
                  (0, t.jsx)("h2", {
                    className:
                      "font-[family-name:var(--font-great-vibes)] text-6xl md:text-7xl mb-4",
                    children: "Lời ngỏ",
                  }),
                  (0, t.jsx)(a.motion.div, {
                    initial: { width: 0 },
                    whileInView: { width: 96 },
                    transition: { duration: 0.8, delay: 0.2 },
                    className: "h-[2px] bg-white/80",
                  }),
                ],
              }),
              (0, t.jsxs)(a.motion.div, {
                variants: n,
                className:
                  "space-y-6 font-sans text-sm md:text-base font-light leading-relaxed opacity-90 text-justify md:text-center",
                children: [
                  (0, t.jsx)(a.motion.p, {
                    variants: s,
                    children:
                      "Cảm ơn bạn đã dành tình cảm cho chúng mình! Chúng mình biết các bạn đều đang rất bận rộn, bận với công việc, với cuộc sống và với cả gia đình bạn.",
                  }),
                  (0, t.jsx)(a.motion.p, {
                    variants: s,
                    children:
                      "Nhưng thực sự sẽ rất tuyệt vời nếu như ngày hạnh phúc của chúng mình có thêm sự góp mặt của bạn và người thương. Chúng mình rất hi vọng sẽ có sự tham gia của bạn trong ngày quan trọng này để chứng kiến và chia sẻ niềm hạnh phúc cùng chúng mình.",
                  }),
                  (0, t.jsx)(a.motion.p, {
                    variants: s,
                    className: "font-medium",
                    children: "Một lần nữa chân thành cảm ơn tất cả mọi người!",
                  }),
                ],
              }),
              (0, t.jsx)(a.motion.div, {
                variants: {
                  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 1, ease: "easeOut" },
                  },
                },
                className: "pt-12",
                children: (0, t.jsx)("p", {
                  className:
                    "font-[family-name:var(--font-great-vibes)] text-5xl md:text-7xl -rotate-6",
                  children: "Thank you!",
                }),
              }),
            ],
          }),
        ],
      });
    }
    (e.s(["default", () => s], 776797), e.s(["default", () => n], 328898));
  },
  792368,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(271645),
      i = e.i(401815),
      s = e.i(560286),
      n = e.i(255264),
      l = e.i(507088),
      r = e.i(657688),
      d = e.i(560539),
      o = e.i(673253),
      c = e.i(427217),
      m = e.i(846932),
      x = e.i(776797),
      u = e.i(328898),
      h = e.i(589997),
      p = e.i(472317),
      g = e.i(56506);
    let f = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      },
      b = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
      },
      v = {
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      },
      j = {
        hidden: { opacity: 0, x: 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      },
      N = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      },
      y = ({ dateString: e }) => {
        let [a, i, s] = e.split("-").map(Number),
          n = new Date(a, i - 1, s),
          l = n.getMonth(),
          r = n.getFullYear(),
          d = n.getDate(),
          o = new Date(r, l + 1, 0).getDate(),
          c = new Date(r, l, 1).getDay();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(m.motion.p, {
              animate: { scale: [1, 1.05, 1] },
              transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
              className: "font-serif text-4xl italic opacity-90",
              children: [
                "THÁNG 1",
                "THÁNG 2",
                "THÁNG 3",
                "THÁNG 4",
                "THÁNG 5",
                "THÁNG 6",
                "THÁNG 7",
                "THÁNG 8",
                "THÁNG 9",
                "THÁNG 10",
                "THÁNG 11",
                "THÁNG 12",
              ][l],
            }),
            (0, t.jsxs)("div", {
              className:
                "bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "grid grid-cols-7 mb-6 text-sm font-serif border-b border-white/20 pb-4",
                  children: [
                    (0, t.jsx)("span", { children: "T2" }),
                    (0, t.jsx)("span", { children: "T3" }),
                    (0, t.jsx)("span", { children: "T4" }),
                    (0, t.jsx)("span", { children: "T5" }),
                    (0, t.jsx)("span", { children: "T6" }),
                    (0, t.jsx)("span", { children: "T7" }),
                    (0, t.jsx)("span", { children: "CN" }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className:
                    "grid grid-cols-7 gap-y-6 text-sm md:text-base font-sans font-light",
                  children: [
                    Array.from({ length: 0 === c ? 6 : c - 1 }).map((e, a) =>
                      (0, t.jsx)("span", {}, `empty-${a}`),
                    ),
                    Array.from({ length: o }).map((e, a) => {
                      let i = a + 1;
                      return i === d
                        ? (0, t.jsx)(
                            "span",
                            {
                              className:
                                "relative flex items-center justify-center",
                              children: (0, t.jsx)("span", {
                                className:
                                  "w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-lg",
                                children: i,
                              }),
                            },
                            i,
                          )
                        : (0, t.jsx)("span", { children: i }, i);
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      },
      w = ({
        title: e,
        time: a,
        day: i,
        date: s,
        month: n,
        year: l,
        lunarDate: o,
        location: c,
        address: x,
        mapLink: u,
      }) =>
        (0, t.jsxs)("div", {
          className: "flex flex-col items-center space-y-6 text-[rgb(1,1,1)]",
          children: [
            (0, t.jsxs)(m.motion.div, {
              variants: j,
              className: "text-center space-y-2",
              children: [
                (0, t.jsx)("p", {
                  className: "text-lg md:text-xl uppercase tracking-widest",
                  children: e,
                }),
                (0, t.jsxs)("p", {
                  className: "text-lg md:text-xl",
                  children: ["VÀO LÚC ", a],
                }),
              ],
            }),
            (0, t.jsx)(m.motion.p, {
              variants: j,
              className: "text-lg md:text-xl uppercase tracking-widest",
              children: i,
            }),
            (0, t.jsxs)(m.motion.div, {
              variants: v,
              className: "flex items-center justify-center gap-4 md:gap-8",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "flex flex-col border-y border-[rgb(1,1,1)] py-2 px-2 md:px-4",
                  children: (0, t.jsxs)("span", {
                    className: "text-sm md:text-base uppercase",
                    children: ["THÁNG ", n],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "text-6xl md:text-7xl leading-none",
                  children: s,
                }),
                (0, t.jsx)("div", {
                  className:
                    "flex flex-col border-y border-[rgb(1,1,1)] py-2 px-2 md:px-4",
                  children: (0, t.jsxs)("span", {
                    className: "text-sm md:text-base uppercase",
                    children: ["NĂM ", l],
                  }),
                }),
              ],
            }),
            (0, t.jsxs)("p", {
              className: "text-base italic",
              children: ["(", o, ")"],
            }),
            (0, t.jsx)("div", {
              className: "relative w-32 h-32 md:w-40 md:h-40 opacity-80",
              children: (0, t.jsx)(r.default, {
                src: "./assets/ecards/wedding-21/ly-ruou.png",
                alt: "Decorative Wine Glass",
                fill: !0,
                className: "object-contain",
              }),
            }),
            (c || x) &&
              (0, t.jsxs)("div", {
                className: "text-center space-y-2",
                children: [
                  c &&
                    (0, t.jsx)("p", {
                      className: "text-xl uppercase tracking-widest",
                      children: c,
                    }),
                  x &&
                    (0, t.jsx)("p", {
                      className: "text-sm md:text-base",
                      children: x,
                    }),
                ],
              }),
            u &&
              (0, t.jsxs)("a", {
                href: u,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "inline-flex items-center gap-2 border border-[rgb(1,1,1)] px-6 py-2 rounded-full hover:bg-[rgb(1,1,1)] hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs md:text-sm",
                children: [
                  (0, t.jsx)(d.MapPinIcon, { className: "w-4 h-4" }),
                  "CHỈ ĐƯỜNG",
                ],
              }),
          ],
        });
    function _({ refData: e, previewMode: d, guestName: _, inviteeid: k }) {
      let C = _ && !Array.isArray(_) ? decodeURIComponent(_) : void 0;
      k && k > 0 && (0, h.setCookies)("ecard_my_user_invitee_id", k, 1825);
      let [D, T] = (0, a.useState)(""),
        [I, S] = (0, a.useState)(!1),
        M = e?.formData || {},
        V = e?.imagesAlbum || [],
        $ = M.ten_le,
        B = M.codau,
        A = M.chure,
        F = M.ngay_hon_le ? (0, h.formatDateDDMMYYYY2)(M.ngay_hon_le) : "",
        z = M.tiec_gio ? (0, h.formatTimeToHHMM)(M.tiec_gio) : "",
        L = M.tiec_ngay ? (0, h.getDayOfWeek)(M.tiec_ngay) : "",
        P = M.tiec_ngay ? (0, h.getDatePart)(M.tiec_ngay, "d") : "",
        H = M.tiec_ngay ? (0, h.getDatePart)(M.tiec_ngay, "m") : "",
        R = M.tiec_ngay ? (0, h.getDatePart)(M.tiec_ngay, "y") : "",
        E = M.tiec_ngay_am
          ? "Vào ngày " + (0, h.formatLunarDate)(M.tiec_ngay_am)
          : "",
        O = M.tiec_dia_chi ? M.tiec_dia_chi : "",
        U = M.tiec_ten ? "Tại " + M.tiec_ten : "",
        G = M.google_map ? M.google_map : "",
        q = M.nha_gai_ong ? "Ông: " + M.nha_gai_ong : "",
        W = M.nha_gai_ba ? "Bà: " + M.nha_gai_ba : "",
        Y = M.nha_gai_dia_chi ? M.nha_gai_dia_chi : "",
        Q = M.nha_trai_ong ? "Ông: " + M.nha_trai_ong : "",
        K = M.nha_trai_ba ? "Bà: " + M.nha_trai_ba : "",
        X = M.nha_trai_dia_chi ? M.nha_trai_dia_chi : "",
        J = M.ngh ? M.ngh : "",
        Z = M.stk ? M.stk : "",
        ee = M.ttk ? M.ttk : "",
        et = (0, h.getImagesByFieldCode)("banner_image_url", V)[0],
        ea = (0, h.getImagesByFieldCode)("album2", V),
        ei = (0, h.getImagesByFieldCode)("album3", V),
        es = (0, h.getImagesByFieldCode)("album4", V),
        en = (0, h.getImagesByFieldCode)("footer_image_url", V)[0],
        el = (0, h.getImagesByFieldCode)("image_bank_url", V)[0],
        [er, ed] = (0, a.useState)({
          id: 0,
          ecard_my_user_id: Number(e?.id ?? 0),
          ecard_my_user_invitee_id: 0,
          name: Array.isArray(_) ? _[0] : (_ ?? ""),
          content: "",
          is_tham_du: null,
          so_nguoi_tham_du: void 0,
        }),
        [eo, ec] = (0, a.useState)({
          name: "",
          content: "",
          attendance: "",
          so_nguoi_tham_du: "",
        }),
        [em, ex] = (0, a.useState)(""),
        [eu, eh] = (0, a.useState)(!1),
        ep = a.default.useRef(null),
        eg = a.default.useRef(null),
        ef = a.default.useRef(null),
        eb = async () => {
          ex("");
          let e = {
              name: "",
              content: "",
              attendance: "",
              so_nguoi_tham_du: "",
            },
            t = !1;
          if (
            (er.name || ((e.name = "Vui lòng nhập tên của bạn"), (t = !0)),
            er.content || ((e.content = "Vui lòng nhập lời chúc"), (t = !0)),
            null === er.is_tham_du &&
              ((e.attendance = "Vui lòng xác nhận sự tham dự"), (t = !0)),
            !0 != er.is_tham_du ||
              (er.so_nguoi_tham_du && 0 !== er.so_nguoi_tham_du) ||
              ((e.so_nguoi_tham_du =
                "Vui lòng xác nhận số lượng người tham dự"),
              (t = !0)),
            ec(e),
            t)
          )
            return void (e.name
              ? ep.current?.focus()
              : e.content
                ? eg.current?.focus()
                : e.attendance && ef.current?.focus());
          try {
            let e = (0, h.getCookies)("ecard_my_user_invitee_id"),
              t = { ...er };
            ((t.ecard_my_user_invitee_id =
              e && !isNaN(Number(e)) ? Number(e) : 0),
              (void 0 === t.so_nguoi_tham_du || !0 !== t.is_tham_du) &&
                (t.so_nguoi_tham_du = 0));
            let a = await (0, p.AddCongratulations)(t);
            a.success
              ? ((0, h.setCookies)(
                  "ecard_my_user_invitee_id",
                  a.data.data.invitee_id,
                  1825,
                ),
                eh(!0),
                ed((e) => ({
                  ...e,
                  content: "",
                  is_tham_du: null,
                  so_nguoi_tham_du: void 0,
                })),
                T(""),
                ec({
                  name: "",
                  content: "",
                  attendance: "",
                  so_nguoi_tham_du: "",
                }))
              : ex(a.message || "Gửi thất bại");
          } catch (e) {
            (console.error("Error:", e),
              ex("Có lỗi xảy ra, vui lòng thử lại!"));
          }
        };
      return (0, t.jsxs)("div", {
        className: `${i.default.variable} ${s.default.variable} ${n.default.variable} ${l.default.variable} font-sans min-h-screen bg-[#F8F9F7]`,
        children: [
          (0, t.jsxs)("div", {
            className: "max-w-3xl mx-auto bg-[#F8F9F7] min-h-screen shadow-sm",
            children: [
              (0, t.jsxs)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: b,
                className:
                  "relative w-full flex items-center justify-center overflow-hidden",
                children: [
                  (0, t.jsx)("div", {
                    className: "relative w-full",
                    children: (0, t.jsx)(r.default, {
                      src: et,
                      alt: "Couple Hero Background",
                      width: 0,
                      height: 0,
                      sizes: "100vw",
                      className: "w-full h-auto",
                      priority: !0,
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "absolute -bottom-5 left-0 w-full h-24 bg-gradient-to-b from-[rgba(232,249,255,0)] to-[rgba(248,253,255,1)]",
                  }),
                ],
              }),
              (0, t.jsxs)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: v,
                className: "text-center py-12 px-4 space-y-6",
                children: [
                  (0, t.jsxs)("h1", {
                    className:
                      "font-[family-name:var(--font-pinyon)] text-3xl min-[400px]:text-4xl sm:text-5xl md:text-7xl text-gray-900 whitespace-nowrap",
                    children: [B, " & ", A],
                  }),
                  (0, t.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, t.jsx)("p", {
                        className:
                          "text-sm tracking-[0.2em] text-gray-600 uppercase",
                        children: "Save the Date",
                      }),
                      (0, t.jsx)("p", {
                        className: "text-4xl md:text-5xl text-gray-900",
                        children: F,
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: N,
                className: "grid grid-cols-3 gap-2 md:gap-4 px-2 md:px-8",
                children: [
                  (0, t.jsxs)(m.motion.div, {
                    variants: f,
                    className: "relative aspect-[3/4] md:aspect-auto md:h-96",
                    children: [
                      (0, t.jsx)(r.default, {
                        src: ea[0],
                        alt: "Couple 1",
                        fill: !0,
                        className: "object-cover",
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent flex flex-col items-center justify-end text-center text-white p-2 md:p-4 pb-4 md:pb-8",
                        children: [
                          (0, t.jsx)("p", {
                            className: "font-serif text-sm md:text-3xl italic",
                            children: "AND you",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "font-serif text-xs md:text-2xl uppercase tracking-widest",
                            children: "ARE MINE",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "text-[6px] md:text-[10px] text-gray-300 mt-1 px-1 md:px-4 opacity-80 leading-tight",
                            children:
                              "I'd give up my life if I could command one smile of your eyes, one touch of your hand.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(m.motion.div, {
                    variants: f,
                    className: "relative aspect-[3/4] md:aspect-auto md:h-96",
                    children: (0, t.jsx)(r.default, {
                      src: ea[1],
                      alt: "Couple 2",
                      fill: !0,
                      className: "object-cover",
                    }),
                  }),
                  (0, t.jsx)(m.motion.div, {
                    variants: f,
                    className: "relative aspect-[3/4] md:aspect-auto md:h-96",
                    children: (0, t.jsx)(r.default, {
                      src: ea[2],
                      alt: "Couple 3",
                      fill: !0,
                      className: "object-cover",
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: N,
                className: "bg-white py-12 px-4",
                children: (0, t.jsxs)("div", {
                  className: "max-w-4xl mx-auto",
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "flex justify-center items-start gap-4 md:gap-12 text-[rgb(1,1,1)]",
                      children: [
                        (0, t.jsxs)(m.motion.div, {
                          variants: v,
                          className: "flex-1 text-center space-y-2",
                          children: [
                            (0, t.jsx)("h3", {
                              className:
                                "text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider",
                              children: "NHÀ GÁI",
                            }),
                            (0, t.jsx)("p", {
                              className: "text-base md:text-lg",
                              children: q,
                            }),
                            (0, t.jsx)("p", {
                              className: "text-base md:text-lg",
                              children: W,
                            }),
                            (0, t.jsx)("p", {
                              className: "text-base md:text-lg pt-2",
                              children: Y,
                            }),
                          ],
                        }),
                        (0, t.jsx)(m.motion.div, {
                          variants: f,
                          className:
                            "w-[1px] bg-[rgb(1,1,1)] self-stretch min-h-[120px] opacity-50",
                        }),
                        (0, t.jsxs)(m.motion.div, {
                          variants: j,
                          className: "flex-1 text-center space-y-2",
                          children: [
                            (0, t.jsx)("h3", {
                              className:
                                "text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider",
                              children: "NHÀ TRAI",
                            }),
                            (0, t.jsx)("p", {
                              className: "text-base md:text-lg",
                              children: Q,
                            }),
                            (0, t.jsx)("p", {
                              className: "text-base md:text-lg",
                              children: K,
                            }),
                            (0, t.jsx)("p", {
                              className: "text-base md:text-lg pt-2",
                              children: X,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "flex justify-center mt-12",
                      children: (0, t.jsx)(m.motion.div, {
                        animate: { rotate: [-5, 5, -5] },
                        transition: {
                          duration: 2,
                          repeat: 1 / 0,
                          ease: "easeInOut",
                        },
                        className:
                          "relative w-20 h-20 md:w-24 md:h-24 opacity-80",
                        children: (0, t.jsx)(r.default, {
                          src: "./assets/ecards/wedding-21/cd-cr-chibi-2.png",
                          alt: "Decorative Wedding Rings",
                          fill: !0,
                          className: "object-contain",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: f,
                className:
                  "relative py-10 px-4 text-center text-white overflow-hidden",
                children: [
                  (0, t.jsxs)("div", {
                    className: "absolute inset-0",
                    children: [
                      (0, t.jsx)(r.default, {
                        src: "./assets/ecards/wedding-21/invite-bg.png",
                        alt: "Invitation Background",
                        fill: !0,
                        className: "object-cover blur-[2px]",
                      }),
                      (0, t.jsx)("div", {
                        className: "absolute inset-0 bg-black/30",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative z-10 max-w-lg mx-auto space-y-8",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex flex-col items-center gap-6",
                        children: [
                          (0, t.jsx)(m.motion.p, {
                            variants: j,
                            className:
                              "font-[family-name:var(--font-pinyon)] text-5xl md:text-6xl",
                            children: "Thân mời !",
                          }),
                          C &&
                            "" !== C.trim() &&
                            (0, t.jsx)("div", {
                              className:
                                "border-b-2 border-dotted border-white/50 pb-2 px-12 min-w-[200px]",
                              children: (0, t.jsx)("p", {
                                className: "font-serif text-2xl md:text-3xl",
                                children: C,
                              }),
                            }),
                          (0, t.jsxs)("p", {
                            className:
                              "text-sm md:text-base uppercase tracking-widest opacity-90",
                            children: [
                              "TỚI DỰ BỮA TIỆC THÂN MẬT MỪNG ",
                              $,
                              " CỦA ",
                              B,
                              " & ",
                              A,
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)(y, {
                        dateString: M.tiec_ngay || "2025-11-28",
                      }),
                      (0, t.jsx)(m.motion.div, {
                        variants: v,
                        className:
                          "space-y-4 text-sm md:text-base font-light opacity-90 leading-relaxed px-4",
                        children: (0, t.jsx)("p", {
                          children:
                            "Ngày vui sẽ rất tuyệt vời nếu như có thêm sự góp mặt của bạn và người thương. Chúng mình rất hi vọng sẽ có sự tham gia của bạn trong ngày quan trọng này để chứng kiến và chia sẻ niềm hạnh phúc cùng chúng mình!",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: N,
                className: "bg-white py-10 px-4 text-center text-gray-900",
                children: (0, t.jsx)("div", {
                  className: "max-w-2xl mx-auto space-y-20",
                  children: (0, t.jsx)(m.motion.div, {
                    variants: f,
                    children: (0, t.jsx)(w, {
                      title: "TIỆC THÂN MẬT ĐƯỢC TỔ CHỨC",
                      time: z,
                      day: L,
                      date: P,
                      month: H,
                      year: R,
                      lunarDate: E,
                      address: O,
                      location: U,
                      mapLink: G,
                    }),
                  }),
                }),
              }),
              (0, t.jsxs)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: b,
                className: "bg-[#F8F9F7]",
                children: [
                  (0, t.jsxs)("div", {
                    className: "relative h-[400px] md:h-[600px]",
                    children: [
                      (0, t.jsx)("div", {
                        className: "grid grid-cols-2 h-full",
                        children:
                          ei &&
                          ei.length > 0 &&
                          ei.map((e, a) =>
                            (0, t.jsxs)(
                              "div",
                              {
                                className: "relative h-full",
                                children: [
                                  (0, t.jsx)(r.default, {
                                    src: e,
                                    alt: "Tạo thiệp cưới online - Thiep360.com",
                                    fill: !0,
                                    className: "object-cover",
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "absolute inset-0 bg-black/20",
                                  }),
                                ],
                              },
                              a,
                            ),
                          ),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "absolute inset-0 flex flex-col items-center justify-end pb-10 text-white z-10 p-4 text-center space-y-2",
                        children: [
                          (0, t.jsx)("p", {
                            className:
                              "font-serif text-6xl md:text-8xl opacity-90",
                            children: "RSVP",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "font-sans text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto",
                            children:
                              "Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất. Trân trọng!",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "pt-10 px-4 max-w-xl mx-auto space-y-6",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("input", {
                            ref: ep,
                            required: !0,
                            maxLength: 200,
                            type: "text",
                            placeholder: "Tên của bạn",
                            value: er.name,
                            onChange: (e) =>
                              ed({ ...er, name: e.target.value }),
                            className: `w-full bg-transparent border ${eo.name ? "border-red-500" : "border-gray-400"} rounded-full px-6 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors`,
                          }),
                          eo.name &&
                            (0, t.jsx)("p", {
                              className:
                                "text-red-500 text-sm px-4 mt-2 text-left",
                              children: eo.name,
                            }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("textarea", {
                            ref: eg,
                            placeholder: "Gửi lời nhắn đến cô dâu chú rể",
                            rows: 4,
                            value: er.content,
                            onChange: (e) =>
                              ed({ ...er, content: e.target.value }),
                            className: `w-full bg-transparent border ${eo.content ? "border-red-500" : "border-gray-400"} rounded-3xl px-6 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors resize-none`,
                          }),
                          eo.content &&
                            (0, t.jsx)("p", {
                              className:
                                "text-red-500 text-sm px-4 mt-2 text-left",
                              children: eo.content,
                            }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, t.jsxs)("select", {
                                ref: ef,
                                value: D,
                                onChange: (e) => {
                                  (T(e.target.value),
                                    ed({
                                      ...er,
                                      is_tham_du:
                                        "yes" === e.target.value ||
                                        ("no" !== e.target.value && null),
                                    }));
                                },
                                className: `w-full bg-transparent border ${eo.attendance ? "border-red-500" : "border-gray-400"} rounded-full px-6 py-3 text-gray-900 appearance-none focus:outline-none focus:border-gray-900 cursor-pointer`,
                                children: [
                                  (0, t.jsx)("option", {
                                    value: "",
                                    disabled: !0,
                                    children: "Bạn sẽ đến chứ?",
                                  }),
                                  (0, t.jsx)("option", {
                                    value: "yes",
                                    children: "Mình sẽ đến",
                                  }),
                                  (0, t.jsx)("option", {
                                    value: "no",
                                    children: "Mình bận mất rồi",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none",
                                children: (0, t.jsx)("svg", {
                                  className: "w-4 h-4 text-gray-500",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M19 9l-7 7-7-7",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          eo.attendance &&
                            (0, t.jsx)("p", {
                              className:
                                "text-red-500 text-sm px-4 mt-2 text-left",
                              children: eo.attendance,
                            }),
                        ],
                      }),
                      "yes" === D &&
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("input", {
                              type: "number",
                              placeholder: "Số lượng người tham dự",
                              min: "1",
                              value: er.so_nguoi_tham_du || "",
                              onChange: (e) =>
                                ed({
                                  ...er,
                                  so_nguoi_tham_du: Number(e.target.value),
                                }),
                              className: `w-full bg-transparent border ${eo.so_nguoi_tham_du ? "border-red-500" : "border-gray-400"} rounded-full px-6 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors`,
                            }),
                            eo.so_nguoi_tham_du &&
                              (0, t.jsx)("p", {
                                className:
                                  "text-red-500 text-sm px-4 mt-2 text-left",
                                children: eo.so_nguoi_tham_du,
                              }),
                          ],
                        }),
                      (0, t.jsxs)("div", {
                        className: "space-y-4 pt-4",
                        children: [
                          em &&
                            (0, t.jsx)("p", {
                              className: "text-red-500 text-sm text-center",
                              children: em,
                            }),
                          (0, t.jsx)("button", {
                            onClick: eb,
                            className:
                              "w-full border border-gray-900 text-gray-900 rounded-full py-3 uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300",
                            children: "GỬI LỜI CHÚC",
                          }),
                          J &&
                            (0, t.jsxs)("button", {
                              onClick: () => S(!0),
                              className:
                                "w-full border border-gray-900 text-gray-900 rounded-full py-3 uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2",
                              children: [
                                (0, t.jsx)(m.motion.div, {
                                  animate: { rotate: [-10, 10, -10, 10, 0] },
                                  transition: {
                                    duration: 0.5,
                                    repeat: 1 / 0,
                                    repeatDelay: 0,
                                    ease: "easeInOut",
                                  },
                                  children: (0, t.jsx)(o.GiftIcon, {
                                    className: "w-5 h-5 text-red-600",
                                  }),
                                }),
                                "MỪNG CƯỚI",
                              ],
                            }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "text-center pt-8 pb-12 space-y-2",
                        children: [
                          (0, t.jsx)("p", {
                            className:
                              "font-sans text-sm md:text-base text-gray-600",
                            children:
                              "Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "font-sans text-sm md:text-base text-gray-600",
                            children: "tốt đẹp nhất đến đám cưới của tụi mình.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: f,
                children: (0, t.jsx)(x.default, { images: es }),
              }),
              (0, t.jsx)(m.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                variants: f,
                children: (0, t.jsx)(u.default, { backgroundImage: en }),
              }),
            ],
          }),
          I &&
            (0, t.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
              onClick: () => S(!1),
              children: (0, t.jsxs)("div", {
                className:
                  "relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl",
                onClick: (e) => e.stopPropagation(),
                children: [
                  (0, t.jsx)("button", {
                    onClick: () => S(!1),
                    className:
                      "absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors",
                    children: (0, t.jsx)("svg", {
                      className: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, t.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M6 18L18 6M6 6l12 12",
                      }),
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "text-center space-y-6",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                          (0, t.jsx)("p", {
                            className: "font-serif text-2xl text-[#3A5A40]",
                            children: "Mừng Cưới",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-sm text-gray-500",
                            children: "Quét mã QR để gửi quà",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200",
                        children: (0, t.jsx)(r.default, {
                          src: el,
                          alt: "QR Code",
                          fill: !0,
                          className: "object-contain p-4",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "space-y-3 text-sm",
                        children: (0, t.jsxs)("div", {
                          className: "p-4 bg-gray-50 rounded-xl space-y-2",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex justify-between items-center",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "text-gray-500",
                                  children: "Ngân hàng",
                                }),
                                (0, t.jsx)("span", {
                                  className: "font-semibold text-gray-900",
                                  children: J,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex justify-between items-center",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "text-gray-500",
                                  children: "Số tài khoản",
                                }),
                                (0, t.jsx)("span", {
                                  className: "font-semibold text-gray-900",
                                  children: Z,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex justify-between items-center",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "text-gray-500",
                                  children: "Chủ tài khoản",
                                }),
                                (0, t.jsx)("span", {
                                  className: "font-semibold text-gray-900",
                                  children: ee,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          eu &&
            (0, t.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
              children: (0, t.jsxs)("div", {
                className:
                  "relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl",
                children: [
                  (0, t.jsx)("button", {
                    onClick: () => eh(!1),
                    className:
                      "absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors",
                    children: (0, t.jsx)(c.XMarkIcon, { className: "w-8 h-8" }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative aspect-[3/4] w-full",
                    children: [
                      (0, t.jsx)(r.default, {
                        src: en,
                        alt: "Thank You",
                        fill: !0,
                        className: "object-cover",
                      }),
                      (0, t.jsx)("div", {
                        className: "absolute inset-0 bg-black/20",
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "absolute inset-0 flex flex-col items-center justify-end pb-12 text-center text-white space-y-4 p-6",
                        children: [
                          (0, t.jsx)("p", {
                            className:
                              "font-serif text-xl md:text-2xl tracking-wider",
                            children: "Rất hân hạnh được đón tiếp!",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "font-[family-name:var(--font-great-vibes)] text-6xl md:text-7xl",
                            children: "Thank You",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          (0, t.jsx)(g.default, {
            urlMp3: e.formData.audio,
            ecardMyUserId: e.id,
          }),
        ],
      });
    }
    e.s(["default", () => _]);
  },
  194134,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(846932);
    e.i(283210);
    var i = e.i(889235),
      s = e.i(637443),
      n = e.i(621831),
      l = e.i(589997);
    function r({
      backgroundImage: e,
      groomName: r,
      brideName: d,
      weddingDate: o,
    }) {
      let c = { d: " ", m: " ", y: " " };
      if (o)
        try {
          ((c.d = (0, l.getDatePart)(o, "d") || " "),
            (c.m = (0, l.getDatePart)(o, "m") || " "),
            (c.y = (0, l.getDatePart)(o, "y") || " "));
        } catch {}
      return (0, t.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [
          (0, t.jsx)(a.motion.img, {
            initial: { scale: 1.2, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 1.5, ease: "easeOut" },
            src: e || void 0,
            alt: "Banner",
            className: "object-cover w-full",
          }),
          (0, t.jsx)("div", {
            className:
              "absolute w-full h-[60%] bg-gradient-to-b from-[rgba(253,251,251,0)] to-[rgba(2,2,2,0.7)]",
            style: {
              bottom: "-1px",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              WebkitTransform: "translateZ(0)",
            },
          }),
          (0, t.jsxs)("div", {
            className:
              "absolute bottom-[5%] w-full flex flex-col gap-2 md:gap-5 text-white",
            children: [
              (0, t.jsxs)(a.motion.div, {
                initial: { y: 50, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.5 },
                className: `${s.Summerfun.className} gap-3 md:gap-7 text-2xl md:text-5xl flex items-center justify-center tracking-wide`,
                children: [
                  (0, t.jsx)("h1", { className: "font-medium", children: r }),
                  (0, t.jsx)("span", {
                    className: `${i.BeyondPerfectionRegular.className} text-xl md:text-4xl`,
                    children: "&",
                  }),
                  (0, t.jsx)("h1", { className: "font-medium", children: d }),
                ],
              }),
              (0, t.jsx)(a.motion.p, {
                initial: { y: 30, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.7 },
                className: "text-lg md:text-2xl",
                children: "SAVE THE DATE",
              }),
              (0, t.jsxs)(a.motion.p, {
                initial: { y: 30, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.9 },
                className: `text-3xl md:text-5xl ${n.lora.className} font-semibold tracking-widest`,
                children: [c.d, ".", c.m, ".", c.y],
              }),
            ],
          }),
        ],
      });
    }
    var d = e.i(271645),
      o = e.i(752392),
      c = e.i(902802),
      m = e.i(298826),
      x = e.i(677169);
    function u({ invitation: e }) {
      var a;
      let [i, s] = (0, d.useState)({ days: 0, hours: 0, min: 0, sec: 0 }),
        n = (0, d.useMemo)(
          () =>
            e.weddingDate && e.weddingTime
              ? new Date(`${e.weddingDate}T${e.weddingTime}`)
              : null,
          [e.weddingDate, e.weddingTime],
        );
      return (
        (0, d.useEffect)(() => {
          if (!n) return;
          let e = () => {
            let e = n.getTime() - Date.now();
            if (e <= 0) return void s({ days: 0, hours: 0, min: 0, sec: 0 });
            let t = Math.floor(e / 864e5),
              a = Math.floor((e / 36e5) % 24);
            s({
              days: t,
              hours: a,
              min: Math.floor((e / 6e4) % 60),
              sec: Math.floor((e / 1e3) % 60),
            });
          };
          e();
          let t = setInterval(e, 1e3);
          return () => clearInterval(t);
        }, [n]),
        (0, t.jsxs)("div", {
          className: `gap-6 md:gap-12 pt-16 md:pb-20 md:pt-44 flex flex-col bg-center bg-cover bg-no-repeat relative ${o.default.className} text-[rgb(146,131,98)]`,
          children: [
            (0, t.jsx)("img", {
              src: "./assets/ecards/wedding-18/background-1.png",
              alt: "Background",
              className:
                "object-cover absolute top-0 left-0 w-full h-full z-[1] pointer-events-none overflow-hidden",
            }),
            (0, t.jsx)("img", {
              src: "./assets/ecards/wedding-18/background-thiep.png",
              alt: "Background thiệp",
              className: "w-full object-cover z-[1]",
            }),
            (0, t.jsxs)("div", {
              className:
                "absolute z-[1] top-[37%] left-1/2 + -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-3",
              children: [
                (0, t.jsxs)("p", {
                  className: "text-xs md:text-[26px] !leading-snug text-nowrap",
                  children: [
                    "TRÂN TRỌNG KÍNH MỜI THAM DỰ ",
                    ((a = e.weddingName),
                    a?.toString().trim()
                      ? a.toString().toUpperCase()
                      : "LỄ THÀNH HÔN"),
                  ],
                }),
                e.guestName &&
                  "" !== e.guestName.trim() &&
                  (0, t.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, t.jsx)("h1", {
                      className: `px-6 text-red-700 text-2xl md:text-5xl ${x.ViceroyJF.className} border-b-2 border-dotted border-gray-400`,
                      children: e.guestName,
                    }),
                  }),
                (0, t.jsxs)("div", {
                  className: `flex z-[1] relative flex-col justify-center items-center text-[40px] md:text-8xl ${c.UVNHoaTay1.className} gap-4 md:gap-8`,
                  children: [
                    (0, t.jsx)("h1", {
                      className: "leading-snug",
                      children: e.groomName,
                    }),
                    (0, t.jsx)("h2", {
                      className: `text-[38px] md:text-8xl ${m.FTVVIPArcittyaBegatri.className} !leading-5 md:!leading-[80px]
                                                absolute top-1/2
                                                left-1/2
                                                -translate-x-1/2
                                                -translate-y-[30%]`,
                      children: "&",
                    }),
                    (0, t.jsx)("h1", {
                      className: "leading-snug",
                      children: e.brideName,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "flex flex-col md:gap-3",
                  children: [
                    (0, t.jsx)("p", {
                      className: "text-xs md:text-[26px] !leading-snug",
                      children: "SẼ DIỄN RA VÀO",
                    }),
                    (0, t.jsx)("div", {
                      className: "flex gap-3 md:gap-6 justify-start",
                      children: [
                        { value: i.days, label: "Ngày" },
                        { value: i.hours, label: "Giờ" },
                        { value: i.min, label: "Phút" },
                        { value: i.sec, label: "Giây" },
                      ].map((e, a, i) =>
                        (0, t.jsxs)(
                          d.default.Fragment,
                          {
                            children: [
                              (0, t.jsxs)("div", {
                                className: "w-1/4 text-center",
                                children: [
                                  (0, t.jsx)("p", {
                                    className: "text-2xl md:text-5xl",
                                    children: e.value
                                      .toString()
                                      .padStart(2, "0"),
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "pt-1 md:pt-3 text-xs md:text-2xl",
                                    children: e.label,
                                  }),
                                ],
                              }),
                              a < i.length - 1 &&
                                (0, t.jsx)("div", {
                                  className:
                                    "flex items-start text-xl md:text-4xl font-bold",
                                  children: ":",
                                }),
                            ],
                          },
                          a,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className:
                "absolute z-[1] top-[30%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-[20%] rotate-12 drop-shadow-[0_12px_25px_rgba(0,0,0,0.25)]",
              children: (0, t.jsx)("img", {
                className:
                  "object-cover aspect-[100/130] border-4 md:border-8 border-solid border-white",
                src: e.mainImage || void 0,
              }),
            }),
          ],
        })
      );
    }
    var h = e.i(291502);
    function p({ bannerImage: e }) {
      return (0, t.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [
          (0, t.jsx)(a.motion.img, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 1.5 },
            src: e || void 0,
            alt: "Banner",
            className: "object-cover w-full",
          }),
          (0, t.jsx)("div", {
            className:
              "absolute w-full h-[45%] bg-gradient-to-b from-[rgba(0,0,0,0.81)] to-[rgba(3,3,3,0)]",
            style: {
              top: "-1px",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              WebkitTransform: "translateZ(0)",
            },
          }),
          (0, t.jsxs)("div", {
            className: "absolute top-[12%] w-full flex flex-col text-white",
            children: [
              (0, t.jsx)(a.motion.h1, {
                initial: { y: -30, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.5 },
                className: `${i.BeyondPerfectionRegular.className} text-[26px] md:text-[56px] !leading-normal`,
                children: "This day",
              }),
              (0, t.jsx)(a.motion.p, {
                initial: { y: -20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.7 },
                className: `text-lg md:text-3xl ${h.default.className}`,
                children: "OUR HEARTS BECOME ONE",
              }),
            ],
          }),
        ],
      });
    }
    var g = e.i(883907),
      f = e.i(25626);
    function b({ mainInfo: e }) {
      let i = " ";
      try {
        e.weddingLunarDate && (i = (0, l.formatLunarDate)(e.weddingLunarDate));
      } catch {
        i = " ";
      }
      return (0, t.jsxs)("div", {
        className: `gap-6 md:gap-14 pt-32 pb-40 md:pb-56 md:pt-64 px-10 md:px-20 flex flex-col bg-center bg-cover bg-no-repeat relative ${f.default.className} text-[rgb(146,131,98)]`,
        children: [
          (0, t.jsx)("img", {
            src: "./assets/ecards/wedding-18/background-2.png",
            alt: "Background",
            className:
              "object-cover absolute top-0 h-full left-0 w-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsxs)("div", {
            className: "flex z-[1]",
            children: [
              (0, t.jsxs)(a.motion.div, {
                initial: { x: -30, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "w-1/2 text-[14px] md:text-[26px] flex flex-col gap-1 md:gap-2",
                children: [
                  (0, t.jsx)("h3", {
                    className: "!font-bold text-[16px] md:text-[28px]",
                    children: "NHÀ TRAI",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-[1px] md:gap-[2px]",
                    children: [
                      e.groomFather?.toString().trim() &&
                        (0, t.jsx)("p", {
                          className: "w-full",
                          children: e.groomFather.toString().trim(),
                        }),
                      e.groomMother?.toString().trim() &&
                        (0, t.jsx)("p", {
                          className: "w-full",
                          children: e.groomMother.toString().trim(),
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)(a.motion.div, {
                initial: { x: 30, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "w-1/2 text-[14px] md:text-[26px] flex flex-col gap-1 md:gap-2",
                children: [
                  (0, t.jsx)("h3", {
                    className: "font-bold text-[16px] md:text-[28px]",
                    children: "NHÀ GÁI",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-[1px] md:gap-[2px]",
                    children: [
                      e.brideFather?.toString().trim() &&
                        (0, t.jsx)("p", {
                          className: "w-full",
                          children: e.brideFather.toString().trim(),
                        }),
                      e.brideMother?.toString().trim() &&
                        (0, t.jsx)("p", {
                          className: "w-full",
                          children: e.brideMother.toString().trim(),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsx)(a.motion.div, {
            initial: { y: 30, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "flex z-[1] justify-center items-center",
            children: (0, t.jsx)("h2", {
              className: "text-lg md:text-4xl md:!leading-[55px]",
              children:
                "KÍNH MỜI THAM DỰ TIỆC CHUNG VUI CỦA GIA ĐÌNH CHÚNG TÔI",
            }),
          }),
          (0, t.jsxs)("div", {
            className: `flex z-[1] relative flex-col justify-center items-center text-center ${c.UVNHoaTay1.className} gap-8 md:gap-16`,
            style: { fontSize: "clamp(42px, 13vw, 135px)" },
            children: [
              (0, t.jsx)(a.motion.h1, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.4 },
                className: "leading-snug whitespace-nowrap",
                children: e.groomName,
              }),
              (0, t.jsx)(a.motion.h2, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.6 },
                className: `${m.FTVVIPArcittyaBegatri.className} !leading-[80px]
                                absolute top-1/2
                                left-1/2
                                -translate-x-1/2
                                -translate-y-[30%]`,
                style: { fontSize: "clamp(50px, 12vw, 125px)" },
                children: "&",
              }),
              (0, t.jsx)(a.motion.h1, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.4 },
                className: "leading-snug whitespace-nowrap",
                children: e.brideName,
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: "flex z-[1] flex-col justify-center items-center",
            children: [
              (0, t.jsxs)(a.motion.h2, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.5 },
                className: "text-xl md:text-[40px]",
                children: [
                  (() => {
                    if (!e.weddingTime) return " ";
                    try {
                      return (0, t.jsx)(t.Fragment, {
                        children: e.weddingTime.slice(0, 5),
                      });
                    } catch {
                      return " ";
                    }
                  })(),
                  ", ",
                  (() => {
                    try {
                      var t;
                      let a;
                      if (!e.weddingDate) return " ";
                      return (
                        (t = e.weddingDate.toString()),
                        (a = new Date(t).getDay()),
                        0 === a ? "Chủ Nhật" : `Thứ ${a + 1}`
                      );
                    } catch {
                      return " ";
                    }
                  })(),
                ],
              }),
              (0, t.jsxs)(a.motion.div, {
                initial: { scale: 0.9, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.6 },
                className: "flex items-center justify-around w-full",
                children: [
                  (0, t.jsxs)("h2", {
                    className:
                      "text-xl md:text-[40px] px-1 md:px-2 py-1 md:py-4 border-y border-solid border-[rgb(146,131,98)]",
                    children: [
                      "THÁNG ",
                      (() => {
                        if (!e.weddingDate) return " ";
                        try {
                          return (0, l.getDatePart)(e.weddingDate, "m");
                        } catch {
                          return " ";
                        }
                      })(),
                    ],
                  }),
                  (0, t.jsx)("h1", {
                    className: `text-8xl md:text-[170px] ${g.FTVVIPHastegi.className} !leading-none pt-6 md:pt-10`,
                    children: (() => {
                      if (!e.weddingDate) return " ";
                      try {
                        return (0, l.getDatePart)(e.weddingDate, "d");
                      } catch {
                        return " ";
                      }
                    })(),
                  }),
                  (0, t.jsxs)("h2", {
                    className:
                      "text-xl md:text-[40px] px-1 md:px-2 py-1 md:py-4 border-y border-solid border-[rgb(146,131,98)]",
                    children: [
                      "NĂM ",
                      (() => {
                        if (!e.weddingDate) return " ";
                        try {
                          return (0, l.getDatePart)(e.weddingDate, "y");
                        } catch {
                          return " ";
                        }
                      })(),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)(a.motion.h3, {
                initial: { y: 10, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.7 },
                className: "text-base md:text-[31px] italic",
                children: ["(Vào ngày ", i, ")"],
              }),
            ],
          }),
          (0, t.jsxs)(a.motion.div, {
            initial: { y: 30, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.8, delay: 0.8 },
            className:
              "flex z-[1] flex-col justify-center items-center gap-2 md:gap-8",
            children: [
              (0, t.jsx)("h2", {
                className: "text-lg md:text-[36px]",
                children: "Tổ chức tại",
              }),
              (0, t.jsx)("h1", {
                className: "text-xl md:text-5xl",
                children: e.weddingVenueName?.toUpperCase(),
              }),
              (0, t.jsx)("h2", {
                className: "text-lg md:text-[38px] !leading-tight",
                children: e.weddingVenueAddress,
              }),
            ],
          }),
          e.googleMap &&
            (0, t.jsx)("div", {
              className: "z-[1] w-full flex justify-center items-center",
              children: (0, t.jsxs)("a", {
                href: e.googleMap,
                target: "_blank",
                className:
                  " flex items-center gap-2 text-[#8B7A5A] text-xl md:text-[40px] font-medium cursor-pointer select-none ",
                children: [
                  (0, t.jsx)("img", {
                    src: "./assets/ecards/wedding-18/location.png",
                    alt: "location icon",
                    className: "w-7 h-7 md:w-12 md:h-12",
                  }),
                  (0, t.jsx)("span", {
                    className: "tracking-wide !outline-none",
                    children: "CHỈ ĐƯỜNG",
                  }),
                ],
              }),
            }),
        ],
      });
    }
    var v = e.i(302553);
    function j({ date: e }) {
      let s = e.getFullYear(),
        n = e.getMonth(),
        l = new Intl.DateTimeFormat("en-US", { month: "long" }).format(e);
      e.getDay();
      let r = new Date(s, n + 1, 0).getDate(),
        d = new Date(s, n, 1).getDay(),
        o = 0 === d ? 6 : d - 1,
        c = Array.from({ length: 7 * Math.ceil((r + o) / 7) }, (e, t) => {
          let a = t - o + 1;
          return a > 0 && a <= r ? a : null;
        }),
        m = [];
      for (let e = 0; e < c.length; e += 7) m.push(c.slice(e, e + 7));
      return (0, t.jsxs)(a.motion.div, {
        initial: { scale: 0.9, opacity: 0 },
        whileInView: { scale: 1, opacity: 1 },
        viewport: { once: !0 },
        transition: { duration: 0.8 },
        children: [
          (0, t.jsx)(a.motion.h1, {
            initial: { y: -20, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.8, delay: 0.2 },
            className: `${i.BeyondPerfectionRegular.className} text-4xl md:text-7xl pt-6 md:pt-20 pb-4 md:pb-8 !leading-snug`,
            children: l,
          }),
          (0, t.jsxs)("table", {
            className: "w-full table-auto",
            children: [
              (0, t.jsx)("thead", {
                children: (0, t.jsxs)("tr", {
                  className: "text-[14px] md:text-3xl",
                  children: [
                    (0, t.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "MON",
                    }),
                    (0, t.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "TUE",
                    }),
                    (0, t.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "WED",
                    }),
                    (0, t.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "THUR",
                    }),
                    (0, t.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "FRI",
                    }),
                    (0, t.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "SAT",
                    }),
                    (0, t.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "SUN",
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("tbody", {
                children: m.map((i, l) =>
                  (0, t.jsx)(
                    "tr",
                    {
                      className: "text-center text-[13px] md:text-3xl",
                      children: i.map((i, l) => {
                        let r =
                          i &&
                          new Date(s, n, i).toDateString() === e.toDateString();
                        return (0, t.jsxs)(
                          "td",
                          {
                            className: `text-center p-2 md:py-5 md:px-3 ${r ? "relative" : ""}`,
                            children: [
                              i || "",
                              r &&
                                (0, t.jsx)(a.motion.div, {
                                  initial: { scale: 0 },
                                  whileInView: { scale: 1 },
                                  viewport: { once: !0 },
                                  transition: {
                                    duration: 0.5,
                                    delay: 0.5,
                                    type: "spring",
                                  },
                                  className:
                                    "absolute inset-0 flex items-center justify-center",
                                  children: (0, t.jsx)("div", {
                                    className:
                                      "w-[37px] md:w-[77px] h-[31px] md:h-[65px]",
                                    children: (0, t.jsx)("div", {
                                      className:
                                        "w-full h-full bg-[url('/assets/ecards/wedding-18/heart.png')] bg-no-repeat bg-center bg-cover scale-110",
                                    }),
                                  }),
                                }),
                            ],
                          },
                          l,
                        );
                      }),
                    },
                    l,
                  ),
                ),
              }),
            ],
          }),
        ],
      });
    }
    function N({ brideGroom: e }) {
      return (0, t.jsxs)("div", {
        children: [
          (0, t.jsxs)("div", {
            className: `gap-6 md:gap-6 flex flex-col bg-center bg-cover bg-no-repeat relative ${v.default.className} text-[rgb(146,131,98)]`,
            children: [
              (0, t.jsx)("img", {
                src: "./assets/ecards/wedding-18/background-3.png",
                alt: "Background",
                className:
                  "object-cover absolute w-full z-[1] pointer-events-none overflow-hidden",
              }),
              (0, t.jsxs)(a.motion.div, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "z-[1] pt-24 md:pt-44 pb-4 md:pb-8 text-[13px] md:text-[27px] px-6 md:px-14",
                children: [
                  (0, t.jsxs)("p", {
                    children: [
                      "Tình yêu của anh và em là một hành trình kỳ diệu, vượt qua bao thử thách để cùng nhau bước đến ngày trọng đại",
                      (0, t.jsx)("br", {}),
                      "– đám cưới của chúng mình.",
                    ],
                  }),
                  (0, t.jsx)("p", {
                    children:
                      "Đám cưới này là lời cam kết chân thành, là sự bắt đầu của một chương mới – nơi chúng ta cùng vun đắp tổ ấm, cùng sẻ chia mọi vui buồn và cùng nắm tay nhau đi đến cuối con đường mang tên hạnh phúc.",
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: `gap-2 md:gap-6 flex flex-col bg-center bg-cover bg-no-repeat relative ${v.default.className} text-[rgb(146,131,98)]`,
            children: [
              (0, t.jsx)("img", {
                src: "./assets/ecards/wedding-18/background.png",
                alt: "Background",
                className:
                  "object-cover absolute w-full h-full z-[1] pointer-events-none overflow-hidden",
              }),
              (0, t.jsxs)("div", {
                className: "z-[1] pb-12 md:pb-16 overflow-hidden",
                children: [
                  (0, t.jsxs)("div", {
                    className: "relative w-full flex z-[2]",
                    children: [
                      (0, t.jsx)(a.motion.div, {
                        initial: { x: -50, opacity: 0, rotate: -12 },
                        whileInView: { x: 0, opacity: 1, rotate: -12 },
                        viewport: { once: !0 },
                        transition: { duration: 0.8 },
                        className:
                          "absolute w-[53%] border-15 md:border-24 border-solid left-[-8] md:left-[-10] top-8 md:top-20 border-white filter grayscale-0 blur-none contrast-100 brightness-100 opacity-100 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] -rotate-12",
                        children: (0, t.jsx)("div", {
                          className: "aspect-[236/236] w-full overflow-hidden",
                          children: (0, t.jsx)("img", {
                            className: "object-cover w-full h-full",
                            src: e.groomImage || void 0,
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", { className: "w-1/2" }),
                      (0, t.jsxs)(a.motion.div, {
                        initial: { x: 30, opacity: 0 },
                        whileInView: { x: 0, opacity: 1 },
                        viewport: { once: !0 },
                        transition: { duration: 0.8, delay: 0.2 },
                        className: "w-1/2 z-[1] pt-16 pb-20 md:pt-36 md:pb-44",
                        children: [
                          (0, t.jsx)("h2", {
                            className: `${m.FTVVIPArcittyaBegatri.className} text-[34px] md:text-[68px] !leading-[1.2]`,
                            children: "Chú rể",
                          }),
                          (0, t.jsx)("h1", {
                            className:
                              "text-[25px] md:text-[50px] !leading-snug",
                            children: e.groomName?.toUpperCase(),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative w-full flex z-[1]",
                    children: [
                      (0, t.jsx)(a.motion.div, {
                        initial: { x: 50, opacity: 0, rotate: 12 },
                        whileInView: { x: 0, opacity: 1, rotate: 12 },
                        viewport: { once: !0 },
                        transition: { duration: 0.8 },
                        className:
                          "absolute w-[55%] border-15 md:border-24 border-solid right-[-7] md:right-[-15] border-white filter grayscale-0 blur-none contrast-100 brightness-100 opacity-100 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] rotate-12",
                        children: (0, t.jsx)("div", {
                          className: "w-full aspect-[236/236] overflow-hidden",
                          children: (0, t.jsx)("img", {
                            className: "object-cover w-full h-full",
                            src: e.brideImage || void 0,
                          }),
                        }),
                      }),
                      (0, t.jsxs)(a.motion.div, {
                        initial: { x: -30, opacity: 0 },
                        whileInView: { x: 0, opacity: 1 },
                        viewport: { once: !0 },
                        transition: { duration: 0.8, delay: 0.2 },
                        className:
                          "w-[45%] z-[1] pt-[4.5rem] pb-20 md:pt-40 md:pb-48",
                        children: [
                          (0, t.jsx)("h2", {
                            className: `${m.FTVVIPArcittyaBegatri.className} text-[34px] md:text-[68px] !leading-[1.2]`,
                            children: "Cô dâu",
                          }),
                          (0, t.jsx)("h1", {
                            className:
                              "text-[25px] md:text-[50px] !leading-snug",
                            children: e.brideName?.toUpperCase(),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", { className: "w-[55%]" }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(a.motion.div, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: "z-[1] text-[14px] md:text-[27px] px-10 md:px-14",
                children: (0, t.jsxs)("p", {
                  children: [
                    "Hôm nay là ngày chúng mình cùng nắm tay",
                    (0, t.jsx)("br", {}),
                    "bước vào một hành trình mới",
                    (0, t.jsx)("br", {}),
                    "- hành trình của yêu thương và sẻ chia.",
                  ],
                }),
              }),
              (0, t.jsx)(a.motion.div, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.2 },
                className: "w-full z-[1] py-8 md:py-12",
                children: (0, t.jsx)("img", {
                  className: "object-cover",
                  src: "./assets/ecards/wedding-18/nhan-cuoi.png",
                }),
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: `gap-6 md:gap-6 pb-16 md:pb-28 flex flex-col bg-center bg-cover bg-no-repeat relative ${v.default.className} text-[rgb(146,131,98)]`,
            children: [
              (0, t.jsx)("img", {
                src: "./assets/ecards/wedding-18/background-4.png",
                alt: "Background",
                className:
                  "object-cover absolute w-full h-full z-[1] pointer-events-none overflow-hidden",
              }),
              (0, t.jsx)("div", {
                className: "z-[1] px-10 md:px-16",
                children: (0, t.jsx)(j, { date: new Date(e.weddingDate) }),
              }),
            ],
          }),
        ],
      });
    }
    var y = e.i(860348);
    function w({ albumImage: e }) {
      return (0, t.jsxs)("div", {
        className: "bg-[rgb(162,149,120)]",
        children: [
          e.length > 0 &&
            (0, t.jsx)("div", {
              className: "pt-8 md:pt-20 px-2 md:pl-6 overflow-hidden",
              children: (0, t.jsx)(a.motion.h1, {
                initial: { x: -50, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: `${y.default.className} text-white text-[30px] md:text-6xl`,
                children: "ALBUM HÌNH CƯỚI",
              }),
            }),
          e.length > 0 &&
            (0, t.jsx)("div", {
              className: "pt-6 md:pt-14 px-5 pb-16 md:pb-28 md:px-10",
              children: (0, t.jsx)("div", {
                className: "flex justify-center flex-wrap",
                children: (0, t.jsx)("div", {
                  className: "grid grid-cols-2 gap-2 md:gap-4 w-full",
                  children:
                    e &&
                    e.length > 0 &&
                    e.map((e, i) =>
                      (0, t.jsx)(
                        a.motion.div,
                        {
                          initial: { opacity: 0, scale: 0.9 },
                          whileInView: { opacity: 1, scale: 1 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5, delay: 0.1 * i },
                          children: (0, t.jsx)("img", {
                            className:
                              "h-auto max-w-full shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                            src: e,
                            alt: `Album h\xecnh cưới ${i}`,
                          }),
                        },
                        i,
                      ),
                    ),
                }),
              }),
            }),
        ],
      });
    }
    var _ = e.i(854878),
      k = e.i(661529),
      C = e.i(472317),
      D = e.i(33160);
    let T =
      "w-full text-[14px] md:text-[30px] border-2 mt-2 md:border-2 border-solid border-[rgba(0,0,0,0.38)] bg-transparent placeholder:text-[rgb(146,131,98)] px-2 py-2 md:px-5 md:py-4 focus:outline-none focus-visible:outline-none";
    function I({ confirm: e }) {
      let [s, n] = (0, d.useState)(!1),
        [r, o] = (0, d.useState)(!1),
        [c, m] = (0, d.useState)({
          id: 0,
          ecard_my_user_id: Number(e.id),
          ecard_my_user_invitee_id: 0,
          name: e.guestName ?? "",
          content: "",
          is_tham_du: null,
          so_nguoi_tham_du: void 0,
        }),
        x = (0, d.useCallback)(() => {
          o(!1);
        }, []),
        u = (0, d.useCallback)(() => {
          n(!1);
        }, []),
        h = async (e) => {
          e.preventDefault();
          try {
            let e = (0, l.getCookies)("ecard_my_user_invitee_id"),
              t = { ...c };
            ((t.ecard_my_user_invitee_id =
              e && !isNaN(Number(e)) ? Number(e) : 0),
              (void 0 === t.so_nguoi_tham_du || !0 !== t.is_tham_du) &&
                (t.so_nguoi_tham_du = 0));
            let a = await (0, C.AddCongratulations)(t);
            a.success
              ? ((0, l.setCookies)(
                  "ecard_my_user_invitee_id",
                  a.data.data.invitee_id,
                  1825,
                ),
                n(!0))
              : (0, D.showToast)(a.message || "Đăng nhập thất bại", "error");
          } catch (e) {
            (console.error("Login error:", e),
              (0, D.showToast)("Có lỗi xảy ra, vui lòng thử lại!", "error"));
          }
        };
      return (0, t.jsxs)("div", {
        className: `gap-3 md:gap-3 flex flex-col bg-center bg-cover bg-no-repeat relative ${k.default.className} text-[rgb(146,131,98)]`,
        children: [
          (0, t.jsx)("img", {
            src: "./assets/ecards/wedding-18/background-5.png",
            alt: "Background",
            className:
              "object-cover absolute w-full md:h-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsxs)("div", {
            className: "z-[1] pt-24 md:pt-52 pb-24 md:pb-40",
            children: [
              (0, t.jsx)(a.motion.div, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "pb-2 md:pb-8 text-[13px] md:text-[30px] px-6 md:px-14",
                children: (0, t.jsxs)("p", {
                  children: [
                    "Hãy xác nhận sự có mặt của bạn để chúng mình",
                    (0, t.jsx)("br", {}),
                    "chuẩn bị đón tiếp một cách chu đáo nhất.",
                    (0, t.jsx)("br", {}),
                    "Trân trọng!",
                  ],
                }),
              }),
              (0, t.jsx)("form", {
                className: "",
                onSubmit: h,
                children: (0, t.jsxs)(a.motion.div, {
                  initial: { y: 30, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className:
                    "flex flex-wrap gap-3 md:gap-7 px-6 md:px-16 items-center justify-center",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[28px]",
                          children: "Tên của bạn:",
                        }),
                        (0, t.jsx)("input", {
                          required: !0,
                          className: `${T} rounded-full`,
                          type: "text",
                          name: "name",
                          maxLength: 200,
                          placeholder: "Vui lòng điền tên của bạn",
                          value: c.name,
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            m((e) => ({ ...e, [t]: a }));
                          },
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[28px]",
                          children: "Lời chúc của bạn:",
                        }),
                        (0, t.jsx)("textarea", {
                          rows: 4,
                          required: !0,
                          name: "content",
                          className: `${T} rounded-[22px] md:rounded-[40px]`,
                          maxLength: 1e3,
                          placeholder: "Gửi lời chúc đến Dâu Rể nhé!",
                          value: c.content,
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            m((e) => ({ ...e, [t]: a }));
                          },
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[28px]",
                          children: "Bạn tham dự được chứ?",
                        }),
                        (0, t.jsxs)("select", {
                          className: `${T} rounded-full`,
                          name: "is_tham_du",
                          required: !0,
                          value:
                            null === c.is_tham_du
                              ? ""
                              : c.is_tham_du
                                ? "true"
                                : "false",
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            m((e) => ({
                              ...e,
                              [t]:
                                "is_tham_du" === t
                                  ? "" === a
                                    ? null
                                    : "true" === a
                                  : a,
                            }));
                          },
                          children: [
                            (0, t.jsx)("option", {
                              value: "",
                              children: "Bạn Sẽ Tham Dự Cùng Chúng Mình Nhé?",
                            }),
                            (0, t.jsx)("option", {
                              value: "true",
                              children: "Mình Sẽ Tham Dự Nha",
                            }),
                            (0, t.jsx)("option", {
                              value: "false",
                              children:
                                "Tiếc Quá! Mình Không Thể Tham Dự Được Mất Rồi",
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.is_tham_du &&
                      (0, t.jsxs)("div", {
                        className: "w-full text-start",
                        children: [
                          (0, t.jsx)("label", {
                            className: "text-sm md:text-[28px]",
                            children: "Số người tham dự:",
                          }),
                          (0, t.jsx)("input", {
                            required: !0,
                            className: `${T} rounded-full`,
                            type: "number",
                            name: "so_nguoi_tham_du",
                            min: 1,
                            placeholder: "Số lượng người đến tham dự",
                            value: c.so_nguoi_tham_du,
                            onChange: (e) => {
                              let { name: t, value: a, type: i } = e.target;
                              m((e) => ({
                                ...e,
                                [t]:
                                  "number" === i
                                    ? "" === a
                                      ? ""
                                      : Number(a)
                                    : a,
                              }));
                            },
                          }),
                        ],
                      }),
                    (0, t.jsx)(a.motion.button, {
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      type: "submit",
                      className:
                        "cursor-pointer focus:outline-none border-[1px] md:border-[2px] border-solid border-[rgb(146,131,98)] text-white bg-[rgb(162,149,120)] rounded-full shadow-md shadow-black/25 focus:ring-4 font-semibold text-[19px] py-1 md:text-[40px] md:py-6 w-full",
                      children: "GỬI LỜI CHÚC",
                    }),
                    e.qrImage &&
                      (0, t.jsx)(a.motion.button, {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        type: "button",
                        onClick: () => o(!0),
                        className:
                          "cursor-pointer focus:outline-none border-[1px] md:border-[2px] border-solid border-[rgb(146,131,98)] text-white bg-[rgb(162,149,120)] rounded-full shadow-md shadow-black/25 font-semibold text-[19px] py-1 md:text-[40px] md:py-6 w-full",
                        children: "GỬI QUÀ MỪNG CƯỚI",
                      }),
                  ],
                }),
              }),
            ],
          }),
          (0, t.jsxs)(_.Dialog, {
            open: r,
            onClose: x,
            className: "relative z-10",
            children: [
              (0, t.jsx)(_.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(_.DialogPanel, {
                    transition: !0,
                    className:
                      "relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, t.jsx)("img", {
                        src: "./assets/ecards/wedding-18/background-6.png",
                        alt: "Background",
                        className:
                          "object-cover absolute top-0 left-0 w-full h-full z-1 pointer-events-none overflow-hidden",
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className:
                          "absolute md:right-5 right-2 top-2 md:top-5 z-20 rounded-full p-1 text-dark focus:outline-none",
                        onClick: x,
                        "aria-label": "Close",
                        children: (0, t.jsx)("svg", {
                          className: "h-7 w-7 md:h-12 md:w-12",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "relative z-19 py-9 md:py-14 px-4 md:px-7",
                        children: (0, t.jsxs)("div", {
                          className:
                            "flex justify-center items-center gap-3 md:gap-6",
                          children: [
                            (0, t.jsx)("div", {
                              className: "w-4/12",
                              children: (0, t.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, t.jsx)("div", {
                                  className: "w-full",
                                  children: (0, t.jsx)("img", {
                                    className: "w-full object-cover",
                                    src: e.qrImage || void 0,
                                    alt: "QR Code",
                                  }),
                                }),
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "w-8/12",
                              children: (0, t.jsxs)("div", {
                                className: `flex flex-col text-[rgb(146,131,98)] gap-2 md:gap-3 ${k.default.className}`,
                                children: [
                                  (0, t.jsx)("h2", {
                                    className:
                                      "text-[17px] md:text-[33px] border-b-2 md:border-b-4 border-solid border-[rgb(146,131,98)] !leading-relaxed",
                                    children: e.bankAccountName,
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                      (0, t.jsx)("p", {
                                        className: "md:text-[30px]",
                                        children: e.bankName,
                                      }),
                                      (0, t.jsx)("p", {
                                        className: "md:text-[30px]",
                                        children: e.bankAccountNumber,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          (0, t.jsxs)(_.Dialog, {
            open: s,
            onClose: u,
            className: "relative z-10",
            children: [
              (0, t.jsx)(_.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(_.DialogPanel, {
                    transition: !0,
                    className:
                      "relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, t.jsx)("img", {
                        src: "./assets/ecards/wedding-18/background-7.png",
                        alt: "Background",
                        className:
                          "object-cover absolute top-0 left-0 w-full h-full z-1 pointer-events-none overflow-hidden",
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className:
                          "absolute md:right-5 right-2 top-2 md:top-5 z-20 rounded-full p-1 text-dark focus:outline-none",
                        onClick: u,
                        "aria-label": "Close",
                        children: (0, t.jsx)("svg", {
                          className: "h-7 w-7 md:h-12 md:w-12",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "relative z-19 py-8 md:py-16 pl-8 pr-6 md:pl-20 md:pr-12",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "flex justify-center items-start gap-3 md:gap-6",
                            children: [
                              (0, t.jsx)("div", {
                                className: "w-9/12",
                                children: (0, t.jsxs)("div", {
                                  className:
                                    "flex justify-center items-center relative",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        " w-full aspect-[256/232] -rotate-6 border-[12px] border-b-[34px] md:border-[24px] md:border-b-[64px] border-solid border-white shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                                      children: (0, t.jsx)("img", {
                                        className: "w-full object-cover h-full",
                                        src: e.thankyouImage || void 0,
                                        alt: "Thank you",
                                      }),
                                    }),
                                    (0, t.jsx)("img", {
                                      className:
                                        "w-[35%] object-cover absolute right-[-20%] bottom-[-5%]",
                                      src: "./assets/ecards/wedding-18/flower.png",
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: `pt-4 w-3/12 flex flex-col text-[rgb(146,131,98)] gap-2 md:gap-3 ${k.default.className} justify-center items-end`,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "flex",
                                    children: (0, t.jsx)("p", {
                                      className:
                                        "px-3 text-3xl md:text-6xl border-b-2 md:border-b-4 border-solid border-[rgb(146,131,98)] !leading-relaxed",
                                      children: (() => {
                                        if (!e.weddingDate) return " ";
                                        try {
                                          return (0, l.getDatePart)(
                                            e.weddingDate,
                                            "d",
                                          );
                                        } catch {
                                          return " ";
                                        }
                                      })(),
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "flex",
                                    children: (0, t.jsx)("p", {
                                      className: "px-3 text-3xl md:text-6xl",
                                      children: (() => {
                                        if (!e.weddingDate) return " ";
                                        try {
                                          return (0, l.getDatePart)(
                                            e.weddingDate,
                                            "m",
                                          );
                                        } catch {
                                          return " ";
                                        }
                                      })(),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex flex-col pt-8 md:pt-14 text-[rgb(146,131,98)] text-center",
                            children: [
                              (0, t.jsx)("h3", {
                                className: `text-2xl md:text-5xl ${i.BeyondPerfectionRegular.className} !leading-loose`,
                                children: "Thank you!",
                              }),
                              (0, t.jsxs)("p", {
                                className:
                                  "text-[17px] md:text-3xl pt-1 md:pt-1 !leading-snug",
                                children: [
                                  "Cảm ơn bạn đã dành thời gian phản hồi.",
                                  (0, t.jsx)("br", {}),
                                  "Chúng mình vô cùng trân quý sự quan tâm của bạn.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
    }
    var S = e.i(595358);
    function M({ backgroundImage: e }) {
      return (0, t.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [
          (0, t.jsx)("img", {
            src: e || void 0,
            alt: "Banner",
            className: "object-cover w-full h-full",
          }),
          (0, t.jsx)("div", {
            className:
              "absolute w-full h-[70%] bg-gradient-to-b from-[rgba(2,2,2,0.3)] to-[rgba(234,237,238,0)]",
            style: {
              top: "-1px",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              WebkitTransform: "translateZ(0)",
            },
          }),
          (0, t.jsxs)("div", {
            className:
              "absolute top-[8%] md:top-[10%] w-full flex flex-col px-8 md:px-20 gap-3 md:gap-5 text-white",
            children: [
              (0, t.jsxs)(a.motion.h1, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: `${S.default.className} text-[13px] md:text-[26px] tracking-normal !leading-normal`,
                children: [
                  "Cảm ơn bạn đã dành tình cảm cho chúng mình!",
                  (0, t.jsx)("br", {}),
                  "Sự hiện diện của bạn chính là món quà ý nghĩa nhất, và chúng mình vô cùng trân quý khi được cùng bạn chia sẻ niềm hạnh phúc trong ngày trọng đại này.",
                ],
              }),
              (0, t.jsx)(a.motion.p, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.3 },
                className: `text-xl md:text-5xl ${i.BeyondPerfectionRegular.className} !leading-loose`,
                children: "Thank you!",
              }),
            ],
          }),
        ],
      });
    }
    var V = e.i(56506);
    e.s(
      [
        "default",
        0,
        ({ refData: e, guestName: a, inviteeid: i }) => {
          let s = a && !Array.isArray(a) ? decodeURIComponent(a) : void 0;
          i && i > 0 && (0, l.setCookies)("ecard_my_user_invitee_id", i, 1825);
          let n = e?.formData || {},
            d = n.chure || " ",
            o = n.codau || " ",
            c = n.nha_trai_ong ? "Ông " + n.nha_trai_ong : "",
            m = n.nha_trai_ba ? "Bà " + n.nha_trai_ba : "",
            x = n.nha_gai_ong ? "Ông " + n.nha_gai_ong : "",
            h = n.nha_gai_ba ? "Bà " + n.nha_gai_ba : "",
            g = e.formData.ten_le,
            f = e.formData.ngay_hon_le,
            v = e.formData.ngay_hon_le_am,
            j = e.formData.gio_hon_le,
            y = e.formData.tiec_ten,
            _ = e.formData.tiec_dia_chi,
            k = e.formData.google_map,
            C = n.ngh ? n.ngh : "",
            D = n.stk ? n.stk : "",
            T = n.ttk ? n.ttk : "",
            S = e?.imagesAlbum || [],
            $ = (0, l.getImagesByFieldCode)("banner_image_url", S)[0],
            B = (0, l.getImagesByFieldCode)("album2", S)[0],
            A = (0, l.getImagesByFieldCode)("album3", S)[0],
            F = (0, l.getImagesByFieldCode)("album4", S)[0],
            z = (0, l.getImagesByFieldCode)("album5", S)[0],
            L = (0, l.getImagesByFieldCode)("album10", S),
            P = (0, l.getImagesByFieldCode)("image_bank_url", S)[0],
            H = (0, l.getImagesByFieldCode)("footer_image_url", S)[0],
            R = (0, l.getImagesByFieldCode)("album6", S)[0];
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
              className:
                "begindowload max-w-4xl mx-auto text-center bg-[#F8FDFF]",
              children: [
                (0, t.jsx)(r, {
                  backgroundImage: $,
                  brideName: o,
                  groomName: d,
                  weddingDate: f,
                }),
                (0, t.jsx)(u, {
                  invitation: {
                    groomName: d,
                    brideName: o,
                    weddingDate: f,
                    weddingTime: j,
                    mainImage: B,
                    guestName: s,
                    weddingName: g,
                  },
                }),
                (0, t.jsx)(p, { bannerImage: A }),
                (0, t.jsx)(b, {
                  mainInfo: {
                    groomFather: c,
                    groomMother: m,
                    brideFather: x,
                    brideMother: h,
                    groomName: d,
                    brideName: o,
                    weddingDate: f,
                    weddingLunarDate: v,
                    weddingTime: j,
                    weddingVenueName: y,
                    weddingVenueAddress: _,
                    googleMap: k,
                  },
                }),
                (0, t.jsx)(N, {
                  brideGroom: {
                    brideName: o,
                    groomName: d,
                    brideImage: z,
                    groomImage: F,
                    weddingDate: f,
                  },
                }),
                (0, t.jsx)(w, { albumImage: L }),
                (0, t.jsx)(I, {
                  confirm: {
                    id: e.id ?? 0,
                    guestName: s ?? "",
                    qrImage: P,
                    bankAccountName: T,
                    bankName: C,
                    bankAccountNumber: D,
                    thankyouImage: R,
                    weddingDate: f,
                  },
                }),
                (0, t.jsx)(M, { backgroundImage: H }),
                (0, t.jsx)(V.default, {
                  urlMp3: n.audio,
                  ecardMyUserId: Number(e.id),
                }),
              ],
            }),
          });
        },
      ],
      194134,
    );
  },
  826416,
  (e) => {
    e.v({ className: "roboto_8e121daf-module__BSpsuW__className" });
  },
  232762,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(846932);
    e.i(283210);
    var i = e.i(710134);
    function s({ banner: e }) {
      return (0, t.jsxs)("div", {
        children: [
          (0, t.jsx)(a.motion.div, {
            initial: { scale: 1.05, opacity: 0 },
            whileInView: { scale: 1, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.8 },
            className:
              "w-full flex justify-center items-center overflow-hidden",
            children: (0, t.jsx)("img", {
              className: "w-[95%] md:w-[86%] object-cover",
              src: e.backgroundImage || void 0,
              alt: "Banner",
            }),
          }),
          (0, t.jsxs)("div", {
            className: `py-4 md:py-6 flex gap-3 md:gap-8 justify-center items-center ${i.greatVibes.className} text-[30px] md:text-[54px] !leading-snug text-[rgb(136,0,0)]`,
            children: [
              (0, t.jsx)(a.motion.div, {
                initial: { x: -30, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.3 },
                children: (0, t.jsx)("h1", { children: e.groomName }),
              }),
              (0, t.jsx)(a.motion.div, {
                initial: { scale: 0, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.5, delay: 0.5 },
                children: (0, t.jsx)("div", {
                  className:
                    "icon-container w-[30px] h-[28px] md:w-[48px] md:h-[46px] opacity-100",
                  "data-node-id": "IWTheiqMgk",
                  children: (0, t.jsx)("div", {
                    className: "wrapper-svg",
                    style: {
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      overflow: "hidden",
                    },
                    children: (0, t.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      stroke: "currentColor",
                      fill: "#880000",
                      strokeWidth: 0,
                      viewBox: "0 0 512 512",
                      style: { width: "100%", height: "100%" },
                      height: 24,
                      width: 24,
                      children: (0, t.jsx)("path", {
                        d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
                        fill: "#880000",
                      }),
                    }),
                  }),
                }),
              }),
              (0, t.jsx)(a.motion.div, {
                initial: { x: 30, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.3 },
                children: (0, t.jsx)("h1", { children: e.brideName }),
              }),
            ],
          }),
        ],
      });
    }
    var n = e.i(875958),
      l = e.i(589997),
      r = e.i(271645);
    function d({ countdown: e }) {
      let [s, d] = (0, r.useState)({ days: 0, hours: 0, min: 0, sec: 0 }),
        o = (0, r.useMemo)(
          () =>
            e.weddingDate
              ? new Date(`${e.weddingDate}T${e.weddingTime || "00:00:00"}`)
              : null,
          [e.weddingDate, e.weddingTime],
        );
      return (
        (0, r.useEffect)(() => {
          if (!o) return;
          let e = () => {
            let e = o.getTime() - Date.now();
            if (e <= 0) return void d({ days: 0, hours: 0, min: 0, sec: 0 });
            let t = Math.floor(e / 864e5),
              a = Math.floor((e / 36e5) % 24);
            d({
              days: t,
              hours: a,
              min: Math.floor((e / 6e4) % 60),
              sec: Math.floor((e / 1e3) % 60),
            });
          };
          e();
          let t = setInterval(e, 1e3);
          return () => clearInterval(t);
        }, [o]),
        (0, t.jsxs)("div", {
          className: "flex flex-col gap-4 md:gap-6",
          children: [
            (0, t.jsxs)("div", {
              className: "flex flex-col",
              children: [
                (0, t.jsx)(a.motion.h2, {
                  initial: { y: -20, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6 },
                  className: `${i.greatVibes.className} text-[35px] md:text-6xl !leading-snug`,
                  children: "Save The Date",
                }),
                (0, t.jsx)(a.motion.h3, {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6, delay: 0.2 },
                  className: `${n.sourceSans3.className} text-[18px] md:text-3xl !leading-snug`,
                  children: "For The Wedding Of",
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "flex flex-col gap-2 md:gap-5",
              children: [
                (0, t.jsx)(a.motion.h3, {
                  initial: { y: 20, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6, delay: 0.3 },
                  className: `${n.sourceSans3.className} text-[18px] md:text-3xl`,
                  children: (() => {
                    if (!e.weddingDate) return " ";
                    try {
                      return (
                        `Ng\xe0y ` +
                        (0, l.getDatePart)(e.weddingDate, "d") +
                        ` Th\xe1ng ` +
                        (0, l.getDatePart)(e.weddingDate, "m") +
                        ` Năm ` +
                        (0, l.getDatePart)(e.weddingDate, "y")
                      );
                    } catch {
                      return " ";
                    }
                  })(),
                }),
                e.weddingLunarDate &&
                  "" !== e.weddingLunarDate.trim() &&
                  (0, t.jsx)(a.motion.h4, {
                    initial: { y: 20, opacity: 0 },
                    whileInView: { y: 0, opacity: 1 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6, delay: 0.3 },
                    className: `${n.sourceSans3.className} text-[16px] md:text-2xl !italic`,
                    children: (() => {
                      if (!e.weddingLunarDate) return " ";
                      try {
                        return (
                          `(Vào Ng\xe0y ` +
                          (0, l.getDatePart)(e.weddingLunarDate, "d") +
                          ` Th\xe1ng ` +
                          (0, l.getDatePart)(e.weddingLunarDate, "m") +
                          ` Năm ` +
                          (0, l.getDatePart)(e.weddingLunarDate, "y") +
                          ")"
                        );
                      } catch {
                        return " ";
                      }
                    })(),
                  }),
                e.isShowCountDown &&
                  (0, t.jsx)("div", {
                    className: `flex ${n.sourceSans3.className} px-8 md:px-36 gap-3 md:gap-8`,
                    children: [
                      { value: s.days, label: "Ngày" },
                      { value: s.hours, label: "Giờ" },
                      { value: s.min, label: "Phút" },
                      { value: s.sec, label: "Giây" },
                    ].map((e, i) =>
                      (0, t.jsxs)(
                        a.motion.div,
                        {
                          initial: { scale: 0.8, opacity: 0 },
                          whileInView: { scale: 1, opacity: 1 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5, delay: 0.3 + 0.1 * i },
                          className:
                            "bg-[rgb(234,108,136)] !leading-snug text-white w-1/4 rounded-md md:rounded-xl border border-[rgb(234,108,136)] border-solid py-2 md:py-3",
                          children: [
                            (0, t.jsx)("p", {
                              className: "text-2xl md:text-5xl",
                              children: e.value,
                            }),
                            (0, t.jsx)("p", {
                              className: "md:pt-3 md:text-[28px]",
                              children: e.label,
                            }),
                          ],
                        },
                        i,
                      ),
                    ),
                  }),
              ],
            }),
          ],
        })
      );
    }
    var o = e.i(525053),
      o = o,
      c = e.i(280152),
      c = c;
    function m({ personInformation: e }) {
      return (0, t.jsxs)("div", {
        className: "flex flex-col gap-3 md:gap-8",
        children: [
          (0, t.jsx)(a.motion.h2, {
            initial: { y: -20, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.6 },
            className: `${o.default.className} text-[35px] md:text-6xl !leading-snug`,
            children: e.title,
          }),
          (0, t.jsx)(a.motion.div, {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.8, delay: 0.1 },
            className: "flex justify-center items-center",
            children: (0, t.jsx)("div", {
              className:
                "md:w-[70%] border-2 md:border-3 border-solid border-[rgb(234,108,136)] rounded-lg md:rounded-xl overflow-hidden",
              children: (0, t.jsx)("img", {
                className: "w-full object-cover aspect-[367/387]",
                src: e.image || void 0,
              }),
            }),
          }),
          (0, t.jsxs)(a.motion.div, {
            initial: { y: 20, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "flex flex-col gap-3",
            children: [
              (0, t.jsxs)("h3", {
                className: `${c.default.className} text-[20px] md:text-3xl font-bold`,
                children: [e.role, ":"],
              }),
              (0, t.jsx)("h1", {
                className: `${i.greatVibes.className} text-[30px] md:text-6xl !leading-snug`,
                children: e.name,
              }),
            ],
          }),
          (0, t.jsxs)(a.motion.div, {
            initial: { y: 20, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.6, delay: 0.4 },
            className: `${n.sourceSans3.className} flex flex-col text-[18px] md:text-3xl gap-2`,
            children: [
              e.father?.toString().trim() &&
                (0, t.jsx)("p", {
                  className: "",
                  children: e.father.toString().trim(),
                }),
              e.mother?.toString().trim() &&
                (0, t.jsx)("p", {
                  className: "w-full",
                  children: e.mother.toString().trim(),
                }),
            ],
          }),
          (0, t.jsx)(a.motion.div, {
            initial: { y: 20, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.6, delay: 0.5 },
            className: `${n.sourceSans3.className} text-[18px] md:text-3xl text-center flex justify-center items-center`,
            children: (0, t.jsxs)("p", {
              className: "w-10/12 md:w-8/12 !leading-snug",
              children: [
                (0, t.jsx)("strong", { children: "Địa Chỉ: " }),
                e.address,
              ],
            }),
          }),
        ],
      });
    }
    var x = e.i(677169),
      u = e.i(341615),
      h = e.i(826416);
    let p = {
      className: h.default.className,
      style: { fontFamily: "'Roboto', 'Roboto Fallback'", fontStyle: "normal" },
    };
    function g({ guest: e }) {
      return e?.guestName && "" !== e.guestName.trim()
        ? (0, t.jsx)(a.motion.div, {
            className: "",
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0 },
            children: (0, t.jsxs)("div", {
              className: "leading-7 md:leading-[1]",
              children: [
                (0, t.jsx)(a.motion.div, {
                  className: "flex flex-wrap justify-center",
                  children: (0, t.jsx)(a.motion.p, {
                    className: `md:pt-5 pt-3 pl-3 pr-3 border-t-2 border-[black] md:border-t-4 text-[38px] md:text-[70px] text-[black] ${u.EphesisRegular.className}`,
                    children: "TRÂN TRỌNG KÍNH MỜI",
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "flex justify-center items-center",
                  children: (0, t.jsx)("h1", {
                    className: `px-4 text-red-700 text-2xl md:text-5xl md:mb-5 ${x.ViceroyJF.className} border-b-2 border-dotted border-gray-400`,
                    children: e.guestName,
                  }),
                }),
                (0, t.jsx)(a.motion.div, {
                  children: (0, t.jsxs)("p", {
                    className: `tracking-widest text-[13px] md:text-[25px] pt-2 ${p.className}`,
                    children: [
                      "THAM DỰ LỄ CƯỚI CỦA ",
                      e?.groomName?.toUpperCase() || " ",
                      " &",
                      " ",
                      e?.brideName?.toUpperCase() || " ",
                    ],
                  }),
                }),
              ],
            }),
          })
        : (0, t.jsx)("div", {});
    }
    function f({ event: e }) {
      let i;
      return (0, t.jsxs)(a.motion.div, {
        initial: { y: 30, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: !0 },
        transition: { duration: 0.7 },
        className:
          "relative z-[2] mt-16 md:mt-36 md:min-h-[400px] rounded-md md:rounded-xl bg-center bg-cover bg-no-repeat",
        style: {
          backgroundImage:
            "url('/assets/ecards/wedding-19/background-event.webp')",
        },
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute inset-0 bg-white/40 rounded-xl pointer-events-none",
          }),
          (0, t.jsxs)("div", {
            className: `${n.sourceSans3.className} relative z-[1] flex flex-col items-start justify-center pt-3 md:pt-8 pb-10 md:pb-20 px-4 md:px-9 gap-7 md:gap-16`,
            children: [
              (0, t.jsxs)("div", {
                className: "relative  w-full text-start",
                children: [
                  (0, t.jsx)(a.motion.h2, {
                    initial: { x: -20, opacity: 0 },
                    whileInView: { x: 0, opacity: 1 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    className:
                      "text-[20px] md:text-[44px] !leading-snug font-bold underline",
                    children: e.title,
                  }),
                  (0, t.jsx)(a.motion.div, {
                    initial: { x: 30, opacity: 0 },
                    whileInView: { x: 0, opacity: 1 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6, delay: 0.3 },
                    className:
                      "w-[50%] absolute top-[-275%] right-0 z-[10] rounded-md md:rounded-xl overflow-hidden",
                    children: (0, t.jsx)("img", {
                      className: "object-cover w-full aspect-[166/118]",
                      src: e.image || void 0,
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)(a.motion.div, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.4 },
                className:
                  "flex flex-col gap-4 md:gap-10 items-start justify-center",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "flex gap-3 md:gap-6 justify-center items-center",
                    children: [
                      (0, t.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "#C24E4E",
                        viewBox: "0 0 448 512",
                        className: "w-[30px] md:w-23 h-[30px] md:h-23",
                        children: (0, t.jsx)("path", {
                          d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z",
                          fill: "#C24E4E",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsxs)("p", {
                          className: "text-[18px] md:text-[38px]",
                          children: [
                            e?.time?.slice(0, 5) || " ",
                            " ",
                            e?.date
                              ? 0 === (i = new Date(e.date.toString()).getDay())
                                ? "Chủ Nhật"
                                : `Thứ ${i + 1}`
                              : " ",
                            " ",
                            "Ngày",
                            " ",
                            e?.date
                              ? `${(0, l.getDatePart)(e.date, "d")}/${(0, l.getDatePart)(e.date, "m")}/${(0, l.getDatePart)(e.date, "y")}`
                              : " ",
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex gap-3 md:gap-6 justify-center items-center",
                    children: [
                      (0, t.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "#C24E4E",
                        viewBox: "0 0 384 512",
                        className: "w-[30px] md:w-23 h-[30px] md:h-23",
                        children: (0, t.jsx)("path", {
                          d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
                          fill: "#C24E4E",
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "text-[16px] md:text-[34px] text-start !leading-snug flex flex-col md:gap-1",
                        children: [
                          (0, t.jsxs)("p", { children: ["Tại: ", e.place] }),
                          (0, t.jsx)("p", {
                            className: "text-[18px] md:text-[38px]",
                            children: e.address,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    null != h.default.variable && (p.variable = h.default.variable);
    var b = e.i(854878),
      v = e.i(472317),
      j = e.i(889235),
      N = e.i(987006),
      y = e.i(33160);
    let w =
      "w-full text-[14px] md:text-[18px] border mt-1 border-solid border-[rgba(209,213,219)] rounded-[4px] bg-white placeholder:text-[#75757C] p-[12px] focus:outline-none focus-visible:outline-none";
    function _({ confirm: e }) {
      let [s, n] = (0, r.useState)(!1),
        [d, o] = (0, r.useState)(!1),
        [c, m] = (0, r.useState)({
          id: 0,
          ecard_my_user_id: Number(e.id),
          ecard_my_user_invitee_id: 0,
          name: e.guestName ?? "",
          content: "",
          is_tham_du: null,
          so_nguoi_tham_du: void 0,
        }),
        x = (0, r.useCallback)(() => {
          n(!1);
        }, []),
        u = async (e) => {
          e.preventDefault();
          try {
            let e = (0, l.getCookies)("ecard_my_user_invitee_id"),
              t = { ...c };
            ((t.ecard_my_user_invitee_id =
              e && !isNaN(Number(e)) ? Number(e) : 0),
              (void 0 === t.so_nguoi_tham_du || !0 !== t.is_tham_du) &&
                (t.so_nguoi_tham_du = 0));
            let a = await (0, v.AddCongratulations)(t);
            a.success
              ? ((0, l.setCookies)(
                  "ecard_my_user_invitee_id",
                  a.data.data.invitee_id,
                  1825,
                ),
                n(!0))
              : (0, y.showToast)(a.message || "Đăng nhập thất bại", "error");
          } catch (e) {
            (console.error("Login error:", e),
              (0, y.showToast)("Có lỗi xảy ra, vui lòng thử lại!", "error"));
          }
        };
      return (0, t.jsxs)("div", {
        className: `gap-3 md:gap-3 ${N.Arial.className} p-[9px] md:p-4 bg-[rgb(227,125,125)] rounded-[10px]`,
        children: [
          (0, t.jsxs)("div", {
            className:
              "pt-5 pb-7 md:pb-65 flex flex-col rounded-[10px] bg-white items-center md:gap-1",
            children: [
              (0, t.jsx)("div", {
                className:
                  "w-1/3 md:w-1/4 rounded-full overflow-hidden border border-solid border-[rgb(227,125,125)]",
                children: (0, t.jsx)("img", {
                  className: "w-full object-cover h-full aspect-[1]",
                  src: e.image || void 0,
                  alt: "Image",
                }),
              }),
              (0, t.jsx)("h1", {
                className: `${i.greatVibes.className} text-[30px] md:text-[60px] mt-2 !leading-snug`,
                children: "Xác Nhận Tham Dự",
              }),
              (0, t.jsx)(a.motion.div, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: ` ${N.Arial.className} md:pb-2 text-[15px] md:text-[19px] px-6 md:px-20`,
                children: (0, t.jsx)("p", {
                  children:
                    "“Sau bao ngày tháng bên nhau, chúng mình quyết định gắn bó trọn đời. Rất mong nhận được lời chúc phúc từ bạn!”",
                }),
              }),
              (0, t.jsx)("form", {
                className: "mt-3",
                onSubmit: u,
                children: (0, t.jsxs)(a.motion.div, {
                  initial: { y: 30, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className:
                    "flex flex-wrap gap-2 md:gap-3 px-3 md:px-[70px] items-center justify-center",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[18px]",
                          children: "Tên của bạn:",
                        }),
                        (0, t.jsx)("input", {
                          required: !0,
                          className: `${w}`,
                          type: "text",
                          name: "name",
                          maxLength: 200,
                          placeholder: "Vui lòng điền tên của bạn",
                          value: c.name,
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            m((e) => ({ ...e, [t]: a }));
                          },
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[18px]",
                          children: "Lời chúc của bạn:",
                        }),
                        (0, t.jsx)("textarea", {
                          rows: 4,
                          required: !0,
                          name: "content",
                          className: `${w}`,
                          maxLength: 1e3,
                          placeholder: "Gửi lời chúc đến Dâu Rể nhé!",
                          value: c.content,
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            m((e) => ({ ...e, [t]: a }));
                          },
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[18px]",
                          children: "Bạn tham dự được chứ?",
                        }),
                        (0, t.jsxs)("select", {
                          className: `${w}`,
                          name: "is_tham_du",
                          required: !0,
                          value:
                            null === c.is_tham_du
                              ? ""
                              : c.is_tham_du
                                ? "true"
                                : "false",
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            m((e) => ({
                              ...e,
                              [t]:
                                "is_tham_du" === t
                                  ? "" === a
                                    ? null
                                    : "true" === a
                                  : a,
                            }));
                          },
                          children: [
                            (0, t.jsx)("option", {
                              value: "",
                              children: "Bạn Sẽ Tham Dự Cùng Chúng Mình Nhé?",
                            }),
                            (0, t.jsx)("option", {
                              value: "true",
                              children: "Mình Sẽ Tham Dự Nha",
                            }),
                            (0, t.jsx)("option", {
                              value: "false",
                              children:
                                "Tiếc Quá! Mình Không Thể Tham Dự Được Mất Rồi",
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.is_tham_du &&
                      (0, t.jsxs)("div", {
                        className: "w-full text-start",
                        children: [
                          (0, t.jsx)("label", {
                            className: "text-sm md:text-[18px]",
                            children: "Số người tham dự:",
                          }),
                          (0, t.jsx)("input", {
                            required: !0,
                            className: `${w}`,
                            type: "number",
                            name: "so_nguoi_tham_du",
                            min: 1,
                            placeholder: "Số lượng người đến tham dự",
                            value: c.so_nguoi_tham_du,
                            onChange: (e) => {
                              let { name: t, value: a, type: i } = e.target;
                              m((e) => ({
                                ...e,
                                [t]:
                                  "number" === i
                                    ? "" === a
                                      ? ""
                                      : Number(a)
                                    : a,
                              }));
                            },
                          }),
                        ],
                      }),
                    (0, t.jsx)(a.motion.button, {
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      type: "submit",
                      className:
                        "cursor-pointer focus:outline-none border-[1px] md:border-[2px] border-solid border-[rgb(161,98,98)] text-white bg-[rgb(161,98,98)] text-[14px] py-[12px] md:text-[18px] md:py-4 w-full rounded-[4px] font-semibold",
                      children: "Gửi lời chúc",
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, t.jsxs)(b.Dialog, {
            open: s,
            onClose: x,
            className: "relative z-10",
            children: [
              (0, t.jsx)(b.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(b.DialogPanel, {
                    transition: !0,
                    className:
                      "relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, t.jsx)("img", {
                        src: "./assets/ecards/wedding-19/background-7.png",
                        alt: "Background",
                        className:
                          "object-cover absolute top-0 left-0 w-full h-full z-1 pointer-events-none overflow-hidden",
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className:
                          "absolute md:right-5 right-2 top-2 md:top-5 z-20 rounded-full p-1 text-dark focus:outline-none",
                        onClick: x,
                        "aria-label": "Close",
                        children: (0, t.jsx)("svg", {
                          className: "h-7 w-7 md:h-12 md:w-12",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "relative z-19 py-8 md:py-16 pl-8 pr-6 md:pl-20 md:pr-12",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "flex justify-center items-start gap-3 md:gap-6",
                            children: (0, t.jsx)("div", {
                              className: "w-9/12",
                              children: (0, t.jsxs)("div", {
                                className:
                                  "flex justify-center items-center relative",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      " w-full aspect-[256/232] -rotate-6 border-[12px] border-b-[34px] md:border-[24px] md:border-b-[64px] border-solid border-white shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                                    children: (0, t.jsx)("img", {
                                      className: "w-full object-cover",
                                      src: e.thankyouImage || void 0,
                                      alt: "Thank you",
                                    }),
                                  }),
                                  (0, t.jsx)("img", {
                                    className:
                                      "w-[35%] object-cover absolute right-[-20%] bottom-[-5%]",
                                    src: "./assets/ecards/wedding-19/flower.png",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex flex-col pt-8 md:pt-14 text-[rgb(146,131,98)] text-center",
                            children: [
                              (0, t.jsx)("h3", {
                                className: `text-2xl md:text-5xl ${j.BeyondPerfectionRegular.className} !leading-loose`,
                                children: "Thank you!",
                              }),
                              (0, t.jsxs)("p", {
                                className:
                                  "text-[17px] md:text-3xl pt-1 md:pt-1 !leading-snug",
                                children: [
                                  "Cảm ơn bạn đã dành thời gian phản hồi.",
                                  (0, t.jsx)("br", {}),
                                  "Chúng mình vô cùng trân quý sự quan tâm của bạn.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
    }
    var k = e.i(514673);
    function C({ gift: e }) {
      let [s, l] = (0, r.useState)(!1),
        d = (0, r.useCallback)(() => {
          l(!1);
        }, []);
      return (0, t.jsxs)("div", {
        className: "relative bg-center bg-cover bg-no-repeat",
        children: [
          (0, t.jsx)("img", {
            src: e.backroundImage || void 0,
            alt: "Background",
            className:
              "object-cover absolute w-full h-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsx)("div", {
            className: "absolute inset-0 bg-black/70 z-[1] ",
          }),
          (0, t.jsxs)("div", {
            className:
              "z-[1] py-14 relative w-full flex flex-col gap-3 md:gap-7 text-white !leading-snug",
            children: [
              (0, t.jsx)(a.motion.h1, {
                initial: { y: -20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                className: `text-[35px] md:text-[70px] ${i.greatVibes.className}`,
                children: "Hộp Mừng Cưới",
              }),
              (0, t.jsx)(a.motion.p, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: `${n.sourceSans3.className} text-[16px] md:text-[20px] px-12 md:px-56`,
                children:
                  "Cám ơn tất cả các tình cảm mà mọi người đã dành cho 2 vợ chồng ạ ♥️",
              }),
              (e.groomQRCode ||
                e.groomBankAccountName?.toString().trim() ||
                e.groomBankAccountNumber?.toString().trim() ||
                e.groomBankName?.toString().trim() ||
                e.brideQRCode ||
                e.brideBankAccountName?.toString().trim() ||
                e.brideBankAccountNumber?.toString().trim() ||
                e.brideBankName?.toString().trim()) &&
                (0, t.jsx)("div", {
                  className: "flex justify-center items-center pt-4",
                  children: (0, t.jsx)(a.motion.div, {
                    initial: { scale: 0, opacity: 0 },
                    whileInView: { scale: 1, opacity: 1 },
                    viewport: { once: !0 },
                    transition: { duration: 0.5, delay: 0.4 },
                    onClick: () => l(!0),
                    className:
                      "cursor-pointer w-3/12 md:w-2/12 aspect-[72/67] flex justify-center items-center border border-white border-solid bg-[rgb(97,97,97)] rounded-md",
                    children: (0, t.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      viewBox: "0 0 100 100",
                      "enable-background": "new 0 0 100 100",
                      preserveAspectRatio: "none",
                      style: { width: "100%", height: "90%" },
                      fill: "#FFFFFF",
                      children: (0, t.jsx)("path", {
                        d: "M82.1,71.121l0.002-25.077l2.422-1.565c0.357-0.231,0.57-0.624,0.57-1.05V32.822c0-0.426-0.213-0.818-0.57-1.05  l-5.975-3.861l0.012-0.241c0.014-0.297,0.029-0.594,0.029-0.905c0-7.402-3.789-11-11.584-11c-1.742,0-3.535,0.373-5.332,1.11  l-0.121,0.05l-0.109-0.071L50.679,9.895c-0.406-0.262-0.951-0.262-1.357,0l-10.872,7.029l-0.121-0.05  c-1.796-0.736-3.59-1.109-5.333-1.109c-7.794,0-11.583,3.598-11.583,11c0,0.344,0.017,0.669,0.032,0.996l0.008,0.144l-0.121,0.084  l-5.854,3.784c-0.357,0.231-0.571,0.624-0.571,1.05v10.606c0,0.426,0.214,0.818,0.571,1.05l2.421,1.565v25.068  c-0.041,0.426,0.153,0.771,0.563,1.042l30.86,19.951c0.406,0.262,0.951,0.262,1.357,0l30.851-19.943  C81.873,71.913,82.092,71.632,82.1,71.121z M78.158,30.636l3.385,2.187L61.701,45.647l-3.637-10.942l0.592,0.374  c2.82,1.782,5.629,2.686,8.35,2.686c6.176,0,9.795-2.225,11.063-6.801L78.158,30.636z M46.395,26.766  c0-2.719,1.011-3.729,3.729-3.729c2.719,0,3.729,1.011,3.729,3.729s-1.01,3.729-3.729,3.729  C47.405,30.495,46.395,29.484,46.395,26.766z M49.233,36.499l-0.023,0.064l-4.251,12.011l-3.32,1.779l-1.142-5.157L46.764,32.3  l0.221,0.097c0.418,0.183,0.87,0.323,1.343,0.416l0.164,0.032L49.233,36.499z M51.33,32.91c1.117-0.135,2.068-0.475,2.828-1.012  l0.275-0.194l5.078,15.28l-1.555,3.427l-4.039-3.406L53.9,46.92l-2.838-13.978L51.33,32.91z M67.006,18.265  c7.982,0,9.084,4.085,9.084,8.5c0,5.102-1.545,8.5-9.084,8.5c-4.41,0-8.422-2.981-11.012-5.482l-0.115-0.111l0.053-0.151  c0.223-0.63,0.352-1.409,0.389-2.315l0.01-0.234l0.234-0.006c2.715-0.067,9.615-0.576,15.018-3.834  c0.59-0.356,0.779-1.127,0.424-1.717c-0.346-0.573-1.141-0.771-1.717-0.425c-4.945,2.983-11.465,3.426-14.039,3.478l-0.189,0.004  l-0.055-0.183c-0.014-0.044-0.023-0.09-0.035-0.135c-0.012-0.049-0.023-0.098-0.039-0.142l-0.053-0.152l0.115-0.111  C58.584,21.246,62.596,18.266,67.006,18.265z M50,12.433l8.986,5.809l-0.33,0.209c-1.385,0.875-2.766,1.958-4.105,3.219  l-0.152,0.144l-0.168-0.124c-1.039-0.765-2.422-1.152-4.107-1.152c-1.76,0-3.185,0.422-4.235,1.253l-0.17,0.135l-0.157-0.15  c-1.368-1.301-2.786-2.419-4.216-3.323l-0.33-0.209L50,12.433z M32.995,18.265c4.417,0,8.709,3.064,11.3,5.571l-0.234,0.594  c-2.545-0.065-9.215-0.774-14.087-3.715c-0.578-0.347-1.372-0.147-1.717,0.425c-0.355,0.591-0.165,1.361,0.425,1.718  c5.386,3.248,12.271,3.763,14.981,3.833l0.239,0.006l0.004,0.24c0.013,0.892,0.133,1.7,0.356,2.404l0.047,0.146l-0.11,0.107  c-2.643,2.587-6.731,5.67-11.204,5.67c-7.538,0-9.083-3.398-9.083-8.5C23.912,22.35,25.013,18.265,32.995,18.265z M21.842,30.636  l0.091,0.328c1.267,4.576,4.886,6.801,11.063,6.801c3.1,0,6.291-1.158,9.484-3.443l0.801-0.573l-5.222,10.747  c-0.063,0.132-0.101,0.289-0.111,0.48l-0.025,0.428L18.459,32.822L21.842,30.636z M29.503,76.317l-9.104-5.886V47.66l9.104,5.885  V76.317z M34.378,79.469l-2.375-1.536V55.161l2.375,1.535V79.469z M48.75,88.759l-11.872-7.675V58.313l11.872,7.675V88.759z   M48.75,63.01L17.406,42.748v-7.629l21.355,13.805l0.793,3.581c0.084,0.38,0.345,0.704,0.698,0.865  c0.349,0.161,0.771,0.148,1.113-0.033l2.308-1.238l5.076,3.281V63.01z M50,53.211l-3.821-2.471l0.395-0.194  c0.269-0.145,0.478-0.388,0.582-0.682L50.2,41.26l1.353,6.669c0.057,0.274,0.207,0.526,0.42,0.707l2.215,1.868L50,53.211z   M63.107,81.094L51.25,88.759V65.987l11.857-7.665V81.094z M67.982,77.942l-2.375,1.535V56.706l2.375-1.535V77.942z M79.602,70.432  l-9.119,5.895V53.555l9.119-5.895V70.432z M80.158,44.323L51.25,63.01v-7.63l4.938-3.192l1.42,1.197  c0.295,0.249,0.691,0.35,1.082,0.264c0.379-0.085,0.701-0.349,0.863-0.703l1.883-4.147l0.061-0.04l21.098-13.639v7.629  L80.158,44.323z",
                        fill: "#FFFFFF",
                      }),
                    }),
                  }),
                }),
            ],
          }),
          (0, t.jsxs)(b.Dialog, {
            open: s,
            onClose: d,
            className: "relative z-10",
            children: [
              (0, t.jsx)(b.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(b.DialogPanel, {
                    transition: !0,
                    className:
                      "bg-[rgb(255,255,255)] relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, t.jsx)("button", {
                        type: "button",
                        className:
                          "absolute md:right-5 right-2 top-2 md:top-5 z-20 rounded-full p-1 text-dark focus:outline-none",
                        onClick: d,
                        "aria-label": "Close",
                        children: (0, t.jsx)("svg", {
                          className: "h-7 w-7 md:h-9 md:w-9",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "relative z-19 py-4 px-4 md:px-4 flex flex-col items-center justify-center",
                        children: [
                          (0, t.jsx)("h1", {
                            className: `${i.greatVibes.className} text-center text-[50px] !leading-snug text-[rgb(5,70,88)] font-bold`,
                            children: "Hộp mừng cưới",
                          }),
                          (0, t.jsx)("h2", {
                            className: `${k.QuicksandRegular.className} text-center text-[18px] text-[rgb(5,70,88)] !leading-snug px-6`,
                            children:
                              "Vợ chồng xin cảm ơn tất cả tình cảm của mọi người ạ ♥",
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex justify-center items-center gap-3 md:gap-6 pt-5",
                            children: [
                              (e.groomQRCode ||
                                e.groomBankAccountName?.toString().trim() ||
                                e.groomBankAccountNumber?.toString().trim() ||
                                e.groomBankName?.toString().trim()) &&
                                (0, t.jsx)("div", {
                                  className:
                                    "w-1/2 flex flex-col gap-2 md:gap-8 bg-[rgb(255,255,255)]",
                                  children: (0, t.jsxs)("div", {
                                    className:
                                      "flex flex-col justify-center items-center py-3 md:py-3 px-2 md:px-3 gap-3 md:gap-2 rounded-md border-dashed border-[rgb(105,102,102)] border",
                                    children: [
                                      (0, t.jsx)("h2", {
                                        className: `text-[rgb(5,70,88)] ${k.QuicksandRegular.className} text-center text-[18px] md:text-[19px] !font-bold !leading-snug`,
                                        children: "MỪNG CƯỚI ĐẾN CHÚ RỂ",
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "w-[85%] md:w-[80%] overflow-hidden",
                                        children: (0, t.jsx)("img", {
                                          className:
                                            "w-full object-cover aspect-[161/161]",
                                          src: `${e.groomQRCode || void 0}`,
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: `flex flex-col gap-[2px] md:gap-1 w-full ${k.QuicksandRegular.className} text-center text-[12px] md:text-[15px]`,
                                        children: [
                                          e.groomBankAccountName
                                            ?.toString()
                                            .trim() &&
                                            (0, t.jsx)("p", {
                                              children: e.groomBankAccountName,
                                            }),
                                          e.groomBankAccountNumber
                                            ?.toString()
                                            .trim() &&
                                            (0, t.jsx)("p", {
                                              children:
                                                e.groomBankAccountNumber,
                                            }),
                                          e.groomBankName?.toString().trim() &&
                                            (0, t.jsx)("p", {
                                              children: e.groomBankName,
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              (e.brideQRCode ||
                                e.brideBankAccountName?.toString().trim() ||
                                e.brideBankAccountNumber?.toString().trim() ||
                                e.brideBankName?.toString().trim()) &&
                                (0, t.jsx)("div", {
                                  className:
                                    "w-1/2 flex flex-col gap-2 md:gap-8 bg-[rgb(255,255,255)]",
                                  children: (0, t.jsxs)("div", {
                                    className:
                                      "flex flex-col justify-center items-center py-3 md:py-3 px-2 md:px-3 gap-3 md:gap-2 rounded-md border-dashed border-[rgb(105,102,102)] border",
                                    children: [
                                      (0, t.jsx)("h2", {
                                        className: `text-[rgb(5,70,88)] ${k.QuicksandRegular.className} text-center text-[18px] md:text-[19px] !font-bold !leading-snug`,
                                        children: "MỪNG CƯỚI ĐẾN CÔ DÂU",
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "w-[85%] md:w-[80%] overflow-hidden",
                                        children: (0, t.jsx)("img", {
                                          className:
                                            "w-full object-cover aspect-[161/161]",
                                          src: `${e.brideQRCode || void 0}`,
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: `flex flex-col gap-[2px] md:gap-1 w-full ${k.QuicksandRegular.className} text-center text-[12px] md:text-[15px]`,
                                        children: [
                                          e.brideBankAccountName
                                            ?.toString()
                                            .trim() &&
                                            (0, t.jsx)("p", {
                                              children: e.brideBankAccountName,
                                            }),
                                          e.brideBankAccountNumber
                                            ?.toString()
                                            .trim() &&
                                            (0, t.jsx)("p", {
                                              children:
                                                e.brideBankAccountNumber,
                                            }),
                                          e.brideBankName?.toString().trim() &&
                                            (0, t.jsx)("p", {
                                              children: e.brideBankName,
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
    }
    function D({ albumImage: e }) {
      return (0, t.jsxs)("div", {
        className: "bg-[white]",
        children: [
          e.length > 0 &&
            (0, t.jsx)("div", {
              className: "pt-8 md:pt-14 px-2 md:pl-6 overflow-hidden",
              children: (0, t.jsx)(a.motion.h1, {
                initial: { x: -50, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: `${i.greatVibes.className} text-black text-[35px] md:text-6xl !leading-snug`,
                children: "Album Ảnh Cưới",
              }),
            }),
          e.length > 0 &&
            (0, t.jsx)("div", {
              className: "pt-6 md:pt-14 px-6 pb-16 md:pb-28 md:px-10",
              children: (0, t.jsx)("div", {
                className: "flex justify-center flex-wrap",
                children: (0, t.jsx)("div", {
                  className: "grid grid-cols-2 gap-3 md:gap-4 w-full",
                  children:
                    e &&
                    e.length > 0 &&
                    e.map((e, i) =>
                      (0, t.jsx)(
                        a.motion.div,
                        {
                          initial: { opacity: 0, scale: 0.9 },
                          whileInView: { opacity: 1, scale: 1 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5, delay: 0.1 * i },
                          children: (0, t.jsx)("img", {
                            className:
                              "h-auto max-w-full shadow-[0px_0px_0px_0px_rgba(0,0,0,0.3)]",
                            src: e,
                            alt: `Album h\xecnh cưới ${i}`,
                          }),
                        },
                        i,
                      ),
                    ),
                }),
              }),
            }),
        ],
      });
    }
    function T({ backgroundImage: e }) {
      return (0, t.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [
          (0, t.jsx)("img", {
            src: e || void 0,
            alt: "Banner",
            className: "object-cover w-full h-full",
          }),
          (0, t.jsx)("div", { className: "absolute inset-0 bg-black/60" }),
          (0, t.jsxs)("div", {
            className:
              "absolute top-[30%] w-full flex flex-col px-11 md:px-20 gap-3 md:gap-5 text-white !leading-snug",
            children: [
              (0, t.jsx)(a.motion.h1, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.3 },
                className: `text-[60px] md:text-[90px] ${i.greatVibes.className}`,
                children: "Thank You",
              }),
              (0, t.jsx)("p", {
                className: `${n.sourceSans3.className} text-[16px] md:text-[22px]`,
                children:
                  "“Chân thành cảm ơn gia đình, bạn bè và tất cả những ai đã cùng tụi mình viết nên một ngày đáng nhớ. Sự hiện diện và yêu thương của mọi người là món quà quý giá nhất.”",
              }),
            ],
          }),
        ],
      });
    }
    var I = e.i(56506);
    e.s(
      [
        "default",
        0,
        ({ refData: e, guestName: n, inviteeid: r }) => {
          let o = n && !Array.isArray(n) ? decodeURIComponent(n) : void 0;
          r && r > 0 && (0, l.setCookies)("ecard_my_user_invitee_id", r, 1825);
          let c = e?.isShowCountDown || !1,
            x = e?.formData || {},
            u = e?.imagesAlbum || [],
            h = x.chure || " ",
            p = x.chure_ttk,
            b = x.chure_stk,
            v = x.chure_ngh,
            j = x.codau || " ",
            N = x.codau_ttk,
            y = x.codau_stk,
            w = x.codau_ngh,
            k = x.nha_trai_ong ? "Ông: " + x.nha_trai_ong : "",
            S = x.nha_trai_ba ? "Bà: " + x.nha_trai_ba : "",
            M = x.nha_trai_dia_chi,
            V = x.nha_gai_ong ? "Ông: " + x.nha_gai_ong : "",
            $ = x.nha_gai_ba ? "Bà: " + x.nha_gai_ba : "",
            B = x.nha_gai_dia_chi,
            A = {
              title:
                e.formData.tieu_de_tiec_nha_trai?.trim() ||
                "Tiệc Cưới Nhà Trai",
              date: e.formData.tiec_nha_trai_ngay,
              time: e.formData.tiec_nha_trai_gio,
              place: e.formData.tiec_nha_trai_noi_to_chuc,
              address: x.tiec_nha_trai_dia_chi,
              image: (0, l.getImagesByFieldCode)("album4", u)[0],
            },
            F = {
              title:
                e.formData.tieu_de_tiec_nha_gai?.trim() || "Tiệc Cưới Nhà Gái",
              date: e.formData.tiec_nha_gai_ngay,
              time: e.formData.tiec_nha_gai_gio,
              place: e.formData.tiec_nha_gai_noi_to_chuc,
              address: x.tiec_nha_gai_dia_chi,
              image: (0, l.getImagesByFieldCode)("album5", u)[0],
            },
            z = {
              title: e.formData.le_thanh_hon_tieu_de?.trim() || "Lễ Thành Hôn",
              date: e.formData.le_thanh_hon_ngay,
              time: e.formData.le_thanh_hon_gio,
              place: e.formData.le_thanh_hon_noi_to_chuc,
              address: x.le_thanh_hon_dia_chi,
              image: (0, l.getImagesByFieldCode)("album6", u)[0],
            },
            L = {
              title: e.formData.le_vu_quy_tieu_de?.trim() || "Lễ Vu Quy",
              date: e.formData.le_vu_quy_ngay,
              time: e.formData.le_vu_quy_gio,
              place: e.formData.le_vu_quy_noi_to_chuc,
              address: x.le_vu_quy_dia_chi,
              image: (0, l.getImagesByFieldCode)("album7", u)[0],
            },
            P = e.formData.ngay_hon_le,
            H = e.formData.ngay_hon_le_am,
            R = e.formData.gio_hon_le,
            E = (0, l.getImagesByFieldCode)("banner_image_url", u)[0],
            O = (0, l.getImagesByFieldCode)("album2", u)[0],
            U = (0, l.getImagesByFieldCode)("album3", u)[0],
            G = (0, l.getImagesByFieldCode)("album8", u)[0],
            q = (0, l.getImagesByFieldCode)("album10", u),
            W = (0, l.getImagesByFieldCode)("footer_image_url", u)[0],
            Y = (0, l.getImagesByFieldCode)("chure_image_bank_url", u)[0],
            Q = (0, l.getImagesByFieldCode)("codau_image_bank_url", u)[0];
          return (0, t.jsxs)("div", {
            className:
              "begindowload max-w-4xl mx-auto text-center bg-[#F8FDFF]",
            children: [
              (0, t.jsx)(s, {
                banner: { backgroundImage: E, brideName: j, groomName: h },
              }),
              (0, t.jsxs)("div", {
                className:
                  "relative bg-center bg-cover bg-no-repeat flex flex-col",
                children: [
                  (0, t.jsx)("img", {
                    src: "./assets/ecards/wedding-19/background.webp",
                    alt: "Background",
                    className:
                      "object-cover absolute top-0 h-full left-0 w-full z-[1] pointer-events-none overflow-hidden",
                  }),
                  (0, t.jsx)("div", {
                    className: "z-[1] relative pt-10",
                    children: (0, t.jsx)(d, {
                      countdown: {
                        weddingDate: P,
                        weddingLunarDate: H,
                        weddingTime: R,
                        isShowCountDown: c,
                      },
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "z-[1] relative pb-5",
                    children: (0, t.jsxs)("div", {
                      className:
                        "flex flex-col py-12 md:py-24 px-6 md:px-10 gap-10 md:gap-20",
                      children: [
                        (0, t.jsx)(m, {
                          personInformation: {
                            title: "Nhà Trai",
                            image: O,
                            role: "Chú Rể",
                            name: h,
                            father: k,
                            mother: S,
                            address: M,
                          },
                        }),
                        (0, t.jsx)(m, {
                          personInformation: {
                            title: "Nhà Gái",
                            image: U,
                            role: "Cô Dâu",
                            name: j,
                            father: V,
                            mother: $,
                            address: B,
                          },
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  "z-[1] relative py-9 md:py-14 px-5 md:px-8 flex flex-col gap-6 md:gap-14",
                children: [
                  (0, t.jsx)(g, {
                    guest: { guestName: o, groomName: h, brideName: j },
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-9 md:gap-20",
                    children: [
                      (0, t.jsx)(a.motion.h2, {
                        initial: { y: -20, opacity: 0 },
                        whileInView: { y: 0, opacity: 1 },
                        viewport: { once: !0 },
                        transition: { duration: 0.6 },
                        className: `${i.greatVibes.className} text-[35px] md:text-6xl !leading-snug`,
                        children: "Sự Kiện Cưới",
                      }),
                      Object.values(A).some((e) => e) &&
                        (0, t.jsx)(f, { event: A }),
                      Object.values(F).some((e) => e) &&
                        (0, t.jsx)(f, { event: F }),
                      Object.values(z).some((e) => e) &&
                        (0, t.jsx)(f, { event: z }),
                      Object.values(L).some((e) => e) &&
                        (0, t.jsx)(f, { event: L }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "relative z-[1] px-5 py-4",
                children: (0, t.jsx)(_, {
                  confirm: {
                    id: e.id ?? 0,
                    guestName: o ?? "",
                    image: G,
                    thankyouImage: W,
                  },
                }),
              }),
              (Y ||
                p?.toString().trim() ||
                b?.toString().trim() ||
                v?.toString().trim() ||
                Q ||
                N?.toString().trim() ||
                y?.toString().trim() ||
                w?.toString().trim()) &&
                (0, t.jsx)("div", {
                  className: "relative z-[1]",
                  children: (0, t.jsx)(C, {
                    gift: {
                      backroundImage: E,
                      groomBankAccountName: p,
                      groomBankAccountNumber: b,
                      groomBankName: v,
                      groomQRCode: Y,
                      brideBankAccountName: N,
                      brideBankAccountNumber: y,
                      brideBankName: w,
                      brideQRCode: Q,
                    },
                  }),
                }),
              (0, t.jsx)("div", {
                className: "relative z-[1]",
                children: (0, t.jsx)(D, { albumImage: q }),
              }),
              (0, t.jsx)("div", {
                className: "relative z-[1]",
                children: (0, t.jsx)(T, { backgroundImage: W }),
              }),
              (0, t.jsx)(I.default, {
                urlMp3: x.audio,
                ecardMyUserId: Number(e.id),
              }),
            ],
          });
        },
      ],
      232762,
    );
  },
  900257,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(589997),
      i = e.i(56506),
      s = e.i(846932);
    e.i(283210);
    var n = e.i(889235),
      l = e.i(637443),
      r = e.i(902802);
    function d({ backgroundImage: e, groomFullName: a, brideFullName: i }) {
      return (0, t.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [
          (0, t.jsx)(s.motion.img, {
            initial: { scale: 1.2, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 1.5, ease: "easeOut" },
            src: e || void 0,
            alt: "Banner",
            className: "object-cover w-full",
          }),
          (0, t.jsx)("div", {
            className:
              "absolute w-full h-[60%] bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(2,2,2,0.6)]",
            style: {
              bottom: "-1px",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              WebkitTransform: "translateZ(0)",
            },
          }),
          (0, t.jsxs)("div", {
            className:
              "absolute bottom-[10%] w-full flex flex-col gap-6 md:gap-12 text-white",
            children: [
              (0, t.jsx)(s.motion.p, {
                initial: { y: 30, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.7 },
                className: `text-5xl md:text-[85px] ${r.UVNHoaTay1.className} !leading-snug`,
                children: "We get married!",
              }),
              (0, t.jsxs)(s.motion.div, {
                initial: { y: 50, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.5 },
                className: `${l.Summerfun.className} gap-4 md:gap-7 text-2xl md:text-5xl flex items-center justify-center tracking-wider`,
                children: [
                  (0, t.jsx)("h1", {
                    className: "font-medium !leading-relaxed",
                    children: a,
                  }),
                  (0, t.jsx)("span", {
                    className: `${n.BeyondPerfectionRegular.className} text-xl md:text-4xl`,
                    children: "&",
                  }),
                  (0, t.jsx)("h1", {
                    className: "font-medium !leading-relaxed",
                    children: i,
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    var o = e.i(677169),
      c = e.i(752392);
    let m = (e) =>
      e?.toString().trim()
        ? e
            .toString()
            .split(" ")
            .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
            .join(" ")
        : "Lễ Thành Hôn";
    function x({ invitation: e }) {
      var a;
      return (0, t.jsxs)("div", {
        className: `gap-6 md:gap-12 pt-16 md:pt-40 md:pb-16 bg-center bg-cover bg-no-repeat relative ${c.default.className} text-[rgb(77,51,5)]`,
        children: [
          (0, t.jsx)("img", {
            src: "./assets/ecards/wedding-9/background-top.png",
            alt: "Background",
            className:
              "object-cover absolute top-0 left-0 w-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsxs)("div", {
            className:
              "relative z-[1] flex flex-col justify-center items-center gap-3 md:gap-8",
            children: [
              (0, t.jsxs)("p", {
                className:
                  "text-[19px] md:text-4xl font-bold !leading-snug text-nowrap",
                children: [
                  "TRÂN TRỌNG KÍNH MỜI THAM DỰ ",
                  ((a = e.weddingName),
                  a?.toString().trim()
                    ? a.toString().toUpperCase()
                    : "LỄ THÀNH HÔN"),
                ],
              }),
              e.guestName && "" !== e.guestName.trim()
                ? (0, t.jsxs)("div", {
                    className:
                      "flex flex-col justify-center items-center gap-2 md:gap-5",
                    children: [
                      (0, t.jsx)("p", {
                        className: "text-[16px] md:text-3xl",
                        children: "Trân trọng kính mời",
                      }),
                      (0, t.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, t.jsx)("h1", {
                          className: `px-6 text-red-700 text-2xl md:text-6xl ${o.ViceroyJF.className} border-b-3 border-dotted border-gray-400`,
                          children: e.guestName,
                        }),
                      }),
                      (0, t.jsxs)("p", {
                        className: "text-[16px] md:text-3xl",
                        children: ["đến dự buổi ", m(e.weddingName), " của"],
                      }),
                    ],
                  })
                : (0, t.jsx)("div", {
                    className:
                      "flex flex-col justify-center items-center gap-3 md:gap-8",
                    children: (0, t.jsxs)("p", {
                      className: "text-[15px] md:text-3xl",
                      children: [
                        "Trân trọng kính mời đến dự buổi ",
                        m(e.weddingName),
                        " của",
                      ],
                    }),
                  }),
            ],
          }),
        ],
      });
    }
    var u = e.i(302553);
    function h({ brideGroom: e }) {
      return (0, t.jsxs)("div", {
        className: "bg-center bg-cover bg-no-repeat relative ",
        children: [
          (0, t.jsx)("img", {
            src: "./assets/ecards/wedding-9/background.png",
            alt: "Background",
            className:
              "object-cover absolute w-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsxs)("div", {
            className: `gap-3 z-[1] relative md:gap-6 flex pt-16 pb-6 ${u.default.className} text-[rgb(134,105,55)]`,
            children: [
              (0, t.jsxs)("div", {
                className: "w-1/2 flex flex-col",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "flex flex-col justify-center items-center pb-8 md:pb-14",
                    children: [
                      (0, t.jsx)("h2", {
                        className: `text-[rgb(77,51,5)] ${r.UVNHoaTay1.className} text-[44px] md:text-[90px] !leading-snug`,
                        children: "Chú rể",
                      }),
                      (0, t.jsx)("h1", {
                        className: "text-[25px] md:text-[55px] !leading-snug",
                        children: e.groomFullName?.toUpperCase(),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "w-full overflow-hidden shadow-[0_4px_10px_-5px_rgb(96,96,96)]",
                    children: (0, t.jsx)("img", {
                      src: e.groomImage || void 0,
                      alt: "Bride",
                      className: "object-cover w-full aspect-[205/336]",
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "w-1/2 flex flex-col",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "w-full overflow-hidden shadow-[0_4px_10px_-5px_rgb(96,96,96)]",
                    children: (0, t.jsx)("img", {
                      src: e.brideImage || void 0,
                      alt: "Groom",
                      className: "object-cover w-full aspect-[205/336]",
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex flex-col justify-center items-center pb-8 md:pb-14",
                    children: [
                      (0, t.jsx)("h2", {
                        className: `text-[rgb(77,51,5)] ${r.UVNHoaTay1.className} text-[44px] md:text-[90px] !leading-snug`,
                        children: "Cô dâu",
                      }),
                      (0, t.jsx)("h1", {
                        className: "text-[25px] md:text-[55px] !leading-snug",
                        children: e.brideFullName?.toUpperCase(),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    var p = e.i(788562);
    function g({ loveJourney: e }) {
      return (0, t.jsxs)("div", {
        className: "flex flex-col gap-12 md:gap-20",
        children: [
          (0, t.jsxs)("div", {
            className: "bg-center bg-cover bg-no-repeat relative",
            children: [
              (0, t.jsx)("img", {
                src: "./assets/ecards/wedding-9/background.png",
                alt: "Background",
                className:
                  "object-cover absolute w-full z-[1] pointer-events-none overflow-hidden",
              }),
              (0, t.jsx)("div", {
                className: "relative z-[1] px-4 md:px-11 pt-2 md:pt-8",
                children: (0, t.jsx)("h3", {
                  className: `${p.default.className} text-[rgb(134,105,55)] text-[14px] md:text-[28px] text-justify tracking-[0] md:tracking-[0.025em] !leading-[1.6]`,
                  children:
                    e.note ||
                    "Tình yêu của anh và em là một hành trình kỳ diệu, vượt qua bao thử thách để cùng nhau bước đến ngày trọng đại – đám cưới của chúng mình. Đám cưới này là lời cam kết chân thành, là sự bắt đầu của một chương mới – nơi chúng ta cùng vun đắp tổ ấm, cùng sẻ chia mọi vui buồn và cùng nắm tay nhau đi đến cuối con đường mang tên hạnh phúc.",
                }),
              }),
            ],
          }),
          (0, t.jsx)("div", {
            className: "w-full overflow-hidden relative z-[1]",
            children: (0, t.jsx)("img", {
              src: e.imageMain || void 0,
              alt: "Image",
              className: "object-cover w-full",
            }),
          }),
        ],
      });
    }
    var f = e.i(25626),
      b = e.i(808587);
    function v({ mainInfo: e }) {
      let i = e.brideName?.toString().trim().charAt(0).toUpperCase() || "",
        n = e.groomName?.toString().trim().charAt(0).toUpperCase() || "",
        l = { d: " ", m: " ", y: " " };
      if (e.weddingDate)
        try {
          ((l.d = (0, a.getDatePart)(e.weddingDate, "d") || " "),
            (l.m = (0, a.getDatePart)(e.weddingDate, "m") || " "),
            (l.y = (0, a.getDatePart)(e.weddingDate, "y") || " "));
        } catch {}
      return (0, t.jsxs)("div", {
        className: `gap-24 md:gap-40 pt-14 pb-32 md:pb-72 md:pt-36 px-9 md:px-20 flex flex-col bg-center bg-cover bg-no-repeat relative ${f.default.className} text-[rgb(77,51,5)]`,
        children: [
          (0, t.jsx)("img", {
            src: "./assets/ecards/wedding-9/thiepmoi.png",
            alt: "Background",
            className:
              "object-cover absolute top-0 left-0 w-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsxs)("div", {
            className: "flex z-[1]",
            children: [
              (0, t.jsxs)(s.motion.div, {
                initial: { x: -30, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "w-1/2 text-[14px] md:text-[26px] flex flex-col gap-1 md:gap-2",
                children: [
                  (0, t.jsx)("h3", {
                    className: "!font-bold text-[14px] md:text-[28px]",
                    children: "NHÀ TRAI",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-[1px] md:gap-[2px]",
                    children: [
                      e.groomFather?.toString().trim() &&
                        (0, t.jsx)("p", {
                          className: "w-full text-[rgb(134,105,55)]",
                          children: e.groomFather.toString().trim(),
                        }),
                      e.groomMother?.toString().trim() &&
                        (0, t.jsx)("p", {
                          className: "w-full text-[rgb(134,105,55)]",
                          children: e.groomMother.toString().trim(),
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)(s.motion.div, {
                initial: { x: 30, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "w-1/2 text-[14px] md:text-[26px] flex flex-col gap-1 md:gap-2",
                children: [
                  (0, t.jsx)("h3", {
                    className: "font-bold text-[14px] md:text-[28px]",
                    children: "NHÀ GÁI",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-[1px] md:gap-[2px]",
                    children: [
                      e.brideFather?.toString().trim() &&
                        (0, t.jsx)("p", {
                          className: "w-full text-[rgb(134,105,55)]",
                          children: e.brideFather.toString().trim(),
                        }),
                      e.brideMother?.toString().trim() &&
                        (0, t.jsx)("p", {
                          className: "w-full text-[rgb(134,105,55)]",
                          children: e.brideMother.toString().trim(),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className:
              "flex z-[1] justify-center flex-col items-center gap-3 md:gap-10 px-8 md:px-10",
            children: [
              (0, t.jsxs)("div", {
                className: "relative z-[1] flex",
                children: [
                  (0, t.jsx)("h1", {
                    className: `${r.UVNHoaTay1.className} relative text-[72px] md:text-[160px] text-[rgb(195,184,162)] !leading-snug`,
                    children: i,
                  }),
                  (0, t.jsx)("h1", {
                    className: `left-[-10px] md:left-[-19px] top-[-14px] md:top-[-28px] absolute ${b.TimesNewRoman.className} text-[72px] md:text-[160px] text-[rgb(195,184,162)] !leading-snug`,
                    children: n,
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex flex-col gap-2 md:gap-6",
                children: [
                  (0, t.jsx)("h2", {
                    className: `${f.default.className} text-[rgb(134,105,55)] text-[14px] md:text-3xl`,
                    children: "ĐƯỢC TỔ CHỨC TẠI",
                  }),
                  (0, t.jsx)("h1", {
                    className: `text-[24px] md:text-6xl ${f.default.className} text-[rgb(77,51,5)] !leading-snug`,
                    children: e.weddingVenueName ?? "",
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className:
                  "text-[rgb(77,51,5)] text-[16px] md:text-[36px] !leading-relaxed font-semibold",
                children: e.weddingVenueAddress ?? "",
              }),
              (0, t.jsxs)("div", {
                className: "flex flex-col gap-3 md:gap-5 w-full",
                children: [
                  (0, t.jsx)("h2", {
                    className: `${f.default.className} text-[rgb(134,105,55)] text-[14px] md:text-3xl`,
                    children: "VÀO LÚC",
                  }),
                  (0, t.jsx)("h1", {
                    className: `text-[20px] md:text-[44px] ${f.default.className} font-bold text-[rgb(77,51,5)] !leading-snug`,
                    children: (() => {
                      if (!e.weddingTime) return " ";
                      try {
                        return (0, t.jsx)(t.Fragment, {
                          children: e.weddingTime.slice(0, 5),
                        });
                      } catch {
                        return " ";
                      }
                    })(),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex text-[22px] md:text-5xl justify-center !leading-tight",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "border-y-2 md:border-y-4 py-2 md:py-5 border-solid border-[rgb(134,105,55)]",
                        children: (0, t.jsx)("h1", {
                          className:
                            "border-r md:border-r-2 text-nowrap border-[rgb(134,105,55)] pr-2 md:pr-4",
                          children: (() => {
                            try {
                              var t;
                              let a;
                              if (!e.weddingDate) return " ";
                              return (
                                (t = e.weddingDate.toString()),
                                (a = new Date(t).getDay()),
                                0 === a ? "CHỦ NHẬT" : `THỨ ${a + 1}`
                              );
                            } catch {
                              return " ";
                            }
                          })(),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "border-y-2 md:border-y-4 py-2 md:py-5 border-solid border-[rgb(134,105,55)]",
                        children: (0, t.jsxs)("h1", {
                          className:
                            "border-l-2 md:border-l-3 text-nowrap border-[rgb(134,105,55)] pl-2 md:pl-4",
                          children: [l.d, ".", l.m, ".", l.y],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.googleMap &&
                (0, t.jsx)("div", {
                  className: "mt-3 md:mt-5",
                  children: (0, t.jsxs)("a", {
                    href: e.googleMap,
                    target: "_blank",
                    className:
                      "gap-2 md:gap-4 justify-center items-center flex flex-col cursor-pointer select-none",
                    children: [
                      (0, t.jsx)("div", {
                        className: "w-[15%] md:w-[20%]",
                        children: (0, t.jsx)("div", {
                          className: "overflow-hidden w-full",
                          children: (0, t.jsx)("img", {
                            src: "./assets/ecards/wedding-9/icon-location.png",
                            className: "w-full object-cover",
                          }),
                        }),
                      }),
                      (0, t.jsx)("h1", {
                        className:
                          "text-[18px] md:text-[40px] text-[rgb(134,105,55)] font-bold !leading-snug",
                        children: "CHỈ ĐƯỜNG",
                      }),
                    ],
                  }),
                }),
            ],
          }),
        ],
      });
    }
    var j = e.i(562435);
    function N({ calendarInfo: e }) {
      let { date: a, backgroundImage: i } = e,
        n = a.getFullYear(),
        l = a.getMonth();
      a.getDay();
      let r = new Date(n, l + 1, 0).getDate(),
        d = new Date(n, l, 1).getDay(),
        o = 0 === d ? 6 : d - 1,
        c = Array.from({ length: 7 * Math.ceil((r + o) / 7) }, (e, t) => {
          let a = t - o + 1;
          return a > 0 && a <= r ? a : null;
        }),
        m = [];
      for (let e = 0; e < c.length; e += 7) m.push(c.slice(e, e + 7));
      return (0, t.jsxs)("div", {
        className:
          "gap-6 md:gap-6 pb-12 md:pb-28 flex flex-col bg-center bg-cover bg-no-repeat relative text-white",
        children: [
          (0, t.jsx)("img", {
            src: i || void 0,
            alt: "Background",
            className:
              "brightness-[50%] object-cover absolute w-full h-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsx)("div", {
            className: "z-[1] px-10 md:px-16",
            children: (0, t.jsxs)(s.motion.div, {
              initial: { scale: 0.9, opacity: 0 },
              whileInView: { scale: 1, opacity: 1 },
              viewport: { once: !0 },
              transition: { duration: 0.8 },
              children: [
                (0, t.jsxs)(s.motion.h1, {
                  initial: { y: -20, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className: `${j.UVNHoaTay2.className} text-[38px] md:text-8xl pt-6 md:pt-16 pb-4 md:pb-6 !leading-snug`,
                  children: ["Tháng ", e.date.getMonth() + 1],
                }),
                (0, t.jsxs)("table", {
                  className: "w-full table-auto",
                  children: [
                    (0, t.jsx)("thead", {
                      children: (0, t.jsxs)("tr", {
                        className: "text-[14px] md:text-3xl",
                        children: [
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "MON",
                          }),
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "TUE",
                          }),
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "WED",
                          }),
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "THUR",
                          }),
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "FRI",
                          }),
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "SAT",
                          }),
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "SUN",
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("tbody", {
                      children: m.map((e, i) =>
                        (0, t.jsx)(
                          "tr",
                          {
                            className: "text-center text-[16px] md:text-[34px]",
                            children: e.map((e, i) => {
                              let r =
                                e &&
                                new Date(n, l, e).toDateString() ===
                                  a.toDateString();
                              return (0, t.jsxs)(
                                "td",
                                {
                                  className: `text-center p-2 md:py-5 md:px-3 ${r ? "relative" : ""}`,
                                  children: [
                                    e || "",
                                    r &&
                                      (0, t.jsx)(s.motion.div, {
                                        initial: { scale: 0 },
                                        whileInView: { scale: 1 },
                                        viewport: { once: !0 },
                                        transition: {
                                          duration: 0.5,
                                          delay: 0.5,
                                          type: "spring",
                                        },
                                        className:
                                          "absolute inset-0 flex items-center justify-center",
                                        children: (0, t.jsx)("div", {
                                          className:
                                            "w-[37px] md:w-[77px] h-[31px] md:h-[65px]",
                                          children: (0, t.jsx)("div", {
                                            className:
                                              "w-full h-full bg-[url('/assets/ecards/wedding-9/heart.png')] bg-no-repeat bg-center bg-cover scale-110",
                                          }),
                                        }),
                                      }),
                                  ],
                                },
                                i,
                              );
                            }),
                          },
                          i,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    var y = e.i(860348);
    function w({ note: e, albumImage: a }) {
      return (0, t.jsxs)("div", {
        children: [
          (0, t.jsx)("div", {
            className: "relative",
            children: (0, t.jsxs)("div", {
              className:
                "bg-center bg-cover bg-no-repeat relative overflow-hidden",
              children: [
                (0, t.jsx)("img", {
                  src: "./assets/ecards/wedding-9/background.png",
                  alt: "Background",
                  className:
                    "object-cover absolute w-full z-[1] pointer-events-none",
                }),
                (0, t.jsx)("div", {
                  className: "relative z-[1] px-3 md:px-12 py-8 md:py-12",
                  children: (0, t.jsx)("h3", {
                    className: `${y.default.className} text-[rgb(134,105,55)] text-[15px] md:text-[29px] text-center tracking-normal md:tracking-[0.025em] !leading-[1.6]`,
                    children:
                      e ||
                      "Từng tấm ảnh là một lát cắt thời gian đầy cảm xúc – tất cả hòa quyện tạo nên bản giao hưởng ngọt ngào của tình yêu, niềm vui và những kỷ niệm mà chúng ta sẽ mãi nâng niu suốt cuộc đời.",
                  }),
                }),
              ],
            }),
          }),
          (0, t.jsx)("div", {
            className: "bg-[rgb(162,149,120)]",
            children:
              a.length > 0 &&
              (0, t.jsx)("div", {
                className: "p-5 md:p-10",
                children: (0, t.jsx)("div", {
                  className: "flex justify-center flex-wrap",
                  children: (0, t.jsx)("div", {
                    className: "grid grid-cols-2 gap-2 md:gap-4 w-full",
                    children:
                      a &&
                      a.length > 0 &&
                      a.map((e, a) =>
                        (0, t.jsx)(
                          s.motion.div,
                          {
                            initial: { opacity: 0, scale: 0.9 },
                            whileInView: { opacity: 1, scale: 1 },
                            viewport: { once: !0 },
                            transition: { duration: 0.5, delay: 0.1 * a },
                            children: (0, t.jsx)("img", {
                              className:
                                "h-auto max-w-full shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                              src: e,
                              alt: `Album h\xecnh cưới ${a}`,
                            }),
                          },
                          a,
                        ),
                      ),
                  }),
                }),
              }),
          }),
        ],
      });
    }
    var _ = e.i(854878),
      k = e.i(661529),
      C = e.i(472317),
      D = e.i(271645),
      T = e.i(33160);
    let I =
      "w-full text-[14px] md:text-[30px] border mt-2 md:border-2 border-solid border-[rgb(77,51,5)] bg-transparent placeholder:text-[rgb(77,51,5)] px-2 py-2 md:px-5 md:py-4 focus:outline-none focus-visible:outline-none";
    function S({ confirm: e }) {
      let [i, l] = (0, D.useState)(!1),
        [r, d] = (0, D.useState)(!1),
        [o, c] = (0, D.useState)({
          id: 0,
          ecard_my_user_id: Number(e.id),
          ecard_my_user_invitee_id: 0,
          name: e.guestName ?? "",
          content: "",
          is_tham_du: null,
          so_nguoi_tham_du: void 0,
        }),
        m = (0, D.useCallback)(() => {
          d(!1);
        }, []),
        x = (0, D.useCallback)(() => {
          l(!1);
        }, []),
        u = async (e) => {
          e.preventDefault();
          try {
            let e = (0, a.getCookies)("ecard_my_user_invitee_id"),
              t = { ...o };
            ((t.ecard_my_user_invitee_id =
              e && !isNaN(Number(e)) ? Number(e) : 0),
              (void 0 === t.so_nguoi_tham_du || !0 !== t.is_tham_du) &&
                (t.so_nguoi_tham_du = 0));
            let i = await (0, C.AddCongratulations)(t);
            i.success
              ? ((0, a.setCookies)(
                  "ecard_my_user_invitee_id",
                  i.data.data.invitee_id,
                  1825,
                ),
                l(!0))
              : (0, T.showToast)(i.message || "Đăng nhập thất bại", "error");
          } catch (e) {
            (console.error("Login error:", e),
              (0, T.showToast)("Có lỗi xảy ra, vui lòng thử lại!", "error"));
          }
        };
      return (0, t.jsxs)("div", {
        className: `gap-3 md:gap-3 flex flex-col bg-center bg-cover bg-no-repeat relative ${k.default.className} text-[rgb(134,105,55)]`,
        children: [
          (0, t.jsx)("img", {
            src: "./assets/ecards/wedding-18/background-5.png",
            alt: "Background",
            className:
              "object-cover absolute w-full md:h-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsxs)("div", {
            className: "z-[1] pt-16 md:pt-52 pb-20 md:pb-40",
            children: [
              (0, t.jsx)(s.motion.div, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "pb-2 md:pb-8 text-[13px] md:text-[30px] px-6 md:px-14",
                children: (0, t.jsxs)("p", {
                  children: [
                    "Hãy xác nhận sự có mặt của bạn để chúng mình",
                    (0, t.jsx)("br", {}),
                    "chuẩn bị đón tiếp một cách chu đáo nhất.",
                    (0, t.jsx)("br", {}),
                    "Trân trọng!",
                  ],
                }),
              }),
              (0, t.jsx)("form", {
                className: "",
                onSubmit: u,
                children: (0, t.jsxs)(s.motion.div, {
                  initial: { y: 30, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className:
                    "flex flex-wrap gap-3 md:gap-7 px-6 md:px-16 items-center justify-center",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[28px]",
                          children: "Tên của bạn:",
                        }),
                        (0, t.jsx)("input", {
                          required: !0,
                          className: `${I} rounded-full`,
                          type: "text",
                          name: "name",
                          maxLength: 200,
                          placeholder: "Vui lòng điền tên của bạn",
                          value: o.name,
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            c((e) => ({ ...e, [t]: a }));
                          },
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[28px]",
                          children: "Lời chúc của bạn:",
                        }),
                        (0, t.jsx)("textarea", {
                          rows: 4,
                          required: !0,
                          name: "content",
                          className: `${I} rounded-[22px] md:rounded-[40px]`,
                          maxLength: 1e3,
                          placeholder: "Gửi lời chúc đến Dâu Rể nhé!",
                          value: o.content,
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            c((e) => ({ ...e, [t]: a }));
                          },
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[28px]",
                          children: "Bạn tham dự được chứ?",
                        }),
                        (0, t.jsxs)("select", {
                          className: `${I} rounded-full`,
                          name: "is_tham_du",
                          required: !0,
                          value:
                            null === o.is_tham_du
                              ? ""
                              : o.is_tham_du
                                ? "true"
                                : "false",
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            c((e) => ({
                              ...e,
                              [t]:
                                "is_tham_du" === t
                                  ? "" === a
                                    ? null
                                    : "true" === a
                                  : a,
                            }));
                          },
                          children: [
                            (0, t.jsx)("option", {
                              value: "",
                              children: "Bạn Sẽ Tham Dự Cùng Chúng Mình Nhé?",
                            }),
                            (0, t.jsx)("option", {
                              value: "true",
                              children: "Mình Sẽ Tham Dự Nha",
                            }),
                            (0, t.jsx)("option", {
                              value: "false",
                              children:
                                "Tiếc Quá! Mình Không Thể Tham Dự Được Mất Rồi",
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.is_tham_du &&
                      (0, t.jsxs)("div", {
                        className: "w-full text-start",
                        children: [
                          (0, t.jsx)("label", {
                            className: "text-sm md:text-[28px]",
                            children: "Số người tham dự:",
                          }),
                          (0, t.jsx)("input", {
                            required: !0,
                            className: `${I} rounded-full`,
                            type: "number",
                            name: "so_nguoi_tham_du",
                            min: 1,
                            placeholder: "Số lượng người đến tham dự",
                            value: o.so_nguoi_tham_du,
                            onChange: (e) => {
                              let { name: t, value: a, type: i } = e.target;
                              c((e) => ({
                                ...e,
                                [t]:
                                  "number" === i
                                    ? "" === a
                                      ? ""
                                      : Number(a)
                                    : a,
                              }));
                            },
                          }),
                        ],
                      }),
                    (0, t.jsx)(s.motion.button, {
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      type: "submit",
                      className:
                        "cursor-pointer focus:outline-none border-[1px] md:border-[2px] border-solid border-[rgb(146,131,98)] text-white bg-[rgb(162,149,120)] rounded-full shadow-md shadow-black/25 focus:ring-4 font-semibold text-[19px] py-1 md:text-[40px] md:py-6 w-full",
                      children: "GỬI LỜI CHÚC",
                    }),
                    e.qrImage &&
                      (0, t.jsx)(s.motion.button, {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        type: "button",
                        onClick: () => d(!0),
                        className:
                          "cursor-pointer focus:outline-none border-[1px] md:border-[2px] border-solid border-[rgb(146,131,98)] text-white bg-[rgb(162,149,120)] rounded-full shadow-md shadow-black/25 font-semibold text-[19px] py-1 md:text-[40px] md:py-6 w-full",
                        children: "GỬI QUÀ MỪNG CƯỚI",
                      }),
                  ],
                }),
              }),
            ],
          }),
          (0, t.jsxs)(_.Dialog, {
            open: r,
            onClose: m,
            className: "relative z-10",
            children: [
              (0, t.jsx)(_.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(_.DialogPanel, {
                    transition: !0,
                    className:
                      "relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, t.jsx)("img", {
                        src: "./assets/ecards/wedding-18/background-6.png",
                        alt: "Background",
                        className:
                          "object-cover absolute top-0 left-0 w-full h-full z-1 pointer-events-none overflow-hidden",
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className:
                          "absolute md:right-5 right-2 top-2 md:top-5 z-20 rounded-full p-1 text-dark focus:outline-none",
                        onClick: m,
                        "aria-label": "Close",
                        children: (0, t.jsx)("svg", {
                          className: "h-7 w-7 md:h-12 md:w-12",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "relative z-19 py-9 md:py-14 px-4 md:px-7",
                        children: (0, t.jsxs)("div", {
                          className:
                            "flex justify-center items-center gap-3 md:gap-6",
                          children: [
                            (0, t.jsx)("div", {
                              className: "w-4/12",
                              children: (0, t.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, t.jsx)("div", {
                                  className: "w-full",
                                  children: (0, t.jsx)("img", {
                                    className: "w-full object-cover",
                                    src: e.qrImage || void 0,
                                    alt: "QR Code",
                                  }),
                                }),
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "w-8/12",
                              children: (0, t.jsxs)("div", {
                                className: `flex flex-col text-[rgb(146,131,98)] gap-2 md:gap-3 ${k.default.className}`,
                                children: [
                                  (0, t.jsx)("h2", {
                                    className:
                                      "text-[17px] md:text-[33px] border-b-2 md:border-b-4 border-solid border-[rgb(146,131,98)] !leading-relaxed",
                                    children: e.bankAccountName,
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                      (0, t.jsx)("p", {
                                        className: "md:text-[30px]",
                                        children: e.bankName,
                                      }),
                                      (0, t.jsx)("p", {
                                        className: "md:text-[30px]",
                                        children: e.bankAccountNumber,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          (0, t.jsxs)(_.Dialog, {
            open: i,
            onClose: x,
            className: "relative z-10",
            children: [
              (0, t.jsx)(_.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(_.DialogPanel, {
                    transition: !0,
                    className:
                      "relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, t.jsx)("img", {
                        src: "./assets/ecards/wedding-18/background-7.png",
                        alt: "Background",
                        className:
                          "object-cover absolute top-0 left-0 w-full h-full z-1 pointer-events-none overflow-hidden",
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className:
                          "absolute md:right-5 right-2 top-2 md:top-5 z-20 rounded-full p-1 text-dark focus:outline-none",
                        onClick: x,
                        "aria-label": "Close",
                        children: (0, t.jsx)("svg", {
                          className: "h-7 w-7 md:h-12 md:w-12",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "relative z-19 py-8 md:py-16 pl-8 pr-6 md:pl-20 md:pr-12",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "flex justify-center items-start gap-3 md:gap-6",
                            children: [
                              (0, t.jsx)("div", {
                                className: "w-9/12",
                                children: (0, t.jsxs)("div", {
                                  className:
                                    "flex justify-center items-center relative",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        " w-full aspect-[256/232] -rotate-6 border-[12px] border-b-[34px] md:border-[24px] md:border-b-[64px] border-solid border-white shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                                      children: (0, t.jsx)("img", {
                                        className: "w-full object-cover h-full",
                                        src: e.thankyouImage || void 0,
                                        alt: "Thank you",
                                      }),
                                    }),
                                    (0, t.jsx)("img", {
                                      className:
                                        "w-[35%] object-cover absolute right-[-20%] bottom-[-5%]",
                                      src: "./assets/ecards/wedding-18/flower.png",
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: `pt-4 w-3/12 flex flex-col text-[rgb(146,131,98)] gap-2 md:gap-3 ${k.default.className} justify-center items-end`,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "flex",
                                    children: (0, t.jsx)("p", {
                                      className:
                                        "px-3 text-3xl md:text-6xl border-b-2 md:border-b-4 border-solid border-[rgb(146,131,98)] !leading-relaxed",
                                      children: (() => {
                                        if (!e.weddingDate) return " ";
                                        try {
                                          return (0, a.getDatePart)(
                                            e.weddingDate,
                                            "d",
                                          );
                                        } catch {
                                          return " ";
                                        }
                                      })(),
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "flex",
                                    children: (0, t.jsx)("p", {
                                      className: "px-3 text-3xl md:text-6xl",
                                      children: (() => {
                                        if (!e.weddingDate) return " ";
                                        try {
                                          return (0, a.getDatePart)(
                                            e.weddingDate,
                                            "m",
                                          );
                                        } catch {
                                          return " ";
                                        }
                                      })(),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex flex-col pt-8 md:pt-14 text-[rgb(146,131,98)] text-center",
                            children: [
                              (0, t.jsx)("h3", {
                                className: `text-2xl md:text-5xl ${n.BeyondPerfectionRegular.className} !leading-loose`,
                                children: "Thank you!",
                              }),
                              (0, t.jsxs)("p", {
                                className:
                                  "text-[17px] md:text-3xl pt-1 md:pt-1 !leading-snug",
                                children: [
                                  "Cảm ơn bạn đã dành thời gian phản hồi.",
                                  (0, t.jsx)("br", {}),
                                  "Chúng mình vô cùng trân quý sự quan tâm của bạn.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
    }
    var M = e.i(883907);
    function V({ countdown: e }) {
      let [a, i] = (0, D.useState)({ days: 0, hours: 0, min: 0, sec: 0 }),
        s = (0, D.useMemo)(
          () =>
            e.weddingDate
              ? new Date(`${e.weddingDate}T${e.weddingTime || "00:00:00"}`)
              : null,
          [e.weddingDate, e.weddingTime],
        );
      return (
        (0, D.useEffect)(() => {
          if (!s) return;
          let e = () => {
            let e = s.getTime() - Date.now();
            if (e <= 0) return void i({ days: 0, hours: 0, min: 0, sec: 0 });
            let t = Math.floor(e / 864e5),
              a = Math.floor((e / 36e5) % 24);
            i({
              days: t,
              hours: a,
              min: Math.floor((e / 6e4) % 60),
              sec: Math.floor((e / 1e3) % 60),
            });
          };
          e();
          let t = setInterval(e, 1e3);
          return () => clearInterval(t);
        }, [s]),
        (0, t.jsxs)("div", {
          className:
            "bg-[rgb(181,168,146)] flex flex-col text-white pt-10 md:pt-20 pb-14 md:pb-28 px-16 md:px-28 gap-4 md:gap-8",
          children: [
            (0, t.jsx)("h1", {
              className: `${r.UVNHoaTay1.className} text-[59px] md:text-[130px] !leading-snug`,
              children: "Countdown",
            }),
            (0, t.jsx)("div", {
              className: "flex justify-start",
              children: [
                { value: a.days },
                { value: a.hours },
                { value: a.min },
                { value: a.sec },
              ].map((e, a, i) =>
                (0, t.jsxs)(
                  D.default.Fragment,
                  {
                    children: [
                      (0, t.jsx)("div", {
                        className: `w-1/4 text-center ${M.FTVVIPHastegi.className}`,
                        children: (0, t.jsx)("p", {
                          className: "text-[46px] md:text-8xl !leading-none",
                          children: e.value.toString().padStart(2, "0"),
                        }),
                      }),
                      a < i.length - 1 &&
                        (0, t.jsx)("div", {
                          className:
                            "flex items-start text-3xl md:text-6xl font-semibold !leading-none",
                          children: ":",
                        }),
                    ],
                  },
                  a,
                ),
              ),
            }),
          ],
        })
      );
    }
    var $ = e.i(595358);
    function B({ backgroundImage: e }) {
      return (0, t.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [
          (0, t.jsx)("img", {
            src: e || void 0,
            alt: "Banner",
            className: "object-cover w-full h-full brightness-[78%]",
          }),
          (0, t.jsx)("div", {
            className:
              "absolute w-full h-[70%] bg-gradient-to-b from-[rgba(1,1,1,0.2)] to-[rgba(253,251,251,0)]",
            style: {
              top: "-1px",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              WebkitTransform: "translateZ(0)",
            },
          }),
          (0, t.jsxs)("div", {
            className:
              "absolute top-[8%] md:top-[10%] w-full flex flex-col px-8 md:px-20 gap-3 md:gap-5 text-white",
            children: [
              (0, t.jsxs)(s.motion.h1, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: `${$.default.className} text-[13px] md:text-[26px] tracking-normal !leading-normal`,
                children: [
                  "Cảm ơn bạn đã dành tình cảm cho chúng mình!",
                  (0, t.jsx)("br", {}),
                  "Sự hiện diện của bạn chính là món quà ý nghĩa nhất, và chúng mình vô cùng trân quý khi được cùng bạn chia sẻ niềm hạnh phúc trong ngày trọng đại này.",
                ],
              }),
              (0, t.jsx)(s.motion.p, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.3 },
                className: `text-xl md:text-5xl ${n.BeyondPerfectionRegular.className} !leading-loose`,
                children: "Thank you!",
              }),
            ],
          }),
        ],
      });
    }
    e.s(
      [
        "default",
        0,
        ({ refData: e, guestName: s, inviteeid: n }) => {
          let l = s && !Array.isArray(s) ? decodeURIComponent(s) : void 0;
          n && n > 0 && (0, a.setCookies)("ecard_my_user_invitee_id", n, 1825);
          let r = e?.formData || {},
            o = r.hoten_chure || " ",
            c = r.chure || " ",
            m = r.hoten_codau || " ",
            u = r.codau || " ",
            p = r.nha_trai_ong ? "Ông " + r.nha_trai_ong : "",
            f = r.nha_trai_ba ? "Bà " + r.nha_trai_ba : "",
            b = r.nha_gai_ong ? "Ông " + r.nha_gai_ong : "",
            j = r.nha_gai_ba ? "Bà " + r.nha_gai_ba : "",
            y = e.formData.ten_le,
            _ = e.formData.tiec_ngay,
            k = e.formData.tiec_gio,
            C = e.formData.tiec_ten,
            D = e.formData.tiec_dia_chi,
            T = e.formData.google_map,
            I = r.ngh ? r.ngh : "",
            M = r.stk ? r.stk : "",
            $ = r.ttk ? r.ttk : "",
            A = e.formData.note1 || "",
            F = e.formData.note2 || "",
            z = e?.imagesAlbum || [],
            L = (0, a.getImagesByFieldCode)("banner_image_url", z)[0],
            P = (0, a.getImagesByFieldCode)("album2", z)[0],
            H = (0, a.getImagesByFieldCode)("album3", z)[0],
            R = (0, a.getImagesByFieldCode)("album4", z)[0],
            E = (0, a.getImagesByFieldCode)("album5", z)[0],
            O = (0, a.getImagesByFieldCode)("album10", z),
            U = (0, a.getImagesByFieldCode)("image_bank_url", z)[0],
            G = (0, a.getImagesByFieldCode)("footer_image_url", z)[0];
          return (0, t.jsxs)("div", {
            className:
              "begindowload max-w-4xl mx-auto text-center bg-[#F8FDFF]",
            children: [
              (0, t.jsx)(d, {
                backgroundImage: L,
                brideFullName: m,
                groomFullName: o,
              }),
              (0, t.jsx)(x, { invitation: { weddingName: y, guestName: l } }),
              (0, t.jsx)(h, {
                brideGroom: {
                  brideFullName: m,
                  groomFullName: o,
                  brideImage: H,
                  groomImage: P,
                },
              }),
              (0, t.jsx)(g, { loveJourney: { imageMain: R, note: A } }),
              (0, t.jsx)(v, {
                mainInfo: {
                  groomName: c,
                  groomFather: p,
                  groomMother: f,
                  brideName: u,
                  brideFather: b,
                  brideMother: j,
                  weddingDate: _,
                  weddingTime: k,
                  weddingVenueName: C,
                  weddingVenueAddress: D,
                  googleMap: T,
                },
              }),
              (0, t.jsx)(N, {
                calendarInfo: { date: new Date(_), backgroundImage: E },
              }),
              (0, t.jsx)(w, { note: F, albumImage: O }),
              (0, t.jsx)(S, {
                confirm: {
                  id: e.id ?? 0,
                  guestName: l ?? "",
                  qrImage: U,
                  bankAccountName: $,
                  bankName: I,
                  bankAccountNumber: M,
                  thankyouImage: R,
                  weddingDate: _,
                },
              }),
              (0, t.jsx)(V, { countdown: { weddingDate: _, weddingTime: k } }),
              (0, t.jsx)(B, { backgroundImage: G }),
              (0, t.jsx)(i.default, {
                urlMp3: r.audio,
                ecardMyUserId: Number(e.id),
              }),
            ],
          });
        },
      ],
      900257,
    );
  },
  808587,
  (e) => {
    "use strict";
    var t = e.i(775979);
    e.s(["TimesNewRoman", () => t.default]);
  },
  825126,
  (e) => {
    e.v({ className: "lora_e1e4a79-module__22YhKa__className" });
  },
  788562,
  562435,
  (e) => {
    "use strict";
    var t = e.i(825126);
    let a = {
      className: t.default.className,
      style: { fontFamily: "'Lora', 'Lora Fallback'", fontStyle: "normal" },
    };
    (null != t.default.variable && (a.variable = t.default.variable),
      e.s(["default", 0, a], 788562));
    var i = e.i(382326);
    e.s(["UVNHoaTay2", () => i.default], 562435);
  },
  772552,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(589997),
      i = e.i(56506),
      s = e.i(846932);
    e.i(283210);
    var n = e.i(889235),
      l = e.i(637443),
      r = e.i(902802);
    function d({ backgroundImage: e, groomFullName: a, brideFullName: i }) {
      return (0, t.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [
          (0, t.jsx)(s.motion.img, {
            initial: { scale: 1.2, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 1.5, ease: "easeOut" },
            src: e || void 0,
            alt: "Banner",
            className: "object-cover w-full",
          }),
          (0, t.jsx)("div", {
            className:
              "absolute w-full h-[60%] bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(2,2,2,0.6)]",
            style: {
              bottom: "-1px",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              WebkitTransform: "translateZ(0)",
            },
          }),
          (0, t.jsxs)("div", {
            className:
              "absolute bottom-[10%] w-full flex flex-col gap-6 md:gap-12 text-white",
            children: [
              (0, t.jsx)(s.motion.p, {
                initial: { y: 30, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.7 },
                className: `text-5xl md:text-[85px] ${r.UVNHoaTay1.className} !leading-snug`,
                children: "We get married!",
              }),
              (0, t.jsxs)(s.motion.div, {
                initial: { y: 50, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.5 },
                className: `${l.Summerfun.className} gap-4 md:gap-7 text-2xl md:text-5xl flex items-center justify-center tracking-wider`,
                children: [
                  (0, t.jsx)("h1", {
                    className: "font-medium !leading-relaxed",
                    children: i,
                  }),
                  (0, t.jsx)("span", {
                    className: `${n.BeyondPerfectionRegular.className} text-xl md:text-4xl`,
                    children: "&",
                  }),
                  (0, t.jsx)("h1", {
                    className: "font-medium !leading-relaxed",
                    children: a,
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    var o = e.i(677169),
      c = e.i(752392);
    let m = (e) =>
      e?.toString().trim()
        ? e
            .toString()
            .split(" ")
            .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
            .join(" ")
        : "Lễ Vu Quy";
    function x({ invitation: e }) {
      var a;
      return (0, t.jsxs)("div", {
        className: `gap-6 md:gap-12 pt-16 md:pt-48 md:pb-16 bg-center bg-cover bg-no-repeat relative ${c.default.className} text-[rgb(77,51,5)]`,
        children: [
          (0, t.jsx)("img", {
            src: "./assets/ecards/wedding-9/background-top.png",
            alt: "Background",
            className:
              "object-cover absolute top-0 left-0 w-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsxs)("div", {
            className:
              "relative z-[1] flex flex-col justify-center items-center gap-3 md:gap-8",
            children: [
              (0, t.jsxs)("p", {
                className:
                  "text-[19px] md:text-4xl font-bold !leading-snug text-nowrap",
                children: [
                  "TRÂN TRỌNG KÍNH MỜI THAM DỰ ",
                  ((a = e.weddingName),
                  a?.toString().trim()
                    ? a.toString().toUpperCase()
                    : "LỄ VU QUY"),
                ],
              }),
              e.guestName && "" !== e.guestName.trim()
                ? (0, t.jsxs)("div", {
                    className:
                      "flex flex-col justify-center items-center gap-2 md:gap-5",
                    children: [
                      (0, t.jsx)("p", {
                        className: "text-[16px] md:text-3xl",
                        children: "Trân trọng kính mời",
                      }),
                      (0, t.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, t.jsx)("h1", {
                          className: `px-6 text-red-700 text-2xl md:text-6xl ${o.ViceroyJF.className} border-b-3 border-dotted border-gray-400`,
                          children: e.guestName,
                        }),
                      }),
                      (0, t.jsxs)("p", {
                        className: "text-[16px] md:text-3xl",
                        children: ["đến dự buổi ", m(e.weddingName), " của"],
                      }),
                    ],
                  })
                : (0, t.jsx)("div", {
                    className:
                      "flex flex-col justify-center items-center gap-3 md:gap-8",
                    children: (0, t.jsxs)("p", {
                      className: "text-[15px] md:text-3xl",
                      children: [
                        "Trân trọng kính mời đến dự buổi ",
                        m(e.weddingName),
                        " của",
                      ],
                    }),
                  }),
            ],
          }),
        ],
      });
    }
    var u = e.i(302553);
    function h({ brideGroom: e }) {
      return (0, t.jsxs)("div", {
        className: "bg-center bg-cover bg-no-repeat relative ",
        children: [
          (0, t.jsx)("img", {
            src: "./assets/ecards/wedding-9/background.png",
            alt: "Background",
            className:
              "object-cover absolute w-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsxs)("div", {
            className: `gap-3 z-[1] relative md:gap-6 flex pt-16 pb-6 ${u.default.className} text-[rgb(134,105,55)]`,
            children: [
              (0, t.jsxs)("div", {
                className: "w-1/2 flex flex-col",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "flex flex-col justify-center items-center pb-8 md:pb-14",
                    children: [
                      (0, t.jsx)("h2", {
                        className: `text-[rgb(77,51,5)] ${r.UVNHoaTay1.className} text-[44px] md:text-[90px] !leading-snug`,
                        children: "Cô dâu",
                      }),
                      (0, t.jsx)("h1", {
                        className: "text-[25px] md:text-[55px] !leading-snug",
                        children: e.brideFullName?.toUpperCase(),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "w-full overflow-hidden shadow-[0_4px_10px_-5px_rgb(96,96,96)]",
                    children: (0, t.jsx)("img", {
                      src: e.brideImage || void 0,
                      alt: "Bride",
                      className: "object-cover w-full aspect-[205/336]",
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "w-1/2 flex flex-col",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "w-full overflow-hidden shadow-[0_4px_10px_-5px_rgb(96,96,96)]",
                    children: (0, t.jsx)("img", {
                      src: e.groomImage || void 0,
                      alt: "Groom",
                      className: "object-cover w-full aspect-[205/336]",
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex flex-col justify-center items-center pb-8 md:pb-14",
                    children: [
                      (0, t.jsx)("h2", {
                        className: `text-[rgb(77,51,5)] ${r.UVNHoaTay1.className} text-[44px] md:text-[90px] !leading-snug`,
                        children: "Chú rể",
                      }),
                      (0, t.jsx)("h1", {
                        className: "text-[25px] md:text-[55px] !leading-snug",
                        children: e.groomFullName?.toUpperCase(),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    var p = e.i(788562);
    function g({ loveJourney: e }) {
      return (0, t.jsxs)("div", {
        className: "flex flex-col gap-12 md:gap-20",
        children: [
          (0, t.jsxs)("div", {
            className: "bg-center bg-cover bg-no-repeat relative",
            children: [
              (0, t.jsx)("img", {
                src: "./assets/ecards/wedding-9/background.png",
                alt: "Background",
                className:
                  "object-cover absolute w-full z-[1] pointer-events-none overflow-hidden",
              }),
              (0, t.jsx)("div", {
                className: "relative z-[1] px-4 md:px-11 pt-2 md:pt-8",
                children: (0, t.jsx)("h3", {
                  className: `${p.default.className} text-[rgb(134,105,55)] text-[14px] md:text-[28px] text-justify tracking-[0] md:tracking-[0.025em] !leading-[1.6]`,
                  children:
                    e.note ||
                    "Tình yêu của anh và em là một hành trình kỳ diệu, vượt qua bao thử thách để cùng nhau bước đến ngày trọng đại – đám cưới của chúng mình. Đám cưới này là lời cam kết chân thành, là sự bắt đầu của một chương mới – nơi chúng ta cùng vun đắp tổ ấm, cùng sẻ chia mọi vui buồn và cùng nắm tay nhau đi đến cuối con đường mang tên hạnh phúc.",
                }),
              }),
            ],
          }),
          (0, t.jsx)("div", {
            className: "w-full overflow-hidden relative z-[1]",
            children: (0, t.jsx)("img", {
              src: e.imageMain || void 0,
              alt: "Image",
              className: "object-cover w-full",
            }),
          }),
        ],
      });
    }
    var f = e.i(25626),
      b = e.i(808587);
    function v({ mainInfo: e }) {
      let i = e.brideName?.toString().trim().charAt(0).toUpperCase() || "",
        n = e.groomName?.toString().trim().charAt(0).toUpperCase() || "",
        l = { d: " ", m: " ", y: " " };
      if (e.weddingDate)
        try {
          ((l.d = (0, a.getDatePart)(e.weddingDate, "d") || " "),
            (l.m = (0, a.getDatePart)(e.weddingDate, "m") || " "),
            (l.y = (0, a.getDatePart)(e.weddingDate, "y") || " "));
        } catch {}
      return (0, t.jsxs)("div", {
        className: `gap-24 md:gap-40 pt-14 pb-32 md:pb-72 md:pt-36 px-9 md:px-20 flex flex-col bg-center bg-cover bg-no-repeat relative ${f.default.className} text-[rgb(77,51,5)]`,
        children: [
          (0, t.jsx)("img", {
            src: "./assets/ecards/wedding-9/thiepmoi.png",
            alt: "Background",
            className:
              "object-cover absolute top-0 left-0 w-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsxs)("div", {
            className: "flex z-[1]",
            children: [
              (0, t.jsxs)(s.motion.div, {
                initial: { x: 30, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "w-1/2 text-[14px] md:text-[26px] flex flex-col gap-1 md:gap-2",
                children: [
                  (0, t.jsx)("h3", {
                    className: "font-bold text-[14px] md:text-[28px]",
                    children: "NHÀ GÁI",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-[1px] md:gap-[2px]",
                    children: [
                      e.brideFather?.toString().trim() &&
                        (0, t.jsx)("p", {
                          className: "w-full text-[rgb(134,105,55)]",
                          children: e.brideFather.toString().trim(),
                        }),
                      e.brideMother?.toString().trim() &&
                        (0, t.jsx)("p", {
                          className: "w-full text-[rgb(134,105,55)]",
                          children: e.brideMother.toString().trim(),
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)(s.motion.div, {
                initial: { x: -30, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "w-1/2 text-[14px] md:text-[26px] flex flex-col gap-1 md:gap-2",
                children: [
                  (0, t.jsx)("h3", {
                    className: "!font-bold text-[14px] md:text-[28px]",
                    children: "NHÀ TRAI",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-[1px] md:gap-[2px]",
                    children: [
                      e.groomFather?.toString().trim() &&
                        (0, t.jsx)("p", {
                          className: "w-full text-[rgb(134,105,55)]",
                          children: e.groomFather.toString().trim(),
                        }),
                      e.groomMother?.toString().trim() &&
                        (0, t.jsx)("p", {
                          className: "w-full text-[rgb(134,105,55)]",
                          children: e.groomMother.toString().trim(),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className:
              "flex z-[1] justify-center flex-col items-center gap-3 md:gap-10 px-8 md:px-10",
            children: [
              (0, t.jsxs)("div", {
                className: "relative z-[1] flex",
                children: [
                  (0, t.jsx)("h1", {
                    className: `${r.UVNHoaTay1.className} relative text-[72px] md:text-[160px] text-[rgb(195,184,162)] !leading-snug`,
                    children: i,
                  }),
                  (0, t.jsx)("h1", {
                    className: `left-[-10px] md:left-[-19px] top-[-14px] md:top-[-28px] absolute ${b.TimesNewRoman.className} text-[72px] md:text-[160px] text-[rgb(195,184,162)] !leading-snug`,
                    children: n,
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex flex-col gap-2 md:gap-6",
                children: [
                  (0, t.jsx)("h2", {
                    className: `${f.default.className} text-[rgb(134,105,55)] text-[14px] md:text-3xl`,
                    children: "ĐƯỢC TỔ CHỨC TẠI",
                  }),
                  (0, t.jsx)("h1", {
                    className: `text-[24px] md:text-6xl ${f.default.className} text-[rgb(77,51,5)] !leading-snug`,
                    children: e.weddingVenueName ?? "",
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className:
                  "text-[rgb(77,51,5)] text-[16px] md:text-[36px] !leading-relaxed font-semibold",
                children: e.weddingVenueAddress ?? "",
              }),
              (0, t.jsxs)("div", {
                className: "flex flex-col gap-3 md:gap-5 w-full",
                children: [
                  (0, t.jsx)("h2", {
                    className: `${f.default.className} text-[rgb(134,105,55)] text-[14px] md:text-3xl`,
                    children: "VÀO LÚC",
                  }),
                  (0, t.jsx)("h1", {
                    className: `text-[20px] md:text-[44px] ${f.default.className} font-bold text-[rgb(77,51,5)] !leading-snug`,
                    children: (() => {
                      if (!e.weddingTime) return " ";
                      try {
                        return (0, t.jsx)(t.Fragment, {
                          children: e.weddingTime.slice(0, 5),
                        });
                      } catch {
                        return " ";
                      }
                    })(),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex text-[22px] md:text-5xl justify-center !leading-tight",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "border-y-2 md:border-y-4 py-2 md:py-5 border-solid border-[rgb(134,105,55)]",
                        children: (0, t.jsx)("h1", {
                          className:
                            "border-r md:border-r-2 text-nowrap border-[rgb(134,105,55)] pr-2 md:pr-4",
                          children: (() => {
                            try {
                              var t;
                              let a;
                              if (!e.weddingDate) return " ";
                              return (
                                (t = e.weddingDate.toString()),
                                (a = new Date(t).getDay()),
                                0 === a ? "CHỦ NHẬT" : `THỨ ${a + 1}`
                              );
                            } catch {
                              return " ";
                            }
                          })(),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "border-y-2 md:border-y-4 py-2 md:py-5 border-solid border-[rgb(134,105,55)]",
                        children: (0, t.jsxs)("h1", {
                          className:
                            "border-l-2 md:border-l-3 text-nowrap border-[rgb(134,105,55)] pl-2 md:pl-4",
                          children: [l.d, ".", l.m, ".", l.y],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.googleMap &&
                (0, t.jsx)("div", {
                  className: "mt-3 md:mt-5",
                  children: (0, t.jsxs)("a", {
                    href: e.googleMap,
                    target: "_blank",
                    className:
                      "gap-2 md:gap-4 justify-center items-center flex flex-col cursor-pointer select-none",
                    children: [
                      (0, t.jsx)("div", {
                        className: "w-[15%] md:w-[20%]",
                        children: (0, t.jsx)("div", {
                          className: "overflow-hidden w-full",
                          children: (0, t.jsx)("img", {
                            src: "./assets/ecards/wedding-9/icon-location.png",
                            className: "w-full object-cover",
                          }),
                        }),
                      }),
                      (0, t.jsx)("h1", {
                        className:
                          "text-[18px] md:text-[40px] text-[rgb(134,105,55)] font-bold !leading-snug",
                        children: "CHỈ ĐƯỜNG",
                      }),
                    ],
                  }),
                }),
            ],
          }),
        ],
      });
    }
    var j = e.i(562435);
    function N({ calendarInfo: e }) {
      let { date: a, backgroundImage: i } = e,
        n = a.getFullYear(),
        l = a.getMonth();
      a.getDay();
      let r = new Date(n, l + 1, 0).getDate(),
        d = new Date(n, l, 1).getDay(),
        o = 0 === d ? 6 : d - 1,
        c = Array.from({ length: 7 * Math.ceil((r + o) / 7) }, (e, t) => {
          let a = t - o + 1;
          return a > 0 && a <= r ? a : null;
        }),
        m = [];
      for (let e = 0; e < c.length; e += 7) m.push(c.slice(e, e + 7));
      return (0, t.jsxs)("div", {
        className:
          "gap-6 md:gap-6 pb-12 md:pb-28 flex flex-col bg-center bg-cover bg-no-repeat relative text-white",
        children: [
          (0, t.jsx)("img", {
            src: i || void 0,
            alt: "Background",
            className:
              "brightness-[50%] object-cover absolute w-full h-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsx)("div", {
            className: "z-[1] px-10 md:px-16",
            children: (0, t.jsxs)(s.motion.div, {
              initial: { scale: 0.9, opacity: 0 },
              whileInView: { scale: 1, opacity: 1 },
              viewport: { once: !0 },
              transition: { duration: 0.8 },
              children: [
                (0, t.jsxs)(s.motion.h1, {
                  initial: { y: -20, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className: `${j.UVNHoaTay2.className} text-[38px] md:text-8xl pt-6 md:pt-16 pb-4 md:pb-6 !leading-snug`,
                  children: ["Tháng ", e.date.getMonth() + 1],
                }),
                (0, t.jsxs)("table", {
                  className: "w-full table-auto",
                  children: [
                    (0, t.jsx)("thead", {
                      children: (0, t.jsxs)("tr", {
                        className: "text-[14px] md:text-3xl",
                        children: [
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "MON",
                          }),
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "TUE",
                          }),
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "WED",
                          }),
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "THUR",
                          }),
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "FRI",
                          }),
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "SAT",
                          }),
                          (0, t.jsx)("th", {
                            className: "py-2 md:px-4 md:py-8 font-bold",
                            children: "SUN",
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("tbody", {
                      children: m.map((e, i) =>
                        (0, t.jsx)(
                          "tr",
                          {
                            className: "text-center text-[16px] md:text-[34px]",
                            children: e.map((e, i) => {
                              let r =
                                e &&
                                new Date(n, l, e).toDateString() ===
                                  a.toDateString();
                              return (0, t.jsxs)(
                                "td",
                                {
                                  className: `text-center p-2 md:py-5 md:px-3 ${r ? "relative" : ""}`,
                                  children: [
                                    e || "",
                                    r &&
                                      (0, t.jsx)(s.motion.div, {
                                        initial: { scale: 0 },
                                        whileInView: { scale: 1 },
                                        viewport: { once: !0 },
                                        transition: {
                                          duration: 0.5,
                                          delay: 0.5,
                                          type: "spring",
                                        },
                                        className:
                                          "absolute inset-0 flex items-center justify-center",
                                        children: (0, t.jsx)("div", {
                                          className:
                                            "w-[37px] md:w-[77px] h-[31px] md:h-[65px]",
                                          children: (0, t.jsx)("div", {
                                            className:
                                              "w-full h-full bg-[url('/assets/ecards/wedding-9/heart.png')] bg-no-repeat bg-center bg-cover scale-110",
                                          }),
                                        }),
                                      }),
                                  ],
                                },
                                i,
                              );
                            }),
                          },
                          i,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    var y = e.i(860348);
    function w({ note: e, albumImage: a }) {
      return (0, t.jsxs)("div", {
        children: [
          (0, t.jsx)("div", {
            className: "relative",
            children: (0, t.jsxs)("div", {
              className:
                "bg-center bg-cover bg-no-repeat relative overflow-hidden",
              children: [
                (0, t.jsx)("img", {
                  src: "./assets/ecards/wedding-9/background.png",
                  alt: "Background",
                  className:
                    "object-cover absolute w-full z-[1] pointer-events-none",
                }),
                (0, t.jsx)("div", {
                  className: "relative z-[1] px-3 md:px-12 py-8 md:py-12",
                  children: (0, t.jsx)("h3", {
                    className: `${y.default.className} text-[rgb(134,105,55)] text-[15px] md:text-[29px] text-center tracking-normal md:tracking-[0.025em] !leading-[1.6]`,
                    children:
                      e ||
                      "Từng tấm ảnh là một lát cắt thời gian đầy cảm xúc – tất cả hòa quyện tạo nên bản giao hưởng ngọt ngào của tình yêu, niềm vui và những kỷ niệm mà chúng ta sẽ mãi nâng niu suốt cuộc đời.",
                  }),
                }),
              ],
            }),
          }),
          (0, t.jsx)("div", {
            className: "bg-[rgb(162,149,120)]",
            children:
              a.length > 0 &&
              (0, t.jsx)("div", {
                className: "p-5 md:p-10",
                children: (0, t.jsx)("div", {
                  className: "flex justify-center flex-wrap",
                  children: (0, t.jsx)("div", {
                    className: "grid grid-cols-2 gap-2 md:gap-4 w-full",
                    children:
                      a &&
                      a.length > 0 &&
                      a.map((e, a) =>
                        (0, t.jsx)(
                          s.motion.div,
                          {
                            initial: { opacity: 0, scale: 0.9 },
                            whileInView: { opacity: 1, scale: 1 },
                            viewport: { once: !0 },
                            transition: { duration: 0.5, delay: 0.1 * a },
                            children: (0, t.jsx)("img", {
                              className:
                                "h-auto max-w-full shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                              src: e,
                              alt: `Album h\xecnh cưới ${a}`,
                            }),
                          },
                          a,
                        ),
                      ),
                  }),
                }),
              }),
          }),
        ],
      });
    }
    var _ = e.i(854878),
      k = e.i(661529),
      C = e.i(472317),
      D = e.i(271645),
      T = e.i(33160);
    let I =
      "w-full text-[14px] md:text-[30px] border mt-2 md:border-2 border-solid border-[rgb(77,51,5)] bg-transparent placeholder:text-[rgb(77,51,5)] px-2 py-2 md:px-5 md:py-4 focus:outline-none focus-visible:outline-none";
    function S({ confirm: e }) {
      let [i, l] = (0, D.useState)(!1),
        [r, d] = (0, D.useState)(!1),
        [o, c] = (0, D.useState)({
          id: 0,
          ecard_my_user_id: Number(e.id),
          ecard_my_user_invitee_id: 0,
          name: e.guestName ?? "",
          content: "",
          is_tham_du: null,
          so_nguoi_tham_du: void 0,
        }),
        m = (0, D.useCallback)(() => {
          d(!1);
        }, []),
        x = (0, D.useCallback)(() => {
          l(!1);
        }, []),
        u = async (e) => {
          e.preventDefault();
          try {
            let e = (0, a.getCookies)("ecard_my_user_invitee_id"),
              t = { ...o };
            ((t.ecard_my_user_invitee_id =
              e && !isNaN(Number(e)) ? Number(e) : 0),
              (void 0 === t.so_nguoi_tham_du || !0 !== t.is_tham_du) &&
                (t.so_nguoi_tham_du = 0));
            let i = await (0, C.AddCongratulations)(t);
            i.success
              ? ((0, a.setCookies)(
                  "ecard_my_user_invitee_id",
                  i.data.data.invitee_id,
                  1825,
                ),
                l(!0))
              : (0, T.showToast)(i.message || "Đăng nhập thất bại", "error");
          } catch (e) {
            (console.error("Login error:", e),
              (0, T.showToast)("Có lỗi xảy ra, vui lòng thử lại!", "error"));
          }
        };
      return (0, t.jsxs)("div", {
        className: `gap-3 md:gap-3 flex flex-col bg-center bg-cover bg-no-repeat relative ${k.default.className} text-[rgb(134,105,55)]`,
        children: [
          (0, t.jsx)("img", {
            src: "./assets/ecards/wedding-18/background-5.png",
            alt: "Background",
            className:
              "object-cover absolute w-full md:h-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, t.jsxs)("div", {
            className: "z-[1] pt-16 md:pt-52 pb-20 md:pb-40",
            children: [
              (0, t.jsx)(s.motion.div, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "pb-2 md:pb-8 text-[13px] md:text-[30px] px-6 md:px-14",
                children: (0, t.jsxs)("p", {
                  children: [
                    "Hãy xác nhận sự có mặt của bạn để chúng mình",
                    (0, t.jsx)("br", {}),
                    "chuẩn bị đón tiếp một cách chu đáo nhất.",
                    (0, t.jsx)("br", {}),
                    "Trân trọng!",
                  ],
                }),
              }),
              (0, t.jsx)("form", {
                className: "",
                onSubmit: u,
                children: (0, t.jsxs)(s.motion.div, {
                  initial: { y: 30, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className:
                    "flex flex-wrap gap-3 md:gap-7 px-6 md:px-16 items-center justify-center",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[28px]",
                          children: "Tên của bạn:",
                        }),
                        (0, t.jsx)("input", {
                          required: !0,
                          className: `${I} rounded-full`,
                          type: "text",
                          name: "name",
                          maxLength: 200,
                          placeholder: "Vui lòng điền tên của bạn",
                          value: o.name,
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            c((e) => ({ ...e, [t]: a }));
                          },
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[28px]",
                          children: "Lời chúc của bạn:",
                        }),
                        (0, t.jsx)("textarea", {
                          rows: 4,
                          required: !0,
                          name: "content",
                          className: `${I} rounded-[22px] md:rounded-[40px]`,
                          maxLength: 1e3,
                          placeholder: "Gửi lời chúc đến Dâu Rể nhé!",
                          value: o.content,
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            c((e) => ({ ...e, [t]: a }));
                          },
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[28px]",
                          children: "Bạn tham dự được chứ?",
                        }),
                        (0, t.jsxs)("select", {
                          className: `${I} rounded-full`,
                          name: "is_tham_du",
                          required: !0,
                          value:
                            null === o.is_tham_du
                              ? ""
                              : o.is_tham_du
                                ? "true"
                                : "false",
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            c((e) => ({
                              ...e,
                              [t]:
                                "is_tham_du" === t
                                  ? "" === a
                                    ? null
                                    : "true" === a
                                  : a,
                            }));
                          },
                          children: [
                            (0, t.jsx)("option", {
                              value: "",
                              children: "Bạn Sẽ Tham Dự Cùng Chúng Mình Nhé?",
                            }),
                            (0, t.jsx)("option", {
                              value: "true",
                              children: "Mình Sẽ Tham Dự Nha",
                            }),
                            (0, t.jsx)("option", {
                              value: "false",
                              children:
                                "Tiếc Quá! Mình Không Thể Tham Dự Được Mất Rồi",
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.is_tham_du &&
                      (0, t.jsxs)("div", {
                        className: "w-full text-start",
                        children: [
                          (0, t.jsx)("label", {
                            className: "text-sm md:text-[28px]",
                            children: "Số người tham dự:",
                          }),
                          (0, t.jsx)("input", {
                            required: !0,
                            className: `${I} rounded-full`,
                            type: "number",
                            name: "so_nguoi_tham_du",
                            min: 1,
                            placeholder: "Số lượng người đến tham dự",
                            value: o.so_nguoi_tham_du,
                            onChange: (e) => {
                              let { name: t, value: a, type: i } = e.target;
                              c((e) => ({
                                ...e,
                                [t]:
                                  "number" === i
                                    ? "" === a
                                      ? ""
                                      : Number(a)
                                    : a,
                              }));
                            },
                          }),
                        ],
                      }),
                    (0, t.jsx)(s.motion.button, {
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      type: "submit",
                      className:
                        "cursor-pointer focus:outline-none border-[1px] md:border-[2px] border-solid border-[rgb(146,131,98)] text-white bg-[rgb(162,149,120)] rounded-full shadow-md shadow-black/25 focus:ring-4 font-semibold text-[19px] py-1 md:text-[40px] md:py-6 w-full",
                      children: "GỬI LỜI CHÚC",
                    }),
                    e.qrImage &&
                      (0, t.jsx)(s.motion.button, {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        type: "button",
                        onClick: () => d(!0),
                        className:
                          "cursor-pointer focus:outline-none border-[1px] md:border-[2px] border-solid border-[rgb(146,131,98)] text-white bg-[rgb(162,149,120)] rounded-full shadow-md shadow-black/25 font-semibold text-[19px] py-1 md:text-[40px] md:py-6 w-full",
                        children: "GỬI QUÀ MỪNG CƯỚI",
                      }),
                  ],
                }),
              }),
            ],
          }),
          (0, t.jsxs)(_.Dialog, {
            open: r,
            onClose: m,
            className: "relative z-10",
            children: [
              (0, t.jsx)(_.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(_.DialogPanel, {
                    transition: !0,
                    className:
                      "relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, t.jsx)("img", {
                        src: "./assets/ecards/wedding-18/background-6.png",
                        alt: "Background",
                        className:
                          "object-cover absolute top-0 left-0 w-full h-full z-1 pointer-events-none overflow-hidden",
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className:
                          "absolute md:right-5 right-2 top-2 md:top-5 z-20 rounded-full p-1 text-dark focus:outline-none",
                        onClick: m,
                        "aria-label": "Close",
                        children: (0, t.jsx)("svg", {
                          className: "h-7 w-7 md:h-12 md:w-12",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "relative z-19 py-9 md:py-14 px-4 md:px-7",
                        children: (0, t.jsxs)("div", {
                          className:
                            "flex justify-center items-center gap-3 md:gap-6",
                          children: [
                            (0, t.jsx)("div", {
                              className: "w-4/12",
                              children: (0, t.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, t.jsx)("div", {
                                  className: "w-full",
                                  children: (0, t.jsx)("img", {
                                    className: "w-full object-cover",
                                    src: e.qrImage || void 0,
                                    alt: "QR Code",
                                  }),
                                }),
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "w-8/12",
                              children: (0, t.jsxs)("div", {
                                className: `flex flex-col text-[rgb(146,131,98)] gap-2 md:gap-3 ${k.default.className}`,
                                children: [
                                  (0, t.jsx)("h2", {
                                    className:
                                      "text-[17px] md:text-[33px] border-b-2 md:border-b-4 border-solid border-[rgb(146,131,98)] !leading-relaxed",
                                    children: e.bankAccountName,
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                      (0, t.jsx)("p", {
                                        className: "md:text-[30px]",
                                        children: e.bankName,
                                      }),
                                      (0, t.jsx)("p", {
                                        className: "md:text-[30px]",
                                        children: e.bankAccountNumber,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          (0, t.jsxs)(_.Dialog, {
            open: i,
            onClose: x,
            className: "relative z-10",
            children: [
              (0, t.jsx)(_.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(_.DialogPanel, {
                    transition: !0,
                    className:
                      "relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, t.jsx)("img", {
                        src: "./assets/ecards/wedding-18/background-7.png",
                        alt: "Background",
                        className:
                          "object-cover absolute top-0 left-0 w-full h-full z-1 pointer-events-none overflow-hidden",
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className:
                          "absolute md:right-5 right-2 top-2 md:top-5 z-20 rounded-full p-1 text-dark focus:outline-none",
                        onClick: x,
                        "aria-label": "Close",
                        children: (0, t.jsx)("svg", {
                          className: "h-7 w-7 md:h-12 md:w-12",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "relative z-19 py-8 md:py-16 pl-8 pr-6 md:pl-20 md:pr-12",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "flex justify-center items-start gap-3 md:gap-6",
                            children: [
                              (0, t.jsx)("div", {
                                className: "w-9/12",
                                children: (0, t.jsxs)("div", {
                                  className:
                                    "flex justify-center items-center relative",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        " w-full aspect-[256/232] -rotate-6 border-[12px] border-b-[34px] md:border-[24px] md:border-b-[64px] border-solid border-white shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                                      children: (0, t.jsx)("img", {
                                        className: "w-full object-cover h-full",
                                        src: e.thankyouImage || void 0,
                                        alt: "Thank you",
                                      }),
                                    }),
                                    (0, t.jsx)("img", {
                                      className:
                                        "w-[35%] object-cover absolute right-[-20%] bottom-[-5%]",
                                      src: "./assets/ecards/wedding-18/flower.png",
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: `pt-4 w-3/12 flex flex-col text-[rgb(146,131,98)] gap-2 md:gap-3 ${k.default.className} justify-center items-end`,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "flex",
                                    children: (0, t.jsx)("p", {
                                      className:
                                        "px-3 text-3xl md:text-6xl border-b-2 md:border-b-4 border-solid border-[rgb(146,131,98)] !leading-relaxed",
                                      children: (() => {
                                        if (!e.weddingDate) return " ";
                                        try {
                                          return (0, a.getDatePart)(
                                            e.weddingDate,
                                            "d",
                                          );
                                        } catch {
                                          return " ";
                                        }
                                      })(),
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "flex",
                                    children: (0, t.jsx)("p", {
                                      className: "px-3 text-3xl md:text-6xl",
                                      children: (() => {
                                        if (!e.weddingDate) return " ";
                                        try {
                                          return (0, a.getDatePart)(
                                            e.weddingDate,
                                            "m",
                                          );
                                        } catch {
                                          return " ";
                                        }
                                      })(),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex flex-col pt-8 md:pt-14 text-[rgb(146,131,98)] text-center",
                            children: [
                              (0, t.jsx)("h3", {
                                className: `text-2xl md:text-5xl ${n.BeyondPerfectionRegular.className} !leading-loose`,
                                children: "Thank you!",
                              }),
                              (0, t.jsxs)("p", {
                                className:
                                  "text-[17px] md:text-3xl pt-1 md:pt-1 !leading-snug",
                                children: [
                                  "Cảm ơn bạn đã dành thời gian phản hồi.",
                                  (0, t.jsx)("br", {}),
                                  "Chúng mình vô cùng trân quý sự quan tâm của bạn.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
    }
    var M = e.i(883907);
    function V({ countdown: e }) {
      let [a, i] = (0, D.useState)({ days: 0, hours: 0, min: 0, sec: 0 }),
        s = (0, D.useMemo)(
          () =>
            e.weddingDate
              ? new Date(`${e.weddingDate}T${e.weddingTime || "00:00:00"}`)
              : null,
          [e.weddingDate, e.weddingTime],
        );
      return (
        (0, D.useEffect)(() => {
          if (!s) return;
          let e = () => {
            let e = s.getTime() - Date.now();
            if (e <= 0) return void i({ days: 0, hours: 0, min: 0, sec: 0 });
            let t = Math.floor(e / 864e5),
              a = Math.floor((e / 36e5) % 24);
            i({
              days: t,
              hours: a,
              min: Math.floor((e / 6e4) % 60),
              sec: Math.floor((e / 1e3) % 60),
            });
          };
          e();
          let t = setInterval(e, 1e3);
          return () => clearInterval(t);
        }, [s]),
        (0, t.jsxs)("div", {
          className:
            "bg-[rgb(181,168,146)] flex flex-col text-white pt-10 md:pt-20 pb-14 md:pb-28 px-16 md:px-28 gap-4 md:gap-8",
          children: [
            (0, t.jsx)("h1", {
              className: `${r.UVNHoaTay1.className} text-[59px] md:text-[130px] !leading-snug`,
              children: "Countdown",
            }),
            (0, t.jsx)("div", {
              className: "flex justify-start",
              children: [
                { value: a.days },
                { value: a.hours },
                { value: a.min },
                { value: a.sec },
              ].map((e, a, i) =>
                (0, t.jsxs)(
                  D.default.Fragment,
                  {
                    children: [
                      (0, t.jsx)("div", {
                        className: `w-1/4 text-center ${M.FTVVIPHastegi.className}`,
                        children: (0, t.jsx)("p", {
                          className: "text-[46px] md:text-8xl !leading-none",
                          children: e.value.toString().padStart(2, "0"),
                        }),
                      }),
                      a < i.length - 1 &&
                        (0, t.jsx)("div", {
                          className:
                            "flex items-start text-3xl md:text-6xl font-semibold !leading-none",
                          children: ":",
                        }),
                    ],
                  },
                  a,
                ),
              ),
            }),
          ],
        })
      );
    }
    var $ = e.i(595358);
    function B({ backgroundImage: e }) {
      return (0, t.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [
          (0, t.jsx)("img", {
            src: e || void 0,
            alt: "Banner",
            className: "object-cover w-full h-full brightness-[78%]",
          }),
          (0, t.jsx)("div", {
            className:
              "absolute w-full h-[70%] bg-gradient-to-b from-[rgba(1,1,1,0.2)] to-[rgba(253,251,251,0)]",
            style: {
              top: "-1px",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              WebkitTransform: "translateZ(0)",
            },
          }),
          (0, t.jsxs)("div", {
            className:
              "absolute top-[8%] md:top-[10%] w-full flex flex-col px-8 md:px-20 gap-3 md:gap-5 text-white",
            children: [
              (0, t.jsxs)(s.motion.h1, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: `${$.default.className} text-[13px] md:text-[26px] tracking-normal !leading-normal`,
                children: [
                  "Cảm ơn bạn đã dành tình cảm cho chúng mình!",
                  (0, t.jsx)("br", {}),
                  "Sự hiện diện của bạn chính là món quà ý nghĩa nhất, và chúng mình vô cùng trân quý khi được cùng bạn chia sẻ niềm hạnh phúc trong ngày trọng đại này.",
                ],
              }),
              (0, t.jsx)(s.motion.p, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.3 },
                className: `text-xl md:text-5xl ${n.BeyondPerfectionRegular.className} !leading-loose`,
                children: "Thank you!",
              }),
            ],
          }),
        ],
      });
    }
    e.s(
      [
        "default",
        0,
        ({ refData: e, guestName: s, inviteeid: n }) => {
          let l = s && !Array.isArray(s) ? decodeURIComponent(s) : void 0;
          n && n > 0 && (0, a.setCookies)("ecard_my_user_invitee_id", n, 1825);
          let r = e?.formData || {},
            o = r.hoten_chure || " ",
            c = r.chure || " ",
            m = r.hoten_codau || " ",
            u = r.codau || " ",
            p = r.nha_trai_ong ? "Ông " + r.nha_trai_ong : "",
            f = r.nha_trai_ba ? "Bà " + r.nha_trai_ba : "",
            b = r.nha_gai_ong ? "Ông " + r.nha_gai_ong : "",
            j = r.nha_gai_ba ? "Bà " + r.nha_gai_ba : "",
            y = e.formData.ten_le,
            _ = e.formData.tiec_ngay,
            k = e.formData.tiec_gio,
            C = e.formData.tiec_ten,
            D = e.formData.tiec_dia_chi,
            T = e.formData.google_map,
            I = r.ngh ? r.ngh : "",
            M = r.stk ? r.stk : "",
            $ = r.ttk ? r.ttk : "",
            A = e.formData.note1 || "",
            F = e.formData.note2 || "",
            z = e?.imagesAlbum || [],
            L = (0, a.getImagesByFieldCode)("banner_image_url", z)[0],
            P = (0, a.getImagesByFieldCode)("album2", z)[0],
            H = (0, a.getImagesByFieldCode)("album3", z)[0],
            R = (0, a.getImagesByFieldCode)("album4", z)[0],
            E = (0, a.getImagesByFieldCode)("album5", z)[0],
            O = (0, a.getImagesByFieldCode)("album10", z),
            U = (0, a.getImagesByFieldCode)("image_bank_url", z)[0],
            G = (0, a.getImagesByFieldCode)("footer_image_url", z)[0];
          return (0, t.jsxs)("div", {
            className:
              "begindowload max-w-4xl mx-auto text-center bg-[#F8FDFF]",
            children: [
              (0, t.jsx)(d, {
                backgroundImage: L,
                brideFullName: m,
                groomFullName: o,
              }),
              (0, t.jsx)(x, { invitation: { weddingName: y, guestName: l } }),
              (0, t.jsx)(h, {
                brideGroom: {
                  brideFullName: m,
                  groomFullName: o,
                  brideImage: H,
                  groomImage: P,
                },
              }),
              (0, t.jsx)(g, { loveJourney: { imageMain: R, note: A } }),
              (0, t.jsx)(v, {
                mainInfo: {
                  groomName: c,
                  groomFather: p,
                  groomMother: f,
                  brideName: u,
                  brideFather: b,
                  brideMother: j,
                  weddingDate: _,
                  weddingTime: k,
                  weddingVenueName: C,
                  weddingVenueAddress: D,
                  googleMap: T,
                },
              }),
              (0, t.jsx)(N, {
                calendarInfo: { date: new Date(_), backgroundImage: E },
              }),
              (0, t.jsx)(w, { note: F, albumImage: O }),
              (0, t.jsx)(S, {
                confirm: {
                  id: e.id ?? 0,
                  guestName: l ?? "",
                  qrImage: U,
                  bankAccountName: $,
                  bankName: I,
                  bankAccountNumber: M,
                  thankyouImage: R,
                  weddingDate: _,
                },
              }),
              (0, t.jsx)(V, { countdown: { weddingDate: _, weddingTime: k } }),
              (0, t.jsx)(B, { backgroundImage: G }),
              (0, t.jsx)(i.default, {
                urlMp3: r.audio,
                ecardMyUserId: Number(e.id),
              }),
            ],
          });
        },
      ],
      772552,
    );
  },
]);
