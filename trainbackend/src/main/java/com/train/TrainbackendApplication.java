package com.train;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.train.model.Customer;
import com.train.model.CustomerRole;
import com.train.model.Role;
import com.train.service.CustomerService;

@SpringBootApplication
public class TrainbackendApplication implements CommandLineRunner{
	
	@Autowired
	private CustomerService customerService;
	public static void main(String[] args) {
		SpringApplication.run(TrainbackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("**********Starting Code********");
		Customer customer = new Customer();
		customer.setName("admin");
		customer.setUsername("admin123");
		customer.setPassword("admin@123");
		customer.setEmail("admin123@gmail.com");
		customer.setAadhar("112233448899");
		customer.setAddress("Hyderabad");
		customer.setPhone("8121795121");
		customer.setProfile("default.png");
		customer.setEnabled(true);
		
		Role role1 = new Role();
		role1.setRoleId(44L);
		role1.setRoleName("ADMIN");
		
		Set<CustomerRole> customerRoleSet = new HashSet<>();
		CustomerRole customerRole = new CustomerRole();
		customerRole.setRole(role1);
		customerRole.setCustomer(customer);
		customerRoleSet.add(customerRole);
		
		Customer customer1 = this.customerService.createCustomer(customer, customerRoleSet);
		System.out.println(customer1.getUsername());
		
		
	}

}
