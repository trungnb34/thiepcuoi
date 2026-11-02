// Ẩn các phần không dùng của mẫu (React có thể vẽ lại chúng khi hydrate nên ẩn bằng CSS)
(function () {
  var style = document.createElement("style");
  style.id = "wl-tuy-chinh";
  style.textContent = [
    // Nút quảng cáo "Tạo ngay"
    'button[aria-label="Tạo ngay"], div.fixed:has(> button[aria-label="Tạo ngay"]) { display: none !important; }',
    // Ảnh cuối trang (footer)
    'img[alt="Footer"], div:has(> img[alt="Footer"]) { display: none !important; }',
  ].join("\n");
  var root = document.documentElement;
  // Gắn vào <html> để không bị mất khi Next.js hydrate <head>; nếu bị gỡ thì gắn lại.
  var attach = function () { if (!style.isConnected) root.appendChild(style); };
  attach();
  new MutationObserver(attach).observe(root, { childList: true });
})();
