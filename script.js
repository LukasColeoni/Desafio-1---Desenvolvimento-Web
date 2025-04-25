
document.getElementById("reserva-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const reserva = {
    placa: document.getElementById("placa").value,
    nome: document.getElementById("nome").value,
    apartamento: document.getElementById("apartamento").value,
    bloco: document.getElementById("bloco").value,
    modelo: document.getElementById("modelo").value,
    cor: document.getElementById("cor").value,
    vaga: document.getElementById("vaga").value
  };

  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  reservas.push(reserva);
  localStorage.setItem("reservas", JSON.stringify(reservas));

  alert("Reserva salva com sucesso!");
  document.getElementById("reserva-form").reset();
});
