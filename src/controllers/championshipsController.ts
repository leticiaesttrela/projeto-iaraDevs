import { prismaClient } from "../database/prisma-client";
import { Request, Response } from "express";


export async function getChampionships(request: Request, response:Response) {
    try {
        const championships = await prismaClient.championships.findMany();
        response.status(200).json(championships);
    } catch (err) {
        return response.status(500).send({err});
    }
}

export const getChampionship = async (request: Request, response:Response) => {
    try {
        let idParams = request.params.id;
        const championships = await prismaClient.championships.findUnique({
            where: { id:idParams },
          })
        response.status(200).json(championships);
    } catch (err) {
        return response.status(500).send({err});
    }
}

export const createChampionship = async (request: Request, response:Response) => {
    try {
        const { nome, dataInicio, dataFim } = request.body;

        const championships = await prismaClient.championships.create({
            data: {
                nome,
                dataInicio,
                dataFim,
            },
        });

        return response.status(201).json(championships);
    }
    catch (err) {
        return response.status(500).send({err});
    }
}

export const updateChampionship = async (request: Request, response:Response) => {
    try {
        const championships = await prismaClient.championships.findUnique({ where: { id: request.params.id } });
        if (!championships) {
            return response.status(404).json({ err: 'Campeonato não encontrado!' });
        }
        const updatedChampionships = await prismaClient.championships.update({
            where: {
                id: request.params.id
            },
            data: request.body
        });
        return response.status(200).json(updatedChampionships)
    } catch (err) {
        return response.status(500).send({err});
    }
}

export const deleteChampionship = async (request: Request, response:Response) => {
    try {
        const championships = await prismaClient.championships.findUnique({ where: { id: request.params.id } });
        if (!championships) {
            return response.status(404).json({ err: 'Campeonato não excluido!' });
        }

        const deletedChampionships = await prismaClient.championships.delete({
            where: {
                id: request.params.id
            }
        })
        return response.status(200).json(deletedChampionships);

    } catch (err) {
        return response.status(500).json({err});
    }
}
