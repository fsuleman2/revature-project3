package com.train.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.train.model.Booking;
import com.train.model.TrainDetails;
import com.train.service.BookingService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/booking")
@CrossOrigin("*")
public class BookingController {

	@Autowired
	private BookingService bookingService;
	@PostMapping("/")
	public Booking addBooking(@RequestBody Booking booking){
		return this.bookingService.createBooking(booking);
	
	}
	
	
	@GetMapping("/view/{bookingId}")
	public Booking getBooking(@PathVariable("bookingId") int bookingId) {
		return this.bookingService.getBooking(bookingId);
	}
}
