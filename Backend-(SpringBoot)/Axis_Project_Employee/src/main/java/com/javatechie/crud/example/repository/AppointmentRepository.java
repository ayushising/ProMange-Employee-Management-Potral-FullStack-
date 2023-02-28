package com.javatechie.crud.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.javatechie.crud.example.entity.Appointment;
import com.javatechie.crud.example.entity.SalaryDetails;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {
	
	@Query(value = "SELECT * FROM  appointment_tbl where employee_id =?1", nativeQuery = true)
	 public Appointment findAppointmentdetailsById(int empid);

}
