
import Seasons from '../models/seasonSchema';

export const findAll = async (findAllDto) => {
  try {
    const seasons = await Seasons.find(findAllDto);

    return seasons;
  } catch (error) {
    Promise.reject(error);
  }
};
