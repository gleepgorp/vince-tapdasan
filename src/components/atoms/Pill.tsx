import React from 'react'

type PillProps = {
  content: string;
}

export default function Pill(props: PillProps) {
  const { content } = props;

  return (
    <div className='p-2 text-xs border-2 border-strong-blu bg-cyan-800 rounded-full'>
      {content}
    </div>
  )
}

