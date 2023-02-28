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

import com.javatechie.crud.example.entity.Manager;
import com.javatechie.crud.example.service.ManagerService;

@CrossOrigin
@RestController
public class ManagerController {

	
	  @Autowired
	    private ManagerService service;
	   

	    @PostMapping("/addManager")
	    public Manager addManager(@RequestBody Manager Manager) {
	        return service.saveManager(Manager);
	    }
	    		

	    @GetMapping("/managers")
	    public List<Manager> findAllManagers() {
	        return service.getManagers();
	    }

	    @GetMapping("/managerById/{id}")
	    public Manager findManagerById(@PathVariable int id) {
	        return service.getManagerById(id);
	    }
	    @GetMapping("/managerByEmail/{email}")
	    public Manager findManagerByEmail(@PathVariable String email) {
	        return service.getManagerByEmail(email);
	    }
        
	    

	    @DeleteMapping("/deleteManager/{id}")
	    public String deleteManager(@PathVariable int id) {
	        return service.deleteManager(id);
	    }


}
