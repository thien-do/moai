#!/usr/bin/env bash

set -e

version=$(npm version minor)
npm run build
git add ./package.json ./package-lock.json
git commit -m "Build(core): @moai/core $version"
cd dist/
npm publish --access public
