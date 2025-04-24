export default class Pessoa {
    constructor(readonly nome: string, readonly email: string) {}

    getEmailMascarado(): string {
        const [usuario, dominio] = this.email.split('@');
        const primeiraLetra = usuario[0];
        const parteVisivel = usuario.length > 2 ? usuario.slice(0, 2) : primeiraLetra;
        const asteriscos = '*'.repeat(7 - parteVisivel.length);
        return `${parteVisivel}${asteriscos}@${dominio}`;
    }

    toString(): string {
        return `${this.nome} <${this.getEmailMascarado()}>`;
    }
}