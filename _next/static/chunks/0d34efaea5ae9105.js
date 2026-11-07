(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  516900,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(589997),
      s = e.i(56506),
      l = e.i(846932);
    e.i(283210);
    var i = e.i(743966),
      i = i,
      r = e.i(687134),
      r = r;
    function n({ data: e }) {
      let {
          backgroundImage: a,
          groomName: s,
          brideName: n,
          ceremonyDate: c,
        } = e,
        d = c
          ? `${String(c.getDate()).padStart(2, "0")} - ${String(c.getMonth() + 1).padStart(2, "0")} - ${c.getFullYear()}`
          : "";
      return (0, t.jsxs)("div", {
        className:
          "relative flex flex-col items-center justify-center gap-4 md:gap-5 pb-10 md:pb-20",
        children: [
          (0, t.jsx)("img", {
            className: "object-cover w-full h-full absolute inset-0",
            src: "./assets/ecards/wedding-8/background-banner.png",
            alt: "Background Banner",
          }),
          (0, t.jsxs)("div", {
            className:
              "relative flex flex-col items-center justify-center md:gap-2",
            children: [
              (0, t.jsxs)("div", {
                className: "w-[37%] md:w-1/3 relative",
                children: [
                  (0, t.jsx)(l.motion.img, {
                    className: "object-cover w-full",
                    src: "./assets/ecards/wedding-8/happy-wedding.png",
                    alt: "Happy Wedding",
                    style: { transformOrigin: "top center" },
                    animate: { rotate: [-8, 8, -8] },
                    transition: {
                      duration: 1.2,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                    },
                  }),
                  (0, t.jsx)("img", {
                    className:
                      "object-cover w-9/12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                    src: "./assets/ecards/wedding-8/effect.gif",
                    alt: "Effect",
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: `${i.default.className} text-[45px] md:text-8xl flex items-center justify-center gap-3 md:gap-6`,
                children: [
                  (0, t.jsx)("h1", {
                    className: "font-medium !leading-snug",
                    children: n,
                  }),
                  (0, t.jsx)("span", {
                    className: "text-[45px] md:text-[82px]",
                    children: "&",
                  }),
                  (0, t.jsx)("h1", {
                    className: "font-medium !leading-snug",
                    children: s,
                  }),
                ],
              }),
              d &&
                (0, t.jsx)("p", {
                  className: `${r.default.className} mt-2 md:mt-3 text-lg md:text-[40px] !leading-snug`,
                  children: d,
                }),
            ],
          }),
          a &&
            (0, t.jsx)("div", {
              className:
                "relative md:mt-4 w-[85%] border-[5px] md:border-[9px] border-[rgb(0,128,55)]",
              children: (0, t.jsx)("img", {
                className: "object-cover w-full aspect-[2/3]",
                src: a,
                alt: "Wedding",
              }),
            }),
        ],
      });
    }
    var i = i,
      c = e.i(803215),
      c = c,
      r = r,
      d = e.i(412732),
      d = d,
      o = e.i(830811),
      o = o,
      m = e.i(476351),
      m = m,
      x = e.i(311379),
      x = x,
      g = e.i(513448),
      g = g;
    function u({ mainInfo: e }) {
      var s, l, n;
      let u = " ";
      try {
        e.ceremonyLunarDate &&
          (u = (0, a.formatLunarDate)(e.ceremonyLunarDate));
      } catch {
        u = " ";
      }
      return (0, t.jsxs)("div", {
        className:
          "relative flex flex-col items-center justify-center gap-4 md:gap-5 pb-10 md:pb-20",
        children: [
          (0, t.jsx)("img", {
            className: "object-cover w-full h-full absolute inset-0",
            src: "./assets/ecards/wedding-8/background-2.png",
            alt: "Background Banner",
          }),
          (0, t.jsxs)("div", {
            className:
              "relative pt-4 md:pt-10 px-3 md:px-7 w-full flex flex-col gap-6 md:gap-10",
            children: [
              (0, t.jsxs)("div", {
                className: `text-[20px] ${c.default.className} text-[rgb(0,128,55)] md:text-[42px] !leading-snug flex flex-col gap-1 md:gap-2`,
                children: [
                  (0, t.jsx)("h3", {
                    className: "",
                    children: "Hôn nhân là chuyện cả đời",
                  }),
                  (0, t.jsx)("h3", {
                    children: "Yêu người vừa ý, cưới người mình thương",
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  "relative bg-white py-5 md:py-12 px-1 border-dashed border md:border-2 rounded-3xl md:rounded-[36px] border-[rgb(148,1,1)]",
                children: [
                  (0, t.jsx)("img", {
                    className:
                      "object-cover w-[26%] absolute bottom-0 right-14 opacity-35",
                    src: "./assets/ecards/wedding-8/heart-balloon.png",
                    alt: "Background Banner",
                  }),
                  (0, t.jsxs)("div", {
                    className: "gap-6 md:gap-11 flex flex-col",
                    children: [
                      (0, t.jsxs)("div", {
                        className: `flex ${r.default.className}`,
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "w-[40%] text-[10px] font-bold md:text-[21px] flex flex-col gap-1 uppercase items-center justify-center",
                            children: [
                              (0, t.jsx)("h3", {
                                className: "",
                                children: "NHÀ GÁI",
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "flex flex-col gap-[1px] md:gap-[2px]",
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
                          (0, t.jsx)("div", {
                            className: "w-[18%] md:w-[20%]",
                            children: (0, t.jsx)("div", {
                              className: "w-full overflow-hidden",
                              children: (0, t.jsx)("img", {
                                className: "w-full object-cover",
                                src: "./assets/ecards/wedding-8/flower.png",
                                alt: "flower",
                              }),
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "w-[40%] text-[10px] md:text-[21px] font-bold flex flex-col gap-1  items-center justify-center",
                            children: [
                              (0, t.jsx)("h3", {
                                className: "",
                                children: "NHÀ TRAI",
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "flex flex-col gap-[1px] md:gap-[2px]",
                                children: [
                                  e.groomFather?.toString().trim() &&
                                    (0, t.jsx)("p", {
                                      className: "w-full uppercase",
                                      children: e.groomFather.toString().trim(),
                                    }),
                                  e.groomMother?.toString().trim() &&
                                    (0, t.jsx)("p", {
                                      className: "w-full uppercase",
                                      children: e.groomMother.toString().trim(),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: `${d.default.className} text-[15px] md:text-[31px] flex flex-col gap-1`,
                        children: [
                          (0, t.jsxs)("h2", {
                            children: [
                              "TRÂN TRỌNG THÔNG BÁO ",
                              ((s = e.ceremonyName),
                              s?.toString().trim()
                                ? s.toString().toUpperCase()
                                : "LỄ VU QUY"),
                            ],
                          }),
                          (0, t.jsx)("h2", { children: "CỦA CON CHÚNG TÔI" }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: `flex flex-col gap-2 justify-center items-center ${i.default.className} text-[rgb(0,128,55)]`,
                        children: [
                          (0, t.jsx)("h1", {
                            className:
                              "text-[40px] md:text-[82px] !leading-tight",
                            children: e.brideFullName || "",
                          }),
                          (0, t.jsxs)("div", {
                            className: "w-[11%] md:w-[9%] relative",
                            children: [
                              (0, t.jsx)("img", {
                                src: "./assets/ecards/wedding-8/heart.png",
                                alt: "heart",
                                className: "w-full object-cover",
                              }),
                              (0, t.jsx)("img", {
                                src: "./assets/ecards/wedding-8/effect.gif",
                                alt: "effect",
                                className:
                                  "w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                              }),
                            ],
                          }),
                          (0, t.jsx)("h1", {
                            className:
                              "text-[40px] md:text-[82px] !leading-tight",
                            children: e.groomFullName || "",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "flex flex-col",
                        children: (0, t.jsxs)("div", {
                          className: "flex flex-col gap-1 md:gap-3",
                          children: [
                            (0, t.jsx)("h2", {
                              className: `${d.default.className} text-[14px] md:text-[29px]`,
                              children: "ĐƯỢC TỔ CHỨC VÀO LÚC",
                            }),
                            (0, t.jsx)("h1", {
                              className: `${o.default.className} text-[14px] md:text-[29px] font-bold`,
                              children:
                                !(l = e.ceremonyDate) || isNaN(l.getTime())
                                  ? ""
                                  : `${l.getHours()} GIỜ ${String(l.getMinutes()).padStart(2, "0")}`,
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "mt-4 flex items-center justify-center w-full gap-4 md:gap-8",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "",
                                  children: (0, t.jsx)("h2", {
                                    className:
                                      "text-[16px] md:text-4xl px-3 md:px-5 py-1 md:py-2 border-y-2 border-solid border-[black]",
                                    children:
                                      !(n = e.ceremonyDate) ||
                                      isNaN(n.getTime())
                                        ? ""
                                        : [
                                            "CHỦ NHẬT",
                                            "THỨ HAI",
                                            "THỨ BA",
                                            "THỨ TƯ",
                                            "THỨ NĂM",
                                            "THỨ SÁU",
                                            "THỨ BẢY",
                                          ][n.getDay()],
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: "",
                                  children: (0, t.jsx)("h1", {
                                    className: `text-[50px] md:text-[105px] !font-bold text-[rgb(148,1,1)] ${r.default.className} !leading-none`,
                                    children: e.ceremonyDate
                                      ? String(
                                          e.ceremonyDate.getDate(),
                                        ).padStart(2, "0")
                                      : "",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  children: (0, t.jsx)("h2", {
                                    className: `${o.default.className} text-[16px] md:text-4xl px-3 md:px-5 py-1 md:py-2 border-y-2 border-solid border-[black]`,
                                    children: e.ceremonyDate
                                      ? `${String(e.ceremonyDate.getMonth() + 1).padStart(2, "0")} - ${e.ceremonyDate.getFullYear()}`
                                      : "",
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              children: (0, t.jsxs)("h3", {
                                className: `${m.default.className} !italic text-[13px] md:text-[27px]`,
                                children: ["(Vào ngày ", u, ")"],
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "flex flex-col gap-2 md:gap-5 mt-2 md:mt-4",
                              children: [
                                (0, t.jsx)("h1", {
                                  className: `${x.default.className} font-bold text-[18px] md:text-4xl`,
                                  children: e.ceremonyVenueName,
                                }),
                                (0, t.jsx)("h2", {
                                  className: `${m.default.className} text-[13px] md:text-[26px]`,
                                  children: e.ceremonyVenueAddress,
                                }),
                              ],
                            }),
                            e.ceremonyGoogleMap &&
                              (0, t.jsx)("div", {
                                className:
                                  "z-[1] w-full flex justify-center items-center mt-3 md:mt-4",
                                children: (0, t.jsx)("a", {
                                  href: e.ceremonyGoogleMap,
                                  target: "_blank",
                                  className:
                                    " flex items-center gap-2 text-white text-lg rounded-full md:text-3xl bg-[#963F03] font-semibold cursor-pointer select-none py-1 md:py-3 px-5 md:px-9 ",
                                  children: (0, t.jsx)("span", {
                                    className: `tracking-wide !outline-none ${x.default.className}`,
                                    children: "CHỈ ĐƯỜNG",
                                  }),
                                }),
                              }),
                            (0, t.jsx)("div", {
                              className: "mt-5 md:mt-10",
                              children: (0, t.jsx)("h2", {
                                className: `${g.default.className} italic underline text-[rgb(0,128,55)] text-[19px] md:text-4xl`,
                                children: "Rất hân hạnh được đón tiếp",
                              }),
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
        ],
      });
    }
    var h = e.i(286572),
      h = h,
      i = i;
    function p({ brideGroom: e }) {
      return (0, t.jsxs)("div", {
        className:
          "relative flex flex-col items-center justify-center gap-4 md:gap-5 pb-6 md:pb-16 px-12",
        children: [
          (0, t.jsx)("img", {
            className: "object-cover w-full h-full absolute inset-0",
            src: "./assets/ecards/wedding-8/background-2.png",
            alt: "Background Banner",
          }),
          (0, t.jsxs)("div", {
            className:
              "relative bg-[#9C0505] pt-4 md:pt-8 pb-5 md:pb-10 px-5 md:px-12 w-full flex flex-col gap-2 md:gap-4",
            children: [
              (0, t.jsxs)("div", {
                className: `flex gap-3 md:gap-6 tracking-wider text-white text-2xl md:text-6xl !leading-snug items-center justify-center ${h.default.className}`,
                children: [
                  (0, t.jsx)("div", { className: "", children: "Cô Dâu" }),
                  (0, t.jsx)("div", {
                    className: "w-2/12",
                    children: (0, t.jsx)("img", {
                      src: "./assets/ecards/wedding-8/wedding-ring.png",
                      className: "w-full object-cover",
                    }),
                  }),
                  (0, t.jsx)("div", { className: "", children: "Chú Rể" }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex gap-4 md:gap-9",
                children: [
                  (0, t.jsxs)("div", {
                    className: "w-1/2 flex flex-col gap-4 md:gap-8",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "border-white border-solid border-4 md:border-[7px]",
                        children: (0, t.jsx)("img", {
                          src: e.brideImage,
                          alt: e.brideName,
                          className: "aspect-[157/233] w-full object-cover",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("h1", {
                          className: `${i.default.className} text-white text-3xl md:text-7xl`,
                          children: e.brideName,
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "w-1/2 flex flex-col gap-4 md:gap-8",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "border-white border-solid border-4 md:border-[7px]",
                        children: (0, t.jsx)("img", {
                          src: e.groomImage,
                          alt: e.groomName,
                          className: "aspect-[157/233] w-full object-cover",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("h1", {
                          className: `${i.default.className} text-white text-3xl md:text-7xl`,
                          children: e.groomName,
                        }),
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
    var f = e.i(677169),
      m = m,
      r = r,
      b = e.i(372003),
      b = b,
      o = o;
    function N({ invitation: e }) {
      let { images: s, receptionDate: l, receptionLunarDate: i } = e,
        n = "";
      try {
        i && (n = (0, a.formatLunarDate)(i));
      } catch {
        n = "";
      }
      return (0, t.jsxs)("div", {
        className: "relative flex flex-col pb-4 md:pb-10 px-5 md:px-10",
        children: [
          (0, t.jsx)("img", {
            className: "object-cover w-full h-full absolute inset-0",
            src: "./assets/ecards/wedding-8/background-2.png",
            alt: "Background Banner",
          }),
          (0, t.jsx)("div", {
            className: "relative",
            children: (0, t.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center gap-2 md:gap-6",
              children: [
                (0, t.jsx)("div", {
                  className: "w-3/12 overflow-hidden",
                  children: (0, t.jsx)("img", {
                    className: "w-full object-cover",
                    src: "./assets/ecards/wedding-8/flower.png",
                    alt: "flower",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: `${r.default.className} !leading- md:text-5xl text-[rgb(148,1,1)] text-center flex items-center justify-center flex-col !leading-snug gap-1`,
                  children: [
                    (0, t.jsx)("h1", { children: "Trân Trọng Kính Mời" }),
                    (0, t.jsx)("div", {
                      className:
                        "h-1px border-solid border-t-2 border-[rgb(0,128,55)] w-8/12",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className:
                    "flex gap-6 items-center justify-center mt-4 md:mt-9",
                  children: [
                    s[0] &&
                      (0, t.jsx)("div", {
                        className:
                          "w-[32%] rounded-xl overflow-hidden shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                        children: (0, t.jsx)("img", {
                          src: s[0],
                          className: "aspect-[111/154] w-full object-cover",
                        }),
                      }),
                    s[1] &&
                      (0, t.jsx)("div", {
                        className:
                          "w-[36%] rounded-xl overflow-hidden shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                        children: (0, t.jsx)("img", {
                          src: s[1],
                          className: "aspect-[128/193] w-full object-cover",
                        }),
                      }),
                    s[2] &&
                      (0, t.jsx)("div", {
                        className:
                          "w-[32%] rounded-xl overflow-hidden shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                        children: (0, t.jsx)("img", {
                          src: s[2],
                          className: "aspect-[111/154] w-full object-cover",
                        }),
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "mt-5",
                  children: [
                    e.guestName &&
                      "" !== e.guestName.trim() &&
                      (0, t.jsx)("div", {
                        className: "flex justify-center mb-4 md:mb-8",
                        children: (0, t.jsx)("h1", {
                          className: `px-6 text-red-700 text-2xl md:text-6xl ${f.ViceroyJF.className} border-b-3 border-dotted border-black`,
                          children: e.guestName,
                        }),
                      }),
                    (0, t.jsx)("h3", {
                      className: `${b.default.className} text-xl md:text-[40px] font-bold text-[rgb(0,128,55)]`,
                      children: "THAM DỰ TIỆC MỪNG",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className:
                    "w-full flex flex-col items-center justify-center gap-5 md:gap-10 mt-1",
                  children: [
                    (0, t.jsx)("h3", {
                      className: `${o.default.className} md:text-[33px] text-center text-[rgb(148,1,1)]`,
                      children: "Vào Lúc",
                    }),
                    (0, t.jsxs)("div", {
                      className: `flex flex-col w-full md:text-4xl ${o.default.className} font-semibold gap-3 text-[rgb(148,1,1)]`,
                      children: [
                        (0, t.jsx)("h2", {
                          className: "leading-snug",
                          children:
                            !l || isNaN(l.getTime())
                              ? ""
                              : [
                                  "CHỦ NHẬT",
                                  "THỨ HAI",
                                  "THỨ BA",
                                  "THỨ TƯ",
                                  "THỨ NĂM",
                                  "THỨ SÁU",
                                  "THỨ BẢY",
                                ][l.getDay()],
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "flex gap-1 md:gap-8 justify-center w-full",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "flex items-center justify-center w-1/3",
                              children: (0, t.jsx)("p", {
                                children:
                                  !l || isNaN(l.getTime())
                                    ? ""
                                    : `${l.getHours()} GIỜ ${String(l.getMinutes()).padStart(2, "0")}`,
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "w-1/3",
                              children: (0, t.jsx)("p", {
                                className: `leading-none ${r.default.className} pt-2 md:pt-4 text-6xl md:text-9xl font-bold border-l md:border-l-2 border-r md:border-r-2 border-black`,
                                children: l
                                  ? String(l.getDate()).padStart(2, "0")
                                  : "",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "flex items-center justify-center w-1/3",
                              children: (0, t.jsxs)("p", {
                                className: "w-full",
                                children: ["NĂM ", l ? l.getFullYear() : ""],
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)("h2", {
                          className: "leading-snug",
                          children: [
                            "THÁNG ",
                            l ? String(l.getMonth() + 1).padStart(2, "0") : "",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("h3", {
                      className: `!italic md:text-3xl ${m.default.className}`,
                      children: ["(Tức Ngày ", n, ")"],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    var g = g;
    function j() {
      return (0, t.jsxs)("div", {
        className: `${g.default.className} relative overflow-hidden px-6 md:px-16 flex flex-col items-center justify-center gap-4 md:gap-12 pt-16 md:pt-32 pb-3 md:pb-8`,
        children: [
          (0, t.jsx)("img", {
            className:
              "object-cover object-top w-full h-full absolute inset-0 opacity-50",
            src: "./assets/ecards/wedding-8/background-flower.jpg",
            alt: "Background Flower",
          }),
          (0, t.jsxs)("div", {
            className: "relative inline-block",
            children: [
              (0, t.jsx)("h1", {
                className:
                  "text-[rgb(255,22,22)] text-[52px] md:text-8xl !leading-snug",
                children: "Lời Ngỏ",
              }),
              (0, t.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "none",
                viewBox: "0 0 356.13 42.62",
                fill: "rgba(255, 22, 22, 1)",
                className:
                  "absolute left-0 bottom-1 md:-bottom-2 w-[68%] h-2 md:h-3",
                children: (0, t.jsx)("path", {
                  d: "M349,20.45C303.49-22.75,16.68,15.66,4.5,17.31a5.2,5.2,0,1,0,1.4,10.3c8.66-1.18,18.88-2.47,30.26-3.81C132.05,12.56,310.74-1.54,341.85,28c2.91,2.75,4.13,5.62,3.85,9,0,.07,0,.13,0,.2a5.19,5.19,0,0,0,4.75,5.4,3.1,3.1,0,0,0,.43,0,5.2,5.2,0,0,0,5.18-4.77C356.59,31.35,354.16,25.34,349,20.45Z",
                }),
              }),
            ],
          }),
          (0, t.jsx)("div", {
            className: "relative",
            children: (0, t.jsx)("p", {
              className:
                "text-[rgb(0,128,55)] font-bold text-[17px] md:text-4xl text-center !leading-[1.6]",
              children:
                "Cảm ơn bạn đã dành tình cảm cho vợ chồng mình. Chúng mình biết các bạn đều đang rất bận, bận với công việc, với cuộc sống và với cả gia đình bạn. Nhưng thực sự sẽ rất tuyệt vời nếu như ngày Hạnh Phúc của chúng mình có thêm sự góp mặt của bạn và người thương. Vợ chồng mình rất hi vọng sẽ có mặt bạn trong ngày quan trọng này để chứng kiến và chia sẽ niềm hạnh phúc này cùng chúng mình. Một lần nữa, chân thành cảm ơn tất cả các bạn ❤️",
            }),
          }),
        ],
      });
    }
    var i = i;
    function v({ calendarInfo: e }) {
      let { ceremonyDate: a, receptionDate: s, backgroundImage: r } = e,
        n = a.getFullYear(),
        c = a.getMonth(),
        d = new Date(n, c + 1, 0).getDate(),
        o = new Date(n, c, 1).getDay(),
        m = 0 === o ? 6 : o - 1,
        x = Array.from({ length: 7 * Math.ceil((d + m) / 7) }, (e, t) => {
          let a = t - m + 1;
          return a > 0 && a <= d ? a : null;
        }),
        g = [];
      for (let e = 0; e < x.length; e += 7) g.push(x.slice(e, e + 7));
      let u = !!s && s.getMonth() === c && s.getFullYear() === n;
      return (0, t.jsxs)("div", {
        className: "relative py-5 md:py-10",
        children: [
          (0, t.jsx)("img", {
            className: "object-cover w-full h-full absolute inset-0",
            src: "./assets/ecards/wedding-8/background-2.png",
            alt: "Background Banner",
          }),
          (0, t.jsxs)("div", {
            className:
              "relative mx-5 md:mx-12 gap-6 md:gap-6 pb-4 md:pb-5 flex flex-col bg-center bg-cover bg-no-repeat text-white rounded-3xl md:rounded-[40px] overflow-hidden",
            children: [
              (0, t.jsx)("img", {
                src: r || void 0,
                alt: "Background",
                className:
                  "brightness-[50%] object-cover absolute w-full h-full z-[1] pointer-events-none overflow-hidden",
              }),
              (0, t.jsx)("div", {
                className:
                  "absolute inset-0 z-[1] bg-[rgb(0,128,55)] opacity-70 pointer-events-none",
              }),
              (0, t.jsx)("div", {
                className: "relative z-[2] px-6 md:px-12",
                children: (0, t.jsxs)(l.motion.div, {
                  initial: { scale: 0.9, opacity: 0 },
                  whileInView: { scale: 1, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8 },
                  children: [
                    (0, t.jsxs)(l.motion.h1, {
                      initial: { y: -20, opacity: 0 },
                      whileInView: { y: 0, opacity: 1 },
                      viewport: { once: !0 },
                      transition: { duration: 0.8, delay: 0.2 },
                      className: `${i.default.className} text-[41px] md:text-8xl pt-6 md:pt-12 pb-3 md:pb-6 !leading-snug`,
                      children: ["Tháng ", c + 1, " - ", n],
                    }),
                    (0, t.jsxs)("table", {
                      className: "w-full table-auto",
                      children: [
                        (0, t.jsx)("thead", {
                          children: (0, t.jsxs)("tr", {
                            className: "text-[15px] md:text-3xl",
                            children: [
                              (0, t.jsx)("th", {
                                className: "py-2 md:px-4 md:py-8 font-medium",
                                children: "MON",
                              }),
                              (0, t.jsx)("th", {
                                className: "py-2 md:px-4 md:py-8 font-medium",
                                children: "TUE",
                              }),
                              (0, t.jsx)("th", {
                                className: "py-2 md:px-4 md:py-8 font-medium",
                                children: "WED",
                              }),
                              (0, t.jsx)("th", {
                                className: "py-2 md:px-4 md:py-8 font-medium",
                                children: "THUR",
                              }),
                              (0, t.jsx)("th", {
                                className: "py-2 md:px-4 md:py-8 font-medium",
                                children: "FRI",
                              }),
                              (0, t.jsx)("th", {
                                className: "py-2 md:px-4 md:py-8 font-medium",
                                children: "SAT",
                              }),
                              (0, t.jsx)("th", {
                                className: "py-2 md:px-4 md:py-8 font-medium",
                                children: "SUN",
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("tbody", {
                          children: g.map((e, i) =>
                            (0, t.jsx)(
                              "tr",
                              {
                                className:
                                  "text-center text-[16px] md:text-[34px]",
                                children: e.map((e, i) => {
                                  let r = e
                                      ? new Date(n, c, e).toDateString()
                                      : "",
                                    d = !!e && r === a.toDateString(),
                                    o = !!e && u && r === s.toDateString(),
                                    m = d || o;
                                  return (0, t.jsxs)(
                                    "td",
                                    {
                                      className: `text-center p-2 md:py-5 md:px-3 ${m ? "relative" : ""}`,
                                      children: [
                                        e || "",
                                        m &&
                                          (0, t.jsx)(l.motion.div, {
                                            animate: { scale: [1, 1.15, 1] },
                                            transition: {
                                              duration: 1.5,
                                              repeat: 1 / 0,
                                              ease: "easeInOut",
                                            },
                                            className:
                                              "absolute inset-0 flex items-center justify-center",
                                            children: (0, t.jsx)("div", {
                                              className:
                                                "w-[37px] md:w-[77px] h-[31px] md:h-[65px]",
                                              children: (0, t.jsx)("div", {
                                                className:
                                                  "w-full h-full bg-[url('/assets/ecards/wedding-10/date-wedding-template-11.webp')] bg-no-repeat bg-center bg-cover scale-110 brightness-0 invert",
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
          }),
        ],
      });
    }
    var w = e.i(46584),
      w = w;
    let y = {
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      },
      _ = {
        hidden: { opacity: 0, x: -60 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      },
      k = {
        hidden: { opacity: 0, x: 60 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      },
      B = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
      },
      C = {
        y: [0, -10, 0],
        transition: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
      };
    function $({ album: e }) {
      let { images: a } = e;
      return a && 0 !== a.length
        ? (0, t.jsxs)(l.motion.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, margin: "-100px" },
            variants: B,
            className: "relative",
            children: [
              (0, t.jsx)("img", {
                className: "object-cover w-full h-full absolute inset-0",
                src: "./assets/ecards/wedding-8/background-2.png",
                alt: "Background Banner",
              }),
              (0, t.jsxs)("div", {
                className: "relative",
                children: [
                  (0, t.jsx)(l.motion.div, {
                    className: "pt-2 md:pt-5 px-2 md:px-4 overflow-hidden",
                    variants: y,
                    children: (0, t.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, t.jsx)(l.motion.div, {
                          className: "w-5/12 flex items-center",
                          variants: _,
                          children: (0, t.jsx)(l.motion.p, {
                            className: `text-[17px] md:text-4xl text-[rgb(125,1,1)] ${w.default.className} !leading-snug`,
                            animate: C,
                            children: "Album hình cưới",
                          }),
                        }),
                        (0, t.jsx)(l.motion.div, {
                          className:
                            "w-7/12 pt-3 flex justify-center items-center",
                          variants: k,
                          children: (0, t.jsx)(l.motion.img, {
                            className: "w-full h-auto scale-160 object-cover",
                            src: "./assets/ecards/wedding-10/album-line-2.webp",
                            animate: { scaleX: [1, 1.1, 1] },
                            transition: { duration: 3, repeat: 1 / 0 },
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)(l.motion.div, {
                    className: "pt-2 md:pt-4",
                    variants: B,
                    children: (0, t.jsx)("div", {
                      className: "flex justify-center flex-wrap",
                      children: (0, t.jsx)("div", {
                        className: "grid grid-cols-2 gap-2 md:gap-6 w-full",
                        children: a.map((e, a) =>
                          (0, t.jsx)(
                            l.motion.div,
                            {
                              initial: { opacity: 0, scale: 0.9 },
                              whileInView: { opacity: 1, scale: 1 },
                              viewport: { once: !0 },
                              transition: { duration: 0.5, delay: 0.1 * a },
                              children: (0, t.jsx)("img", {
                                className:
                                  "h-auto max-w-full shadow-[0px_13px_20px_-17px_rgb(31,33,36)]",
                                src: e,
                                alt: `Album Image ${a}`,
                              }),
                            },
                            a,
                          ),
                        ),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        : null;
    }
    var S = e.i(271645),
      D = e.i(497072),
      T = e.i(146045),
      T = T,
      I = e.i(722771),
      I = I;
    function M({
      ceremonyDate: e,
      backgroundImage: a,
      brideName: s,
      groomName: l,
    }) {
      let [i, r] = (0, S.useState)({ days: 0, hours: 0, min: 0, sec: 0 });
      (0, S.useEffect)(() => {
        if (!e) return;
        let t = () => {
          let t = e.getTime() - Date.now();
          t <= 0
            ? r({ days: 0, hours: 0, min: 0, sec: 0 })
            : r({
                days: Math.floor(t / 864e5),
                hours: Math.floor((t / 36e5) % 24),
                min: Math.floor((t / 6e4) % 60),
                sec: Math.floor((t / 1e3) % 60),
              });
        };
        t();
        let a = setInterval(t, 1e3);
        return () => clearInterval(a);
      }, [e]);
      let n = [
        { value: i.days, label: "Ngày" },
        { value: i.hours, label: "Giờ" },
        { value: i.min, label: "Phút" },
        { value: i.sec, label: "Giây" },
      ];
      return (0, t.jsxs)("div", {
        className: "relative flex flex-col overflow-hidden",
        children: [
          (0, t.jsx)("img", {
            src: a || void 0,
            alt: "Background",
            className:
              "brightness-[50%] object-cover absolute w-full h-full inset-0 z-[1] pointer-events-none",
          }),
          (0, t.jsx)("div", {
            className: "relative z-[2] py-20 md:py-40 px-5 md:px-10",
            children: (0, t.jsxs)("div", {
              className:
                "bg-[rgb(241,243,244)]/20 text-white gap-4 md:gap-11 flex flex-col items-center justify-center pt-8 md:pt-16 pb-12 md:pb-24 px-2 md:px-4 rounded-[20px] md:rounded-[50px]",
              children: [
                (0, t.jsx)("h3", {
                  className: `${T.default.className} text-lg md:text-4xl !leading-snug`,
                  children: "CÙNG ĐẾM NGƯỢC THỜI GIAN",
                }),
                (0, t.jsx)("h1", {
                  className: `${I.default.className} text-5xl md:text-8xl !leading-snug`,
                  children: "Happy Wedding",
                }),
                (0, t.jsxs)("h2", {
                  className: `${D.GreatVibes.className} text-3xl md:text-6xl !leading-snug`,
                  children: [s, " - ", l],
                }),
                (0, t.jsx)("div", {
                  className: "flex justify-center w-full gap-1 md:gap-2",
                  children: n.map((e, a) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className:
                          "relative w-1/4 flex items-center justify-center",
                        children: [
                          (0, t.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            height: "100%",
                            preserveAspectRatio: "none",
                            viewBox: "0 0 1792 1668",
                            fill: "rgba(252, 255, 251, 1)",
                            className:
                              "w-full h-auto scale-y-[1.20] opacity-30",
                            children: (0, t.jsx)("path", {
                              d: "M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 869 23.5 759 0 641q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58T1314 173q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z",
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "absolute inset-0 flex flex-col items-center justify-center gap-3 md:gap-5",
                            children: [
                              (0, t.jsx)("p", {
                                className: `${T.default.className} font-bold text-xl md:text-4xl !leading-none`,
                                children: e.value.toString().padStart(2, "0"),
                              }),
                              (0, t.jsx)("p", {
                                className: `${T.default.className} font-bold text-[14px] md:text-3xl !leading-none`,
                                children: e.label,
                              }),
                            ],
                          }),
                        ],
                      },
                      a,
                    ),
                  ),
                }),
              ],
            }),
          }),
        ],
      });
    }
    var g = g,
      F = e.i(952237),
      F = F;
    let A = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      },
      H = {
        y: [0, -10, 0],
        transition: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
      },
      z = {
        scale: [1, 1.1, 1],
        transition: { duration: 1.5, repeat: 1 / 0, ease: "easeInOut" },
      };
    function V({ backgroundImage: e }) {
      return (0, t.jsxs)(l.motion.div, {
        className:
          "mt-1 flex relative overflow-hidden bg-[rgba(226,236,255,0.61)]",
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0 },
        variants: A,
        children: [
          (0, t.jsx)(l.motion.img, {
            className: "w-full",
            src: e || void 0,
            alt: "Footer",
            animate: { scale: [1.01, 1.05, 1.01] },
            transition: { duration: 8, repeat: 1 / 0 },
          }),
          (0, t.jsxs)("div", {
            className:
              "py-2 bg-black/50 w-full absolute -translate-0.5 top-1/2 flex flex-wrap items-center justify-center gap-4",
            children: [
              (0, t.jsx)(l.motion.p, {
                className: `w-full text-center text-white text-[80px] md:text-9xl !leading-snug ${g.default.className}`,
                animate: z,
                children: "Thank you",
              }),
              (0, t.jsxs)(l.motion.p, {
                className: `text-[14px] md:text-2xl text-white ${F.default.className} !leading-normal`,
                animate: H,
                children: [
                  "Sự hiện diện của quý vị là niềm vinh hạnh cho",
                  (0, t.jsx)("br", {}),
                  "gia đình chúng tôi.",
                ],
              }),
            ],
          }),
        ],
      });
    }
    var L = e.i(854878),
      R = e.i(472317),
      G = e.i(889235),
      q = e.i(987006),
      g = g,
      O = e.i(922557),
      O = O,
      Q = e.i(33160);
    let U =
      "bg-[#E5E2DF] w-full text-[14px] md:text-[20px] border mt-1 border-solid border-[rgba(209,213,219)] rounded-[16px] bg-white placeholder:text-[black] p-[16px] focus:outline-none focus-visible:outline-none";
    function Y({ confirm: e }) {
      let [s, i] = (0, S.useState)(!1),
        [r, n] = (0, S.useState)(!1),
        [c, d] = (0, S.useState)({
          id: 0,
          ecard_my_user_id: Number(e.id),
          ecard_my_user_invitee_id: 0,
          name: e.guestName ?? "",
          content: "",
          is_tham_du: null,
          so_nguoi_tham_du: void 0,
        }),
        o = (0, S.useCallback)(() => {
          i(!1);
        }, []),
        m = async (e) => {
          e.preventDefault();
          try {
            let e = (0, a.getCookies)("ecard_my_user_invitee_id"),
              t = { ...c };
            ((t.ecard_my_user_invitee_id =
              e && !isNaN(Number(e)) ? Number(e) : 0),
              (void 0 === t.so_nguoi_tham_du || !0 !== t.is_tham_du) &&
                (t.so_nguoi_tham_du = 0));
            let s = await (0, R.AddCongratulations)(t);
            s.success
              ? ((0, a.setCookies)(
                  "ecard_my_user_invitee_id",
                  s.data.data.invitee_id,
                  1825,
                ),
                i(!0))
              : (0, Q.showToast)(s.message || "Đăng nhập thất bại", "error");
          } catch (e) {
            (console.error("Login error:", e),
              (0, Q.showToast)("Có lỗi xảy ra, vui lòng thử lại!", "error"));
          }
        };
      return (0, t.jsxs)("div", {
        className: `relative overflow-hidden gap-3 md:gap-3 ${q.Arial.className} p-[9px] md:p-4 mt-1`,
        children: [
          (0, t.jsx)("img", {
            src: e.backgroundImage || void 0,
            alt: "Background",
            className:
              "brightness-[50%] object-cover w-full h-full absolute inset-0 z-[0] pointer-events-none",
          }),
          (0, t.jsxs)("div", {
            className:
              "relative z-[1] pt-5 pb-7 md:pb-65 flex flex-col rounded-[10px] items-center md:gap-1",
            children: [
              (0, t.jsx)("div", {
                className:
                  "w-1/2 rounded-t-full overflow-hidden border-15 md:border-24 border-solid border-[rgb(255,255,255)]/50",
                children: (0, t.jsx)("img", {
                  className: "w-full object-cover h-full aspect-[200/238]",
                  src: e.image || void 0,
                  alt: "Image",
                }),
              }),
              (0, t.jsx)("h1", {
                className: `${g.default.className} text-[40px] md:text-[80px] mt-4 !leading-snug text-white`,
                children: "Xác Nhận Tham Dự",
              }),
              (0, t.jsx)(l.motion.div, {
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: ` ${O.default.className} text-white md:pb-2 text-[12px] md:text-2xl px-6 md:px-20 !leading-normal`,
                children: (0, t.jsxs)("p", {
                  children: [
                    "Điều này giúp chúng tôi đón tiếp các bạn chu đáo và",
                    (0, t.jsx)("br", {}),
                    "đầy đủ hơn. Xin cảm ơn!!!",
                  ],
                }),
              }),
              (0, t.jsx)("form", {
                className: "mt-3",
                onSubmit: m,
                children: (0, t.jsxs)(l.motion.div, {
                  initial: { y: 30, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className:
                    "flex flex-wrap gap-2 md:gap-5 px-4 md:px-[70px] items-center justify-center",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[21px] text-white",
                          children: "Tên của bạn:",
                        }),
                        (0, t.jsx)("input", {
                          required: !0,
                          className: `${U}`,
                          type: "text",
                          name: "name",
                          maxLength: 200,
                          placeholder: "Vui lòng điền tên của bạn",
                          value: c.name,
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            d((e) => ({ ...e, [t]: a }));
                          },
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[21px] text-white",
                          children: "Lời chúc của bạn:",
                        }),
                        (0, t.jsx)("textarea", {
                          rows: 4,
                          required: !0,
                          name: "content",
                          className: `${U}`,
                          maxLength: 1e3,
                          placeholder: "Gửi lời chúc đến Dâu Rể nhé!",
                          value: c.content,
                          onChange: (e) => {
                            let { name: t, value: a } = e.target;
                            d((e) => ({ ...e, [t]: a }));
                          },
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "w-full text-start",
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-sm md:text-[21px] text-white",
                          children: "Bạn tham dự được chứ?",
                        }),
                        (0, t.jsxs)("select", {
                          className: `${U}`,
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
                            d((e) => ({
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
                            className: "text-sm md:text-[21px] text-white    ",
                            children: "Số người tham dự:",
                          }),
                          (0, t.jsx)("input", {
                            required: !0,
                            className: `${U}`,
                            type: "number",
                            name: "so_nguoi_tham_du",
                            min: 1,
                            placeholder: "Số lượng người đến tham dự",
                            value: c.so_nguoi_tham_du,
                            onChange: (e) => {
                              let { name: t, value: a, type: s } = e.target;
                              d((e) => ({
                                ...e,
                                [t]:
                                  "number" === s
                                    ? "" === a
                                      ? ""
                                      : Number(a)
                                    : a,
                              }));
                            },
                          }),
                        ],
                      }),
                    (0, t.jsx)(l.motion.button, {
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      type: "submit",
                      className:
                        "px-16 md:px-24 cursor-pointer focus:outline-none border-[1px] border-solid border-[rgb(121,10,10)] text-black bg-[rgb(255,252,232)] text-[14px] py-[12px] md:text-[22px] md:py-5 font-semibold",
                      children: "Gửi Ngay",
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, t.jsxs)(L.Dialog, {
            open: s,
            onClose: o,
            className: "relative z-10",
            children: [
              (0, t.jsx)(L.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(L.DialogPanel, {
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
                        onClick: o,
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
                                      src: e.backgroundImage || void 0,
                                      alt: "Background",
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
                                className: `text-2xl md:text-5xl ${G.BeyondPerfectionRegular.className} !leading-loose`,
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
    var P = e.i(514673),
      E = e.i(710134),
      W = e.i(875958),
      K = e.i(536197),
      K = K;
    function X({ gift: e }) {
      let [a, s] = (0, S.useState)(!1),
        i = (0, S.useCallback)(() => {
          s(!1);
        }, []);
      return (0, t.jsxs)("div", {
        className: "relative bg-center bg-cover bg-no-repeat mb-1",
        children: [
          (0, t.jsx)("img", {
            src: e.backroundImage || void 0,
            alt: "Background",
            className:
              "object-cover absolute top-0 left-0 inset-0 w-full pointer-events-none !overflow-hidden brightness-50",
          }),
          (0, t.jsxs)("div", {
            className:
              "z-[1] py-14 md:py-32 relative w-full flex flex-col gap-3 md:gap-10 text-white",
            children: [
              (0, t.jsxs)(l.motion.h1, {
                initial: { y: -20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                className: `text-[40px] md:text-[85px] ${K.default.className} font-bold !leading-normal`,
                children: ["HỘP QUÀ", (0, t.jsx)("br", {}), "MỪNG CƯỚI"],
              }),
              (0, t.jsx)(l.motion.p, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: `${W.sourceSans3.className} text-[15px] md:text-3xl px-12 md:px-28 !italic !leading-normal`,
                children:
                  "Cảm ơn tất cả các tình cảm mà các em, các bạn, các anh các chị, cô dì chú bác họ hàng 2 bên đã dành cho vk ck ạ",
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
                  className: "flex justify-center items-center py-4",
                  children: (0, t.jsx)(l.motion.div, {
                    initial: { scale: 0, opacity: 0 },
                    whileInView: { scale: 1, opacity: 1 },
                    viewport: { once: !0 },
                    transition: { duration: 0.5, delay: 0.4 },
                    onClick: () => s(!0),
                    className:
                      "cursor-pointer w-3/12 md:w-3/12 aspect-[72/67] flex justify-center items-center border border-white border-solid bg-[rgb(97,97,97)] rounded-md",
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
          (0, t.jsxs)(L.Dialog, {
            open: a,
            onClose: i,
            className: "relative z-10",
            children: [
              (0, t.jsx)(L.DialogBackdrop, {
                transition: !0,
                className:
                  "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center text-center sm:items-center sm:p-0",
                  children: (0, t.jsxs)(L.DialogPanel, {
                    transition: !0,
                    className:
                      "bg-[rgb(255,255,255)] relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                    children: [
                      (0, t.jsx)("button", {
                        type: "button",
                        className:
                          "absolute md:right-5 right-2 top-2 md:top-5 z-20 rounded-full p-1 text-dark focus:outline-none",
                        onClick: i,
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
                            className: `${E.greatVibes.className} text-center text-[50px] !leading-snug text-[rgb(5,70,88)] font-bold`,
                            children: "Hộp mừng cưới",
                          }),
                          (0, t.jsx)("h2", {
                            className: `${P.QuicksandRegular.className} text-center text-[18px] text-[rgb(5,70,88)] !leading-snug px-6`,
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
                                        className: `text-[rgb(5,70,88)] ${P.QuicksandRegular.className} text-center text-[18px] md:text-[19px] !font-bold !leading-snug`,
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
                                        className: `flex flex-col gap-[2px] md:gap-1 w-full ${P.QuicksandRegular.className} text-center text-[12px] md:text-[15px]`,
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
                                        className: `text-[rgb(5,70,88)] ${P.QuicksandRegular.className} text-center text-[18px] md:text-[19px] !font-bold !leading-snug`,
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
                                        className: `flex flex-col gap-[2px] md:gap-1 w-full ${P.QuicksandRegular.className} text-center text-[12px] md:text-[15px]`,
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
    e.s(
      [
        "default",
        0,
        ({ refData: e, guestName: l, inviteeid: i }) => {
          console.log("refData", e);
          let r = l && !Array.isArray(l) ? decodeURIComponent(l) : void 0;
          i && i > 0 && (0, a.setCookies)("ecard_my_user_invitee_id", i, 1825);
          let c = e?.formData || {},
            d = e?.imagesAlbum || [],
            o = c.chure || " ",
            m = c.hoten_chure || " ",
            x = c.codau || " ",
            g = c.hoten_codau || " ",
            h = c.nha_trai_ong ? "Ông " + c.nha_trai_ong : "",
            f = c.nha_trai_ba ? "Bà " + c.nha_trai_ba : "",
            b = c.nha_gai_ong ? "Ông " + c.nha_gai_ong : "",
            w = c.nha_gai_ba ? "Bà " + c.nha_gai_ba : "",
            y = e.formData.ten_le,
            _ = e.formData.ngay_le,
            k = e.formData.gio_hon_le,
            B = e.formData.ngay_le_am,
            C = e.formData.le_noi_to_chuc,
            S = (() => {
              if (!_) return;
              let e = new Date(`${_}T${k || "00:00:00"}`);
              return isNaN(e.getTime()) ? void 0 : e;
            })(),
            D = e.formData.le_dia_chi,
            T = (() => {
              if (!B) return;
              let e = new Date(`${B}T${k || "00:00:00"}`);
              return isNaN(e.getTime()) ? void 0 : e;
            })(),
            I = e.formData.google_map,
            F = e.formData.tiec_ngay,
            A = e.formData.tiec_ngay_am,
            H = e.formData.tiec_gio,
            z = (() => {
              if (!F) return;
              let e = new Date(`${F}T${H || "00:00:00"}`);
              return isNaN(e.getTime()) ? void 0 : e;
            })(),
            L = (() => {
              if (!A) return;
              let e = new Date(`${A}T${H || "00:00:00"}`);
              return isNaN(e.getTime()) ? void 0 : e;
            })(),
            R = (0, a.getImagesByFieldCode)("banner_image_url", d)[0],
            G = (0, a.getImagesByFieldCode)("album2", d)[0],
            q = (0, a.getImagesByFieldCode)("album3", d)[0],
            O = (0, a.getImagesByFieldCode)("album4", d),
            Q = (0, a.getImagesByFieldCode)("album5", d)[0],
            U = (0, a.getImagesByFieldCode)("album6", d)[0],
            P = (0, a.getImagesByFieldCode)("album7", d)[0],
            E = (0, a.getImagesByFieldCode)("album8", d)[0],
            W = (0, a.getImagesByFieldCode)("album10", d),
            K = (0, a.getImagesByFieldCode)("footer_image_url", d)[0],
            J = c.chure_ttk,
            Z = c.chure_stk,
            ee = c.chure_ngh,
            et = c.codau_ttk,
            ea = c.codau_stk,
            es = c.codau_ngh,
            el = (0, a.getImagesByFieldCode)("album9", d)[0],
            ei = (0, a.getImagesByFieldCode)("chure_image_bank_url", d)[0],
            er = (0, a.getImagesByFieldCode)("codau_image_bank_url", d)[0];
          return (0, t.jsxs)("div", {
            className:
              "begindowload max-w-4xl mx-auto text-center bg-[#F8FDFF]",
            children: [
              (0, t.jsx)(n, {
                data: {
                  backgroundImage: R,
                  brideName: x,
                  groomName: o,
                  ceremonyDate: S,
                },
              }),
              (0, t.jsx)(u, {
                mainInfo: {
                  groomFullName: m,
                  groomFather: h,
                  groomMother: f,
                  brideFullName: g,
                  brideFather: b,
                  brideMother: w,
                  ceremonyName: y,
                  ceremonyDate: S,
                  ceremonyLunarDate: T,
                  ceremonyVenueName: C,
                  ceremonyVenueAddress: D,
                  ceremonyGoogleMap: I,
                },
              }),
              (0, t.jsx)(p, {
                brideGroom: {
                  brideName: x,
                  brideImage: q,
                  groomName: o,
                  groomImage: G,
                },
              }),
              (0, t.jsx)(N, {
                invitation: {
                  images: O,
                  receptionDate: z,
                  receptionLunarDate: L,
                  guestName: r ?? "",
                },
              }),
              S &&
                (0, t.jsx)(v, {
                  calendarInfo: {
                    ceremonyDate: S,
                    receptionDate: z,
                    backgroundImage: Q,
                  },
                }),
              (0, t.jsx)($, { album: { images: W } }),
              (0, t.jsx)(j, {}),
              (0, t.jsx)(M, {
                ceremonyDate: S,
                backgroundImage: U,
                brideName: x,
                groomName: o,
              }),
              (0, t.jsx)(Y, {
                confirm: {
                  id: e.id ?? 0,
                  guestName: r ?? "",
                  image: P,
                  backgroundImage: E,
                },
              }),
              (ei ||
                J?.toString().trim() ||
                Z?.toString().trim() ||
                ee?.toString().trim() ||
                er ||
                et?.toString().trim() ||
                ea?.toString().trim() ||
                es?.toString().trim()) &&
                (0, t.jsx)(X, {
                  gift: {
                    backroundImage: el,
                    groomBankAccountName: J,
                    groomBankAccountNumber: Z,
                    groomBankName: ee,
                    groomQRCode: ei,
                    brideBankAccountName: et,
                    brideBankAccountNumber: ea,
                    brideBankName: es,
                    brideQRCode: er,
                  },
                }),
              (0, t.jsx)(V, { backgroundImage: K }),
              (0, t.jsx)(s.default, {
                urlMp3: c.audio,
                ecardMyUserId: Number(e.id),
              }),
            ],
          });
        },
      ],
      516900,
    );
  },
]);
