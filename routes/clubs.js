import express from 'express';
import * as clubsService from '../services/clubsService';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const clubs = await clubsService.findAll({})

    res.json({
      data: clubs,
    });

  } catch (error) {
    return Promise.reject(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const clubsParams = req.body;

    const isCreated = await clubsService.createOne(clubsParams);

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
    const club = await clubsService.findOne(_id);

    res.json({
      data: club,
    });

  } catch (error) {
    res.status(error.code).json({
      code: error.code,
      message: error.message,
    })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const updateClubDto = req.body;

    const isUpdated = await clubsService.updateOne({ _id, ...updateClubDto });

    res.json({
      data: isUpdated,
    });

  } catch (error) {
    res.status(error.code).json({
      code: error.code,
      message: error.message,
    })
  }
});

export default router;
