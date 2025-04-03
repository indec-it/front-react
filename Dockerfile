FROM node:22

WORKDIR /app/

COPY dist/ /app/.

RUN npm init -y && npm i express node-fetch morgan

EXPOSE 8080

CMD ["node", "server.js"]
