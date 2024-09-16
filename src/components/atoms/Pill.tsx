import React from 'react'

type PillProps = {
  content: string;
}

export default function Pill(props: PillProps) {
  const { content } = props;

  return (
    <div className='py-2 px-3 text-xs bg-strong-blu/15 font-bold text-sky-400 rounded-full'>
      {content}
    </div>
  )
}

