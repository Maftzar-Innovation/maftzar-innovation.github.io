// the function to take a screenshot

// function to screenshot without background
// function takeScreenshotOfElement(elementId) {
//     // getting the element from in the onClick inside the button element
//     const element = document.getElementById(elementId);
//     // making the image
//     domtoimage.toPng(element)
//       .then(function (dataUrl) {
//         const link = document.createElement('a');
//         link.href = dataUrl;
//         link.download = 'element_screenshot.png';
//         link.click();
//       })
//       .catch(function (error) {
//         console.error('Error:', error);
//       });
//   }  

// the function to take a screenshot

// function to screenshot with background

function takeScreenshotOfElement(elementId) {
  // getting the element from in the onClick inside the button element
  const element = document.getElementById(elementId);
  
  // making the image
  domtoimage.toPng(element)
    .then(function (dataUrl) {
      const img = new Image();
      img.onload = function() {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
      // Set the canvas size to match the image size
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Set the background color
      context.fillStyle = '#25232E';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw the image onto the canvas
      context.drawImage(img, 0, 0);
      
      // Convert the canvas content to a new data URL
      const newImageUrl = canvas.toDataURL('image/png');
      
      // Create a link element to download the new image
      const link = document.createElement('a');
      link.href = newImageUrl;
      link.download = 'element_screenshot_with_background.png';
      link.click();}
      img.src = dataUrl;  
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}
