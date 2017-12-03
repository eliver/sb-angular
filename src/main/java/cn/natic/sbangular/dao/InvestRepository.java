package cn.natic.sbangular.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface InvestRepository extends JpaRepository<Invest, Long> {

    List<Invest> findByOwnerUsername(String username);

    @Transactional
    Invest save(Invest invest);

}
