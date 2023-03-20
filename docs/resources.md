[What is JWT secret](https://stackoverflow.com/questions/31309759/what-is-secret-key-for-jwt-based-authentication-and-how-to-generate-it)

[Why JWT should have a ttl (time to live)](https://stackoverflow.com/questions/34259248/what-if-jwt-is-stolen)

[What is bearer token](https://www.devopsschool.com/blog/what-is-bearer-token-and-how-it-works/)

jwt can be used as a bearer token (an authentication token)

jwt are not encrypted but encoded meaning if someone is intercepting it (mitm) it can pretend to be the user => ttl + https.

nobody can altered the content (header + payload) since it's sign with a secret. to validate a jwt you should know the secret though

The client must send this token in the Authorization header when making requests to protected resources

The RS (resource server) receive a bearer token and will validate it with some "expensive computation" by contacting the AS (authentification server) then to avoid this expensive validation for further request it will generate its own access token (with a short ttl) => [here](https://stackoverflow.com/questions/12296017/how-to-validate-an-oauth-2-0-access-token-for-a-resource-server)

the as emit an access token which is an authorization token so the rs just have to know if it should authorize or not the resource

As such, it's critical to have security strategies that minimize the risk of compromising access tokens. One mitigation method is to create access tokens that have a short lifespan: they are only valid for a short time defined in terms of hours or days. => [here](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)

[difference between authorization and authentication](https://auth0.com/intro-to-iam/authentication-vs-authorization)

[when using one or another](https://auth0.com/blog/id-token-access-token-what-is-the-difference/)

[we can use different protocol for each one](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)

[id token + access token + refresh token](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)

id token are more or less bearer token but no [here](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/) they say access token is a bearer token, refresh token is also a bearer token

refresh token allow to generate new access token

access token + refresh token are part of the OAuth protocol and do not exist in SAML for example

depending of what we want there is a flow:

Is the client a traditional web application executing on the server? Use the Authorization Code Flow.

Is the client a Single-Page Application (SPA)? Use Authorization Code Flow with Proof Key for Code Exchange (PKCE).

Is the client a Single-Page Application (SPA) that doesn't need an access token? Use the Implicit Flow with Form Post.

Is the client the resource owner? You may use the Client Credentials Flow.

Is the client absolutely trusted with user credentials? You may use the Resource Owner Password Flow. => [here](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)


since refresh token are enable to generate at its very important to not compromise them.

[silent auth](https://auth0.com/docs/authenticate/login/configure-silent-authentication) vs refresh token rotation (if two entity ask a refresh token it broke the chain)