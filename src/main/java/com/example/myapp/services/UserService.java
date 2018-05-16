package com.example.myapp.services;


import com.example.myapp.models.User;
import com.example.myapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class UserService  {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

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

    @PostMapping("/api/register")
    public User registerUser(@RequestBody User user, HttpServletResponse response){

          List<User> usr = repository.findUserByUsername(user.getUsername());

//          System.out.print(usr.get(0).getUsername());
//        System.out.print(user.getUsername());

       // log.info("usr.get "+usr.get(0).getUsername());
        //log.info("USER "+user.getUsername());



        if (usr.size()!=0 && usr.get(0).getUsername().toString().equals(user.getUsername()) )
        {

           // response.setStatus(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
           User newUser = new User();
           newUser.setUsername(user.getUsername());
           return newUser;

        }
        else {
            return repository.save(user);
        }



    }


    @PostMapping("/api/login")
    public User login(@RequestBody User user){
              User newUser = (User) repository.findUserByCredentials(user.getUsername(), user.getPassword());

        if ((newUser!=null) && (newUser.getUsername().equals(user.getUsername()))){

            return newUser;
        }
        else {
            User returnUser = new User();

            return returnUser;
        }



       // return (User) repository.findUserByCredentials(user.getUsername(), user.getPassword());

    }

    @DeleteMapping("/api/user/{userId}")
    public void deleteUser(@PathVariable("userId") int id){

         repository.deleteById(id);
    }

    @GetMapping("/api/profile/{userId}")
    public User findUserById(@PathVariable("userId") int id){

        Optional<User> data =  repository.findById(id);

         if(data.isPresent()){
             return data.get();
         }
         return null;

         }

    @PutMapping("/api/profile/{userId}")
    public User updateUser(@PathVariable("userId") int id, @RequestBody User newUser){

        Optional<User> data =  repository.findById(id);

        if(data.isPresent()){
            User user = data.get();

            if (!(user.getFirstName().isEmpty() && user.getLastName().isEmpty())) {
                user.setFirstName(newUser.getFirstName());
                user.setLastName(newUser.getLastName());
                user.setEmail(newUser.getEmail());
                user.setPhone(newUser.getPhone());
                user.setDateOfBirth(newUser.getDateOfBirth());
                user.setRole(newUser.getRole());
                repository.save(user);
                return user;
            }
        }
        return null;


    }


}
