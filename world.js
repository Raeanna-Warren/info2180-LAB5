window.onload = function () {
    // Lookup button for countries
    let search = document.getElementById("lookup");
    
    search.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default form submission
        let country = document.getElementById("country").value.trim(); // Trim whitespace
        fetchData(country); // Fetch data for country lookup
    });

    // Function to fetch data via AJAX
    function fetchData(country) {
        if (country === "") {
            alert("Please enter a search term."); // Alert if input is empty
            return;
        }

        let h_req = new XMLHttpRequest(); // Create a new XMLHttpRequest object
        h_req.onreadystatechange = function () {
            if (h_req.readyState === XMLHttpRequest.DONE) {
                if (h_req.status === 200) {
                    let resultDiv = document.getElementById("result");
                    resultDiv.innerHTML = h_req.responseText; // Display fetched data
                } else {
                    alert("Error fetching data. Please try again!"); // Alert on error
                }
            }
        };

        // Construct the endpoint URL with the country parameter
        let endpoint = `http://localhost/info2180-lab5/world.php?country=${encodeURIComponent(country)}`;
        
        console.log("Fetching data from:", endpoint); // Debugging log
        h_req.open("GET", endpoint, true); // Open GET request
        h_req.send(); // Send the request
    }
};

