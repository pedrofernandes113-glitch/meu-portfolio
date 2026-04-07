// ARRAY DE PROJETOS
const projetos = [
    {
        nome: "Portfólio Pessoal",
        descricao: "Meu primeiro portfólio desenvolvido com HTML, CSS e JavaScript.",
        link: "https://github.com/pedrofernandes113-glitch/meu-portfolio"
    },
    {
        nome: "Projeto em desenvolvimento",
        descricao: "Novos projetos serão adicionados em breve.",
        link: "#"
    }
];

// FUNÇÃO PARA MOSTRAR OS PROJETOS NA TELA
function mostrarProjetos() {
    const container = document.getElementById("lista-projetos");

    projetos.forEach(projeto => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">Ver Projeto</a>
        `;

        container.appendChild(div);
    });
}

// EXECUTA QUANDO A PÁGINA CARREGAR
mostrarProjetos();