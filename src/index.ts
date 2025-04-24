import carregarPessoas from "./function/carregar.pessoas";
import sortearAzarado from "./function/sortear-azarado";
import terminal from "./ui/terminal";

const pessoas = carregarPessoas("src/data/dados.csv");

const azarado = sortearAzarado(pessoas);

terminal.clear();

terminal("\nO").brightRed(" AZARADO ");
terminal.bold.brightGreen(" MAIS SORTUDO").white(" é: \n");
terminal.brightYellow(azarado.toString());
terminal("\n\n🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉");
console.log();
