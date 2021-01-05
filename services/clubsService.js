
import Clubs from '../models/clubsSchema';

export const findAll = async (findAllDto) => {
  try {
    const users = await Clubs.find(findAllDto);

    return users;
  } catch (error) {
    console.log('error while get all clubs');
    Promise.reject(error);
  }
}

export const createOne = async (createParams) => {
  try {
    const isCreated = await Clubs.create(createParams);

    return isCreated;
  } catch (error) {
    console.log('error while create clubs ', error);
    Promise.reject(error);
  }
}

export const findOne = async (_id) => {
  try {
    const club = await Clubs.findOne({ _id });

    if (!club) {
      return Promise.reject({
        code: 404,
        message: 'Club not found',
      });
    }

    return club;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateOne = async (updateClubDto) => {
  try {
    const { _id } = updateClubDto;
    const club = await Clubs.findOne({ _id });

    if (!club) {
      return Promise.reject({
        code: 404,
        message: 'Club not found',
      });
    }

    const payloads = Object.assign(club, updateClubDto);
    await Clubs.updateOne({ _id }, payloads);
    return true;
  } catch (error) {
    console.log('error: ', error);
    return Promise.reject(error);
  }
};
