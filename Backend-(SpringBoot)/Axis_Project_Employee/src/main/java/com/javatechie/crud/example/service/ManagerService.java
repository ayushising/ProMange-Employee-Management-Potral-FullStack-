package com.javatechie.crud.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatechie.crud.example.entity.Manager;
import com.javatechie.crud.example.repository.ManagerRepository;

@Service
public class ManagerService {
	
	 @Autowired
	    private ManagerRepository repository;
	    

	    public Manager saveManager(Manager Manager) {
	        return repository.save(Manager);
	    }


	    public List<Manager> getManagers() {
	        return repository.findAll();
	    }

	    public Manager getManagerById(int id) {
	        return repository.findById(id).orElse(null);
	    }

	    public Manager getManagerByEmail(String email) {
	        return repository.findByEmail(email);
	    }

	     public String deleteManager(int id) {
	        repository.deleteById(id);
	        return "Manager removed !! " + id;
	    }


}
