package com.train.service;

import com.train.model.ReservationForm;

public interface ReservationService {
	
	public ReservationForm addReservationForm(ReservationForm reservationForm);
	
	public ReservationForm viewReservationForm(int bookingid);

}
