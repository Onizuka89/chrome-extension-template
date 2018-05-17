/**
 * This is the script that accesses the web site's DOM
 * In this template it will just receive the params from the plugin's interface and then return it.
 */

//adds a event listener, waiting for the sendMessage to be triggered from the popup, request is the id of the tab window
//sender is the data that came from the popup, and the sendResponse is the callback from the popup
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        //Do stuff to the DOM (can use jQuery)

        //send data by callback
        sendResponse(sender.data_sample);
    }
);