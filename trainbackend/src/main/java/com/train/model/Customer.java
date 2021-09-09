package com.train.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Customer {
@Id
@GeneratedValue
private Long cId;
private String name;
private String email;
private String password;
private String phone;
private String address;
private String aadhar;
private boolean enabled = true;
private String profile;

////Customer can have many roles
@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "customer")
@JsonIgnore
private Set<CustomerRole> customerRoles = new HashSet<>();

}
