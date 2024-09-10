// import classNames from 'classnames'
// import { createElement, HTMLAttributes, PropsWithChildren } from 'react'


// interface TypographyProps
//     extends Omit<HTMLAttributes<HTMLParagraphElement>, 'content'> {
//     level?: 1 | 2 | 3 | 4 | 5 | 6
//     content?: string
//     font?: 'Bodoni' | 'Inter'
//     color?: 'Gray' | 'Default' | 'White' | 'Primary' | 'Inherit' | 'none'
//     size?: 'Default' | 'Heading' | 'Subheading' | 'Subtext' | 'Label' | 'Small'
// }

// const Typography = ({
//     level,
//     content,
//     children,
//     size,
//     color,
//     font = 'Inter',
//     ...props
// }: PropsWithChildren<TypographyProps>) => {
//     return createElement(
//         level ? `h${level}` : 'p',
//         {
//             ...props,
//             className: classNames(
//                 styles.text,
//                 color !== 'none' && [
//                     styles.textColorDefault,
//                     styles[`textColor${color}`],
//                 ],
//                 styles[`textFont${font}`],
//                 typeof size === 'string' && { [styles[`textSize${size}`]]: size },
//                 props.className
//             ),
//         },
//         content || children
//     )
// }

// export const Text = Typography
import classNames from 'classnames'
import { createElement, HTMLAttributes, PropsWithChildren } from 'react'

interface TypographyProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'content'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  content?: string
  font?: 'Bodoni' | 'Inter'
  color?: 'Gray' | 'Default' | 'White' | 'Primary' | 'Inherit' | 'none'
  size?: 'Default' | 'Heading' | 'Subheading' | 'Subtext' | 'Label' | 'Small'
}

const Typography = ({
  level,
  content,
  children,
  size,
  color,
  font = 'Inter',
  ...props
}: PropsWithChildren<TypographyProps>) => {
  // Define Tailwind CSS classes based on props
  const baseClasses = 'leading-normal'
  const fontClasses = font === 'Bodoni' ? 'font-serif' : 'font-sans'

  const sizeClasses = {
    Default: 'text-base',
    Heading: 'text-2xl',
    Subheading: 'text-xl',
    Subtext: 'text-sm',
    Label: 'text-xs font-medium',
    Small: 'text-xs',
  }[size || 'Default']

  const colorClasses = {
    Gray: 'text-gray-500',
    Default: 'text-gray-900',
    White: 'text-white',
    Primary: 'text-blue-600',
    Inherit: 'text-inherit',
    none: '',
  }[color || 'Default']

  return createElement(
    level ? `h${level}` : 'p',
    {
      ...props,
      className: classNames(
        baseClasses,
        fontClasses,
        sizeClasses,
        colorClasses,
        props.className
      ),
    },
    content || children
  )
}

export const Text = Typography
