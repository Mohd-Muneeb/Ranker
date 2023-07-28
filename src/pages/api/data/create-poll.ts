import { type Choice, type Poll } from "@prisma/client";
import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";

interface CreatePollRequestData {
	title: string;
	description: string;
	choices: {
		title: string;
		description: string;
	}[];
}

interface CreatePollRequest extends NextApiRequest {
	body: CreatePollRequestData;
}

export default async function CreatePollsApiHandle(req: CreatePollRequest, res: NextApiResponse) {
	if (req.method !== "POST") {
		res.status(400).send("Invalid Request Type, send a post req");
	}

	const {
		title,
		description,
		choices,
	}: { title: string; description: string; choices: { title: string; description: string }[] } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: {
				username: "zyrixqe",
			},
		});

		if (user === null) {
			res.status(400).json({ error: "Invalid User" });
			throw new Error("Invalid user");
		}

		const poll = await prisma.poll.create({
			data: {
				title,
				description,
				image: "",
				createdAt: new Date(),
				User: {
					connect: { id: user.id },
				},
				choices: {
					create: choices.map((choice) => ({
						title: choice.title,
						description: choice.description,
						votes: 0,
						image: "",
						createdAt: new Date(),
					})),
				},
			},
			include: {
				choices: true,
			},
		});

		return res.status(201).json(poll);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
}
