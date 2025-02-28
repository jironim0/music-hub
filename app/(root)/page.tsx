import { prisma } from "@/prisma/db";
import { Container, Content, Navigation } from "@/shared/components/shared";
import React from "react";


export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      items: true
    }
  });


  return (
    <>
      <Container className="">
        {/* <Navigation /> */}
        <Content categories={categories}/>
      </Container>
    </>
  );
}
