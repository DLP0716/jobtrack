import { db } from "@/prisma/db"

export default async function DashboardPage() {
  const applications =
    await db.orm.public.Application.all()

  const totalApplications = applications.length

  const appliedCount = applications.filter(
    (application) => application.status === "APPLIED"
  ).length

  const interviewCount = applications.filter(
    (application) => application.status === "INTERVIEW"
  ).length

  const offerCount = applications.filter(
    (application) => application.status === "OFFER"
  ).length

  const rejectedCount = applications.filter(
    (application) => application.status === "REJECTED"
  ).length

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <div className="rounded border p-4">
          <p>Total</p>
          <p className="text-2xl font-bold">
            {totalApplications}
          </p>
        </div>

        <div className="rounded border p-4">
          <p>Applied</p>
          <p className="text-2xl font-bold">
            {appliedCount}
          </p>
        </div>

        <div className="rounded border p-4">
          <p>Interviews</p>
          <p className="text-2xl font-bold">
            {interviewCount}
          </p>
        </div>

        <div className="rounded border p-4">
          <p>Offers</p>
          <p className="text-2xl font-bold">
            {offerCount}
          </p>
        </div>

        <div className="rounded border p-4">
          <p>Rejected</p>
          <p className="text-2xl font-bold">
            {rejectedCount}
          </p>
        </div>
      </div>
    </main>
  )
}