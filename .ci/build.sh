#!/bin/bash

set -ex

cd ./selfhydro-ui

npm i
npm build

tar -zcvf selfhydro-ui-release-$($VERSION).tar.gz build
