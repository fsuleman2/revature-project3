package com.train.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.train.model.Booking;
import com.train.repository.BookingRepository;
import com.train.service.BookingService;

@Service
public class BookingServiceImpl implements BookingService {
	@Autowired
	private BookingRepository bookingRepository;

	@Override
	public Booking createBooking(Booking booking) {
		
		return bookingRepository.save(booking);
	}

	@Override
	public Booking getBooking(int id) {
		
		return this.bookingRepository.findById(id).get();
	}

}
