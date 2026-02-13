import { M_PLUS_Rounded_1c } from 'next/font/google'

export const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['300', '700'],
  display: 'swap',
  variable: '--font-m-plus-rounded'
})

const Fonts = () => (
  <style jsx global>{`
    :root {
      --font-m-plus-rounded: ${mPlusRounded.style.fontFamily};
    }
  `}</style>
)

export default Fonts
