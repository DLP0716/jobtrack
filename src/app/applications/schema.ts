import { z } from "zod"

export const applicationSchema = z.object({
  company: z.string().trim().min(1, "Company is required."),
  position: z.string().trim().min(1, "Position is required."),
  status: z.string().trim().min(1, "Status is required."),
  appliedAt: z.string().min(1, "Date applied is required."),
})