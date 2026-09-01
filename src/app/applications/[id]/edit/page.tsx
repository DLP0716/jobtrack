import { notFound } from "next/navigation"
import { db } from "@/prisma/db"
import EditApplicationForm from "./edit-application-form"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function EditApplicationPage({
  params,
}: Props) {
  const { id } = await params

  const application =
    await db.orm.public.Application.first({
      id,
    })

  if (!application) {
    notFound()
  }

  return (
    <EditApplicationForm
      id={application.id}
      defaultValues={{
        company: application.company,
        position: application.position,
        status: application.status,
        appliedAt: application.appliedAt
          .toString()
          .slice(0, 10),
      }}
    />
  )
}