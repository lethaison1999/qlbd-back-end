import express from 'express';
import * as seasonsService from '../services/seasonsService';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const seasons = await seasonsService.findAll({});

    res.json({
      data: seasons,
    });

  } catch (error) {
    return Promise.reject(error);
  }
});

export default router;
