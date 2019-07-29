#!/bin/bash

set -ex

cd ./selfhydro-ui

npm i
npm run build

tar -zcvf selfhydro-ui-release-$(echo $VERSION).tar.gz build
