import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // On définit le nom pour le formulaire généré par défaut (si on l'utilisait)
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            // La fonction qui valide l'utilisateur
            authorize: async (credentials) => {
                // MOCK: Ici, on simule une vérification. 
                // Plus tard, tu appelleras ton API FastAPI ici.
                if (credentials.email === "admin@dashboard.com" && credentials.password === "admin") {
                    return {
                        id: "1",
                        name: "Admin User",
                        email: "admin@dashboard.com",
                        image: "https://github.com/shadcn.png", // Avatar par défaut
                    }
                }
                return null
            },
        }),
    ],
    pages: {
        signIn: "/login", // On redirige vers notre page de login perso
    },
    callbacks: {
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            return session;
        },
    },
})