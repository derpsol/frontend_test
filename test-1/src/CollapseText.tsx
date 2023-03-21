import { listenerCount } from 'process';
import React, {FC, useState} from 'react';
import './CollapseText.css';

type CollapseTextProps = {
    height: string;
    width: string;
    children?: string;
};

const style = (line: number, width: string) => ({
  display: '-webkit-box',
  overflow: 'hidden',
  "-webkit-line-clamp": `${line}`,
  "-webkit-box-orient": 'vertical',
  width: width,
  backgroundColor: '#F5DEB5',
  // display: ``,
  // -webkit-line-clamp: 5,
  // -webkit-box-orient: vertical;
  // overflow: hidden;

});

const CollapseText: FC<CollapseTextProps> = (
    {
        height,
        width,
        children,
    }
) => {
    const [expanded, setExpanded] = useState(5);

    const handleExpand = () => {
        setExpanded(expanded === 5 ? 21 : 5);
    }

    return <div className='background'>
        <p
            id="text"
            style={style(expanded, width)}>
            {children}
        </p>

        <label htmlFor="expanded" style={{color: 'blue', display: 'inline'}} onClick={handleExpand}>
            {expanded === 21 ? (
                <span>less</span>
            ) : (
                <span>more</span>
            )}
        </label>
    </div>;
};

export default CollapseText;
