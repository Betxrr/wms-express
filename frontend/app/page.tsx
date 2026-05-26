import { DockList } from './components/DockList';

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-12 text-slate-900">
      <header className="mb-10 border-b pb-4">
        <h1 className="text-3xl font-light uppercase tracking-widest">
          WMS <span className="font-bold">Express</span>
        </h1>
      </header>

      <DockList />
    </main>
  );
}