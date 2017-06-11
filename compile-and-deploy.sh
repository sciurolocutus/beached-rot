#!/bin/bash
./compile.sh
grep -v 'require(' app.js > js/app.js
#cp app.js js/app.js
