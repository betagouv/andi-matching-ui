FROM node:13.1-buster-slim

WORKDIR /
COPY package-lock.json /
COPY package.json /

RUN npm install
RUN npm run build

COPY src /
COPY e2e /
COPY *.json /
COPY *.js /

ENTRYPOINT ["/bin/bash"]
