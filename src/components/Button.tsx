import { ButtonContainer, ButtonVariantColor } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariantColor
}
export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Butao</ButtonContainer>
}
