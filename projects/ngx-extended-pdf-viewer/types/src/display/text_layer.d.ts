export type PageViewport = import("./display_utils").PageViewport;
export type TextContent = import("./api").TextContent;
export type TextLayerParameters = {
    /**
     * - Text content to
     * render, i.e. the value returned by the page's `streamTextContent` or
     * `getTextContent` method.
     */
    textContentSource: ReadableStream | TextContent;
    /**
     * - The DOM node that will contain the text
     * runs.
     */
    container: HTMLElement;
    /**
     * - The target viewport to properly layout
     * the text runs.
     */
    viewport: PageViewport;
};
export type TextLayerUpdateParameters = {
    /**
     * - The target viewport to properly layout
     * the text runs.
     */
    viewport: PageViewport;
    /**
     * - Callback invoked before the textLayer is
     * updated in the DOM.
     */
    onBefore?: Function | undefined;
};
export function renderTextLayer(...args: any[]): {
    promise: Promise<any>;
    textDivs: HTMLElement[];
    textContentItemsStr: string[];
} | undefined;
export class TextLayer {
    static "__#45@#ascentCache": Map<any, any>;
    static "__#45@#canvasContexts": Map<any, any>;
    static "__#45@#minFontSize": null;
    static "__#45@#pendingTextLayers": Set<any>;
    /**
     * Clean-up global textLayer data.
     * @returns {undefined}
     */
    static cleanup(): undefined;
    static "__#45@#getCtx"(lang?: null): any;
    /**
     * Compute the minimum font size enforced by the browser.
     */
    static "__#45@#ensureMinFontSizeComputed"(): void;
    static "__#45@#getAscent"(fontFamily: any, lang: any): any;
    /**
     * @param {TextLayerParameters} options
     */
    constructor({ textContentSource, container, viewport }: TextLayerParameters);
    /**
     * Render the textLayer.
     * @returns {Promise}
     */
    render(): Promise<any>;
    /**
     * Update a previously rendered textLayer, if necessary.
     * @param {TextLayerUpdateParameters} options
     * @returns {undefined}
     */
    update({ viewport, onBefore }: TextLayerUpdateParameters): undefined;
    /**
     * Cancel rendering of the textLayer.
     * @returns {undefined}
     */
    cancel(): undefined;
    /**
     * @type {Array<HTMLElement>} HTML elements that correspond to the text items
     *   of the textContent input.
     *   This is output and will initially be set to an empty array.
     */
    get textDivs(): HTMLElement[];
    /**
     * @type {Array<string>} Strings that correspond to the `str` property of
     *   the text items of the textContent input.
     *   This is output and will initially be set to an empty array
     */
    get textContentItemsStr(): string[];
    #private;
}
export function updateTextLayer(): void;
