package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.model.JobOpportunities;
import com.axis.repository.JobOpportunitiesRepository;

@Service
public class JobOpportunitiesService {

	@Autowired
	private JobOpportunitiesRepository repository;
	
	public JobOpportunities saveJobOpportunities(JobOpportunities jobOpportunities) {
        return repository.save(jobOpportunities);
    }


    public List<JobOpportunities> getJobOpportunities() {
        return repository.findAll();
    }

    public JobOpportunities getJobOpportunitiesById(int id) {
        return (JobOpportunities) repository.findById(id).orElse(null);
    }

     public String deleteJobOpportunities(int id) {
        repository.deleteById(id);
        return "Job Opportunity removed! " + id;
    }
	
}
