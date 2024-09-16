import React, { ReactNode } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery';

type TitleHeaderLayoutProps = {
  children: ReactNode;
  isAboutMe?: boolean;
}

export default function TitleHeaderLayout(props: TitleHeaderLayoutProps) {
  const { children, isAboutMe } = props;
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <div className={`flex flex-row items-center gap-4 ${!isAboutMe && !isLargeScreen && 'justify-center'}`}>{children}</div>
  )
}

