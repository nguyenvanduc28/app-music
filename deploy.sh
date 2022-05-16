#!/usr/bin/env sh

npm run build
git branch review-page

cd dist

git init
git add .
git commit -m "New Deployment"
git push -f git@github.com:ducduc222/app-music.git master:review-page

cd ..
git add .
git commit -m "change Code"
git push origin master