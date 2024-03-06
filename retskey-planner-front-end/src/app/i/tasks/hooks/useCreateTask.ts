import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTaskFormState } from '@/types/task.types'

import { taskService } from '@/services/task.service'

export function useCreateTask() {
	const queriClient = useQueryClient()

	const { mutate: createTask } = useMutation({
		mutationKey: ['create task'],
		mutationFn: (data: TypeTaskFormState) => taskService.createTask(data),
		onSuccess() {
			queriClient.invalidateQueries({
				queryKey: ['tasks']
			})
		}
	})

	return { createTask }
}
