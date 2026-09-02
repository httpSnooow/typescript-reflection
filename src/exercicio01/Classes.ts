export abstract class ItemSistema {
    constructor(public titulo: string, public preco: number) {}
}

export class Produto extends ItemSistema {
    constructor(titulo: string, preco: number, public categoria: string) {
        super(titulo, preco);
    }

    aplicarDesconto(porcentagem: number): void {
        this.preco -= this.preco * (porcentagem / 100);
    }
}

export class ItemTerceiros {
    constructor(public preco: number, public fornecedor: string) {}

    aplicarDesconto(porcentagem: number): void {
        this.preco -= this.preco * (porcentagem / 100);
    }
}

export class RelatorioLog {
    constructor(public data: string, public mensagem: string) {}
}

export function processarReajusteUniversal(objeto: any, percentualDesconto: number): void {
    if ('preco' in objeto) {
        console.log(`Preço atual: R$ ${objeto.preco}`);
        
        if ('aplicarDesconto' in objeto && typeof objeto.aplicarDesconto === 'function') {
            objeto.aplicarDesconto(percentualDesconto);
        } else {
            objeto.preco = objeto.preco * (1 - (percentualDesconto / 100));
        }
        
        console.log(`Preço atualizado: R$ ${objeto.preco}`);
    } else {
        const nomeClasse = objeto.constructor ? objeto.constructor.name : 'Desconhecida';
        console.log(`[Aviso] O objeto da classe ${nomeClasse} não é compatível com reajuste de preços.`);
    }
}
