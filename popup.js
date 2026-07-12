document.addEventListener('DOMContentLoaded', async () => {
  const statusMessage = document.getElementById('status-message');
  const summarizeBtn = document.getElementById('summarize-btn');

  try {
    // Get the current active tab in the current window
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Check if the URL exists and ends with .pdf
    if (tab.url && tab.url.toLowerCase().endsWith('.pdf')) {
      statusMessage.textContent = 'PDF detected! Ready to summarize.';
      statusMessage.style.color = '#10b981'; // Success green
      summarizeBtn.disabled = false;
    } else {
      statusMessage.textContent = 'Error: This tab is not a PDF.';
      statusMessage.style.color = '#ef4444'; // Error red
    }

    // Button click listener (shell for Days 4-6)
    summarizeBtn.addEventListener('click', () => {
      // Hide button, show loading spinner
      summarizeBtn.classList.add('hidden');
      document.getElementById('loading').classList.remove('hidden');
      
      // Temporary placeholder alert until you build the extraction logic
      setTimeout(() => {
        alert("Summarize action triggered! PDF extraction coming in Day 4.");
        
        // Reset UI for now
        document.getElementById('loading').classList.add('hidden');
        summarizeBtn.classList.remove('hidden');
      }, 1000);
    });

  } catch (error) {
    statusMessage.textContent = 'Cannot access tab data.';
    console.error(error);
  }
});
