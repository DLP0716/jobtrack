import { notFound } from "next/navigation"
import { db } from "@/prisma/db"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ApplicationPage({
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
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        {application.position}
      </h1>

      <p className="mt-2 text-xl">
        {application.company}
      </p>

      <p className="mt-4">
        Status: {application.status}
      </p>
    </main>
  )
}