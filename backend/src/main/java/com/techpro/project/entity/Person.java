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
@Data
@Transactional

@Table(name = "person")
@Entity
public class Person {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "personId")
    private int personId;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName" )
    private String lastName;

    @Column(name = "email" )
    private String email;

}
