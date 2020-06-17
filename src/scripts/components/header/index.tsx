import React from 'react';

import './index.less';

interface iHeaderProps {
  text: string;
}
const Header = (props: iHeaderProps) => {
  const { text } = props;
  return <div className="header">{text}</div>;
};
export default Header;
