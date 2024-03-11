import { useMutation, useQueryClient } from '@tanstack/react-query'

import { pomodoroService } from '@/services/pomodoro.service'

const queryClient = useQueryClient()

export function useCreateSession() {
	const { mutate, isPending } = useMutation({
		mutationKey: ['create new session'],
		mutationFn: () => pomodoroService.createSession(),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get today session']
			})
		}
	})

	return { mutate, isPending }
}
