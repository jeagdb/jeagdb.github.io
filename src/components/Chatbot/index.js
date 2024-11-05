import { useEffect } from 'react'

const Chatbot = ({ }) => {
  useEffect(() => {
    (function (g, e, n, es, ys) {
      g['_genesysJs'] = e
      g[e] = g[e] || function () {
        (g[e].q = g[e].q || []).push(arguments)
      }
      g[e].t = 1 * new Date()
      g[e].c = es
      ys = document.createElement('script')
      ys.async = 1
      ys.src = n
      ys.defer = true
      ys.charset = 'utf-8'
      document.head.appendChild(ys)
    })(window, 'Genesys', 'https://apps.mypurecloud.ie/genesys-bootstrap/genesys.min.js', {
      environment: 'prod-euw1',
      deploymentId: 'e34cdf1e-853e-4352-9470-31b012d46adf'
    })

    // Retarde le chargement de 3 secondes
    // const timer = setTimeout(loadChatbot, 3000)
    // return () => clearTimeout(timer)
  }, [])

  return null
}

export default Chatbot