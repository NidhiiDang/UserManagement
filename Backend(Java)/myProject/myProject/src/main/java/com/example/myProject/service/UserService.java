package com.example.myProject.service;

import com.example.myProject.model.User;

import java.util.List;

public interface UserService {

    public User addUser(User user);
    public List<User> getUsers();
    public User deleteUser(Long UserId);
    public User showUser(Long userId);
    public User editUserById(User user,Long userID);


}
