import Sidebar from './Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex min-h-screen bg-gray-100'>
			<Sidebar />
			<main className='flex-1 p-6'>{children}</main>
		</div>
	)
}
