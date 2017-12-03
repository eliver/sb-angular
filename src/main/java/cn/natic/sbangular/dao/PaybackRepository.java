package cn.natic.sbangular.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface PaybackRepository extends JpaRepository<Payback, Long> {

    List<Payback> findByInvest(Invest invest);

    @Transactional
    <S extends Payback> List<S> save(Iterable<S> paybackList);

    List<Payback> findByInvestOwnerUsername(String username);

}
