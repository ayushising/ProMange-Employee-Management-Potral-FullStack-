package com.axis.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

public class Docs {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String docName;
	@ManyToOne
	private Liveproject project;
	
	
	@Lob
	private byte[] data;
	
	public Docs() {}

	public Docs(String docName, byte[] data,Liveproject project) {
		super();
		this.docName = docName;
		this.data = data;
		this.project=project;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDocName() {
		return docName;
	}

	public void setDocName(String docName) {
		this.docName = docName;
	}


	public Liveproject getProject() {
		return project;
	}

	public void setProject(Liveproject project) {
		this.project = project;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

}
