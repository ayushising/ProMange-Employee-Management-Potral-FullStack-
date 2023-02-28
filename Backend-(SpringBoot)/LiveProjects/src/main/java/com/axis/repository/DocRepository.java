package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.model.Doc;



public interface DocRepository  extends JpaRepository<Doc,Integer>{

}