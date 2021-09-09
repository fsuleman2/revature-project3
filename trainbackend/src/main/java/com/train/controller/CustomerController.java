package com.train.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.train.model.Customer;
import com.train.model.CustomerRole;
import com.train.model.Role;
import com.train.service.CustomerService;

@RestController
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	//creating customer by username
	@PostMapping("/")
	public Customer createCustomer(@RequestBody Customer customer) throws Exception {
		Set<CustomerRole> roles =  new HashSet<>();
		Role role = new Role();
		role.setRoleId(45L);
		role.setRoleName("NORMAL");
		CustomerRole customerRole = new CustomerRole(); 
		customerRole.setCustomer(customer);
		customerRole.setRole(role);
		roles.add(customerRole);
		return this.customerService.createCustomer(customer, roles);
	}
	
	@GetMapping("/{username}")
	public Customer getCutomer(@PathVariable String username) {
		return this.customerService.getCustomerByUsername(username);
	}
	
	@DeleteMapping("/{customerId}")
	public void deleteUserById(@PathVariable Long customerId) {
		this.customerService.deleteCustomerById(customerId);
	}
}
