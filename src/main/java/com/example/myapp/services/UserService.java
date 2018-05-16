package com.example.myapp.services;


import com.example.myapp.models.User;
import com.example.myapp.repositories.UserRepository;
import com.sendgrid.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
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

    @PostMapping("/api/register")
    public User registerUser(@RequestBody User user, HttpServletResponse response){

          List<User> usr = repository.findUserByUsername(user.getUsername());


        if (usr.size()!=0 && usr.get(0).getUsername().toString().equals(user.getUsername()) )
        {
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
             List<User> usr = repository.findUserByUsername(user.getUsername());

        if ((newUser!=null) && (newUser.getUsername().equals(user.getUsername()))){

            return newUser;
        }
        else if (usr.size()!=0){
            User returnUser = new User();
            returnUser.setId(-1);

            return returnUser;
        }
        else {
            User returnUser = new User();

            return returnUser;
        }


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


                user.setFirstName(newUser.getFirstName());
                user.setLastName(newUser.getLastName());
                user.setEmail(newUser.getEmail());
                user.setPhone(newUser.getPhone());
                user.setDateOfBirth(newUser.getDateOfBirth());
                user.setRole(newUser.getRole());
                repository.save(user);
                return user;

        }
        return null;


    }

    @PostMapping("/api/search")
    public User searchUser(@RequestBody User user){



        List<User> usr = repository.findUserByUsername(user.getUsername());


            if(usr.size()==0)
            {
                User newUser = new User();
                newUser.setId(-1);
                return newUser;
            }


            else {

                User newUser = (User) usr.get(0);

                return newUser;
            }

    }

    @GetMapping("/api/email")
    public Response mailSender(){
        Email from = new Email("abc@example.com");
        String subject = "Sending with SendGrid is Fun";
        Email to = new Email("attinder.saini@gmail.com");
        Content content = new Content("text/plain", "and easy to do anywhere, even with Java");
        Mail mail = new Mail(from, subject, to, content);
        Response response = null;

        SendGrid sg = new SendGrid(System.getenv("SENDGRID_API"));
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            response = sg.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());
        } catch (IOException ex) {
            System.out.println(ex);
        }
        return response;

    }


}
