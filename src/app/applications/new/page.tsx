// src/app/applications/new/page.tsx

import Link from "next/link"
import { createApplication } from "./actions"

export default function NewApplicationPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Add Application
      </h1>

      <form action={createApplication} className="mt-8 space-y-4">
        <div>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            className="block border"
          />
        </div>

        <div>
          <label htmlFor="position">Position</label>
          <input
            id="position"
            name="position"
            className="block border"
          />
        </div>

        <div>
          <label htmlFor="appliedAt">Date Applied</label>
          <input
            id="appliedAt"
            name="appliedAt"
            type="date"
            className="block border"
          />
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            className="block border"
          >
            <option value="APPLIED">Applied</option>
            <option value="INTERVIEW">Interview</option>
            <option value="OFFER">Offer</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="rounded bg-black px-4 py-2 text-white"
          >
            Add Application
          </button>

          <Link
            href="/applications"
            className="rounded border px-4 py-2"
          >
            Cancel
          </Link>
        </div>
      </form>
    </main>
  )
}