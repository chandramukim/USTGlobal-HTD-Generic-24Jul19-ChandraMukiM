package com.dev.essportal;

public class EmpLeaveImpl implements EmpLeaveInterface {
	//EmpLeaveImpl eli = new EmpLeaveImpl();
	EmpLeaveInfo elii = new EmpLeaveInfo();
	
	@Override
	public String leaveRequest(int id) {
		elii.setLeaveStatus("");
		return "sent";
		
	}

	@Override
	public void setLeaveRequest(int id) {
		
		
	}
	
	



}
