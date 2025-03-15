import { DynamicSubtitle } from '@/components/dynamic-subtitle'
import { DynamicTitle } from '@/components/dynamic-title'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function Page() {
  return (
    <div className="m-auto flex min-h-screen max-w-[1600px] flex-col justify-between p-6">
      <div>
        <Header />

        <div className="my-8 grid grid-cols-1 lg:grid-cols-2">
          <main className="mb-8 h-[96px] sm:h-[144px] lg:h-[176px]">
            <DynamicTitle />
            <DynamicSubtitle />
          </main>
          <aside>
            <h3></h3>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}
