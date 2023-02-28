package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.Liveproject;
import com.axis.service.LiveprojectService;

@RestController
@CrossOrigin(origins = "*")
public class LiveprojectController {

	@Autowired 
	private LiveprojectService service;
	
	@PostMapping("/addLiveproject")
	public Liveproject addLiveproject(@RequestBody Liveproject Liveproject) {
		return service.saveLiveproject(Liveproject);
	}
	
	@GetMapping("/getLiveprojects")
	public List<Liveproject> findAllLiveproject(){
		return service.getLiveproject();
	}
	@GetMapping("/liveprojectById/{id}")
    public Liveproject findProductById(@PathVariable int id) {
        return service.getLiveprojectById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteLiveproject(@PathVariable int id) {
        return service.deleteLiveproject(id);
    }
} 
