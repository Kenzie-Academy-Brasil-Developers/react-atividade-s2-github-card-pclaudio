import * as yup from 'yup';

const schema = yup.object().shape({
  searchText: yup.string()
    .trim()
    .required('Nome do repositório é obrigatório')
    .matches(/^[a-zA-Z0-9]+[-]*[a-zA-Z0-9]+[/]{1}[a-zA-Z0-9._-]+$/, 'Nome do repositório fora do padrão'),
});

export default schema;