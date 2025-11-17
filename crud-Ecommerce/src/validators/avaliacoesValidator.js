const yup = require('yup');

const schema = yup.object().shape({
    produtoId: yup.string().length(24, "produtoId inválido").required("produtoId é obrigatório"),
    clienteId: yup.string().length(24, "clienteId inválido").required("clienteId é obrigatório"),
    nota: yup.number().min(1, "nota mínima é 1").max(5, "nota máxima é 5").required("nota é obrigatória"),
    comentario: yup.string().notRequired()
});

async function validarAvaliacao(req, res, next) {
    try {
        await schema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        return res.status(400).json({ erros: error.errors });
    }
}

module.exports = { validarAvaliacao };