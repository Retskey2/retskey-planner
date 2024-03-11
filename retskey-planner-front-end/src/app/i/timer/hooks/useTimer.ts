import { useEffect, useState } from 'react'

import { IPomodoroRoundResponse } from '@/types/pomodoro.types'

import { useLoadSettings } from './useLoadSettings'

export function useTimer() {
	const { breakInterval, workInterval } = useLoadSettings()

	const [isRunning, setIsRunning] = useState(false)
	const [secondsLeft, setSecondsLeft] = useState(workInterval * 60)
	const [activeRound, setActiveRound] = useState<IPomodoroRoundResponse>()

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null
	}, [])

	return {}
}
