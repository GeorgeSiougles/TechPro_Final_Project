package com.techpro.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.techpro.project.entity.Item;
import com.techpro.project.exception.ItemNotFoundException;
import com.techpro.project.repository.ItemRepository;

import java.util.List;

@CrossOrigin("*")
@RestController
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    /**
     * Save an item.
     *
     * @param item The item object to be saved.
     * @return ResponseEntity<Item> The response entity containing the saved item object and HTTP status code.
     * @throws RuntimeException If an exception occurs while saving the item.
     */
    @PostMapping("/saveItem")
    public ResponseEntity<Item> saveItem(@RequestBody Item item) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(itemRepository.save(item));
        } catch (Exception e) {
            throw new RuntimeException("Something went wrong while saving the item.", e);
        }
    }

    /**
     * Retrieves a list of all items.
     *
     * @return A list of all items.
     */
    @GetMapping("/getAllItems")
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    /**
     * Retrieves an item by its ID.
     *
     * @param id The ID of the item to retrieve.
     * @return The retrieved Item object.
     * @throws ItemNotFoundException if the item with the given ID is not found.
     */
    @GetMapping("/item/{id}")
    public Item getItemById(@PathVariable Integer id) {
        return itemRepository.findById(id)
                .orElseThrow(() -> new ItemNotFoundException(id));
    }

    /**
     * Deletes an item by its ID.
     *
     * @param id The ID of the item to delete.
     * @return A success message if the item is deleted successfully.
     * @throws ItemNotFoundException if the item with the given ID is not found.
     */
    @DeleteMapping("/item/{id}")
    public String deleteItem(@PathVariable Integer id) {
        if (!itemRepository.existsById(id)) {
            throw new ItemNotFoundException(id);
        }
        itemRepository.deleteById(id);
        return "Item with ID " + id + " has been deleted successfully";
    }

    /**
     * Update an item with the given ID.
     *
     * @param newItem The updated item information.
     * @param id      The ID of the item to update.
     * @return The updated item.
     * @throws ItemNotFoundException If the item with the specified ID is not found.
     * @throws RuntimeException     If an error occurs while saving the item.
     */
    @PutMapping("/item/{id}")
    public Item updateItem(@RequestBody Item newItem, @PathVariable Integer id) {
        try {
            return itemRepository.findById(id).map(item -> {
                item.setName(newItem.getName());
                return itemRepository.save(item);
            }).orElseThrow(() -> new ItemNotFoundException(id));
        } catch (Exception e) {
            throw new RuntimeException("Something went wrong while saving the item.", e);
        }
}
}

