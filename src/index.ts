import { server} from "./server/Server";
import { playerRouter } from "./server/routes/playersRoutes";
import { championshipRouter } from "./server/routes/championships";
import 'dotenv/config'

server.listen(process.env.PORT || 5000, () => {
    console.log('Servidor rodando na porta 3333');
})

server.use(playerRouter);
server.use(championshipRouter);