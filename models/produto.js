module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false
      },
      preco: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      dataCriacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
  
    return Produto;
  };
  