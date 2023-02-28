package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.model.Liveproject;
import com.axis.repository.LiveprojectRepository;



	@Service
	public class LiveprojectService {
		
	    @Autowired
	    private LiveprojectRepository repository;
	    

	    public Liveproject saveLiveproject(Liveproject liveproject) {
	        return repository.save(liveproject);
	    }


	    public List<Liveproject> getLiveproject() {
	        return repository.findAll();
	    }

	    public Liveproject getLiveprojectById(int id) {
	        return (Liveproject) repository.findById(id).orElse(null);
	    }

	     public String deleteLiveproject(int id) {
	        repository.deleteById(id);
	        return "Live Project removed !! " + id;
	    }


}
