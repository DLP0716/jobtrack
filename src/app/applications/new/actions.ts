"use server"

import { Temporal } from "temporal-polyfill"
import { db } from "@/prisma/db"
import { redirect } from "next/navigation"


export async function createApplication(formData: FormData) {
  const company = formData.get("company")
  const position = formData.get("position")
  const status = formData.get("status")
  const appliedAt = formData.get("appliedAt")

  const instant = Temporal.Instant.from(
  `${appliedAt}T00:00:00Z`
)
  if (
    typeof company !== "string" ||
    typeof position !== "string" ||
    typeof status !== "string" ||
    typeof appliedAt !== "string" ||
    !company.trim() ||
    !position.trim() ||
    !status.trim() ||
    !appliedAt
  ) {
    throw new Error("All application fields are required.")
  }

  await db.orm.public.Application.create({
    company: company.trim(),
    position: position.trim(),
    status: status.trim(),
    appliedAt: instant,
  })

  redirect("/applications")
}

export async function updateApplication(
  id: string,
  formData: FormData
) {
  const company = formData.get("company")
  const position = formData.get("position")
  const status = formData.get("status")
  const appliedAt = formData.get("appliedAt")
const instant = Temporal.Instant.from(
  `${appliedAt}T00:00:00Z`
)
  if (
    typeof company !== "string" ||
    typeof position !== "string" ||
    typeof status !== "string" ||
    typeof appliedAt !== "string" ||
    !company.trim() ||
    !position.trim() ||
    !status.trim() ||
    !appliedAt
  ) {
    throw new Error("All application fields are required.")
  }

  await db.orm.public.Application
    .where({ id })
    .update({
      company: company.trim(),
      position: position.trim(),
      status: status.trim(),
      appliedAt: instant,
    })

  redirect(`/applications/${id}`)
}

export async function deleteApplication(id: string) {
  await db.orm.public.Application
    .where({ id })
    .delete()

  redirect("/applications")
}