/**
 *  Set up the config
 */

// Let the DOM finish loading
document.addEventListener('DOMContentLoaded', function() {
    //execute jQuery and then the content.js to give content.js access to jQuery
    chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
        // execute the content.js to set up the listeners for events.
        chrome.tabs.executeScript(null, { file: "content.js" });
    });


    document.getElementById('send').addEventListener('click', function() {
        //find current active tab, and send it a message containing the stuff to exclude the the content.js script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            // sends the value in input#data to the content.js script, and add a function with what to do
            // with the response gotten from content.js, in this case just write it to console (this is only viewable in the console for popup.html)
            chrome.tabs.sendMessage(tabs[0].id, {data_sample: document.getElementById("data").value}, function(response) {
                console.log(response);
            });
        });
    }, false);
}, false);
