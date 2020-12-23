#!/usr/bin/env bash

set -e

if [[ -z "$1" ]]; then
    echo "Missing release version (minor or patch)" 1>&2
    exit 1
fi

version=$(npm version $1)
npm run build
git add ./package.json ./package-lock.json
git commit -m "Build(icon): @moai/icon $version"
cd dist/
npm publish --access public
