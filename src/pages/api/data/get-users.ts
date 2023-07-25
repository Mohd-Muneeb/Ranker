import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    username: string;
  };
}

export default async function AuthenticationHandler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  console.log(data);
  res.send(200);
}
