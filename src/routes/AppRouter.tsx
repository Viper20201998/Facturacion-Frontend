import { Routes, Route } from 'react-router-dom'
// borrare Link pero luego lo volvere a agregar que no se te olvide
import Dashboard from '../pages/Dashboard'
import Facturas from '../pages/Facturas'
import CrearFactura from '../pages/CrearFactura'
import Clientes from '../pages/Clientes'
import Productos from '../pages/Productos'
import Configuracion from '../pages/Configuracion'

export default function AppRouter() {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />} />
			<Route path='/facturas' element={<Facturas />} />
			<Route path='/crear-factura' element={<CrearFactura />} />
			<Route path='/clientes' element={<Clientes />} />
			<Route path='/productos' element={<Productos />} />
			<Route path='/configuracion' element={<Configuracion />} />
		</Routes>
	)
}
