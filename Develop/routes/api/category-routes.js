const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  }).then((categoryData) => {
    res.status(200).json(categoryData)
  })
    .catch((err) => {
      res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: { id: req.params.id },
    include: [Product]
  }).then((categoryId) => {
    res.status(200).json(categoryId);
  })
    .catch((err) => {
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((newCategory) => {
      res.status(200).json(newCategory);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
});


router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    req.body,
    {
      where: {
        id: req.params.id,
      }
    }).then((categoryData) => {
      res.status(200).json(categoryData);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
});

router.delete('/:id',  (req, res) => {
  // delete a category by its `id` value
Category.destroy(
      { where: { id: req.params.id }}
    ) .then((deleteCategory) => {
      res.status(200).json(deleteCategory)
    })
  .catch((err) => {
    res.status(500).json(err);
  })
});

module.exports = router;
