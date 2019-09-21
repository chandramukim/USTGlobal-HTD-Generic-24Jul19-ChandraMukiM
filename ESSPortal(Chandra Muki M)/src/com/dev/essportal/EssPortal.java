package com.dev.essportal;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

public class EssPortal {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		List<EmployeeInfo> l = new ArrayList<EmployeeInfo>();
		List<EmpLeaveInfo> ll = new ArrayList<EmpLeaveInfo>();
		EmployeeInfo ei = new EmployeeInfo();
		EmpDetails ed = new EmpDetails();
		EmpLeaveImpl eli = new EmpLeaveImpl();
		EmpLeaveInfo elii = new EmpLeaveInfo();

		for(;;) {
			System.out.println("1.Register Employee\n2.Login\n3.Exit");
			System.out.println("Enter your choice: ");
			int ch = s.nextInt();

			switch(ch) {
			case 1: System.out.println("Enter Id:");
			int id = s.nextInt();
			ei.setEmpId(id);
			System.out.println("Enter Name: ");
			String name = s.next();
			ei.setEmpName(name);
			System.out.println("Enter Type: ");
			String type = s.next();
			ei.setEmpType(type);
			System.out.println("Enter Email: ");
			String email = s.next();
			ei.setEmail(email);
			System.out.println("Enter password");
			String pass = s.next();
			ei.setPassword(pass);
			l.add(ei);
			break;
			
			case 2: System.out.println("Enter your EmailId");
			String emid = s.next();
			System.out.println("Enter password");
			String passwrd = s.next();
			if(emid.equalsIgnoreCase(ei.getEmail()) && passwrd.equalsIgnoreCase(ei.getPassword())) {
				System.out.println("You are successfully logged In");
				if(ei.getEmpType().equalsIgnoreCase("manager")) {
					for(;;) {
						System.out.println("1.Show leave application\n2.Approve/Reject leave request\n3.Exit");
						int op = s.nextInt();
						switch(op) {
						case 1: elii.setEmpid(ei.getEmpId());
								elii.setLeaveDate("21-03-2019");
								elii.setLeaveStatus(eli.leaveRequest(elii.getEmpid()));
								int empId = elii.getEmpid();
								String empLeaveDate = elii.getLeaveDate();
								String empLeaveStatus = elii.getLeaveStatus();
								System.out.println("EmployeeId\tLeave_Date\tLeave_Status");
								System.out.println(empId+"\t\t"+empLeaveDate+"\t"+empLeaveStatus);
							
							break;
						case 2:	System.out.println("approved");
							break;
						case 3: return;
						default: System.out.println("Invalid choice");
						}
					}
				}else {
					for(int i=0;i<10;i++) {
						System.out.println("1.Show all status and leave request\n2.Request for Leave\n3.Exit");
						int choice = s.nextInt();
						switch(choice) {
						case 1:	System.out.println(elii.getLeaveStatus());
						break;
						case 2: System.out.println("Enter your Id:");
						int ident = s.nextInt();	
						
						String reply = eli.leaveRequest(ident);
						if(reply.equalsIgnoreCase("sent")) {
							elii.setLeaveStatus("pending");
						}else {
							elii.setLeaveStatus("rejected");
						}
						

						break;
						case 3: return;
						default: System.out.println("Invalid choice");
						}
					}
				}
				
			}else 
			{
				System.out.println("Invalid email");
				System.out.println("Invalid Password");
			}
			break;
			case 3: System.exit(0);
			break;
			default: System.out.println("Invalid choice.");
			}


		}
	}
}
