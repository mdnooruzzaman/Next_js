const dev = process.new.NODE_ENV !== 'production';

export  const server =dev ? 'http://localhost:3000': 'https://localhost:3000'