import { Produto, ItemTerceiros, RelatorioLog, processarReajusteUniversal } from './Classes';
import { inspecionarObjeto } from './InspectorUtils';
import { alterarAtributo, invocarMetodo } from './DynamicUtils';
import { demonstrarTypeGuard } from './TypeGuards';

console.log("--- PARTE 1 e 2: Reflexão---");

const p = new Produto("Notebook", 5000, "Eletrônicos");

inspecionarObjeto(p);
console.log("");

console.log("Alterando atributo 'preco' para 4500:");
alterarAtributo(p, "preco", 4500);
console.log(`Novo preço: R$ ${p.preco}`);

console.log("\nInvocando método 'aplicarDesconto'(10%):");
invocarMetodo(p, "aplicarDesconto", 10);
console.log(`Preço com desconto: R$ ${p.preco}\n`);

const i = new ItemTerceiros(400, "Distribuidora XYZ");
const r = new RelatorioLog("2026-08-25", "Sistema iniciado");

console.log("--- PARTE 3: Duck Typing ---");
console.log("Processando Produto:");
processarReajusteUniversal(p, 10);

console.log("\nProcessando ItemTerceiros:");
processarReajusteUniversal(i, 15);

console.log("\nProcessando RelatorioLog:");
processarReajusteUniversal(r, 10);
console.log("");

console.log("--- PARTE 4: Type Guard ---");
console.log("Testando Produto com Type Guard:");
demonstrarTypeGuard(p);

console.log("\nTestando ItemTerceiros com Type Guard:");
demonstrarTypeGuard(i);

console.log("\nTestando RelatorioLog com Type Guard:");
demonstrarTypeGuard(r);

