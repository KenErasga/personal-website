import { AnimatePresence, motion } from 'motion/react'
import { IconButton } from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import { useMounted } from '../lib/use-mounted'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()

  if (!mounted) {
    return <IconButton aria-label="Toggle theme" variant="outline" size="sm" />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={isDark ? 'dark' : 'light'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorPalette={isDark ? 'orange' : 'purple'}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          size="sm"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
