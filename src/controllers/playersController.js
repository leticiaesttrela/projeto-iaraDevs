import { prismaClient } from "../database/prisma-client-js.js";


export async function getPlayers(request, response) {
    try {
        const players = await prismaClient.Players.findMany();
        response.status(200).json(players);
    } catch (e) {
        return response.status(500).send(e.message);
    }
}

export const getPlayer = async (request, response) => {
    try {
        let idParams = request.params.id;
        const player = await prismaClient.Players.findUnique({
            where: { id:idParams },
          })
        response.status(200).json(player);
    } catch (e) {
        return response.status(500).send(e.message);
    }
}

export const createPlayer = async (request, response) => {
    try {
        const { nome, idade} = request.body;

        const player = await prismaClient.Players.create({
            data: {
                nome,
                idade
            },
        });

        return response.status(201).json(player);
    }
    catch (e) {
        return response.status(500).send(e.message);
    }
}

export const updatePlayer = async (request, response) => {
    try {
        const player = await prismaClient.Players.findUnique({ where: { id: request.params.id } });
        if (!player) {
            return response.status(404).json({ err: 'Jogador não encontrado!' });
        }
        const updatedPlayer = await prismaClient.Players.update({
            where: {
                id: request.params.id
            },
            data: request.body
        });
        return response.status(200).json(updatedPlayer)
    } catch (e) {
        return response.status(500).send(e.message);
    }
}

export const deletePlayer = async (request, response) => {
    try {
        const player = await prismaClient.Players.findUnique({ where: { id: request.params.id } });
        if (!player) {
            return response.status(404).json({ err: 'Jogador não excluido!' });
        }

        const deletedPlayer = await prismaClient.Players.delete({
            where: {
                id: request.params.id
            }
        })
        return response.status(200).json(deletedPlayer);

    } catch (e) {
        return response.status(500).json(e.message);
    }
}
