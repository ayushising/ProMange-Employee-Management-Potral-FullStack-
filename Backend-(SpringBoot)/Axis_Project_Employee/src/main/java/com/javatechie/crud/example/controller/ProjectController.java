package com.javatechie.crud.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javatechie.crud.example.entity.Project;
import com.javatechie.crud.example.service.ProjectService;
@CrossOrigin
@RestController
public class ProjectController {

    @Autowired
    private ProjectService service;

    @PostMapping("/addProject")
    public Project addProject(@RequestBody Project Project) {
        return service.saveProject(Project);
    }
    @GetMapping("/projects")
    public List<Project> findAllProjects() {
        return service.getProjects();
    }

    @GetMapping("/projectById/{id}")
    public Project findProductById(@PathVariable int id) {
        return service.getProjectById(id);
    }


    @DeleteMapping("/deleteProject/{id}")
    public String deleteProject(@PathVariable int id) {
        return service.deleteProject(id);
    }

	
	
}
