const express = require('express');
const router = express.Router();
const Tree = require('../models/Tree');

router.get('/', (req, res) => {
    Tree.find().then(trees => {
        res.json(trees);
    }).catch(error => {
        res.send({errorMessage: error});
    });
});

router.get('/:id', (req, res) => {
    Tree.findById(req.params.id).then((tree) => {
        res.json(tree);
    }).catch(error => {
        res.send({errorMessage: error});
    });
});

router.post('/', (req, res) => {
    const tree = new Tree({
        descricao_local: req.body.descricao_local,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        dataHora: req.body.dataHora || Date.now(),
        nome: req.body.nome,
        nome_cientifico: req.body.nome_cientifico,
        nome_popular: req.body.nome_popular,
        nativa: req.body.nativa || false,
        foto_url: req.body.foto_url
    });

    tree.save()
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        res.send({errorMessage: error}).status(400);
    })
});

router.delete('/:id', (req, res) => {
    Tree.findByIdAndDelete(req.params.id).then((trees) => {
        res.json(trees);
    }).catch(error => {
        res.send({errorMessage: error});
    });
});



router.patch('/:id', async (req, res) => {
    Tree.updateOne({_id: req.params.id}, req.body).then((updatedTree) => {
        res.json({updatedTree, req: req.body});
    }).catch(error => {
        res.send({errorMessage: error});
    });
});

module.exports = router;