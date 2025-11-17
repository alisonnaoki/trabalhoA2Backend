const yup = require('yup');

const schema = yup.object().shape({
<<<<<<< HEAD
    nome: yup.string().required("nome é obrigatório"),
    contato: yup.string().required("contato é obrigatório"),
    cnpj: yup.string().length(14, "cnpj deve ter 14 dígitos").required("cnpj é obrigatório"),
    produtosFornecidos: yup.array().of(yup.string().length(24)).notRequired()
});

async function validarFornecedor(req, res, next) {
    try {
        await schema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        return res.status(400).json({ erros: error.errors });
    }
=======
nome: yup.string().required("nome é obrigatório"),
contato: yup.string().required("contato é obrigatório"),
cnpj: yup.string().length(14, "cnpj deve ter 14 dígitos").required("cnpj é obrigatório"),
produtosFornecidos: yup.array().of(yup.string().length(24)).notRequired()
});

async function validarFornecedor(req, res, next) {
try {
await schema.validate(req.body, { abortEarly: false });
next();
} catch(error) {
return res.status(400).json({ erros: error.errors });
}
>>>>>>> f83f03cd1fdfe0cc34bc99db4853f5fe60027ab4
}

module.exports = { validarFornecedor };


