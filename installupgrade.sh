# Build to update images
docker-compose -f docker-compose-3party.yml build

# Startup the apps
docker-compose -f docker-compose-3party.yml up


