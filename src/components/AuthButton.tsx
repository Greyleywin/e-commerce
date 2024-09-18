'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function AuthButton() {
    const { data: session } = useSession()

    if (session) {
        return (
            <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
                Sign out
            </button>
        )
    }
    return (
        <button onClick={() => signIn()} className="bg-green-500 text-white px-4 py-2 rounded">
            Sign in
        </button>
    )
}