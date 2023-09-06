import {server} from "../src/server/server"
import { championshipsRouter } from "./routes/championshipsRouter";
import 'dotenv/config'
import { playerRouter } from "./routes/playersRouter";

server.listen(process.env.PORT || 5000, () => {
    console.log('Servidor rodando na porta 3333');
})

server.use(playerRouter);
server.use(championshipsRouter)