import { FC, ReactNode } from 'react';
import { Header } from '../Header';

import './styles.scss';

type GlobalStylesType = {
  children: ReactNode
}

export const GlobalStyles: FC<GlobalStylesType> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
};
