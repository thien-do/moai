#!/usr/bin/env bash

set -e

echo "1/4 Clearing previous build..."
rm -rf ./dist

echo "2/4 Generating indexes..."
node ./scripts/make-index.mjs

echo "3/4 Bundling svgs..."
rollup --config --silent

echo "4/4 Copy assets..."
# Manually copy the package.json because our Rollup config only build
# individual projects
cp ./package.json ./dist/
