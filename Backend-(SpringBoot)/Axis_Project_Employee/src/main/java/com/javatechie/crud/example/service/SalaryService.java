package com.javatechie.crud.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatechie.crud.example.entity.Project;
import com.javatechie.crud.example.entity.SalaryDetails;
import com.javatechie.crud.example.repository.ProjectRepository;
import com.javatechie.crud.example.repository.SalaryDetailsRepository;

@Service
public class SalaryService {
	@Autowired
    private SalaryDetailsRepository repository;
    

    public SalaryDetails saveSalaryDetails(SalaryDetails details) {
        return repository.save(details);
    }


    public List<SalaryDetails> getSalaryDetails() {
        return repository.findAll();
    }

    public SalaryDetails getSalaryDetailsById(int id) {
        return repository.findById(id).orElse(null);
    }
    public SalaryDetails getSalaryDetailsByMonth(String month) {
        return repository.findByMonth(month);
    }
    public SalaryDetails getSalaryDetailsByYear(String year) {
        return repository.findByYear(year);
    }
    
//    public List<SalaryDetails> getMonthsYears(int id) {
//        return repository.findAllMonthsandYears(id);
//    }
    public SalaryDetails getSalaryDetailsByMonthAndYear(int id,String month,String year) {
        return repository.findByMonthAndYear(id,month,year);
    }
     public String deleteSalaryDetails(int id) {
        repository.deleteById(id);
        return "Salary details removed" + id;
    }
}
