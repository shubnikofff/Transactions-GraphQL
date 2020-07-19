FROM node as compiler

WORKDIR /opt

COPY ["./src", "./src", "./public", "./public", "./package.json", "./", "./tsconfig.json", "./", "./yarn.lock", "./"]

RUN yarn install --frozen-lockfile && yarn build

FROM nginx

COPY --from=compiler /opt/build /usr/share/nginx/html
