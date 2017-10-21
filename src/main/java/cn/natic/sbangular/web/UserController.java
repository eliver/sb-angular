package cn.natic.sbangular.web;

import cn.natic.sbangular.dao.User;
import cn.natic.sbangular.dao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository repository;

    @RequestMapping("/users")
    public List<User> getUsers() {
        return repository.findByLastName("tian");
    }

}
