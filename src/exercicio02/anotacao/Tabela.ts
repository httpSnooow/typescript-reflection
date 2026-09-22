import "reflect-metadata";

export const TABELA_METADATA_KEY = Symbol("tabela");

export function Tabela(nome?: string): ClassDecorator {
    return (target) => {
        const nomeTabela = nome?.trim() || target.name.toLowerCase();
        Reflect.defineMetadata(TABELA_METADATA_KEY, nomeTabela, target);
    };
}
