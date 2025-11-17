const yup = require('yup');

const schema = yup.object().shape({
    nome: yup.string().required("nome é obrigatório"),
    descricao: yup.string().required("descricao é obrigatória"),
    preco: yup.number().min(0, "preco deve ser positivo").required("preco é obrigatório"),
    categoriaId: yup.string().length(24, "categoriaId inválido").required("categoriaId é obrigatório"),
    estoque: yup.number().min(0, "estoque deve ser positivo").required("estoque é obrigatório"),
    imagemUrl: yup.string().url("url inválida").notRequired()
});

async function validarProduto(req, res, next) {
    try {
        await schema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        return res.status(400).json({ erros: error.errors });
    }
}

module.exports = { validarProduto };

