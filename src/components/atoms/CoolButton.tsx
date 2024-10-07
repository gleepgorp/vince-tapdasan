import { ReactNode } from "react"

type ButtonVariant = 'primary' | 'noBg';
const variantClasses: Record<ButtonVariant, string> = {
  primary: '',
  noBg: ''
}

type ButtonTypes = {
  children: ReactNode;
  variant?: ButtonVariant;
}

export default function CoolButton(props: ButtonTypes): JSX.Element {
  const { children, variant = 'primary' } = props;
  const classes = `
    py-3 px-3.5 rounded-lg
    cursor-pointer 
    font-bold font-mono
    border-2 border-sky-500
    relative group active:scale-95
    ${variantClasses[variant]}
  `

  return (
    <button className={classes}>
      <div className="absolute left-0 top-0 w-0 h-full group-hover:w-full group-hover:bg-sky-500 ease-out duration-300"></div>
      <div className="relative z-10 text-stone-300">
        {children}
      </div>
    </button>
  )
}