package com.train.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import lombok.Data;

@Entity
@Component
@Data
public class TrainDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int tid; 
	private int tno;	 
	private String tname;	 
	private String start; 
	private String stop;

	private Date date;	//take care of format
	
	private int totalCoach;	 
	private int acSleeperCoach;	 
	private int acSittingCoach;	 
	private int nonAcSleeperCoach;
	private int nonAcSittingCoach;
	private int totalAcSleeperSeat;	
	private int availAcSleeperSeat;
	private int totalAcSittingSeat;
	private int availAcSittingSeat;
	private int totalNonAcSleeperSeat;
	private int availNonAcSleeperSeat;
	private int totalNonAcSittingSeat;
	private int availNonAcSittingSeat;

	
}




