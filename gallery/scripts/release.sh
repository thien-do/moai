#!/usr/bin/env bash

set -e

version=$(npm version $1)
npm run build
git add ./package.json ./package-lock.json
git commit -m "Build(gallery): @moai/gallery $version"
cd dist/
npm publish --access public
