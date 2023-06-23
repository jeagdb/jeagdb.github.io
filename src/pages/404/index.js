import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Page404 = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace("/content/projets-picou")
  })

  return null
}

export default Page404