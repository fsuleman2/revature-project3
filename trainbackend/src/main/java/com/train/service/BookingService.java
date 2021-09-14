package com.train.service;

import com.train.model.Booking;

public interface BookingService {
public Booking createBooking(Booking booking);

public Booking getBooking(int id);
}
