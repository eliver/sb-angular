package cn.natic.sbangular.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByLastName(String lastName);

    User findUserByUsernameAndPassword(String username, String password);
}
