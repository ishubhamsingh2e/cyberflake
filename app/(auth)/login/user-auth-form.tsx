"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { apiClient } from "@/lib/api";
import { setCookie } from "@/lib/cookie";

import { useToast } from "@/components/ui/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [fName, setFName] = React.useState<string>("");
    const [lName, setLName] = React.useState<string>("");
    const [phone, setPhone] = React.useState<string>("");
    const [isOTPSent, setIsOTPSent] = React.useState<boolean>(false);
    const [OTP, setOTP] = React.useState<string>("");
    const [isVerified, setIsVerified] = React.useState<boolean>(false);
    const [timeRemaining, setTimeRemaining] = React.useState<number>(300);
    const [resendCooldown, setResendCooldown] = React.useState<boolean>(false);
    const [newUser, setNewUser] = React.useState<boolean>(true);

    const { toast } = useToast();

    React.useEffect(() => {
        let timerId: NodeJS.Timeout;

        if (isOTPSent && timeRemaining > 0) {
            timerId = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
        }

        return () => {
            clearInterval(timerId);
        };
    }, [isOTPSent, timeRemaining]);

    const handleResendOTP = () => {
        if (!resendCooldown) {
            apiClient.requestOTP(phone).then((res) => {
                if (res.response) {
                    setNewUser(res.response.new_user);
                    setIsOTPSent(true);
                    setResendCooldown(true);
                    toast({
                        title: "OTP",
                        description: res.response.message,
                    });
                    setTimeout(() => {
                        setResendCooldown(false);
                    }, 180000);
                } else {
                    alert("can't send otp!");
                }
            });
        }
    };

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        if (!isOTPSent) {
            handleResendOTP();
            setIsLoading(false);
            return;
        }
        if (isOTPSent && !isVerified) {
            await apiClient.verifyOTP(phone, OTP).then((res) => {
                if (res.success) {
                    setCookie("JWT", res.token, 7);
                    if (!newUser) {
                        window.location.href = "/";
                    } else {
                        setIsVerified(true);
                    }
                } else {
                    alert("Invalid OTP");
                }
            });
            setIsLoading(false);
            return;
        }
        if (isVerified) {
            await apiClient.addName(fName, lName).then((res) => {
                if (res.message == "Name added successfully") {
                    setCookie("JWT", res.token, 7);
                    window.location.href = "/";
                } else {
                    alert(res.message);
                }
            });
            setIsLoading(false);
            return;
        }
    }

    const renderStep = () => {
        return isVerified ? (
            <div className="space-y-2">
                <div className="grid gap-2">
                    <Label className="sr-only" htmlFor="email">
                        First Name
                    </Label>
                    <Input
                        id="first-name"
                        autoFocus
                        placeholder="First Name"
                        type="text"
                        autoCapitalize="none"
                        autoComplete="on"
                        autoCorrect="off"
                        disabled={isLoading}
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                    />
                </div>
                <div className="grid gap-2">
                    <Label className="sr-only" htmlFor="email">
                        Last Name
                    </Label>
                    <Input
                        id="name"
                        placeholder="Last Name"
                        type="text"
                        autoCapitalize="none"
                        autoComplete="on"
                        autoCorrect="off"
                        disabled={isLoading}
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                    />
                </div>
            </div>
        ) : (
            <>
                <div className="flex gap-2">
                    <div className="grid gap-2 w-full">
                        <Label className="sr-only" htmlFor="phone">
                            Phone
                        </Label>
                        <Input
                            id="phone"
                            autoFocus
                            placeholder="Phone Number"
                            type="number"
                            maxLength={10}
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            disabled={isLoading}
                            value={phone}
                            onChange={(e) => {
                                if (e.target.value.length <= 11) {
                                    setPhone(e.target.value);
                                }
                            }}
                        />
                    </div>
                </div>
                {isOTPSent ? (
                    <div className="flex flex-col gap-2">
                        <div>
                            <Label className="sr-only" htmlFor="phone">
                                OTP
                            </Label>
                            <Input
                                id="otp"
                                placeholder="OTP"
                                type="number"
                                autoCapitalize="none"
                                autoComplete="off"
                                autoCorrect="off"
                                disabled={isLoading}
                                value={OTP}
                                onChange={(e) => setOTP(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-500">
                                Time remaining: {Math.floor(timeRemaining / 60)}
                                :
                                {(timeRemaining % 60)
                                    .toString()
                                    .padStart(2, "0")}
                            </span>
                            <Button
                                className="pr-0 mr-0"
                                variant={"link"}
                                onClick={handleResendOTP}
                                disabled={resendCooldown}
                            >
                                Resend OTP
                            </Button>
                        </div>
                    </div>
                ) : null}
            </>
        );
    };

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form className="flex flex-col gap-2" onSubmit={onSubmit}>
                {renderStep()}
                <Button disabled={isLoading}>
                    {isLoading && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {isVerified ? "Continue" : "Verify"}
                </Button>
            </form>
        </div>
    );
}
