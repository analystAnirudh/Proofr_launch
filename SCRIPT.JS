// Cities array
const cities = [
    "Noida", "New Delhi", "Lucknow", "Ghaziabad", "Dasna", 
    "Mumbai", "Greater Noida", "Aligarh", "Kanpur", 
    "South Delhi", "Chandigarh", "Kochi", "Punjab"
];

// DOM elements
const notification = document.getElementById('enrollmentNotification');
const cityElement = document.getElementById('notificationCity');
const notificationSound = document.getElementById('notificationSound');

function showNotification() {
    // Get random city
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    cityElement.textContent = randomCity;
    
    // Play notification sound
    notificationSound.currentTime = 0;
    notificationSound.play().catch(e => console.log("Audio play prevented:", e));
    
    // Show notification
    notification.classList.add('show');
    
    // Hide after 3 seconds (mobile: 2 seconds)
    setTimeout(() => {
        notification.classList.remove('show');
    }, window.innerWidth < 768 ? 2000 : 3000);
}

// Show first notification after 2 seconds
setTimeout(showNotification, 2000);

// Show subsequent notifications every 5 seconds
setInterval(showNotification, 5000);