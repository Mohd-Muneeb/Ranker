import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import { getServerSession, type NextAuthOptions, type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: DefaultSession["user"] & {
			id: string;
			// ...other properties
			// role: UserRole;
		};
	}

	// interface User {
	//   // ...other properties
	//   // role: UserRole;
	// }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */

export const authOptions: NextAuthOptions = {
	//Session method

	session: {
		strategy: "jwt",
		maxAge: 365 * 24 * 60 * 60,
	},
	//Prisma integration??? Idk
	adapter: PrismaAdapter(prisma),

	//Cofiguring Providers
	providers: [
		CredentialsProvider({
			type: "credentials",
			credentials: {},
			async authorize(credentials, req) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};
				// perform you login logic
				// find out user from db

				const userInfo = await prisma.user.findUnique({
					where: {
						username: email,
					},
				});

				if (email !== userInfo?.username || password !== userInfo.password) {
					throw new Error("invalid credentials");
				}

				// if everything is fine
				return {
					...userInfo,
				};
			},
		}),
	],

	pages: {
		signIn: "/SignIn",
		signOut: "/",
	},

	callbacks: {
		// jwt(params) {
		// 	// update token
		// 	if (params.user?.role) {
		// 		params.token.role = params.user.role;
		// 	}
		// 	// return final_token
		// 	return params.token;
		// },
		signIn(user) {
			// Custom logic when a user signs in
			return true;
		},
		async session(session, user) {
			// Custom logic to modify the session object
			session.user.role = "user";
			return session;
		},
		async jwt(token, user, account, profile, isNewUser) {
			// Custom logic to update the JWT token
			token.sub = user.id;
			return token;
		},
	},
};

// export const authOptions: NextAuthOptions = {
//   callbacks: {
//     session: ({ session, user }) => ({
//       ...session,
//       user: {
//         ...session.user,
//         id: user.id,
//       },
//     }),
//   },
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         // Add logic here to look up the user from the credentials supplied
//         console.log(credentials?.username);
//         const user = await prisma.user.findUnique({
//           where: {
//             username: credentials?.username,
//           },
//         });

//         console.log(user?.name ,credentials);

//         const correctPassword = credentials?.password === user?.password;

//         if (correctPassword) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
// };

export const getServerAuthSession = (ctx: {
	req: GetServerSidePropsContext["req"];
	res: GetServerSidePropsContext["res"];
}) => {
	return getServerSession(ctx.req, ctx.res, authOptions);
};
