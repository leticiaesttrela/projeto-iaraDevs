import { prismaClient } from "../database/prisma-client";
import { Request, Response } from "express";

export async function getPlayers(request: Request, response: Response) {
    try {
        const players = await prismaClient.players.findMany();
        response.status(200).json(players);
    } catch (err) {
        return response.status(500).send({err});
    }
}

export const getPlayer = async (request:Request, response:Response) => {
    try {
        let idParams = request.params.id;
        const player = await prismaClient.players.findUnique({
            where: { id:idParams },
          })
        response.status(200).json(player);
    } catch (err) {
        return response.status(500).send({err});
    }
}

export const createPlayer = async (request: Request, response: Response) => {
    try {
        const { nome, idade, timeId, position} = request.body;

        const player = await prismaClient.players.create({
            data: {
                nome,
                idade,
                timeId,
            },
        });

        return response.status(201).json(player);
    }
    catch (err) {
        return response.status(500).send({err});
    }
}

export const updatePlayer = async (request:Request, response:Response) => {
    try {
        const player = await prismaClient.players.findUnique({ where: { id: request.params.id } });
        if (!player) {
            return response.status(404).json({ err: 'Jogador não encontrado!' });
        }
        const updatedPlayer = await prismaClient.players.update({
            where: {
                id: request.params.id
            },
            data: request.body
        });
        return response.status(200).json(updatedPlayer)
    } catch (err) {
        return response.status(500).send({err});
    }
}

export const deletePlayer = async (request:Request, response:Response) => {
    try {
        const player = await prismaClient.players.findUnique({ where: { id: request.params.id } });
        if (!player) {
            return response.status(404).json({ err: 'Jogador não excluido!' });
        }

        const deletedPlayer = await prismaClient.players.delete({
            where: {
                id: request.params.id
            }
        })
        return response.status(200).json(deletedPlayer);

    } catch (err) {
        return response.status(500).json({err});
    }
}
