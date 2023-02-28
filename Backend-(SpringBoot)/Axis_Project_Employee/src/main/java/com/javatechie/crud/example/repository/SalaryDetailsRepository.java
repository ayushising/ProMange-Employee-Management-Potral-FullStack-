package com.javatechie.crud.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.javatechie.crud.example.entity.SalaryDetails;

@Repository
public interface SalaryDetailsRepository  extends JpaRepository<SalaryDetails,Integer>{
	 // public SalaryDetails findByMonth(String month);
	  public SalaryDetails findByYear(String year);
	  
	 public SalaryDetails findByMonth(String month);
	 
	 //	 @Query(value = "SELECT * FROM salary_details_tbl where employee_id =714 and month = ?1 AND year = ?2", nativeQuery = true)
	 @Query(value = "SELECT * FROM salary_details_tbl where employee_id =?1 and month = ?2 AND year = ?3", nativeQuery = true)
	 public SalaryDetails findByMonthAndYear(int empid,String month,String year);
//	 @Query(value = "SELECT * FROM salary_details_tbl where employee_id =?1 and month = ?2 AND year = ?3", nativeQuery = true)
//	 public SalaryDetails findByEmailAndMonthAndYear(String email,String month,String year);

}
