const yup = require('yup');

const schema = yup.object().shape({
<<<<<<< HEAD
    clienteId: yup.string().length(24, "clienteId inválido").required("clienteId é obrigatório"),
    itens: yup.array().of(
    yup.object().shape({
    produtoId: yup.string().length(24, "produtoId inválido").required(),
    quantidade: yup.number().min(1, "quantidade mínima é 1").required()
=======
clienteId: yup.string().length(24, "clienteId inválido").required("clienteId é obrigatório"),
    itens: yup.array().of(
yup.object().shape({
produtoId: yup.string().length(24, "produtoId inválido").required(),
quantidade: yup.number().min(1, "quantidade mínima é 1").required()
>>>>>>> ff9f3f5f41589072a4521761d0054236bcf5a5c8
})
).min(1, "Deve conter ao menos um item").required("itens são obrigatórios")
});

async function validarCarrinho(req, res, next) {
try {
    await schema.validate(req.body, { abortEarly: false });
    next();
} catch (error) {
    return res.status(400).json({ erros: error.errors });
}
}

module.exports = { validarCarrinho };

