class State {
	mouseX = 0;
	mouseY = 0;
	cursorX = 0;
	cursorY = 0;
	awesomeCursorEl: HTMLElement | null = null;
	awesomeCursorInnerEl: HTMLElement | null = null;
	iosPointerActive = false;
}

export default new State();
