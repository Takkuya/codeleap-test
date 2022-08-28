import { ButtonContainer, ButtonVariants } from "./styles"

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: (keyof typeof ButtonVariants)[]
}

export const Button = ({ variant, children }: ButtonProps) => {
  const classNames = variant.map((name) => ButtonVariants[name])

  return (
    <ButtonContainer>
      <button className={[...classNames].join("")} disabled={true}>
        {children}
      </button>
    </ButtonContainer>
  )
}
