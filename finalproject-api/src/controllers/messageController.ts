import { RequestHandler } from "express";
import { Message } from "../models/message";
import { User } from "../models/user";
import { verifyUser } from "../services/auth";


export const getAllMessages: RequestHandler = async (req, res, next) => {
    let messages = await Message.findAll();
    res.status(200).json(messages);
}

export const createMessage: RequestHandler = async (req, res, next) => {
    let user: User | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }
    
    let newMessage: Message = req.body;
    newMessage.userId = user.userId;
    
    if (newMessage.message) {
        let created = await Message.create(newMessage);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
}

export const updateMessage: RequestHandler = async (req, res, next) => {
    let messageId = req.params.id;
    let newMessage: Message = req.body;
    
    let messageFound = await Message.findByPk(messageId);
    
    if (messageFound && messageFound.id == newMessage.id
        && newMessage.message) {
            await Message.update(newMessage, {
                where: { id: messageId }
            });
            res.status(200).json();
    }
    else {
        res.status(400).json();
    }
}




export const deleteMessage: RequestHandler = async (req, res, next) => {
    let messageId = req.params.id;
    let messageFound = await Message.findByPk(messageId);
    
    if (messageFound) {
        await Message.destroy({
                where: { id: messageId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
}


export const getMessage: RequestHandler = async (req, res, next) => {
    let messageId = req.params.id;
    let messageFound =  await Message.findByPk(messageId);
    
    if (messageFound) {
        res.status(200).json(messageFound);
    }
    else {
        res.status(404).json({});
    }
}