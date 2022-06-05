const Me = imports.misc.extensionUtils.getCurrentExtension();

/** Gnome libs imports */
import * as Clutter from 'clutter';
import * as Gio from 'gio';
import * as GLib from 'glib';
/** Extension imports */
import * as St from 'st';
import { main as Main } from 'ui';
import * as GObject from 'gobject';
import { registerGObjectClass } from 'src/gjs';

const Signals = imports.signals;

// let x: St.Label;
let destroySignal: number;

@registerGObjectClass
class TestObject extends GObject.Object {

    constructor() {
        super();
    }
}

@registerGObjectClass
class SomeRandomWidget extends St.Widget {
    constructor() {
        super();
        log("Created new SomeRandomWidget");
        this.connect('destroy', () => {
            log("Destroying SomeRandomWidget");
        });
    }
}

// eslint-disable-next-line no-unused-vars
function init() {
    log('--------------');
    log('INIT EXTENSION');
    log('--------------');
}

let z: SomeRandomWidget;
// eslint-disable-next-line no-unused-vars
function enable() {
    log('----------------');
    log('ENABLE EXTENSION');
    log('----------------');

    z = new SomeRandomWidget();
    global.stage.add_child(z);

    // let t = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1000, () => {
    //     x.reactive = true;
    //     log("TIMEOUT");
    //     return GLib.SOURCE_CONTINUE;
    // });

    // x.connect(
    //     'event',
    //     (actor: Clutter.Actor, event: Clutter.Event) => {
    //         log(`\Got event ${event.type()}\n`);
    //     }
    // );

    destroySignal = z.connect('destroy', () => {
        log("\nDESTROYING SomeRandomWidget\n");
        // GLib.source_remove(t);
    });
}

function loaded(disconnect: boolean) {
    log('----------------');
    log('EXTENSION LOADED');
    log('----------------');
}

// eslint-disable-next-line no-unused-vars
function disable() {
    log('-----------------');
    log('DISABLE EXTENSION');
    log('-----------------');

    log(`\nREMOVING DESTROY SIGNAL ${destroySignal}\n`)
    z.disconnect(destroySignal);

    log('---------------------');
    log('END DISABLE EXTENSION');
    log('---------------------');
}