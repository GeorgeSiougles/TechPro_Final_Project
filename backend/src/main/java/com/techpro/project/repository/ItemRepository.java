package com.techpro.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techpro.project.entity.Item;

/**
 * The ItemRepository interface is a repository interface for managing Item entities.
 * It extends the JpaRepository interface provided by Spring Data JPA.
 */
@Repository
public interface ItemRepository extends JpaRepository<Item,Integer>{
    
}
