import * as Gdk from 'gdk';
import * as Gio from 'gio';
import * as GLib from 'glib';
import * as GObject from 'gobject';
import * as Gtk from 'gtk';
import { registerGObjectClass } from 'src/gjs';

const Me = imports.misc.extensionUtils.getCurrentExtension();

function log(...args: any[]) {
    const fields = { MESSAGE: `${args.join(', ')}` };
    const domain = 'Destroy Extension';

    GLib.log_structured(domain, GLib.LogLevelFlags.LEVEL_MESSAGE, fields);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
function init() {
    log("INITIALIZING PREFERENCES");
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function buildPrefsWidget() {
    log("Prefs widget");
    throw new Error("Not implemented");
}
