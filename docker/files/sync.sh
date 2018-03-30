#!/bin/bash

while true
do
  sleep 1
  rsync -avr \
  --no-perms --no-group --no-owner \
  --exclude 'app/config/parameters.yml' \
  --exclude '.htaccess' \
  /source/ /var/www/html/
done
