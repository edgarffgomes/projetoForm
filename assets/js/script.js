//Array de objeto com informações da tabela:
	let people = [{
		name: `Edgar F.F.Gomes`,
		telephone: `22555555555`,
		xp: false,
		},
		{
			name: `Jorge dos Santos`,
			telephone: `22333333333`,
			xp: true,
		},
			{
			name: `Maria Ribeiro`,
			telephone: `22888888888`,
			xp: true,
		},
		{
			name: `Ana Mendes`,
			telephone: `22111111111`,
			xp: false,
		},
	]
function drawTable(){	
	//convertendo a node list em vetor
	currentLines = [...document.querySelectorAll('table.lista tbody .dynamic-content')]
	//removendo elemento
	currentLines.forEach((element) => {
		element.remove()
	})

	//função que preenche a tabela com a lista de objetos:
	for(person in people){
		document.querySelector('table.lista tbody').innerHTML += `
			<tr class="dynamic-content" style="background-color: ${(person % 2) == 0 ? `#FFF`: `#EEE`}">
				<td>
					${people[person].name}
				</td>
				<td>
					${people[person].telephone}
				</td>
				<td>
					${people[person].xp ? `<span style="color:green">Sim</span>` : `<span style="color:red">Não</span>`}
				</td>
				<td>
					<button onclick="people.splice(${person}, 1); drawTable()"> Excluir </button>
				</td>
			</tr>
			`
	}
}
drawTable()
