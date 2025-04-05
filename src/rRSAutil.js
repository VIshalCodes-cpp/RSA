import forge from "node-forge";

export const generateKeyPair = () => {
  return new Promise((resolve, reject) => {
    forge.pki.rsa.generateKeyPair({ bits: 2048, workers: -1 }, (err, keypair) => {
      if (err) return reject(err);
      const publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
      const privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);
      resolve({ publicKeyPem, privateKeyPem });
    });
  });
};

export const encryptWithPublicKey = (publicKeyPem, message) => {
  try {
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    const encrypted = publicKey.encrypt(message, "RSA-OAEP");
    return forge.util.encode64(encrypted);
  } catch (err) {
    console.error("Encryption failed:", err);
    return null;
  }
};
