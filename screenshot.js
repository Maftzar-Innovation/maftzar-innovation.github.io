// the function to take a screenshot

function takeScreenshotOfElement(elementId) {
    // getting the element from in the onClick inside the button element
    const element = document.getElementById(elementId);
    // making the image
    domtoimage.toPng(element)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'element_screenshot.png';
        link.click();
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  }  

  