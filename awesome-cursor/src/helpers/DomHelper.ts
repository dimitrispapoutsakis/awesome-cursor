import { areNumbersClose } from '@utils/math.util';

interface ICaretAndCharInfo {
	character: string;
	charWidth: number;
	charHeight: number;
	height: number;
	left: number;
	top: number;
	offset: number;
	node: Node;
	range: Range;
}

class DomHelper {
	public getCaretAndCharInfo(x: number, y: number): ICaretAndCharInfo | null {
		const range = document.caretRangeFromPoint(x, y);
		if (!range) return null;

		const node = range.startContainer;
		/* @ts-ignore */
		const textLength = node?.textContent?.length ?? 0;
		const offset =
			textLength === range.endOffset ? range.endOffset - 5 : range.startOffset;

		// Get the character at this position
		const text = node.textContent;
		const char = text?.[offset];

		if (!char) return null;

		// Measure the character width and height
		const safeOffset = Math.min(offset, textLength - 1);
		const safeEnd = Math.min(offset + 1, textLength);
		const tempRange = range.cloneRange();

		if (node.nodeType === Node.TEXT_NODE) {
			const safeStart = Math.max(0, Math.min(offset, textLength));
			tempRange.setStart(node, safeStart);
			tempRange.setEnd(node, safeEnd);
		} else if (node.nodeType === Node.ELEMENT_NODE) {
			const childCount = node.childNodes.length;
			const safeStart = Math.max(0, Math.min(offset, childCount));
			const safeEnd = Math.max(safeStart, Math.min(offset + 1, childCount));
			tempRange.setStart(node, safeStart);
			tempRange.setEnd(node, safeEnd);
		}

		const rect = tempRange.getBoundingClientRect();

		return {
			character: char,
			charWidth: rect.width,
			charHeight: rect.height,
			height: rect.height,
			left: rect.left,
			top: rect.top,
			offset: offset,
			node: node,
			range: range,
		};
	}

	public getHoveringTextElInfo = (x: number, y: number) => {
		let hoveringTextElHeight: number | null = null;
		const caretAndCharInfo = this.getCaretAndCharInfo(x, y);

		if (this.isTextNode(caretAndCharInfo?.node as Node)) {
			const { x: textX, y: textY } =
				caretAndCharInfo?.range?.getBoundingClientRect() as DOMRect;
			const isHoveringX = areNumbersClose(
				textX,
				x,
				caretAndCharInfo?.charWidth as number,
			);
			const isHoveringY = areNumbersClose(
				textY,
				y,
				caretAndCharInfo?.charHeight as number,
			);

			if (isHoveringX && isHoveringY) {
				hoveringTextElHeight = caretAndCharInfo?.range?.getBoundingClientRect()
					.height as number;
			}
		}

		return {
			height: hoveringTextElHeight,
			el: caretAndCharInfo?.node,
		};
	};
	public isLinkEl = (el: HTMLElement) => el.tagName.toLowerCase() === 'a';
	public hasText = (el: HTMLElement) => el.innerText.length > 0;
	public isTextNode = (node: Node) => node && node.nodeType === Node.TEXT_NODE;
}

export default DomHelper;
