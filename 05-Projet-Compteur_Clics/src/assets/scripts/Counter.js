class Counter {
    /**
     * @param {HTMLElement} element
     * @param {number} initialCount
     * @param {number} initialStep
     */
    constructor(element, initialCount = 0, initialStep = 1) {
        this.listeners = [];
        this.element = element;
        this.count = initialCount;
        this.step = initialStep;
    }

    /**
     * @param {HTMLElement} element
     */
    set element(element) {
        if (!(element instanceof HTMLElement)) throw "element should not a HTMLElement.";
        this._element = element;
    }

    /**
     * @param {number} count
     */
    set count(count) {
        if (isNaN(count)) throw "count should be of type number.";
        this._count = count;
        this._element.textContent = count;
        this.listeners.forEach((listener) => listener(count));
    }

    /**
     * @param {number} step
     */
    set step(step) {
        step = parseInt(step);
        if (isNaN(step)) throw "step should be of type number.";
        this._step = step;
    }

    /**
     * @param {HTMLButtonElement} button
     */
    add(button) {
        if (!(button instanceof HTMLButtonElement)) throw "button should be a HTMLButtonElement.";
        button.addEventListener("click", () => (this.count = this._count + this._step));
    }

    /**
     * @param {HTMLButtonElement} button
     */
    subtract(button) {
        if (!(button instanceof HTMLButtonElement)) throw "button should be a HTMLButtonElement.";
        button.addEventListener("click", () => (this.count = this._count - this._step));
    }

    /**
     * @param {HTMLButtonElement} button
     */
    reset(button) {
        if (!(button instanceof HTMLButtonElement)) throw "button should be a HTMLButtonElement.";
        button.addEventListener("click", () => (this.count = 0));
    }

    /**
     *
     * @param {HTMLInputElement} input
     */
    changeStep(input) {
        input.addEventListener("change", (event) => (this.step = event.target.value));
    }

    addListener(listenerFunction) {
        this.listeners.push(listenerFunction);
    }
}

export default Counter;
