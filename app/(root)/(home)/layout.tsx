import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
        navbar
        {children}
        footer
    </main>
  )
}

export default RootLayout
