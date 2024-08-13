import { getBreedImages } from '@/api/api';
import { Dog } from '@/types/type';
import Image from 'next/image';
import { BreedItem } from './common/BreedItem';
import { Dimensions } from './common/Dimensions';
import { ImagesCatalog } from './common/ImagesCatalog';
import { Title } from './common/Title';

type Props = {
  dog: Dog;
  imageUrl: string;
};

export async function DogCard({ dog, imageUrl }: Props) {
  const { id, weight, height, name, bred_for, breed_group, life_span } = dog;
  const breedImages = await getBreedImages(String(id), 'dog');

  return (
    <article>
      <Title
        tag={'h3'}
        text={name}
        classes={'mb-4 text-lg uppercase text-center font-bold font-roboto'}
      />
      <div className={'lg:flex'}>
        <div className={'relative flex-1  mb-4'}>
          <div className={'relative w-full h-[400px] mb-4'}>
            <Image
              objectFit={'contain'}
              className={'rounded-md'}
              src={imageUrl}
              fill={true}
              alt={`photo of the dog ${name}`}
              quality={50}
            />
          </div>
        </div>
        <div className={'flex-1 p-4'}>
          <BreedItem breedInfo={String(id)} breedParam={'id'} />
          <BreedItem breedParam={'bred for'} breedInfo={bred_for} />
          <BreedItem breedParam={'bred group'} breedInfo={breed_group} />
          <BreedItem breedParam={'life span'} breedInfo={life_span} />
          <Dimensions
            paramKey={'weight'}
            metric={weight.metric}
            imperial={weight.imperial}
          />
          <Dimensions
            paramKey={'height'}
            metric={height.metric}
            imperial={height.imperial}
          />
        </div>
      </div>
      <ImagesCatalog name={name} isDog={true} images={breedImages} />
    </article>
  );
}
