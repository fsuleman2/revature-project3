package com.train.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.train.model.ReservationForm;

@Repository
public interface ReservationRepository extends JpaRepository<ReservationForm, Integer> {
	
	@Query(value = "select * from reservation where customer_c_id=:id", nativeQuery = true)
	  public List<ReservationForm> getReservationbyCustId(@Param("id") Long custid);

}
