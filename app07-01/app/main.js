"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    app_routes_1.APP_ROUTER_PROVIDERS
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map