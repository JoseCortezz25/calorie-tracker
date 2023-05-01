import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type ButtonProps = {
  variant: 'primary' | 'secondary',
  text: string
}

type ButtonNative = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type Props = ButtonProps & ButtonNative

const Button = ({variant, text, ...props}: Props): JSX.Element => {
  const styles = variant === 'primary'
    ? `px-4 py-[9px] text-sm border bg-black border-black rounded-lg text-white uppercase font-bold hover:bg-white hover:text-black transition-all ease-out` 
    : `px-4 py-[9px] text-sm border bg-white border-white rounded-lg text-black uppercase font-bold hover:bg-black hover:text-white transition-all ease-out`;

  return (
    <button 
      className={styles}
      {...props}>
        {text}
    </button>
  )
}

export { Button }