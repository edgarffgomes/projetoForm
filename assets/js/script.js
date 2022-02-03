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
//função que preenche a tabela com a lista de objetos:
for(person in people){
	console.log(document.querySelector('table.lista tbody').innerHTML += `
		<td>
			${people[person].name}
		</td>
		<td>
			${people[person].telephone}
		</td>
		<td>
			${people[person].xp ? `Sim`:`Não`}
		</td>
		<td>
			<button> Alterar </button>
		</td>
		`)
}