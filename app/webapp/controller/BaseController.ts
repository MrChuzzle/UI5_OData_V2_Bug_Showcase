import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import AppComponent from "../Component";
import Model from "sap/ui/model/Model";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Router from "sap/ui/core/routing/Router";
import JSONModel from "sap/ui/model/json/JSONModel";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";

/**
 * @namespace bug.showcase.controller
 */
export default abstract class BaseController extends Controller {

	/**
	 * Convenience method for accessing the component of the controller's view.
	 * @returns The component of the controller's view
	 */
	public getOwnerComponent(): AppComponent {
		return super.getOwnerComponent() as AppComponent;
	}

	/**
	 * Convenience method to get the components' router instance.
	 * @returns The router instance
	 */
	public getRouter(): Router {
		return UIComponent.getRouterFor(this);
	}

	/**
	 * Returns the translated text for the provided i18n key
	 * @param {String} sTextKey The i18n key for the requested text
	 * @param {Array} [aPlaceholders] An array which can contain operands for the placeholders
	 * @return {String} The translated text for the provided i18n key
	 */
	public getResourceText(sTextKey, aPlaceholders?): string {
		return (
			(
				this.getModel("i18n") as ResourceModel
			)?.getResourceBundle() as ResourceBundle
		)?.getText(sTextKey, aPlaceholders);
	}

	/**
	 * Convenience method for getting the view model by name in every controller of the application.
	 * @param [sName] The model name
	 * @returns The model instance
	 */
	public getModel(sName?: string): Model {
		return this.getView().getModel(sName);
	}

	/**
	 * Convenience method for getting the view JSON model by name in every controller of the application.
	 * @param [sName] The model name
	 * @returns The JSON model instance
	 */
	public getJSONModel(sName?: string): JSONModel {
		return this.getModel(sName) as JSONModel;
	}

	/**
	 * Convenience method for getting the view OData model by name in every controller of the application.
	 * @param [sName] The model name
	 * @returns The OData model instance
	 */
	public getODataModel(sName?: string): ODataModel {
		return this.getModel(sName) as ODataModel;
	}

	/**
	 * Convenience method for setting the view model in every controller of the application.
	 * @param oModel The model instance
	 * @param [sName] The model name
	 * @returns The current base controller instance
	 */
	public setModel(oModel: Model, sName?: string): BaseController {
		this.getView().setModel(oModel, sName);
		return this;
	}
}
