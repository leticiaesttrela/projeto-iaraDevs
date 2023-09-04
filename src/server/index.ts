import { server} from "./Server";
import { playerRouter } from "./routes/playersRoutes";

server.listen(3333, () => {
    console.log('Servidor rodando na porta 3333');
})

server.use(playerRouter);