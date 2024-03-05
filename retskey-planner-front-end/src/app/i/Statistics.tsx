'use client'

import React from 'react'

import Loader from '@/components/ui/Loader'

import { useProfile } from '@/hooks/useProfile'

const Statistics = () => {
	const { data, isLoading } = useProfile()

	return isLoading ? (
		<Loader />
	) : (
		<div className='grid grid-cols-4 gap-32 mt-7'>
			{data?.statistics.length ? (
				data.statistics.map((statistic, index) => (
					<div
						key={index}
						className='bg-border/5 rounded p-layout text-center hover:-translate-y-3 transition-transform duration-500'
					>
						<div className='text-xl'>{statistic.label}</div>
						<div className='text-3xl font-semibold'>{statistic.value}</div>
					</div>
				))
			) : (
				<div>Statistic not loaded!</div>
			)}
		</div>
	)
}

export default Statistics
