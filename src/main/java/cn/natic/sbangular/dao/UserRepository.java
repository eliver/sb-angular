package cn.natic.sbangular.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findAll();

    User findByUsername(String username);

    User save(User user);

    User findUserByUsernameAndPassword(String username, String password);

    @Transactional
    <S extends User> List<S> save(Iterable<S> users);
}
