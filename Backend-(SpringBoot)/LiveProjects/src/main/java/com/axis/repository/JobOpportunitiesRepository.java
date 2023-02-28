package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.model.JobOpportunities;

@Repository
public interface JobOpportunitiesRepository extends JpaRepository<JobOpportunities,Integer>{

}
