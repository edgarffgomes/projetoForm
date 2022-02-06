//função para enviar dados para o formulário à partir do formulário
function testsForm(e){
	//parando o envio do submit
	e.preventDefault()

	//Phone Pattern é uma expressão regular que afere a não existência de números
	var phonePattern = /[^0-9-() ]+/g

	if(phonePattern.test(e.target.elements['phone'].value)){
		alert('Apenas números são permitidos no campo telefone')
		return false
	}

	if(e.target.elements['phone'].value.replace(/[-()]/g, '').length < 11){
		alert('Número inválido')
		return false
	}

	

	//recuperando dados do local storage
	var peopleRaw = localStorage.getItem('people')
	if (peopleRaw != null){
		var people = JSON.parse(localStorage.getItem('people'))
	} else{
		var people = []
	}

	//caso o elemento em questão já exista, serão alterados os valores de seus atributos em local storage
	if(id !== null){
		people[id] = {
			name: e.target.elements['name'].value,
			telephone: e.target.elements['phone'].value,
			//convertendo xp de string para boolean
			xp: (e.target.elements['xp'].value  == 'true')
		}
	}else
	//caso o elemento não exista, serão ele será adicionado no final do vetor/node list
	{
	//adicionando novo objeto ao vetor people
		people.push({
			name: e.target.elements['name'].value,
			telephone: e.target.elements['phone'].value,
			//convertendo xp de string para boolean
			xp: (e.target.elements['xp'].value  == 'true')
		})
	}
	//enviando nova versão do vetor ao local storage
	localStorage.setItem('people', JSON.stringify(people))
	//redirecionando para a página Home 
	document.getElementById('goHome').click()
}

//extraindo informações da url
var mainURL = new URL(window.location.href)
var id = mainURL.searchParams.get('person')
if (id !== null){
	//recuperando dados do local storage
	var peopleRaw = localStorage.getItem('people')
	if (peopleRaw != null){
		var people = JSON.parse(localStorage.getItem('people'))
	} else{
		var people = []
	}

	//alterando valores dos inputs
	document.getElementById('name').value = people[id].name
	document.getElementById('phone').value = people[id].telephone
	if(people[id].xp){
		document.getElementById('xp-yes').checked = true
	} else{
		document.getElementById('xp-no').checked = true
	}
}

function testsPhone(e){
	e.preventDefault()

	if(e.target.value.length == 0){
		e.target.value += '('
	}
	if(e.target.value.length == 3){
		e.target.value += ') '
	}
	if(e.target.value.length == 10){
		e.target.value += '-'
	}
	if(/[0-9]/g.test(e.key) && e.target.value.length < 15){
	e.target.value += e.key
	}
}