import { PropsWithChildren } from 'react'

import DashboardLayout from '@/components/layouts/DashboardLayout/DashboardLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <DashboardLayout>{children}</DashboardLayout>
}
