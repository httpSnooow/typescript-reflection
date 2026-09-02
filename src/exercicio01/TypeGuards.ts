export interface Precificavel {
    preco: number;
    aplicarDesconto?: (porcentagem: number) => void;
}

export function isPrecificavel(obj: any): obj is Precificavel {
    if (obj !== null && typeof obj === 'object') {
        if ('preco' in obj && typeof obj.preco === 'number') {
            return true;
        }
    }
    return false;
}

export function demonstrarTypeGuard(obj: unknown) {
    if (isPrecificavel(obj)) {
        console.log(`O objeto é precificável. Preço: R$ ${obj.preco}`);
    } else {
        console.log(`O objeto não é compatível com a interface Precificavel.`);
    }
}
