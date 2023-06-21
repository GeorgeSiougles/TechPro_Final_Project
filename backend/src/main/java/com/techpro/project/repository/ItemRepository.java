package com.techpro.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techpro.project.entity.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item,Integer>{
    
}
