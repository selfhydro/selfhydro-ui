#!/bin/bash

set -ex

cd ./selfhydro-ui

npm i
npm build

tar -zcvf selfhydro-ui-release-$(echo $VERSION).tar.gz build
