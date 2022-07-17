import { useState, useMemo } from 'react'
import { createContext, useContext } from 'react'

export const ProfileContext = createContext({
  profile: null,
  setProfile: () => { }
})

export const useProfileContext = () => {
  return useContext(ProfileContext)
}

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState()
  const profileContext = useMemo(() => ({ profile, setProfile }), [profile])

  return (
    <ProfileContext.Provider value={profileContext}>
      {children}
    </ProfileContext.Provider>
  )
}

