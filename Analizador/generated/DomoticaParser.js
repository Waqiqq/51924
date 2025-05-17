// Generated from c:/Users/User/Analizador/Domotica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DomoticaListener from './DomoticaListener.js';
import DomoticaVisitor from './DomoticaVisitor.js';

const serializedATN = [4,1,16,73,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,26,8,
0,11,0,12,0,27,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,
4,1,4,1,4,3,4,47,8,4,1,5,1,5,3,5,51,8,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,3,8,
60,8,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,0,0,12,0,
2,4,6,8,10,12,14,16,18,20,22,0,1,1,0,7,8,66,0,25,1,0,0,0,2,29,1,0,0,0,4,
35,1,0,0,0,6,39,1,0,0,0,8,46,1,0,0,0,10,50,1,0,0,0,12,52,1,0,0,0,14,54,1,
0,0,0,16,59,1,0,0,0,18,61,1,0,0,0,20,64,1,0,0,0,22,67,1,0,0,0,24,26,3,2,
1,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,1,1,0,0,0,
29,30,5,1,0,0,30,31,3,4,2,0,31,32,5,2,0,0,32,33,3,14,7,0,33,34,5,13,0,0,
34,3,1,0,0,0,35,36,3,6,3,0,36,37,3,8,4,0,37,38,3,10,5,0,38,5,1,0,0,0,39,
40,5,15,0,0,40,7,1,0,0,0,41,47,5,3,0,0,42,43,5,4,0,0,43,47,5,6,0,0,44,45,
5,5,0,0,45,47,5,6,0,0,46,41,1,0,0,0,46,42,1,0,0,0,46,44,1,0,0,0,47,9,1,0,
0,0,48,51,3,12,6,0,49,51,5,14,0,0,50,48,1,0,0,0,50,49,1,0,0,0,51,11,1,0,
0,0,52,53,7,0,0,0,53,13,1,0,0,0,54,55,3,16,8,0,55,15,1,0,0,0,56,60,3,18,
9,0,57,60,3,20,10,0,58,60,3,22,11,0,59,56,1,0,0,0,59,57,1,0,0,0,59,58,1,
0,0,0,60,17,1,0,0,0,61,62,5,9,0,0,62,63,3,6,3,0,63,19,1,0,0,0,64,65,5,10,
0,0,65,66,3,6,3,0,66,21,1,0,0,0,67,68,5,11,0,0,68,69,3,6,3,0,69,70,5,12,
0,0,70,71,5,14,0,0,71,23,1,0,0,0,4,27,46,50,59];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DomoticaParser extends antlr4.Parser {

    static grammarFileName = "Domotica.g4";
    static literalNames = [ null, "'cuando'", "'entonces'", "'es'", "'mayor'", 
                            "'menor'", "'que'", "'encendido'", "'apagado'", 
                            "'activar'", "'desactivar'", "'ajustar'", "'a'", 
                            "';'" ];
    static symbolicNames = [ null, "CUANDO", "ENTONCES", "ES", "MAYOR", 
                             "MENOR", "QUE", "ENCENDIDO", "APAGADO", "ACTIVAR", 
                             "DESACTIVAR", "AJUSTAR", "A", "PUNTOYCOMA", 
                             "NUMERO", "ID", "WS" ];
    static ruleNames = [ "programa", "regla", "condicion", "nombre_dispositivo", 
                         "estado_condicion", "valor_condicion", "estado", 
                         "accion", "accion_simple", "activar", "desactivar", 
                         "ajustar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DomoticaParser.ruleNames;
        this.literalNames = DomoticaParser.literalNames;
        this.symbolicNames = DomoticaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DomoticaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.regla();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regla() {
	    let localctx = new ReglaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DomoticaParser.RULE_regla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(DomoticaParser.CUANDO);
	        this.state = 30;
	        this.condicion();
	        this.state = 31;
	        this.match(DomoticaParser.ENTONCES);
	        this.state = 32;
	        this.accion();
	        this.state = 33;
	        this.match(DomoticaParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DomoticaParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.nombre_dispositivo();
	        this.state = 36;
	        this.estado_condicion();
	        this.state = 37;
	        this.valor_condicion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre_dispositivo() {
	    let localctx = new Nombre_dispositivoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DomoticaParser.RULE_nombre_dispositivo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(DomoticaParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado_condicion() {
	    let localctx = new Estado_condicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DomoticaParser.RULE_estado_condicion);
	    try {
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.match(DomoticaParser.ES);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.match(DomoticaParser.MAYOR);
	            this.state = 43;
	            this.match(DomoticaParser.QUE);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.match(DomoticaParser.MENOR);
	            this.state = 45;
	            this.match(DomoticaParser.QUE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor_condicion() {
	    let localctx = new Valor_condicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DomoticaParser.RULE_valor_condicion);
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.estado();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.match(DomoticaParser.NUMERO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DomoticaParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DomoticaParser.RULE_accion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.accion_simple();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion_simple() {
	    let localctx = new Accion_simpleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DomoticaParser.RULE_accion_simple);
	    try {
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.activar();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.desactivar();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 58;
	            this.ajustar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	activar() {
	    let localctx = new ActivarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DomoticaParser.RULE_activar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(DomoticaParser.ACTIVAR);
	        this.state = 62;
	        this.nombre_dispositivo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	desactivar() {
	    let localctx = new DesactivarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DomoticaParser.RULE_desactivar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(DomoticaParser.DESACTIVAR);
	        this.state = 65;
	        this.nombre_dispositivo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ajustar() {
	    let localctx = new AjustarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DomoticaParser.RULE_ajustar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(DomoticaParser.AJUSTAR);
	        this.state = 68;
	        this.nombre_dispositivo();
	        this.state = 69;
	        this.match(DomoticaParser.A);
	        this.state = 70;
	        this.match(DomoticaParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DomoticaParser.EOF = antlr4.Token.EOF;
DomoticaParser.CUANDO = 1;
DomoticaParser.ENTONCES = 2;
DomoticaParser.ES = 3;
DomoticaParser.MAYOR = 4;
DomoticaParser.MENOR = 5;
DomoticaParser.QUE = 6;
DomoticaParser.ENCENDIDO = 7;
DomoticaParser.APAGADO = 8;
DomoticaParser.ACTIVAR = 9;
DomoticaParser.DESACTIVAR = 10;
DomoticaParser.AJUSTAR = 11;
DomoticaParser.A = 12;
DomoticaParser.PUNTOYCOMA = 13;
DomoticaParser.NUMERO = 14;
DomoticaParser.ID = 15;
DomoticaParser.WS = 16;

DomoticaParser.RULE_programa = 0;
DomoticaParser.RULE_regla = 1;
DomoticaParser.RULE_condicion = 2;
DomoticaParser.RULE_nombre_dispositivo = 3;
DomoticaParser.RULE_estado_condicion = 4;
DomoticaParser.RULE_valor_condicion = 5;
DomoticaParser.RULE_estado = 6;
DomoticaParser.RULE_accion = 7;
DomoticaParser.RULE_accion_simple = 8;
DomoticaParser.RULE_activar = 9;
DomoticaParser.RULE_desactivar = 10;
DomoticaParser.RULE_ajustar = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DomoticaParser.RULE_programa;
    }

	regla = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReglaContext);
	    } else {
	        return this.getTypedRuleContext(ReglaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DomoticaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReglaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DomoticaParser.RULE_regla;
    }

	CUANDO() {
	    return this.getToken(DomoticaParser.CUANDO, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ENTONCES() {
	    return this.getToken(DomoticaParser.ENTONCES, 0);
	};

	accion() {
	    return this.getTypedRuleContext(AccionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(DomoticaParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.enterRegla(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.exitRegla(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DomoticaVisitor ) {
	        return visitor.visitRegla(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DomoticaParser.RULE_condicion;
    }

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	estado_condicion() {
	    return this.getTypedRuleContext(Estado_condicionContext,0);
	};

	valor_condicion() {
	    return this.getTypedRuleContext(Valor_condicionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DomoticaVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Nombre_dispositivoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DomoticaParser.RULE_nombre_dispositivo;
    }

	ID() {
	    return this.getToken(DomoticaParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.enterNombre_dispositivo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.exitNombre_dispositivo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DomoticaVisitor ) {
	        return visitor.visitNombre_dispositivo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Estado_condicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DomoticaParser.RULE_estado_condicion;
    }

	ES() {
	    return this.getToken(DomoticaParser.ES, 0);
	};

	MAYOR() {
	    return this.getToken(DomoticaParser.MAYOR, 0);
	};

	QUE() {
	    return this.getToken(DomoticaParser.QUE, 0);
	};

	MENOR() {
	    return this.getToken(DomoticaParser.MENOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.enterEstado_condicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.exitEstado_condicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DomoticaVisitor ) {
	        return visitor.visitEstado_condicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Valor_condicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DomoticaParser.RULE_valor_condicion;
    }

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	NUMERO() {
	    return this.getToken(DomoticaParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.enterValor_condicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.exitValor_condicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DomoticaVisitor ) {
	        return visitor.visitValor_condicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DomoticaParser.RULE_estado;
    }

	ENCENDIDO() {
	    return this.getToken(DomoticaParser.ENCENDIDO, 0);
	};

	APAGADO() {
	    return this.getToken(DomoticaParser.APAGADO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DomoticaVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DomoticaParser.RULE_accion;
    }

	accion_simple() {
	    return this.getTypedRuleContext(Accion_simpleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DomoticaVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Accion_simpleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DomoticaParser.RULE_accion_simple;
    }

	activar() {
	    return this.getTypedRuleContext(ActivarContext,0);
	};

	desactivar() {
	    return this.getTypedRuleContext(DesactivarContext,0);
	};

	ajustar() {
	    return this.getTypedRuleContext(AjustarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.enterAccion_simple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.exitAccion_simple(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DomoticaVisitor ) {
	        return visitor.visitAccion_simple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActivarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DomoticaParser.RULE_activar;
    }

	ACTIVAR() {
	    return this.getToken(DomoticaParser.ACTIVAR, 0);
	};

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.enterActivar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.exitActivar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DomoticaVisitor ) {
	        return visitor.visitActivar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DesactivarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DomoticaParser.RULE_desactivar;
    }

	DESACTIVAR() {
	    return this.getToken(DomoticaParser.DESACTIVAR, 0);
	};

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.enterDesactivar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.exitDesactivar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DomoticaVisitor ) {
	        return visitor.visitDesactivar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AjustarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DomoticaParser.RULE_ajustar;
    }

	AJUSTAR() {
	    return this.getToken(DomoticaParser.AJUSTAR, 0);
	};

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	A() {
	    return this.getToken(DomoticaParser.A, 0);
	};

	NUMERO() {
	    return this.getToken(DomoticaParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.enterAjustar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DomoticaListener ) {
	        listener.exitAjustar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DomoticaVisitor ) {
	        return visitor.visitAjustar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DomoticaParser.ProgramaContext = ProgramaContext; 
DomoticaParser.ReglaContext = ReglaContext; 
DomoticaParser.CondicionContext = CondicionContext; 
DomoticaParser.Nombre_dispositivoContext = Nombre_dispositivoContext; 
DomoticaParser.Estado_condicionContext = Estado_condicionContext; 
DomoticaParser.Valor_condicionContext = Valor_condicionContext; 
DomoticaParser.EstadoContext = EstadoContext; 
DomoticaParser.AccionContext = AccionContext; 
DomoticaParser.Accion_simpleContext = Accion_simpleContext; 
DomoticaParser.ActivarContext = ActivarContext; 
DomoticaParser.DesactivarContext = DesactivarContext; 
DomoticaParser.AjustarContext = AjustarContext; 
