const yup = require('yup');

const schema = yup.object().shape({
    nome: yup.string().required("nome é obrigatório"),
    descricao: yup.string().notRequired()
});

async function validarCategoria(req, res, next) {
    try {
        await schema.validate(req.body, { abortEarly: false });
        next();
} 
    catch (error) {
        return res.status(400).json({ erros: error.errors });
}
}

module.exports = { validarCategoria };