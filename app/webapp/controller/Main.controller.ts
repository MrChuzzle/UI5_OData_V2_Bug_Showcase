import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace bug.showcase.controller
 */
export default class Main extends BaseController {
	public onInit() {
		const oRouter = this.getRouter();

		oRouter
			.getRoute("main")
			.attachPatternMatched(this._onRouteMatched, this);

	}

	public onPressSaveBatchMode() {
		const oModel = this.getODataModel();

		if (oModel.hasPendingChanges()) {

			oModel.setUseBatch(true);

			oModel.submitChanges({
				success: () => {
					MessageToast.show("Changes saved");
				},
				error: () => {
					MessageToast.show("Changes not saved");
				},
			});
		} else {
			MessageToast.show("No changes! Make some changes first");
		}
	}

	public onPressSaveSingleMode() {
		const oModel = this.getODataModel();

		if (oModel.hasPendingChanges()) {

			oModel.setUseBatch(false);

			oModel.submitChanges({
				success: () => {
					MessageToast.show("Changes saved");
				},
				error: () => {
					MessageToast.show("Changes not saved");
				},
			});

		} else {
			MessageToast.show("No changes! Make some changes first");
		}
	}

	private _onRouteMatched(oEvent) {
		const oModel = this.getODataModel(),
			sPath = oModel.createKey("/Example", {
				ID: "bc5e5e46-03b9-4a6d-8674-ce0587df6e87",
			});

		this.getView().bindElement(sPath);
	}
}
