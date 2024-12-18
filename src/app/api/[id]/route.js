// Assuming you're using app/api/[id]/route.js for dynamic routing

import Trip from '@/models/Trip';
import Price from '@/models/Price';
import connectDB from '@/utils/connectDB';

export async function GET(req, { params }) {
    try {
        // Await params to ensure they're fully resolved
        const { id } = await params;  // Await `params` to get the trip ID

        // Validate the input
        if (!id) {
            return new Response(
                JSON.stringify({ message: "Trip ID is required." }),
                { status: 400 }
            );
        }

        // Connect to MongoDB before querying
        await connectDB();

        // Find the trip by ID
        const trip = await Trip.findById(id);

        // Check if the trip exists
        if (!trip) {
            return new Response(
                JSON.stringify({ message: `No trip found with ID: ${id}.` }),
                { status: 404 }
            );
        }

        // Find the pricing based on the trip's route
        const price = await Price.findOne({ route: trip.route });

        // Check if price is found for the route
        if (!price) {
            return new Response(
                JSON.stringify({ message: `No price found for the route: ${trip.route}.` }),
                { status: 404 }
            );
        }

        // Respond with the found price
        return new Response(
            JSON.stringify({
                message: "Price found successfully",
                price,
                trip
            }),
            { status: 200 }
        );

    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error finding price by route:", error.message);

        // Respond with an appropriate error message
        return new Response(
            JSON.stringify({ message: "An error occurred while finding the price. Please try again." }),
            { status: 500 }
        );
    }
}
