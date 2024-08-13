import { getImage, getPet } from '@/api/api';
import { CatCard } from '@/components/CatCard';
import { DogCard } from '@/components/DogCard';
import { PetType } from '@/types/type';

export default async function Page({
  params,
  searchParams,
}: {
  params: {
    id: string;
  };
  searchParams: {
    type: PetType;
  };
}) {
  const { id } = params;
  const { type } = searchParams;

  const pet = await getPet(type, id);

  const image =
    type === 'cat'
      ? await getImage('cat', pet.reference_image_id)
      : await getImage('dog', pet.reference_image_id);

  return (
    <main>
      {'description' in pet ? (
        <CatCard pet={pet} imageUrl={image.imageUrl} />
      ) : (
        <DogCard imageUrl={image.imageUrl} dog={pet} />
      )}
    </main>
  );
}
