#!/usr/bin/env bash

set -e

echo "1/3 Clearing previous build..."
rm -rf ./dist

echo "2/3 Bundling via Rollup..."
rollup --config --silent

# Moving some files to root for easier import. This cannot be done in Rollup
# since these are output results
cp ./dist/esm/index.css ./dist/
rm ./dist/esm/index.css
rm ./dist/cjs/index.css

echo "3/3 Generating declarations via TypeScript compiler..."
tsc --project ./tsconfig.d.json
