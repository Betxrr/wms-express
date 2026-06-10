'use client'; // Avisa o Next.js que este componente roda no navegador

import React, { useEffect, useState } from 'react';

// A mesma tipagem de antes
type Dock = {
  id: string;
  code: string;
  status: 'AVAILABLE' | 'OCCUPIED' | 'MAINTENANCE';
};

export function DockList() {
  // Cria um "estado" para guardar as docas que virão do backend
  const [docks, setDocks] = useState<Dock[]>([]);

  // O useEffect roda assim que a tela abre
  useEffect(() => {
    // Chama o garçom (Backend) pedindo a lista de docas
    fetch('http://localhost:3333/docks')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setDocks(dados); // Guarda as docas reais no estado da tela
      })
      .catch((erro) => console.error("Erro ao buscar docas:", erro));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gerenciamento de Docas</h2>
      
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-3">Código da Doca</th>
            <th className="p-3">Status Atual</th>
          </tr>
        </thead>
        <tbody>
          {/* Agora o .map usa os dados reais do backend! */}
          {docks.map((dock) => (
            <tr key={dock.id} className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">{dock.code}</td>
              <td className="p-3">{dock.status}</td>
            </tr>
          ))}
          {/* Mensagem caso não tenha docas cadastradas */}
          {docks.length === 0 && (
            <tr>
              <td colSpan={2} className="p-3 text-center text-gray-500">
                Nenhuma doca encontrada.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}