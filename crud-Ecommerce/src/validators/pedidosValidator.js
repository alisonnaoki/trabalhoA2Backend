const yup = require('yup');

const schema = yup.object().shape({
    clienteId: yup.string().length(24, "clienteId inválido").required("clienteId é obrigatório"),
    itens: yup.array().of(
        yup.object().shape({
            produtoId: yup.string().length(24).required(),
            quantidade: yup.number().min(1).required(),
            precoUnitario: yup.number().min(0).required()
        })
    ).min(1, "deve conter pelo menos um item").required("itens são obrigatórios"),
    total: yup.number().min(0, "total deve ser positivo").required("total é obrigatório"),
    status: yup.string().oneOf(['pendente', 'pago', 'enviado', 'entregue'], "status inválido").required("status é obrigatório")
});

async function validarPedido(req, res, next) {
    try {
        await schema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        return res.status(400).json({ erros: error.errors });
    }
}

module.exports = { validarPedido };