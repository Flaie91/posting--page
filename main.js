const formPost = document.querySelector("#formPost");
const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");
const resultado = document.querySelector("#resultado");

formPost.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((dados) => {
      resultado.innerHTML = `
        Post criado com sucesso!<br><br>
        ID: ${dados.id}<br>
        Título: ${dados.title}
      `;
      

      formPost.reset();
    })
    .catch((erro) => {
      resultado.innerHTML = "Erro ao criar post.";
      console.log(erro);
    });
});
