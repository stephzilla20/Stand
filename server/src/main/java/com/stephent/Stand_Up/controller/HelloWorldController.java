package com.stephent.Stand_Up.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class HelloWorldController {
    @GetMapping(path = "/hello")
    public Map<String,Object> helloWorld(){
        Map<String,Object> response = new HashMap<>();
        response.put("message","Hello World");
        return response;
    }
}
