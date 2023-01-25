sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/orders/ordersapp/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.orders.ordersapp.Component", {

		metadata: {
			manifest: "json"
		},

		
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);

			this.setModel(models.createDeviceModel(), "device");

			this.getRouter().initialize();

		}
	});
});