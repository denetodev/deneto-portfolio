import { Injectable, inject } from '@angular/core';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from '../../../environments/environment';
import { Project } from '../interfaces/project.interface';
import { Observable, from } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

const app = initializeApp(environment.firebase);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private platformId = inject(PLATFORM_ID);
  private cachedProjects: Project[] | null = null;

  getProjectsSmall(): Observable<Project[]> {
    // Se estiver no servidor, retorna dados mockados
    if (!isPlatformBrowser(this.platformId)) {
      return from(Promise.resolve(this.getMockProjects()));
    }

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

  private getMockProjects(): Project[] {
    // Dados mockados para SSR
    return [
      {
        id: '1',
        title: 'Projeto 1',
        description: 'Carregando...',
        image: '/assets/placeholder.jpg',
        githubUrl: '#',
        siteUrl: '#',
      },
      {
        id: '2',
        title: 'Projeto 2',
        description: 'Carregando...',
        image: '/assets/placeholder.jpg',
        githubUrl: '#',
        siteUrl: '#',
      },
      {
        id: '3',
        title: 'Projeto 3',
        description: 'Carregando...',
        image: '/assets/placeholder.jpg',
        githubUrl: '#',
        siteUrl: '#',
      },
    ];
  }
}
