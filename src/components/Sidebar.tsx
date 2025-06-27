import { Link, useLocation } from 'react-router-dom'

const NavItems = [
	{ label: 'Dashboard', path: '/' },
	{ label: 'Crear Factura', path: '/crear-factura' },
	{ label: 'Facturas', path: '/facturas' },
	{ label: 'Clientes', path: '/clientes' },
	{ label: 'Productos', path: '/productos' },
	{ label: 'Configuración', path: '/configuracion' },
]

export default function Sidebar() {
	const location = useLocation()

	return (
		<aside className='w-64 bg-white shadow-md p-4 min-h-screen'>
			<h1 className='text-2xl font-bold mb-6 text-gray-800'>
				LOGO DE EMPRESAS
			</h1>
			<nav className='flex flex-col gap-3'>
				{NavItems.map((item) => (
					<Link
						key={item.path}
						to={item.path}
						className={`px-3 py-2 rounded hover:bg-blue-100 transition ${
							location.pathname === item.path ? 'bg-blue-500 text-white' : ''
						}`}
					>
						{item.label}
					</Link>
				))}
			</nav>
		</aside>
	)
}
