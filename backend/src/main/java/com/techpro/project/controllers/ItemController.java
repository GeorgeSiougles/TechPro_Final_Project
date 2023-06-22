package com.techpro.project.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techpro.project.entity.Item;
import com.techpro.project.exception.ItemNotFoundException;
import com.techpro.project.repository.ItemRepository;

import org.springframework.web.bind.annotation.RequestBody;



import java.util.List;

@CrossOrigin("*")
@RestController
public class ItemController {
    
    @Autowired
    private ItemRepository itemRepository;

    @PostMapping("/saveItem")
    Item saveItem(@RequestBody Item item){
        return itemRepository.save(item);
    }

    @GetMapping("/getAllItems") 
    List<Item> getAllItems(){
        return itemRepository.findAll();
    }

    @GetMapping("item/{id}")
    Item getItemById(@PathVariable Integer id){
        return itemRepository.findById(id).orElseThrow(()-> new ItemNotFoundException(id));
    }
}
