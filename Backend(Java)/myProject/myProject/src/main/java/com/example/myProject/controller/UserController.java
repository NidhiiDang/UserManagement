package com.example.myProject.controller;

import com.example.myProject.model.User;
import com.example.myProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user/add")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @GetMapping("/users/show-all")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @DeleteMapping("/delete/{id}")
    public User deleteUser(@PathVariable Long id){
         return userService.deleteUser(id);
    }

    @GetMapping("/user/show/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.showUser(id);
    }

    @PutMapping("/edit/user/{id}")
    public User editUser(@RequestBody User user, @PathVariable Long id){
        return userService.editUserById(user,id);
    }

}
