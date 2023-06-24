package com.techpro.project.exception;

/**
 * The PersonNotFoundException class is an exception that is thrown when a person with a specific ID is not found.
 */
public class PersonNotFoundException extends RuntimeException {

    /**
     * Constructs a new PersonNotFoundException with the given person ID.
     *
     * @param id The ID of the person that was not found.
     */
    public PersonNotFoundException(Integer id) {
        super("Could not find the person with id: " + id);
    }

}
