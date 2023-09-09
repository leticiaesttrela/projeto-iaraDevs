import * as yup from 'yup';
import { bodyValidator } from './bodyValidation';


const championshipValidationSchema = yup.object().shape({
    nome: yup.string().required().min(3),
    dataInicio: yup.date().required(),
    dataFim: yup.date().required()
});

export const championshipBodyValidator = bodyValidator(championshipValidationSchema);