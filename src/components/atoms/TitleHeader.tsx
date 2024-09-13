import React from 'react'

type TitleHeaderProps = {
  content: string;
}

export default function TitleHeader(props: TitleHeaderProps) {
  const { content } = props;

  return (
    <span className="text-xl font-semibold font-mono xl:text-3xl">{content}</span>
  )
}

