import { Title } from '@/components/common/Title';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={'h-dvh flex justify-center items-center'}>
      <div>
        <div className={'flex justify-center'}>
          <Image
            src={'/not-found.png'}
            width={400}
            height={400}
            alt={'picture of donkey and cat from Shrek cartoon '}
          />
        </div>
        <Title
          tag={'h2'}
          text={'Not Found'}
          classes={
            'text-primary uppercase font-bold text-4xl mb-4 text-center font-bebas'
          }
        />
        <p
          className={
            'text-center font-bebas text-2xl uppercase text-line font-bold tracking-[1.28px] mb-4'
          }
        >
          {'Could not find requested resource'}
        </p>
        <div className={' flex justify-center'}>
          <Link
            className={
              'w-48 flex items-center text-xl rounded-md font-bold text-white justify-center h-12 uppercase font-bebas bg-secondary'
            }
            href={'/'}
          >
            {'Return Home'}
          </Link>
        </div>
      </div>
    </div>
  );
}
