
const Championships = {
    id: {
        type: 'string',
        allowNull: false,
    },
    nome: {
      type: 'string',
      allowNull: false,
    },
    dataInicio: {
      type: 'datetime',
      allowNull: false,
    },
    dataFim: {
      type: 'datatime',
      allowNull: false,
    },
  };
  
  export default Championships;