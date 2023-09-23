import Link from "next/link"

export const Header = () => (
  <header className="absolute left-0 top-0 z-50 flex h-14 w-full flex-wrap border-b border-gray-200 bg-white py-3 text-sm">
    <nav className="relative mx-auto w-full px-4" aria-label="Global">
      <div className="flex items-center justify-between">
        <Link
          className="flex-none text-xl font-semibold"
          href="#"
          aria-label="Brand"
        >
          Brand
        </Link>
        <div className="text-lg font-bold">ユーザー情報</div>
      </div>
    </nav>
  </header>
)
