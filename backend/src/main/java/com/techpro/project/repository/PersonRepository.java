package com.techpro.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techpro.project.entity.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person,Integer> {
    Person findByEmail(String email);
}
