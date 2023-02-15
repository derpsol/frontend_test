import { FC } from 'react';
import './CollapseTextProps.css';

type CollapseTextProps = {
  height: string;
  width: string;
  children?: string;
  moreButton: any;
  lessButton: any;
};

const CollapseText: FC<CollapseTextProps> = (props) => {
  return <div></div>;
};

export default CollapseText;
