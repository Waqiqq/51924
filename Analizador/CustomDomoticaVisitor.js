import antlr4 from 'antlr4';
import DomoticaVisitor from './generated/DomoticaVisitor.js';

export class CustomDomoticaVisitor extends DomoticaVisitor {
    constructor(debugMode = false) {
        super();
        this.debugMode = debugMode;
    }

    visitPrograma(ctx) {
        if (this.debugMode) console.log("↪ visitPrograma");
        return ctx.regla().map(regla => this.visit(regla));
    }

    visitRegla(ctx) {
        if (this.debugMode) console.log(" ↪ visitRegla");

        const condicion = this.visit(ctx.condicion());
        const accion = this.visit(ctx.accion());

        if (condicion) {
            console.log(`✔ Se cumple la condición: ${condicion.descripcion}`);
            console.log(`➡ Ejecutando acción: ${accion.descripcion}`);
            return accion.resultado;
        } else {
            console.log(`✖ No se cumple la condición: ${condicion?.descripcion || 'N/A'}`);
        }
    }

    visitCondicion(ctx) {
        const dispositivo = ctx.nombre_dispositivo().getText();
        const operador = this.visit(ctx.estado_condicion());
        const valor = this.visit(ctx.valor_condicion());

        const descripcion = `${dispositivo} ${operador.simbolo} ${valor.valor}`;
        const resultado = this.evaluarCondicion(dispositivo, operador.simbolo, valor.valor);

        return { descripcion, resultado };
    }

    visitEstado_condicion(ctx) {
        if (ctx.ES()) return { simbolo: '==' };
        if (ctx.MAYOR()) return { simbolo: '>' };
        if (ctx.MENOR()) return { simbolo: '<' };
    }

    visitValor_condicion(ctx) {
        if (ctx.estado()) {
            return { valor: ctx.estado().getText() };
        } else if (ctx.NUMERO()) {
            return { valor: parseInt(ctx.NUMERO().getText(), 10) };
        }
    }

    visitAccion(ctx) {
        return this.visit(ctx.accion_simple());
    }

    visitActivar(ctx) {
        const dispositivo = ctx.nombre_dispositivo().getText();
        return {
            descripcion: `Activar ${dispositivo}`,
            resultado: `${dispositivo} activado`
        };
    }

    visitDesactivar(ctx) {
        const dispositivo = ctx.nombre_dispositivo().getText();
        return {
            descripcion: `Desactivar ${dispositivo}`,
            resultado: `${dispositivo} desactivado`
        };
    }

    visitAjustar(ctx) {
        const dispositivo = ctx.nombre_dispositivo().getText();
        const valor = ctx.NUMERO().getText();
        return {
            descripcion: `Ajustar ${dispositivo} a ${valor}`,
            resultado: `${dispositivo} ajustado a ${valor}`
        };
    }

    // Función de evaluación simple (a reemplazar con lógica real)
    evaluarCondicion(dispositivo, operador, valor) {
        // Simulación de estado (esto debe venir de un contexto real)
        const estados = {
            luz: "apagado",
            temperatura: 22,
            ventilador: "encendido"
        };

        const estadoActual = estados[dispositivo];

        // Comparación básica
        switch (operador) {
            case '==': return estadoActual === valor;
            case '>': return estadoActual > valor;
            case '<': return estadoActual < valor;
            default: return false;
        }
    }
}
