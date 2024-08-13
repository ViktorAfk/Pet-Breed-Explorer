import { Breed, TableData } from '@/types/type';

export const shuffle = (array: Breed[]) => {
  return array.sort(() => Math.random() - 0.5);
};

interface TableValues {
  id: string;
  title: string;
  value: number;
}

export const getValuesForTable = (obj: TableData) => {
  const keysAndValues = Object.entries(obj);
  const tableValues: TableValues[] = [];

  keysAndValues.forEach(([key, value]) => {
    tableValues.push({
      id: crypto.randomUUID(),
      title: key.replaceAll('_', ' '),
      value,
    });
  });

  return tableValues;
};
