//package com.axis.controller;
//
//
//
//import java.util.List;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.ByteArrayResource;
//import org.springframework.http.ResponseEntity;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.axis.model.Docs;
//import com.axis.service.DocsService;
//
//@RestController
//public class DocsController {
//	@Autowired 
//	private DocsService service;
//	
//	@GetMapping("/")
//	public String get(Model model) {
//	    List<Docs> docs = service.getFiles();
//		model.addAttribute("docs", docs);
//		return "docs";
//	}
//	
//	@PostMapping("/uploadFiles")
//	public String uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
//		for (MultipartFile file: files) {
//			service.saveFile(file);
//			
//		}
//		return "redirect:/";
//	}
//	@GetMapping("/downloadFile/{fileId}")
//	public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable Integer fileId){
//		Docs doc = service.getFile(fileId).get();
//		return ResponseEntity.ok()
//				.body(new ByteArrayResource(doc.getData()));
//	}
//}
