// InvoiceData.ts
interface BaseInvoice {
  id: number;
  name: string;
  phone?: string;
  email: string;
  cost?: number;
  date?: string;
}

interface Invoice extends BaseInvoice {
  gender?: string;
  paid?: number;
  remaining?: number;
}

const InvoiceData: Invoice[] = [
  {
    id: 1,
    name: "John Doe",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    cost: 100,
    date: "2024-01-05",
  },

];

interface FeeData extends BaseInvoice {
  gender: string;
  paid: number;
  remaining: number;
}

const FeeData: FeeData[] = [
  {
    id: 23,
    name: "Thierry",
    gender: "M",
    paid: 300,
    remaining: 4900,
    email: "trudaswa@gmail.com",
  
  },
  {
    id: 23,
    name: "Thierrye",
    gender: "M",
    paid: 300,
    remaining: 4900,
    email: "trudaswa@gmail.com",
  
  },
  {
    id: 23,
    name: "Thierrye",
    gender: "M",
    paid: 300,
    remaining: 4900,
    email: "trudaswa@gmail.com",
  
  },
  {
    id: 23,
    name: "Thierrye",
    gender: "M",
    paid: 300,
    remaining: 4900,
    email: "trudaswa@gmail.com",
  
  },
  {
    id: 23,
    name: "Thierrye",
    gender: "M",
    paid: 300,
    remaining: 4900,
    email: "trudaswa@gmail.com",
  
  },
  {
    id: 23,
    name: "Thierrye",
    gender: "M",
    paid: 300,
    remaining: 4900,
    email: "trudaswa@gmail.com",
  
  },
  {
    id: 23,
    name: "Thierrye",
    gender: "M",
    paid: 300,
    remaining: 4900,
    email: "trudaswa@gmail.com",
  
  },
  {
    id: 23,
    name: "Thierrye",
    gender: "M",
    paid: 300,
    remaining: 4900,
    email: "trudaswa@gmail.com",
  
  },
  {
    id: 23,
    name: "Thierrye",
    gender: "M",
    paid: 300,
    remaining: 4900,
    email: "trudaswa@gmail.com",
  
  },
  {
    id: 23,
    name: "Thierrye",
    gender: "M",
    paid: 300,
    remaining: 4900,
    email: "trudaswa@gmail.com",
  
  },
  
];

export { InvoiceData, FeeData };
