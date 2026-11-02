@echo off
cd /d "%~dp0"
echo.
echo ==========================================================
echo  Local server - truy cap tu may khac trong cung mang LAN:
echo    http://192.168.1.83:8000/index.html   (Wi-Fi)
echo    http://100.105.113.8:8000/index.html  (Tailscale)
echo  Tren may nay:
echo    http://localhost:8000/index.html
echo ==========================================================
echo.
echo Neu may khac khong vao duoc, mo Firewall cho Python
echo hoac chay: netsh advfirewall firewall add rule name="HTTP 8000" dir=in action=allow protocol=TCP localport=8000
echo.
start http://localhost:8000/index.html
python -m http.server 8000 --bind 0.0.0.0
