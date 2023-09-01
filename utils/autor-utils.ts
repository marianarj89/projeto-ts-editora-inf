import bcrypt from "bcrypt";
import { request } from "express";

const encryptPassword = async (request: any) => {
    if (request.payload.password) {
        request.payload = {
            ...request.payload,
            password: await bcrypt.hash(request.payload.password, 10),
        }
    }
    return request;
}

export { encryptPassword };