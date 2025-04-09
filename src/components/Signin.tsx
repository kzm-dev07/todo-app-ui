'use client';
import { signIn } from 'next-auth/react'
import React from 'react'

export const Signin = () => {
  return (
    <button onClick={() => signIn('keycloak', { callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}` })}>Sign in</button>
  )
}
