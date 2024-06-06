-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "domainName" TEXT NOT NULL,
    "accountNumber" TEXT,
    "ifscCode" TEXT,
    "Address" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebinarFunnel" (
    "id" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "subHeading" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "workShopDate" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "buttonContent" TEXT NOT NULL,
    "cardSection" TEXT NOT NULL,
    "user" TEXT NOT NULL,

    CONSTRAINT "WebinarFunnel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_username_key" ON "Client"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Client_domainName_key" ON "Client"("domainName");

-- CreateIndex
CREATE UNIQUE INDEX "WebinarFunnel_user_key" ON "WebinarFunnel"("user");

-- AddForeignKey
ALTER TABLE "WebinarFunnel" ADD CONSTRAINT "WebinarFunnel_user_fkey" FOREIGN KEY ("user") REFERENCES "Client"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
