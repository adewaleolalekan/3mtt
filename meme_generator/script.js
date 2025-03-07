// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    // DOM Elements
    const imageUpload = document.getElementById('image-upload');
    const topTextInput = document.getElementById('top-text');
    const bottomTextInput = document.getElementById('bottom-text');
    const generateButton = document.getElementById('generate-button');
    const memePreview = document.getElementById('meme-preview');
    const previewPlaceholder = document.getElementById('preview-placeholder');
    const memeImage = document.getElementById('meme-image');
    const memeTopText = document.getElementById('meme-top-text');
    const memeBottomText = document.getElementById('meme-bottom-text');
    const downloadButton = document.getElementById('download-button');
    
    console.log("Elements found:", 
        !!imageUpload, 
        !!topTextInput, 
        !!bottomTextInput, 
        !!generateButton, 
        !!memePreview,
        !!previewPlaceholder,
        !!memeImage,
        !!memeTopText,
        !!memeBottomText,
        !!downloadButton
    );
    
    // Event Listeners
    imageUpload.addEventListener('change', previewImage);
    topTextInput.addEventListener('input', updateText);
    bottomTextInput.addEventListener('input', updateText);
    generateButton.addEventListener('click', generateMeme);
    downloadButton.addEventListener('click', downloadMeme);
    
    // Preview the selected image
    function previewImage() {
        console.log("Image upload change detected");
        const file = imageUpload.files[0];
        
        if (file) {
            console.log("File selected:", file.name);
            const reader = new FileReader();
            
            reader.onload = function(e) {
                console.log("Image loaded");
                memeImage.src = e.target.result;
            };
            
            reader.readAsDataURL(file);
        }
    }
    
    // Update text on the meme in real-time
    function updateText() {
        console.log("Text updated");
        memeTopText.textContent = topTextInput.value;
        memeBottomText.textContent = bottomTextInput.value;
        
        // Adjust font size based on text length
        adjustFontSize(memeTopText);
        adjustFontSize(memeBottomText);
    }
    
    // Generate the meme
    function generateMeme() {
        console.log("Generate button clicked");
        
        if (!imageUpload.files[0]) {
            alert('Please upload an image first!');
            return;
        }
        
        memePreview.classList.remove('hidden');
        previewPlaceholder.classList.add('hidden');
        
        // Ensure text is updated
        memeTopText.textContent = topTextInput.value;
        memeBottomText.textContent = bottomTextInput.value;
        
        // Adjust font size based on text length
        adjustFontSize(memeTopText);
        adjustFontSize(memeBottomText);
        
        console.log("Meme generated and displayed");
    }
    
    // Adjust font size based on text length
    function adjustFontSize(textElement) {
        const text = textElement.textContent;
        let fontSize = 2;
        
        if (text.length > 20) {
            fontSize = 1.8;
        }
        
        if (text.length > 30) {
            fontSize = 1.6;
        }
        
        if (text.length > 40) {
            fontSize = 1.4;
        }
        
        textElement.style.fontSize = fontSize + 'em';
    }
    
    // Download the meme as an image
    function downloadMeme() {
        console.log("Download button clicked");
        
        try {
            // Create a canvas element
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            
            // Set canvas dimensions to match the image
            canvas.width = memeImage.naturalWidth || memeImage.width;
            canvas.height = memeImage.naturalHeight || memeImage.height;
            
            console.log("Canvas dimensions:", canvas.width, canvas.height);
            
            // Draw the image on the canvas
            context.drawImage(memeImage, 0, 0, canvas.width, canvas.height);
            
            // Set text styles
            context.font = '40px Impact';
            context.textAlign = 'center';
            context.fillStyle = 'white';
            context.strokeStyle = 'black';
            context.lineWidth = 2;
            
            // Draw top text
            const topText = topTextInput.value;
            drawText(context, topText, canvas.width / 2, 50);
            
            // Draw bottom text
            const bottomText = bottomTextInput.value;
            drawText(context, bottomText, canvas.width / 2, canvas.height - 30);
            
            // Convert canvas to downloadable image
            const link = document.createElement('a');
            link.download = 'my-meme.png';
            link.href = canvas.toDataURL('image/png');
            console.log("Download link created");
            link.click();
        } catch (error) {
            console.error("Error in downloadMeme:", error);
            alert("There was an error creating your meme. Please try again.");
        }
    }
    
    // Helper function to draw text with outline
    function drawText(context, text, x, y) {
        // Draw text outline
        context.strokeText(text, x, y);
        // Fill text
        context.fillText(text, x, y);
    }
    
    console.log("Meme generator initialized");
});
