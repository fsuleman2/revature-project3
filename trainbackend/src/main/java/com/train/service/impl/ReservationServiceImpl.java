package com.train.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.train.model.ReservationForm;
import com.train.model.RouteDetails;
import com.train.model.TrainDetails;
import com.train.repository.AdminDao;
import com.train.repository.ReservationRepository;
import com.train.service.ReservationService;
@Service
public class ReservationServiceImpl implements ReservationService{

	@Autowired
	private ReservationRepository reservationRepository;
	@Autowired
	private AdminDao admindao;
	
	@Override
	public ReservationForm addReservationForm(ReservationForm reservationForm) {
		
		return this.reservationRepository.save(reservationForm);
	}

	@Override
	public ReservationForm viewReservationForm(int bookingid) {
		// TODO Auto-generated method stub
		return this.reservationRepository.findById(bookingid).get();
	}

	@Override
	public List<ReservationForm> getReservationByCustId(Long custid) {
		// TODO Auto-generated method stub
		return this.reservationRepository.getReservationbyCustId(custid);
	}
	
	@Override
	  public boolean checkSeatAvail(String seat,int id) {
		System.out.println(seat);
	    TrainDetails td=this.admindao.getAvailableSeat(id);
	    System.out.println(td);
	    System.out.println("-----------------------------------------------------------------");
	    if(seat.equals("availNonAcSittingSeat"))
	    {
	    	System.out.println(1);
	    	if(td.getAvailNonAcSittingSeat()>0)
	    		return true;
	    	else return false;
	    				
	    }
	    else if(seat.equals("availAcSittingSeat"))
	    {
	    	System.out.println(2);
	    	if(td.getAvailAcSittingSeat()>0)
	    		return true;
	    	else return false;
	    				
	    }
	    else if(seat.equals("availNonAcSleeperSeat"))
	    {
	    	System.out.println(3);
	    	if(td.getAvailNonAcSleeperSeat()>0)
	    		return true;
	    	else return false;
	    				
	    }
	    else {
	    	System.out.println(4);
	    	if(td.getAvailAcSleeperSeat()>0)
	    		return true;
	    	else return false;
	    }
	    
	  }

}
