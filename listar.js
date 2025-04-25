
const lista = document.querySelector(".lista-vagas ul");
lista.innerHTML = "";

const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

if (reservas.length === 0) {
  lista.innerHTML = "<li>Nenhuma vaga cadastrada.</li>";
} else {
  reservas.forEach((reserva) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>Vaga ${reserva.vaga}:</strong> Ocupada por ${reserva.nome} - Apto ${reserva.apartamento}, Bloco ${reserva.bloco}`;
    lista.appendChild(item);
  });
}
