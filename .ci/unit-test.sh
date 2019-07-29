#!/bin/bash

set -ex

cd ./selfhydro-ui
npm i
npm test --cover
