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
	
   private int userid;
   private String source;
   private String destination;
   private Date traveldate;
   private String coachtype;
   private String seattype;
   private String pname;
   private String page;
   private String pgender;
   private boolean disable;
   private float price;
   private int totaldistance;
   private int seatnumber;
   private int coachid;
   private Date bookingdate; 
   @ManyToOne
   private TrainDetails traindetails;
}
