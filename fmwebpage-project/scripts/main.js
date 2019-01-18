// # TABS FOR THE MAPS

function openMap(mapName, elmnt) {
   // Hide all elements with class="tabcnt" by default */
   let i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcnt");
   for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
   }

   // Remove the background color of all tablinks/buttons
   tablinks = document.getElementsByClassName("tablink");
   for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.color = "";
      tablinks[i].style.borderBottomColor = "";
   }

   // Show the specific tab content
   document.getElementById(mapName).style.display = "block";

   // Add the specific color to the button used to open the tab content
   elmnt.style.backgroundColor = "#fff";
   elmnt.style.color = "#4b4b4b";
   elmnt.style.borderBottomColor = "#fff";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();