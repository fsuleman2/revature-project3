package com.train.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class CustomerRole {
	@Id
	@GeneratedValue
	private Long customerRoleId;
	
	//customer
	@ManyToOne(fetch = FetchType.EAGER)
	private Customer customer;
	
	//for role
	@ManyToOne
    private Role role;
}
