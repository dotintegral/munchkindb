#!/bin/bash

echo "Creating DB"
docker exec mdb-server php app/console doctrine:database:create
docker exec mdb-server php app/console doctrine:schema:update --force

echo "Importing cards data"
git clone -b munchkin-conversion git@github.com:CallidusAsinus/munchkin-cards-json.git ../cards-json
wait 5 #make sure that the data was synced
docker exec mdb-server php app/console nrdb:import:std ./cards-json
