(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  889235,
  (e) => {
    "use strict";
    var a = e.i(521652);
    e.s(["BeyondPerfectionRegular", () => a.default]);
  },
  637443,
  (e) => {
    "use strict";
    var a = e.i(478201);
    e.s(["Summerfun", () => a.default]);
  },
  902802,
  (e) => {
    "use strict";
    var a = e.i(711616);
    e.s(["UVNHoaTay1", () => a.default]);
  },
  676167,
  (e) => {
    e.v({ className: "lora_9f8ddb32-module__33Crba__className" });
  },
  752392,
  (e) => {
    "use strict";
    var a = e.i(676167);
    let t = {
      className: a.default.className,
      style: { fontFamily: "'Lora', 'Lora Fallback'", fontStyle: "normal" },
    };
    (null != a.default.variable && (t.variable = a.default.variable),
      e.s(["default", 0, t]));
  },
  149989,
  (e) => {
    e.v({ className: "lora_4cebb208-module__4UN1kG__className" });
  },
  302553,
  (e) => {
    "use strict";
    var a = e.i(149989);
    let t = {
      className: a.default.className,
      style: { fontFamily: "'Lora', 'Lora Fallback'", fontStyle: "normal" },
    };
    (null != a.default.variable && (t.variable = a.default.variable),
      e.s(["default", 0, t]));
  },
  979819,
  (e) => {
    e.v({ className: "lora_dc46d17d-module__vXbRtq__className" });
  },
  25626,
  (e) => {
    "use strict";
    var a = e.i(979819);
    let t = {
      className: a.default.className,
      style: { fontFamily: "'Lora', 'Lora Fallback'", fontStyle: "normal" },
    };
    (null != a.default.variable && (t.variable = a.default.variable),
      e.s(["default", 0, t]));
  },
  231431,
  (e) => {
    e.v({ className: "lora_940bbe56-module__BbDDkW__className" });
  },
  860752,
  (e) => {
    e.v({ className: "lora_f36264d0-module__COqgcW__className" });
  },
  860348,
  661529,
  (e) => {
    "use strict";
    var a = e.i(231431);
    let t = {
      className: a.default.className,
      style: { fontFamily: "'Lora', 'Lora Fallback'", fontStyle: "normal" },
    };
    (null != a.default.variable && (t.variable = a.default.variable),
      e.s(["default", 0, t], 860348));
    var l = e.i(860752);
    let i = {
      className: l.default.className,
      style: { fontFamily: "'Lora', 'Lora Fallback'", fontStyle: "normal" },
    };
    (null != l.default.variable && (i.variable = l.default.variable),
      e.s(["default", 0, i], 661529));
  },
  883907,
  (e) => {
    "use strict";
    var a = e.i(625296);
    e.s(["FTVVIPHastegi", () => a.default]);
  },
  429869,
  (e) => {
    e.v({ className: "lora_cdc68b7b-module__iEC5pa__className" });
  },
  595358,
  (e) => {
    "use strict";
    var a = e.i(429869);
    let t = {
      className: a.default.className,
      style: { fontFamily: "'Lora', 'Lora Fallback'", fontStyle: "normal" },
    };
    (null != a.default.variable && (t.variable = a.default.variable),
      e.s(["default", 0, t]));
  },
  962590,
  (e) => {
    e.v({ className: "lora_86c1eaf9-module__5NgJbq__className" });
  },
  298826,
  291502,
  (e) => {
    "use strict";
    var a = e.i(614279);
    e.s(["FTVVIPArcittyaBegatri", () => a.default], 298826);
    var t = e.i(962590);
    let l = {
      className: t.default.className,
      style: { fontFamily: "'Lora', 'Lora Fallback'", fontStyle: "normal" },
    };
    (null != t.default.variable && (l.variable = t.default.variable),
      e.s(["default", 0, l], 291502));
  },
  621831,
  (e) => {
    "use strict";
    var a = e.i(466254);
    e.s(["lora", () => a.default]);
  },
  237791,
  (e) => {
    "use strict";
    var a = e.i(843476),
      t = e.i(846932);
    e.i(283210);
    var l = e.i(889235),
      i = e.i(637443),
      s = e.i(621831),
      n = e.i(589997);
    function r({
      backgroundImage: e,
      groomName: r,
      brideName: d,
      weddingDate: o,
    }) {
      let c = { d: " ", m: " ", y: " " };
      if (o)
        try {
          ((c.d = (0, n.getDatePart)(o, "d") || " "),
            (c.m = (0, n.getDatePart)(o, "m") || " "),
            (c.y = (0, n.getDatePart)(o, "y") || " "));
        } catch {}
      return (0, a.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [
          (0, a.jsx)(t.motion.img, {
            initial: { scale: 1.2, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 1.5, ease: "easeOut" },
            src: e || void 0,
            alt: "Banner",
            className: "object-cover w-full",
          }),
          (0, a.jsx)("div", {
            className:
              "absolute w-full h-[60%] bg-gradient-to-b from-[rgba(253,251,251,0)] to-[rgba(2,2,2,0.7)]",
            style: {
              bottom: "-1px",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              WebkitTransform: "translateZ(0)",
            },
          }),
          (0, a.jsxs)("div", {
            className:
              "absolute bottom-[5%] w-full flex flex-col gap-2 md:gap-5 text-white",
            children: [
              (0, a.jsxs)(t.motion.div, {
                initial: { y: 50, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.5 },
                className: `${i.Summerfun.className} gap-3 md:gap-7 text-2xl md:text-5xl flex items-center justify-center tracking-wide`,
                children: [
                  (0, a.jsx)("h1", { className: "font-medium", children: d }),
                  (0, a.jsx)("span", {
                    className: `${l.BeyondPerfectionRegular.className} text-xl md:text-4xl`,
                    children: "&",
                  }),
                  (0, a.jsx)("h1", { className: "font-medium", children: r }),
                ],
              }),
              (0, a.jsx)(t.motion.p, {
                initial: { y: 30, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.7 },
                className: "text-lg md:text-2xl",
                children: "SAVE THE DATE",
              }),
              (0, a.jsxs)(t.motion.p, {
                initial: { y: 30, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.9 },
                className: `text-3xl md:text-5xl ${s.lora.className} font-semibold tracking-widest`,
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
    function p({ invitation: e }) {
      var t;
      let [l, i] = (0, d.useState)({ days: 0, hours: 0, min: 0, sec: 0 }),
        s = (0, d.useMemo)(
          () =>
            e.weddingDate && e.weddingTime
              ? new Date(`${e.weddingDate}T${e.weddingTime}`)
              : null,
          [e.weddingDate, e.weddingTime],
        );
      return (
        (0, d.useEffect)(() => {
          if (!s) return;
          let e = () => {
            let e = s.getTime() - Date.now();
            if (e <= 0) return void i({ days: 0, hours: 0, min: 0, sec: 0 });
            let a = Math.floor(e / 864e5),
              t = Math.floor((e / 36e5) % 24);
            i({
              days: a,
              hours: t,
              min: Math.floor((e / 6e4) % 60),
              sec: Math.floor((e / 1e3) % 60),
            });
          };
          e();
          let a = setInterval(e, 1e3);
          return () => clearInterval(a);
        }, [s]),
        (0, a.jsxs)("div", {
          className: `gap-6 md:gap-12 pt-16 md:pb-20 md:pt-44 flex flex-col bg-center bg-cover bg-no-repeat relative ${o.default.className} text-[rgb(146,131,98)]`,
          children: [
            (0, a.jsx)("img", {
              src: "./assets/ecards/wedding-18/background-1.png",
              alt: "Background",
              className:
                "object-cover absolute top-0 left-0 w-full h-full z-[1] pointer-events-none overflow-hidden",
            }),
            (0, a.jsx)("img", {
              src: "./assets/ecards/wedding-18/background-thiep.png",
              alt: "Background thiệp",
              className: "w-full object-cover z-[1]",
            }),
            (0, a.jsxs)("div", {
              className:
                "absolute z-[1] top-[37%] left-1/2 + -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-3",
              children: [
                (0, a.jsxs)("p", {
                  className: "text-xs md:text-[26px] !leading-snug text-nowrap",
                  children: [
                    "THƯ MỜI THAM DỰ ",
                    ((t = e.weddingName),
                    t?.toString().trim()
                      ? t.toString().toUpperCase()
                      : "LỄ THÀNH HÔN"),
                  ],
                }),
                e.guestName &&
                  "" !== e.guestName.trim() &&
                  (0, a.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, a.jsx)("h1", {
                      className: `px-6 text-red-700 text-2xl md:text-5xl ${x.ViceroyJF.className} border-b-2 border-dotted border-gray-400`,
                      children: e.guestName,
                    }),
                  }),
                (0, a.jsxs)("div", {
                  className: `flex z-[1] relative flex-col justify-center items-center text-[40px] md:text-8xl ${c.UVNHoaTay1.className} gap-4 md:gap-8`,
                  children: [
                    (0, a.jsx)("h1", {
                      className: "leading-snug",
                      children: e.brideName,
                    }),
                    (0, a.jsx)("h2", {
                      className: `text-[38px] md:text-8xl ${m.FTVVIPArcittyaBegatri.className} !leading-5 md:!leading-[80px]
                                                absolute top-1/2
                                                left-1/2
                                                -translate-x-1/2
                                                -translate-y-[30%]`,
                      children: "&",
                    }),
                    (0, a.jsx)("h1", {
                      className: "leading-snug",
                      children: e.groomName,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col md:gap-3",
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-xs md:text-[26px] !leading-snug",
                      children: "SẼ DIỄN RA VÀO",
                    }),
                    (0, a.jsx)("div", {
                      className: "flex gap-3 md:gap-6 justify-start",
                      children: [
                        { value: l.days, label: "Ngày" },
                        { value: l.hours, label: "Giờ" },
                        { value: l.min, label: "Phút" },
                        { value: l.sec, label: "Giây" },
                      ].map((e, t, l) =>
                        (0, a.jsxs)(
                          d.default.Fragment,
                          {
                            children: [
                              (0, a.jsxs)("div", {
                                className: "w-1/4 text-center",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "text-2xl md:text-5xl",
                                    children: e.value
                                      .toString()
                                      .padStart(2, "0"),
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "pt-1 md:pt-3 text-xs md:text-2xl",
                                    children: e.label,
                                  }),
                                ],
                              }),
                              t < l.length - 1 &&
                                (0, a.jsx)("div", {
                                  className:
                                    "flex items-start text-xl md:text-4xl font-bold",
                                  children: ":",
                                }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "absolute z-[1] top-[30%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-[20%] rotate-12 drop-shadow-[0_12px_25px_rgba(0,0,0,0.25)]",
              children: (0, a.jsx)("img", {
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
    function u({ bannerImage: e }) {
      return (0, a.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [
          (0, a.jsx)(t.motion.img, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 1.5 },
            src: e || void 0,
            alt: "Banner",
            className: "object-cover w-full",
          }),
          (0, a.jsx)("div", {
            className:
              "absolute w-full h-[45%] bg-gradient-to-b from-[rgba(0,0,0,0.81)] to-[rgba(3,3,3,0)]",
            style: {
              top: "-1px",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              WebkitTransform: "translateZ(0)",
            },
          }),
          (0, a.jsxs)("div", {
            className: "absolute top-[12%] w-full flex flex-col text-white",
            children: [
              (0, a.jsx)(t.motion.h1, {
                initial: { y: -30, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.5 },
                className: `${l.BeyondPerfectionRegular.className} text-[26px] md:text-[56px] !leading-normal`,
                children: "This day",
              }),
              (0, a.jsx)(t.motion.p, {
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
      b = e.i(25626);
    function f({ mainInfo: e }) {
      let l = " ";
      try {
        e.weddingLunarDate && (l = (0, n.formatLunarDate)(e.weddingLunarDate));
      } catch {
        l = " ";
      }
      return (0, a.jsxs)("div", {
        className: `gap-6 md:gap-14 pt-32 pb-40 md:pb-56 md:pt-64 px-10 md:px-20 flex flex-col bg-center bg-cover bg-no-repeat relative ${b.default.className} text-[rgb(146,131,98)]`,
        children: [
          (0, a.jsx)("img", {
            src: "./assets/ecards/wedding-18/background-2.png",
            alt: "Background",
            className:
              "object-cover absolute top-0 h-full left-0 w-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, a.jsxs)("div", {
            className: "flex z-[1]",
            children: [
              (0, a.jsxs)(t.motion.div, {
                initial: { x: -30, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "w-1/2 text-[14px] md:text-[26px] flex flex-col gap-1 md:gap-2",
                children: [
                  (0, a.jsx)("h3", {
                    className: "!font-bold text-[16px] md:text-[28px]",
                    children: "NHÀ GÁI",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-[1px] md:gap-[2px]",
                    children: [
                      e.brideFather?.toString().trim() &&
                        (0, a.jsx)("p", {
                          className: "w-full",
                          children: e.brideFather.toString().trim(),
                        }),
                      e.brideMother?.toString().trim() &&
                        (0, a.jsx)("p", {
                          className: "w-full",
                          children: e.brideMother.toString().trim(),
                        }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(t.motion.div, {
                initial: { x: 30, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "w-1/2 text-[14px] md:text-[26px] flex flex-col gap-1 md:gap-2",
                children: [
                  (0, a.jsx)("h3", {
                    className: "font-bold text-[16px] md:text-[28px]",
                    children: "NHÀ TRAI",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-[1px] md:gap-[2px]",
                    children: [
                      e.groomFather?.toString().trim() &&
                        (0, a.jsx)("p", {
                          className: "w-full",
                          children: e.groomFather.toString().trim(),
                        }),
                      e.groomMother?.toString().trim() &&
                        (0, a.jsx)("p", {
                          className: "w-full",
                          children: e.groomMother.toString().trim(),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, a.jsx)(t.motion.div, {
            initial: { y: 30, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "flex z-[1] justify-center items-center",
            children: (0, a.jsx)("h2", {
              className: "text-lg md:text-4xl md:!leading-[55px]",
              children:
                "KÍNH MỜI THAM DỰ TIỆC CHUNG VUI CỦA GIA ĐÌNH CHÚNG TÔI",
            }),
          }),
          (0, a.jsxs)("div", {
            className: `flex z-[1] relative flex-col justify-center items-center text-center ${c.UVNHoaTay1.className} gap-8 md:gap-16`,
            style: { fontSize: "clamp(42px, 13vw, 135px)" },
            children: [
              (0, a.jsx)(t.motion.h1, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.4 },
                className: "leading-snug whitespace-nowrap",
                children: e.brideName,
              }),
              (0, a.jsx)(t.motion.h2, {
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
              (0, a.jsx)(t.motion.h1, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.4 },
                className: "leading-snug whitespace-nowrap",
                children: e.groomName,
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "flex z-[1] flex-col justify-center items-center",
            children: [
              (0, a.jsxs)(t.motion.h2, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.5 },
                className: "text-xl md:text-[40px]",
                children: [
                  (() => {
                    if (!e.weddingTime) return " ";
                    try {
                      return (0, a.jsx)(a.Fragment, {
                        children: e.weddingTime.slice(0, 5),
                      });
                    } catch {
                      return " ";
                    }
                  })(),
                  ", ",
                  (() => {
                    try {
                      var a;
                      let t;
                      if (!e.weddingDate) return " ";
                      return (
                        (a = e.weddingDate.toString()),
                        (t = new Date(a).getDay()),
                        0 === t ? "Chủ Nhật" : `Thứ ${t + 1}`
                      );
                    } catch {
                      return " ";
                    }
                  })(),
                ],
              }),
              (0, a.jsxs)(t.motion.div, {
                initial: { scale: 0.9, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.6 },
                className: "flex items-center justify-around w-full",
                children: [
                  (0, a.jsxs)("h2", {
                    className:
                      "text-xl md:text-[40px] px-1 md:px-2 py-1 md:py-4 border-y border-solid border-[rgb(146,131,98)]",
                    children: [
                      "THÁNG ",
                      (() => {
                        if (!e.weddingDate) return " ";
                        try {
                          return (0, n.getDatePart)(e.weddingDate, "m");
                        } catch {
                          return " ";
                        }
                      })(),
                    ],
                  }),
                  (0, a.jsx)("h1", {
                    className: `text-8xl md:text-[170px] ${g.FTVVIPHastegi.className} !leading-none pt-6 md:pt-10`,
                    children: (() => {
                      if (!e.weddingDate) return " ";
                      try {
                        return (0, n.getDatePart)(e.weddingDate, "d");
                      } catch {
                        return " ";
                      }
                    })(),
                  }),
                  (0, a.jsxs)("h2", {
                    className:
                      "text-xl md:text-[40px] px-1 md:px-2 py-1 md:py-4 border-y border-solid border-[rgb(146,131,98)]",
                    children: [
                      "NĂM ",
                      (() => {
                        if (!e.weddingDate) return " ";
                        try {
                          return (0, n.getDatePart)(e.weddingDate, "y");
                        } catch {
                          return " ";
                        }
                      })(),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(t.motion.h3, {
                initial: { y: 10, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.7 },
                className: "text-base md:text-[31px] italic",
                children: ["(Vào ngày ", l, ")"],
              }),
            ],
          }),
          (0, a.jsxs)(t.motion.div, {
            initial: { y: 30, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.8, delay: 0.8 },
            className:
              "flex z-[1] flex-col justify-center items-center gap-2 md:gap-8",
            children: [
              (0, a.jsx)("h2", {
                className: "text-lg md:text-[36px]",
                children: "Tổ chức tại",
              }),
              (0, a.jsx)("h1", {
                className: "text-xl md:text-5xl",
                children: e.weddingVenueName?.toUpperCase(),
              }),
              (0, a.jsx)("h2", {
                className: "text-lg md:text-[38px] !leading-tight",
                children: e.weddingVenueAddress,
              }),
            ],
          }),
          e.googleMap &&
            (0, a.jsx)("div", {
              className: "z-[1] w-full flex justify-center items-center",
              children: (0, a.jsxs)("a", {
                href: e.googleMap,
                target: "_blank",
                className:
                  " flex items-center gap-2 text-[#8B7A5A] text-xl md:text-[40px] font-medium cursor-pointer select-none ",
                children: [
                  (0, a.jsx)("img", {
                    src: "./assets/ecards/wedding-18/location.png",
                    alt: "location icon",
                    className: "w-7 h-7 md:w-12 md:h-12",
                  }),
                  (0, a.jsx)("span", {
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
    function y({ date: e }) {
      let i = e.getFullYear(),
        s = e.getMonth(),
        n = new Intl.DateTimeFormat("en-US", { month: "long" }).format(e);
      e.getDay();
      let r = new Date(i, s + 1, 0).getDate(),
        d = new Date(i, s, 1).getDay(),
        o = 0 === d ? 6 : d - 1,
        c = Array.from({ length: 7 * Math.ceil((r + o) / 7) }, (e, a) => {
          let t = a - o + 1;
          return t > 0 && t <= r ? t : null;
        }),
        m = [];
      for (let e = 0; e < c.length; e += 7) m.push(c.slice(e, e + 7));
      return (0, a.jsxs)(t.motion.div, {
        initial: { scale: 0.9, opacity: 0 },
        whileInView: { scale: 1, opacity: 1 },
        viewport: { once: !0 },
        transition: { duration: 0.8 },
        children: [
          (0, a.jsx)(t.motion.h1, {
            initial: { y: -20, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.8, delay: 0.2 },
            className: `${l.BeyondPerfectionRegular.className} text-4xl md:text-7xl pt-6 md:pt-20 pb-4 md:pb-8 !leading-snug`,
            children: n,
          }),
          (0, a.jsxs)("table", {
            className: "w-full table-auto",
            children: [
              (0, a.jsx)("thead", {
                children: (0, a.jsxs)("tr", {
                  className: "text-[14px] md:text-3xl",
                  children: [
                    (0, a.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "MON",
                    }),
                    (0, a.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "TUE",
                    }),
                    (0, a.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "WED",
                    }),
                    (0, a.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "THUR",
                    }),
                    (0, a.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "FRI",
                    }),
                    (0, a.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "SAT",
                    }),
                    (0, a.jsx)("th", {
                      className: "py-2 md:px-4 md:py-8 font-bold",
                      children: "SUN",
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("tbody", {
                children: m.map((l, n) =>
                  (0, a.jsx)(
                    "tr",
                    {
                      className: "text-center text-[13px] md:text-3xl",
                      children: l.map((l, n) => {
                        let r =
                          l &&
                          new Date(i, s, l).toDateString() === e.toDateString();
                        return (0, a.jsxs)(
                          "td",
                          {
                            className: `text-center p-2 md:py-5 md:px-3 ${r ? "relative" : ""}`,
                            children: [
                              l || "",
                              r &&
                                (0, a.jsx)(t.motion.div, {
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
                                  children: (0, a.jsx)("div", {
                                    className:
                                      "w-[37px] md:w-[77px] h-[31px] md:h-[65px]",
                                    children: (0, a.jsx)("div", {
                                      className:
                                        "w-full h-full bg-[url('/assets/ecards/wedding-18/heart.png')] bg-no-repeat bg-center bg-cover scale-110",
                                    }),
                                  }),
                                }),
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
          }),
        ],
      });
    }
    function N({ brideGroom: e }) {
      return (0, a.jsxs)("div", {
        children: [
          (0, a.jsxs)("div", {
            className: `gap-6 md:gap-6 flex flex-col bg-center bg-cover bg-no-repeat relative ${v.default.className} text-[rgb(146,131,98)]`,
            children: [
              (0, a.jsx)("img", {
                src: "./assets/ecards/wedding-18/background-3.png",
                alt: "Background",
                className:
                  "object-cover absolute w-full z-[1] pointer-events-none overflow-hidden",
              }),
              (0, a.jsxs)(t.motion.div, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "z-[1] pt-24 md:pt-44 pb-4 md:pb-8 text-[13px] md:text-[27px] px-6 md:px-14",
                children: [
                  (0, a.jsxs)("p", {
                    children: [
                      "Tình yêu của anh và em là một hành trình kỳ diệu, vượt qua bao thử thách để cùng nhau bước đến ngày trọng đại",
                      (0, a.jsx)("br", {}),
                      "– đám cưới của chúng mình.",
                    ],
                  }),
                  (0, a.jsx)("p", {
                    children:
                      "Đám cưới này là lời cam kết chân thành, là sự bắt đầu của một chương mới – nơi chúng ta cùng vun đắp tổ ấm, cùng sẻ chia mọi vui buồn và cùng nắm tay nhau đi đến cuối con đường mang tên hạnh phúc.",
                  }),
                ],
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: `gap-2 md:gap-6 flex flex-col bg-center bg-cover bg-no-repeat relative ${v.default.className} text-[rgb(146,131,98)]`,
            children: [
              (0, a.jsx)("img", {
                src: "./assets/ecards/wedding-18/background.png",
                alt: "Background",
                className:
                  "object-cover absolute w-full h-full z-[1] pointer-events-none overflow-hidden",
              }),
              (0, a.jsxs)("div", {
                className: "z-[1] pb-12 md:pb-16 overflow-hidden",
                children: [
                  (0, a.jsxs)("div", {
                    className: "relative w-full flex z-[2]",
                    children: [
                      (0, a.jsx)(t.motion.div, {
                        initial: { x: -50, opacity: 0, rotate: -12 },
                        whileInView: { x: 0, opacity: 1, rotate: -12 },
                        viewport: { once: !0 },
                        transition: { duration: 0.8 },
                        className:
                          "absolute w-[53%] border-15 md:border-24 border-solid left-[-8] md:left-[-10] top-8 md:top-20 border-white filter grayscale-0 blur-none contrast-100 brightness-100 opacity-100 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] -rotate-12",
                        children: (0, a.jsx)("div", {
                          className: "aspect-[236/236] w-full overflow-hidden",
                          children: (0, a.jsx)("img", {
                            className: "object-cover w-full h-full",
                            src: e.brideImage || void 0,
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", { className: "w-1/2" }),
                      (0, a.jsxs)(t.motion.div, {
                        initial: { x: 30, opacity: 0 },
                        whileInView: { x: 0, opacity: 1 },
                        viewport: { once: !0 },
                        transition: { duration: 0.8, delay: 0.2 },
                        className: "w-1/2 z-[1] pt-16 pb-20 md:pt-36 md:pb-44",
                        children: [
                          (0, a.jsx)("h2", {
                            className: `${m.FTVVIPArcittyaBegatri.className} text-[34px] md:text-[68px] !leading-[1.2]`,
                            children: "Cô dâu",
                          }),
                          (0, a.jsx)("h1", {
                            className:
                              "text-[25px] md:text-[50px] !leading-snug",
                            children: e.brideName?.toUpperCase(),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "relative w-full flex z-[1]",
                    children: [
                      (0, a.jsx)(t.motion.div, {
                        initial: { x: 50, opacity: 0, rotate: 12 },
                        whileInView: { x: 0, opacity: 1, rotate: 12 },
                        viewport: { once: !0 },
                        transition: { duration: 0.8 },
                        className:
                          "absolute w-[55%] border-15 md:border-24 border-solid right-[-7] md:right-[-15] border-white filter grayscale-0 blur-none contrast-100 brightness-100 opacity-100 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] rotate-12",
                        children: (0, a.jsx)("div", {
                          className: "w-full aspect-[236/236] overflow-hidden",
                          children: (0, a.jsx)("img", {
                            className: "object-cover w-full h-full",
                            src: e.groomImage || void 0,
                          }),
                        }),
                      }),
                      (0, a.jsxs)(t.motion.div, {
                        initial: { x: -30, opacity: 0 },
                        whileInView: { x: 0, opacity: 1 },
                        viewport: { once: !0 },
                        transition: { duration: 0.8, delay: 0.2 },
                        className:
                          "w-[45%] z-[1] pt-[4.5rem] pb-20 md:pt-40 md:pb-48",
                        children: [
                          (0, a.jsx)("h2", {
                            className: `${m.FTVVIPArcittyaBegatri.className} text-[34px] md:text-[68px] !leading-[1.2]`,
                            children: "Chú rể",
                          }),
                          (0, a.jsx)("h1", {
                            className:
                              "text-[25px] md:text-[50px] !leading-snug",
                            children: e.groomName?.toUpperCase(),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", { className: "w-[55%]" }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(t.motion.div, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: "z-[1] text-[14px] md:text-[27px] px-10 md:px-14",
                children: (0, a.jsxs)("p", {
                  children: [
                    "Hôm nay là ngày chúng mình cùng nắm tay",
                    (0, a.jsx)("br", {}),
                    "bước vào một hành trình mới",
                    (0, a.jsx)("br", {}),
                    "- hành trình của yêu thương và sẻ chia.",
                  ],
                }),
              }),
              (0, a.jsx)(t.motion.div, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.2 },
                className: "w-full z-[1] py-8 md:py-12",
                children: (0, a.jsx)("img", {
                  className: "object-cover",
                  src: "./assets/ecards/wedding-18/nhan-cuoi.png",
                }),
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: `gap-6 md:gap-6 pb-16 md:pb-28 flex flex-col bg-center bg-cover bg-no-repeat relative ${v.default.className} text-[rgb(146,131,98)]`,
            children: [
              (0, a.jsx)("img", {
                src: "./assets/ecards/wedding-18/background-4.png",
                alt: "Background",
                className:
                  "object-cover absolute w-full h-full z-[1] pointer-events-none overflow-hidden",
              }),
              (0, a.jsx)("div", {
                className: "z-[1] px-10 md:px-16",
                children: (0, a.jsx)(y, { date: new Date(e.weddingDate) }),
              }),
            ],
          }),
        ],
      });
    }
    var w = e.i(860348);
    function j({ albumImage: e }) {
      return (0, a.jsxs)("div", {
        className: "bg-[rgb(162,149,120)]",
        children: [
          e.length > 0 &&
            (0, a.jsx)("div", {
              className: "pt-8 md:pt-20 px-2 md:pl-6 overflow-hidden",
              children: (0, a.jsx)(t.motion.h1, {
                initial: { x: -50, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: `${w.default.className} text-white text-[30px] md:text-6xl`,
                children: "ALBUM HÌNH CƯỚI",
              }),
            }),
          e.length > 0 &&
            (0, a.jsx)("div", {
              className: "pt-6 md:pt-14 px-5 pb-16 md:pb-28 md:px-10",
              children: (0, a.jsx)("div", {
                className: "flex justify-center flex-wrap",
                children: (0, a.jsx)("div", {
                  className: "grid grid-cols-2 gap-2 md:gap-4 w-full",
                  children:
                    e &&
                    e.length > 0 &&
                    e.map((e, l) =>
                      (0, a.jsx)(
                        t.motion.div,
                        {
                          initial: { opacity: 0, scale: 0.9 },
                          whileInView: { opacity: 1, scale: 1 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5, delay: 0.1 * l },
                          children: (0, a.jsx)("img", {
                            className:
                              "h-auto max-w-full shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                            src: e,
                            alt: `Album h\xecnh cưới ${l}`,
                          }),
                        },
                        l,
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
      I = e.i(472317),
      D = e.i(33160);
    let V =
      "w-full text-[14px] md:text-[30px] border-2 mt-2 md:border-2 border-solid border-[rgba(0,0,0,0.38)] bg-transparent placeholder:text-[rgb(146,131,98)] px-2 py-2 md:px-5 md:py-4 focus:outline-none focus-visible:outline-none";
    function T({ confirm: e }) {
      let [i, s] = (0, d.useState)(!1),
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
        p = (0, d.useCallback)(() => {
          s(!1);
        }, []),
        h = async (e) => {
          e.preventDefault();
          try {
            let e = (0, n.getCookies)("ecard_my_user_invitee_id"),
              a = { ...c };
            ((a.ecard_my_user_invitee_id =
              e && !isNaN(Number(e)) ? Number(e) : 0),
              (void 0 === a.so_nguoi_tham_du || !0 !== a.is_tham_du) &&
                (a.so_nguoi_tham_du = 0));
            let t = await (0, I.AddCongratulations)(a);
            t.success
              ? ((0, n.setCookies)(
                  "ecard_my_user_invitee_id",
                  t.data.data.invitee_id,
                  1825,
                ),
                s(!0))
              : (0, D.showToast)(t.message || "Đăng nhập thất bại", "error");
          } catch (e) {
            (console.error("Login error:", e),
              (0, D.showToast)("Có lỗi xảy ra, vui lòng thử lại!", "error"));
          }
        };
      return (0, a.jsxs)("div", {
        className: `gap-3 md:gap-3 flex flex-col bg-center bg-cover bg-no-repeat relative ${k.default.className} text-[rgb(146,131,98)]`,
        children: [
          (0, a.jsx)("img", {
            src: "./assets/ecards/wedding-18/background-5.png",
            alt: "Background",
            className:
              "object-cover absolute w-full md:h-full z-[1] pointer-events-none overflow-hidden",
          }),
          (0, a.jsxs)("div", {
            className: "z-[1] pt-24 md:pt-52 pb-24 md:pb-40",
            children: [
              (0, a.jsx)(t.motion.div, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className:
                  "pb-2 md:pb-8 text-[13px] md:text-[30px] px-6 md:px-14",
                children: (0, a.jsxs)("p", {
                  children: [
                    "Hãy xác nhận sự có mặt của bạn để chúng mình",
                    (0, a.jsx)("br", {}),
                    "chuẩn bị đón tiếp một cách chu đáo nhất.",
                    (0, a.jsx)("br", {}),
                    "Trân trọng!",
                  ],
                }),
              }),
              (0, a.jsx)("form", {
                className: "",
                onSubmit: h,
                children: (0, a.jsxs)(t.motion.div, {
                  initial: { y: 30, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className:
                    "flex flex-wrap gap-3 md:gap-7 px-6 md:px-16 items-center justify-center",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, a.jsx)("label", {
                          className: "text-sm md:text-[28px]",
                          children: "Tên của bạn:",
                        }),
                        (0, a.jsx)("input", {
                          required: !0,
                          className: `${V} rounded-full`,
                          type: "text",
                          name: "name",
                          maxLength: 200,
                          placeholder: "Vui lòng điền tên của bạn",
                          value: c.name,
                          onChange: (e) => {
                            let { name: a, value: t } = e.target;
                            m((e) => ({ ...e, [a]: t }));
                          },
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, a.jsx)("label", {
                          className: "text-sm md:text-[28px]",
                          children: "Lời chúc của bạn:",
                        }),
                        (0, a.jsx)("textarea", {
                          rows: 4,
                          required: !0,
                          name: "content",
                          className: `${V} rounded-[22px] md:rounded-[40px]`,
                          maxLength: 1e3,
                          placeholder: "Gửi lời chúc đến Dâu Rể nhé!",
                          value: c.content,
                          onChange: (e) => {
                            let { name: a, value: t } = e.target;
                            m((e) => ({ ...e, [a]: t }));
                          },
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, a.jsx)("label", {
                          className: "text-sm md:text-[28px]",
                          children: "Bạn tham dự được chứ?",
                        }),
                        (0, a.jsxs)("select", {
                          className: `${V} rounded-full`,
                          name: "is_tham_du",
                          required: !0,
                          value:
                            null === c.is_tham_du
                              ? ""
                              : c.is_tham_du
                                ? "true"
                                : "false",
                          onChange: (e) => {
                            let { name: a, value: t } = e.target;
                            m((e) => ({
                              ...e,
                              [a]:
                                "is_tham_du" === a
                                  ? "" === t
                                    ? null
                                    : "true" === t
                                  : t,
                            }));
                          },
                          children: [
                            (0, a.jsx)("option", {
                              value: "",
                              children: "Bạn Sẽ Tham Dự Cùng Chúng Mình Nhé?",
                            }),
                            (0, a.jsx)("option", {
                              value: "true",
                              children: "Mình Sẽ Tham Dự Nha",
                            }),
                            (0, a.jsx)("option", {
                              value: "false",
                              children:
                                "Tiếc Quá! Mình Không Thể Tham Dự Được Mất Rồi",
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.is_tham_du &&
                      (0, a.jsxs)("div", {
                        className: "w-full text-start",
                        children: [
                          (0, a.jsx)("label", {
                            className: "text-sm md:text-[28px]",
                            children: "Số người tham dự:",
                          }),
                          (0, a.jsx)("input", {
                            required: !0,
                            className: `${V} rounded-full`,
                            type: "number",
                            name: "so_nguoi_tham_du",
                            min: 1,
                            placeholder: "Số lượng người đến tham dự",
                            value: c.so_nguoi_tham_du,
                            onChange: (e) => {
                              let { name: a, value: t, type: l } = e.target;
                              m((e) => ({
                                ...e,
                                [a]:
                                  "number" === l
                                    ? "" === t
                                      ? ""
                                      : Number(t)
                                    : t,
                              }));
                            },
                          }),
                        ],
                      }),
                    (0, a.jsx)(t.motion.button, {
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      type: "submit",
                      className:
                        "cursor-pointer focus:outline-none border-[1px] md:border-[2px] border-solid border-[rgb(146,131,98)] text-white bg-[rgb(162,149,120)] rounded-full shadow-md shadow-black/25 focus:ring-4 font-semibold text-[19px] py-1 md:text-[40px] md:py-6 w-full",
                      children: "GỬI LỜI CHÚC",
                    }),
                    e.qrImage &&
                      (0, a.jsx)(t.motion.button, {
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
          (0, a.jsxs)(_.Dialog, {
            open: r,
            onClose: x,
            className: "relative z-10",
            children: [
              (0, a.jsx)(_.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, a.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, a.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, a.jsxs)(_.DialogPanel, {
                    transition: !0,
                    className:
                      "relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, a.jsx)("img", {
                        src: "./assets/ecards/wedding-18/background-6.png",
                        alt: "Background",
                        className:
                          "object-cover absolute top-0 left-0 w-full h-full z-1 pointer-events-none overflow-hidden",
                      }),
                      (0, a.jsx)("button", {
                        type: "button",
                        className:
                          "absolute md:right-5 right-2 top-2 md:top-5 z-20 rounded-full p-1 text-dark focus:outline-none",
                        onClick: x,
                        "aria-label": "Close",
                        children: (0, a.jsx)("svg", {
                          className: "h-7 w-7 md:h-12 md:w-12",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          children: (0, a.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "relative z-19 py-9 md:py-14 px-4 md:px-7",
                        children: (0, a.jsxs)("div", {
                          className:
                            "flex justify-center items-center gap-3 md:gap-6",
                          children: [
                            (0, a.jsx)("div", {
                              className: "w-4/12",
                              children: (0, a.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, a.jsx)("div", {
                                  className: "w-full",
                                  children: (0, a.jsx)("img", {
                                    className: "w-full object-cover",
                                    src: e.qrImage || void 0,
                                    alt: "QR Code",
                                  }),
                                }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "w-8/12",
                              children: (0, a.jsxs)("div", {
                                className: `flex flex-col text-[rgb(146,131,98)] gap-2 md:gap-3 ${k.default.className}`,
                                children: [
                                  (0, a.jsx)("h2", {
                                    className:
                                      "text-[17px] md:text-[33px] border-b-2 md:border-b-4 border-solid border-[rgb(146,131,98)] !leading-relaxed",
                                    children: e.bankAccountName,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: "md:text-[30px]",
                                        children: e.bankName,
                                      }),
                                      (0, a.jsx)("p", {
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
          (0, a.jsxs)(_.Dialog, {
            open: i,
            onClose: p,
            className: "relative z-10",
            children: [
              (0, a.jsx)(_.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, a.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, a.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, a.jsxs)(_.DialogPanel, {
                    transition: !0,
                    className:
                      "relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, a.jsx)("img", {
                        src: "./assets/ecards/wedding-18/background-7.png",
                        alt: "Background",
                        className:
                          "object-cover absolute top-0 left-0 w-full h-full z-1 pointer-events-none overflow-hidden",
                      }),
                      (0, a.jsx)("button", {
                        type: "button",
                        className:
                          "absolute md:right-5 right-2 top-2 md:top-5 z-20 rounded-full p-1 text-dark focus:outline-none",
                        onClick: p,
                        "aria-label": "Close",
                        children: (0, a.jsx)("svg", {
                          className: "h-7 w-7 md:h-12 md:w-12",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          children: (0, a.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "relative z-19 py-8 md:py-16 pl-8 pr-6 md:pl-20 md:pr-12",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "flex justify-center items-start gap-3 md:gap-6",
                            children: [
                              (0, a.jsx)("div", {
                                className: "w-9/12",
                                children: (0, a.jsxs)("div", {
                                  className:
                                    "flex justify-center items-center relative",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        " w-full aspect-[256/232] -rotate-6 border-[12px] border-b-[34px] md:border-[24px] md:border-b-[64px] border-solid border-white shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                                      children: (0, a.jsx)("img", {
                                        className: "w-full object-cover h-full",
                                        src: e.thankyouImage || void 0,
                                        alt: "Thank you",
                                      }),
                                    }),
                                    (0, a.jsx)("img", {
                                      className:
                                        "w-[35%] object-cover absolute right-[-20%] bottom-[-5%]",
                                      src: "./assets/ecards/wedding-18/flower.png",
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: `pt-4 w-3/12 flex flex-col text-[rgb(146,131,98)] gap-2 md:gap-3 ${k.default.className} justify-center items-end`,
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "flex",
                                    children: (0, a.jsx)("p", {
                                      className:
                                        "px-3 text-3xl md:text-6xl border-b-2 md:border-b-4 border-solid border-[rgb(146,131,98)] !leading-relaxed",
                                      children: (() => {
                                        if (!e.weddingDate) return " ";
                                        try {
                                          return (0, n.getDatePart)(
                                            e.weddingDate,
                                            "d",
                                          );
                                        } catch {
                                          return " ";
                                        }
                                      })(),
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "flex",
                                    children: (0, a.jsx)("p", {
                                      className: "px-3 text-3xl md:text-6xl",
                                      children: (() => {
                                        if (!e.weddingDate) return " ";
                                        try {
                                          return (0, n.getDatePart)(
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
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-col pt-8 md:pt-14 text-[rgb(146,131,98)] text-center",
                            children: [
                              (0, a.jsx)("h3", {
                                className: `text-2xl md:text-5xl ${l.BeyondPerfectionRegular.className} !leading-loose`,
                                children: "Thank you!",
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "text-[17px] md:text-3xl pt-1 md:pt-1 !leading-snug",
                                children: [
                                  "Cảm ơn bạn đã dành thời gian phản hồi.",
                                  (0, a.jsx)("br", {}),
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
    var C = e.i(595358);
    function B({ backgroundImage: e }) {
      return (0, a.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [
          (0, a.jsx)("img", {
            src: e || void 0,
            alt: "Banner",
            className: "object-cover w-full h-full",
          }),
          (0, a.jsx)("div", {
            className:
              "absolute w-full h-[70%] bg-gradient-to-b from-[rgba(2,2,2,0.3)] to-[rgba(234,237,238,0)]",
            style: {
              top: "-1px",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              WebkitTransform: "translateZ(0)",
            },
          }),
          (0, a.jsxs)("div", {
            className:
              "absolute top-[8%] md:top-[10%] w-full flex flex-col px-8 md:px-20 gap-3 md:gap-5 text-white",
            children: [
              (0, a.jsxs)(t.motion.h1, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: `${C.default.className} text-[13px] md:text-[26px] tracking-normal !leading-normal`,
                children: [
                  "Cảm ơn bạn đã dành tình cảm cho chúng mình!",
                  (0, a.jsx)("br", {}),
                  "Sự hiện diện của bạn chính là món quà ý nghĩa nhất, và chúng mình vô cùng trân quý khi được cùng bạn chia sẻ niềm hạnh phúc trong ngày trọng đại này.",
                ],
              }),
              (0, a.jsx)(t.motion.p, {
                initial: { scale: 0.8, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8, delay: 0.3 },
                className: `text-xl md:text-5xl ${l.BeyondPerfectionRegular.className} !leading-loose`,
                children: "Thank you!",
              }),
            ],
          }),
        ],
      });
    }
    var F = e.i(56506);
    e.s(
      [
        "default",
        0,
        ({ refData: e, guestName: t, inviteeid: l }) => {
          let i = t && !Array.isArray(t) ? decodeURIComponent(t) : void 0;
          l && l > 0 && (0, n.setCookies)("ecard_my_user_invitee_id", l, 1825);
          let s = e?.formData || {},
            d = s.chure || " ",
            o = s.codau || " ",
            c = s.nha_trai_ong ? "Ông " + s.nha_trai_ong : "",
            m = s.nha_trai_ba ? "Bà " + s.nha_trai_ba : "",
            x = s.nha_gai_ong ? "Ông " + s.nha_gai_ong : "",
            h = s.nha_gai_ba ? "Bà " + s.nha_gai_ba : "",
            g = e.formData.ten_le,
            b = e.formData.ngay_hon_le,
            v = e.formData.ngay_hon_le_am,
            y = e.formData.gio_hon_le,
            w = e.formData.tiec_ten,
            _ = e.formData.tiec_dia_chi,
            k = e.formData.google_map,
            I = s.ngh ? s.ngh : "",
            D = s.stk ? s.stk : "",
            V = s.ttk ? s.ttk : "",
            C = e?.imagesAlbum || [],
            S = (0, n.getImagesByFieldCode)("banner_image_url", C)[0],
            z = (0, n.getImagesByFieldCode)("album2", C)[0],
            $ = (0, n.getImagesByFieldCode)("album3", C)[0],
            A = (0, n.getImagesByFieldCode)("album4", C)[0],
            L = (0, n.getImagesByFieldCode)("album5", C)[0],
            M = (0, n.getImagesByFieldCode)("album10", C),
            H = (0, n.getImagesByFieldCode)("image_bank_url", C)[0],
            P = (0, n.getImagesByFieldCode)("footer_image_url", C)[0],
            U = (0, n.getImagesByFieldCode)("album6", C)[0];
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className:
                "begindowload max-w-4xl mx-auto text-center bg-[#F8FDFF]",
              children: [
                (0, a.jsx)(r, {
                  backgroundImage: S,
                  brideName: o,
                  groomName: d,
                  weddingDate: b,
                }),
                (0, a.jsx)(p, {
                  invitation: {
                    groomName: d,
                    brideName: o,
                    weddingDate: b,
                    weddingTime: y,
                    mainImage: z,
                    guestName: i,
                    weddingName: g,
                  },
                }),
                (0, a.jsx)(u, { bannerImage: $ }),
                (0, a.jsx)(f, {
                  mainInfo: {
                    groomFather: c,
                    groomMother: m,
                    brideFather: x,
                    brideMother: h,
                    groomName: d,
                    brideName: o,
                    weddingDate: b,
                    weddingLunarDate: v,
                    weddingTime: y,
                    weddingVenueName: w,
                    weddingVenueAddress: _,
                    googleMap: k,
                  },
                }),
                (0, a.jsx)(N, {
                  brideGroom: {
                    brideName: o,
                    groomName: d,
                    brideImage: L,
                    groomImage: A,
                    weddingDate: b,
                  },
                }),
                (0, a.jsx)(j, { albumImage: M }),
                (0, a.jsx)(T, {
                  confirm: {
                    id: e.id ?? 0,
                    guestName: i ?? "",
                    qrImage: H,
                    bankAccountName: V,
                    bankName: I,
                    bankAccountNumber: D,
                    thankyouImage: U,
                    weddingDate: b,
                  },
                }),
                (0, a.jsx)(B, { backgroundImage: P }),
                (0, a.jsx)(F.default, {
                  urlMp3: s.audio,
                  ecardMyUserId: Number(e.id),
                }),
              ],
            }),
          });
        },
      ],
      237791,
    );
  },
]);
