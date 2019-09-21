package com.dev.essportal;

public class EmployeeInfo {
	private int empId;
	private String empName;
	private String empType;
	private String email;
	private String password;
	
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getEmpType() {
		return empType;
	}
	public void setEmpType(String empType) {
		this.empType = empType;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPassword() {
		return password;
	}
	@Override
	public String toString() {
		return "Employee_Info [empId=" + empId + ", empName=" + empName + ", empType=" + empType + ", email=" + email
				+ "]";
	}
	
	

}
