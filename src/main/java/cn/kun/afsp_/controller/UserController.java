package cn.kun.afsp_.controller;

import cn.kun.afsp_.AfpaApplication;
import cn.kun.afsp_.data.User;
import cn.kun.afsp_.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    public static void main(String[] args) {
        SpringApplication.run(AfpaApplication.class, args);
    }

    @Autowired
    private UserMapper userMapper;

    @PostMapping
    public Integer save(@RequestBody User user){
        return userMapper.insert(user);
    }

    @GetMapping("/")
    public List<User> index(){
        return userMapper.findAll();
    }

}
