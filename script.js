
let buses = [

    {
        number: "KA19-101",
        name: "Coastal Express",
        source: "Mangaluru",
        destination: "Bengaluru",
        time: "06:00 AM",
        availability: "Available",
        seats: 18,
        fare: 650
    },

    {
        number: "KA19-102",
        name: "City Rider",
        source: "Mangaluru",
        destination: "Udupi",
        time: "07:15 AM",
        availability: "Available",
        seats: 24,
        fare: 120
    },

    {
        number: "KA19-103",
        name: "Western Travels",
        source: "Udupi",
        destination: "Mangaluru",
        time: "08:30 AM",
        availability: "Available",
        seats: 12,
        fare: 130
    },

    {
        number: "KA19-104",
        name: "Night Star",
        source: "Mangaluru",
        destination: "Mysuru",
        time: "09:00 PM",
        availability: "Not Available",
        seats: 0,
        fare: 550
    },

    {
        number: "KA19-105",
        name: "Green Line",
        source: "Bengaluru",
        destination: "Mangaluru",
        time: "10:00 PM",
        availability: "Available",
        seats: 20,
        fare: 700
    },

    {
        number: "KA19-106",
        name: "Coastal Link",
        source: "Mangaluru",
        destination: "Karkala",
        time: "09:45 AM",
        availability: "Available",
        seats: 15,
        fare: 100
    },

    {
        number: "KA19-107",
        name: "Malnad Express",
        source: "Shivamogga",
        destination: "Mangaluru",
        time: "05:30 AM",
        availability: "Available",
        seats: 10,
        fare: 300
    },

    {
        number: "KA19-108",
        name: "Metro Connect",
        source: "Mysuru",
        destination: "Bengaluru",
        time: "11:00 AM",
        availability: "Available",
        seats: 30,
        fare: 280
    },

    {
        number: "KA19-109",
        name: "Udupi Deluxe",
        source: "Udupi",
        destination: "Bengaluru",
        time: "08:00 PM",
        availability: "Not Available",
        seats: 0,
        fare: 600
    },

    {
        number: "KA19-110",
        name: "City Shuttle",
        source: "Karkala",
        destination: "Udupi",
        time: "01:15 PM",
        availability: "Available",
        seats: 16,
        fare: 90
    }

];

// Display buses
function displayBuses() {

    let search = document.getElementById("search")
        .value.toLowerCase();

    let source = document.getElementById("source").value;

    let destination = document.getElementById("destination").value;

    let output = "";

    let filteredBuses = buses.filter(function(bus) {

        return (
            (bus.number.toLowerCase().includes(search) ||
             bus.destination.toLowerCase().includes(search)) &&

            (source === "" || bus.source === source) &&

            (destination === "" || bus.destination === destination)
        );

    });

    filteredBuses.forEach(function(bus) {

        output += `
            <div class="bus">

                <h3>${bus.name}</h3>

                <p>Bus Number: ${bus.number}</p>

                <p>Source: ${bus.source}</p>

                <p>Destination: ${bus.destination}</p>

                <p>Departure: ${bus.time}</p>

                <p>Fare: ₹${bus.fare}</p>

                <p>Availability: ${bus.availability}</p>

                <button onclick="viewDetails('${bus.number}')">
                    View Details
                </button>

            </div>
        `;

    });

    document.getElementById("busList").innerHTML =
        output || "<p>No buses found.</p>";
}

// View complete details
function viewDetails(number) {

    let bus = buses.find(function(item) {
        return item.number === number;
    });

    document.getElementById("details").innerHTML = `

        <h2>Complete Bus Details</h2>

        <p>Bus Number: ${bus.number}</p>

        <p>Bus Name: ${bus.name}</p>

        <p>Source: ${bus.source}</p>

        <p>Destination: ${bus.destination}</p>

        <p>Departure Time: ${bus.time}</p>

        <p>Availability: ${bus.availability}</p>

        <p>Available Seats: ${bus.seats}</p>

        <p>Ticket Fare: ₹${bus.fare}</p>

    `;
}

// Search and filter events
document.getElementById("search")
    .addEventListener("input", displayBuses);

document.getElementById("source")
    .addEventListener("change", displayBuses);

document.getElementById("destination")
    .addEventListener("change", displayBuses);

// Initial display
displayBuses();
