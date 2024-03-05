import type { ReactNode } from 'react'

import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

type DashboardLayoutProps = {
	children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<div className='grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr]'>
			<Sidebar />
			<main className='p-big-layout overflow-x-hidden max-h-screen relative'>
				<Header />
				{children}
			</main>
		</div>
	)
}
