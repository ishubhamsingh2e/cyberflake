import { Metadata } from "next";
import Link from "next/link";

import { UserAuthForm } from "./user-auth-form";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
    return (
        <>
            <div className="container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-primary" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Link href="/">
                            <Icons.logoDark className="h-10 w-auto" />
                        </Link>
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;Log In for a Tech-tastic Adventure, Sign
                                Up for a Splash of Tech Fun.&rdquo;
                            </p>
                            <footer className="text-sm">~ Cyberflake</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Welcome 🍴's
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your phone number below to create or login
                                to your account
                            </p>
                        </div>
                        <UserAuthForm />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By Signup, you agree to our{" "}
                            <Link
                                href="/tnc"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms and Conditions
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy-policy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
