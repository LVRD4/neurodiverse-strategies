type AccessPageProps = {
  searchParams?: Promise<{ next?: string; error?: string }>;
};

export default async function AccessPage({ searchParams }: AccessPageProps) {
  const params = searchParams ? await searchParams : undefined;
  const nextPath = params?.next ?? "/";
  const hasError = params?.error === "1";

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f7f8ff] to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#221da0]/20 p-8">
        <h1 className="text-2xl text-[#1a1a1a] font-semibold mb-2">
          Protected Site
        </h1>
        <p className="text-[#5a5a5a] mb-6">
          Enter the site password to continue.
        </p>

        {hasError ? (
          <p className="text-sm text-[#f76201] mb-4">
            Incorrect password. Please try again.
          </p>
        ) : null}

        <form action="/api/access" method="POST" className="space-y-4">
          <input type="hidden" name="next" value={nextPath} />
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-[#1a1a1a] mb-1 font-medium"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-[#221da0]/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#221da0]"
              placeholder="Enter password"
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#221da0] hover:bg-[#1b177f] text-white rounded-lg py-2.5 transition-colors"
          >
            Unlock Site
          </button>
        </form>
      </div>
    </main>
  );
}
