package cn.natic.sbangular.web;

import cn.natic.sbangular.dao.*;
import cn.natic.sbangular.model.ClientAccount;
import cn.natic.sbangular.model.PaybackTrend;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class InvestController {

    @Autowired
    InvestRepository investRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PaybackRepository paybackRepository;

    @Transactional
    @RequestMapping("/addInvests")
    public boolean addInvests(@RequestBody Invest invest) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        User owner = userRepository.findByUsername(username);
        invest.setOwner(owner);
        Invest invest1 = investRepository.save(invest);

        Date startDate = invest1.getStartDate();
        Date endDate = invest1.getEndDate();


        List<Payback> paybackList = new ArrayList<Payback>();
        Payback payback;
        int index = 1;
        while (startDate.compareTo(endDate) < 0) {
            payback = new Payback();
            payback.setInvest(invest1);
            payback.setPeriod(index++);
            payback.setPaid(false);
            payback.setPaybackAmount(new BigDecimal(100));
            payback.setPaybackInterest(new BigDecimal(100));
            payback.setPaybackPrincipal(new BigDecimal(100));
            startDate = DateUtils.addMonths(startDate, 1);
            payback.setPaybackDay(startDate);
            paybackList.add(payback);
        }

        paybackRepository.save(paybackList);

        return true;
    }

    @RequestMapping("/getClientAccount")
    public ClientAccount getClientAccount() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        List<Invest> invests = investRepository.findByOwnerUsername(username);

        ClientAccount ca = new ClientAccount();
        ca.setToBeCollectedAmount(new BigDecimal(1000));
        ca.setToBeCollectedPrincipal(new BigDecimal(1000));
        ca.setToBeCollectedInterest(new BigDecimal(1000));
        ca.setEarnedInterest(new BigDecimal(1000));
        ca.setTodayInterest(new BigDecimal(1000));
        ca.setTotalInterest(new BigDecimal(1000));
        ca.setInterestPerYear(new BigDecimal(1000));

        return ca;
    }

    @RequestMapping("/getInvestList")
    public List<Invest> getInvestList() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        User user = userRepository.findByUsername(username);
        List<Invest> invests = new ArrayList<Invest>();

        if ("admin".equals(user.getRole())) {
            invests = investRepository.findAll();
        } else {
            invests = investRepository.findByOwnerUsername(username);
        }

        return invests;
    }

    @RequestMapping("/paybackTrend")
    public List<PaybackTrend> getPaybackList() {
        return null;
    }

    @RequestMapping("/getPaybackDetail")
    public List<Payback> getPaybackDetail() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        return paybackRepository.findByInvestOwnerUsername(username);
    }


}
