package com.techpro.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techpro.project.entity.Person;
import com.techpro.project.exception.PersonNotFoundException;
import com.techpro.project.repository.PersonRepository;

import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("*")
@RestController
public class PersonController {
    @Autowired
    private PersonRepository personRepository;

    @PostMapping("/person")
    Person newPerson(@RequestBody Person newPerson){
        return personRepository.save(newPerson);
    }

    @GetMapping("/allPeople")
    List<Person> getAllPeople(){
        return personRepository.findAll();
    }

    @GetMapping("/person/{id}")
    Person getPersonById(@PathVariable Integer id){
        return personRepository.findById(id).orElseThrow(()-> new PersonNotFoundException(id));
    }

    @PutMapping("/person/{id}")
    Person updatePerson(@RequestBody Person newPerson,@PathVariable Integer id){
        return personRepository.findById(id).map( person -> {
            person.setFirstName(newPerson.getEmail());
            person.setLastName(newPerson.getLastName());
            person.setEmail((newPerson.getEmail()));
            return personRepository.save(person);
        }).orElseThrow(()->new PersonNotFoundException(id));
    }

    @DeleteMapping("/person/{id}")
    String deletePerson(@PathVariable Integer id)
    {
        if(!personRepository.existsById(id)){
            throw new PersonNotFoundException(id);
        }
        personRepository.deleteById(id);
        return "Person with id " + id + " has been deleted successfully";
    }

}
