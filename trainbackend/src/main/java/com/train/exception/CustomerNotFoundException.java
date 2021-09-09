package com.train.exception;

public class CustomerNotFoundException extends Exception{
	public CustomerNotFoundException() {
		super("Customer with this username not found in database !!");
	}
	public CustomerNotFoundException(String msg) {
		super(msg);
	}
}
