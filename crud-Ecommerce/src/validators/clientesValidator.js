const yup = require('yup');

const schema = yup.object().shape({
    nome: yup.string().required("nome é obrigatório"),
    email: yup.string().email("email inválido").required("email é obrigatório"),
    senha: yup.string().min(6, "senha deve ter ao menos 6 caracteres").required("senha é obrigatória"),
    cpf: yup.string().length(11, "cpf deve ter 11 dígitos").required("cpf é obrigatório"),
    telefone: yup.string().required("telefone é obrigatório"),
    endereco: yup.string().required("endereco é obrigatório")
});

async function validarCliente(req, res, next) {
    try {
        await schema.validate(req.body, { abortEarly: false });
        next();
} 
    catch(error) {
        return res.status(400).json({ erros: error.errors });
}
}

module.exports = { validarCliente };


