FROM node:16.3.0-buster-slim

COPY ./ /frontend
WORKDIR /frontend

RUN apt update \
 && apt install -y python3 make g++ \
 && rm -rf /var/lib/apt/lists/* \
 && useradd -m zti --user-group \
 && chown -R zti:zti /frontend

USER zti

RUN yarn install \
 && yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
