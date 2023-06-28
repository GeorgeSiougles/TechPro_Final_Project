package com.techpro.project.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.transaction.Transactional;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Getter
@Setter
/**
 * The Person class represents a person in the application.
 * It contains information such as the person ID, first name, last name, and email.
 */
@Entity
@Table(name = "person")
@Data
@Transactional
public class Person {

    /**
     * The unique identifier of the person.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "personId")
    private int personId;

    /**
     * The first name of the person.
     */
    @Column(name = "firstName")
    private String firstName;

    /**
     * The last name of the person.
     */
    @Column(name = "lastName")
    private String lastName;

    /**
     * The email address of the person.
     */
    @Column(name = "email")
    private String email;

    // Getters and Setters are generated using Lombok's annotations

}
