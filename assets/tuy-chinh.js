// Ẩn các phần không dùng của mẫu + thay nút menu bằng toggle bật/tắt nhạc
(function () {
  "use strict";

  // ---- CSS ẩn các thứ không cần ----
  var style = document.createElement("style");
  style.id = "wl-tuy-chinh";
  style.textContent = [
    // Nút quảng cáo "Tạo ngay"
    'button[aria-label="Tạo ngay"], div.fixed:has(> button[aria-label="Tạo ngay"]) { display: none !important; }',
    // Ảnh cuối trang (footer)
    'img[alt="Footer"], div:has(> img[alt="Footer"]) { display: none !important; }',
    // Nút menu tròn cam gốc + dropdown của nó (bị thay bằng nút toggle audio bên dưới)
    'button[aria-label="Mở menu"] { display: none !important; }',
    'div.fixed.bottom-3.right-3 > div.flex.flex-col { display: none !important; }',
  ].join("\n");
  var root = document.documentElement;
  var attach = function () { if (!style.isConnected) root.appendChild(style); };
  attach();
  new MutationObserver(attach).observe(root, { childList: true });

  // ---- Chặn React tự play audio của nó ----
  // Trang này gốc tạo `new Audio(src)` ngoài DOM rồi `.play()`. Ta patch play()
  // để chỉ cho phép audio của ta (id="wl-audio") kêu — các instance khác hóa im.
  var AudioProto = window.HTMLAudioElement && window.HTMLAudioElement.prototype;
  if (AudioProto && !AudioProto.__wlPatched) {
    var origPlay = AudioProto.play;
    AudioProto.play = function () {
      if (this && this.id === "wl-audio") return origPlay.apply(this, arguments);
      try { this.pause && this.pause(); } catch (e) {}
      try { this.src = ""; } catch (e) {}
      return Promise.resolve();
    };
    AudioProto.__wlPatched = true;
  }

  // ---- Audio + nút toggle của ta ----
  var AUDIO_SRC = "./r2o.thiep360.com/mp3/IDO%20-%20911.mp3?v=1";
  var audioEl = null;
  var buttonEl = null;

  function ensureAudio() {
    if (audioEl) return audioEl;
    audioEl = document.createElement("audio");
    audioEl.id = "wl-audio";
    audioEl.src = AUDIO_SRC;
    audioEl.loop = true;
    audioEl.preload = "auto";
    audioEl.style.display = "none";
    document.body.appendChild(audioEl);
    audioEl.addEventListener("play",  updateIcon);
    audioEl.addEventListener("pause", updateIcon);
    audioEl.addEventListener("ended", updateIcon);
    return audioEl;
  }

  var ICON_PLAY =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">' +
    '<path d="M3 10v4a1 1 0 0 0 1 1h3l4.3 3.4A1 1 0 0 0 13 17.6V6.4a1 1 0 0 0-1.7-.8L7 9H4a1 1 0 0 0-1 1z"/>' +
    '<path d="M16.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
    '<path d="M19.5 5.5a9 9 0 0 1 0 13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
    "</svg>";

  var ICON_MUTE =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">' +
    '<path d="M3 10v4a1 1 0 0 0 1 1h3l4.3 3.4A1 1 0 0 0 13 17.6V6.4a1 1 0 0 0-1.7-.8L7 9H4a1 1 0 0 0-1 1z"/>' +
    '<path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
    "</svg>";

  function updateIcon() {
    if (!buttonEl) return;
    var playing = audioEl && !audioEl.paused;
    buttonEl.innerHTML = playing ? ICON_PLAY : ICON_MUTE;
    buttonEl.setAttribute("aria-label", playing ? "Tắt nhạc" : "Bật nhạc");
    buttonEl.setAttribute("aria-pressed", playing ? "true" : "false");
  }

  function toggleAudio() {
    ensureAudio();
    if (audioEl.paused) {
      var p = audioEl.play();
      if (p && p.catch) p.catch(function () {});
    } else {
      audioEl.pause();
    }
  }

  function buildButton() {
    if (document.getElementById("wl-audio-btn")) return;
    var holder = document.createElement("div");
    holder.id = "wl-audio-holder";
    holder.style.cssText =
      "position:fixed;bottom:12px;right:12px;z-index:60;" +
      "transition:bottom .2s;";
    var btn = document.createElement("button");
    btn.id = "wl-audio-btn";
    btn.type = "button";
    btn.style.cssText =
      "border:0;cursor:pointer;padding:0;" +
      "width:44px;height:44px;border-radius:9999px;" +
      "background:linear-gradient(135deg,#FF5959,#FFD175);" +
      "color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.25);" +
      "display:flex;align-items:center;justify-content:center;" +
      "transition:transform .15s, box-shadow .2s;";
    btn.addEventListener("click", toggleAudio);
    btn.addEventListener("mouseenter", function () {
      btn.style.transform = "scale(1.05)";
      btn.style.boxShadow = "0 6px 16px rgba(0,0,0,.3)";
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.transform = "";
      btn.style.boxShadow = "0 4px 12px rgba(0,0,0,.25)";
    });
    // mobile size tweak via media query (inline style doesn't support @media, so use JS)
    function syncSize() {
      var big = window.matchMedia("(min-width: 768px)").matches;
      btn.style.width = big ? "56px" : "44px";
      btn.style.height = big ? "56px" : "44px";
      holder.style.bottom = big ? "24px" : "12px";
      holder.style.right  = big ? "24px" : "12px";
    }
    syncSize();
    window.addEventListener("resize", syncSize);

    holder.appendChild(btn);
    document.body.appendChild(holder);
    buttonEl = btn;
    updateIcon();
  }

  // ---- Thử autoplay (browser thường chặn, fallback: play khi user chạm lần đầu) ----
  function tryAutoplay() {
    ensureAudio();
    var p = audioEl.play();
    if (p && p.catch) {
      p.catch(function () {
        var once = function () {
          var pp = audioEl.play();
          if (pp && pp.catch) pp.catch(function () {});
          ["click", "touchstart", "keydown"].forEach(function (ev) {
            document.removeEventListener(ev, once, true);
          });
        };
        ["click", "touchstart", "keydown"].forEach(function (ev) {
          document.addEventListener(ev, once, { once: true, capture: true });
        });
      });
    }
  }

  // ---- Thay tên khách theo query ?name=... ----
  // VD: /thiepcuoi/?name=Bạn%20Trung  → "Bạn Lan" → "Bạn Trung" ở <h1> và trong <input name="name">
  function applyGuestName() {
    try {
      var params = new URLSearchParams(window.location.search);
      var name = params.get("name") || params.get("guestName");
      if (!name) return;
      try { name = decodeURIComponent(name); } catch (e) {}
      name = String(name).trim();
      if (!name) return;

      var OLD = "Bạn Lan";

      // 1) H1 chứa đúng text "Bạn Lan" (tên khách in trong thiệp)
      document.querySelectorAll("h1").forEach(function (el) {
        if (el.textContent && el.textContent.trim() === OLD) el.textContent = name;
      });

      // 2) <input name="name"> mặc định có value="Bạn Lan" — set bằng native setter
      //    để React cập nhật state nội bộ.
      document.querySelectorAll('input[name="name"]').forEach(function (el) {
        if (el.value !== OLD && el.value !== "") return;
        var desc = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value");
        if (desc && desc.set) desc.set.call(el, name); else el.value = name;
        el.dispatchEvent(new Event("input", { bubbles: true }));
      });
    } catch (e) { /* ignore */ }
  }

  function init() {
    buildButton();
    tryAutoplay();
    // Thay tên khách lặp vài lần để chắc chắn chạy sau khi React hydrate xong
    [0, 300, 1000, 2500].forEach(function (t) { setTimeout(applyGuestName, t); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
