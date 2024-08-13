import { Cat, Dog, Pet, PetType } from '@/types/type';
import { shuffle } from './utils';

const DOG_API_KEY = process.env.DOG_API_KEY;
const CAT_API_KEY = process.env.CAT_API_KEY;
const CAT_API_URL = process.env.CAT_API_URL;
const DOG_API_URL = process.env.DOG_API_URL;

const get = async <T>(url: string, apiKey: string): Promise<T> => {
  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);

    throw new Error();
  }
};

export async function getPets() {
  const params = new URLSearchParams({
    limit: '10',
    has_breeds: '1',
    order: 'RAND',
  });
  try {
    const cats = await get<Pet<Cat>[]>(
      `${CAT_API_URL}images/search?${params}`,
      CAT_API_KEY,
    );
    const dogs = await get<Pet<Dog>[]>(
      `${DOG_API_URL}images/search?${params}`,
      DOG_API_KEY,
    );

    const catsWithType = cats.map((cat) => ({
      id: cat.id,
      name: cat.breeds[0].name,
      breedId: cat.breeds[0].id,
      imageUrl: cat.url,
      petType: 'cat',
    }));
    const dogsWithType = dogs.map((dog) => ({
      id: dog.id,
      name: dog.breeds[0].name,
      breedId: dog.breeds[0].id.toString(),
      imageUrl: dog.url,
      petType: 'dog',
    }));

    return shuffle([...catsWithType, dogsWithType].flat());
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw new Error();
  }
}

export const getPet = async (petType: PetType, breedId: string) => {
  try {
    if (petType === 'cat') {
      const response = await get<Cat>(
        `${CAT_API_URL}breeds/${breedId}`,
        CAT_API_KEY,
      );

      return response;
    }

    const response = await get<Dog>(
      `${DOG_API_URL}breeds/${breedId}`,
      DOG_API_KEY,
    );

    return response;
  } catch (error) {
    console.error(`'Ops, something went wrong:${error}`);
    throw new Error();
  }
};

export const getBreedImages = async (breedId: string, petType: PetType) => {
  const reqParams =
    petType === 'cat'
      ? { url: CAT_API_URL, apiKey: CAT_API_KEY }
      : { url: DOG_API_URL, apiKey: DOG_API_KEY };
  const response = await get<Pet<Cat | Dog>[]>(
    `${reqParams.url}images/search?limit=6&breed_ids=${breedId}`,
    reqParams.apiKey,
  );
  const images = response.map(({ id, url }) => ({ id, imageUrl: url }));

  return images;
};

export const getImage = async (petType: PetType, imageId: string) => {
  const reqParams =
    petType === 'cat'
      ? { url: CAT_API_URL, apiKey: CAT_API_KEY }
      : { url: DOG_API_URL, apiKey: DOG_API_KEY };

  const response = await get<Pet<Cat | Dog>>(
    `${reqParams.url}images/${imageId}`,
    reqParams.apiKey,
  );

  return { id: response.id, imageUrl: response.url };
};
