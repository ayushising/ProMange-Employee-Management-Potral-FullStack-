package com.javatechie.crud.example.service;

import com.javatechie.crud.example.entity.Employee;
import com.javatechie.crud.example.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repository;

    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }
    public List<Employee> getEmployees() {
        return repository.findAll();
    }

    public Employee getEmployeeById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Employee getEmployeeByFirstName(String name) {
        return repository.findByFirstName(name);
    }

    public Employee getEmployeeByEmail(String email) {
        return repository.findByEmail(email);
    }
    public String deleteEmployee(int id) {
        repository.deleteById(id);
        return "Employee removed !! " + id;
    }



}
