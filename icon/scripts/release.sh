#!/usr/bin/env bash

set -e

version=$(npm version minor)
npm run build
git add ./package.json ./package-lock.json
git commit -m "Build(icon): @banhmi/icon $version"
cd dist/
npm publish
