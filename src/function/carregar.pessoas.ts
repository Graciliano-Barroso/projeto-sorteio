import fs from "fs";
import Pessoa from "../model/Pessoa";


export default function carregarPessoas(arquivo: string): Pessoa[] {
    const conteudo = fs.readFileSync(arquivo, "utf-8");
    const linhas = conteudo.split("\n");
    
    
    const pessoas = linhas
        .filter((linha) => linha.trim().length > 0)
        .map((linha) => {
            const [nome, email] = linha.split(";").map(campo => campo.trim());
            return new Pessoa(nome, email);
        });
        
    return pessoas;
}