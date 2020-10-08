#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# create a copy of index.html
cp index.html 404.html
find . -name ".DS_Store" -delete
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:opejovic/breezy.git master:gh-pages
cd -