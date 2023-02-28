package com.javatechie.crud.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javatechie.crud.example.entity.SalaryDetails;
import com.javatechie.crud.example.service.SalaryService;

@CrossOrigin
@RestController
public class SalaryDetailsController {
	@Autowired
    private SalaryService service;

    @PostMapping("/addSalaryDetails")
    public SalaryDetails addSalaryDetails(@RequestBody SalaryDetails details) {
        return service.saveSalaryDetails(details);
    }
    @GetMapping("/SalaryDetails")
    public List<SalaryDetails> findAllSalaryDetails() {
        return service.getSalaryDetails();
    }

    @GetMapping("/SalaryDetailsById/{id}")
    public SalaryDetails findSalaryDetailsById(@PathVariable int id) {
        return service.getSalaryDetailsById(id);
    }
    @GetMapping("/SalaryDetailsByMonth/{month}")
    public SalaryDetails findSalaryDetailsById(@PathVariable String month) {
        return service.getSalaryDetailsByMonth(month);
    }
    @GetMapping("/SalaryDetailsByYear/{year}")
    public SalaryDetails findSalaryDetailsByYear(@PathVariable String year) {
        return service.getSalaryDetailsByYear(year);
    }
    
    @GetMapping("/SalaryDetailsByMonthAndYear/{id}/{month}/{year}")
    public SalaryDetails findSalaryDetailsByMonthAndYear(@PathVariable int id,@PathVariable String month,@PathVariable String year) {
        return service.getSalaryDetailsByMonthAndYear(id,month,year);
    }
    
//    @GetMapping("/GetMonthsAndYears/{id}")
//    public List<SalaryDetails> findSalaryDetailsByMonthAndYear(@PathVariable int id) {
//        return service.getMonthsYears(id);
//    }
    

    @DeleteMapping("/deleteSalaryDetails/{id}")
    public String deleteProject(@PathVariable int id) {
        return service.deleteSalaryDetails(id);
    }

}
