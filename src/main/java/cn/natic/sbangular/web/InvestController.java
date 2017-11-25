package cn.natic.sbangular.web;

import cn.natic.sbangular.dao.Invest;
import cn.natic.sbangular.dao.InvestRepository;
import cn.natic.sbangular.model.ClientAccount;
import cn.natic.sbangular.model.PaybackDetail;
import cn.natic.sbangular.model.PaybackTrend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class InvestController {

    @Autowired
    InvestRepository repository;

    @RequestMapping("/addInvests")
    public void addInvests(List<Invest> invests) {
        repository.addInvest(invests);
    }

    @RequestMapping("/clientAccount")
    public ClientAccount getClientAccount() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        List<Invest> invests = repository.findByOwner(username);


        return new ClientAccount();
    }

    @RequestMapping("/investList")
    public List<Invest> getInvestList() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        List<Invest> invests = repository.findByOwner(username);
        return invests;
    }


    @RequestMapping("/paybackTrend")
    public List<PaybackTrend> getPaybackList() {
        return null;
    }

    @RequestMapping("/paybackDetail")
    public PaybackDetail getPaybackDetail() {
        return null;
    }


}
