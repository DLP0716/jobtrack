import Link from "next/link"
import { applications } from "@/data/applications"

export default function ApplicationsPage() {
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
          Add application
        </Link>
      </div>

      <div className="mt-8 space-y-4">
        {applications.map((application) => (
          <Link
            key={application.id}
            href={`/applications/${application.id}`}
            className="block rounded-lg border p-4"
          >
            <h2 className="font-semibold">
              {application.position}
            </h2>

            <p>{application.company}</p>

            <p className="mt-2 text-sm text-gray-500">
              {application.status}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}