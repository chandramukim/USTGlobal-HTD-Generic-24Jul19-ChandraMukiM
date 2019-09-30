package com.dev.phonesimulator;

import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;

public class PhoneSimulator {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Set<Contact> s = new LinkedHashSet<Contact>();
		ContactImplement ci = new ContactImplement();

		Contact cont = new Contact();
		cont.setName("Muki");
		cont.setNumber(7619600988l);
		cont.setGroup("Home");

		Contact cont1 = new Contact();
		cont1.setName("Maya");
		cont1.setNumber(6360924223l);
		cont1.setGroup("Office");

		Contact cont2 = new Contact();
		cont2.setName("Murali");
		cont2.setNumber(6366014567l);
		cont2.setGroup("Home");

		s.add(cont);
		s.add(cont1);
		s.add(cont2);

		for(;;) {
			System.out.println("1.Show all contacts\n2.Search for contacts\n3.Operate on contact\n4.Exit");
			System.out.println("Enter your choice");
			int choice = sc.nextInt();

			switch(choice) {
			case 1: for(Contact ct: s) {
				System.out.println(ct.getName());
			}
			break;
			case 2: for(Contact ct: s) {
				System.out.println(ct);
			}

			System.out.println("1.Call\n2.Message\n3.Back to Menu");
			System.out.println("Enter your choice");
			int ch = sc.nextInt();

			switch(ch) {
			case 1:	System.out.println(cont.getNumber()+ "Calling....");
			System.out.println("End Call? (true/false)");
			boolean bool = sc.nextBoolean();
			if(bool == true) {
				System.out.println("Call ended");
			}

			break;
			case 2:System.out.println("Compose the message");
			String msg = sc.next();
			System.out.println("Sending message");
			break;
			case 3: 
				break;
			default: System.out.println("Invalid choice");
			}


			break;

			case 3:	System.out.println("1.Add\n2.Delete\n3.Edit");
			System.out.println("Enter your Choice");
			int op = sc.nextInt();

			switch(op) {
			case 1: Contact cont3 = ci.addContact();
					s.add(cont3);
			
			break;
			
			case 2: System.out.println("Enter the name to delete?");
					String nme = sc.next();
					if(cont.getName().equalsIgnoreCase(nme)) {
						s.remove(cont);
					}else if(cont1.getName().equalsIgnoreCase(nme)){
						s.remove(cont1);
					}else if(cont2.getName().equals(nme)) {
						s.remove(cont2);
					}
					
					
				break;
			case 3: System.out.println(
					
					);
				break;

			}
			break;

			case 4:System.exit(0);
			break;

			default: System.out.println("Invalid choice");
			}
		}
	}

}
