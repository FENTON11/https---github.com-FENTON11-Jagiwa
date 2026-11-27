// app/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Users,
  Settings,
  Key,
  CheckCircle,
  Zap,
  BarChart,
  Lock,
  Globe,
  Terminal,
  Code,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const features = [
  {
    icon: Shield,
    title: "Secure Authentication",
    description:
      "Built-in Google and github authentification, session management, and brute force protection",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Users,
    title: "User Management",
    description: "CRUD operations, roles, permissions, and user analytics",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Key,
    title: "Multi-Factor Auth",
    description: "Support for TOTP, email OTP, and backup codes",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Themable components and extensible architecture",
    color: "bg-amber-500/10 text-amber-600",
  },
];

const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Admin",
    status: "active",
    avatar: "AJ",
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria@example.com",
    role: "User",
    status: "active",
    avatar: "MG",
  },
  {
    id: 3,
    name: "David Smith",
    email: "david@example.com",
    role: "Moderator",
    status: "inactive",
    avatar: "DS",
  },
  {
    id: 4,
    name: "Lisa Wang",
    email: "lisa@example.com",
    role: "User",
    status: "active",
    avatar: "LW",
  },
];

const recentActivities = [
  {
    id: 1,
    user: "Alex Johnson",
    action: "Logged in",
    time: "2 min ago",
    ip: "192.168.1.1",
  },
  {
    id: 2,
    user: "Maria Garcia",
    action: "Password changed",
    time: "15 min ago",
    ip: "192.168.1.2",
  },
  {
    id: 3,
    user: "David Smith",
    action: "Profile updated",
    time: "1 hour ago",
    ip: "192.168.1.3",
  },
  {
    id: 4,
    user: "Lisa Wang",
    action: "Email verified",
    time: "2 hours ago",
    ip: "192.168.1.4",
  },
];

export default function HomePage() {
  const [isMfaEnabled, setIsMfaEnabled] = useState(true);
  const [isEmailNotifications, setIsEmailNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 px-4 py-1 text-sm" variant="outline">
            <Zap className="w-3 h-3 mr-2" />
            Built with Shadcn UI & Better Auth
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Modern Authentication
            <span className="text-primary block">Dashboard Template</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A complete boilerplate featuring user management, secure
            authentication, and beautiful Shadcn UI components powered by Better
            Auth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/sign-up" target="_blank">
                <Code className="mr-2 h-4 w-4" />
                Getting started
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Core Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for modern user authentication and management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-2 hover:border-primary/50 transition-colors"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.color}`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern tools and frameworks powering this dashboard
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold">Next.js 16</h3>
            <p className="text-sm text-muted-foreground mt-1">
              App Router & Server Actions
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <Terminal className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold">Shadcn UI</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Beautiful Components
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold">Better Auth</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Full-Stack Auth
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
              <Database className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-semibold">MongoDB</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Database & Sessions
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
              <p className="text-muted-foreground mb-8">
                Start building your secure application with this complete
                authentication template.
              </p>

              <Alert className="mb-8 max-w-xl mx-auto">
                <Shield className="h-4 w-4" />
                <AlertTitle>Production Ready</AlertTitle>
                <AlertDescription>
                  This template includes security best practices and is ready
                  for deployment.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Lock className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold">Auth Dashboard</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Built with Shadcn UI & Better Auth • code with godie Template
          </div>
        </div>
      </footer>
    </div>
  );
}
