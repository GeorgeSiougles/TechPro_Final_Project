package com.techpro.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.techpro.project.entity.OrderDetails;
import com.techpro.project.exception.OrderDetailsNotFoundException;
import com.techpro.project.repository.OrderDetailsRepository;

import java.util.List;

@CrossOrigin("*")
@RestController
public class OrderDetailsController {

    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    /**
     * Save order details.
     *
     * @param orderDetails The order details object to be saved.
     * @return ResponseEntity<OrderDetails> The response entity containing the saved order details object and HTTP status code.
     * @throws RuntimeException If an exception occurs while saving the order details.
     */
    @PostMapping("/saveOrderDetails")
    public ResponseEntity<OrderDetails> saveOrderDetails(@RequestBody OrderDetails orderDetails) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(orderDetailsRepository.save(orderDetails));
        } catch (Exception e) {
            throw new RuntimeException("Something went wrong while saving the order details.", e);
        }
    }


    /**
     * Retrieves a list of all order details.
     *
     * @return A list of all order details.
     */
    @GetMapping("/getAllOrderDetails")
    public List<OrderDetails> getAllOrderDetails() {
        return orderDetailsRepository.findAll();
    }

    /**
     * Retrieves an order details by its ID.
     *
     * @param id The ID of the order details to retrieve.
     * @return The retrieved OrderDetails object.
     * @throws OrderDetailsNotFoundException if the order details with the given ID is not found.
     */
    @GetMapping("/orderDetails/{id}")
    public OrderDetails getOrderDetailsById(@PathVariable Integer id) {
        return orderDetailsRepository.findById(id)
                .orElseThrow(() -> new OrderDetailsNotFoundException(id));
    }

    /**
     * Deletes an order details by its ID.
     *
     * @param id The ID of the order details to delete.
     * @return A success message if the order details is deleted successfully.
     * @throws OrderDetailsNotFoundException if the order details with the given ID is not found.
     */
    @DeleteMapping("/orderDetails/{id}")
    public String deleteOrderDetails(@PathVariable Integer id) {
        if (!orderDetailsRepository.existsById(id)) {
            throw new OrderDetailsNotFoundException(id);
        }
        orderDetailsRepository.deleteById(id);
        return "Order Details with ID " + id + " has been deleted successfully";
    }

    /**
     * Update an order details.
     *
     * @param newOrderDetails The updated OrderDetails object.
     * @param id              The ID of the order details to be updated.
     * @return The updated OrderDetails object.
     * @throws OrderDetailsNotFoundException If the order details with the specified ID is not found.
     * @throws RuntimeException              If an error occurs while updating the order details.
     */
    @PutMapping("/orderDetails/{id}")
    public OrderDetails updateOrderDetails(@RequestBody OrderDetails newOrderDetails, @PathVariable Integer id) {
        try {
            return orderDetailsRepository.findById(id).map(details -> {
                details.setItem(newOrderDetails.getItem());
                details.setQuantity(newOrderDetails.getQuantity());
                return orderDetailsRepository.save(details);
            }).orElseThrow(() -> new OrderDetailsNotFoundException(id));
        } catch (Exception e) {
            throw new RuntimeException("Something went wrong while updating the order details.", e);
        }
    }
}

