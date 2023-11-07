const Log = require('./Log.js');

class BrowserUtil {

    static #TABS = {};

    static get tabs() {
        return this.#TABS;
    }

    static get tabCount() {
        return Object.keys(this.#TABS).length
    }

    /**
     * Resets the browser to a clean, empty state.
     * Note that this does not undo a maximize
     */
    static async reset() {
        Log.info("Resetting browser to initial state");

        // Iterate through all tabs but the first and close them,
        // then switch back to the first tab and put it in the 
        // intial "Data" state
        const handles = await browser.getWindowHandles();
        for (var i = 1; i < handles.length; i++) {
            await browser.switchToWindow(handles[i]);
            await browser.closeWindow();
        }
        await browser.switchToWindow(handles[0]);
        await browser.url("Data:,");

        // Clear managed tabs 
        this.#TABS = {};
    }

    /**
     * Opens a new managed tab
     * @param {TabDefinition} tabDefinition A predefined tab definition 
     */
    static async openTab(tabDefinition) {
        var name = tabDefinition.name;
        var entryUrl = tabDefinition.entryUrl;

        // Make sure a tab with this name doesn't already exist
        if (this.#TABS[name] != null)
            throw new Error('A tab with this name already exists!');

        // Nr of tabs that already exist
        var tabCount = this.tabCount;

        // If we haven't opened a tab yet we use the initial "Data" tab for our first tab
        // Otherwise we actually open a new browser tab. Note that we use a workaround for the 
        // third and up tab as newWindow will not open more than 2 tabs.
        // In all cases the windowHandle is stored on the tab object itself
        Log.info(`Opening tab Nr ${tabCount + 1} named "${name}" to url: "${entryUrl}"`);
        if (tabCount == 0) {
            await browser.navigateTo(entryUrl);
            tabDefinition.windowHandle = await browser.getWindowHandle();
        }
        else if (tabCount == 1) {
            await browser.newWindow(entryUrl);
            tabDefinition.windowHandle = await browser.getWindowHandle();
        }
        else {
            tabDefinition.windowHandle = await browser.createWindow("tab").handle;
            await browser.switchToWindow(tabDefinition.windowHandle);
            await browser.navigateTo(entryUrl);
        }

        // Add the tab to our managed tabs
        this.#TABS[name] = tabDefinition;
    }

    /**
     * Switches to a managed tab and returns it
     * @param {string} name The name of the tab to switch to
     */
    static async switchToTab(name) {
        // Make sure a tab with this name exists
        if (this.#TABS[name] == null)
            throw new Error('A tab with this name does not exist!');

        // Compare the current window handle to the managed tabs window handle
        // Only if they differ do we need to actually switch
        var currentHandle = await browser.getWindowHandle();
        var newHandle = this.#TABS[name].windowHandle;
        if (currentHandle != newHandle) {
            Log.info(`Switching to tab named "${name}"`)
            await browser.switchToWindow(newHandle);
        }
    }

    /**
     * Switches to a managed tab and returns it
     * @param {string} name The name of the tab to switch to
     */
    static async switchAndGetTab(name) {
        this.switchToTab(name);
        return await this.#TABS[name];
    }

    /**
     * Retrieves a managed tab by name
     * @param {string} name Name of the managed tab 
     */
    static async getTab(name) {
        // Make sure a tab with this name exists
        if (this.#TABS[name] == null)
            throw new Error('A tab with this name does not exist!');

        return await this.#TABS[name];
    }

    /**
     * Maximizes the browser window
     */
    static async maximize() {
        Log.info("Maximizing the browser window");
        await browser.maximizeWindow();
    }

    /**
     * Refresh tab
     * @param {tabname} tabName Name of the tab to retrieve refresh. Defaults to current tab
     */
    static async refreshTab(tabName = null) {
        if (tabName == null)
            Log.info("Refreshing current tab");
        else {
            Log.info(`Refreshing tab named ${tabName}`);
            this.switchToTab(tabName);
        }
        await browser.refresh();
    }

    /**
    Retrieve url of tab
    @param {string} tabName Name of the tab to retrieve url from. Defaults to current tab
    */
    static async getTabUrl(tabName = null) {
        if (tabName == null)
            Log.info("Getting url of current tab");
        else {
            Log.info(`Getting url of tab named ${tabName}`);
            this.switchToTab(tabName);
        }
        return await browser.getUrl();
    }

    /**
     * Retrieve title of tab
     * @param {string} tabName Name of the tab to retrieve title of. Defaults to current tab
     */
    static async getTabTitle(tabName = null) {
        if (tabName == null)
            Log.info("Getting title of current tab.");
        else {
            Log.info(`Getting title of tab named ${tabName}`);
            this.switchToTab(tabName);
        }
        return await browser.getTitle();
    }

    /**
    Wait a given number of seconds
    @param {int} seconds for which we want script to wait
    */
    static async wait(seconds) {
        Log.info(`Waiting for '${seconds.toString()} seconds'`);
        await browser.pause(seconds * 1000);
    }

    /**
     * Wait until condition is satified
     * @param {*} condition - A function. Evaluates to true or false. 
     * @param {*} timeOut - time (Seconds) to wait for condition to be true
     * @param {*} timeOutMessage - Message to display when timeout is reached
     * @param {*} description - description of the condition we are waiting for
     * @param {*} [interval=500] - value in milliseconds, time interval between condition checks
     */
    static async waitUntil(condition, timeOut, timeOutMessage, description, timeInterval = 500) {
        Log.info(`Waiting for condition: ${description}`)
        await browser.waitUntil(
            condition,
            {
                timeout: timeOut * 1000,
                timeoutMsg: timeOutMessage,
                interval: timeInterval
            }
        );
    }

    /**
     * Inject a snippet of JavaScript into the page for execution.
     * @param {Function} scriptFunction - script snippet function ()=>{}
     * @param {*} scriptParam - script parameters
     * @param {string} description - description of the JavaScript snippet
     */
    static async execute(scriptFunction, scriptParam, description) {
        Log.info(`Executing script on browser: ${description}`)
        await browser.execute(scriptFunction, scriptParam)
    }

    /**
     * Switch to frame
     * @param {Object} element the frame we want to switch to
     * @param {String} description for the element that we want to switch to
     */
    static async switchToFrame(element, description) {
        Log.info(`Switching to frame: ${description}`);
        await browser.switchToFrame(element);
    }

    /**
     * Hold down a key until releaseKey() action is called. 
     * Example use case is to hold down the Shift or Ctrl key while clicking an element
     * @param {String} keyValue - unicode code point, ex '\uE008'="Shift"; for supported keys see https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions
     */
    static async holdDownKey(keyValue) {
        Log.info(`Hold key down: ${keyValue.codePointAt(0).toString(16)}`)
        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyDown', value: keyValue }],
        }]);
    }

    /**
     * Release keys from being held down. Use in conjuction with holdDownKey()
     * @param {String} keyValue - unicode code point, ex '\uE008'="Shift"; for supported keys see https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions
     */
    static async releaseKey(keyValue) {
        Log.info(`Release key hold: ${keyValue.codePointAt(0).toString(16)}`)
        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyUp', value: keyValue }],
        }]);
    }

}

module.exports = BrowserUtil;
