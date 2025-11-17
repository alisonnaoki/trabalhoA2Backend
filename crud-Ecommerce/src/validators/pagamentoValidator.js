const yup = require('yup');

const schema = yup.object().shape({
    pedidoId: yup.string().length(24, "pedidoId inválido").required("pedidoId é obrigatório"),
    metodo: yup.string().oneOf(['cartao', 'pix', 'boleto'], "metodo inválido").required("metodo é obrigatório"),
    valor: yup.number().min(0, "valor deve ser positivo").required("valor é obrigatório"),
    status: yup.string().oneOf(['pendente', 'concluido', 'falhou'], "status inválido").default('pendente')
});

async function validarPagamento(req, res, next) {
    try {
        await schema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        return res.status(400).json({ erros: error.errors });
    }
}

module.exports = { validarPagamento };

