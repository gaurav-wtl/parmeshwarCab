// app/api/trip/route.js

import connectDB from '@/utils/connectDB'; // Utility to connect to DB
import Trip from '@/models/Trip';
import Price from '@/models/Price';

export async function POST(request) {
    try {
        // Parse the incoming JSON request body
        const data = await request.json();

        // Destructure the trip details from the request body
        const { tripType, passengers, route, date, time, returnDate, returnTime } = data;

        // Validate the input fields
        if (!tripType || !passengers || !route || !date || !time) {
            return new Response(
                JSON.stringify({
                    message: 'All fields are required: tripType, passengers, route, date, and time.',
                }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Connect to MongoDB
        await connectDB();

        // Create a new trip in the MongoDB database using Mongoose
        const newTrip = new Trip({
            tripType,
            passengers,
            route,
            date: new Date(date),
            time,
            returnDate: returnDate ? new Date(returnDate) : null,
            returnTime: returnTime || null,
        });

        await newTrip.save();

        // Respond with a success message and the created trip
        return new Response(
            JSON.stringify({
                message: 'Trip created successfully',
                trip: newTrip,
            }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error creating trip:', error.message);

        // Respond with an error message
        return new Response(
            JSON.stringify({
                message: 'An error occurred while creating the trip. Please try again.',
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}


export async function GET(request) {
    try {
        // Connect to the MongoDB database
        await connectDB();

        // Fetch the price list from the Price collection
        const list = await Price.find({});

        // Respond with the list of prices
        return new Response(JSON.stringify(list), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching prices:', error);
        return new Response(
            JSON.stringify({ message: 'An error occurred while fetching prices.' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}