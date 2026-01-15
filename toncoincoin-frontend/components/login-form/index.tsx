"use client";

import * as React from "react";
import { useFormState } from "react-dom";
import { signIn } from "next-auth/react"; // On utilise le client-side signIn pour éviter les reloads complets parfois
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export function LoginForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const [error, setError] = useState<string>("");

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);
        setError("");

        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
        };

        const email = target.email.value;
        const password = target.password.value;

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false, // On gère la redirection nous-mêmes pour voir les erreurs
        });

        if (result?.error) {
            setError("Identifiants invalides");
            setIsLoading(false);
        } else {
            router.push("/");
            router.refresh(); // Rafraîchir pour mettre à jour la session
        }
    }

    return (
        <Card>
            <form onSubmit={onSubmit}>
                <CardContent className="grid gap-4 pt-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="admin@dashboard.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            defaultValue="admin@dashboard.com" // Pour tester vite
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input
                            id="password"
                            type="password"
                            disabled={isLoading}
                            defaultValue="admin" // Pour tester vite
                        />
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                </CardContent>
                <CardFooter>
                    <Button className="w-full" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Se connecter
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}