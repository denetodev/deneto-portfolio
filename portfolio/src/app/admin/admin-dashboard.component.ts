import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collection,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  pendingUsers: any[] = [];

  constructor(private firestore: Firestore) {}

  async ngOnInit() {
    const q = query(
      collection(this.firestore, 'users'),
      where('role', '==', 'pending')
    );
    const querySnapshot = await getDocs(q);
    this.pendingUsers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async approveUser(userId: string) {
    const userRef = doc(this.firestore, 'users', userId);
    await updateDoc(userRef, { role: 'admin' });
    this.pendingUsers = this.pendingUsers.filter((user) => user.id !== userId);
  }
}
