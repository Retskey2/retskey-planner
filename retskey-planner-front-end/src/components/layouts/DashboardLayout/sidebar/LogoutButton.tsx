'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { authService } from '@/services/auth.service'

export function LogoutButton() {
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})

	return (
		<button
			className='opacity-50 hover:opacity-100 transition-opacity duration-300 flex flex-row items-center gap-2'
			onClick={() => mutate()}
		>
			Exit
			<LogOut size={20} />
		</button>
	)
}
