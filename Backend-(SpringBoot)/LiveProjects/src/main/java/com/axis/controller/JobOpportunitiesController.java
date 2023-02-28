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

import com.axis.model.JobOpportunities;
import com.axis.model.Liveproject;
import com.axis.service.JobOpportunitiesService;
import com.axis.service.LiveprojectService;

@RestController
@CrossOrigin(origins = "*")
public class JobOpportunitiesController {

	@Autowired 
	private JobOpportunitiesService service;
	
	@PostMapping("/addJobOpportunity")
	public JobOpportunities addJobOpportunities(@RequestBody JobOpportunities jobOpportunities) {
		return service.saveJobOpportunities(jobOpportunities);
	}
	
	@GetMapping("/getJobOpportunities")
	public List<JobOpportunities> findAllJobOpportunities(){
		return service.getJobOpportunities();
	}
	@GetMapping("/JobOpportunityById/{id}")
    public JobOpportunities findJobOpportunitiesById(@PathVariable int id) {
        return service.getJobOpportunitiesById(id);
    }

    @DeleteMapping("/deleteJobOpportunity/{id}")
    public String deleteJobOpportunities(@PathVariable int id) {
        return service.deleteJobOpportunities(id);
    }
}
