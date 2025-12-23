/**
 * SafeRide - Dashboard Script
 * Real-time data monitoring from Firebase Realtime Database
 */

let map;
let marker;
let mapInitialized = false;

// Initialize Google Maps
function initMap() {
    // Default location (can be updated from Firebase data)
    const defaultLocation = { lat: 28.6139, lng: 77.2090 }; // Default: New Delhi, India

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: defaultLocation,
        mapTypeId: 'roadmap',
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ]
    });

    marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: 'Vehicle Location',
        icon: {
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        }
    });

    mapInitialized = true;
    console.log('Google Maps initialized');
}

// Format timestamp
function formatTimestamp(timestamp) {
    if (!timestamp) return '--';
    
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return '--';
    
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

// Update device status
function updateDeviceStatus(isOnline, lastUpdate) {
    const statusIndicator = document.getElementById('statusIndicator');
    const statusText = document.getElementById('statusText');
    const lastUpdated = document.getElementById('lastUpdated');

    if (statusIndicator && statusText) {
        if (isOnline) {
            statusIndicator.className = 'status-indicator online';
            statusText.textContent = 'Online';
        } else {
            statusIndicator.className = 'status-indicator offline';
            statusText.textContent = 'Offline';
        }
    }

    if (lastUpdated) {
        lastUpdated.textContent = formatTimestamp(lastUpdate);
    }
}

// Update crash status
function updateCrashStatus(isCrashDetected) {
    const crashIndicator = document.getElementById('crashIndicator');
    const crashText = document.getElementById('crashText');

    if (crashIndicator && crashText) {
        if (isCrashDetected) {
            crashIndicator.className = 'crash-indicator detected';
            crashText.textContent = 'Crash Detected';
            crashText.style.color = 'var(--danger-color)';
        } else {
            crashIndicator.className = 'crash-indicator normal';
            crashText.textContent = 'Normal';
            crashText.style.color = 'var(--secondary-color)';
        }
    }
}

// Update sensor readings
function updateSensorReadings(data) {
    // Accelerometer
    if (data.accelerometer) {
        const accelX = document.getElementById('accelX');
        const accelY = document.getElementById('accelY');
        const accelZ = document.getElementById('accelZ');

        if (accelX) accelX.textContent = (data.accelerometer.x || 0).toFixed(2) + ' m/s²';
        if (accelY) accelY.textContent = (data.accelerometer.y || 0).toFixed(2) + ' m/s²';
        if (accelZ) accelZ.textContent = (data.accelerometer.z || 0).toFixed(2) + ' m/s²';
    }

    // Gyroscope
    if (data.gyroscope) {
        const gyroX = document.getElementById('gyroX');
        const gyroY = document.getElementById('gyroY');
        const gyroZ = document.getElementById('gyroZ');

        if (gyroX) gyroX.textContent = (data.gyroscope.x || 0).toFixed(2) + ' rad/s';
        if (gyroY) gyroY.textContent = (data.gyroscope.y || 0).toFixed(2) + ' rad/s';
        if (gyroZ) gyroZ.textContent = (data.gyroscope.z || 0).toFixed(2) + ' rad/s';
    }
}

// Update map location
function updateMapLocation(latitude, longitude) {
    if (!mapInitialized || !map || !marker) {
        console.warn('Map not initialized yet');
        return;
    }

    if (latitude && longitude && !isNaN(latitude) && !isNaN(longitude)) {
        const location = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
        
        marker.setPosition(location);
        map.setCenter(location);
        
        console.log('Map location updated:', location);
    }
}

// Update connection status
function updateConnectionStatus(status, message) {
    const connectionInfo = document.querySelector('.connection-info');
    const connectionStatus = document.getElementById('connectionStatus');

    if (connectionInfo && connectionStatus) {
        connectionInfo.className = `connection-info ${status}`;
        connectionStatus.textContent = message;
    }
}

// Listen to Firebase Realtime Database
function startFirebaseListener() {
    if (!window.firebaseDatabase) {
        console.error('Firebase database not initialized');
        updateConnectionStatus('error', 'Firebase not configured. Please check firebase-config.js');
        return;
    }

    const database = window.firebaseDatabase;
    const deviceRef = database.ref('device');

    // Listen for value changes
    deviceRef.on('value', (snapshot) => {
        const data = snapshot.val();
        
        if (data) {
            console.log('Data received from Firebase:', data);

            // Update device status
            const isOnline = data.status === 'online' || data.isOnline === true;
            updateDeviceStatus(isOnline, data.lastUpdated || data.timestamp);

            // Update crash status
            const isCrashDetected = data.crashDetected === true || data.crashStatus === 'detected';
            updateCrashStatus(isCrashDetected);

            // Update sensor readings
            updateSensorReadings(data);

            // Update map location
            if (data.location) {
                updateMapLocation(data.location.latitude, data.location.longitude);
            } else if (data.latitude && data.longitude) {
                updateMapLocation(data.latitude, data.longitude);
            }

            updateConnectionStatus('connected', 'Connected to Firebase - Real-time updates active');
        } else {
            console.warn('No data found in Firebase');
            updateConnectionStatus('error', 'No data available in Firebase database');
        }
    }, (error) => {
        console.error('Firebase read error:', error);
        updateConnectionStatus('error', 'Error connecting to Firebase: ' + error.message);
    });

    // Also listen for connection state
    database.ref('.info/connected').on('value', (snapshot) => {
        if (snapshot.val() === true) {
            console.log('Connected to Firebase');
        } else {
            console.log('Disconnected from Firebase');
            updateConnectionStatus('error', 'Disconnected from Firebase');
        }
    });
}

// Initialize dashboard when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard initialized');

    // Start Firebase listener
    startFirebaseListener();

    // If Google Maps callback is not called automatically, initialize manually
    if (typeof google !== 'undefined' && google.maps && !mapInitialized) {
        setTimeout(initMap, 1000);
    }
});

// Fallback: Initialize map if Google Maps loads after our script
if (typeof google !== 'undefined' && google.maps) {
    window.initMap = initMap;
}

