FROM postgres:alpine
RUN apk add --update-cache \
  curl \
  nodejs
RUN curl https://cli-assets.heroku.com/install.sh | sh

FROM node:lts-alpine as app
ARG NODE_ENV=production
ARG REACT_APP_TITLE
ARG REACT_APP_SUBTITLE