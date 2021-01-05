
import Match from '../models/matchsChema';

export const findAll = async (findAllDto) => {
  try {
    const match = await Match.find(findAllDto)
      .populate(['seasonId', 'homeClubId', 'awayClubId']);

    return match;
  } catch (error) {
    Promise.reject(error);
  }
}

export const createOne = async (createOneDto) => {
  try {
    const match = await Match.create(createOneDto);

    return match;
  } catch (error) {
    Promise.reject(error);
  }
}

export const findOne = async (_id) => {
  try {
    const match = await Match.findOne({ _id })
      .populate(['seasonId', 'homeClubId', 'awayClubId']);

    if (!match) {
      return Promise.reject({
        code: 404,
        message: 'Match not found',
      });
    }

    return match;
  } catch (error) {
    Promise.reject(error);
  }
}
