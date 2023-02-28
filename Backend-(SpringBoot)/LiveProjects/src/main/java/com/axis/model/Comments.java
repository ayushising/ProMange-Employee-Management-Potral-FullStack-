//package com.axis.model;
//
//
//
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.ManyToOne;
//import jakarta.persistence.Table;
//@Entity
//@Table
//public class Comments{
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private int cId;
//	private String comments;
//	@ManyToOne(fetch = FetchType.EAGER)
//	 private News nId;
//	public Comments() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//	public int getcId() {
//		return cId;
//	}
//
//	public void setcId(int cId) {
//		this.cId = cId;
//	}
//
//	public Comments(String comments,News nId) {
//		super();
//		this.comments = comments;
//		this.nId = nId;
//	}
//
//	public News getnId() {
//		return nId;
//	}
//	public void setnId(News nId) {
//		this.nId = nId;
//	}
//	public String getComments() {
//		return comments;
//	}
//
//	public void setComments(String comments) {
//		this.comments = comments;
//	}
//	
//	
//}
