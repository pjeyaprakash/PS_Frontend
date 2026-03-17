'use client';
import { use } from "react";
import { product as protoproduct } from "@/proto/index";
import { protoGet } from '@/utils/protoAPI';
import { useEffect, useState } from 'react';
import CreateStock from "../create/page";



export default function EditPage({ params }) {
    const [item, setItem] = useState(null);

    const resolvedParams = use(params);
    const id = resolvedParams.id;

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const {product, variants} = await protoGet(`/product/${id}`, protoproduct.ProductResponse, controller)
        console.log("product", product, variants)
        if (!product) {}

        setItem({...product, variants})
      } catch (error) {
      if (error.name === "CanceledError" || error.code === "ERR_CANCELED") return;
      console.error(error);

      }
    })()
    return () => controller.abort()
  }, [id])

  if (!item) {
    return <div>Loading product data...</div>;
  }
  
  return (
      <CreateStock editItem={item} />
  );
}
