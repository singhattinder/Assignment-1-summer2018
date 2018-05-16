package com.example.myapp.repositories;

import com.example.myapp.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {




    @Query("SELECT u FROM User u WHERE u.username=:username AND u.password=:password")
    User findUserByUsernameAndPassword(
            @Param("username") String username,
            @Param("password") String password);

    @Query("SELECT u FROM User u WHERE u.username=:username")
    List<User> findUserByUsername(
            @Param("username") String username);

    @Query("SELECT u FROM User u WHERE u.email=:email")
    User findUserByEmail(
            @Param("email") String email);



}
