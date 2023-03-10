package com.javatechie.crud.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.javatechie.crud.example.entity.Employee;
import com.javatechie.crud.example.entity.Manager;

@Repository
public interface ManagerRepository extends JpaRepository<Manager,Integer> {
	 public Manager findByEmail(String email);
}

