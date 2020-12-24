#!/usr/bin/env bash

set -e

echo "1/5 Clearing previous build..."
rm -rf ./dist

echo "2/5 Generating indexes..."
node ./scripts/make-index.mjs

echo "3/5 Bundling svgs..."
rollup --config --silent

echo "4/5 Generating declarations..."
tsc --project ./tsconfig.d.json

echo "5/5 Copy assets..."
# Manually copy the package.json because our Rollup config only build
# individual projects
cp ./package.json ./dist/
