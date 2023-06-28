package com.techpro.project.entity;



import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.transaction.Transactional;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
/**
 * The OrderTable class represents an order table in the application.
 * It contains information such as the order table ID, order date, and associated person.
 */
@Entity
@Table(name = "orderTable")
@Data
@Transactional
public class OrderTable {
    
    /**
     * The unique identifier of the order table.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderTableId")
    private int orderTableId;
    
    /**
     * The date of the order.
     */
    @Column(name = "orderDate")
    private LocalDateTime orderDate;
    
    /**
     * The associated person who placed the order.
     */
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "personId")
    private Person person;
    
    // Getters and Setters are generated using Lombok's annotations
    
}

