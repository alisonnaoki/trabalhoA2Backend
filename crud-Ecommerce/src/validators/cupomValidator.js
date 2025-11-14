const yup = require('yup');

const schema = yup.object().shape({
    codigo: yup.string().required("codigo é obrigatório"),
    desconto: yup.number().min(0, "desconto mínimo é 0").max(100, "desconto máximo é 100").required("desconto é obrigatório"),
    validade: yup.date().min(new Date(), "validade deve ser futura").required("validade é obrigatória"),
    clienteId: yup.string().length(24).notRequired()
});

async function validarCupom(req, res, next) {
    try {
await schema.validate(req.body, { abortEarly: false });
next();
    } catch(error) {
return res.status(400).json({ erros: error.errors });
}
}

module.exports = { validarCupom };


