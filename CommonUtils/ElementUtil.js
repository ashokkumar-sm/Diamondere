const BrowserUtil = require("./BrowserUtil");
const Log = require("./Log");

class ElementUtil {

    /**
    Click a desired element
    @param {Object} element that we want to click
    @param {String} description for the element that we want to click
    */
    static async click(element, description) {
        Log.info("Clicking '" + description + "'");
        await element.click()
    }

    /**
     * Attemp to click the element if it satisfies all of the following: exists, visible and enabled.
     * The click() event will not thow exception if the element is not clickable
     * @param {Object} element that we want to click
     * @param {String} description for the element that we want to click
     */
    static async tryClick(element, description) {
        if (element.isClickable()) {
            Log.info("Clicking '" + description + "'");
            await element.click()
        }
        else {
            Log.info("Attempted to click '" + description + "' but was unsucessful");
        }
    }

    /**
     * Force click an element through a javascript executor where 
     * a regular wdio click() api is not possible.
     * Note: Use the ElementUtil.click() whenever possible. 
     * @param {Object} element that we want to click
     * @param {String} description for the element that we want to click
     */
    // static async forceClick(element, description) {
    //     Log.info("Clicking '" + description + "'");
    //     var executeScript = function (arg) { arg.click(); };
    //     await browser.execute(executeScript, element)
    // }
       static async forceClick(element, description) {
        Log.info("Clicking '" + description + "'");
        await element.scrollIntoView(); // Ensure the element is in the viewport
        await element.waitForClickable({ timeout: 30000 }); // Wait for the element to become clickable
        await element.click();
       }

    /**
     * Make the mouse pointer hover over an element
     * @param {*} element - element that we want hover the mouse over
     * @param {*} description - description of the element
     */
    static async mouseHover(element, description) {
        Log.info(`Mouse Hover: ${description}`)
        await element.moveTo()
    }

    /**
    Find a particular element
    @param {String} locator of the element we want to find
    @param {String} description for this element
    */
    static async findElement(locator, description) {
        Log.info("Finding element '" + description + "'");
        return await browser.$(locator)
    }

    /**
    Find if an element is visible
    @param {Object} element we want to find is visible 
    */
    static async isVisible(element) {
        return await element.isDisplayed() ? true : false;
    }

    /**
     * Find if an element is clickable
     * @param {Object} element we want to find is clickable
     */
    static async isClickable(element) {
        return await element.isClickable() ? true : false;
    }

    /**
     * Find if an element is enabled
     * @param {Object} element we want to find is enabled
     */
    static async isEnabled(element) {
        return await element.isEnabled() ? true : false;
    }

    /**
     * Wait until an element is displayed
     * @param {Object} element element we want to wait to become displayed
     * @param {Number} waitTimeInSeconds wait timeout in seconds
     * @param {String} description description of the element
     * @param {boolean} reverse if true it waits for the opposite - Not exist (default: false)
     */
    static async waitForDisplayed(element, waitTimeInSeconds, description, reverse = false) {
        if (reverse) {
            Log.info("Waiting for '" + description + "' to be not displayed within " + waitTimeInSeconds + " seconds")
        }
        else {
            Log.info("Waiting for '" + description + "' to be displayed within " + waitTimeInSeconds + " seconds")
        }
        await element.waitForDisplayed({ timeout: waitTimeInSeconds * 1000 }, reverse);
    }

    /**
     * Wait until an element is clickable
     * @param {Object} element element we want to wait to become clickable
     * @param {Number} waitTimeInSeconds wait timeout in seconds 
     * @param {String} description description of the element
     * @param {boolean} reverse if true it waits for the opposite - Not exist (default: false)
     */
    static async waitForClickable(element, waitTimeInSeconds, description, reverse = false) {
        if (reverse) {
            Log.info("Waiting for '" + description + "' to be not clickable within " + waitTimeInSeconds + " seconds")
        }
        else {
            Log.info("Waiting for '" + description + "' to be clickable within " + waitTimeInSeconds + " seconds")
        }
        await element.waitForClickable({ timeout: waitTimeInSeconds * 1000 }, reverse);
    }

    /**
     * Wait until an element exist
     * @param {Object} element element we want to wait to exist
     * @param {Number} waitTimeInSeconds wait timeout in seconds
     * @param {String} description description of the element
     * @param {boolean} reverse if true it waits for the opposite - Not exist (default: false)
     */
    static async waitForExist(element, waitTimeInSeconds, description, reverse = false) {
        if (reverse) {
            Log.info("Waiting for '" + description + "' to not exist within " + waitTimeInSeconds + " seconds")
        }
        else {
            Log.info("Waiting for '" + description + "' to exist within " + waitTimeInSeconds + " seconds")
        }
        await element.waitForExist({ timeout: waitTimeInSeconds * 1000, reverse });
    }

    /**
     * Wait until an element is enabled
     * @param {Object} element element we want to wait to be enabled
     * @param {Number} waitTimeInSeconds wait timeout in seconds
     * @param {String} description description of the element
     * @param {boolean} reverse if true it waits for the opposite - Not exist (default: false)
     */
    static async waitForEnabled(element, waitTimeInSeconds, description, reverse = false) {
        if (reverse) {
            Log.info("Waiting for '" + description + "' to not be enabled within " + waitTimeInSeconds + " seconds")
        }
        else {
            Log.info("Waiting for '" + description + "' to be enabled within " + waitTimeInSeconds + " seconds")
        }
        await element.waitForEnabled({ timeout: waitTimeInSeconds * 1000, reverse });
    }

    /**
    Clear text of an input element
    @param {Object} element we want to clear text for
    @param {String} description for this element
    */
    static async clearText(element, description) {
        Log.info("clearing text for '" + description + "'")
        await element.clearValue();
    }

    /**
    Send or Enter text for an input element
    @param {Object} element we want to send text to
    @param {String} description for this element
    */
        static async sendText(element, inputText, description) {
        Log.info("Entering text '" + inputText + "' for '" + description + "'")
        await element.setValue(inputText);
    }

    /**
    Get text of an element
    @param {Object} element we want to get text from
    @param {String} description for this element
    @return {String} returns string value
    */
    static async getText(element, description) {
        Log.info("Retrieving text for '" + description + "'")
        return await element.getText();
    }

    /**
    Get value for an input, select, textarea element 
    @param {Object} element we want to get value from
    @param {String} description for this element
    @return {String} returns string value
    */
    static async getValue(element, description) {
        Log.info("Retrieving value for '" + description + "'")
        return await element.getValue();
    }

    /**
     * Get the attribute value of an element
     * @param {*} element element we want to get attribute from
     * @param {String} attributeName requested attribute
     * @param {String} description description this element
     */
    static async getAttribute(element, attributeName, description) {
        Log.info(`Retrieving attribute ${attributeName} from ${description}`)
        return await element.getAttribute(attributeName)
    }

    /**
     * Scroll page until the element is visible in the view port
     * @param {*} element - the element we want to be displayed in view port
     * @param {*} description - description of the element
     */
    static async scrollIntoView(element, description){
        Log.info(`Scrolling to bring ${description} to view port`)
        await element.scrollIntoView()
    }

    /**
    Select a value form a drop dowin
    @param {*} drop down element
    @param {String} text for the value to be selected
    @param {String} description for the drop down
    */
    static async selectDropDown(element, value, description) {
        Log.info("Selecting '" + value + "' for drop down '" + description + "'")
        await element.click()
        await element.selectByVisibleText(value)
        //element.click()
    }

    /**
    Select a value form a drop dowin
    @param {*} drop down element
    @param {String} text for the value to be selected
    @param {String} description for the drop down
    */
    static async selectDropDownByAttr(element, attrName, value, description) {
        Log.info("Selecting entry with '" + attrName + ":" + value + "' for drop down '" + description + "'")
        await element.click()
        await element.selectByAttribute(attrName, value)
        await element.click()
    }


    /**
     * Check if option or input of type checkbox or radio is selected
     * @param {Object} element we want to check if selected
     */
    static async isSelected(element) {
        return await element.isSelected() ? true : false;
    }

    /**
     * Toggle the 'selected/checked' property of a checkbox to a desired end state.
     * -returns <true> if toggle was performed 
     * -returns <false> if the checkbox is already in the the desired state, and no action was required
     * @param {Object} element - checkbox element we want to toggle
     * @param {*} value - desired end state (true or false) 
     * @param {String} description - for the checkbox
     */
    static async toggleCheckBox(element, value, description) {
        Log.info('Toggling ' + description + ' to "' + value + '"')
        if (value != undefined) {
            //if value is not a boolean value, convert it to boolean
            if (typeof value !== 'boolean') { value = (value.toLowerCase().trim() === 'true') }
            if (element.isSelected() != value) {
                element.click()
                return true
            }
        }
        return false
    }

    /**
     * Upload file using input element of type='file'
     * @param {Object} fileInputElement - input element of type 'file'
     * @param {Object} uploadButtonElement - upload button
     * @param {String} filePath - path of the file to upload
     * @param {String} description - description for the file upload operation
     */
    static async uploadFile(fileInputElement, uploadButtonElement, filePath, description) {
        Log.info(`Uploading file '${filePath}' on ${description}`)
        const remoteFilePath = await browser.uploadFile(filePath)
        await fileInputElement.setValue(remoteFilePath)
        await uploadButtonElement.click()
    }


    /////////////////////////////////////////////
    // TABLE WEB ELEMENT HELPERS
    /////////////////////////////////////////////

    /**
     * Get the list of rows from a table element
     * @param {Object} tableElement - table element we want to extract the rows from
     * @param {String} [trClassName] - className of table rows (if available)
     */
    static async getTableRows(tableElement, trClassName) {
        if (trClassName)
            return await tableElement.$$(`.${trClassName}`)
        else
            return await tableElement.$$("tr")
    }

    /**
     * Get a single cell from a table given the ROW and COL indexes
     * @param {Object} tableElement - table element we want to get the cell from
     * @param {Number} rowNum - row number
     * @param {Number} colNum - column number
     * @param {String} [trClassName] - className of table rows (if available)
     */
    static async getTableCell(tableElement, rowNum, colNum, trClassName) {
        if (trClassName)
            return await tableElement.$$(`.${trClassName}`)[rowNum].$$("td")[colNum]
        else
            return await tableElement.$$("tr")[rowNum].$$("td")[colNum]
    }

    /**
     * Get the list of cells from a single row -OR- Get a specific cell if column number is provided.
     * @param {Object} tableRowElement - row (wdio element) we want to extract cells from
     * @param {Number} [colNum] - column number to return. If absent, then method returns a list of all columns 
     */
    static async getRowCells(tableRowElement, colNum) {
        if (colNum)
            return await  tableRowElement.$$("td")[colNum]
        else
            return await tableRowElement.$$("td")
    }

    /**
     * Get the list of rows having cell value(s) that matched a searchString
     * @param {Object} tableElement - table web element we want to search from
     * @param {String} searchText - search string
     */
    static async getTableRowsContainingText(tableElement, searchText) {
        //return tableElement.$$("//tr[normalize-space(text())='" + searchText + "']/..")
        let rows = tableElement.$$("tr")
        return await  rows.filter((row)=> {
            if(row){ 
                return row.getText().includes(searchText) 
            }
        })
    }

    /////////////////////////////////////////////
    // BROWSER ALERT HELPERS
    /////////////////////////////////////////////

    /**
     * Fetches the text from the alert
     */
    static async getAlertText() {
        Log.info("Retrieving text from alert popup")
        return await  browser.getAlertText()
    }

    /**
     * Accepts the given alert/presses OK button, and brings back the focus to the web application.
     */
    static async acceptAlert() {
        Log.info("Accepting alert prompt")
        await  browser.acceptAlert()
    }

    /**
     * Closes the alert using (X) present in the alert,
     * dismissAlert() never presses the cancel button
     */
    static async dismissAlert() {
        Log.info("Dismissing alert prompt")
        await browser.dismissAlert()
    }


}

module.exports = ElementUtil;