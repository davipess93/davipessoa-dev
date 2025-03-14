import { DynamicSubtitle } from '@/components/dynamic-subtitle'
import { DynamicTitle } from '@/components/dynamic-title'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-6 max-w-[1600px] m-auto">
      <div>
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <main className="my-8 md:my-0 min-h-[120px]">
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
