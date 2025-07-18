export const gradientBgBase = 'bg-gradient-to-tr'
export const gradientBgPurplePink = `${gradientBgBase} from-purple-400 via-pink-500 to-red-500`
export const gradientBgDark = `${gradientBgBase} from-slate-700 via-slate-900 to-slate-800`
export const gradientBgPinkRed = `${gradientBgBase} from-pink-400 via-red-500 to-yellow-500`
export const gradientBgRhythm = `${gradientBgBase} from-fuchsia-500 via-cyan-400 to-indigo-600`

export const colorsBgLight = {
  white: 'bg-white text-black',
  light: 'bg-white text-black dark:bg-slate-900/70 dark:text-white',
  contrast: 'bg-gray-800 text-white dark:bg-white dark:text-black',
  success: 'bg-emerald-500 border-emerald-500 text-white',
  danger: 'bg-red-500 border-red-500 text-white',
  warning: 'bg-yellow-500 border-yellow-500 text-white',
  info: 'bg-blue-500 border-blue-500 text-white',
  rhythm: 'bg-indigo-700 text-white dark:bg-cyan-900 dark:text-fuchsia-300'
}

export const colorsText = {
  white: 'text-black dark:text-slate-100',
  light: 'text-gray-700 dark:text-slate-400',
  contrast: 'dark:text-white',
  success: 'text-emerald-500',
  danger: 'text-red-500',
  warning: 'text-yellow-500',
  info: 'text-blue-500',
  rhythm: 'text-fuchsia-400 dark:text-cyan-300'
}

export const colorsOutline = {
  white: [colorsText.white, 'border-gray-100'],
  light: [colorsText.light, 'border-gray-100'],
  contrast: [colorsText.contrast, 'border-gray-900 dark:border-slate-100'],
  success: [colorsText.success, 'border-emerald-500'],
  danger: [colorsText.danger, 'border-red-500'],
  warning: [colorsText.warning, 'border-yellow-500'],
  info: [colorsText.info, 'border-blue-500'],
  rhythm: [colorsText.rhythm, 'border-fuchsia-500']
}

export const getButtonColor = (color, isOutlined, hasHover, isActive = false) => {
  const colors = {
    ring: {
      white: 'ring-gray-200 dark:ring-gray-500',
      whiteDark: 'ring-gray-200 dark:ring-gray-500',
      lightDark: 'ring-gray-200 dark:ring-gray-500',
      contrast: 'ring-gray-300 dark:ring-gray-400',
      success: 'ring-emerald-300 dark:ring-emerald-700',
      danger: 'ring-red-300 dark:ring-red-700',
      warning: 'ring-yellow-300 dark:ring-yellow-700',
      info: 'ring-fuchsia-400 dark:ring-cyan-400',
      rhythm: 'ring-fuchsia-400 dark:ring-cyan-400'
    },
    active: {
      white: 'bg-gray-100',
      whiteDark: 'bg-gray-100 dark:bg-slate-800',
      lightDark: 'bg-gray-200 dark:bg-slate-700',
      contrast: 'bg-gray-700 dark:bg-slate-100',
      success: 'bg-emerald-700 dark:bg-emerald-600',
      danger: 'bg-red-700 dark:bg-red-600',
      warning: 'bg-yellow-700 dark:bg-yellow-600',
      info: 'bg-indigo-800 dark:bg-cyan-900',
      rhythm: 'bg-indigo-800 dark:bg-cyan-900'
    },
    bg: {
      white: 'bg-indigo-700 text-white dark:bg-cyan-900 dark:text-fuchsia-300',
      whiteDark: 'bg-indigo-700 text-white dark:bg-cyan-900 dark:text-fuchsia-300',
      lightDark: 'bg-indigo-700 text-white dark:bg-cyan-900 dark:text-fuchsia-300',
      contrast: 'bg-indigo-700 text-white dark:bg-cyan-900 dark:text-fuchsia-300',
      success: 'bg-indigo-700 text-white dark:bg-cyan-900 dark:text-fuchsia-300',
      danger: 'bg-indigo-700 text-white dark:bg-cyan-900 dark:text-fuchsia-300',
      warning: 'bg-indigo-700 text-white dark:bg-cyan-900 dark:text-fuchsia-300',
      info: 'bg-indigo-700 text-white dark:bg-cyan-900 dark:text-fuchsia-300',
      rhythm: 'bg-indigo-700 text-white dark:bg-cyan-900 dark:text-fuchsia-300'
    },
    bgHover: {
      white: 'hover:bg-gray-100',
      whiteDark: 'hover:bg-gray-100 hover:dark:bg-slate-800',
      lightDark: 'hover:bg-gray-200 hover:dark:bg-slate-700',
      contrast: 'hover:bg-gray-700 hover:dark:bg-slate-100',
      success:
        'hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600',
      danger:
        'hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600',
      warning:
        'hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600',
      info: 'hover:bg-indigo-800 hover:border-fuchsia-400 hover:text-white hover:dark:bg-cyan-800 hover:dark:border-cyan-400',
      rhythm:
  'hover:bg-indigo-800 hover:border-fuchsia-400 hover:text-white hover:dark:bg-cyan-800 hover:dark:border-cyan-400'
    },
    borders: {
      white: 'border-white',
      whiteDark: 'border-white dark:border-slate-900',
      lightDark: 'border-gray-100 dark:border-slate-800',
      contrast: 'border-gray-800 dark:border-white',
      success: 'border-emerald-600 dark:border-emerald-500',
      danger: 'border-red-600 dark:border-red-500',
      warning: 'border-yellow-600 dark:border-yellow-500',
      info: 'border-fuchsia-500 dark:border-cyan-400',
      rhythm: 'border-fuchsia-500 dark:border-cyan-400'
    },
    text: {
      contrast: 'dark:text-slate-100',
      success: 'text-emerald-600 dark:text-emerald-500',
      danger: 'text-red-600 dark:text-red-500',
      warning: 'text-yellow-600 dark:text-yellow-500',
      info: 'text-fuchsia-400 dark:text-cyan-300',
      rhythm: 'text-fuchsia-400 dark:text-cyan-300'
    },
    outlineHover: {
      contrast:
        'hover:bg-gray-800 hover:text-gray-100 hover:dark:bg-slate-100 hover:dark:text-black',
      success:
        'hover:bg-emerald-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-emerald-600',
      danger:
        'hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600',
      warning:
        'hover:bg-yellow-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-yellow-600',
      info: 'hover:bg-indigo-800 hover:text-white hover:dark:text-white hover:dark:border-fuchsia-400',
      rhythm:
  'hover:bg-indigo-800 hover:text-white hover:dark:text-white hover:dark:border-fuchsia-400'
    }
  }

  if (!colors.bg[color]) {
    return color
  }

  const isOutlinedProcessed = isOutlined && ['white', 'whiteDark', 'lightDark'].indexOf(color) < 0

  const base = [colors.borders[color], colors.ring[color]]

  if (isActive) {
    base.push(colors.active[color])
  } else {
    base.push(isOutlinedProcessed ? colors.text[color] : colors.bg[color])
  }

  if (hasHover) {
    base.push(isOutlinedProcessed ? colors.outlineHover[color] : colors.bgHover[color])
  }

  return base
}
