package cn.natic.sbangular.model;

import java.math.BigDecimal;
import java.util.Date;

public class PaybackTrend {

    private Date date;
    private BigDecimal toBeCollectedAmount;
    private BigDecimal toBeCollectedPrincipal;
    private BigDecimal toBeCollectedInterest;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public BigDecimal getToBeCollectedAmount() {
        return toBeCollectedAmount;
    }

    public void setToBeCollectedAmount(BigDecimal toBeCollectedAmount) {
        this.toBeCollectedAmount = toBeCollectedAmount;
    }

    public BigDecimal getToBeCollectedPrincipal() {
        return toBeCollectedPrincipal;
    }

    public void setToBeCollectedPrincipal(BigDecimal toBeCollectedPrincipal) {
        this.toBeCollectedPrincipal = toBeCollectedPrincipal;
    }

    public BigDecimal getToBeCollectedInterest() {
        return toBeCollectedInterest;
    }

    public void setToBeCollectedInterest(BigDecimal toBeCollectedInterest) {
        this.toBeCollectedInterest = toBeCollectedInterest;
    }
}
