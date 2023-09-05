import { server} from "./server/Server";
import { playerRouter } from "./server/routes/playersRoutes";
import 'dotenv/config'

server.listen(process.env.PORT || 5000, () => {
    console.log('Servidor rodando na porta 3333');
})

server.use(playerRouter);