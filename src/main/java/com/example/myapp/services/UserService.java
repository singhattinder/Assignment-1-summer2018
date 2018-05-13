package com.example.myapp.services;


import com.example.myapp.models.User;
import com.example.myapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserService  {

    @Autowired
    UserRepository repository;

    @GetMapping("/api/user")
    public List<User> findAllUsers(){

       return (List<User>)repository.findAll();

    }
    @PostMapping("/api/user")
    public User createUser(@RequestBody User user){

        return repository.save(user);

    }


    @PostMapping("/api/login")
    public User login(@RequestBody User user){


        return (User) repository.findUserByCredentials(user.getUsername(), user.getPassword());

    }

    @DeleteMapping("/api/user/{userId}")
    public void deleteUser(@PathVariable("userId") int id){

         repository.deleteById(id);
    }

    @GetMapping("/api/user/{userId}")
    public User findUserById(@PathVariable("userId") int id){

        Optional<User> data =  repository.findById(id);

         if(data.isPresent()){
             return data.get();
         }
         return null;

         }

    @PutMapping("/api/user/{userId}")
    public User updateUser(@PathVariable("userId") int id, @RequestBody User newUser){

        Optional<User> data =  repository.findById(id);

        if(data.isPresent()){
            User user = data.get();

            if (!(user.getFirstName().isEmpty() && user.getLastName().isEmpty())) {
                user.setFirstName(newUser.getFirstName());
                user.setLastName(newUser.getLastName());
                repository.save(user);
                System.out.print(user.getId());
                return user;
            }
        }
        return null;


    }


}
