export type ApplicationStatus =
  | "APPLIED"
  | "INTERVIEW"
  | "OFFER"
  | "REJECTED"

export type Application = {
  id: string
  company: string
  position: string
  status: ApplicationStatus
  appliedAt: string
}

export const applications: Application[] = [
  {
    id: "1",
    company: "Stripe",
    position: "Senior Software Engineer",
    status: "INTERVIEW",
    appliedAt: "2026-08-01",
  },
  {
    id: "2",
    company: "GitHub",
    position: "Software Engineer",
    status: "APPLIED",
    appliedAt: "2026-08-05",
  },
  {
    id: "3",
    company: "Netflix",
    position: "Backend Engineer",
    status: "REJECTED",
    appliedAt: "2026-07-20",
  },
]