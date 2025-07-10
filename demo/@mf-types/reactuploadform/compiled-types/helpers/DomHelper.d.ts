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
declare class DomHelper {
    getCaretAndCharInfo(x: number, y: number): ICaretAndCharInfo | null;
    getHoveringTextElInfo: (x: number, y: number) => {
        height: number | null;
        el: Node | undefined;
    };
    isLinkEl: (el: HTMLElement) => boolean;
    hasText: (el: HTMLElement) => boolean;
    isTextNode: (node: Node) => boolean;
}
export default DomHelper;
