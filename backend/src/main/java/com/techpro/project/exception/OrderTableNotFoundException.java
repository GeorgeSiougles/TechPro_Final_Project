package com.techpro.project.exception;
/**
 * The OrderTableNotFoundException class is an exception that is thrown when order table information with a specific ID is not found.
 */
public class OrderTableNotFoundException extends RuntimeException {

    /**
     * Constructs a new OrderTableNotFoundException with the given order table ID.
     *
     * @param id The ID of the order table information that was not found.
     */
    public OrderTableNotFoundException(Integer id) {
        super("Could not find the order table info with id: " + id);
    }

}

