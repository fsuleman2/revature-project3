package com.train.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Entity
@Data
public class Cancellation {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int cancelid;
  @OneToOne
  private int bookingid;
  private Date canceldate;
  private String reason;
  private float refund;
  private boolean seatstatus;
}
