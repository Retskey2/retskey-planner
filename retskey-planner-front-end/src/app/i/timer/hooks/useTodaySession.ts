import { useQuery } from '@tanstack/react-query'

import { pomodoroService } from '@/services/pomodoro.service'

export function useTodaySession() {
	const {
		data: sessionResponse,
		isLoading,
		refetch,
		isSuccess
	} = useQuery({
		queryKey: ['get today session'],
		queryFn: () => pomodoroService.getTodaySession()
	})

	return { sessionResponse, isLoading, refetch, isSuccess }
}
