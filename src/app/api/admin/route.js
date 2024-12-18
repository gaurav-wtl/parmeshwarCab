import connectDB from '@/utils/connectDB';
import Price from '@/models/Price';

export async function POST(req) {
  try {
    // Connect to the database
    await connectDB();

    // Parse the incoming request body (route and pricing data)
    const { route, pricing } = await req.json();

    // Check if the route already exists
    const existingRoute = await Price.findOne({ route });
    if (existingRoute) {
      return new Response(
        JSON.stringify({ message: 'Route already exists' }),
        { status: 400 }
      );
    }

    // Create a new Price entry
    const newPrice = new Price({
      route,
      pricing,
    });

    // Save to the database
    await newPrice.save();

    return new Response(
      JSON.stringify({
        message: 'Price entry added successfully',
        success: true,
        data: newPrice,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error adding price entry', error }),
      { status: 500 }
    );
  }
}
