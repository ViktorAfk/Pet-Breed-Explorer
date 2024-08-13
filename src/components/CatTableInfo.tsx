import { getValuesForTable } from '@/api/utils';
import { TableData } from '@/types/type';
import React, { FC } from 'react';

type Props = {
  tableInfo: TableData;
};

export const CatTableInfo: FC<Props> = ({ tableInfo }) => {
  const tableData = getValuesForTable(tableInfo);

  return (
    <div
      className={
        'h-[500px] pt-4 overflow-y-scroll border border-primary border-solid rounded-lg'
      }
    >
      <table className={'table-auto w-full'}>
        <thead className={'mb-2 rounded-lg'}>
          <tr>
            <th className={'text-left px-4 uppercase text-primary font-bebas'}>
              {'Parameter'}
            </th>
            <th className={'text-left uppercase text-primary'}>{'Level'}</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ id, title, value }) => (
            <tr key={id} className={'mb-2'}>
              <td className={'text-left text-line text-lg font-bebas px-4'}>
                {title}
              </td>
              <td
                className={
                  'text-left font-bebas uppercase text-line font-bold tracking-[1.28px]'
                }
              >
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
