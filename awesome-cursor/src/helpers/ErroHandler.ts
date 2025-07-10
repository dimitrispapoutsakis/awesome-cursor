class ErrorHandler {
	private colorProp: string = '';
	private dynamicColorProp: boolean = true;

	public setColorProp = (color: string) => {
		this.colorProp = color;
		return this;
	};

	public setDynamicColorProp = (dynamicColor: boolean) => {
		this.dynamicColorProp = dynamicColor;
		return this;
	};

	public init = () => {
		this.handleColorProps();
	};

	private handleColorProps = () => {
		if (this.colorProp && this.dynamicColorProp) {
			throw new Error(`"color" and "dynamicColor" cannot be used together`);
		}
	};
}

export default ErrorHandler;
