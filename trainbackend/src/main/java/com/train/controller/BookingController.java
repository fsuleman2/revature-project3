package com.train.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.train.model.Booking;
import com.train.service.BookingService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/booking")
@CrossOrigin("*")
public class BookingController {

	@Autowired
	private BookingService bookingService;
	@PostMapping("/")
	public ResponseEntity<Booking> addBooking(@RequestBody Booking booking){
		Booking booking1=this.bookingService.createBooking(booking);
		System.out.println(booking1);
		return ResponseEntity.ok(booking1);
	}
}
