export function inspecionarObjeto(objeto: any): void {
    console.log("=== Introspecção do Objeto ===");
    console.log("Classe:", objeto.constructor.name);
    console.log("Atributos da Instância:", Object.keys(objeto).join(', '));
    
    const metodos = Object.getOwnPropertyNames(Object.getPrototypeOf(objeto))
        .filter((prop) => prop !== 'constructor' && typeof objeto[prop] === 'function');
        
    console.log("Métodos da Classe:", metodos.join(', '));
}
