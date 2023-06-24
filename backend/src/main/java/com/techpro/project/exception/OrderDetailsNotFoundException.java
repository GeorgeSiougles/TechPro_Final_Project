package com.techpro.project.exception;

/**
 * The OrderDetailsNotFoundException class is an exception that is thrown when order details information with a specific ID is not found.
 */
public class OrderDetailsNotFoundException extends RuntimeException {

    /**
     * Constructs a new OrderDetailsNotFoundException with the given order details ID.
     *
     * @param id The ID of the order details information that was not found.
     */
    public OrderDetailsNotFoundException(Integer id) {
        super("Could not find the order details info with id: " + id);
    }

}

