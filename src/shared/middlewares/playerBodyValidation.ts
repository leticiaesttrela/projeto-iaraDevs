import * as yup from 'yup';
import { bodyValidator } from './bodyValidation';

const playerValidationSchema = yup.object().shape({
    nome: yup.string().required().min(3),
    idade: yup.number().required().min(18),
    timeId: yup.string(),
    position: yup.string().required().min(3)
});

export const playerBodyValidator = bodyValidator(playerValidationSchema);