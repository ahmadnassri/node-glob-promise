#!/usr/bin/make

# ----------------------------------------------- #
# Note: this file originates in template-node-lib #
# ----------------------------------------------- #

NPMRC := $(shell npm config get userconfig)

# Docker

pull: ## pull latest containers
	@docker compose pull

readme: ## pull latest containers
	@docker compose run --rm readme

lint: ## run super-linter
	@docker compose run --rm lint

install: ## install all dependencies
	@docker compose run --rm -e NPM_TOKEN=$(NPM_TOKEN) -e GITHUB_TOKEN=$(GITHUB_TOKEN) -v $(NPMRC):/root/.npmrc app install

test: ## run all npm tests
	@docker compose --profile test up

coverage: ## run all npm tests with coverage
	@docker compose run --rm test-coverage

shell: ## start the container shell
	@docker compose run --rm --entrypoint /bin/sh app

clean: ## remove running containers, volumes, node_modules & anything else
	@docker compose rm --force -v
	@docker compose --profile test down
	@rm -rf node_modules coverage .nyc_output

# Utility methods
## Help: https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html

help: ## display this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help
.PHONY: help all clean test coverage
