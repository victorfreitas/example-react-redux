import React from 'react'

export default ({ address }) => {
	const { cep, logradouro, bairro, localidade, uf } = address

	return (
		<div className="info">
			<p><span>ZIP Code:</span> <strong>{cep}</strong></p>
			<p><span>Street:</span> <strong>{logradouro}</strong></p>
			<p><span>Neighborhood:</span> <strong>{bairro}</strong></p>
			<p><span>City:</span> <strong>{localidade}</strong></p>
			<p><span>State:</span> <strong>{uf}</strong></p>
		</div>
	)
}
