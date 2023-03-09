import * as session from 'express-session'
import * as Keycloak from 'keycloak-connect'

const memoryStore = new session.MemoryStore();

const authProvider = (app /* @Type: core.Express */) => {
  console.log("connected to auth");

  app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  }));

  const keycloak = new Keycloak({
    store: memoryStore
  });

  return keycloak;
};

export { authProvider };
