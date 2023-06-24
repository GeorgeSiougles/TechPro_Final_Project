package com.techpro.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techpro.project.entity.Person;

/**
 * The PersonRepository interface is a repository interface for managing Person entities.
 * It extends the JpaRepository interface provided by Spring Data JPA.
 */
@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {

    /**
     * Retrieves a person by their email.
     *
     * @param email The email of the person to retrieve.
     * @return The person with the specified email.
     */
    Person findByEmail(String email);
}
