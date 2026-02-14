import { useEffect } from 'react'
import { useRouter } from 'next/router'

const ContactsRedirect = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/#contacts')
  }, [router])

  return null
}

export default ContactsRedirect
