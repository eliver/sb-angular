package cn.natic.sbangular.model;

import java.math.BigDecimal;

public class ClientAccount {

    private BigDecimal toBeCollectedAmount;
    private BigDecimal toBeCollectedPrincipal;

    private BigDecimal toBeCollectedInterest;
    private BigDecimal earnedInterest;
    private BigDecimal todayInterest;

    private BigDecimal totalInterest;
    private BigDecimal interestPerYear;


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

    public BigDecimal getEarnedInterest() {
        return earnedInterest;
    }

    public void setEarnedInterest(BigDecimal earnedInterest) {
        this.earnedInterest = earnedInterest;
    }

    public BigDecimal getTodayInterest() {
        return todayInterest;
    }

    public void setTodayInterest(BigDecimal todayInterest) {
        this.todayInterest = todayInterest;
    }

    public BigDecimal getTotalInterest() {
        return totalInterest;
    }

    public void setTotalInterest(BigDecimal totalInterest) {
        this.totalInterest = totalInterest;
    }

    public BigDecimal getInterestPerYear() {
        return interestPerYear;
    }

    public void setInterestPerYear(BigDecimal interestPerYear) {
        this.interestPerYear = interestPerYear;
    }
}
