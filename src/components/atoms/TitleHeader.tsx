
type TitleHeaderProps = {
  content: string;
}

export default function TitleHeader(props: TitleHeaderProps) {
  const { content } = props;

  return (
    <span className="text-2xl font-bold xl:text-3xl whitespace-nowrap">{content}</span>
  )
}

