module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    price: DataTypes.FLOAT,
    publicationDate: DataTypes.DATEONLY
  })
  return Book
}
