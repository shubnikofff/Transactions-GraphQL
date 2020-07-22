import server from "./server";

server.listen().then(({ url }) => {
    console.log(`🚀 Server started at ${url}`);
});
