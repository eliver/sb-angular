package cn.natic.sbangular.model;

import java.math.BigDecimal;

public class ClientAccount {

    private BigDecimal collectedAmount;
    private BigDecimal collectedPrincipal;

    private BigDecimal collectedInterest;
    private BigDecimal earnedInterest;
    private BigDecimal todayInterest;

    private BigDecimal totalInterest;
    private BigDecimal interestPerYear;


    public BigDecimal getCollectedAmount() {
        return collectedAmount;
    }

    public void setCollectedAmount(BigDecimal collectedAmount) {
        this.collectedAmount = collectedAmount;
    }

    public BigDecimal getCollectedPrincipal() {
        return collectedPrincipal;
    }

    public void setCollectedPrincipal(BigDecimal collectedPrincipal) {
        this.collectedPrincipal = collectedPrincipal;
    }

    public BigDecimal getCollectedInterest() {
        return collectedInterest;
    }

    public void setCollectedInterest(BigDecimal collectedInterest) {
        this.collectedInterest = collectedInterest;
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
