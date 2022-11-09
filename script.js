// Hotel
let idsHotel = [], nomesHotel = [], categoriasHotel = [], enderecosHotel = [], telefonesHotel = [];
let idHotel = 1;
// reserva
let idReserva = 1
let idsReserva = [], idsHotelReserva = [], nomesResponsavelReserva = [], diaEntrada = [], diaSaida = [];

function CadastroHotel() {
    idsHotel.push(idHotel);
    nomesHotel.push(prompt("Nome do Hotel:"));
    categoriasHotel.push(parseInt(prompt("Estrelas do hotel:")));
    enderecosHotel.push(prompt("Endereço do hotel:"));
    telefonesHotel.push(prompt("Telefone do Hotel:"));
    idHotel++
    alert("Hotel cadastrado.")
}

function CadastroReserva() {
    let validacaoReserva = true;
    idsReserva.push(idReserva);

    nomesResponsavelReserva.push(prompt("Nome do Responsavel:"));
    let nomeHotelReserva = prompt("Nome Do Hotel:")

    let index = nomesHotel.indexOf(nomeHotelReserva);
    idsHotelReserva.push(idsHotel[index]);

    let validDiaEntrada = parseInt(prompt("Dia Entrada:"));
    let validDiaSaida = parseInt(prompt("Dia Saida:"));
    do {
        if (validDiaEntrada > validDiaSaida) {
            alert("Dia inválido. Digite Novamente")
            validDiaEntrada = parseInt(prompt("Dia Entrada:"));
            validDiaSaida = parseInt(prompt("Dia Saida:"));
        } else {
            validacaoReserva = false;
        }
    } while (validacaoReserva)
    diaEntrada.push(validDiaEntrada);
    diaSaida.push(validDiaSaida);
    idReserva++
    alert("Reserva efetuada.")
}
