export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string) {
        const getter = function() {
            const elemento = document.querySelector(seletor);
            console.log(`Buscando elemento do DOM com seletor ${seletor} para
                inserir em ${propertyKey}`);
            return elemento;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        );
    }
}