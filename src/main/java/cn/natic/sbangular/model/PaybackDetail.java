package cn.natic.sbangular.model;

import java.math.BigDecimal;
import java.util.Date;

public class PaybackDetail {


    private String name;
    private Date endDate;
    private BigDecimal toBeCollectedAmount;
    private BigDecimal toBeCollectedPrincipal;
    private BigDecimal toBeCollectedInterest;
    private String status;
    private String comments;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
