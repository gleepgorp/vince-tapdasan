import { ReactNode } from "react"

type ButtonVariant = 'primary' | 'noBg';
const variantClasses: Record<ButtonVariant, string> = {
  primary: '',
  noBg: ''
}

type ButtonTypes = {
  children: ReactNode;
  variant: ButtonVariant;
}

export default function Button(props: ButtonTypes): JSX.Element {
  const { children, variant } = props;
  const classes = `
    ${variantClasses[variant]}
  `

  return (
    <div className={classes}>
      {children}
    </div>
  )
}