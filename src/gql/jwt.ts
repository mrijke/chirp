import jwt, { JwtHeader, SigningKeyCallback, JwtPayload } from "jsonwebtoken";
import { JwksClient } from "jwks-rsa";
import "dotenv/config";

const jwksClient = new JwksClient({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: process.env.AUTH0_JWKS_URI!,
});

function getKey(header: JwtHeader, callback: SigningKeyCallback) {
  jwksClient.getSigningKey(header.kid, (err, key) => {
    const signingKey = key.getPublicKey();
    callback(err, signingKey);
  });
}

export async function getJwtPayloadFromAuthHeader(
  authHeader: string
): Promise<JwtPayload> {
  const [, token] = authHeader.split(" ");
  const result = new Promise((resolve, reject) => {
    jwt.verify(
      token,
      getKey,
      {
        audience: process.env.AUTH0_AUDIENCE,
        issuer: process.env.AUTH0_ISSUER,
        algorithms: ["RS256"],
      },
      (error, decoded) => {
        if (error) {
          resolve(error);
        }
        if (decoded) {
          resolve(decoded);
        }
      }
    );
  });
  return result as JwtPayload;
}
