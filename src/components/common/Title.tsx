import { FC } from 'react';

type TitleProps = {
  text: string;
  classes?: string;
  tag?: keyof React.JSX.IntrinsicElements;
};

export const Title: FC<TitleProps> = ({
  text,
  classes = '',
  tag: Tag = 'h2',
}) => {
  return <Tag className={classes}>{text}</Tag>;
};
