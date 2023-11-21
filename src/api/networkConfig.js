export const networkConfig = {
  baseURL:
    import.meta.env.VITE_USER_NODE_ENV === 'production'
      ? import.meta.env.VITE_SERVER_TARGET
      : '/api',

  requestTimeout: 30000
}
