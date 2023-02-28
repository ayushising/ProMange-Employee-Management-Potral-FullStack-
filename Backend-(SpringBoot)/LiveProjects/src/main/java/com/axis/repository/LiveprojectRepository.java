package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.model.Liveproject;

@Repository
public interface LiveprojectRepository extends JpaRepository<Liveproject, Integer>{

}
