package com.train.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Entity
@Data
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookingid;

	@ManyToOne
	private Customer customer;
	
	private String source;
	private String destination;
	private Date travelDate;
	private String coachType;

	private String pName;
	private String pAge;
	private String pGender;
	private boolean pDisabled;
	private float price;
	private int totalDistance;
	private int seatNumber;
	private int coachId;
	private Date bookingDate;
	
	@ManyToOne
	private TrainDetails traindetails;
}
