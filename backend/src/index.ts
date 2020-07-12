import { server } from "./server/init";

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
