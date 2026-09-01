import Link from "next/link"
import { db } from "@/prisma/db"
import { or } from "@prisma/orm-postgres/orm-client"

type Props = {
  searchParams: Promise<{
    search?: string
    status?: string
  }>
}

export default async function ApplicationsPage({
  searchParams,
}: Props) {
  const params = await searchParams

  const search = params.search?.trim() ?? ""
  const status = params.status?.trim() ?? ""

  let query = db.orm.public.Application

  if (search) {
    query = query.where((application) =>
      or(
        application.company.ilike(`%${search}%`),
        application.position.ilike(`%${search}%`)
      )
    )
  }

  if (status) {
    query = query.where({
      status,
    })
  }

  const applications = await query
    .orderBy((application) => application.appliedAt.desc())
    .all()

  return (
    <main className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Applications
        </h1>

        <Link
          href="/applications/new"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Add Application
        </Link>
      </div>

      <form className="mt-8 flex gap-4">
        <input
          type="text"
          name="search"
          placeholder="Search company or position"
          defaultValue={search}
          className="rounded border px-3 py-2"
        />

        <select
          name="status"
          defaultValue={status}
          className="rounded border px-3 py-2"
        >
          <option value="">All statuses</option>
          <option value="APPLIED">Applied</option>
          <option value="INTERVIEW">Interview</option>
          <option value="OFFER">Offer</option>
          <option value="REJECTED">Rejected</option>
        </select>

        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Filter
        </button>

        <Link
          href="/applications"
          className="rounded border px-4 py-2"
        >
          Clear
        </Link>
      </form>

      <div className="mt-8 space-y-4">
        {applications.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          applications.map((application) => (
            <Link
              key={application.id}
              href={`/applications/${application.id}`}
              className="block rounded-lg border p-4"
            >
              <h2 className="font-semibold">
                {application.position}
              </h2>

              <p>{application.company}</p>
              <p>{application.status}</p>
            </Link>
          ))
        )}
      </div>
    </main>
  )
}