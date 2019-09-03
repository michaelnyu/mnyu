dev:
	BABEL_ENV=dev npm run build-dev

format:
	npx prettier --write --arrow-parens always --single-quote --trailing-comma all --no-bracket-spacing "src/**/*.js"
