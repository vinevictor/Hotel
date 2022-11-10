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
    let validacaoHotel = false
    while (validacaoHotel == false) {
        if (nomesHotel.includes(nomeHotelReserva)) {
            let index = nomesHotel.indexOf(nomeHotelReserva);
            idsHotelReserva.push(idsHotel[index]);
            validacaoHotel == true
        } else {
            alert("Hotel Invalido.")
        }
    }

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

function ReservasHotel(idExReservaHotel) {
    let contadorExibir = 0
    let exibirHotel = idsHotel.indexOf(idExReservaHotel)
    idsHotelReserva.forEach(x => {

        if (x == idExReservaHotel) {
            console.log("Nome Hotel: " + nomesHotel[exibirHotel] + " | Nome Responsavel: " + nomesResponsavelReserva[contadorExibir] + " | Ëntrada: " + diaEntradata[contadorExibir] + " | Saida: " + diaSaida)
        }
        contadorExibir++
    })
}

function ExibirReserva(reserva) {
    let exibirReserva = idsReserva.indexOf(reserva)
    let indexHotel = idsHotelReserva[exibirReserva]
    let exibirHotel = idsHotel.indexOf(indexHotel)
    console.log("Nome Hotel: " + nomesHotel[exibirHotel] + " | Endereço: " + enderecosHotel[exibirHotel] + " | Entrada: " + diaEntrada[exibirReserva] + " | Saida: " + diaSaida[exibirReserva])
}

function ReservaDoUsuario(nome) {
    let indexNome = nomesResponsavelReserva.indexOf(nome)
    let hotel = idsHotelReserva[indexNome]
    let indexHotel = idsHotel.indexOf(hotel)
    nomesResponsavelReserva.forEach(x => {
        if (x == nome) {
            console.log("Nome Responsavel: " + nomesResponsavelReserva[indexNome] + " | Nome Hotel: " + nomesHotel[indexHotel] + " | ID Reserva: " + idsReserva[indexNome])
        }
    })
}


function ExibirHoteisDaCategoria(categoria) {
    let contadorHotel = 0
    let arrSupHotel = []
    categoriasHotel.forEach(x => {
        if (x == categoria) {
            arrSupHotel.push(nomesHotel[categoria])
        }
        contadorHotel++
    })
    console.log(arrSupHotel)
}

function AtualizarTelefoneHotel(nomeHotel, telefoneAtualizado) {
    let indexHotel = nomesHotel.indexOf(nomeHotel)
    telefonesHotel[indexHotel] = telefoneAtualizado
    console.log("Telefone atualizado.")
}

function Opcoes() {
    let opcao = prompt("1 => CadastroHotel | 2 => CadastroReserva | 3 => Exibir Reserva | 4 => Exibir Reservas do Usuario | 5 => Exibir Hoteis por Categoria | 6 => Atualizar Telefone | 7 => Encerrar.")
    switch (opcao) {
        case "1":
            CadastroHotel();
            break;
        case "2":
            CadastroReserva();
            break;
        case "3":
            let idsHotelReserva = prompt("Digite o ID da reserva:")
            ReservasHotel(idsHotelReserva);
            break;
        case "4":
            let nome = prompt("Nome Do responsavel:")
            break;
        case "5":
            let categoria = parseInt(prompt("Digite a Categoria"))
            ExibirHoteisDaCategoria(categoria);
            break;
        case "6":
            let nomeHotel = prompt("Nome do Hotel:")
            let telefoneAtualizado = prompt("Telefone atualizado: ")
            AtualizarTelefoneHotel(nomeHotel, telefoneAtualizado)
            break;
        case "7":
            continuar = false;
            break;
        default:
            alert("Opção Inválida")
            break;
    }
}

let continuar = true;
while (continuar) {
    Opcoes();
}