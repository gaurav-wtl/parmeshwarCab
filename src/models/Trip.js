// models/Trip.js
import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  tripType: { type: String, required: true },
  passengers: { type: String, required: true },
  route: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  returnDate: { type: Date, required: false },
  returnTime: { type: String, required: false },
});

const Trip = mongoose.models.Trip || mongoose.model('Trip', tripSchema);
export default Trip;
