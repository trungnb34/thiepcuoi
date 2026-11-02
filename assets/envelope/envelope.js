// Phong bì mở thiệp — chạm con dấu để mở (lấy từ web_thiep)
(function () {
  var CFG = {
    couple: "Bá Trung & Hạnh Nguyễn",
    initials: "TH",
    shortDate: "29 . 11 . 2026",
    defaultGuest: "Quý khách",
  };

  var params = new URLSearchParams(location.search);
  var guest = (params.get("guestName") || params.get("guest") || CFG.defaultGuest).trim();

  var font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Be+Vietnam+Pro:wght@300;400;500&display=swap";


  var css = `
#wl-cover {
  --sage: #9bbfa5; --sage-dark: #557d62; --sage-deep: #3f5f4a; --paper: #fdfcf8; --muted: #7b897f;
  --foil: linear-gradient(105deg, #a8803a 0%, #e9d08f 22%, #b8904a 40%, #fff2c6 52%, #c39b52 66%, #f0dca0 82%, #a8803a 100%);
  position: fixed; inset: 0; z-index: 2147483000;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem;
  padding: 1rem; background: #ffffff; font-family: "Be Vietnam Pro", system-ui, sans-serif; font-weight: 300;
  transition: opacity 1s ease, visibility 1s; box-sizing: border-box; line-height: 1.7; color: #34433a;
}
#wl-cover *, #wl-cover *::before, #wl-cover *::after { box-sizing: border-box; }
#wl-cover.wl-hide { opacity: 0; visibility: hidden; }
#wl-cover .wl-top {
  font-family: "Cormorant Garamond", Georgia, serif; font-style: italic; font-size: 1.15rem; letter-spacing: .25em;
  color: var(--sage-dark); margin: 0; text-transform: uppercase;
}
#wl-cover .wl-hint { margin: 0; font-size: .8rem; letter-spacing: .15em; color: var(--sage-dark); animation: wl-pulse 2s ease-in-out infinite; }
@keyframes wl-pulse { 50% { opacity: .35; } }
#wl-cover .wl-env {
  --w: min(340px, 86vw);
  position: relative; width: var(--w); height: calc(var(--w) * .68);
  perspective: 1200px; filter: drop-shadow(0 25px 30px rgba(63, 95, 74, .3));
  animation: wl-bob 4s ease-in-out infinite;
}
@keyframes wl-bob { 50% { transform: translateY(-8px); } }
#wl-cover .wl-back, #wl-cover .wl-pocket, #wl-cover .wl-flap { position: absolute; inset: 0; border-radius: 10px; }
#wl-cover .wl-back { background: linear-gradient(160deg, #f2c9d3, #e3aebb); }
#wl-cover .wl-pocket { z-index: 3; background: linear-gradient(180deg, #b6d2bd, #9cbfa6); clip-path: polygon(0 0, 50% 52%, 100% 0, 100% 100%, 0 100%); }
#wl-cover .wl-pocket::after { content: ""; position: absolute; inset: 8px; border: 1px solid rgba(236, 217, 164, .7); border-radius: 6px; }
#wl-cover .wl-flap {
  z-index: 4; height: 62%; background: linear-gradient(180deg, #f8dde4, #ecbcc8);
  clip-path: polygon(0 0, 100% 0, 50% 100%); transform-origin: top center;
  transition: transform .9s cubic-bezier(.6, .1, .3, 1), z-index 0s .45s; border-radius: 10px 10px 0 0;
}
#wl-cover .wl-letter {
  position: absolute; z-index: 2; left: 6%; right: 6%; top: 6%; height: 88%;
  background: var(--paper); border-radius: 8px; padding: 1.2rem 1rem; text-align: center; overflow: hidden;
  box-shadow: 0 0 0 1px rgba(197, 160, 89, .35) inset;
  transition: transform 1.1s cubic-bezier(.3, .8, .3, 1) .7s;
}
#wl-cover .wl-sprig { position: absolute; width: 70px; height: 70px; left: -12px; top: -14px; transform: rotate(90deg); opacity: .5; color: var(--sage); pointer-events: none; }
#wl-cover .wl-tiny { font-size: .7rem; letter-spacing: .2em; text-transform: uppercase; color: var(--muted); margin: 0; }
#wl-cover .wl-guest { font-family: "Cormorant Garamond", Georgia, serif; font-size: 1.2rem; font-weight: 600; color: var(--sage-deep); margin: .2rem 0; }
#wl-cover .wl-script { font-family: "Great Vibes", cursive; font-weight: 400; line-height: 1.25; }
#wl-cover .wl-foil {
  background: var(--foil); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: wl-foil 7s linear infinite; padding: 0 .15em;
}
@keyframes wl-foil { to { background-position: -250% 0; } }
#wl-cover .wl-names { font-size: 2rem; margin: .1rem 0 .3rem; }
#wl-cover .wl-seal {
  position: absolute; z-index: 5; left: 50%; top: 62%; transform: translate(-50%, -50%);
  width: 74px; height: 74px; border-radius: 50%; border: 0; cursor: pointer; padding: 0;
  display: grid; place-items: center;
  background: radial-gradient(circle at 35% 30%, #f6e2a8, #c9a257 45%, #94702e 100%);
  box-shadow: 0 6px 16px rgba(0, 0, 0, .25), inset 0 0 0 4px rgba(255, 255, 255, .18), inset 0 0 0 6px rgba(148, 112, 46, .5);
  transition: transform .5s, opacity .5s;
}
#wl-cover .wl-seal::before { content: ""; position: absolute; inset: -10px; border-radius: 50%; border: 2px solid rgba(236, 217, 164, .8); animation: wl-ring 2s ease-out infinite; }
@keyframes wl-ring { from { transform: scale(.85); opacity: 1; } to { transform: scale(1.4); opacity: 0; } }
#wl-cover .wl-seal span { font-family: "Great Vibes", cursive; font-size: 1.9rem; color: #fff8e1; text-shadow: 0 1px 2px rgba(80, 55, 15, .6); }
#wl-cover .wl-seal:hover { transform: translate(-50%, -50%) scale(1.06); }
#wl-cover .wl-env.wl-open { animation: none; }
#wl-cover .wl-env.wl-open .wl-seal { opacity: 0; transform: translate(-50%, -50%) scale(.4); pointer-events: none; }
#wl-cover .wl-env.wl-open .wl-flap { transform: rotateX(180deg); z-index: 1; }
#wl-cover .wl-env.wl-open .wl-letter { transform: translateY(-58%); z-index: 2; }
#wl-cover .wl-spark { position: fixed; width: 6px; height: 6px; border-radius: 50%; pointer-events: none; animation: wl-burst 1s ease-out forwards; }
@keyframes wl-burst { to { transform: translate(var(--dx), var(--dy)) scale(.2); opacity: 0; } }
/* ---- Chuyển cảnh ---- */
#wl-cover.wl-opening .wl-top, #wl-cover.wl-opening .wl-hint { opacity: 0; transform: translateY(-10px); transition: opacity .6s, transform .6s; }
#wl-cover .wl-env.wl-zoom { animation: none; filter: none; }
#wl-cover .wl-env.wl-zoom .wl-back, #wl-cover .wl-env.wl-zoom .wl-pocket, #wl-cover .wl-env.wl-zoom .wl-flap { opacity: 0; transition: opacity .45s ease; }
#wl-cover .wl-env.wl-zoom .wl-letter {
  z-index: 6; transform: translateY(-20%) scale(2.4); opacity: 0;
  box-shadow: 0 30px 60px -20px rgba(63, 95, 74, .45), 0 0 0 1px rgba(197, 160, 89, .35) inset;
  transition: transform 1.4s cubic-bezier(.5, 0, .7, .3), opacity .9s ease .5s;
}
@property --wl-r { syntax: "<length>"; inherits: false; initial-value: 0px; }
#wl-cover.wl-iris {
  -webkit-mask-image: radial-gradient(circle at 50% 50%, transparent var(--wl-r), #000 calc(var(--wl-r) + 1px));
  mask-image: radial-gradient(circle at 50% 50%, transparent var(--wl-r), #000 calc(var(--wl-r) + 1px));
  animation: wl-iris 1.3s cubic-bezier(.65, 0, .35, 1) forwards;
}
@keyframes wl-iris { to { --wl-r: 150vmax; } }
#wl-cover.wl-iris::after { /* vòng vàng chạy theo mép */
  content: ""; position: absolute; left: 50%; top: 50%; width: 10px; height: 10px; border-radius: 50%;
  transform: translate(-50%, -50%); box-shadow: 0 0 0 2px rgba(197, 160, 89, .8), 0 0 24px 6px rgba(236, 217, 164, .6);
  animation: wl-ring-out 1.3s cubic-bezier(.65, 0, .35, 1) forwards;
}
@keyframes wl-ring-out { to { width: 300vmax; height: 300vmax; opacity: 0; } }
#wl-cover.wl-hide { transition: opacity .8s ease, visibility .8s; }
@media (prefers-reduced-motion: reduce) { #wl-cover * { animation: none !important; transition: none !important; } }
`;
  var style = document.createElement("style");
  style.textContent = css;


  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var leaf = function (t) { return '<path d="M0 0 C6 -6.5 16 -6.5 22 0 C16 6.5 6 6.5 0 0Z" transform="' + t + '"/>'; };
  var sprig =
    '<svg class="wl-sprig" viewBox="0 0 120 120" aria-hidden="true"><g fill="currentColor">' +
    '<path d="M5 115 C30 70 60 40 115 5" fill="none" stroke="currentColor" stroke-width="1.2"/>' +
    leaf("translate(22 90) rotate(-105)") + leaf("translate(30 80) rotate(5) scale(.9)") +
    leaf("translate(42 66) rotate(-100) scale(.95)") + leaf("translate(52 56) rotate(0) scale(.85)") +
    leaf("translate(66 45) rotate(-95) scale(.8)") + leaf("translate(78 35) rotate(-5) scale(.75)") +
    leaf("translate(92 25) rotate(-95) scale(.6)") +
    '<circle cx="115" cy="5" r="2.4"/><circle cx="104" cy="16" r="1.6"/></g></svg>';

  var cover = document.createElement("div");
  cover.id = "wl-cover";
  cover.innerHTML =
    '<p class="wl-top">Wedding Invitation</p>' +
    '<div class="wl-env">' +
    '<div class="wl-back"></div>' +
    '<div class="wl-letter">' + sprig +
    '<p class="wl-tiny">Trân trọng kính mời</p>' +
    '<p class="wl-guest">' + esc(guest) + "</p>" +
    '<p class="wl-names wl-script wl-foil">' + esc(CFG.couple) + "</p>" +
    '<p class="wl-tiny">' + esc(CFG.shortDate) + "</p>" +
    "</div>" +
    '<div class="wl-pocket"></div>' +
    '<div class="wl-flap"></div>' +
    '<button class="wl-seal" type="button" aria-label="Mở thiệp"><span>' + esc(CFG.initials) + "</span></button>" +
    "</div>" +
    '<p class="wl-hint">Chạm vào con dấu để mở thiệp</p>';

  // Đặt font + CSS bên trong phong bì để không bị mất khi Next.js hydrate <head>
  cover.insertBefore(style, cover.firstChild);
  cover.insertBefore(font, cover.firstChild);

  var opened = false;
  var root = document.documentElement;
  // Khoá cuộn bằng cách chặn thao tác (không đổi overflow) để không làm lệch
  // các hiệu ứng chạy theo cuộn của trang (khối "SAVE THE DATE" bị đẩy xuống).
  var stop = function (e) { if (!opened) e.preventDefault(); };
  var stopKeys = function (e) { if (!opened && [32, 33, 34, 35, 36, 38, 40].indexOf(e.keyCode) > -1) e.preventDefault(); };
  window.addEventListener("wheel", stop, { passive: false });
  window.addEventListener("touchmove", stop, { passive: false });
  window.addEventListener("keydown", stopKeys);
  var unlock = function () {
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchmove", stop);
    window.removeEventListener("keydown", stopKeys);
    window.scrollTo(0, 0);
    // Báo cho trang tính lại vị trí các hiệu ứng theo cuộn
    window.dispatchEvent(new Event("resize"));
    window.dispatchEvent(new Event("scroll"));
  };
  // Gắn vào <html> (ngoài <body>) để React/Next không xoá khi hydrate; nếu bị gỡ thì gắn lại.
  var attach = function () { if (!opened && !cover.isConnected) root.appendChild(cover); };
  attach();
  new MutationObserver(attach).observe(root, { childList: true });

  function burst(x, y, n) {
    var colors = ["#ecd9a4", "#c5a059", "#f6dbe2", "#d995a6", "#9bbfa5"];
    for (var i = 0; i < n; i++) {
      var s = document.createElement("i");
      s.className = "wl-spark";
      var a = Math.random() * Math.PI * 2, r = 60 + Math.random() * 140;
      s.style.left = x + "px";
      s.style.top = y + "px";
      s.style.background = colors[i % colors.length];
      s.style.setProperty("--dx", Math.cos(a) * r + "px");
      s.style.setProperty("--dy", Math.sin(a) * r + "px");
      cover.appendChild(s);
    }
  }

  // Cánh hoa rơi trên trang sau khi mở thư
  function petals(n) {
    var layer = document.createElement("div");
    layer.id = "wl-petals";
    layer.innerHTML =
      "<style>" +
      "#wl-petals{position:fixed;inset:0;z-index:2147482999;pointer-events:none;overflow:hidden}" +
      "#wl-petals i{position:absolute;top:-40px;display:block;border-radius:80% 0 80% 0;opacity:.9;" +
      "animation:wl-fall var(--t) linear var(--d) forwards}" +
      "@keyframes wl-fall{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(var(--x),110vh) rotate(var(--rot));opacity:0}}" +
      "</style>";
    var colors = ["#f6dbe2", "#f2c9d3", "#ecbcc8", "#fff2c6", "#e3efe6"];
    for (var i = 0; i < n; i++) {
      var p = document.createElement("i");
      var size = 8 + Math.random() * 10;
      p.style.left = Math.random() * 100 + "vw";
      p.style.width = size + "px";
      p.style.height = size * 0.8 + "px";
      p.style.background = colors[i % colors.length];
      p.style.boxShadow = "0 1px 2px rgba(0,0,0,.08)";
      p.style.setProperty("--t", 4 + Math.random() * 3.5 + "s");
      p.style.setProperty("--d", Math.random() * 2.5 + "s");
      p.style.setProperty("--x", (Math.random() - 0.5) * 240 + "px");
      p.style.setProperty("--rot", (Math.random() < 0.5 ? -1 : 1) * (360 + Math.random() * 540) + "deg");
      layer.appendChild(p);
    }
    root.appendChild(layer);
    setTimeout(function () { layer.remove(); }, 10500);
  }

  var env = cover.querySelector(".wl-env"), seal = cover.querySelector(".wl-seal");
  seal.addEventListener("click", function () {
    if (env.classList.contains("wl-open")) return;
    var r = seal.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 40);
    env.classList.add("wl-open");
    cover.classList.add("wl-opening");
    var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var finish = function () { opened = true; cover.remove(); };
    if (reduce) {
      unlock();
      return finish();
    }
    // 1) nắp mở + thư trượt ra  2) thư bay về phía người xem  3) vòng tròn mở ra để lộ trang thiệp
    setTimeout(function () { env.classList.add("wl-zoom"); }, 1900);
    setTimeout(function () {
      cover.classList.add("wl-iris");
      unlock();
      petals(36);
    }, 2150);
    setTimeout(function () { cover.classList.add("wl-hide"); }, 3300);
    setTimeout(finish, 4300);
  });
})();
