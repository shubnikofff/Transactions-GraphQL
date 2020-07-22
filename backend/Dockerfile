FROM node as compiler

WORKDIR /opt

COPY ["./src", "./src", "./package.json", "./", "./package-lock.json", "./", "./tsconfig.json", "./", "./webpack.config.js", "./"]

RUN npm ci && npx webpack --config webpack.config.js

EXPOSE 4000

CMD ["node", "build/app.js"]
