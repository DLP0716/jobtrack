"use client"

import Link from "next/link"
import { useActionState } from "react"
import { updateApplication } from "../../actions"

type EditApplicationFormProps = {
  id: string
  defaultValues: {
    company: string
    position: string
    status: string
    appliedAt: string
  }
}

const initialState = {
  errors: {},
}

export default function EditApplicationForm({
  id,
  defaultValues,
}: EditApplicationFormProps) {
  const [state, formAction] = useActionState(
    updateApplication.bind(null, id),
    initialState
  )

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Edit Application
      </h1>

      <form action={formAction} className="mt-8 space-y-4">
        <div>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            defaultValue={defaultValues.company}
            className="block border"
            aria-invalid={Boolean(state.errors?.company)}
          />
          {state.errors?.company?.[0] ? (
            <p className="text-sm text-red-600">
              {state.errors.company[0]}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="position">Position</label>
          <input
            id="position"
            name="position"
            defaultValue={defaultValues.position}
            className="block border"
            aria-invalid={Boolean(state.errors?.position)}
          />
          {state.errors?.position?.[0] ? (
            <p className="text-sm text-red-600">
              {state.errors.position[0]}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="appliedAt">Date Applied</label>
          <input
            id="appliedAt"
            name="appliedAt"
            type="date"
            defaultValue={defaultValues.appliedAt}
            className="block border"
            aria-invalid={Boolean(state.errors?.appliedAt)}
          />
          {state.errors?.appliedAt?.[0] ? (
            <p className="text-sm text-red-600">
              {state.errors.appliedAt[0]}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            defaultValue={defaultValues.status}
            className="block border"
            aria-invalid={Boolean(state.errors?.status)}
          >
            <option value="APPLIED">Applied</option>
            <option value="INTERVIEW">Interview</option>
            <option value="OFFER">Offer</option>
            <option value="REJECTED">Rejected</option>
          </select>
          {state.errors?.status?.[0] ? (
            <p className="text-sm text-red-600">
              {state.errors.status[0]}
            </p>
          ) : null}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="rounded bg-black px-4 py-2 text-white"
          >
            Save Changes
          </button>

          <Link
            href={`/applications/${id}`}
            className="rounded border px-4 py-2"
          >
            Cancel
          </Link>
        </div>
      </form>
    </main>
  )
}
