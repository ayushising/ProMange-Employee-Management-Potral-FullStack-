package com.axis.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Job_Opportunities")
public class JobOpportunities {
	@Id
	@GeneratedValue
	private int job_id;
	private String job_name;
	private String job_desc;
	@ManyToOne
	Liveproject project;
	public int getJob_id() {
		return job_id;
	}
	public void setJob_id(int job_id) {
		this.job_id = job_id;
	}
	public String getJob_name() {
		return job_name;
	}
	public void setJob_name(String job_name) {
		this.job_name = job_name;
	}
	public String getJob_desc() {
		return job_desc;
	}
	public void setJob_desc(String job_desc) {
		this.job_desc = job_desc;
	}
	public Liveproject getProject() {
		return project;
	}
	public void setProject(Liveproject project) {
		this.project = project;
	}
	
	@Override
	public String toString() {
		return "Job Opportunities[job_id="+job_id+", job_name="+job_name+",job_desc="+job_desc+",project="+project+"]";
	}
	
}
