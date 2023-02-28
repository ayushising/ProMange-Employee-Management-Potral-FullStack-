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

import com.javatechie.crud.example.entity.Employee;
import com.javatechie.crud.example.service.EmployeeService;

@CrossOrigin
@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @PostMapping("/addEmployee")
    public Employee addEmployee(@RequestBody Employee employee) {
        return service.saveEmployee(employee);
    }
    
    @GetMapping("/h")
	public String hello() {
		return "Hi welcome!!!";
	}
	

    @GetMapping("/employees")
    public List<Employee> findAllEmployees() {
        return service.getEmployees();
    }

    @GetMapping("/employeeById/{id}")
    public Employee findEmployeeById(@PathVariable int id) {
        return service.getEmployeeById(id);
    }

    @GetMapping("/employeeByName/{name}")
    public Employee findEmployeeByName(@PathVariable String name) {
        return service.getEmployeeByFirstName(name);
    }
    
    @GetMapping("/employeeByemail/{email}")
    public Employee findEmployeeByEmail(@PathVariable String email) {
        return service.getEmployeeByEmail(email);
    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteEmployee(@PathVariable int id) {
        return service.deleteEmployee(id);
    }
}
