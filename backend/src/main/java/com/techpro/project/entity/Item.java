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

@Getter
@Setter
@Data
@Transactional

@Table(name = "item")
@Entity
public class Item {    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "itemId")
    private int itemId;

    @Column(name = "name")
    private String name;

}
