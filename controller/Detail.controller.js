sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.orders.ordersapp.controller.Detail", {
		
		onInit: function () {
			// Pegando a informação da Router
			var oRouter=sap.ui.core.UIComponent.getRouterFor(this);

			// Validando/Match a Router Details
			oRouter.getRoute("Detail").attachMatched(this._onload,this);
		},

			// Método personalizado para bindar os elementos usando o evento Arguments
		_onload:function(oEvent){
			var oArgs, oView;
			oArgs=oEvent.getParameter("arguments");
			oView=this.getView();
			
			oView.bindElement({  
				path: "/ListaSet("+oArgs.id+")",
				event:{
                    dataRequester:function(){oView.setBusy(true)},
                    dataReceived:function(){oView.setBusy(false)},
                },
			
			});
		}, 
        
		oNavButton_press:function(oEvent){
			var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteHome");
		},
	});
});