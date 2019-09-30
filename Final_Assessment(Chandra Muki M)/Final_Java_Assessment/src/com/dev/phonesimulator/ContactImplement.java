package com.dev.phonesimulator;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class ContactImplement implements ContactInter{
	Set<Contact> s = new HashSet<Contact>();
	Scanner sc = new Scanner(System.in);
	Contact ct = new Contact();

	@Override
	public Contact addContact() {
		System.out.println("Enter name");
		String nm = sc.next();
		ct.setName(nm);
		System.out.println("Enter number");
		long num = sc.nextLong();
		ct.setNumber(num);
		System.out.println("Enter group");
		String gp = sc.next();
		ct.setGroup(gp);
		
		return ct;
		
	}

	
	
	
}
