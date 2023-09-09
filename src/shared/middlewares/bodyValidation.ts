import { RequestHandler } from 'express';
import * as yup from 'yup';


type TBodyValidator = (schema: yup.Schema<any>) => RequestHandler;

export const bodyValidator: TBodyValidator =  (schema) => async (req, res, next) => {
    try{
        await schema.validate(req.body, {abortEarly: false});
        next();
    } catch (err) {
        const yupError = err as yup.ValidationError;
        const validationErrors: Record<string, string> = {};

        yupError.inner.forEach(error => { 
            if(error.path === undefined) return; 
            validationErrors[error.path] = error.message;

        })
        return res.status(404).json({
            errors: validationErrors,
        });
    }
}