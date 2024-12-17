import connectDB from "@/utils/connectDB"; // Helper to connect to the database
import Trip from "@/models/Trip"; // Assuming you have a Trip model defined

export async function PATCH(req, { params }) {
    try {
        const { id } = params;  // Extract id from route parameters
        const { vehicle, price } = await req.json();  // Extract vehicle and price from the request body

        // Validate the input
        if (!id) {
            return new Response(
                JSON.stringify({ message: "Trip ID is required." }),
                { status: 400 }
            );
        }
        if (!vehicle || !price) {
            return new Response(
                JSON.stringify({ message: "Both vehicle and price are required." }),
                { status: 400 }
            );
        }

        // Connect to the database
        await connectDB();

        // Update the trip with the provided vehicle and price
        const trip = await Trip.findByIdAndUpdate(
            id,
            { vehicle, price },
            { new: true } // Return the updated document
        );

        // Check if the trip exists
        if (!trip) {
            return new Response(
                JSON.stringify({ message: `No trip found with ID: ${id}.` }),
                { status: 404 }
            );
        }

        // Respond with the updated trip details
        return new Response(
            JSON.stringify({
                message: "Vehicle attached successfully",
                trip,
            }),
            { status: 200 }
        );

    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error attaching vehicle:", error.message);

        // Respond with an appropriate error message
        return new Response(
            JSON.stringify({
                message: "An error occurred while attaching the vehicle. Please try again.",
            }),
            { status: 500 }
        );
    }
}
