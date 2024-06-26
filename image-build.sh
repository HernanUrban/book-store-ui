#!/bin/bash
VERSION=$(node -p "require('./package.json').version")
NAME=$(node -p "require('./package.json').name")
docker build -t hurban/$NAME:$VERSION .
