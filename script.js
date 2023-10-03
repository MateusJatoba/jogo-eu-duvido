let botao1 = document.getElementById('gerar')
let res = document.getElementById("campoTop10")

// let top10 = {
//     "TIMES DE FUTEBOL MAIS FAMOSO DO MUNDO" : ['Real Madrid' , 'Manchester United' , 'Barcelona' , 'Liverpool' , 'Manchester City' , 'Bayern de Munique' , 'PSG' , 'Chelsea' , 'Totteham' , 'Arsenal'] , 
    
//     "MELHORES PERSONAGEMS DE DESENHOS DE TODOS OS TEMPO" : ['Charlie Brown' , 'George rei da floresta' , 'Bart Simpson' , 'Pernalonga' , 'Scooby-doo' , 'Peppa - pig' , 'Homer Simpson' ,  'Tom e Jerry' , 'Alvin O esquilo' , 'Popey']
// }

const chaveApi = 'AIzaSyBv2LLM5lPfGYN7JQpCpmmSWvy4eR5fz3A'
const cseID = 'a4f3a0c37891c49ad'


function gerouEsporte(){
    const query = 'esporte site:top10mais.org'
    fetch(`https://www.googleapis.com/customsearch/v1?key=${chaveApi}&cx=${cseID}&q=${query}`)
                .then(response => response.json())
                .then(data => exibirResultados(data))
                .catch(error => console.error('Erro ao realizar a pesquisa: ', error));

    res.innerHTML = ''

}


function gerouViagem(){
    const query = 'viagem site:top10mais.org'
    fetch(`https://www.googleapis.com/customsearch/v1?key=${chaveApi}&cx=${cseID}&q=${query}`)
                .then(response => response.json())
                .then(data => exibirResultados(data))
                .catch(error => console.error('Erro ao realizar a pesquisa: ', error));

    res.innerHTML = ''

}



function gerouGerais(){
    const query = 'site:top10mais.org'
    fetch(`https://www.googleapis.com/customsearch/v1?key=${chaveApi}&cx=${cseID}&q=${query}`)
                .then(response => response.json())
                .then(data => exibirResultados(data))
                .catch(error => console.error('Erro ao realizar a pesquisa: ', error));

    res.innerHTML = ''

}



function gerouConhecimentos(){
    const query = 'conhecimentos gerais site:top10mais.org'
    fetch(`https://www.googleapis.com/customsearch/v1?key=${chaveApi}&cx=${cseID}&q=${query}`)
                .then(response => response.json())
                .then(data => exibirResultados(data))
                .catch(error => console.error('Erro ao realizar a pesquisa: ', error));

    res.innerHTML = ''

}



function gerouAnimais(){
    const query = 'animais site:top10mais.org'
    fetch(`https://www.googleapis.com/customsearch/v1?key=${chaveApi}&cx=${cseID}&q=${query}`)
                .then(response => response.json())
                .then(data => exibirResultados(data))
                .catch(error => console.error('Erro ao realizar a pesquisa: ', error));

    res.innerHTML = ''

}

function exibirResultados(data){

    res.innerHTML = ''
    if (data.items) {
        data.items.forEach(item => {
            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.title;

            const snippet = document.createElement('p');
            snippet.textContent = item.snippet;

            res.appendChild(link);
            res.appendChild(snippet);
        });
    } else {
        res.textContent = 'Nenhum resultado encontrado.';
    }
}
// console.log(top10[0][0])



