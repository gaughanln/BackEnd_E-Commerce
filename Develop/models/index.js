// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: // ???
});

// Categories have many Products
Category.hasMany(Product, {
//what goes here?
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: category_id, //can't find this
  through:{
    model:ProductTag,
    unique: true,
  },
  as: 'table_name' //rename this
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: category_id,
  through:{
    model:ProductTag, //is  this right?
    unique: true,
  },
  as: 'product_tags' //rename this
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
