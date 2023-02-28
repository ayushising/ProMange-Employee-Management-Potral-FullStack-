package com.axis.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name ="liveproject_table")
public class Liveproject {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int project_id;
	private String project_name;
	private String project_desc;
	private String owner_name;
	private String owner_email;
	public int getProject_id() {
		return project_id;
	}
	public void setProject_id(int project_id) {
		this.project_id = project_id;
	}
	public String getProject_name() {
		return project_name;
	}
	public void setProject_name(String project_name) {
		this.project_name = project_name;
	}
	public String getProject_desc() {
		return project_desc;
	}
	public void setProject_desc(String project_desc) {
		this.project_desc = project_desc;
	}
	public String getOwner_name() {
		return owner_name;
	}
	public void setOwner_name(String owner_name) {
		this.owner_name = owner_name;
	}
	public String getOwner_email() {
		return owner_email;
	}
	public void setOwner_email(String owner_email) {
		this.owner_email = owner_email;
	}
	@Override
	public String toString() {
		return "Liveproject [project_id="+project_id+",project_name="+project_name+",project_desc="+project_desc+", owner_name="+owner_name+",owner_email="+owner_email+"]";
	}
//	public Liveproject(int project_id, String project_name, String project_desc, String owner_name,
//			String owner_email) {
//		super();
//		this.project_id = project_id;
//		this.project_name = project_name;
//		this.project_desc = project_desc;
//		this.Owner_name = owner_name;
//		this.Owner_email = owner_email;
//	}
	
	
	
	
}
