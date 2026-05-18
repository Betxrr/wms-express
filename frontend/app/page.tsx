'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [docks, setDocks] = useState([])

  useEffect(() => {
    // Consome a API que você acabou de criar no NestJS (porta 3333)
    fetch('http://localhost:3333/docks')
      .then(res => res.json())
      .then(data => setDocks(data))
      .catch(err => console.error("Erro ao conectar com o Backend:", err))
  }, [])

  return (
    <main className="min-h-screen bg-white p-12 font-sans text-slate-900">
      <header className="mb-10 border-b pb-4">
        <h1 className="text-3xl font-light uppercase tracking-widest">
          WMS <span className="font-bold">Express</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {docks.length === 0 ? (
          <p className="text-slate-400">Nenhuma doca encontrada no sistema.</p>
        ) : (
          docks.map((dock: any) => (
            <div key={dock.id} className="border border-slate-200 p-6 rounded shadow-sm bg-slate-50">
              <h2 className="text-xl font-bold mb-2">{dock.code}</h2>
              <p className="text-sm text-slate-500">Status: 
                <span className="ml-2 font-semibold text-indigo-600">{dock.status}</span>
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  )
}