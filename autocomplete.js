$("#autocomplete").autocomplete({
	source: function (request, response) {
		let term = request.term.toLowerCase();
		let filteredData = cidades.filter(function (item) {
			return (
				item.nome.toLowerCase().includes(term) ||
				item.codigo_ibge.toString().includes(term)
			);
		});

		let slicedData = filteredData.slice(0, 5);

		response(slicedData.map(function (item) {
			return {
				label: item.nome + ' - ' + item.codigo_ibge,
				value: item.codigo_ibge,
				codigoIbge: item.codigo_ibge
			};
		}));
	},
	minLength: 1,
	select: function (event, ui) {
		$(this).val(ui.item.value);
		$(this).attr('data-codigo-ibge', ui.item.codigo_ibge);
		return false;
	}
});