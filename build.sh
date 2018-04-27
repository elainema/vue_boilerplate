#!/bin/bash
rm -rf vue_app.tar.gz  vue_app
npm install
node  build.js
tar -zcf vue_app.tar.gz output
