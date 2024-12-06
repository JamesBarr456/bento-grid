import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  image: string
  className?: string;
  variant?: "default" | "purple" | "yellow" | "purple-light";
}

export function FeatureCard({ title, className, variant = "default", image }: FeatureCardProps) {
  const variants = {
    default: "bg-white",
    purple: "bg-[#8B5CF6] text-white",
    yellow: "bg-[#FCD34D]",
    "purple-light": "bg-[#EDE9FE]",
  };

  return (
    <Card className={cn("", variants[variant], className)}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
        alt=""
        src={image}
        width={100}
        height={100}/>
      </CardContent>
    </Card>
  );
}