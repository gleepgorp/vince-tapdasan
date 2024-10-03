import React from 'react'

type PillProps = {
  content: string;
  mainPage: boolean;
}

export default function Pill(props: PillProps) {
  const { content, mainPage } = props;

  return (
    <div className={`py-2 px-3 ${mainPage && 'md:py-3 md:px-4'} text-[10px] lg:text-[11px] bg-strong-blu/15 font-bold text-sky-400 rounded-full md:text-sm`}>
      {content}
    </div>
  )
}

