import { RequestHandler } from "express";
import { prisma } from "./db";

export const handleAuth0PostAuth: RequestHandler = async (req, res) => {
  const { email, name, user_id, secret } = req.body;

  if (!email || !secret || secret !== process.env.AUTH0_HOOK_SECRET) {
    return res.status(403).json({ message: "Nope!" });
  }

  try {
    await prisma.user.create({ data: { email, name, id: user_id } });
    res.status(200).json({ message: "User created succesfully" });
  } catch (e) {
    res.status(400).json({ message: "Something exploded" });
  }
};
