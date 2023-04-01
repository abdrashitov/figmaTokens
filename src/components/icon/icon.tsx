import React from 'react';
import sprite from '../../static/images/sprite.svg';

interface Props {
  name: string;
  viewBox: string;
}

const Icon = (props: Props) => {
  return (
    <svg viewBox={props.viewBox}>
      <use
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xlinkHref={sprite + `#${props.name}`}
      />
    </svg>
  );
};

export default Icon;
