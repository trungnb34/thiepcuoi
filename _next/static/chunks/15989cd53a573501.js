(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  144150,
  (e) => {
    e.v({ className: "lora_1af40280-module__IMuMaG__className" });
  },
  313112,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(846932);
    e.i(283210);
    var i = e.i(889235),
      l = e.i(637443),
      s = e.i(589997),
      n = e.i(144150);
    let r = {
      className: n.default.className,
      style: { fontFamily: "'Lora', 'Lora Fallback'", fontStyle: "normal" },
    };
    function d({
      backgroundImage: e,
      groomName: n,
      brideName: d,
      weddingDate: o,
      weddingDate2: c,
    }) {
      let m = { d: " ", m: " ", y: " " },
        x = { d: " ", m: " ", y: " " };
      if (o)
        try {
          ((m.d = (0, s.getDatePart)(o, "d") || " "),
            (m.m = (0, s.getDatePart)(o, "m") || " "),
            (m.y = (0, s.getDatePart)(o, "y") || " "));
        } catch {}
      if (c)
        try {
          ((x.d = (0, s.getDatePart)(c, "d") || " "),
            (x.m = (0, s.getDatePart)(c, "m") || " "),
            (x.y = (0, s.getDatePart)(c, "y") || " "));
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
                className: `${l.Summerfun.className} gap-3 md:gap-7 text-2xl md:text-5xl flex items-center justify-center tracking-wide`,
                children: [
                  (0, t.jsx)("h1", { className: "font-medium", children: n }),
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
                className: `text-3xl md:text-5xl ${r.className} font-semibold tracking-widest`,
                children: [m.d, ".", m.m, ".", m.y],
              }),
              (0, t.jsx)("span", {
                className: `${i.BeyondPerfectionRegular.className} text-xl md:text-4xl`,
                children: "&",
              }),
              c &&
                (0, t.jsxs)(a.motion.p, {
                  initial: { y: 30, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, delay: 0.9 },
                  className: `text-3xl md:text-5xl ${r.className} font-semibold tracking-widest`,
                  children: [x.d, ".", x.m, ".", x.y],
                }),
            ],
          }),
        ],
      });
    }
    null != n.default.variable && (r.variable = n.default.variable);
    var o = e.i(271645),
      c = e.i(752392),
      m = e.i(902802),
      x = e.i(298826),
      p = e.i(677169);
    function h({ invitation: e }) {
      var a;
      let [i, l] = (0, o.useState)({ days: 0, hours: 0, min: 0, sec: 0 }),
        s = (0, o.useMemo)(
          () =>
            e.weddingDate && e.weddingTime
              ? new Date(`${e.weddingDate}T${e.weddingTime}`)
              : null,
          [e.weddingDate, e.weddingTime],
        );
      return (
        (0, o.useEffect)(() => {
          if (!s) return;
          let e = () => {
            let e = s.getTime() - Date.now();
            if (e <= 0) return void l({ days: 0, hours: 0, min: 0, sec: 0 });
            let t = Math.floor(e / 864e5),
              a = Math.floor((e / 36e5) % 24);
            l({
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
          className: `gap-6 md:gap-12 pt-16 md:pb-20 md:pt-44 flex flex-col bg-center bg-cover bg-no-repeat relative ${c.default.className} text-[rgb(146,131,98)]`,
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
                    "THƯ MỜI THAM DỰ ",
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
                      className: `px-6 text-red-700 text-2xl md:text-5xl ${p.ViceroyJF.className} border-b-2 border-dotted border-gray-400`,
                      children: e.guestName,
                    }),
                  }),
                (0, t.jsxs)("div", {
                  className: `flex z-[1] relative flex-col justify-center items-center text-[40px] md:text-8xl ${m.UVNHoaTay1.className} gap-4 md:gap-8`,
                  children: [
                    (0, t.jsx)("h1", {
                      className: "leading-snug",
                      children: e.groomName,
                    }),
                    (0, t.jsx)("h2", {
                      className: `text-[38px] md:text-8xl ${x.FTVVIPArcittyaBegatri.className} !leading-5 md:!leading-[80px]
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
                          o.default.Fragment,
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
    var g = e.i(291502);
    function u({ bannerImage: e }) {
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
                className: `text-lg md:text-3xl ${g.default.className}`,
                children: "OUR HEARTS BECOME ONE",
              }),
            ],
          }),
        ],
      });
    }
    var b = e.i(883907),
      y = e.i(25626);
    let w = (e) => {
      let t = new Date(e).getDay();
      return 0 === t ? "Chủ Nhật" : `Thứ ${t + 1}`;
    };
    function f({ mainInfo: e }) {
      let i = " ";
      try {
        e.weddingLunarDate && (i = (0, s.formatLunarDate)(e.weddingLunarDate));
      } catch {
        i = " ";
      }
      let l = " ";
      try {
        e.weddingLunarDate2 &&
          (l = (0, s.formatLunarDate)(e.weddingLunarDate2));
      } catch {
        l = " ";
      }
      return (0, t.jsxs)("div", {
        className: `gap-6 md:gap-14 pt-32 pb-40 md:pb-56 md:pt-64 px-10 md:px-20 flex flex-col bg-center bg-cover bg-no-repeat relative ${y.default.className} text-[rgb(146,131,98)]`,
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
            className: `flex z-[1] relative flex-col justify-center items-center text-center ${m.UVNHoaTay1.className} gap-8 md:gap-16`,
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
                className: `${x.FTVVIPArcittyaBegatri.className} !leading-[80px]
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
                      if (!e.weddingDate) return " ";
                      return w(e.weddingDate.toString());
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
                          return (0, s.getDatePart)(e.weddingDate, "m");
                        } catch {
                          return " ";
                        }
                      })(),
                    ],
                  }),
                  (0, t.jsx)("h1", {
                    className: `text-8xl md:text-[170px] ${b.FTVVIPHastegi.className} !leading-none pt-6 md:pt-10`,
                    children: (() => {
                      if (!e.weddingDate) return " ";
                      try {
                        return (0, s.getDatePart)(e.weddingDate, "d");
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
                          return (0, s.getDatePart)(e.weddingDate, "y");
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
                    if (!e.weddingTime2) return " ";
                    try {
                      return (0, t.jsx)(t.Fragment, {
                        children: e.weddingTime2.slice(0, 5),
                      });
                    } catch {
                      return " ";
                    }
                  })(),
                  ", ",
                  (() => {
                    try {
                      if (!e.weddingDate2) return " ";
                      return w(e.weddingDate2.toString());
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
                        if (!e.weddingDate2) return " ";
                        try {
                          return (0, s.getDatePart)(e.weddingDate2, "m");
                        } catch {
                          return " ";
                        }
                      })(),
                    ],
                  }),
                  (0, t.jsx)("h1", {
                    className: `text-8xl md:text-[170px] ${b.FTVVIPHastegi.className} !leading-none pt-6 md:pt-10`,
                    children: (() => {
                      if (!e.weddingDate2) return " ";
                      try {
                        return (0, s.getDatePart)(e.weddingDate2, "d");
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
                        if (!e.weddingDate2) return " ";
                        try {
                          return (0, s.getDatePart)(e.weddingDate2, "y");
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
                children: ["(Vào ngày ", l, ")"],
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
    var N = e.i(302553);
    function v({ date: e, date2: l }) {
      let s = e.getFullYear(),
        n = e.getMonth(),
        r = new Intl.DateTimeFormat("en-US", { month: "long" }).format(e);
      e.getDay();
      let d = new Date(s, n + 1, 0).getDate(),
        o = new Date(s, n, 1).getDay(),
        c = 0 === o ? 6 : o - 1,
        m = Array.from({ length: 7 * Math.ceil((d + c) / 7) }, (e, t) => {
          let a = t - c + 1;
          return a > 0 && a <= d ? a : null;
        }),
        x = [];
      for (let e = 0; e < m.length; e += 7) x.push(m.slice(e, e + 7));
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
            children: r,
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
                children: x.map((i, r) =>
                  (0, t.jsx)(
                    "tr",
                    {
                      className: "text-center text-[13px] md:text-3xl",
                      children: i.map((i, r) => {
                        let d =
                            i &&
                            new Date(s, n, i).toDateString() ===
                              e.toDateString(),
                          o =
                            i &&
                            new Date(s, n, i).toDateString() ===
                              l.toDateString();
                        return (0, t.jsxs)(
                          "td",
                          {
                            className: `text-center p-2 md:py-5 md:px-3 ${d || o ? "relative" : ""}`,
                            children: [
                              i || "",
                              (d || o) &&
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
                          r,
                        );
                      }),
                    },
                    r,
                  ),
                ),
              }),
            ],
          }),
        ],
      });
    }
    function j({ brideGroom: e }) {
      return (0, t.jsxs)("div", {
        children: [
          (0, t.jsxs)("div", {
            className: `gap-6 md:gap-6 flex flex-col bg-center bg-cover bg-no-repeat relative ${N.default.className} text-[rgb(146,131,98)]`,
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
            className: `gap-2 md:gap-6 flex flex-col bg-center bg-cover bg-no-repeat relative ${N.default.className} text-[rgb(146,131,98)]`,
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
                            src: e.brideImage || void 0,
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
                            className: `${x.FTVVIPArcittyaBegatri.className} text-[34px] md:text-[68px] !leading-[1.2]`,
                            children: "Cô dâu",
                          }),
                          (0, t.jsx)("h1", {
                            className:
                              "text-[25px] md:text-[50px] !leading-snug",
                            children: e.brideName?.toUpperCase(),
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
                            src: e.groomImage || void 0,
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
                            className: `${x.FTVVIPArcittyaBegatri.className} text-[34px] md:text-[68px] !leading-[1.2]`,
                            children: "Chú rể",
                          }),
                          (0, t.jsx)("h1", {
                            className:
                              "text-[25px] md:text-[50px] !leading-snug",
                            children: e.groomName?.toUpperCase(),
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
            className: `gap-6 md:gap-6 pb-16 md:pb-28 flex flex-col bg-center bg-cover bg-no-repeat relative ${N.default.className} text-[rgb(146,131,98)]`,
            children: [
              (0, t.jsx)("img", {
                src: "./assets/ecards/wedding-18/background-4.png",
                alt: "Background",
                className:
                  "object-cover absolute w-full h-full z-[1] pointer-events-none overflow-hidden",
              }),
              (0, t.jsx)("div", {
                className: "z-[1] px-10 md:px-16",
                children: (0, t.jsx)(v, {
                  date: new Date(e.weddingDate),
                  date2: new Date(e.weddingDate2),
                }),
              }),
            ],
          }),
        ],
      });
    }
    var _ = e.i(860348);
    function D({ albumImage: e }) {
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
                className: `${_.default.className} text-white text-[30px] md:text-6xl`,
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
    var I = e.i(854878),
      k = e.i(661529),
      V = e.i(472317),
      T = e.i(33160);
    let C =
      "w-full text-[14px] md:text-[30px] border-2 mt-2 md:border-2 border-solid border-[rgba(0,0,0,0.38)] bg-transparent placeholder:text-[rgb(146,131,98)] px-2 py-2 md:px-5 md:py-4 focus:outline-none focus-visible:outline-none";
    function B({ confirm: e }) {
      let [l, n] = (0, o.useState)(!1),
        [r, d] = (0, o.useState)(!1),
        [c, m] = (0, o.useState)({
          id: 0,
          ecard_my_user_id: Number(e.id),
          ecard_my_user_invitee_id: 0,
          name: e.guestName ?? "",
          content: "",
          is_tham_du: null,
          so_nguoi_tham_du: void 0,
        }),
        x = (0, o.useCallback)(() => {
          d(!1);
        }, []),
        p = (0, o.useCallback)(() => {
          n(!1);
        }, []),
        h = async (e) => {
          e.preventDefault();
          try {
            let e = (0, s.getCookies)("ecard_my_user_invitee_id"),
              t = { ...c };
            ((t.ecard_my_user_invitee_id =
              e && !isNaN(Number(e)) ? Number(e) : 0),
              (void 0 === t.so_nguoi_tham_du || !0 !== t.is_tham_du) &&
                (t.so_nguoi_tham_du = 0));
            let a = await (0, V.AddCongratulations)(t);
            a.success
              ? ((0, s.setCookies)(
                  "ecard_my_user_invitee_id",
                  a.data.data.invitee_id,
                  1825,
                ),
                n(!0))
              : (0, T.showToast)(a.message || "Đăng nhập thất bại", "error");
          } catch (e) {
            (console.error("Login error:", e),
              (0, T.showToast)("Có lỗi xảy ra, vui lòng thử lại!", "error"));
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
                          className: `${C} rounded-full`,
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
                          className: `${C} rounded-[22px] md:rounded-[40px]`,
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
                          className: `${C} rounded-full`,
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
                              children: "Bạn Có Tham Dự Không?",
                            }),
                            (0, t.jsx)("option", {
                              value: "true",
                              children: "Có Thể Tham Dự",
                            }),
                            (0, t.jsx)("option", {
                              value: "false",
                              children: "Không Thể Tham Dự",
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
                            className: `${C} rounded-full`,
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
          (0, t.jsxs)(I.Dialog, {
            open: r,
            onClose: x,
            className: "relative z-10",
            children: [
              (0, t.jsx)(I.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(I.DialogPanel, {
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
          (0, t.jsxs)(I.Dialog, {
            open: l,
            onClose: p,
            className: "relative z-10",
            children: [
              (0, t.jsx)(I.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(I.DialogPanel, {
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
                        onClick: p,
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
                                          return (0, s.getDatePart)(
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
                                          return (0, s.getDatePart)(
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
    var z = e.i(595358);
    function $({ backgroundImage: e }) {
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
                className: `${z.default.className} text-[13px] md:text-[26px] tracking-normal !leading-normal`,
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
    var S = e.i(56506);
    e.s(
      [
        "default",
        0,
        ({ refData: e, guestName: a, inviteeid: i }) => {
          let l = a && !Array.isArray(a) ? decodeURIComponent(a) : void 0;
          i && i > 0 && (0, s.setCookies)("ecard_my_user_invitee_id", i, 1825);
          let n = e?.formData || {},
            r = n.chure || " ",
            o = n.codau || " ",
            c = n.nha_trai_ong ? "Ông " + n.nha_trai_ong : "",
            m = n.nha_trai_ba ? "Bà " + n.nha_trai_ba : "",
            x = n.nha_gai_ong ? "Ông " + n.nha_gai_ong : "",
            p = n.nha_gai_ba ? "Bà " + n.nha_gai_ba : "",
            g = e.formData.ten_le,
            b = e.formData.ngay_hon_le,
            y = e.formData.ngay_hon_le_am,
            w = e.formData.gio_hon_le,
            N = e.formData.nha_trai_ngay_hon_le,
            v = e.formData.nha_trai_ngay_hon_le_am,
            _ = e.formData.tiec_nha_trai_gio,
            I = e.formData.tiec_ten,
            k = e.formData.tiec_dia_chi,
            V = e.formData.google_map,
            T = n.ngh ? n.ngh : "",
            C = n.stk ? n.stk : "",
            z = n.ttk ? n.ttk : "",
            F = e?.imagesAlbum || [],
            M = (0, s.getImagesByFieldCode)("banner_image_url", F)[0],
            A = (0, s.getImagesByFieldCode)("album2", F)[0],
            P = (0, s.getImagesByFieldCode)("album3", F)[0],
            H = (0, s.getImagesByFieldCode)("album4", F)[0],
            L = (0, s.getImagesByFieldCode)("album5", F)[0],
            U = (0, s.getImagesByFieldCode)("album10", F),
            R = (0, s.getImagesByFieldCode)("image_bank_url", F)[0],
            G = (0, s.getImagesByFieldCode)("footer_image_url", F)[0],
            q = (0, s.getImagesByFieldCode)("album6", F)[0];
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
              className:
                "begindowload max-w-4xl mx-auto text-center bg-[#F8FDFF]",
              children: [
                (0, t.jsx)(d, {
                  backgroundImage: M,
                  brideName: o,
                  groomName: r,
                  weddingDate: b,
                  weddingDate2: N,
                }),
                (0, t.jsx)(h, {
                  invitation: {
                    groomName: r,
                    brideName: o,
                    weddingDate: b,
                    weddingTime: w,
                    mainImage: A,
                    guestName: l,
                    weddingName: g,
                  },
                }),
                (0, t.jsx)(u, { bannerImage: P }),
                (0, t.jsx)(f, {
                  mainInfo: {
                    groomFather: c,
                    groomMother: m,
                    brideFather: x,
                    brideMother: p,
                    groomName: r,
                    brideName: o,
                    weddingDate: b,
                    weddingLunarDate: y,
                    weddingTime: w,
                    weddingVenueName: I,
                    weddingVenueAddress: k,
                    googleMap: V,
                    weddingDate2: N,
                    weddingLunarDate2: v,
                    weddingTime2: _,
                  },
                }),
                (0, t.jsx)(j, {
                  brideGroom: {
                    brideName: o,
                    groomName: r,
                    brideImage: L,
                    groomImage: H,
                    weddingDate: b,
                    weddingDate2: N,
                  },
                }),
                (0, t.jsx)(D, { albumImage: U }),
                (0, t.jsx)(B, {
                  confirm: {
                    id: e.id ?? 0,
                    guestName: l ?? "",
                    qrImage: R,
                    bankAccountName: z,
                    bankName: T,
                    bankAccountNumber: C,
                    thankyouImage: q,
                    weddingDate: b,
                  },
                }),
                (0, t.jsx)($, { backgroundImage: G }),
                (0, t.jsx)(S.default, {
                  urlMp3: n.audio,
                  ecardMyUserId: Number(e.id),
                }),
              ],
            }),
          });
        },
      ],
      313112,
    );
  },
]);
