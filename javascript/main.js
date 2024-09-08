import dados from './dados.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('conteudo');

    // Função para criar e adicionar uma seção ao container
    function adicionarSecao(titulo, descricao, lista) {
        const secao = document.createElement('section');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const ul = document.createElement('ul');

        h2.textContent = titulo;
        p.textContent = descricao;

        lista.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome}: ${item.descricao}`;
            ul.appendChild(li);
        });

        secao.appendChild(h2);
        secao.appendChild(p);
        secao.appendChild(ul);

        container.appendChild(secao);
    }

    // Adicionar as seções usando os dados importados
    adicionarSecao(
        'Lógica de Programação',
        dados.logicaProgramacao.descricao,
        dados.logicaProgramacao.conceitos
    );

    adicionarSecao(
        'HTML',
        dados.html.descricao,
        dados.html.conceitos
    );

    adicionarSecao(
        'CSS',
        dados.css.descricao,
        dados.css.conceitos
    );

    adicionarSecao(
        'JavaScript',
        dados.javascript.descricao,
        dados.javascript.conceitos
    );

    // Seção do Mercado de Trabalho
    const mercado = document.createElement('section');
    const h2Mercado = document.createElement('h2');
    const pMercado = document.createElement('p');
    const ulMercado = document.createElement('ul');

    h2Mercado.textContent = 'Mercado de Trabalho';
    pMercado.textContent = dados.resumoParaEmprego.descricao;

    dados.resumoParaEmprego.recomendacoes.forEach(recomendacao => {
        const li = document.createElement('li');
        li.textContent = recomendacao;
        ulMercado.appendChild(li);
    });

    mercado.appendChild(h2Mercado);
    mercado.appendChild(pMercado);
    mercado.appendChild(ulMercado);

    container.appendChild(mercado);
});
