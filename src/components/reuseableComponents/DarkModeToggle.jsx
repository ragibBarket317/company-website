import { useEffect, useState } from 'react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-2 border rounded-lg text-sm bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}

export default DarkModeToggle
