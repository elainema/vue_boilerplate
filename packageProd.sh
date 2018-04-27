#!/bin/bash
rm -rf vue_app.tar.gz
node  build.js
tar -zcf vue_app.tar.gz output
rm -rf output 