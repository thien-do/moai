#!/usr/bin/env bash

set -e

npm run build
version=$(npm version minor)
git add ./package.json ./package-lock.json
git commit -m "Build(icon): Release $version"
npm publish
