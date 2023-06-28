package com.techpro.project.exception;

/**
 * The ItemNotFoundException class is an exception that is thrown when an item with a specific ID is not found.
 */
public class ItemNotFoundException extends RuntimeException {

    /**
     * Constructs a new ItemNotFoundException with the given item ID.
     *
     * @param id The ID of the item that was not found.
     */
    public ItemNotFoundException(Integer id) {
        super("Could not find the item with id: " + id);
    }

}
