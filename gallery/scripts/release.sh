#!/usr/bin/env bash

set -e

version=$(npm version $1)
yarn run build
git add ./package.json ./package-lock.json
git commit -m "Build(gallery): @moai/gallery $version"
cd dist/
yarn publish --access public
