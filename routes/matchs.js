import express from 'express';
import * as matchsService from '../services/matchsService';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const match = await matchsService.findAll({});

    res.json({
      data: match,
    });

  } catch (error) {
    return Promise.reject(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const createMathDto = req.body;

    const isCreated = await matchsService.createOne(createMathDto);

    res.json({
      data: isCreated,
    });

  } catch (error) {
    return Promise.reject(error);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const _id = req.params.id || '';
    const match = await matchsService.findOne(_id);

    res.json({
      data: match,
    });

  } catch (error) {
    return Promise.reject(error);
  }
});
export default router;
