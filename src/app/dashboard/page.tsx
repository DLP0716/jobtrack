import { applications } from "@/data/applications"

export default function DashboardPage() {
  const sevenDaysAgo = new Date()

  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  sevenDaysAgo.setHours(0, 0, 0, 0)

  const recentApplications = applications.filter(
    (application) =>
      new Date(application.appliedAt) >= sevenDaysAgo
  )

  return (
    <div>
      <p>Applications last 7 days</p>
      <p>{recentApplications.length}</p>
    </div>
  )
}