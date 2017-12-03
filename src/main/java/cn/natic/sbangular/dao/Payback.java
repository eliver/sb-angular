package cn.natic.sbangular.dao;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
public class Payback {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToOne
    private Invest invest;
    private int period;
    private Date paybackDay;
    private BigDecimal paybackAmount;
    private BigDecimal paybackPrincipal;
    private BigDecimal paybackInterest;
    private boolean paid;

    public Payback() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getPeriod() {
        return period;
    }

    public void setPeriod(int period) {
        this.period = period;
    }

    public Invest getInvest() {
        return invest;
    }

    public void setInvest(Invest invest) {
        this.invest = invest;
    }

    public Date getPaybackDay() {
        return paybackDay;
    }

    public void setPaybackDay(Date paybackDay) {
        this.paybackDay = paybackDay;
    }

    public BigDecimal getPaybackAmount() {
        return paybackAmount;
    }

    public void setPaybackAmount(BigDecimal paybackAmount) {
        this.paybackAmount = paybackAmount;
    }

    public BigDecimal getPaybackPrincipal() {
        return paybackPrincipal;
    }

    public void setPaybackPrincipal(BigDecimal paybackPrincipal) {
        this.paybackPrincipal = paybackPrincipal;
    }

    public BigDecimal getPaybackInterest() {
        return paybackInterest;
    }

    public void setPaybackInterest(BigDecimal paybackInterest) {
        this.paybackInterest = paybackInterest;
    }

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }
}
