const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{ model: Product, through: ProductTag}]
  }).then((tagData) => {
    res.status(200).json(tagData)
  })
    .catch((err) => {
      res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
    // be sure to include its associated Product data
    Tag.findOne({
      where: { id: req.params.id },
      include: [{ model: Product, through: ProductTag }]
    }).then((tagId) => {
      res.status(200).json(tagId);
    })
      .catch((err) => {
        res.status(500).json(err);
      })
  });

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((newTag) => {
    res.status(200).json(newTag);
  })
  .catch((err) => {
    res.status(500).json(err);
  })
});

router.put('/:id',  (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    req.body,
    {
      where: {
        id: req.params.id,
      }
    }).then((tagData) => {
      res.status(200).json(tagData);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(
    { where: { id: req.params.id }}
  ) .then((deleteTag) => {
    res.status(200).json(deleteTag)
  })
.catch((err) => {
  res.status(500).json(err);
})
});

module.exports = router;