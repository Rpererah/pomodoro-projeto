import styled, { css } from 'styled-components'

export type ButtonVariantColor = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariantColor
}

const buttonVariant = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 8px;
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['green-500']};
  /* ${(props) => {
    return css`
      background-color: ${buttonVariant[props.variant]};
    `
  }} */
`
