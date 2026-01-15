import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const isOnLoginPage = req.nextUrl.pathname.startsWith("/login")

    // Si l'utilisateur est sur la page login et est déjà connecté, on le renvoie sur l'accueil
    if (isOnLoginPage && isLoggedIn) {
        return NextResponse.redirect(new URL("/", req.nextUrl))
    }

    // Si l'utilisateur n'est pas connecté et n'est pas sur la page login, on le force à se connecter
    if (!isOnLoginPage && !isLoggedIn) {
        return NextResponse.redirect(new URL("/login", req.nextUrl))
    }

    return NextResponse.next()
})

// On exclut les fichiers statiques, les images, etc. du middleware
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}