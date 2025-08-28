@echo off
echo Initializing Git repository...
git init

echo Adding all files...
git add .

echo Creating initial commit...
git commit -m "Initial commit: Complete Rayo template with Kilitek Next.js conversion"

echo Adding remote origin...
git remote add origin https://github.com/kuccii/rayo.git

echo Setting main branch...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

echo Done!
pause
