FROM ghcr.io/foundry-rs/foundry:latest

RUN apk add --update git musl-dev gmp-dev g++ gcc curl curl-dev npm
RUN npm install --global pnpm