#!/usr/bin/env bash
# Keep mongod in the foreground, otherwise the container will stop
docker-entrypoint.sh mongod
