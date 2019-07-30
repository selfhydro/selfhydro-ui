#!/bin/bash

set -ex

VERSION=$1

cd ./selfhydro-ui

npm i
npm run build

echo $VERSION
tar -zcvf selfhydro-ui-release-$(echo $VERSION).tar.gz build
mv selfhydro-ui-release-* ../selfhydro-ui-build
