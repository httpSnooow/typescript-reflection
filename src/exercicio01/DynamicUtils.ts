export function alterarAtributo(objeto: any, nomeAtributo: string, novoValor: any): boolean {
    if (nomeAtributo in objeto) {
        objeto[nomeAtributo] = novoValor;
        return true;
    }
    console.log(`[Aviso] Atributo ${nomeAtributo} não encontrado.`);
    return false;
}

export function invocarMetodo(objeto: any, nomeMetodo: string, ...args: any[]): any {
    if (nomeMetodo in objeto && typeof objeto[nomeMetodo] === "function") {
        return objeto[nomeMetodo](...args);
    }
    console.log(`[Aviso] Método ${nomeMetodo} não é uma função válida ou não foi encontrado.`);
    return undefined;
}
