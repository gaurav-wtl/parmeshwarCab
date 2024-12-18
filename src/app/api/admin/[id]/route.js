import connectDB from "@/utils/connectDB";
import Price from "@/models/Price";

export async function DELETE(req, { params }) {
  try {
    // Connect to the database
    await connectDB();

    // Get the ID from the URL parameters
    const { id } = params;

    // Find and delete the price entry by ID
    const deletedPrice = await Price.findByIdAndDelete(id);

    if (!deletedPrice) {
      return new Response(
        JSON.stringify({ message: 'Route not found' }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        message: 'Price entry deleted successfully',
        data: deletedPrice,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error deleting price entry', error }),
      { status: 500 }
    );
  }
}
