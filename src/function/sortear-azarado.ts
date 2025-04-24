import Pessoa from "../model/Pessoa";

export default function sortearAzarado(pessoas: Pessoa[]): Pessoa {
    const restantes = [...pessoas];

    while (restantes.length > 1) {
        const pessoaSorteada = Math.floor(Math.random() * restantes.length);
        const eliminado = restantes.splice(pessoaSorteada, 1)[0];

    }

    const azarado = restantes[0];
     
    return azarado;
}
