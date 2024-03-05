'use client'

import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { COLORS } from '@/constants/color.constants'

import { LogoutButton } from './LogoutButton'
import MenuItem from './MenuItem'
import { MENU } from './menu.data'

const [minWidth, maxWidth, defaultWidth] = [200, 500, 350]

export function Sidebar() {
	const [width, setWidth] = useState(
		parseInt(localStorage.getItem('sidebarWidth') as string) || defaultWidth
	)

	const isResized = useRef(false)

	useEffect(() => {
		window.addEventListener('mousemove', e => {
			if (!isResized.current) {
				return
			}

			setWidth(previousWidth => {
				const newWidth = previousWidth + e.movementX / 2

				const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth

				return isWidthInRange ? newWidth : previousWidth
			})
		})

		window.addEventListener('mouseup', () => {
			isResized.current = false
		})
	}, [])

	useEffect(() => {
		localStorage.setItem('sidebarWidth', width)
	}, [width])

	return (
		<div className='flex'>
			<aside
				style={{ width: `${width / 16}rem` }}
				className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'
			>
				<div className='flex justify-between flex-col h-full'>
					<div>
						<div className='border-b border-b-border flex flex-row justify-between items-center mr-4'>
							<Link
								href='/'
								className='flex items-center gap-2.5 p-layout '
								draggable={false}
							>
								<GanttChartSquare
									color={COLORS.primary}
									size={38}
								/>
								<span className='text-2xl font-bold relative'>
									PLANNER
									<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
										beta
									</span>
								</span>
							</Link>
							<LogoutButton />
						</div>

						<div className='p-3 relative'>
							{MENU.map(item => (
								<MenuItem
									item={item}
									key={item.link}
								/>
							))}
						</div>
					</div>
					<footer className='text-xs opacity-40 font-normal text-center p-layout'>
						2024 &copy; With develop from <br /> All rights reserved
					</footer>
				</div>
			</aside>

			{/* Handle */}
			<div
				className='w-2 cursor-col-resize'
				onMouseDown={() => {
					isResized.current = true
				}}
			/>
		</div>
	)
}
