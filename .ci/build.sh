#!/bin/bash

set -ex

VERSION=$(cat version/version)
cd ./selfhydro-ui

npm i
npm run build

tar -zcvf selfhydro-ui-release-$VERSION.tar.gz build
mv selfhydro-ui-release-* ../selfhydro-ui-build
