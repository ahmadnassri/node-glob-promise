#!/usr/bin/make

# ----------------------------------------------- #
# Note: this file originates in template-node-lib #
# ----------------------------------------------- #

NPMRC := $(shell npm config get userconfig)

# Docker

pull: ## pull latest containers
	@docker compose pull

readme: ## generate root README.md
	@docker compose run --rm readme

lint: ## run super-linter
	@docker compose run --rm lint

install: ## install all dependencies
	@docker compose run --rm app install

test: ## run all npm tests
	@docker compose run --rm app test

shell: ## start the container shell
	@docker compose run --rm --entrypoint /bin/sh app

clean: ## delete containers, images, volumes, node_modules
	@docker compose run --rm --entrypoint "rm -rf node_modules" app
	@docker compose rm --stop --force --volumes
	@docker compose down --remove-orphans --volumes --rmi local

# Utility methods
## Help: https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html

help: ## display this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help
.PHONY: help all clean test
