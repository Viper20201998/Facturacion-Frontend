import { useState } from 'react'
// tengo que agregar el use en la importacion porque lo borrare momentaneamente para evitar errores de compilacion

// definicion de tipo de datos de la factura
type Producto = {
	id: number
	nombre: string
	precio: number
	cantidad: number
}

export default function CrearFactura() {
	// estado para el nombre del cliente
	const [cliente, setCliente] = useState('')
	// estado para la lista de productos que se van a agregar a la factura
	const [producto, setProducto] = useState<Producto[]>([
		{ id: 1, nombre: ' ', precio: 0, cantidad: 1 },
	])

	// estado para el tipo de factura

	const [tipoFactura, setTipoFactura] = useState<'consumidor' | 'credito'>(
		'consumidor',
	)

	// funcion para agregar un nuevo producto a la factura
	const agregarProducto = () => {
		setProducto([
			...producto,
			{ id: Date.now(), nombre: '', precio: 0, cantidad: 1 },
		])
	}

	//funcion para actualizar campos de un producto
	const actualizarProducto = (
		index: number,
		campo: keyof Producto,
		valor: string | number,
	) => {
		// crea nueva lista de productos con el producto actualizado
		const nuevos = producto.map((prod, i) =>
			i === index
				? {
						...prod,
						[campo]:
							campo === 'precio' || campo === 'cantidad'
								? Number(valor)
								: valor,
					}
				: prod,
		)
		setProducto(nuevos)
	}

	// calculo automatico del subtotal ( precio * cantidad) de cada producto
	const subtotal = producto.reduce((acc, p) => p.precio * p.cantidad + acc, 0)
	const iva = subtotal * 0.13 // 13% de IVA
	const total = subtotal + iva

	return (
		<>
			<div className=' max-w-4xl mx-auto bg-white p-6 rounded shadow '>
				<h2 className='text-2xl font-mediun mb-4 text-black'>Crear factura</h2>

				{/* input del cliente*/}
				<div className='mb-4'>
					<label className='block font-medium mb-1 text-black'>Cliente</label>
					<input
						type='text'
						className='w-full border px-3 py-2 rounded text-black'
						value={cliente}
						onChange={(e) => setCliente(e.target.value)}
						placeholder='Nombre del cliente'
					/>
				</div>

				{/* Selector de tipo de factura */}

				<div className='mb-4'>
					<label className='block font-medium mb-1 text-black'>
						{' '}
						Tipo de Factura{' '}
					</label>
					<select
						value={tipoFactura}
						onChange={(e) =>
							setTipoFactura(e.target.value as 'consumidor' | 'credito')
						}
						className='w-full border px-3 py-2 rounded text-black'
					>
						<option value='Consumidor'>Consumidor</option>
						<option value='Credito'>Credito Fiscal</option>
					</select>
				</div>

				{/* Seccion para ingresar productos */}
				<h3 className='text-lg font-semibold mb-2'>Productos</h3>
				{producto.map((producto, index) => (
					<div key={producto.id} className='grid grid-cols-3 gap-4 mb-2'>
						{/* Input para el nombre del producto */}
						<input
							type='text'
							placeholder='Nombre del producto'
							className='border px-2 py-1 rounded text-black'
							value={producto.nombre}
							onChange={(e) =>
								actualizarProducto(index, 'nombre', e.target.value)
							}
						/>
						{/* Input para el precio del producto */}
						<input
							type='number'
							placeholder='Precio'
							className='border px-2 py-1 rounded text-black'
							value={producto.precio}
							onChange={(e) =>
								actualizarProducto(index, 'precio', e.target.value)
							}
						/>
					</div>
				))}

				{/* Boton para agregar un nuevo producto */}
				<button
					onClick={agregarProducto}
					className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
				>
					Agregar Producto
				</button>
				{/* Calcular el total */}
				<div className='mt-6'>
					<p className='font-semibold text-black'>
						Subtotal: ${subtotal.toFixed(2)}
					</p>{' '}
					{/* Mostrar el subtotal*/}
					<p className='font-semibold text-black'>
						IVA (13%): ${iva.toFixed(2)}
					</p>{' '}
					{/* Mostrar el IVA */}
					<p className='font-semibold text-black'>
						Total: ${total.toFixed(2)}
					</p>{' '}
					{/* Mostrar el total */}
				</div>
				{/* Boton para generar la factura */}
				<button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mt-4'>
					Generar Factura
				</button>
			</div>
		</>
	)
}
