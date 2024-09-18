package com.example.myProject.service;

import com.example.myProject.Repository.UserRepo;
import com.example.myProject.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public User addUser(User user) {
        userRepo.save(user);
       return user;
    }

    @Override
    public List<User> getUsers() {
       return userRepo.findAll();
    }

    @Override
    public User deleteUser(Long userId) {
        User user=userRepo.findById(userId).orElse(null);
        userRepo.delete(user);
        return user;
    }

    @Override
    public User showUser(Long userId) {
       return userRepo.findById(userId).orElse(null);
    }

    @Override
    public User editUserById(User user, Long userID) {
        User oldUser = userRepo.findById(userID).orElse(null);
        if(oldUser !=null){
            oldUser.setName(((user.getName() != null) ? user.getName() : oldUser.getName()));
            oldUser.setEmail(((user.getEmail() != null) ? user.getEmail() : oldUser.getEmail()));
            oldUser.setPhone(((user.getPhone() != null) ? user.getPhone() : oldUser.getPhone()));
        }
        return userRepo.save(oldUser);
    }
}
