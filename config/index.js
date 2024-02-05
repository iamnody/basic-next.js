const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3100' : 'https://yourwebsite.com'
