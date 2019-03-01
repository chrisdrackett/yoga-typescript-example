# Server

## Initial Setup

To get the server up and running you'll first need to make sure you have docker installed:

https://www.docker.com

once that is done do the following:

- `yarn`
- `docker-compose up -d`
- `yarn deploy_local`

At this point you'll have a local prisma server and database running and provisined with our datamodel. To run the web app see the main readme `Development` section.

If you just want to run the server you can use the following command for local:

- `yarn local`

or for the dev database:

- `yarn dev`

## Updating the data model

If you've updated the datamodel (`datamodel.prisma`) you'll need to deploy it and generate the related code. To do this run the following command (depending on your env):

- `yarn deploy_local`
- `yarn deploy_dev`

If you've added data you'll probably also need to fill our the resolvers. Stubs can be found after a deploy in `src/resolvers-temp`.
