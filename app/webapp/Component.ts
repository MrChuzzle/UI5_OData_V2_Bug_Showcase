import UIComponent from "sap/ui/core/UIComponent";

// noinspection JSAnnotator,JSValidateJSDoc
/**
 * @namespace bug.showcase
 */
export default class Component extends UIComponent {
	public static metadata = {
		manifest: "json",
	};

	private contentDensityClass: string;

	/**
	 * Components initialization
	 * @override
	 */
	public init(): void {
		// call the base component's init function
		super.init();

		// create the views based on the url/hash
		this.getRouter().initialize();
	}
}
