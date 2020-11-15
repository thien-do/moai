#!/usr/bin/env bash

set -e

version=$(npm version minor)
git commit -m "Build(core): Release $version"
git add ./package.json
git tag -a v$version
npm publish
