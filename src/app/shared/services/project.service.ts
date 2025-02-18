import { Injectable } from '@angular/core';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from '../../../environments/environment';
import { Project } from '../interfaces/project.interface';
import { Observable, from } from 'rxjs';

const app = initializeApp(environment.firebase);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private cachedProjects: Project[] | null = null;

  getProjectsSmall(): Observable<Project[]> {
    // Se já tiver cache, usa ele
    if (this.cachedProjects) {
      return from(Promise.resolve(this.cachedProjects));
    }

    // Busca do Firestore
    return from(
      getDocs(collection(db, 'projects')).then((querySnapshot) => {
        const projects = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as Project)
        );
        this.cachedProjects = projects; // Guarda no cache
        return projects;
      })
    );
  }
}
