// Function to handle login form submission
document.addEventListener("DOMContentLoaded", function() {
    // Get the login form
    const loginForm = document.getElementById("loginForm");

    // Add event listener to the login form
    loginForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Perform your login process here, for example, you can send an AJAX request to your server
        // After successful login, redirect to homepage.html
        window.location.href = "homepage.html";
    });

    // Function to handle report issue form submission
    const reportIssueForm = document.getElementById("reportIssueForm");
    if (reportIssueForm) {
        reportIssueForm.addEventListener("submit", function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Perform your report issue submission process here
            // For example, you can send the data to your backend server

            // After successful submission, redirect to map.html
            window.location.href = "map.html";
        });
    }
});

// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the video element for the camera preview
    const video = document.getElementById("camera-preview");

    // Get the capture button
    const captureButton = document.getElementById("capture-button");

    // Function to start the camera preview
    function startCamera() {
        navigator.mediaDevices.getUserMedia({ video: true }) // Request access to the camera
            .then(function(stream) {
                video.srcObject = stream; // Assign the camera stream to the video element
            })
            .catch(function(error) {
                console.error("Error accessing the camera:", error);
            });
    }
    javascript
startCamera();
capturedImage:
    // Function to stop the camera preview
    function stopCamera() {
        const stream = video.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(function(track) {
                track.stop(); // Stop all tracks in the stream
            });
            video.srcObject = null; // Remove the stream from the video element
        }
    }

    // Event listener for the capture button
    captureButton.addEventListener("click", function() {
        // Here you can capture the current frame from the video element and process it
        // For now, let's just stop the camera preview
        stopCamera();
    });

    // Start the camera when the page loads
    startCamera();
});

// JavaScript code for reportIssue.html

document.addEventListener("DOMContentLoaded", function() {
    // Get the captured image element
    const capturedImage = document.getElementById("capturedImage");

    // Add mousedown event listener to the captured image
    capturedImage.addEventListener("mousedown", function(event) {
        // Prevent default behavior (e.g., dragging)
        event.preventDefault();

        // Add a visual indication that the image is being held (e.g., change border color)
        capturedImage.style.border = "2px solid red"; // Change border color to red
    });

    // Add mouseup event listener to the captured image
    capturedImage.addEventListener("mouseup", function(event) {
        // Remove the visual indication when the mouse button is released
        capturedImage.style.border = "2px solid #ccc"; // Restore original border color
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the submit button
    const submitButton = document.getElementById("submit-button");

    // Add event listener to the submit button
    submitButton.addEventListener("click", function() {
        // Redirect to map.html
        window.location.href = "map.html";
    });
});
// Initialize and display the map
function initMap() {
    // Specify the coordinates for the center of the map
    var centerCoords = { lat: 40.7128, lng: -74.0060 }; // Example: New York City coordinates

    // Create a new map object
    var map = new google.maps.Map(document.getElementById("map"), {
        center: centerCoords,
        zoom: 10 // Adjust the zoom level as needed
    });

    // Add a marker to the map
    var marker = new google.maps.Marker({
        position: centerCoords,
        map: map,
        title: "AquaReport Location" // Tooltip text when hovering over the marker
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const cameraPreview = document.getElementById("camera-preview");
    const captureButton = document.getElementById("capture-button");
    const addMoreImagesButton = document.getElementById("add-more-images-button");

    // Function to start camera preview
    function startCamera() {
        // Check if device supports media devices
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            console.log("getUserMedia is not supported");
            return;
        }

        // Access the device camera
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                cameraPreview.srcObject = stream;
                cameraPreview.play();
            })
            .catch(function(err) {
                console.log("Error accessing camera:", err);
            });
    }

    // Function to capture image
    function captureImage() {
        // Create a canvas element to draw the captured image
        const canvas = document.createElement("canvas");
        canvas.width = cameraPreview.videoWidth;
        canvas.height = cameraPreview.videoHeight;
        const context = canvas.getContext("2d");

        // Draw the image from the camera onto the canvas
        context.drawImage(cameraPreview, 0, 0, canvas.width, canvas.height);

        // Convert the canvas image to data URL
        const imageDataUrl = canvas.toDataURL("image/png");

        // Create an image element to display the captured image
        const capturedImage = document.createElement("img");
        capturedImage.src = imageDataUrl;

        // Append the captured image to the document
        document.body.appendChild(capturedImage);
    }

    // Add event listener to start camera preview when page loads
    startCamera();

    // Add event listener to capture button
    captureButton.addEventListener("click", function() {
        captureImage();
    });

    // Add event listener to "Add more images" button
    addMoreImagesButton.addEventListener("click", function() {
        // Restart the camera to capture another image
        startCamera();
    });
});
// JavaScript code for Google Maps integration
function initMap() {
    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var map = new google.maps.Map(document.getElementById('map'), {
                center: pos,
                zoom: 15
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Your Location'
            });
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    console.log("Error: Geolocation failed.");
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 }, // Default to center of the world
        zoom: 2 // Default zoom level
    });
}
