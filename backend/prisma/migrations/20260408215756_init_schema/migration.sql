-- CreateEnum
CREATE TYPE "Status" AS ENUM ('AVAILABLE', 'OCCUPIED', 'MAINTENANCE');

-- CreateTable
CREATE TABLE "Dock" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'AVAILABLE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargo" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "dockId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dock_code_key" ON "Dock"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_dockId_key" ON "Cargo"("dockId");

-- AddForeignKey
ALTER TABLE "Cargo" ADD CONSTRAINT "Cargo_dockId_fkey" FOREIGN KEY ("dockId") REFERENCES "Dock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
