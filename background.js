// This runs once when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  console.log("Research Companion v1.0.0 installed successfully.");
});

// A placeholder for future message listening
// The popup.js will eventually send a message here to trigger the AI API
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "summarize_text") {
    console.log("Received text to summarize. AI connection pending.");
    
    // You will add your fetch() call to the AI API here later.
    
    sendResponse({ status: "Processing..." });
  }
  
  // Return true to indicate you wish to send a response asynchronously
  return true; 
});
