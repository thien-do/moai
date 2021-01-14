#!/usr/bin/env bash

set -e

# Commit new version
version=$(npm version $1)
git add ./package.json ./package-lock.json
git commit -m "Build(icon): @moai/icon $version"

# Actually publish (this must run after creating new version)
yarn run build
cd dist/
npm publish --access public
