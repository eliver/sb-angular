package cn.natic.sbangular.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface InvestRepository extends JpaRepository<Invest, Long> {

    List<Invest> findByOwner(String owner);

}
