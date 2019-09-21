package com.dev.essportal;

public class EmpLeaveInfo {
	private int empid;
	private String leaveDate;
	private String leaveStatus;
	
	//getters and setters
	public int getEmpid() {
		return empid;
	}
	//overridden toString()
	@Override
	public String toString() {
		return "EmpLeaveInfo [empid=" + empid + ", leaveDate=" + leaveDate + ", leaveStatus=" + leaveStatus + "]";
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	public String getLeaveDate() {
		return leaveDate;
	}
	public void setLeaveDate(String leaveDate) {
		this.leaveDate = leaveDate;
	}
	public String getLeaveStatus() {
		return leaveStatus;
	}
	public void setLeaveStatus(String leaveStatus) {
		this.leaveStatus = leaveStatus;
	}
}
