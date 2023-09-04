import { prismaClient } from "../database/prisma-client-js.js";


export async function getChampionships(request, response) {
    try {
        const championships = await prismaClient.championships.findMany();
        response.status(200).json(championships);
    } catch (e) {
        return response.status(500).send(e.message);
    }
}

export const getChampionships = async (request, response) => {
    try {
        let idParams = request.params.id;
        const championships = await prismaClient.championships.findUnique({
            where: { id:idParams },
          })
        response.status(200).json(championships);
    } catch (e) {
        return response.status(500).send(e.message);
    }
}

export const createChampionships = async (request, response) => {
    try {
        const { nome, data_inicio, data_fim } = request.body;

        const championships = await prismaClient.championships.create({
            data: {
                nome,
                data_inicio,
                data_fim,
            },
        });

        return response.status(201).json(championships);
    }
    catch (e) {
        return response.status(500).send(e.message);
    }
}

export const updateChampionships = async (request, response) => {
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
    } catch (e) {
        return response.status(500).send(e.message);
    }
}

export const deleteChampionships = async (request, response) => {
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

    } catch (e) {
        return response.status(500).json(e.message);
    }
}
export default { getChampionships, createChampionships, updateChampionships, deleteChampionships };