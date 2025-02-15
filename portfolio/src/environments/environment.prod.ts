export const environment = {
  production: true,
  githubToken: process.env['GITHUB_TOKEN'] || '', // Acesse o token do ambiente
  firebase: {
    apiKey: 'AIzaSyAZu9vTATCD0a3yCPx2eeFQmfx5a02mASw',
    authDomain: 'portfolio-management-5d64f.firebaseapp.com',
    projectId: 'portfolio-management-5d64f',
    storageBucket: 'portfolio-management-5d64f.firebasestorage.app',
    messagingSenderId: '459234090216',
    appId: '1:459234090216:web:f069245645f990b9f5bd5d',
  },
};
