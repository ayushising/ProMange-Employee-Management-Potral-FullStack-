package com.javatechie.crud.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatechie.crud.example.entity.Project;
import com.javatechie.crud.example.repository.ProjectRepository;

@Service
public class ProjectService {
	
    @Autowired
    private ProjectRepository repository;
    

    public Project saveProject(Project project) {
        return repository.save(project);
    }


    public List<Project> getProjects() {
        return repository.findAll();
    }

    public Project getProjectById(int id) {
        return repository.findById(id).orElse(null);
    }

     public String deleteProject(int id) {
        repository.deleteById(id);
        return "Project removed !! " + id;
    }


    
    



}
