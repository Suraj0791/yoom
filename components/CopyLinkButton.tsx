"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

interface CopyLinkButtonProps {
  link: string;
  buttonText?: string;
  successTitle?: string;
  successDescription?: string;
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "destructive"
    | "secondary"
    | "ghost"
    | "link";
  showIcon?: boolean;
}

export const CopyLinkButton = ({
  link,
  buttonText = "Copy Link",
  successTitle = "🎉 Link Copied!",
  successDescription = "Link has been copied to clipboard",
  className = "",
  variant = "default",
  showIcon = true,
}: CopyLinkButtonProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);

      toast({
        title: successTitle,
        description: successDescription,
        variant: "default",
        duration: 3000,
      });

      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "❌ Copy Failed",
        description: "Please try copying manually",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant={variant}
      className={`transition-all duration-200 transform hover:scale-105 active:scale-95 ${
        copied ? "bg-green-600 hover:bg-green-700" : ""
      } ${className}`}
      disabled={copied}
    >
      {showIcon && <span className="mr-2">{copied ? "✅" : "📋"}</span>}
      {copied ? "Copied!" : buttonText}
    </Button>
  );
};
