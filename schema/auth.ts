import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Minimum 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
});

export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Minimum 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
});

// lib/validations/promoCode.ts
export const promoCodeFormSchema = z
  .object({
    code: z
      .string()
      .min(2, "Code must be at least 2 characters")
      .max(20, "Code must be less than 20 characters")
      .regex(
        /^[A-Z0-9_-]+$/,
        "Code can only contain uppercase letters, numbers, hyphens, and underscores"
      ),

    discountType: z.enum(["percentage", "fixed", "shipping"]),

    discountValue: z
      .number()
      .min(0.01, "Discount value must be greater than 0")
      .max(100000, "Discount value is too large"),

    minimumAmount: z
      .number()
      .min(0, "Minimum amount cannot be negative")
      .optional()
      .default(0),

    maximumDiscount: z
      .number()
      .min(0, "Maximum discount cannot be negative")
      .optional()
      .nullable()
      .default(null),

    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),

    usageLimit: z
      .number()
      .min(1, "Usage limit must be at least 1")
      .optional()
      .nullable()
      .default(null),

    isActive: z.boolean().default(true),
    oneTimeUse: z.boolean().default(false),

    applicableServices: z.array(z.string()).default([]),
    applicableToAllServices: z.boolean().default(true),
    applicableToAllUsers: z.boolean().default(true),
    applicableUsers: z.array(z.string()).default([]),
  })
  .refine(
    (data) => {
      if (data.discountType === "percentage" && data.discountValue > 100) {
        return false;
      }
      return true;
    },
    {
      message: "Percentage discount cannot exceed 100%",
      path: ["discountValue"],
    }
  )
  .refine(
    (data) => {
      const startDate = new Date(data.startDate);
      const endDate = new Date(data.endDate);
      return endDate > startDate;
    },
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  );

export type PromoCodeFormData = z.infer<typeof promoCodeFormSchema>;

// API response schema
export const promoCodeResponseSchema = z.object({
  _id: z.string(),
  code: z.string(),
  discountType: z.enum(["percentage", "fixed", "shipping"]),
  discountValue: z.number(),
  minimumAmount: z.number(),
  maximumDiscount: z.number().nullable(),
  startDate: z.string(),
  endDate: z.string(),
  usageLimit: z.number().nullable(),
  usedCount: z.number(),
  isActive: z.boolean(),
  applicableServices: z.array(z.string()),
  oneTimeUse: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type PromoCode = z.infer<typeof promoCodeResponseSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
