import { DynamicSubtitle } from '@/components/dynamic-subtitle'
import { DynamicTitle } from '@/components/dynamic-title'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function Page() {
  return (
    <div className="m-auto flex min-h-screen max-w-[1600px] flex-col justify-between p-6">
      <div>
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <main className="my-8 min-h-[120px] md:my-0">
            <DynamicTitle />
            <DynamicSubtitle />
          </main>
          <aside></aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}
