import * as yup from 'yup';
import { bodyValidator } from './bodyValidation';


const teamValidationSchema = yup.object().shape({
    nome: yup.string().required().min(3),
    fundacao: yup.string().required().min(3)
});

export const teamBodyValidator = bodyValidator(teamValidationSchema);