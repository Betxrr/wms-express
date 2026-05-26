type Dock = {
  id: string;
  code: string;
  status: 'AVAILABLE' | 'OCCUPIED' | 'MAINTENANCE';
};

const mockDocks: Dock[] = [
  { id: '1', code: 'DOCA-A1', status: 'AVAILABLE' },
  { id: '2', code: 'DOCA-B2', status: 'OCCUPIED' },
  { id: '3', code: 'DOCA-C3', status: 'MAINTENANCE' },
];

export function DockList() {
  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Gerenciamento de Docas</h2>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b">
            <th className="p-3">Codigo da Doca</th>
            <th className="p-3">Status Atual</th>
          </tr>
        </thead>
        <tbody>
          {mockDocks.map((dock) => (
            <tr key={dock.id} className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">{dock.code}</td>
              <td className="p-3">{dock.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}