const resumo = {
  logicaProgramacao: {
    descricao: "Lógica de programação é a base para qualquer desenvolvimento de software. Para iniciantes em front-end, entender a lógica de programação é essencial, pois é o que permite resolver problemas e criar algoritmos eficazes.",
    conceitos: [
      {
        nome: "Algoritmos",
        descricao: "Conjunto de passos lógicos para resolver um problema ou realizar uma tarefa. Pode ser representado de forma textual ou através de fluxogramas."
      },
      {
        nome: "Estruturas de Controle",
        descricao: "Usadas para dirigir o fluxo do programa, como loops (for, while) e condicionais (if, else). Por exemplo, usar um if para verificar se uma entrada do usuário é válida e um for para iterar sobre uma lista de itens."
      },
      {
        nome: "Estruturas de Dados",
        descricao: "Formas de organizar e armazenar dados para que possam ser utilizados de maneira eficiente. Arrays (ou vetores) e objetos são exemplos comuns em JavaScript."
      },
      {
        nome: "Funções e Procedimentos",
        descricao: "Blocos de código reutilizáveis que realizam uma tarefa específica. Funções ajudam a manter o código modular e mais fácil de entender."
      }
    ]
  },
  html: {
    descricao: "HTML é a linguagem de marcação usada para estruturar o conteúdo da web. Compreender HTML é crucial para qualquer desenvolvedor front-end, pois ele define a estrutura básica das páginas da web.",
    conceitos: [
      {
        nome: "Elementos e Tags",
        descricao: "HTML usa tags para definir diferentes tipos de conteúdo, como <h1> para títulos, <p> para parágrafos, e <a> para links."
      },
      {
        nome: "Atributos",
        descricao: "Propriedades adicionais dos elementos HTML, como class, id, e href. Por exemplo, <a href='https://www.example.com'> define um link para outra página."
      },
      {
        nome: "Semântica",
        descricao: "Tags como <header>, <footer>, <article>, e <section> ajudam a definir a estrutura do documento de forma mais significativa, melhorando a acessibilidade e SEO."
      }
    ]
  },
  css: {
    descricao: "CSS é a linguagem usada para estilizar e formatar o conteúdo HTML. Ele permite que você controle a aparência de uma página web, incluindo layout, cores e fontes.",
    conceitos: [
      {
        nome: "Seletores",
        descricao: "Usados para aplicar estilos a elementos HTML. Exemplo: p { color: blue; } aplica a cor azul a todos os parágrafos."
      },
      {
        nome: "Propriedades e Valores",
        descricao: "Definem o estilo aplicado aos elementos. Exemplos incluem color, font-size, margin, e padding."
      },
      {
        nome: "Box Model",
        descricao: "Conceito fundamental que descreve o layout dos elementos, incluindo content, padding, border, e margin."
      },
      {
        nome: "Layouts",
        descricao: "Técnicas como Flexbox e Grid são usadas para criar layouts complexos e responsivos."
      }
    ]
  },
  javascript: {
    descricao: "JavaScript é a linguagem de programação que adiciona interatividade às páginas web. 'Vanilla JavaScript' refere-se ao uso de JavaScript puro, sem frameworks ou bibliotecas adicionais.",
    conceitos: [
      {
        nome: "Sintaxe Básica",
        descricao: "Inclui variáveis, operadores, tipos de dados, e funções. Exemplo: let x = 5; console.log(x * 2); exibe 10 no console."
      },
      {
        nome: "Manipulação do DOM (Document Object Model)",
        descricao: "Permite interagir com os elementos HTML da página. Exemplo: document.getElementById('myElement').innerText = 'Novo texto'; altera o texto de um elemento com o id myElement."
      },
      {
        nome: "Eventos",
        descricao: "Permitem que você adicione interatividade, como clicar em um botão ou digitar em um campo de entrada. Exemplo: button.addEventListener('click', function() { alert('Botão clicado!'); });"
      },
      {
        nome: "Funções e Objetos",
        descricao: "Funções ajudam a organizar e reutilizar código, enquanto objetos permitem agrupar dados e funcionalidades. Exemplo: let pessoa = { nome: 'João', idade: 30 }; console.log(pessoa.nome);"
      }
    ]
  },
  resumoParaEmprego: {
    descricao: "Para iniciantes no mercado de front-end, é fundamental ter uma compreensão sólida desses conceitos básicos. Conhecimentos práticos em HTML, CSS e JavaScript são frequentemente os requisitos mínimos para posições de desenvolvedor front-end. Além disso, a capacidade de aplicar lógica de programação para resolver problemas e criar soluções funcionais é altamente valorizada.",
    recomendacoes: [
      "Começar com projetos simples e construir um portfólio de trabalho pode ajudar a demonstrar suas habilidades para possíveis empregadores.",
      "Praticar a criação de websites e implementar diferentes funcionalidades ajudará a consolidar seu conhecimento e melhorar suas perspectivas no mercado de trabalho."
    ]
  }
};

export default resumo;
