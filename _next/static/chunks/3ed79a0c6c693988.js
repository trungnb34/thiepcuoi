(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  301677,
  (e) => {
    e.v({ className: "roboto_a471e08c-module__tr94wW__className" });
  },
  800569,
  (e) => {
    e.v({ className: "play_8cca5a6f-module__o6H7fa__className" });
  },
  350067,
  (e) => {
    e.v({ className: "arima_5efd82d2-module__fMuTYa__className" });
  },
  594886,
  (e) => {
    "use strict";
    var a = e.i(843476),
      t = e.i(854878),
      i = e.i(271645),
      s = e.i(846932),
      r = e.i(310542),
      l = e.i(895420);
    e.i(283210);
    var n = e.i(574567),
      c = e.i(341615),
      d = e.i(521920),
      o = e.i(935167),
      m = e.i(677169),
      x = e.i(514673),
      h = e.i(301677);
    let p = {
      className: h.default.className,
      style: { fontFamily: "'Roboto', 'Roboto Fallback'", fontStyle: "normal" },
    };
    null != h.default.variable && (p.variable = h.default.variable);
    var u = e.i(800569);
    let g = {
      className: u.default.className,
      style: { fontFamily: "'Play', 'Play Fallback'", fontStyle: "normal" },
    };
    null != u.default.variable && (g.variable = u.default.variable);
    var b = e.i(350067);
    let f = {
      className: b.default.className,
      style: { fontFamily: "'Arima', 'Arima Fallback'", fontStyle: "normal" },
    };
    null != b.default.variable && (f.variable = b.default.variable);
    var j = e.i(589997),
      v = e.i(56506),
      w = e.i(472317),
      N = e.i(170319);
    let y = {
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    };
    function _({ date: e }) {
      return (0, a.jsx)(s.motion.div, {
        className:
          "bg-center bg-cover bg-no-repeat bg-[url('/assets/ecards/wedding-10/background-template-1.webp')]",
        style: {
          backgroundOrigin: "content-box",
          backgroundClip: "border-box",
        },
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0 },
        variants: y,
        children: (0, a.jsxs)("div", {
          className: "pt-5 pl-9 pr-9 pb-8 md:pb-7 md:pl-20 md:pr-20",
          children: [
            (0, a.jsx)(s.motion.p, {
              className: `${m.ViceroyJF.className} text-4xl md:text-7xl pb-3 md:pb-6`,
              animate: {
                y: [0, -5, 0],
                color: ["#000000", "#8e0101", "#000000"],
              },
              transition: { duration: 3, repeat: 1 / 0 },
              children: "Lịch cưới chúng mình!",
            }),
            (0, a.jsx)("div", {
              className: "flex justify-center items-center pt-3 md:pt-6 pb-4",
              children: (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "20 20 60 60",
                preserveAspectRatio: "none",
                className: "w-16 md:w-24 h-16 md:h-24",
                fill: "rgb(195,152,152)",
                children: (0, a.jsx)("path", {
                  d: "M65.675,30.5h-2.997V28c0-0.829-0.672-1.5-1.5-1.5H57.46c-0.828,0-1.5,0.671-1.5,1.5v2.5H42.561V28 c0-0.829-0.671-1.5-1.5-1.5h-3.717c-0.829,0-1.5,0.671-1.5,1.5v2.5h-2.997c-3.953,0-7.169,3.216-7.169,7.169v28.329 c0,3.953,3.216,7.169,7.169,7.169h32.828c3.953,0,7.169-3.216,7.169-7.169V37.669 C72.844,33.716,69.628,30.5,65.675,30.5z M69.844,65.998c0,2.299-1.87,4.169-4.169,4.169H32.847 c-2.299,0-4.169-1.87-4.169-4.169V42.333h41.167V65.998z M48.371,65.489c0.269,0.15,0.577,0.23,0.89,0.23 s0.622-0.08,0.882-0.226c1.744-0.962,10.447-6.049,10.447-11.758 c0-4.024-2.893-7.06-6.728-7.06c-1.646,0-3.331,0.773-4.602,1.73 c-1.271-0.958-2.956-1.73-4.602-1.73c-3.835,0-6.727,3.036-6.727,7.06 C37.932,59.445,46.635,64.532,48.371,65.489z",
                }),
              }),
            }),
            (0, a.jsx)(
              ({ date: e }) => {
                let t = e.getFullYear(),
                  i = e.getMonth(),
                  r = new Date(t, i + 1, 0).getDate(),
                  l = new Date(t, i, 1).getDay(),
                  n = 0 === l ? 6 : l - 1,
                  c = Array.from(
                    { length: 7 * Math.ceil((r + n) / 7) },
                    (e, a) => {
                      let t = a - n + 1;
                      return t > 0 && t <= r ? t : null;
                    },
                  ),
                  d = [];
                for (let e = 0; e < c.length; e += 7) d.push(c.slice(e, e + 7));
                return (0, a.jsx)("div", {
                  className:
                    " border-2 border-dashed border-[rgba(142,1,1,1)] rounded-md px-1",
                  children: (0, a.jsxs)(s.motion.table, {
                    className: "w-full table-auto",
                    initial: { opacity: 0, scale: 0.9 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6 },
                    children: [
                      (0, a.jsxs)("thead", {
                        children: [
                          (0, a.jsx)("tr", {
                            children: (0, a.jsxs)("th", {
                              colSpan: 7,
                              className: "text-sm md:text-2xl py-2",
                              children: [
                                "Tháng ",
                                (0, j.getDatePart)(e, "m"),
                                " /",
                                " ",
                                (0, j.getDatePart)(e, "y"),
                              ],
                            }),
                          }),
                          (0, a.jsxs)("tr", {
                            className:
                              "text-xs md:text-xl font-extrabold border-t border-b border-solid border-[rgba(142,1,1,1)]",
                            children: [
                              (0, a.jsx)("th", {
                                className: "pt-2 pb-2 md:pt-2",
                                children: "Thứ 2",
                              }),
                              (0, a.jsx)("th", {
                                className: "pt-2 pb-2 md:pt-2",
                                children: "Thứ 3",
                              }),
                              (0, a.jsx)("th", {
                                className: "pt-2 pb-2 md:pt-2",
                                children: "Thứ 4",
                              }),
                              (0, a.jsx)("th", {
                                className: "pt-2 pb-2 md:pt-2",
                                children: "Thứ 5",
                              }),
                              (0, a.jsx)("th", {
                                className: "pt-2 pb-2 md:pt-2",
                                children: "Thứ 6",
                              }),
                              (0, a.jsx)("th", {
                                className: "pt-2 pb-2 md:pt-2",
                                children: "Thứ 7",
                              }),
                              (0, a.jsx)("th", {
                                className: "pt-2 pb-2 md:pt-2 font-bold",
                                children: "CN",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("tbody", {
                        children: d.map((r, l) =>
                          (0, a.jsx)(
                            s.motion.tr,
                            {
                              className: "text-center text-xs md:text-xl",
                              initial: { opacity: 0, x: -20 },
                              whileInView: { opacity: 1, x: 0 },
                              viewport: { once: !0 },
                              transition: { duration: 0.4, delay: 0.1 * l },
                              children: r.map((r, l) => {
                                let n =
                                    r &&
                                    new Date(t, i, r).toDateString() ===
                                      e.toDateString(),
                                  c = `p-3 md:p-5 text-center ${6 === l ? "font-bold" : ""}`;
                                return (0, a.jsxs)(
                                  "td",
                                  {
                                    className: `${c} ${n ? "relative text-white" : ""}`,
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: n ? "relative z-10" : "",
                                        children: r || "",
                                      }),
                                      n
                                        ? (0, a.jsx)(s.motion.div, {
                                            className:
                                              "w-[35px] md:w-[55px] top-[4px] md:top-[9px] md:left-[24px] left-[7px] h-[35px] md:h-[55px] overflow-hidden absolute",
                                            animate: {
                                              scale: [1, 1.1, 1],
                                              rotate: [0, 5, -5, 0],
                                            },
                                            transition: {
                                              duration: 2,
                                              repeat: 1 / 0,
                                              ease: "easeInOut",
                                            },
                                            children: (0, a.jsx)("img", {
                                              className: n
                                                ? "w-full h-full block"
                                                : "",
                                              alt: "",
                                              src: "./assets/ecards/wedding-11-01/icon-heart-calendar.svg",
                                            }),
                                          })
                                        : null,
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
                });
              },
              { date: new Date(e) },
            ),
          ],
        }),
      });
    }
    let B = (e) => {
        let a = new Date(e).getDay();
        return 0 === a ? "Chủ Nhật" : `Thứ ${a + 1}`;
      },
      C = (e) => {
        let a = new Date(e).getDay();
        return 0 === a
          ? "Chủ Nhật"
          : `Thứ ${["Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"][a - 1]}`;
      };
    e.s(
      [
        "default",
        0,
        ({ refData: e, previewMode: h, guestName: u, inviteeid: b }) => {
          let y,
            k,
            F = u && !Array.isArray(u) ? decodeURIComponent(u) : void 0;
          b && b > 0 && (0, j.setCookies)("ecard_my_user_invitee_id", b, 1825);
          let [D, A] = (0, i.useState)(!1),
            [T, M] = (0, i.useState)(!1),
            [$, z] = (0, i.useState)(!1),
            { scrollYProgress: S } = (0, r.useScroll)(),
            R = (0, l.useTransform)(S, [0, 1], ["0%", "30%"]),
            H = (0, i.useCallback)(() => {
              M(!1);
            }, []),
            I = (0, i.useCallback)(() => {
              z(!1);
            }, []),
            [L, V] = (0, i.useState)({
              id: 0,
              ecard_my_user_id: Number(e.id ?? 0),
              ecard_my_user_invitee_id: 0,
              name: F ?? "",
              content: "",
              is_tham_du: null,
              so_nguoi_tham_du: void 0,
            }),
            O = e.formData.tiec_gio,
            P = e.formData.tiec_ngay,
            U = e.formData.tiec_ngay_am,
            Q = e.formData.nha_trai_ngay_hon_le,
            Y = e.formData.nha_trai_gio_hon_le,
            G = e.formData.nha_gai_ngay_hon_le,
            E = e.formData.nha_gai_gio_hon_le,
            W = (0, i.useCallback)(() => {
              A(!1);
            }, []),
            X = async (e) => {
              e.preventDefault();
              try {
                let e = (0, j.getCookies)("ecard_my_user_invitee_id"),
                  a = { ...L };
                ((a.ecard_my_user_invitee_id =
                  e && !isNaN(Number(e)) ? Number(e) : 0),
                  (void 0 === a.so_nguoi_tham_du || !0 !== a.is_tham_du) &&
                    (a.so_nguoi_tham_du = 0));
                let t = await (0, w.AddCongratulations)(a);
                t.success
                  ? ((0, j.setCookies)(
                      "ecard_my_user_invitee_id",
                      t.data.data.invitee_id,
                      1825,
                    ),
                    A(!0))
                  : N.toast.error(t.message || "Đăng nhập thất bại", {
                      position: "top-right",
                      autoClose: 5e3,
                    });
              } catch (e) {
                (console.error("Login error:", e),
                  N.toast.error("Có lỗi xảy ra, vui lòng thử lại!", {
                    position: "top-right",
                    autoClose: 5e3,
                  }));
              } finally {
              }
            },
            K = {
              hidden: { opacity: 0, y: 60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            },
            q = {
              hidden: { opacity: 0, x: -60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            },
            J = {
              hidden: { opacity: 0, x: 60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            },
            Z = {
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            },
            ee = {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.1 },
              },
            },
            ea = e.imagesAlbum.filter((e) => "album3" === e.field_code),
            et = e.imagesAlbum.filter((e) => "album10" === e.field_code);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: `begindowload max-w-4xl mx-auto text-center ${p.className}`,
                children: [
                  (0, a.jsx)(s.motion.div, {
                    className:
                      "bg-center bg-cover bg-no-repeat bg-[url('/assets/ecards/wedding-10/background-template-1.webp')]",
                    style: {
                      backgroundOrigin: "content-box",
                      backgroundClip: "border-box",
                      y: R,
                    },
                    initial: "hidden",
                    animate: "visible",
                    variants: ee,
                    children: (0, a.jsxs)("div", {
                      className: "pt-10 pl-5 pr-5 md:pt-20 md:pl-16 md:pr-16",
                      children: [
                        (0, a.jsx)(s.motion.h2, {
                          className:
                            "text-[20px] tracking-widest md:text-[36px]",
                          variants: K,
                          children: "THIỆP MỜI",
                        }),
                        (0, a.jsxs)(s.motion.div, {
                          className: `text-4xl pt-3 md:pt-6 md:text-7xl ${c.EphesisRegular.className}`,
                          variants: K,
                          animate: {
                            color: ["#000000", "#8e0101", "#000000"],
                            scale: [1, 1.02, 1],
                          },
                          transition: {
                            duration: 3,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                          },
                          children: [e.formData.chure, " - ", e.formData.codau],
                        }),
                        (0, a.jsxs)(s.motion.div, {
                          className: "flex justify-around",
                          variants: ee,
                          children: [
                            (0, a.jsx)(s.motion.div, {
                              className:
                                "w-1/4 pt-5 md:pt-10 flex items-center",
                              variants: q,
                              animate: { rotate: [0, 5, -5, 0] },
                              transition: { duration: 4, repeat: 1 / 0 },
                              children: (0, a.jsx)("div", {
                                children: (0, a.jsx)("img", {
                                  src: "./assets/ecards/wedding-10/img-14.webp",
                                  alt: "Decoration",
                                }),
                              }),
                            }),
                            (0, a.jsxs)(s.motion.div, {
                              className:
                                "w-2/4 flex flex-wrap justify-center items-center",
                              variants: Z,
                              children: [
                                (0, a.jsx)(s.motion.div, {
                                  className: "w-1/2 overflow-hidden",
                                  whileHover: { scale: 1.05, rotate: 2 },
                                  children: (0, a.jsx)("img", {
                                    className: "w-full object-cover",
                                    src: "./assets/ecards/wedding-10/img-13.webp",
                                    alt: "Wedding decoration",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsxs)(s.motion.p, {
                                      className: "text-[15px] md:text-[28px]",
                                      animate: { opacity: [0.8, 1, 0.8] },
                                      transition: {
                                        duration: 2,
                                        repeat: 1 / 0,
                                      },
                                      children: [
                                        (() => {
                                          if (!P) return " ";
                                          try {
                                            return B(P.toString());
                                          } catch {
                                            return " ";
                                          }
                                        })(),
                                        " -",
                                        " ",
                                        (() => {
                                          if (!O) return " ";
                                          try {
                                            return O.slice(0, 5).replace(
                                              ":",
                                              "h",
                                            );
                                          } catch {
                                            return " ";
                                          }
                                        })(),
                                      ],
                                    }),
                                    (0, a.jsx)(s.motion.h2, {
                                      className:
                                        "text-xl md:text-4xl tracking-[7px] md:tracking-[15px] font-bold md:pt-2",
                                      animate: {
                                        color: [
                                          "#000000",
                                          "#8e0101",
                                          "#000000",
                                        ],
                                        scale: [1, 1.05, 1],
                                      },
                                      transition: {
                                        duration: 2,
                                        repeat: 1 / 0,
                                      },
                                      children: (() => {
                                        if (!P) return " ";
                                        try {
                                          return (0, j.formatDateDDMMYYYY2)(P);
                                        } catch {
                                          return " ";
                                        }
                                      })(),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)(s.motion.div, {
                              className:
                                "w-1/4 pt-5 md:pt-10 flex items-center",
                              variants: J,
                              animate: { rotate: [0, -5, 5, 0] },
                              transition: {
                                duration: 4,
                                repeat: 1 / 0,
                                delay: 2,
                              },
                              children: (0, a.jsx)("img", {
                                className: "w-full",
                                src: "./assets/ecards/wedding-10/img-14.webp",
                                alt: "Decoration",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(s.motion.div, {
                          className: "pt-5 pb-9 md:pt-14 flex justify-center",
                          variants: Z,
                          children: (0, a.jsxs)("div", {
                            className:
                              "w-9/12 text-center flex justify-center relative",
                            children: [
                              (0, a.jsx)(s.motion.div, {
                                className:
                                  "w-full overflow-hidden border-6 md:border-15 border-solid border-[rgba(142,1,1,1)]",
                                whileHover: { scale: 1.02, rotateY: 5 },
                                transition: { duration: 0.3 },
                                children: (0, a.jsx)("img", {
                                  className:
                                    "w-full object-cover object-center",
                                  src: `${e.imagesAlbum.find((e) => "banner_image_url" === e.field_code)?.image_url || ""}`,
                                  alt: "Main wedding photo",
                                }),
                              }),
                              (0, a.jsx)(s.motion.div, {
                                className:
                                  "absolute max-w-28 md:max-w-52 -bottom-10 -right-14 md:-bottom-20 md:-right-24",
                                animate: {
                                  y: [0, -10, 0],
                                  rotate: [0, 5, -5, 0],
                                },
                                transition: {
                                  duration: 3,
                                  repeat: 1 / 0,
                                  ease: "easeInOut",
                                },
                                children: (0, a.jsx)("img", {
                                  src: "./assets/ecards/wedding-10/den-long.webp",
                                  alt: "Lantern decoration",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(s.motion.div, {
                    className:
                      "bg-center bg-cover bg-no-repeat bg-[url('/assets/ecards/wedding-10/background-template-1.webp')]",
                    style: {
                      backgroundOrigin: "content-box",
                      backgroundClip: "border-box",
                    },
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0 },
                    variants: ee,
                    children: (0, a.jsx)("div", {
                      className: "md:pt-5 pl-5 pr-5 md:pb-5 md:pl-16 md:pr-16",
                      children: (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)(s.motion.div, {
                            className:
                              "flex justify-center items-center md:pt-5 pb-10",
                            variants: K,
                            children: (0, a.jsx)("div", {
                              className: "max-w-20 md:max-w-40",
                              children: (0, a.jsxs)(s.motion.div, {
                                className: "relative",
                                animate: {
                                  scale: [1, 1.05, 1],
                                  rotate: [0, 2, -2, 0],
                                },
                                transition: { duration: 4, repeat: 1 / 0 },
                                children: [
                                  (0, a.jsx)("img", {
                                    src: "./assets/ecards/wedding-10/img-26.webp",
                                    alt: "Wedding symbol",
                                  }),
                                  (0, a.jsx)(s.motion.div, {
                                    className:
                                      "max-w-20 md:max-w-32 absolute top-[121%] md:top-[117%] left-1/2 -translate-x-1/2 -translate-y-1/2",
                                    transition: {
                                      duration: 8,
                                      repeat: 1 / 0,
                                      ease: "linear",
                                    },
                                    children: (0, a.jsx)("img", {
                                      className: "max-w-[75px] md:max-w-32",
                                      src: "./assets/ecards/wedding-10/img-14.webp",
                                      alt: "Decoration",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, a.jsxs)(s.motion.div, {
                            className: "flex gap-5 md:gap-12 justify-around",
                            variants: ee,
                            children: [
                              (0, a.jsxs)(s.motion.div, {
                                className: "text-center w-5/12",
                                variants: q,
                                children: [
                                  (0, a.jsxs)(s.motion.p, {
                                    className: `text-base md:text-3xl md:leading-10 ${d.UTMCafeta.className} uppercase`,
                                    whileHover: { scale: 1.05 },
                                    children: [
                                      "NHÀ TRAI",
                                      e.formData.nha_trai_ong
                                        ?.toString()
                                        .trim() &&
                                        (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            (0, a.jsx)("br", {}),
                                            "ÔNG ",
                                            e.formData.nha_trai_ong
                                              .toString()
                                              .trim()
                                              .toUpperCase(),
                                          ],
                                        }),
                                      e.formData.nha_trai_ba
                                        ?.toString()
                                        .trim() &&
                                        (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            (0, a.jsx)("br", {}),
                                            "BÀ ",
                                            e.formData.nha_trai_ba
                                              .toString()
                                              .trim()
                                              .toUpperCase(),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-[13px] sm:text-base md:text-2xl md:pt-3",
                                    children: e.formData.nha_trai_dia_chi,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)(s.motion.div, {
                                className: "text-center w-5/12",
                                variants: J,
                                children: [
                                  (0, a.jsxs)(s.motion.p, {
                                    className: `text-base md:text-3xl md:leading-10 ${d.UTMCafeta.className} uppercase`,
                                    whileHover: { scale: 1.05 },
                                    children: [
                                      "NHÀ GÁI",
                                      (0, a.jsx)("br", {}),
                                      e.formData.nha_gai_ong
                                        ? "Ông " +
                                          e.formData.nha_gai_ong
                                            .toString()
                                            .trim()
                                            .toUpperCase()
                                        : " ",
                                      e.formData.nha_gai_ba
                                        ?.toString()
                                        .trim() &&
                                        (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            (0, a.jsx)("br", {}),
                                            "BÀ ",
                                            e.formData.nha_gai_ba
                                              .toString()
                                              .trim()
                                              .toUpperCase(),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-[13px] sm:text-base md:text-2xl md:pt-3",
                                    children: e.formData.nha_gai_dia_chi,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsx)(s.motion.div, {
                    className:
                      "bg-center bg-cover bg-no-repeat bg-[url('/assets/ecards/wedding-10/background-template-1.webp')]",
                    style: {
                      backgroundOrigin: "content-box",
                      backgroundClip: "border-box",
                    },
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0 },
                    variants: ee,
                    children: (0, a.jsxs)("div", {
                      className: "pt-5 pl-5 pr-5 md:pl-16 md:pr-16",
                      children: [
                        (0, a.jsx)(s.motion.div, {
                          className:
                            "pt-3 pb-3 text-sm md:pt-5 md:pb-7 md:text-[26px] font-medium",
                          variants: K,
                          children: (0, a.jsxs)(s.motion.h2, {
                            className: n.BlackMango.className,
                            children: [
                              "Trân Trọng Báo Tin",
                              " ",
                              (y = e.formData.ten_le?.toString().trim())
                                ? y
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
                        (0, a.jsxs)(s.motion.div, {
                          className: `flex flex-wrap justify-center gap-6 md:gap-16 text-[36px] md:text-7xl relative top-1/2 left-0 leading-15 md:leading-24 ${c.EphesisRegular.className}`,
                          variants: ee,
                          children: [
                            (0, a.jsx)(s.motion.h1, {
                              variants: q,
                              children: e.formData.hoten_chure,
                            }),
                            (0, a.jsx)(s.motion.span, {
                              className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${o.UTMAzkia.className}`,
                              children: "&",
                            }),
                            (0, a.jsx)(s.motion.h1, {
                              variants: J,
                              children: e.formData.hoten_codau,
                            }),
                          ],
                        }),
                        (0, a.jsx)(s.motion.div, {
                          className:
                            "pt-8 pl-5 pr-5 md:pl-10 md:pr-10 flex justify-center",
                          variants: Z,
                          children: (0, a.jsx)(s.motion.div, {
                            className:
                              "overflow-hidden border-6 md:border-15 border-solid border-[rgba(142,1,1,1)]",
                            whileHover: { scale: 1.05, rotateY: 3 },
                            transition: { duration: 0.3 },
                            children: (0, a.jsx)("img", {
                              className: "w-full object-cover object-center",
                              src: `${e.imagesAlbum.find((e) => "album2" === e.field_code)?.image_url || ""}`,
                              alt: "Couple photo",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(s.motion.div, {
                    className:
                      "bg-center bg-cover bg-no-repeat bg-[url('/assets/ecards/wedding-10/background-template-1.webp')]",
                    style: {
                      backgroundOrigin: "content-box",
                      backgroundClip: "border-box",
                    },
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0 },
                    variants: ee,
                    children: (0, a.jsx)("div", {
                      className:
                        "pt-5 md:pt-10 pl-7 pr-7 pb-5 md:pl-16 md:pr-16",
                      children: (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)(s.motion.div, {
                            className: "flex justify-center",
                            variants: K,
                            children: (0, a.jsx)(s.motion.div, {
                              className: "w-2/5 justify-center overflow-hidden",
                              animate: { scaleX: [1, 1.1, 1] },
                              transition: { duration: 3, repeat: 1 / 0 },
                              children: (0, a.jsx)("img", {
                                className:
                                  "w-full scale-120 object-cover aspect-[4/1]",
                                src: "./assets/ecards/wedding-10/img-15.webp",
                                alt: "Decoration line",
                              }),
                            }),
                          }),
                          (0, a.jsxs)(s.motion.div, {
                            className: "mb-4 md:mb-8 pt-1 md:pt-5",
                            variants: K,
                            children: [
                              (0, a.jsx)(s.motion.h2, {
                                className: `text-2xl md:text-5xl ${c.EphesisRegular.className}`,
                                animate: {
                                  y: [0, -5, 0],
                                  color: ["#000000", "#8e0101", "#000000"],
                                },
                                transition: { duration: 3, repeat: 1 / 0 },
                                children: "Trân Trọng Kính Mời",
                              }),
                              F &&
                                "" !== F.trim() &&
                                (0, a.jsx)("div", {
                                  className: "flex justify-center items-center",
                                  children: (0, a.jsx)("h1", {
                                    className: `px-4 text-red-700 text-2xl md:text-5xl md:mt-2 ${m.ViceroyJF.className} border-b-2 border-dotted border-gray-400`,
                                    children: F,
                                  }),
                                }),
                            ],
                          }),
                          (0, a.jsx)(s.motion.div, {
                            className: "flex gap-3 md:gap-5",
                            variants: ee,
                            children: ea?.map((e, t) =>
                              0 === t
                                ? (0, a.jsx)(
                                    s.motion.div,
                                    {
                                      className:
                                        "w-1/3 overflow-hidden pt-6 md:pt-16",
                                      variants: q,
                                      whileHover: { scale: 1.05, y: -10 },
                                      children: (0, a.jsx)("img", {
                                        className:
                                          "object-cover aspect-[116/165]",
                                        src: `${e?.image_url || ""}`,
                                        alt: `Album3 image ${t}`,
                                      }),
                                    },
                                    t,
                                  )
                                : 1 == t
                                  ? (0, a.jsx)(
                                      s.motion.div,
                                      {
                                        className: "w-1/3 overflow-hidden",
                                        variants: Z,
                                        whileHover: { scale: 1.05, y: -10 },
                                        children: (0, a.jsx)("img", {
                                          className:
                                            "object-cover aspect-[116/165]",
                                          src: `${e?.image_url || ""}`,
                                          alt: `Album3 image ${t}`,
                                        }),
                                      },
                                      t,
                                    )
                                  : 2 == t
                                    ? (0, a.jsx)(
                                        s.motion.div,
                                        {
                                          className:
                                            "w-1/3 overflow-hidden pt-6 md:pt-16",
                                          variants: J,
                                          whileHover: { scale: 1.05, y: -10 },
                                          children: (0, a.jsx)("img", {
                                            className:
                                              "object-cover aspect-[116/165]",
                                            src: `${e?.image_url || ""}`,
                                            alt: `Album3 image ${t}`,
                                          }),
                                        },
                                        t,
                                      )
                                    : null,
                            ),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsx)(s.motion.div, {
                    className:
                      "bg-center bg-cover bg-no-repeat bg-[url('/assets/ecards/wedding-10/background-template-1.webp')]",
                    style: {
                      backgroundOrigin: "content-box",
                      backgroundClip: "border-box",
                    },
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0 },
                    variants: ee,
                    children: (0, a.jsx)("div", {
                      className:
                        "pt-2 pl-8 pr-8 pb-4 md:pt-8 md:pb-8 md:pl-16 md:pr-16",
                      children: (0, a.jsxs)(s.motion.div, {
                        className: "text-xs md:text-3xl tracking-widest",
                        variants: ee,
                        children: [
                          (0, a.jsx)(s.motion.div, {
                            variants: K,
                            children: (0, a.jsxs)("p", {
                              className: "text-center md:leading-10",
                              children: [
                                "THAM DỰ TIỆC MỪNG",
                                " ",
                                (k = e.formData.ten_le?.toString().trim())
                                  ? k.toUpperCase()
                                  : "LỄ THÀNH HÔN",
                                " ",
                                (0, a.jsx)("br", {}),
                                "Vào Lúc",
                              ],
                            }),
                          }),
                          (0, a.jsxs)(s.motion.div, {
                            className:
                              "pb-3 md:pb-5 flex md:gap-10 pt-4 md:pt-8 justify-center",
                            variants: ee,
                            children: [
                              (0, a.jsx)(s.motion.div, {
                                className:
                                  "w-1/4 flex items-center justify-center",
                                variants: q,
                                children: (0, a.jsx)("p", {
                                  className:
                                    "border-r-2 border-gray-400 pr-2 pt-6 pb-6 md:pr-5 md:pt-10 md:pb-10",
                                  children: (() => {
                                    if (!O) return " ";
                                    try {
                                      return O.slice(0, 5).replace(":", "giờ");
                                    } catch {
                                      return " ";
                                    }
                                  })(),
                                }),
                              }),
                              (0, a.jsxs)(s.motion.div, {
                                className:
                                  "w-2/5 md:w-1/4 flex flex-wrap gap-1 items-center justify-center",
                                variants: Z,
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "w-full",
                                    children: (0, a.jsx)("p", {
                                      children: (() => {
                                        if (!P) return " ";
                                        try {
                                          return B(P.toString());
                                        } catch {
                                          return " ";
                                        }
                                      })(),
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "w-full",
                                    children: (0, a.jsx)(s.motion.p, {
                                      className:
                                        "text-3xl md:text-6xl md:pt-3 md:pb-3 font-bold",
                                      animate: {
                                        scale: [1, 1.1, 1],
                                        color: [
                                          "#000000",
                                          "#8e0101",
                                          "#000000",
                                        ],
                                      },
                                      transition: {
                                        duration: 2,
                                        repeat: 1 / 0,
                                      },
                                      children: (() => {
                                        if (!P) return " ";
                                        try {
                                          return (0, j.getDatePart)(P, "d");
                                        } catch {
                                          return " ";
                                        }
                                      })(),
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    children: (0, a.jsxs)("p", {
                                      className: "w-full",
                                      children: [
                                        "Tháng ",
                                        (() => {
                                          if (!P) return " ";
                                          try {
                                            return (0, j.getDatePart)(P, "m");
                                          } catch {
                                            return " ";
                                          }
                                        })(),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)(s.motion.div, {
                                className:
                                  "w-1/4 flex items-center justify-center",
                                variants: J,
                                children: (0, a.jsxs)("p", {
                                  className:
                                    "border-l-2 border-gray-400 pl-2 pt-6 pb-6 md:pl-5 md:pt-10 md:pb-10",
                                  children: [
                                    "Năm ",
                                    (() => {
                                      if (!P) return " ";
                                      try {
                                        return (0, j.getDatePart)(P, "y");
                                      } catch {
                                        return " ";
                                      }
                                    })(),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)(s.motion.div, {
                            className: "pt-3 pb-3 md:pt-3 md:pb-3",
                            variants: K,
                            children: (0, a.jsxs)("p", {
                              className: "text-center italic",
                              children: [
                                "( ",
                                (() => {
                                  if (!U) return " ";
                                  try {
                                    return (0, j.formatLunarDate)(U)
                                      .toLowerCase()
                                      .split(" ")
                                      .map(
                                        (e) =>
                                          e.charAt(0).toUpperCase() +
                                          e.slice(1),
                                      )
                                      .join(" ");
                                  } catch {
                                    return " ";
                                  }
                                })(),
                                ")",
                              ],
                            }),
                          }),
                          (0, a.jsxs)(s.motion.div, {
                            className: "md:pt-4",
                            variants: K,
                            children: [
                              (0, a.jsx)("p", {
                                className: "p-2 md:p-5",
                                children: "BUỔI TIỆC ĐƯỢC TỔ CHỨC TẠI",
                              }),
                              (0, a.jsx)("div", {
                                className: "flex justify-center",
                                children: (0, a.jsxs)(s.motion.div, {
                                  className:
                                    "border-2 pt-3 pb-4 pl-5 pr-5 md:p-11 rounded-2xl md:rounded-4xl md:border-4 border-solid border-[rgba(142,1,1,1)]",
                                  whileHover: { scale: 1.02, y: -5 },
                                  transition: { duration: 0.3 },
                                  children: [
                                    (0, a.jsx)(s.motion.p, {
                                      className:
                                        "text-lg font-bold md:text-[42px] uppercase md:!leading-[58px]",
                                      animate: {
                                        color: [
                                          "#000000",
                                          "#8e0101",
                                          "#000000",
                                        ],
                                      },
                                      transition: {
                                        duration: 3,
                                        repeat: 1 / 0,
                                      },
                                      children: e.formData.tiec_ten,
                                    }),
                                    (0, a.jsx)("p", {
                                      className: "p-3 md:p-6",
                                      children: e.formData.tiec_dia_chi,
                                    }),
                                    e.formData.google_map &&
                                      (0, a.jsx)(s.motion.a, {
                                        type: "button",
                                        href: `${e.formData.google_map}`,
                                        target: "blank",
                                        className:
                                          "cursor-pointer focus:outline-none text-white bg-[#b10000] shadow-md shadow-black/25 focus:ring-4 focus:ring-red-300 font-medium rounded-3xl px-3 py-2 md:px-7 md:py-3 me-2 mb-2",
                                        whileHover: { scale: 1.05, y: -2 },
                                        whileTap: { scale: 0.95 },
                                        animate: {
                                          boxShadow: [
                                            "0 4px 6px rgba(0,0,0,0.25)",
                                            "0 8px 12px rgba(0,0,0,0.3)",
                                            "0 4px 6px rgba(0,0,0,0.25)",
                                          ],
                                        },
                                        transition: {
                                          duration: 2,
                                          repeat: 1 / 0,
                                        },
                                        children: "Xem Chỉ Đường",
                                      }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsx)(_, { date: new Date(e.formData.tiec_ngay) }),
                  (0, a.jsx)(s.motion.div, {
                    className:
                      "bg-center bg-cover bg-no-repeat bg-[url('/assets/ecards/wedding-10/background-template-1.webp')]",
                    style: {
                      backgroundOrigin: "content-box",
                      backgroundClip: "border-box",
                    },
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0 },
                    variants: ee,
                    children: (0, a.jsxs)("div", {
                      className: "px-8 md:px-12 py-2 md:py-10",
                      children: [
                        (0, a.jsx)(s.motion.p, {
                          className: `${m.ViceroyJF.className} text-4xl md:text-7xl pb-1 md:pb-2`,
                          animate: {
                            y: [0, -5, 0],
                            color: ["#000000", "#8e0101", "#000000"],
                          },
                          transition: { duration: 3, repeat: 1 / 0 },
                          children: "Sự kiện cưới",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col pt-4 md:pt-14",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "flex flex-wrap gap-4 justify-center items-center w-full",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "w-full md:w-[49%] gap-1 md:gap-2 p-2 md:p-3 pb-4 md:pb-5 flex flex-col justify-center items-center bg-[rgb(242,242,242)] border border-dashed border-[rgb(205,99,99)] rounded-md",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "w-2/5 md:w-1/2 rounded-full border border-solid border-black overflow-hidden",
                                      children: (0, a.jsx)("img", {
                                        className:
                                          "w-full object-cover aspect-[1]",
                                        src: `${e.imagesAlbum.find((e) => "album5" === e.field_code)?.image_url || ""}`,
                                      }),
                                    }),
                                    (0, a.jsx)("p", {
                                      className: `${g.className} font-bold underline text-[22px] md:text-2xl text-[rgb(97,97,97)]`,
                                      children:
                                        e.formData.tieu_de_tiec_nha_gai?.trim()
                                          ? e.formData.tieu_de_tiec_nha_gai.trim()
                                          : "Tiệc Cưới Nhà Gái",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex gap-1 items-center justify-start w-full",
                                      children: [
                                        (0, a.jsx)("div", {
                                          children: (0, a.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "10 10 80 80",
                                            preserveAspectRatio: "none",
                                            className:
                                              "w-10 md:w-12 h-10 md:h-12",
                                            fill: "#A07B7BFF",
                                            children: (0, a.jsxs)("g", {
                                              children: [
                                                (0, a.jsx)("rect", {
                                                  x: "68.2",
                                                  y: "35.4",
                                                  transform:
                                                    "matrix(0.9697 0.2441 -0.2441 0.9697 11.1255 -15.7675)",
                                                  width: "2",
                                                  height: "3.1",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "79.9",
                                                  y: "56.6",
                                                  transform:
                                                    "matrix(-0.9697 -0.2442 0.2442 -0.9697 146.4785 133.4308)",
                                                  width: "3.1",
                                                  height: "2",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "59.9",
                                                  y: "68.4",
                                                  transform:
                                                    "matrix(-0.9697 -0.2442 0.2442 -0.9697 102.8081 152.6969)",
                                                  width: "2",
                                                  height: "3.1",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "47",
                                                  y: "48.3",
                                                  transform:
                                                    "matrix(0.9698 0.2441 -0.2441 0.9698 13.5101 -10.3536)",
                                                  width: "3.1",
                                                  height: "2",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "51.3",
                                                  y: "40.6",
                                                  transform:
                                                    "matrix(0.7175 0.6966 -0.6966 0.7175 43.926 -25.0297)",
                                                  width: "3.1",
                                                  height: "2",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "75.9",
                                                  y: "39.7",
                                                  transform:
                                                    "matrix(0.7178 0.6963 -0.6963 0.7178 50.4422 -41.8675)",
                                                  width: "2",
                                                  height: "3.1",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "75.7",
                                                  y: "64.3",
                                                  transform:
                                                    "matrix(-0.7175 -0.6966 0.6966 -0.7175 87.1133 165.9953)",
                                                  width: "3.1",
                                                  height: "2",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "52.2",
                                                  y: "64.1",
                                                  transform:
                                                    "matrix(-0.7177 -0.6963 0.6963 -0.7177 45.6007 149.8542)",
                                                  width: "2",
                                                  height: "3.1",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "47.7",
                                                  y: "56.7",
                                                  transform:
                                                    "matrix(-0.2794 -0.9602 0.9602 -0.2794 6.3798 121.256)",
                                                  width: "2",
                                                  height: "3.1",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "58.7",
                                                  y: "36.2",
                                                  transform:
                                                    "matrix(0.2792 0.9602 -0.9602 0.2792 79.1288 -31.0899)",
                                                  width: "3.1",
                                                  height: "2",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M64.1,53.4c0.1,0.4,0.5,0.7,1,0.7c0.1,0,0.2,0,0.3,0l17.7-4.8c0.5-0.1,0.8-0.7,0.7-1.2c-0.1-0.5-0.7-0.8-1.2-0.7l-17.7,4.8   C64.3,52.3,64,52.8,64.1,53.4z",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "68.2",
                                                  y: "68.8",
                                                  transform:
                                                    "matrix(-0.279 -0.9603 0.9603 -0.279 22.1946 156.2911)",
                                                  width: "3.1",
                                                  height: "2",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M71.4,29.2c-1.2-0.3-2.3-0.5-3.5-0.6c-0.9-0.1-1.7-0.1-2.6-0.1c-5.5,0-10.7,1.8-14.9,4.9l0-0.2c-0.2-1.2-1.4-2.1-2.6-1.9   l-2.6,0.5l-0.4-2.2c-0.1-0.5-0.6-0.9-1.2-0.8c-0.5,0.1-0.9,0.6-0.8,1.2l0.4,2.2l-8,1.4l-0.5-2.9c-0.1-0.5-0.6-0.9-1.2-0.8   c-0.5,0.1-0.9,0.6-0.8,1.2l0.5,2.9l-8.4,1.4l-0.5-2.7c-0.1-0.5-0.6-0.9-1.2-0.8c-0.5,0.1-0.9,0.6-0.8,1.2l0.5,2.7l-7.4,1.3   l-0.4-2.2c-0.1-0.5-0.6-0.9-1.2-0.8c-0.5,0.1-0.9,0.6-0.8,1.2l0.4,2.2l-2.6,0.5c-0.6,0.1-1.1,0.4-1.5,0.9c-0.4,0.5-0.5,1.1-0.4,1.7   l6.3,37c0.2,1.1,1.1,1.9,2.3,1.9c0.1,0,0.3,0,0.4,0l31.6-5.4l0.4-0.2l-1.7-1.6l-30.7,5.2l-0.1,0c-0.1,0-0.3-0.1-0.3-0.2l-4.8-28   l29.5-5c0.4-0.8,0.7-1.5,1.2-2.2l-31,5.3l-1.2-7.1c0-0.1,0-0.2,0.1-0.2c0,0,0.1-0.1,0.2-0.1l2.6-0.5l0.4,2.2c0.1,0.5,0.5,0.8,1,0.8   c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-0.4-2.2l7.4-1.3l0.3,1.8c0.1,0.5,0.5,0.8,1,0.8c0.1,0,0.1,0,0.2,0   c0.5-0.1,0.9-0.6,0.8-1.2L25,37.1l8.4-1.4l0.3,1.6c0.1,0.5,0.5,0.8,1,0.8c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-0.3-1.6   l8-1.4l0.4,2.2c0.1,0.5,0.5,0.8,1,0.8c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-0.4-2.2l2.7-0.5c0.1,0,0.3,0.1,0.3,0.2l0.2,1.4   c-1.5,1.4-2.9,2.9-4,4.6c-1.6,2.4-2.8,5-3.6,7.9c-3.4,13.4,4.8,27,18.1,30.3c2,0.5,4.1,0.8,6.1,0.8c11.5,0,21.4-7.8,24.2-18.9   C92.9,46.1,84.8,32.5,71.4,29.2z M87.6,59C85,69.3,75.8,76.4,65.3,76.4c-1.9,0-3.8-0.2-5.6-0.7C47.4,72.6,39.9,60.1,43,47.8   c2.6-10.2,11.7-17.4,22.3-17.4c1.9,0,3.8,0.2,5.6,0.7C83.2,34.2,90.7,46.7,87.6,59z",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M25.9,51.6c-1.9,0.3-3.3,1.3-4,3c-0.7,1.6-0.8,4-0.3,7c0.5,2.9,1.4,5.1,2.6,6.5s2.8,1.9,4.7,1.6c2-0.3,3.3-1.3,4-3   c0.7-1.7,0.8-4,0.3-7c-0.5-2.9-1.4-5.1-2.6-6.4C29.4,51.8,27.8,51.3,25.9,51.6z M31.3,65.6c-0.4,1.3-1.3,2-2.6,2.3   c-1.3,0.2-2.4-0.2-3.2-1.3c-0.8-1.1-1.4-2.9-1.8-5.4c-0.4-2.5-0.4-4.4,0-5.7c0.4-1.3,1.3-2,2.6-2.2c1.3-0.2,2.4,0.2,3.2,1.3   c0.8,1.1,1.4,2.9,1.8,5.4C31.7,62.5,31.7,64.4,31.3,65.6z",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M39.6,51.1c0.1-0.6,0.2-1.2,0.3-1.8c-0.1,0-0.1,0-0.2,0c-1.7,0.3-2.9,1-3.7,2.3c-0.8,1.2-1.1,2.7-0.8,4.6   c0.3,1.7,1,2.9,2,3.6c0.9,0.6,2,0.9,3.2,0.8c-0.2-0.6-0.4-1.1-0.5-1.7c-0.5-0.1-1-0.3-1.4-0.6c-0.7-0.6-1.1-1.4-1.3-2.6   c-0.2-1.3-0.1-2.4,0.4-3.2C38,51.8,38.7,51.3,39.6,51.1z",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M40.8,67.6c0.9-0.2,1.7-0.4,2.5-0.7c-0.2-0.4-0.5-0.9-0.8-1.5c-0.6,0.3-1.2,0.5-2,0.6c-0.8,0.1-1.6,0.2-2.2,0.1l0.3,1.7   C39.1,67.8,39.9,67.8,40.8,67.6z",
                                                  fill: "#A07B7BFF",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("p", {
                                          className: `${x.QuicksandRegular.className} text-[rgb(160,123,123)] text-base md:text-lg`,
                                          children: [
                                            (() => {
                                              if (!E) return " ";
                                              try {
                                                return E.slice(0, 5);
                                              } catch {
                                                return " ";
                                              }
                                            })(),
                                            " ",
                                            (() => {
                                              try {
                                                if (!G) return " ";
                                                return (
                                                  C(G).toString() +
                                                  ", ngày " +
                                                  (0, j.getDatePart)(G, "d") +
                                                  "-" +
                                                  (0, j.getDatePart)(G, "m") +
                                                  "-" +
                                                  (0, j.getDatePart)(G, "y")
                                                );
                                              } catch {
                                                return " ";
                                              }
                                            })(),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex gap-1 items-center justify-start w-full",
                                      children: [
                                        (0, a.jsx)("div", {
                                          children: (0, a.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 97 97",
                                            preserveAspectRatio: "none",
                                            className:
                                              "w-10 md:w-12 h-10 md:h-12",
                                            fill: "#A07B7BFF",
                                            children: (0, a.jsxs)("g", {
                                              children: [
                                                (0, a.jsx)("path", {
                                                  d: "M48.5,78.456c0.14,0,0.274-0.059,0.369-0.162c1.079-1.176,26.412-28.972,26.412-43.513C75.28,20.014,63.267,8,48.5,8   S21.72,20.014,21.72,34.781c0,14.542,25.333,42.337,26.412,43.513C48.226,78.397,48.36,78.456,48.5,78.456z M48.5,9   c14.215,0,25.78,11.565,25.78,25.781c0,13.225-22.599,38.883-25.78,42.429c-3.182-3.546-25.78-29.205-25.78-42.429   C22.72,20.565,34.285,9,48.5,9z",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M62.142,34.781c0-7.521-6.119-13.641-13.642-13.641c-7.522,0-13.642,6.119-13.642,13.641c0,7.521,6.12,13.64,13.642,13.64   C56.022,48.421,62.142,42.302,62.142,34.781z M35.858,34.781c0-6.97,5.671-12.641,12.642-12.641s12.642,5.67,12.642,12.641   c0,6.97-5.671,12.64-12.642,12.64S35.858,41.75,35.858,34.781z",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M59.797,66.926c-0.272-0.065-0.537,0.107-0.598,0.377c-0.062,0.269,0.107,0.537,0.377,0.598   c8.043,1.828,13.24,5.54,13.24,9.457C72.816,83.226,61.908,88,48.5,88s-24.317-4.774-24.317-10.643   c0-3.917,5.197-7.629,13.241-9.457c0.269-0.061,0.438-0.329,0.377-0.598c-0.062-0.27-0.331-0.441-0.599-0.377   c-8.647,1.965-14.02,5.962-14.02,10.432C23.183,83.886,34.304,89,48.5,89s25.316-5.114,25.316-11.643   C73.816,72.888,68.444,68.891,59.797,66.926z",
                                                  fill: "#A07B7BFF",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: `${x.QuicksandRegular.className} text-[rgb(160,123,123)] text-[15px] md:text-base flex flex-wrap`,
                                          children: [
                                            (0, a.jsxs)("p", {
                                              className: "text-start",
                                              children: [
                                                "Tại: ",
                                                e.formData.nha_gai_noi_to_chuc?.trim()
                                                  ? e.formData.nha_gai_noi_to_chuc.trim()
                                                  : "",
                                              ],
                                            }),
                                            (0, a.jsx)("p", {
                                              className: "text-start",
                                              children:
                                                e.formData.nha_gai_dia_chi_noi_to_chuc?.trim()
                                                  ? e.formData.nha_gai_dia_chi_noi_to_chuc.trim()
                                                  : "",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex gap-3 w-[94%] pt-2",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "w-1/2",
                                          children: (0, a.jsx)(
                                            s.motion.button,
                                            {
                                              onClick: () => z(!0),
                                              type: "button",
                                              className: `${x.QuicksandRegular.className} cursor-pointer focus:outline-none text-black border border-solid border-[rgb(160,123,123)] bg-white shadow-md shadow-black/25 focus:ring-4 font-semibold rounded-lg md:rounded-md text-[13px] py-1 md:text-[15px] md:py-1 w-full`,
                                              whileHover: {
                                                scale: 1.05,
                                                y: -3,
                                              },
                                              whileTap: { scale: 0.95 },
                                              animate: {
                                                scale: [1, 1.02, 1],
                                                boxShadow: [
                                                  "0 4px 6px rgba(0,0,0,0.25)",
                                                  "0 8px 12px rgba(0,0,0,0.3)",
                                                  "0 4px 6px rgba(0,0,0,0.25)",
                                                ],
                                              },
                                              transition: {
                                                duration: 2,
                                                repeat: 1 / 0,
                                              },
                                              children: "Mừng cưới",
                                            },
                                          ),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "w-1/2",
                                          children: (0, a.jsx)(s.motion.a, {
                                            href: `${e.formData.nha_gai_google_map}`,
                                            target: "blank",
                                            className: `${x.QuicksandRegular.className} block cursor-pointer focus:outline-none text-black border border-solid border-[rgb(160,123,123)] bg-white shadow-md shadow-black/25 focus:ring-4 font-semibold rounded-lg md:rounded-md text-[13px] py-1 md:text-[15px] md:py-1 w-full`,
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
                                            transition: {
                                              duration: 2,
                                              repeat: 1 / 0,
                                            },
                                            children: "Xem chỉ đường",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "w-full md:w-[49%] gap-1 md:gap-2 p-2 md:p-3 pb-4 md:pb-5 flex flex-col justify-center items-center bg-[rgb(242,242,242)] border border-dashed border-[rgb(205,99,99)] rounded-md",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "w-2/5 md:w-1/2 rounded-full border border-solid border-black overflow-hidden",
                                      children: (0, a.jsx)("img", {
                                        className:
                                          "w-full object-cover aspect-[1]",
                                        src: `${e.imagesAlbum.find((e) => "album4" === e.field_code)?.image_url || ""}`,
                                      }),
                                    }),
                                    (0, a.jsx)("p", {
                                      className: `${g.className} font-bold underline text-[22px] md:text-2xl text-[rgb(97,97,97)]`,
                                      children:
                                        e.formData.tieu_de_tiec_nha_trai?.trim()
                                          ? e.formData.tieu_de_tiec_nha_trai.trim()
                                          : "Tiệc Cưới Nhà Trai",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex gap-1 items-center justify-start w-full",
                                      children: [
                                        (0, a.jsx)("div", {
                                          children: (0, a.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "10 10 80 80",
                                            preserveAspectRatio: "none",
                                            className:
                                              "w-10 md:w-12 h-10 md:h-12",
                                            fill: "#A07B7BFF",
                                            children: (0, a.jsxs)("g", {
                                              children: [
                                                (0, a.jsx)("rect", {
                                                  x: "68.2",
                                                  y: "35.4",
                                                  transform:
                                                    "matrix(0.9697 0.2441 -0.2441 0.9697 11.1255 -15.7675)",
                                                  width: "2",
                                                  height: "3.1",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "79.9",
                                                  y: "56.6",
                                                  transform:
                                                    "matrix(-0.9697 -0.2442 0.2442 -0.9697 146.4785 133.4308)",
                                                  width: "3.1",
                                                  height: "2",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "59.9",
                                                  y: "68.4",
                                                  transform:
                                                    "matrix(-0.9697 -0.2442 0.2442 -0.9697 102.8081 152.6969)",
                                                  width: "2",
                                                  height: "3.1",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "47",
                                                  y: "48.3",
                                                  transform:
                                                    "matrix(0.9698 0.2441 -0.2441 0.9698 13.5101 -10.3536)",
                                                  width: "3.1",
                                                  height: "2",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "51.3",
                                                  y: "40.6",
                                                  transform:
                                                    "matrix(0.7175 0.6966 -0.6966 0.7175 43.926 -25.0297)",
                                                  width: "3.1",
                                                  height: "2",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "75.9",
                                                  y: "39.7",
                                                  transform:
                                                    "matrix(0.7178 0.6963 -0.6963 0.7178 50.4422 -41.8675)",
                                                  width: "2",
                                                  height: "3.1",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "75.7",
                                                  y: "64.3",
                                                  transform:
                                                    "matrix(-0.7175 -0.6966 0.6966 -0.7175 87.1133 165.9953)",
                                                  width: "3.1",
                                                  height: "2",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "52.2",
                                                  y: "64.1",
                                                  transform:
                                                    "matrix(-0.7177 -0.6963 0.6963 -0.7177 45.6007 149.8542)",
                                                  width: "2",
                                                  height: "3.1",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "47.7",
                                                  y: "56.7",
                                                  transform:
                                                    "matrix(-0.2794 -0.9602 0.9602 -0.2794 6.3798 121.256)",
                                                  width: "2",
                                                  height: "3.1",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "58.7",
                                                  y: "36.2",
                                                  transform:
                                                    "matrix(0.2792 0.9602 -0.9602 0.2792 79.1288 -31.0899)",
                                                  width: "3.1",
                                                  height: "2",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M64.1,53.4c0.1,0.4,0.5,0.7,1,0.7c0.1,0,0.2,0,0.3,0l17.7-4.8c0.5-0.1,0.8-0.7,0.7-1.2c-0.1-0.5-0.7-0.8-1.2-0.7l-17.7,4.8   C64.3,52.3,64,52.8,64.1,53.4z",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("rect", {
                                                  x: "68.2",
                                                  y: "68.8",
                                                  transform:
                                                    "matrix(-0.279 -0.9603 0.9603 -0.279 22.1946 156.2911)",
                                                  width: "3.1",
                                                  height: "2",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M71.4,29.2c-1.2-0.3-2.3-0.5-3.5-0.6c-0.9-0.1-1.7-0.1-2.6-0.1c-5.5,0-10.7,1.8-14.9,4.9l0-0.2c-0.2-1.2-1.4-2.1-2.6-1.9   l-2.6,0.5l-0.4-2.2c-0.1-0.5-0.6-0.9-1.2-0.8c-0.5,0.1-0.9,0.6-0.8,1.2l0.4,2.2l-8,1.4l-0.5-2.9c-0.1-0.5-0.6-0.9-1.2-0.8   c-0.5,0.1-0.9,0.6-0.8,1.2l0.5,2.9l-8.4,1.4l-0.5-2.7c-0.1-0.5-0.6-0.9-1.2-0.8c-0.5,0.1-0.9,0.6-0.8,1.2l0.5,2.7l-7.4,1.3   l-0.4-2.2c-0.1-0.5-0.6-0.9-1.2-0.8c-0.5,0.1-0.9,0.6-0.8,1.2l0.4,2.2l-2.6,0.5c-0.6,0.1-1.1,0.4-1.5,0.9c-0.4,0.5-0.5,1.1-0.4,1.7   l6.3,37c0.2,1.1,1.1,1.9,2.3,1.9c0.1,0,0.3,0,0.4,0l31.6-5.4l0.4-0.2l-1.7-1.6l-30.7,5.2l-0.1,0c-0.1,0-0.3-0.1-0.3-0.2l-4.8-28   l29.5-5c0.4-0.8,0.7-1.5,1.2-2.2l-31,5.3l-1.2-7.1c0-0.1,0-0.2,0.1-0.2c0,0,0.1-0.1,0.2-0.1l2.6-0.5l0.4,2.2c0.1,0.5,0.5,0.8,1,0.8   c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-0.4-2.2l7.4-1.3l0.3,1.8c0.1,0.5,0.5,0.8,1,0.8c0.1,0,0.1,0,0.2,0   c0.5-0.1,0.9-0.6,0.8-1.2L25,37.1l8.4-1.4l0.3,1.6c0.1,0.5,0.5,0.8,1,0.8c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-0.3-1.6   l8-1.4l0.4,2.2c0.1,0.5,0.5,0.8,1,0.8c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-0.4-2.2l2.7-0.5c0.1,0,0.3,0.1,0.3,0.2l0.2,1.4   c-1.5,1.4-2.9,2.9-4,4.6c-1.6,2.4-2.8,5-3.6,7.9c-3.4,13.4,4.8,27,18.1,30.3c2,0.5,4.1,0.8,6.1,0.8c11.5,0,21.4-7.8,24.2-18.9   C92.9,46.1,84.8,32.5,71.4,29.2z M87.6,59C85,69.3,75.8,76.4,65.3,76.4c-1.9,0-3.8-0.2-5.6-0.7C47.4,72.6,39.9,60.1,43,47.8   c2.6-10.2,11.7-17.4,22.3-17.4c1.9,0,3.8,0.2,5.6,0.7C83.2,34.2,90.7,46.7,87.6,59z",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M25.9,51.6c-1.9,0.3-3.3,1.3-4,3c-0.7,1.6-0.8,4-0.3,7c0.5,2.9,1.4,5.1,2.6,6.5s2.8,1.9,4.7,1.6c2-0.3,3.3-1.3,4-3   c0.7-1.7,0.8-4,0.3-7c-0.5-2.9-1.4-5.1-2.6-6.4C29.4,51.8,27.8,51.3,25.9,51.6z M31.3,65.6c-0.4,1.3-1.3,2-2.6,2.3   c-1.3,0.2-2.4-0.2-3.2-1.3c-0.8-1.1-1.4-2.9-1.8-5.4c-0.4-2.5-0.4-4.4,0-5.7c0.4-1.3,1.3-2,2.6-2.2c1.3-0.2,2.4,0.2,3.2,1.3   c0.8,1.1,1.4,2.9,1.8,5.4C31.7,62.5,31.7,64.4,31.3,65.6z",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M39.6,51.1c0.1-0.6,0.2-1.2,0.3-1.8c-0.1,0-0.1,0-0.2,0c-1.7,0.3-2.9,1-3.7,2.3c-0.8,1.2-1.1,2.7-0.8,4.6   c0.3,1.7,1,2.9,2,3.6c0.9,0.6,2,0.9,3.2,0.8c-0.2-0.6-0.4-1.1-0.5-1.7c-0.5-0.1-1-0.3-1.4-0.6c-0.7-0.6-1.1-1.4-1.3-2.6   c-0.2-1.3-0.1-2.4,0.4-3.2C38,51.8,38.7,51.3,39.6,51.1z",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M40.8,67.6c0.9-0.2,1.7-0.4,2.5-0.7c-0.2-0.4-0.5-0.9-0.8-1.5c-0.6,0.3-1.2,0.5-2,0.6c-0.8,0.1-1.6,0.2-2.2,0.1l0.3,1.7   C39.1,67.8,39.9,67.8,40.8,67.6z",
                                                  fill: "#A07B7BFF",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("p", {
                                          className: `${x.QuicksandRegular.className} text-[rgb(160,123,123)] text-base md:text-lg`,
                                          children: [
                                            (() => {
                                              if (!Y) return " ";
                                              try {
                                                return Y.slice(0, 5);
                                              } catch {
                                                return " ";
                                              }
                                            })(),
                                            " ",
                                            (() => {
                                              try {
                                                if (!Q) return " ";
                                                return (
                                                  C(Q).toString() +
                                                  ", ngày " +
                                                  (0, j.getDatePart)(Q, "d") +
                                                  "-" +
                                                  (0, j.getDatePart)(Q, "m") +
                                                  "-" +
                                                  (0, j.getDatePart)(Q, "y")
                                                );
                                              } catch {
                                                return " ";
                                              }
                                            })(),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex gap-1 items-center justify-start w-full",
                                      children: [
                                        (0, a.jsx)("div", {
                                          children: (0, a.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 97 97",
                                            preserveAspectRatio: "none",
                                            className:
                                              "w-10 md:w-12 h-10 md:h-12",
                                            fill: "#A07B7BFF",
                                            children: (0, a.jsxs)("g", {
                                              children: [
                                                (0, a.jsx)("path", {
                                                  d: "M48.5,78.456c0.14,0,0.274-0.059,0.369-0.162c1.079-1.176,26.412-28.972,26.412-43.513C75.28,20.014,63.267,8,48.5,8   S21.72,20.014,21.72,34.781c0,14.542,25.333,42.337,26.412,43.513C48.226,78.397,48.36,78.456,48.5,78.456z M48.5,9   c14.215,0,25.78,11.565,25.78,25.781c0,13.225-22.599,38.883-25.78,42.429c-3.182-3.546-25.78-29.205-25.78-42.429   C22.72,20.565,34.285,9,48.5,9z",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M62.142,34.781c0-7.521-6.119-13.641-13.642-13.641c-7.522,0-13.642,6.119-13.642,13.641c0,7.521,6.12,13.64,13.642,13.64   C56.022,48.421,62.142,42.302,62.142,34.781z M35.858,34.781c0-6.97,5.671-12.641,12.642-12.641s12.642,5.67,12.642,12.641   c0,6.97-5.671,12.64-12.642,12.64S35.858,41.75,35.858,34.781z",
                                                  fill: "#A07B7BFF",
                                                }),
                                                (0, a.jsx)("path", {
                                                  d: "M59.797,66.926c-0.272-0.065-0.537,0.107-0.598,0.377c-0.062,0.269,0.107,0.537,0.377,0.598   c8.043,1.828,13.24,5.54,13.24,9.457C72.816,83.226,61.908,88,48.5,88s-24.317-4.774-24.317-10.643   c0-3.917,5.197-7.629,13.241-9.457c0.269-0.061,0.438-0.329,0.377-0.598c-0.062-0.27-0.331-0.441-0.599-0.377   c-8.647,1.965-14.02,5.962-14.02,10.432C23.183,83.886,34.304,89,48.5,89s25.316-5.114,25.316-11.643   C73.816,72.888,68.444,68.891,59.797,66.926z",
                                                  fill: "#A07B7BFF",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: `${x.QuicksandRegular.className} text-[rgb(160,123,123)] text-[15px] md:text-base flex flex-wrap`,
                                          children: [
                                            (0, a.jsxs)("p", {
                                              className: "text-start",
                                              children: [
                                                "Tại: ",
                                                e.formData.nha_trai_noi_to_chuc?.trim()
                                                  ? e.formData.nha_trai_noi_to_chuc.trim()
                                                  : "",
                                              ],
                                            }),
                                            (0, a.jsx)("p", {
                                              className: "text-start",
                                              children:
                                                e.formData.nha_trai_dia_chi_noi_to_chuc?.trim()
                                                  ? e.formData.nha_trai_dia_chi_noi_to_chuc.trim()
                                                  : "",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex gap-3 w-[94%] pt-2",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "w-1/2",
                                          children: (0, a.jsx)(
                                            s.motion.button,
                                            {
                                              onClick: () => M(!0),
                                              type: "button",
                                              className: `${x.QuicksandRegular.className} cursor-pointer focus:outline-none text-black border border-solid border-[rgb(160,123,123)] bg-white shadow-md shadow-black/25 focus:ring-4 font-semibold rounded-lg md:rounded-md text-[13px] py-1 md:text-[15px] md:py-1 w-full`,
                                              whileHover: {
                                                scale: 1.05,
                                                y: -3,
                                              },
                                              whileTap: { scale: 0.95 },
                                              animate: {
                                                scale: [1, 1.02, 1],
                                                boxShadow: [
                                                  "0 4px 6px rgba(0,0,0,0.25)",
                                                  "0 8px 12px rgba(0,0,0,0.3)",
                                                  "0 4px 6px rgba(0,0,0,0.25)",
                                                ],
                                              },
                                              transition: {
                                                duration: 2,
                                                repeat: 1 / 0,
                                              },
                                              children: "Mừng cưới",
                                            },
                                          ),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "w-1/2",
                                          children: (0, a.jsx)(s.motion.a, {
                                            href: `${e.formData.nha_trai_google_map}`,
                                            target: "blank",
                                            className: `${x.QuicksandRegular.className} block cursor-pointer focus:outline-none text-black border border-solid border-[rgb(160,123,123)] bg-white shadow-md shadow-black/25 focus:ring-4 font-semibold rounded-lg md:rounded-md text-[13px] py-1 md:text-[15px] md:py-1 w-full`,
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
                                            transition: {
                                              duration: 2,
                                              repeat: 1 / 0,
                                            },
                                            children: "Xem chỉ đường",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {}),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(s.motion.div, {
                    className:
                      "bg-center bg-cover bg-no-repeat bg-[url('/assets/ecards/wedding-10/background-template-1.webp')]",
                    style: {
                      backgroundOrigin: "content-box",
                      backgroundClip: "border-box",
                    },
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0 },
                    variants: K,
                    children: (0, a.jsx)("div", {
                      className:
                        "pt-8 pl-10 pr-10 pb-3 md:pb-7 md:pl-16 md:pr-16",
                      children: (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)(s.motion.div, {
                            className: "",
                            animate: {
                              y: [0, -10, 0],
                              color: ["#000000", "#8e0101", "#000000"],
                            },
                            transition: { duration: 3, repeat: 1 / 0 },
                            children: (0, a.jsxs)("h2", {
                              className: `text-3xl md:text-6xl ${c.EphesisRegular.className}`,
                              children: [
                                "Xác Nhận Tham Dự",
                                (0, a.jsx)("br", {}),
                                "&",
                                (0, a.jsx)("br", {}),
                                "Gửi Lời Chúc",
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "w-full bg-[#B10000] rounded-3xl mt-4 md:mt-8 mb-4 md:mb-8",
                            children: (0, a.jsx)("form", {
                              onSubmit: X,
                              children: (0, a.jsxs)("div", {
                                className:
                                  "p-6 md:p-9 flex gap-4 md:gap-7 flex-wrap justify-center items-center",
                                children: [
                                  (0, a.jsx)("input", {
                                    required: !0,
                                    className:
                                      "w-full text-[13px] md:text-xl px-3 py-3 md:px-5 md:py-5 rounded-lg md:rounded-xl placeholder:text-[#B10000] text-[#B10000] focus:outline-none focus-visible:outline-none",
                                    type: "text",
                                    name: "name",
                                    maxLength: 200,
                                    placeholder: "Vui lòng điền tên của bạn",
                                    value: L.name,
                                    onChange: (e) => {
                                      let { name: a, value: t } = e.target;
                                      V((e) => ({ ...e, [a]: t }));
                                    },
                                  }),
                                  (0, a.jsx)("textarea", {
                                    rows: 2,
                                    required: !0,
                                    name: "content",
                                    className:
                                      "w-full text-[13px] md:text-xl px-3 py-3 md:p-5 rounded-lg md:rounded-xl placeholder:text-[#B10000] text-[#B10000] focus:outline-none focus-visible:outline-none",
                                    maxLength: 1e3,
                                    placeholder: "Gửi lời chúc đến Dâu Rể nhé!",
                                    value: L.content,
                                    onChange: (e) => {
                                      let { name: a, value: t } = e.target;
                                      V((e) => ({ ...e, [a]: t }));
                                    },
                                  }),
                                  (0, a.jsxs)("select", {
                                    className:
                                      "w-full cursor-pointer text-[13px] md:text-xl text-[#B10000] p-3 md:p-5 rounded-lg md:rounded-xl focus:outline-none focus-visible:outline-none",
                                    name: "is_tham_du",
                                    required: !0,
                                    value:
                                      null === L.is_tham_du
                                        ? ""
                                        : L.is_tham_du
                                          ? "true"
                                          : "false",
                                    onChange: (e) => {
                                      let { name: a, value: t } = e.target;
                                      V((e) => ({
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
                                        children: "Bạn Có Tham Dự Không?",
                                      }),
                                      (0, a.jsx)("option", {
                                        value: "true",
                                        children: "Có Thể Tham Dự",
                                      }),
                                      (0, a.jsx)("option", {
                                        value: "false",
                                        children: "Không Thể Tham Dự",
                                      }),
                                    ],
                                  }),
                                  L.is_tham_du &&
                                    (0, a.jsx)("input", {
                                      required: !0,
                                      className:
                                        "w-full text-[13px] md:text-xl placeholder:text-[#B10000]  text-[#B10000] px-3 py-3 md:p-5 rounded-lg md:rounded-xl focus:outline-none focus-visible:outline-none",
                                      type: "number",
                                      name: "so_nguoi_tham_du",
                                      min: 1,
                                      placeholder: "Số lượng người đến tham dự",
                                      value: L.so_nguoi_tham_du,
                                      onChange: (e) => {
                                        let {
                                          name: a,
                                          value: t,
                                          type: i,
                                        } = e.target;
                                        V((e) => ({
                                          ...e,
                                          [a]:
                                            "number" === i
                                              ? "" === t
                                                ? ""
                                                : Number(t)
                                              : t,
                                        }));
                                      },
                                    }),
                                  (0, a.jsx)(s.motion.button, {
                                    type: "submit",
                                    className:
                                      "cursor-pointer focus:outline-none text-black bg-white shadow-md shadow-black/25 focus:ring-4 font-semibold rounded-lg md:rounded-lg text-sm px-10 py-2 md:text-2xl md:px-20 md:py-4",
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
                    }),
                  }),
                  (0, a.jsxs)(s.motion.div, {
                    className: "bg-center bg-cover bg-no-repeat relative",
                    style: {
                      backgroundOrigin: "content-box",
                      backgroundClip: "border-box",
                    },
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0 },
                    variants: ee,
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "absolute top-0 left-0 w-full h-full z-[2] pointer-events-none overflow-hidden",
                        children: [
                          (0, a.jsx)("img", {
                            src: "./assets/ecards/wedding-10/background-template-1.webp",
                            alt: "",
                            className: "w-full",
                          }),
                          (0, a.jsx)("img", {
                            src: "./assets/ecards/wedding-10/background-template-1.webp",
                            alt: "",
                            className: "w-full",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "pl-7 pr-7 pb-3 md:pb-7 md:pl-16 md:pr-16",
                        children: [
                          (0, a.jsxs)(s.motion.div, {
                            className: "flex gap-3 md:gap-5",
                            variants: ee,
                            children: [
                              (0, a.jsx)(s.motion.div, {
                                className:
                                  "w-1/2 flex justify-center items-center",
                                variants: q,
                                children: (0, a.jsx)(s.motion.p, {
                                  className: `text-[26px] md:text-6xl ${c.EphesisRegular.className}`,
                                  animate: {
                                    y: [0, -5, 0],
                                    color: ["#000000", "#8e0101", "#000000"],
                                  },
                                  transition: { duration: 3, repeat: 1 / 0 },
                                  children: "Album hình cưới",
                                }),
                              }),
                              (0, a.jsx)(s.motion.div, {
                                className:
                                  "w-1/2 flex justify-center items-center overflow-hidden pl-2 pr-2 md:pl-10 md:pr-10",
                                variants: J,
                                children: (0, a.jsx)(s.motion.img, {
                                  className:
                                    "w-3/4 scale-160 object-cover aspect-[4/2]",
                                  src: "./assets/ecards/wedding-10/img-15.webp",
                                  animate: { scaleX: [1, 1.1, 1] },
                                  transition: { duration: 3, repeat: 1 / 0 },
                                  alt: "Decoration line",
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)(s.motion.div, {
                            className: "flex flex-wrap gap-1 md:gap-5",
                            variants: ee,
                            children: (0, a.jsx)("div", {
                              className: "flex justify-center flex-wrap",
                              children: (0, a.jsx)("div", {
                                className: "grid grid-cols-2 gap-4 w-full",
                                children:
                                  et &&
                                  et.length > 0 &&
                                  et.map((e, t) =>
                                    (0, a.jsx)(
                                      "div",
                                      {
                                        children: (0, a.jsx)("img", {
                                          className:
                                            "h-auto max-w-full rounded-lg",
                                          src: e.image_url,
                                          alt: `Album 10 Image ${t}`,
                                        }),
                                      },
                                      t,
                                    ),
                                  ),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)(s.motion.div, {
                    className: "flex relative",
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0 },
                    children: [
                      (0, a.jsx)(s.motion.img, {
                        className: "w-full opacity-50",
                        src: `${e.imagesAlbum.find((e) => "footer_image_url" === e.field_code)?.image_url || ""}`,
                        alt: "Thank you background",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "bg-black/50 w-full absolute -translate-0.5 top-1/2 flex flex-wrap items-center justify-center",
                        children: [
                          (0, a.jsx)(s.motion.img, {
                            className: "w-full",
                            src: "./assets/ecards/wedding-10/thank-you.webp",
                            alt: "Thank you",
                          }),
                          (0, a.jsx)(s.motion.p, {
                            className: `text-3xl md:text-7xl text-white absolute bottom-1/5 ${c.EphesisRegular.className}`,
                            animate: { y: [0, -10, 0], opacity: [0.8, 1, 0.8] },
                            transition: { duration: 3, repeat: 1 / 0 },
                            children: "Rất hân hạnh được đón tiếp!",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(t.Dialog, {
                open: D,
                onClose: W,
                className: "relative z-10",
                children: [
                  (0, a.jsx)(t.DialogBackdrop, {
                    transition: !0,
                    className:
                      "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
                  }),
                  (0, a.jsx)("div", {
                    className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                    children: (0, a.jsx)("div", {
                      className:
                        "flex min-h-screen items-center justify-center text-center sm:items-center sm:p-0",
                      children: (0, a.jsxs)(t.DialogPanel, {
                        transition: !0,
                        className:
                          "relative transform overflow-hidden rounded-2xl bg-[rgba(255,255,255,1)] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                        children: [
                          (0, a.jsxs)("button", {
                            type: "button",
                            className:
                              "absolute right-2 top-2 z-20 rounded-full bg-[rgba(255,255,255,1)] p-1 text-gray-400 hover:text-gray-600 focus:outline-none",
                            onClick: W,
                            children: [
                              (0, a.jsx)("span", {
                                className: "sr-only",
                                children: "Close",
                              }),
                              (0, a.jsx)("svg", {
                                className: "h-6 w-6",
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
                            ],
                          }),
                          (0, a.jsx)(s.motion.div, {
                            className: "bg-[rgba(255,255,255,1)]",
                            initial: { scale: 0.8, opacity: 0 },
                            animate: { scale: 1, opacity: 1 },
                            transition: { duration: 0.3 },
                            children: (0, a.jsxs)("div", {
                              className: "flex relative",
                              children: [
                                (0, a.jsx)("img", {
                                  className:
                                    "w-full aspect-[736/980] object-cover",
                                  src: `${e.imagesAlbum.find((e) => "footer_image_url" === e.field_code)?.image_url || ""}`,
                                  alt: "Thank you background",
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "bg-black/50 w-full absolute -translate-0.5 top-1/2 flex flex-wrap items-center justify-center",
                                  children: [
                                    (0, a.jsx)("img", {
                                      className: "w-full md:w-80%",
                                      src: "./assets/ecards/wedding-10/thank-you.webp",
                                      alt: "Thank you",
                                    }),
                                    (0, a.jsx)("p", {
                                      className: `text-3xl md:text-5xl text-white absolute bottom-1/5 ${c.EphesisRegular.className}`,
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
              (0, a.jsxs)(t.Dialog, {
                open: T,
                onClose: H,
                className: "relative z-10",
                children: [
                  (0, a.jsx)(t.DialogBackdrop, {
                    transition: !0,
                    className:
                      "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
                  }),
                  (0, a.jsx)("div", {
                    className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                    children: (0, a.jsx)("div", {
                      className:
                        "flex min-h-screen items-center justify-center text-center sm:items-center sm:p-0",
                      children: (0, a.jsxs)(t.DialogPanel, {
                        transition: !0,
                        className:
                          "relative transform overflow-hidden rounded-lg bg-[rgba(255,255,255,1)] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                        children: [
                          (0, a.jsx)("button", {
                            type: "button",
                            className:
                              "absolute md:right-2 right-2 top-2 md:top-2 z-20 rounded-full p-1 text-black focus:outline-none",
                            onClick: H,
                            "aria-label": "Close",
                            children: (0, a.jsx)("svg", {
                              className: "h-6 w-6 md:h-10 md:w-10",
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
                          (0, a.jsx)(s.motion.div, {
                            className:
                              "bg-[rgba(255,255,255,1)] px-6 pt-5 pb-8 sm:p-7 sm:pb-10",
                            initial: { scale: 0.8, opacity: 0 },
                            animate: { scale: 1, opacity: 1 },
                            transition: { duration: 0.3 },
                            children: (0, a.jsx)("div", {
                              children: (0, a.jsxs)("div", {
                                className:
                                  "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                                children: [
                                  (0, a.jsxs)(t.DialogTitle, {
                                    as: "h3",
                                    className: `text-2xl md:text-4xl text-gray-900 text-center ${f.className}`,
                                    children: [
                                      "Mừng Cưới Đến",
                                      (0, a.jsx)("br", {}),
                                      "Chú Rể",
                                    ],
                                  }),
                                  (0, a.jsx)(s.motion.div, {
                                    className:
                                      "pt-5 md:pt-10 flex justify-center flex-wrap",
                                    initial: { y: 20, opacity: 0 },
                                    animate: { y: 0, opacity: 1 },
                                    transition: { delay: 0.2 },
                                    children: (0, a.jsx)(s.motion.div, {
                                      whileHover: { scale: 1.05 },
                                      transition: { duration: 0.2 },
                                      children: (0, a.jsx)("div", {
                                        className:
                                          "max-w-60 md:max-w-80 border-[rgb(160,123,123)] border-2 rounded-md border-dashed",
                                        children: (0, a.jsx)("img", {
                                          className: "w-full object-cover",
                                          src: `${e.imagesAlbum.find((e) => "chure_image_bank_url" === e.field_code)?.image_url || ""}`,
                                          alt: "QR Code for wedding gift",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(t.Dialog, {
                open: $,
                onClose: I,
                className: "relative z-10",
                children: [
                  (0, a.jsx)(t.DialogBackdrop, {
                    transition: !0,
                    className:
                      "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-enter:ease-out data-[leave]:duration-200 data-[leave]:ease-in",
                  }),
                  (0, a.jsx)("div", {
                    className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                    children: (0, a.jsx)("div", {
                      className:
                        "flex min-h-screen items-center justify-center text-center sm:items-center sm:p-0",
                      children: (0, a.jsxs)(t.DialogPanel, {
                        transition: !0,
                        className:
                          "relative transform overflow-hidden rounded-lg bg-[rgba(255,255,255,1)] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
                        children: [
                          (0, a.jsx)("button", {
                            type: "button",
                            className:
                              "absolute md:right-2 right-2 top-2 md:top-2 z-20 rounded-full p-1 text-black focus:outline-none",
                            onClick: I,
                            "aria-label": "Close",
                            children: (0, a.jsx)("svg", {
                              className: "h-6 w-6 md:h-10 md:w-10",
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
                          (0, a.jsx)(s.motion.div, {
                            className:
                              "bg-[rgba(255,255,255,1)] px-6 pt-5 pb-8 sm:p-7 sm:pb-10",
                            initial: { scale: 0.8, opacity: 0 },
                            animate: { scale: 1, opacity: 1 },
                            transition: { duration: 0.3 },
                            children: (0, a.jsx)("div", {
                              children: (0, a.jsxs)("div", {
                                className:
                                  "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                                children: [
                                  (0, a.jsxs)(t.DialogTitle, {
                                    as: "h3",
                                    className: `text-2xl md:text-4xl text-gray-900 text-center ${f.className}`,
                                    children: [
                                      "Mừng Cưới Đến",
                                      (0, a.jsx)("br", {}),
                                      "Cô Dâu",
                                    ],
                                  }),
                                  (0, a.jsx)(s.motion.div, {
                                    className:
                                      "pt-5 md:pt-10 flex justify-center flex-wrap",
                                    initial: { y: 20, opacity: 0 },
                                    animate: { y: 0, opacity: 1 },
                                    transition: { delay: 0.2 },
                                    children: (0, a.jsx)(s.motion.div, {
                                      whileHover: { scale: 1.05 },
                                      transition: { duration: 0.2 },
                                      children: (0, a.jsx)("div", {
                                        className:
                                          "max-w-60 md:max-w-80 border-[rgb(160,123,123)] border-2 rounded-md border-dashed",
                                        children: (0, a.jsx)("img", {
                                          className: "w-full object-cover",
                                          src: `${e.imagesAlbum.find((e) => "codau_image_bank_url" === e.field_code)?.image_url || ""}`,
                                          alt: "QR Code for wedding gift",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(v.default, {
                urlMp3: e.formData.audio,
                ecardMyUserId: e.id,
              }),
            ],
          });
        },
      ],
      594886,
    );
  },
]);
