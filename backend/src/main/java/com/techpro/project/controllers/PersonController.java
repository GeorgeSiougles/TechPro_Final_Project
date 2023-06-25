package com.techpro.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.techpro.project.entity.Person;
import com.techpro.project.exception.PersonNotFoundException;
import com.techpro.project.repository.PersonRepository;

@RestController
@CrossOrigin("*")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    /**
     * Creates a new person.
     *
     * @param newPerson The Person object to be created.
     * @return The created Person object.
     * @throws RuntimeException if an error occurs while saving the person.
     */
    @PostMapping("/person")
    Person newPerson(@RequestBody Person newPerson) {
        try {
            return personRepository.save(newPerson);
        }
        catch (Exception e) {
            throw new RuntimeException("Something went wrong while saving the order table.", e);
        }
    }

    /**
     * Retrieves a list of all people.
     *
     * @return A list of all people.
     */
    @GetMapping("/allPeople")
    List<Person> getAllPeople() {
        return personRepository.findAll();
    }

    /**
     * Retrieves a person by their ID.
     *
     * @param id The ID of the person to retrieve.
     * @return The retrieved Person object.
     * @throws PersonNotFoundException if the person with the given ID is not found.
     */
    @GetMapping("/person/{id}")
    Person getPersonById(@PathVariable Integer id) {
        return personRepository.findById(id)
                .orElseThrow(() -> new PersonNotFoundException(id));
    }

    /**
     * Deletes a person by their ID.
     *
     * @param id The ID of the person to delete.
     * @return A success message if the person is deleted successfully.
     * @throws PersonNotFoundException if the person with the given ID is not found.
     */
    @DeleteMapping("/person/{id}")
    String deletePerson(@PathVariable Integer id) {
        if (!personRepository.existsById(id)) {
            throw new PersonNotFoundException(id);
        }
        personRepository.deleteById(id);
        return "Person with ID " + id + " has been deleted successfully";
    }

    /**
     * Updates a person by their ID.
     *
     * @param newPerson The updated Person object.
     * @param id        The ID of the person to update.
     * @return The updated Person object.
     * @throws PersonNotFoundException if the person with the given ID is not found.
     * @throws RuntimeException       if an error occurs while updating the person.
     */
    @PutMapping("/person/{id}")
    Person updatePerson(@RequestBody Person newPerson, @PathVariable Integer id) {
        try {
        return personRepository.findById(id).map(person -> {
            person.setFirstName(newPerson.getFirstName());
            person.setLastName(newPerson.getLastName());
            person.setEmail(newPerson.getEmail());
            return personRepository.save(person);
        }).orElseThrow(() -> new PersonNotFoundException(id));
        }
        catch (Exception e) {
            throw new RuntimeException("Something went wrong while saving the order table.", e);
        }
    }

    /**
     * Retrieves the ID of a person by their email.
     *
     * @param email The email of the person.
     * @return The ID of the person.
     * @throws PersonNotFoundException if the person with the given email is not found.
     */
    @GetMapping("/id")
    public Integer getPesonByEmail(@RequestParam("email") String email) {
        Person person = personRepository.findByEmail(email);
        if (person != null) {
            return person.getPersonId();
        } else {
            throw new PersonNotFoundException(0);
        }
    }
}

