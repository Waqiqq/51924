import DomoticaListener from "./generated/DomoticaListener.js";

export class CustomDomoticaListener extends DomoticaListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}