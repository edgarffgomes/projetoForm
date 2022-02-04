//Código para realizar a recuperação de dados do local storage
	var peopleRaw = localStorage.getItem('people')
	if (peopleRaw != null){
		var people = JSON.parse(localStorage.getItem('people'))
	} else{
		var people = []
	}
function drawTable(){	
	//convertendo a node list em vetor
	currentLines = [...document.querySelectorAll('table.lista tbody .dynamic-content')]
	//removendo elemento (o element corresponde à tr com classe dynamic content)
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
					<button onclick="deleteUser(${person})"> Excluir </button>
				</td>
			</tr>
			`
	}
}
drawTable()
//função para realizar a presistência de exclusões dos itens em local storage
function deleteUser(p){
	people.splice(p, 1);
	drawTable()
	localStorage.setItem('people',JSON.stringify(people))
}