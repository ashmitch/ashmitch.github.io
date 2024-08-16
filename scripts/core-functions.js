function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    } else {
        sidebar.classList.add('open');
    }
}
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getUserId() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = generateUUID();
        localStorage.setItem('userId', userId);
    }
    return userId;
}

function toggleTile(tile,variable,value) {
    var tiles = tile.parentElement.querySelectorAll('.tile');
    tiles.forEach(function(item) {
        item.classList.remove('selected');
    });
    tile.classList.add('selected');
    document.getElementById(variable).value = value;
    updateDepositOptions(); 
}

function getSessionId() {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
        sessionId = generateUUID();
        sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
}

var modal = document.getElementById("dataPolicyModal");
// Get the button that opens the modal
var acceptBtn = document.getElementById("acceptBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Show the modal when the page loads
window.onload = function() {
    modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
// When the user clicks on the "I Accept" button, close the modal
acceptBtn.onclick = function() {
    modal.style.display = "none";
    // You can also set a cookie or local storage item here to remember the user's acceptance
    localStorage.setItem('dataPolicyAccepted', 'true');
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// Check if the data policy has been accepted before showing the content
window.onload = function() {
    if (!localStorage.getItem('dataPolicyAccepted')) {
        modal.style.display = "block";
    } else {
        // Optionally, you could hide the modal and show content if the policy is accepted
    }
};