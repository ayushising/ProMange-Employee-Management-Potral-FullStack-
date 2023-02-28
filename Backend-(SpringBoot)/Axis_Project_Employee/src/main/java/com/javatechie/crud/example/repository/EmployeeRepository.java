package com.javatechie.crud.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.javatechie.crud.example.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
//   Emolyee findByFirstName(String name);


//   @Query("select a from Employee a where a.firstName = ?1")
   public Employee findByFirstName(String name);
   
   public Employee findByEmail(String email);
}

