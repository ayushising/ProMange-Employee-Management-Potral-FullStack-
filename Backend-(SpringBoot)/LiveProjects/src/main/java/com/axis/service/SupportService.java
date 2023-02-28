package com.axis.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.axis.model.Support;
import com.axis.repository.SupportRepository;

@Service
public class SupportService {
	@Autowired
	private SupportRepository repository;
	
	public Support saveSupport(Support support) {
        return repository.save(support);
    }


    public List<Support> getSupports() {
        return repository.findAll();
    }

    public Support getSupportById(int id) {
        return (Support) repository.findById(id).orElse(null);
    }

     public String deleteSupport(int id) {
        repository.deleteById(id);
        return "Support removed! " + id;
    }

}
