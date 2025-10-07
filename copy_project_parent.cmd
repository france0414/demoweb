@echo off

rem 腳本：將 demoweb 專案的必要檔案複製到同層的 demoweb-2

echo 正在創建目標資料夾 ..\demoweb-2...
mkdir "..\demoweb-2"

echo 正在複製專案檔案到 ..\demoweb-2...
robocopy . "..\demoweb-2" /E /XD node_modules .next .git /XF *.lock *.log *.tmp /NFL /NDL /NJH /NJS

echo ----------------------------------------
echo ✅ 複製完成！
echo 專案檔案已成功複製到 ..\demoweb-2 資料夾。
echo ❌ 未複製的資料夾：'node_modules', '.next', '.git'
echo ----------------------------------------
