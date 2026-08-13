import Link from "next/link"

export default function NewApplicationPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Add Application
      </h1>

      <form className="mt-8">
        {/* form fields */}

        <label>
          Company
          <input name="company" />
        </label>

        <label>
          Position
          <input name="position" />
        </label>

        <label>
          Date Applied
          <input name="appliedAt" type="date" />
        </label>

        <div className="mt-6 flex gap-4">
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