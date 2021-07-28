import { FC } from 'react';

import './styles.scss';

export const GlobalStyles: FC = ({ children }) => {
  return <div id="global">{children}</div>;
};
