package com.axis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
@Entity
@Table(name="support")
public class Support {
	@Id
	@GeneratedValue
	private int support_id;
	private String support_department;
	private String support_name;
	private String support_email;
	@ManyToOne
	private Liveproject project;
	public int getSupport_id() {
		return support_id;
	}
	public void setSupport_id(int support_id) {
		this.support_id = support_id;
	}
	public String getSupport_department() {
		return support_department;
	}
	public void setSupport_department(String support_department) {
		this.support_department = support_department;
	}
	public String getSupport_name() {
		return support_name;
	}
	public void setSupport_name(String support_name) {
		this.support_name = support_name;
	}
	public String getSupport_email() {
		return support_email;
	}
	public void setSupport_email(String support_email) {
		this.support_email = support_email;
	}
	public Liveproject getProject() {
		return project;
	}
	public void setProject_id(Liveproject project) {
		this.project = project;
	}
	
	@Override
	public String toString() {
		return "Support[support_id="+support_id+", support_department="+support_department+",support_name="+support_name+",support_email="+support_email+",project="+project+"]";
	}
	

}
