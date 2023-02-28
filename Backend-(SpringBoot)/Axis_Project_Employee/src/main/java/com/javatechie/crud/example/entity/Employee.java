package com.javatechie.crud.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Employee_TBL")
public class Employee {

    @Id
//    @GeneratedValue
    private int id;
	private String firstName;
    private String lastName;
    private String email;
    private String number;
    private String designation;
    private String dateofbirth;
    private String department;
    private String address;
    private String skills;
   @ManyToOne
    Project project;
       
   @ManyToOne
   	Manager manager;
   
	
public String getDepartment() {
	return department;
}

public void setDepartment(String department) {
	this.department = department;
}

public String getAddress() {
	return address;
}

public void setAddress(String address) {
	this.address = address;
}

public String getSkills() {
	return skills;
}

public void setSkills(String skills) {
	this.skills = skills;
}

public String getDateofbirth() {
	return dateofbirth;
}

public void setDateofbirth(String dateofbirth) {
	this.dateofbirth = dateofbirth;
}

	public Manager getManager() {
	return manager;
}

public void setManager(Manager manager) {
	this.manager = manager;
}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}
	@Override
	public String toString() {
		return "Emolyee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", number=" + number + ", designation=" + designation + ", project=" + project + " , manger= "+ manager +" ]";
	}

	public String getdesignation() {
		return designation;
	}

	public void setdesignation(String designation) {
		this.designation = designation;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

    
    
//	@Override
//	public String toString() {
//		return "Product [id=" + id + ", name=" + name + ", quantity=" + quantity + ", price=" + price + "]";
//	}
//	public int getId() {
//		return id;
//	}
//	public void setId(int id) {
//		this.id = id;
//	}
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public int getQuantity() {
//		return quantity;
//	}
//	public void setQuantity(int quantity) {
//		this.quantity = quantity;
//	}
//	public double getPrice() {
//		return price;
//	}
//	public void setPrice(double price) {
//		this.price = price;
//	}
}
