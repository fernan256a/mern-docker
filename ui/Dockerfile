FROM node:20-alpine

RUN mkdir -p /srv/app/ui
WORKDIR /srv/app/ui

COPY package.json /srv/app/ui/

RUN npm install

COPY . /srv/app/ui

CMD ["npm", "dev"]
