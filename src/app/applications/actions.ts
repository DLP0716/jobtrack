"use server"

import { Temporal } from "temporal-polyfill"
import { db } from "@/prisma/db"
import { redirect } from "next/navigation"
import { applicationSchema } from "./schema"

function validateApplicationFormData(formData: FormData) {
  const parsed = applicationSchema.safeParse({
    company: formData.get("company"),
    position: formData.get("position"),
    status: formData.get("status"),
    appliedAt: formData.get("appliedAt"),
  })

  if (!parsed.success) {
    return {
      success: false as const,
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  return {
    success: true as const,
    data: parsed.data,
  }
}

export async function createApplication(
  previousState: ApplicationFormState,
  formData: FormData
): Promise<ApplicationFormState> {
  const result = validateApplicationFormData(formData)

  if (!result.success) {
    return {
      errors: result.errors,
    }
  }

  const { company, position, status, appliedAt } = result.data

  const instant = Temporal.Instant.from(
    `${appliedAt}T00:00:00Z`
  )

  await db.orm.public.Application.create({
    company,
    position,
    status,
    appliedAt: instant,
  })

  redirect("/applications")
}

export async function updateApplication(
  id: string,
  previousState: ApplicationFormState,
  formData: FormData
): Promise<ApplicationFormState> {
  const result = validateApplicationFormData(formData)

  if (!result.success) {
    return {
      errors: result.errors,
    }
  }

  const { company, position, status, appliedAt } =
    result.data

  const instant = Temporal.Instant.from(
    `${appliedAt}T00:00:00Z`
  )

  await db.orm.public.Application.where({ id }).update({
    company,
    position,
    status,
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

export type ApplicationFormState = {
  errors?: {
    company?: string[]
    position?: string[]
    status?: string[]
    appliedAt?: string[]
  }
}