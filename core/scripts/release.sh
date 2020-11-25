#!/usr/bin/env bash

set -e

npm run build
version=$(npm version minor)
git add ./package.json ./package-lock.json
git commit -m "Build(core): Release $version"
npm publish
