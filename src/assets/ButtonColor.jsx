import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Button } from 'flowbite-react'

export function ModeToggle () {
  const [theme, setThemeState] = useState('theme-light')

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setThemeState(isDarkMode ? 'dark' : 'theme-light')
  }, [])

  useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

  return (
    <Button
      className='w-12 h-12 rounded-lg flex items-center justify-center focus:outline-none focus:ring bg-indigo-950 dark:bg-gray-900'
      variant='outline'
      size='x1'
      onClick={() => setThemeState(theme === 'dark' ? 'theme-light' : 'dark')}>
      <FaSun className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <FaMoon className=' h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
