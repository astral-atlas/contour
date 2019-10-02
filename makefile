dist: dist/contour.cjs.js dist/contour.esm.js
PHONY: dist

node_modules/.bin/rollup:
	npm i

dist/contour.cjs.js dist/contour.esm.js: $(shell find src -name "*.js") rollup.config.js node_modules/.bin/rollup
	node_modules/.bin/rollup -c