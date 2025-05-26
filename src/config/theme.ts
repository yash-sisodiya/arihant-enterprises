export const theme = {
  gradients: {
    primary: 'from-blue-600 to-purple-600',
    secondary: 'from-orange-500 to-pink-500',
    subtle: 'from-gray-50 via-blue-50/30 to-purple-50/30'
  },
  buttons: {
    base: 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none backdrop-blur-sm transform hover:scale-105',
    variants: {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40',
      secondary: 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40'
    }
  }
};