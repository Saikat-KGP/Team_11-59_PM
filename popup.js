document.getElementById("capture-button").addEventListener("click", async () => {
    try {
      document.getElementById("capture-button").textContent = "Capturing...";
      document.getElementById("see-image-button").style.display = "none"; // Hide the button during capture
  
      const screenshot = await chrome.tabs.captureVisibleTab({ format: "png" });
      const screenshotBlob = new Blob([screenshot], { type: "image/png" });
      const screenshotUrl = URL.createObjectURL(screenshotBlob);
  
      document.getElementById("screenshot-image").src = screenshotUrl;
      document.getElementById("see-image-button").style.display = "block"; // Show the "See Image" button
  
    } catch (error) {
      console.error("Error capturing screenshot:", error);
      // Handle errors appropriately (e.g., display an error message)
    } finally {
      document.getElementById("capture-button").textContent = "Capture Screenshot";
    }
  });
  
  document.getElementById("see-image-button").addEventListener("click", () => {
    document.getElementById("screenshot-image").style.display = "block"; // Make the image visible
    document.getElementById("screenshot-image").style.width = "100%";  // Enlarge the image to fit the popup
  });
  