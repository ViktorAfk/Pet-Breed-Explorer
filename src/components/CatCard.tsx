import { getBreedImages } from '@/api/api';
import { Cat } from '@/types/type';
import Image from 'next/image';
import React from 'react';
import { CatTableInfo } from './CatTableInfo';
import { BreedItem } from './common/BreedItem';
import { BreedLinkItem } from './common/BreedLinkItem';
import { Description } from './common/Description';
import { Dimensions } from './common/Dimensions';
import { ImagesCatalog } from './common/ImagesCatalog';
import { Title } from './common/Title';

type Props = {
  pet: Cat;
  imageUrl: string;
};

export async function CatCard({ pet, imageUrl }: Props) {
  const {
    id,
    name,
    weight,
    cfa_url,
    vetstreet_url,
    vcahospitals_url,
    wikipedia_url,
    temperament,
    origin,
    country_code,
    country_codes,
    description,
    life_span,
    alt_names,
    reference_image_id,
    ...info
  } = pet;

  const breedImages = await getBreedImages(pet.id, 'cat');

  return (
    <article>
      <Title
        tag={'h2'}
        text={name}
        classes={
          'text-primary uppercase font-bold text-3xl mb-8 text-center font-[bebus]'
        }
      />
      <div className={'lg:flex'}>
        <div className={'relative flex-1 mb-4'}>
          <div className={'relative w-full h-[400px] mb-4'}>
            <Image
              objectFit={'contain'}
              className={'rounded-md'}
              src={imageUrl}
              fill={true}
              alt={`photo of the cat ${name}`}
              quality={50}
            />
          </div>
          <Description description={pet.description} />
          <ImagesCatalog name={name} images={breedImages} />
        </div>
        <div className={'flex-1 px-4 pb-4'}>
          <BreedItem breedInfo={pet.id} breedParam={'id'} />
          <BreedItem breedParam={'temperament'} breedInfo={temperament} />
          <Dimensions
            paramKey={'weight'}
            metric={weight.metric}
            imperial={weight.imperial}
          />
          <BreedItem breedParam={'origin'} breedInfo={origin} />
          <BreedItem breedParam={'country codes'} breedInfo={country_codes} />
          <BreedItem breedParam={'country code'} breedInfo={country_code} />
          <BreedItem breedParam={'life span'} breedInfo={life_span} />
          <BreedLinkItem breedParam={'cfa url'} link={cfa_url} />
          <BreedLinkItem breedParam={'vet street url'} link={vetstreet_url} />
          <BreedLinkItem
            breedParam={'v-cahospitals url'}
            link={pet.vcahospitals_url}
          />
          <BreedLinkItem
            breedParam={'wikipedia url'}
            link={pet.wikipedia_url}
          />
          <CatTableInfo tableInfo={info} />
        </div>
      </div>
    </article>
  );
}
