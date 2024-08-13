type Size = {
  imperial: string;
  metric: string;
};

export interface Cat {
  id: string;
  name: string;
  cfa_url: string;
  weight: Size;
  vetstreet_url: string;
  vcahospitals_url: string;
  wikipedia_url: string;
  temperament: string;
  origin: 'string';
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  alt_names: string;
  indoor: number;
  lap: number;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  cat_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  hypoallergenic: number;
  reference_image_id: string;
}

export interface Dog {
  id: number;
  weight: Size;
  height: Size;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  reference_image_id: string;
}

export interface Breed {
  id: string;
  name: string;
  imageUrl: string;
  breedId: string;
  petType: string;
}

export type PetType = 'dog' | 'cat';

export type Pet<T> = {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds: T[];
};

export type TableData = Omit<
  Cat,
  | 'id'
  | 'name'
  | 'cfa_url'
  | 'vetstreet_url'
  | 'vcahospitals_url'
  | 'wikipedia_url'
  | 'temperament'
  | 'origin'
  | 'country_codes'
  | 'country_code'
  | 'description'
  | 'life_span'
  | 'alt_names'
  | 'reference_image_id'
  | 'weight'
>;
