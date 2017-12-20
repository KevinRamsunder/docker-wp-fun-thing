# Installation

0. Install docker and start it

1. Run `docker-compose up -d` to start the containers in the background

2. To see the logs for the container, run:

  - `docker-compose logs app` to see the node app's logs

  - `docker-compose logs wordpress` to see wordpress' logs

3. Go to localhost:8080 for wordpress, go to localhost:3000 for the node/react app

WordPress Auth: root/root

read more https://visible.vc/engineering/docker-environment-for-wordpress/
