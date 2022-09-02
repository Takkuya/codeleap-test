import { ButtonContainer, ButtonVariants } from "./styles"

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: (keyof typeof ButtonVariants)[]
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({
  variant,
  disabled,
  onClick,
  children,
}: ButtonProps) => {
  const classNames = variant.map((name) => ButtonVariants[name])

  return (
    <ButtonContainer>
      <button
        className={[...classNames].join("")}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </ButtonContainer>
  )
}
