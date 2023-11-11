"use client"
import styles from '@styles/logoutButton.module.scss'
import Image from 'next/image'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
  const router = useRouter()
  // logout
  const logout = () => {
    localStorage.removeItem("data");
    router.push("/login");
  }
  return (
    <div className={styles.wrapper} onClick={logout}>
        <div className={styles.left_section}>
            <Image src="/images/person.avif" width={40} height={40} alt="avatar" />
            <p>Sign out</p>
        </div>
        <LogOut size={20}/>
    </div>
  )
}

export default LogoutButton