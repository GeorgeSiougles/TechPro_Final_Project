package com.techpro.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.transaction.Transactional;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

/**
 * The Item class represents an item entity in the application.
 * It is used to store information about an item, such as its ID and name.
 */
@Getter
@Setter
@Data
@Transactional

@Table(name = "item")
@Entity
public class Item {    
    /**
     * The unique identifier of the item.
     */
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "itemId")
    private int itemId;

    /**
     * The name of the item.
     */
    @Column(name = "name")
    private String name;

        // Getters and Setters are generated using Lombok's annotations

}
