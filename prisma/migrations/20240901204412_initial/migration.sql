-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "counterparty" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "regName" TEXT NOT NULL,
    "regCountry" TEXT NOT NULL,
    "regId" TEXT NOT NULL,
    "regAddr" TEXT NOT NULL,
    "bsnsAddr" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "bankAddr" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "accNum" TEXT NOT NULL,
    "swiftCode" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "accBen" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicationFile" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "applicationId" TEXT NOT NULL,

    CONSTRAINT "ApplicationFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Application_userId_key" ON "Application"("userId");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicationFile" ADD CONSTRAINT "ApplicationFile_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE CASCADE ON UPDATE CASCADE;
