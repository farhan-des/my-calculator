import Calculator from "@/components/Calculator";
import Instructions from "@/components/Instructions";
import ExamplesTable from "@/components/ExamplesTable";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <h1 className="text-3xl font-bold">Playback Speed Calculator</h1>
          <p className="text-base text-muted-foreground">
            Calculate the video or podcast length with the given playback speed.
          </p>
        </div>
      </header>

      {/* Calculator Section */}
      <section className="py-6 px-4">
        <Calculator />
      </section>

      {/* Instructions Section */}
      <section className="py-8 px-4">
        <Instructions />
      </section>

      {/* Examples Section */}
      <section className="py-8 px-4">
        <ExamplesTable />
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t mt-12">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>Playback Speed Calculator - Calculate how much time you can save</p>
        </div>
      </footer>
    </div>
  );
}
