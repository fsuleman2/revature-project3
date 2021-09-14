package com.train.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.train.model.ReservationForm;

@Repository
public interface ReservationRepository extends JpaRepository<ReservationForm, Integer> {

}
