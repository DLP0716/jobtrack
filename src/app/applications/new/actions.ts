// src/app/applications/new/actions.ts

"use server"

import { redirect } from "next/navigation"

export async function createApplication(formData: FormData) {
  const company = formData.get("company")
  const position = formData.get("position")
  const appliedAt = formData.get("appliedAt")
  const status = formData.get("status")

  console.log({
    company,
    position,
    appliedAt,
    status,
  })

  redirect("/applications")
}