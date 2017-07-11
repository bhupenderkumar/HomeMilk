package com.milk.consumer;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "milkconsumer")
public class MilkConsumer {

	@Id
	@Column(name = "milkconsumerId", unique = true, nullable = false)
	private long milkConsumerId;

	public long getMilkConsumerId() {
		return milkConsumerId;
	}

	public void setMilkConsumerId(long milkConsumerId) {
		this.milkConsumerId = milkConsumerId;
	}

	private float quantity;
	private String name;
	private String address;
	private Date adjustedDate;
	private int todayPresent;
	private Date joiningDate;
	private Date leavingDate;
	private String leavingReason;
	private float milkQuantity;

	// create table milkconsumer (id int primary key, name varchar2(100),address
	// varchar2(200),ajustedDate date,
	// ,joiningDate date,leavingDate date,leavingReason varchar2(200),
	// milkQuantity float)
	public float getMilkQuantity() {
		return milkQuantity;
	}

	public void setMilkQuantity(float milkQuantity) {
		this.milkQuantity = milkQuantity;
	}

	public float getQuantity() {
		return quantity;
	}

	public void setQuantity(float quantity) {
		this.quantity = quantity;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getAdjustedDate() {
		return adjustedDate;
	}

	public void setAdjustedDate(Date adjustedDate) {
		this.adjustedDate = adjustedDate;
	}

	public int getTodayPresent() {
		return todayPresent;
	}

	public void setTodayPresent(int todayPresent) {
		this.todayPresent = todayPresent;
	}

	public Date getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(Date joiningDate) {
		this.joiningDate = joiningDate;
	}

	public Date getLeavingDate() {
		return leavingDate;
	}

	public void setLeavingDate(Date leavingDate) {
		this.leavingDate = leavingDate;
	}

	public String getLeavingReason() {
		return leavingReason;
	}

	public void setLeavingReason(String leavingReason) {
		this.leavingReason = leavingReason;
	}

}
