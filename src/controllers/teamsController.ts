import { prismaClient } from "../database/prisma-client";
import { Request, Response } from "express";


export const getTeams = async (request: Request, response:Response) => {
    try {
        const teams = await prismaClient.teams.findMany();
        response.status(200).json(teams);
    } catch (err) {
        return response.status(500).send({err});
    }
}

export const getTeam = async (request: Request, response:Response) => {
    try {
        let idParams = request.params.id;
        const team = await prismaClient.teams.findUnique({
            where: { id:idParams },
          })
        response.status(200).json(team);
    } catch (err) {
        return response.status(500).send({err});
    }
}

export const createTeam = async (request: Request, response:Response) => {
    try {
        const { nome, fundacao } = request.body;

        const team = await prismaClient.teams.create({
            data: {
                nome,
                fundacao,
            },
        });

        return response.status(201).json(team);
    }
    catch (err) {
        return response.status(500).send({err});
    }
}

export const updateTeam = async (request: Request, response:Response) => {
    try {
        const team = await prismaClient.teams.findUnique({ where: { id: request.params.id } });
        if (!team) {
            return response.status(404).json({ err: 'Time não encontrado!' });
        }
        const updatedteam = await prismaClient.teams.update({
            where: {
                id: request.params.id
            },
            data: request.body
        });
        return response.status(200).json(updatedteam)
    } catch (err) {
        return response.status(500).send({err});
    }
}

export const deleteTeam = async (request: Request, response:Response) => {
    try {
        const team = await prismaClient.teams.findUnique({ where: { id: request.params.id } });
        if (!team) {
            return response.status(404).json({ err: 'Time não excluido!' });
        }

        const deletedteam = await prismaClient.teams.delete({
            where: {
                id: request.params.id
            }
        })
        return response.status(200).json(deletedteam);

    } catch (err) {
        return response.status(500).json({err});
    }
}