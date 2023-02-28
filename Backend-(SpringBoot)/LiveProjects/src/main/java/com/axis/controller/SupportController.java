package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.Liveproject;
import com.axis.model.Support;
import com.axis.service.LiveprojectService;
import com.axis.service.SupportService;

@RestController
@CrossOrigin(origins = "*")
public class SupportController {
	
	@Autowired 
	private SupportService service;
	
	@PostMapping("/addSupport")
	public Support addSupport(@RequestBody Support support) {
		return service.saveSupport(support);
	}
	
	@GetMapping("/getSupports")
	public List<Support> findAllSupports(){
		return service.getSupports();
	}
	@GetMapping("/SupportById/{id}")
    public Support findSupportById(@PathVariable int id) {
        return service.getSupportById(id);
    }

    @DeleteMapping("/deleteSupport/{id}")
    public String deleteSupport(@PathVariable int id) {
        return service.deleteSupport(id);
    }

}
