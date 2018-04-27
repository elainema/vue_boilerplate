import createLogger from '../../asset/js/logger'



export default process.env.NODE_ENV !== 'production'
  ? [createLogger()]
  : []
