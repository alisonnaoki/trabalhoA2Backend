const yup = require('yup');

const schema = yup.object().shape({
    pedidoId: yup.string().length(24, "pedidoId inválido").required("pedidoId é obrigatório"),
    transportadora: yup.string().required("transportadora é obrigatória"),
    rastreamento: yup.string().notRequired(),
    status: yup.string().oneOf(['preparando', 'enviado', 'em_transito', 'entregue'], "status inválido").default('preparando')
});

async function validarLogistica(req, res, next) {
    try {
        await schema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        return res.status(400).json({ erros: error.errors });
    }
}

module.exports = { validarLogistica };

