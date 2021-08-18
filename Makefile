SOURCES = packages

COMMA := ,
EMPTY :=
SPACE := $(EMPTY) $(EMPTY)
COMMA_SEPARATED_SOURCES = $(subst $(SPACE),$(COMMA),$(SOURCES))

YARN := yarn
NODE := $(YARN) node

.PHONY: build clean clean-ts-incremental test-clean test-only test test-ci publish bootstrap

build: clean build-all

test:
	$(YARN) test

clean-ts-incremental:
	rm -f packages/*/tsconfig.tsbuildinfo

clean:
	rm -f .npmrc
	rm -rf coverage
	rm -rf packages/*/npm-debug*
	rm -rf node_modules/.cache
	rm -rf packages/*/dist

build-all:
	$(YARN) tsc -b tsconfig.json

clean-libs:
	$(YARN) workspaces foreach run clean
